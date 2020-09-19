import { Observable } from "tns-core-modules/data/observable";
import * as fs from "tns-core-modules/file-system";

export class HomeViewModel extends Observable {
    public webViewSRC: string = encodeURI(`${fs.knownFolders.currentApp().path}/www/test.html`);

    constructor() {
        super();
        console.log('webViewSRC', this.webViewSRC);
    }
}
