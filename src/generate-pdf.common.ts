import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';

export class Common extends Observable {
  public message: string;

  constructor() {
    super();
  }

  createPdf(wkWebView: WKWebView) {
    let originalBounds = wkWebView.bounds;
    wkWebView.bounds = CGRectMake(
      originalBounds.origin.x,
      originalBounds.origin.y,
      wkWebView.bounds.size.width,
      wkWebView.scrollView.contentSize.height
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
    printPageRenderer.addPrintFormatterStartingAtPageAtIndex(wkWebView.viewPrintFormatter(), 0);
    printPageRenderer.setValueForKey(NSValue.valueWithCGRect(pdfPageSize), 'paperRect');
    printPageRenderer.setValueForKey(NSValue.valueWithCGRect(pdfPageFrame), 'printableRect');
    wkWebView.bounds = originalBounds;
    this.saveWebViewPdf(this.generatePdfData(printPageRenderer));

  }

  generatePdfData(printPageRenderer: UIPrintPageRenderer) {
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
    return pdfData
  }

  saveWebViewPdf(data: NSMutableData) {
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

