import { Observable } from 'tns-core-modules/data/observable';

export class GeneratePdf extends Observable {
  private pageRenderer: UIPrintPageRenderer;
  private pdfData: NSMutableData;

  constructor() {
    super();
  }

  createPdf(webView: WKWebView, fileName: string) {
    const originalBounds = webView.bounds;
    webView.bounds = CGRectMake(
      originalBounds.origin.x,
      originalBounds.origin.y,
      webView.bounds.size.width,
      webView.scrollView.contentSize.height
    );
    const pdfPageSize = CGRectMake(
      0,
      0,
      612,
      792
    );
    const pdfPageFrame = CGRectMake(
      32,
      32,
      612 - 32 - 32,
      792 - 32 - 32
    );

    const printPageRenderer = new UIPrintPageRenderer();
    printPageRenderer.addPrintFormatterStartingAtPageAtIndex(webView.viewPrintFormatter(), 0);
    printPageRenderer.setValueForKey(NSValue.valueWithCGRect(pdfPageSize), 'paperRect');
    printPageRenderer.setValueForKey(NSValue.valueWithCGRect(pdfPageFrame), 'printableRect');
    webView.bounds = originalBounds;
    this.pageRenderer = printPageRenderer;

    this.generatePdfData();
    return this.saveWebViewPdf(fileName);
  }

  generatePdfData() {
    const printPageRenderer = this.pageRenderer;
    let pdfData = new NSMutableData({
      length: 10000
    });

    UIGraphicsBeginPDFContextToData(pdfData, printPageRenderer.paperRect, null)

    printPageRenderer.prepareForDrawingPages({
      location: 0, length: printPageRenderer.numberOfPages
    })
    const printRect = UIGraphicsGetPDFContextBounds()
    for (let pdfPage = 0; pdfPage < printPageRenderer.numberOfPages; pdfPage++) {
      UIGraphicsBeginPDFPage()
      printPageRenderer.drawPageAtIndexInRect(pdfPage, printRect)
    }

    UIGraphicsEndPDFContext();

    this.pdfData = pdfData;
  }

  saveWebViewPdf(fileName: string) {
    const paths = NSFileManager.defaultManager.URLsForDirectoryInDomains(NSSearchPathDirectory.DocumentDirectory, NSSearchPathDomainMask.UserDomainMask);
    const docDirectoryPath = paths[0];
    const pdfPath = docDirectoryPath.URLByAppendingPathComponent(`${fileName}.pdf`);
    if (this.pdfData.writeToFileAtomically(pdfPath.path, true)) {
      return pdfPath.path;
    } else {
      return '';
    }
  }
}
