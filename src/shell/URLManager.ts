

import { IApp } from "../vox/app/IApp";
class URLManager {

    private m_devTestEnv: boolean = true;
    private m_moduleEnabled: boolean = true;
    private m_appModuleName: string = "";
    private m_urlsObj: any = {};
    private m_moduleNameList: string[] = [
        "baseRenderer",
        "roFunctions"
    ];
    
    private m_moduleClassNameList: string[] = [
        "baseRenderer",
        "roFunctions"
    ];
    private m_loadIndex: number = 0;
    private m_loadedIndex: number = 0;
    constructor() { }
    
    setModuleNameAt(i: number, ns: string): void {
        this.m_moduleNameList[i] = ns;
    }
    setModuleClassNameAt(i: number, ns: string): void {
        this.m_moduleClassNameList[i] = ns;
    }
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
        if(this.m_urlsObj[ns] != null) {
            return this.m_urlsObj[ns];
        }
        let url: string = "static/code/engine/" + ns + ".js";
        return url;
    }
    useNext(): void {
        this.m_loadIndex ++;
    }
    
    private parseUrlParam(url: string): void {

        let params: string[] = url.split("?");
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
        let k: number = url.indexOf("runtimeApp");
        if(k > 0 && (k > 0 && url.indexOf("?") < k)) {
            moduleName = url.slice(k);
            params = moduleName.split("&");
            moduleName = params[0];
            this.m_appModuleName = moduleName.split("=")[1];
        }
    }
    initialize(appModule: IApp = null): IApp {
        
        this.m_moduleEnabled = false;
        this.m_appModuleName = "";
        let url: string = location.href + "";
        this.parseUrlParam( url );
        if(this.m_appModuleName == "") {
            if(appModule != null) {

                this.m_moduleEnabled = true;
                this.m_devTestEnv = true;
                this.m_appModuleName = "";
                return appModule;
            }
        }
        else {

            this.setModuleName( this.m_appModuleName );
            this.m_moduleEnabled = true;
            this.m_devTestEnv = (url.indexOf("/localhost") >= 0 || url.indexOf("127.0.0.") >= 0);
        }
        return null;
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