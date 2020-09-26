import { Observable } from "tns-core-modules/data/observable";
import * as fs from "tns-core-modules/file-system";
import * as permissions from "nativescript-permissions";
import { isIOS } from "tns-core-modules/platform";
import { html } from "./html";

export class HomeViewModel extends Observable {
    public webViewSRC: string;

    constructor() {
        super();
        this.webViewSRC = this.getHtmlPath();
        console.log('webViewSRC', this.webViewSRC);
    }

    getHtmlPath() {
        if (isIOS) {
            return encodeURI(`${fs.knownFolders.currentApp().path}/www/test.html`);
        } else {
            permissions.requestPermission([
                android.Manifest.permission.READ_EXTERNAL_STORAGE,
                android.Manifest.permission.WRITE_EXTERNAL_STORAGE
            ], 'Need to save files to disk');
            const htmlFile = fs.knownFolders.temp().getFile("index.html");
            htmlFile.writeTextSync(html);
            return htmlFile.path;
        }
    }
}
