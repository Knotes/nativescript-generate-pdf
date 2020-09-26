import { Observable } from "tns-core-modules/data/observable";
import * as application from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";

export class GeneratePdf extends Observable {
  private pageRenderer: any;
  private pdfData: any;

  constructor() {
    super();
  }

  createPdf(webView: android.webkit.WebView) {
    const activity = application.android.foregroundActivity || application.android.startActivity
    const printManager = activity
      .getSystemService(android.content.Context.PRINT_SERVICE);
    const printAdapter = webView.createPrintDocumentAdapter();
    const jobName = utils.ad.resources.getStringId("app_name") + ' Document';

    if (printManager != null) {
      printManager.print(jobName, printAdapter, null);
    }
  }

  generatePdfData() { }

  saveWebViewPdf() {
    return ''
  }
}