import { Observable } from 'tns-core-modules/data/observable';
import * as application from 'tns-core-modules/application';

export class GeneratePdf extends Observable {
  private pageRenderer: any;
  private pdfData: any;

  constructor() {
    super();
  }

  createPdf(webView: android.webkit.WebView) {
    const printManager = application.android.context
      .getSystemService(android.content.Context.PRINT_SERVICE);
    const printAdapter = webView.createPrintDocumentAdapter();
    const jobName = "Print Test";

    const attributes = application.android.context.print.PrintAttributes.Builder()
      .setMediaSize(application.android.context.print.PrintAttributes.MediaSize.ISO_A4)
      .setResolution(application.android.context.print.PrintAttributes.Resolution("pdf", "pdf", 600, 600))
      .setMinMargins(application.android.context.print.PrintAttributes.Margins.NO_MARGINS).build()

    if (printManager != null) {
      printManager.print(jobName, printAdapter, attributes);
    }
  }

  generatePdfData() {
  }

  saveWebViewPdf() {
    return ''
  }
}