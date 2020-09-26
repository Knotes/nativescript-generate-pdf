# nativescript-generate-pdf

Generate pdf file with a webview and html. 

All you need to do is rendering your html with a webview and pass the webview to the plugin.

For iOS, plugin returns the path of the generated PDF. 

For Android, it brings up the printer screen where you can save as PDF (Please note the printer screen does not work in simulator, you will need a real device).

## Installation

```javascript
tns plugin add nativescript-generate-pdf
```

## Screenshot

<img src="https://github.com/Knotes/nativescript-generate-pdf-with-html/blob/master/screenshots/ios.png?raw=true" width="320px" /><img src="https://github.com/Knotes/nativescript-generate-pdf-with-html/blob/master/screenshots/android.png?raw=true" width="320px" />

**[>> Check out the generated pdf<<](https://github.com/Knotes/nativescript-generate-pdf-with-html/blob/master/screenshots/MyPdfFileName.pdf)**

## Usage 

Check out the demo folder.

```TypeScript
import { GeneratePdf } from 'nativescript-generate-pdf';

function onWebViewLoaded(args: LoadEventData) {
    webView = (<WebView>args.object).nativeView;
    // For iOS, use the file path returned by createPdf.
    new GeneratePdf().createPdf(webView, 'MyPdfFileName');
}
```
    
## License

Apache License Version 2.0, January 2004
