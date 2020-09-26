import { Observable } from 'tns-core-modules/data/observable';
import { WebView } from 'tns-core-modules/ui/web-view';

export declare class GeneratePdf extends Observable {
  private pageRenderer;
  private pdfData;
  constructor();
  createPdf(webView: WebView, fileName: string): string;
  generatePdfData(): void;
  saveWebViewPdf(): string;
}
