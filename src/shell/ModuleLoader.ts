import { IApp } from "../vox/app/IApp";
import {ModuleManager} from "./ModuleManager";
import {UIManager} from "./UIManager";
export class CodeModule {

    private m_status: number = 0;

    private m_name: string = "";
    private m_className: string = "";
    private m_url: string = "";

    callbackList: (() => void)[] = [];

    constructor(status: number, name: string, className: string, url: string) {
        this.m_status = status;
        this.m_name = name;
        this.m_className = className;
        this.m_url = url;
    }

    getName(): string {
        return this.m_name;
    }
    getClassName(): string {
        return this.m_className;
    }
    getUrl(): string {
        return this.m_url;
    }
    getStatus(): number {
        return this.m_status;
    }
}

export class ModuleLoader {

    private m_moduleMap: Map<string, CodeModule> = new Map();
    private m_moduleManager: ModuleManager;
    private m_uiManager: UIManager;

    constructor(moduleManager: ModuleManager, uiManager: UIManager) {
        this.m_moduleManager = moduleManager;
        this.m_uiManager = uiManager;
    }
    getSystemModuleInstance(name: string, loadedFunc: () => void = null): IApp {

        if(this.m_moduleManager.testSystemModuleByName( name )) {

            if (this.m_moduleMap.has(name)) {
                if(loadedFunc != null) loadedFunc();
            }
            else {
                this.load(this.m_moduleManager.getModuleUrlByName(name), loadedFunc, name, name);
            }
        }
        return null;
    }
    
    getModuleInstance(name: string, loadedFunc: () => void = null): IApp {

        if(this.m_moduleManager.testSystemModuleByName( name )) {

            if (this.m_moduleMap.has(name)) {
                if(loadedFunc != null) loadedFunc();
                return this.m_moduleManager.getSystemModuleInstance( name );
            }
            else {
                this.load(this.m_moduleManager.getModuleUrlByName(name), loadedFunc, name, name);
            }
        }
        else {
            if (this.m_moduleMap.has(name)) {
                if(loadedFunc != null) loadedFunc();
            }
            else {
                this.load("static/code/apps/modules/"+name+".js", loadedFunc, name, name+"App");
            }
        }
        return null;
    }
    hasModuleByName(name: string): boolean {
        
        if (this.m_moduleMap.has(name)) {
            let block: CodeModule = this.m_moduleMap.get(name);
            return block.getStatus() == 2;
        }
        return false;
    }
    load(purl: string, loadedFunc: () => void, name: string, className: string): void {

        let block: CodeModule = null;
        if (this.m_moduleMap.has(name)) {
            block = this.m_moduleMap.get(name);
            if(block.getStatus() == 2) {
                loadedFunc();
            }
            else {
                block.callbackList.push( loadedFunc );
            }
            return;
        }
        console.log("loadJSModule, purl: ", purl);
        block = new CodeModule(0, name, className, purl);
        block.callbackList.push( loadedFunc );
        this.m_moduleMap.set(name, block);

        this.m_uiManager.showLoadStart();
        let codeLoader: XMLHttpRequest = new XMLHttpRequest();
        codeLoader.open("GET", purl, true);
        //xhr.responseType = "arraybuffer";
        codeLoader.onerror = function (err) {
            console.error("load error: ", err);
        }

        codeLoader.onprogress = (e) => {
            this.showLoadInfo(e);
        };
        codeLoader.onload = () => {
            
            this.m_uiManager.showLoaded();

            let scriptEle: HTMLScriptElement = document.createElement("script");
            scriptEle.onerror = (e) => {
                console.error("module script onerror, e: ", e);
            }
            scriptEle.innerHTML = codeLoader.response;
            document.head.appendChild(scriptEle);

            //if(this.m_moduleManager.testSystemModuleByName(name)) {
            this.m_moduleManager.createSystemModuleInstanceByName( name );
            //}

            let block = this.m_moduleMap.get(name);
            for(let i: number = 0; i < block.callbackList.length; i++) {
                if(block.callbackList[i] != null)(block.callbackList[i])();
            }
            block.callbackList = [];
            block = new CodeModule(2, name, className, purl);
            this.m_moduleMap.set(name, block);
        }
        codeLoader.send(null);
    }
    private showLoadInfo(e: any): void {
        console.log("showLoadInfo e:",e);
        this.m_uiManager.showLoadProgressInfo(e);
    }
    loadFinish(): void {
        this.m_uiManager.loadFinish();
    }
}