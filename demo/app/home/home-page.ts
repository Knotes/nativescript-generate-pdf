import { GeneratePdf } from 'nativescript-generate-pdf';
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";

/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page, EventData } from "tns-core-modules/ui/page";

import { HomeViewModel } from "./home-view-model";

let webView: any;

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
}

export function onWebViewLoaded(args: LoadEventData) {
    webView = (<WebView>args.object).nativeView;
    new GeneratePdf().createPdf(webView);
}

export function onRefresh(args: LoadEventData) {
    alert('asdfa')
    webView.reload()
}
