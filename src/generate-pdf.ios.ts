import { Observable } from 'tns-core-modules/data/observable';

export class GeneratePdf extends Observable {
  private pageRenderer: UIPrintPageRenderer;
  private pdfData: NSMutableData;

  constructor() {
    super();
  }

  createPdf(webView: WKWebView) {
    let originalBounds = webView.bounds;
    webView.bounds = CGRectMake(
      originalBounds.origin.x,
      originalBounds.origin.y,
      webView.bounds.size.width,
      webView.scrollView.contentSize.height
    );
    let pdfPageSize = CGRectMake(
      0,
      0,
      612,
      792
    );
    let pdfPageFrame = CGRectMake(
      32,
      32,
      612 - 32 - 32,
      792 - 32 - 32
    );
    let printPageRenderer = new UIPrintPageRenderer();
    printPageRenderer.addPrintFormatterStartingAtPageAtIndex(webView.viewPrintFormatter(), 0);
    printPageRenderer.setValueForKey(NSValue.valueWithCGRect(pdfPageSize), 'paperRect');
    printPageRenderer.setValueForKey(NSValue.valueWithCGRect(pdfPageFrame), 'printableRect');
    webView.bounds = originalBounds;
    this.pageRenderer = printPageRenderer;
    this.generatePdfData();
    this.saveWebViewPdf();
  }

  generatePdfData() {
    let printPageRenderer = this.pageRenderer;
    let pdfData = new NSMutableData({
      length: 10000
    });
    UIGraphicsBeginPDFContextToData(pdfData, printPageRenderer.paperRect, null)
    new NSRange()
    printPageRenderer.prepareForDrawingPages({
      location: 0, length: printPageRenderer.numberOfPages
    })
    let printRect = UIGraphicsGetPDFContextBounds()
    for (let pdfPage = 0; pdfPage < printPageRenderer.numberOfPages; pdfPage++) {
      UIGraphicsBeginPDFPage()
      printPageRenderer.drawPageAtIndexInRect(pdfPage, printRect)
    }
    UIGraphicsEndPDFContext();
    console.log('pdfData', pdfData);
    // return pdfData
    this.pdfData = pdfData;
  }

  saveWebViewPdf() {
    let data = this.pdfData;
    let paths = NSFileManager.defaultManager.URLsForDirectoryInDomains(NSSearchPathDirectory.DocumentDirectory, NSSearchPathDomainMask.UserDomainMask)
    let docDirectoryPath = paths[0]
    let pdfPath = docDirectoryPath.URLByAppendingPathComponent('webViewPdf.pdf')
    if (data.writeToFileAtomically(pdfPath.path, true)) {
      console.log('success:', pdfPath.path)
      return pdfPath.path
    } else {
      console.log('fail:')
      return ""
    }
  }
}
