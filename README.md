# nativescript-generate-pdf

## Installation

```javascript
tns plugin add nativescript-generate-pdf
```

## Screenshot

|<img src="https://github.com/Knotes/nativescript-generate-pdf-with-html/blob/master/screenshots/ios.png?raw=true" width="320px" />|<img src="https://github.com/Knotes/nativescript-generate-pdf-with-html/blob/master/screenshots/android.png?raw=true" width="320px" />|

**[Generated pdf](https://github.com/Knotes/nativescript-generate-pdf-with-html/blob/master/screenshots/MyPdfFileName.pdf?raw=true)**

## Usage 

Check out the demo folder.

```TypeScript
import { GeneratePdf } from 'nativescript-generate-pdf';

function onWebViewLoaded(args: LoadEventData) {
    webView = (<WebView>args.object).nativeView;
    new GeneratePdf().createPdf(webView, 'MyPdfFileName');
}
```
    
## License

Apache License Version 2.0, January 2004
