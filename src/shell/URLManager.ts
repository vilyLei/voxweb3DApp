

import { IApp } from "../vox/app/IApp";
class URLManager {

    private m_devTestEnv: boolean = true;
    private m_moduleEnabled: boolean = true;
    private m_appModuleName: string = "";
    private m_urlsObj: any = {
        "baseRenderer": "static/code/engine/baseRenderer.js",
        "rfuncs": "static/code/engine/rfuncs.js"
    };
    private m_moduleNameList: string[] = [
        "baseRenderer",
        "rfuncs"
    ];
    
    private m_moduleClassNameList: string[] = [
        "BaseRenderer",
        "ROFunctions"
    ];
    private m_loadIndex: number = 0;
    private m_loadedIndex: number = 0;
    constructor() { }

    getIndex(): number {
        return this.m_loadIndex;
    }
    loaded(): void {
        this.m_loadedIndex ++;
    }
    isLoadEnabled(): boolean {
        return this.m_loadIndex < this.m_moduleNameList.length;
    }
    isLoadFinish(): boolean {
        return this.m_loadedIndex >= this.m_moduleNameList.length;
    }
    getModuleName(): string {
        return this.m_moduleNameList[this.m_loadIndex];
    }
    getModuleClassName(): string {
        return this.m_moduleClassNameList[this.m_loadIndex];
    }
    getModuleUrl(): string {
        let ns: string = this.m_moduleNameList[this.m_loadIndex];
        return this.m_urlsObj[ns];
    }
    useNext(): void {
        this.m_loadIndex ++;
    }

    initialize(appModule: IApp = null): void {
        if(appModule != null) {
            this.m_moduleEnabled = true;
            this.m_devTestEnv = true;
            return;
        }
        this.m_moduleEnabled = false;
        let str: string = location.href + "";
        let params: string[] = str.split("?");
        if(params.length < 2) {
            return;
        }
        let moduleName: string = params[1];
        params = moduleName.split("=");
        if(params.length < 2 || !(params[0] == "sample" || params[0] == "demo")) {
            return;
        }
        this.m_appModuleName = params[1];
        if(this.m_appModuleName == "") {
            return;
        }
        let k: number = str.indexOf("runtimeApp");
        if(k < 0 || (k > 0 && str.indexOf("?") < k)) {
            moduleName = str.slice(k);
            params = moduleName.split("&");
            moduleName = params[0];
            this.m_appModuleName = moduleName.split("=")[1];
        }
        this.setModuleName( this.m_appModuleName );
        this.m_moduleEnabled = true;
        this.m_devTestEnv = (str.indexOf("/localhost") >= 0 || str.indexOf("127.0.0.") >= 0);
    }
    isModuleEnabled(): boolean {
        return this.m_moduleEnabled;
    }
    isDevEnvironment(): boolean {
        //return false;
        return this.m_devTestEnv;
    }
    getAppModuleName(): string {
        return this.m_appModuleName;
    }
    private setModuleName(name: string): void {
        this.m_urlsObj[name] = "static/code/apps/demos/"+name+".js";
        this.m_moduleNameList.push(name);
        this.m_moduleClassNameList.push(name+"App");
    }
}

export { URLManager };