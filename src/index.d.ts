import { Observable } from 'tns-core-modules/data/observable';
import { WebView } from 'tns-core-modules/ui/web-view';

export declare class GeneratePdf extends Observable {
  private pageRenderer;
  private pdfData;
  constructor();
  createPdf(webView: WebView): void;
  generatePdfData(): void;
  saveWebViewPdf(): string;
}
