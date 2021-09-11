
import { IApp } from "../../vox/app/IApp";
import {App} from "../App";
import {URLManager} from "../URLManager";
import {ModuleLoader} from "../ModuleLoader";
import {UIManager} from "../UIManager";

var pwindow: any = window;
if(pwindow["VoxCore"] == undefined) {
    pwindow["VoxCore"] = {};
}

export class Shell {

    private m_inited: boolean = true;
    private m_module: any = null;
    private m_loadFlag: boolean = true;
    
    private m_moduleInsList: any[] = [];
    private m_urlManager: URLManager= new URLManager();
    private m_moduleLoader: ModuleLoader= new ModuleLoader();
    private m_uiManager: UIManager= new UIManager();
    private m_appIns: App = new App();
    constructor() { }

    private loadJSModule(module_ns:string, purl: string, className: string): void {
        console.log("loadJSModule, purl: ",purl);
        this.m_moduleLoader.load(
            purl,
            () => {
                this.loadedMana(module_ns, className);
            },
            module_ns,
            className
        );
    }

    private loadedMana(module_ns: string, className: string): void {

        this.m_urlManager.loaded();
        let pwindow: any = window;
        var VoxCore = pwindow.VoxCore;
        console.log("module build success, module name: ",module_ns);
        if(module_ns == "baseRenderer") {
        }
        else if (VoxCore[className] != null) {
            console.log("module class name: ",className);
            
            let noduleIns = new VoxCore[className]();
            this.m_moduleInsList.push( noduleIns );
            let initEnabled: boolean = this.m_urlManager.isLoadFinish();
            if( initEnabled ) {
                this.initModules(VoxCore);
            }
        }
        
        this.m_loadFlag = true;

        if(this.m_urlManager.isDevEnvironment()) {
            this.loadNextModule();
        }
        else {
            this.showButton();
        }
    }
    private showButton(): void {

        this.m_uiManager.enableButton(
            this.m_urlManager.getIndex(),
            () => {
                this.loadNextModule();
            }
        );
    }
    private initModules(module: any): void {

        this.m_moduleLoader.loadFinish();

        if(this.m_appModule != null) {
            this.m_moduleInsList.push( this.m_appModule );
        }
        
        let mainModule = new module["BaseRenderer"]();
        mainModule.initialize();
        module["mainModule"] = mainModule;
        this.m_module = mainModule;

        let Engine:any = module["VoxAppEngine"];
        if(Engine != null) {
            Engine.InitializeModule( module );
        }
        for(let i: number = 0; i < this.m_moduleInsList.length; ++i) {
            this.m_moduleInsList[i].initialize( module );
        }
    }
    private m_appModule: IApp = null;
    initialize(appModule: IApp = null): void {
        if(this.m_inited) {
            this.m_appModule = appModule;
            this.m_inited = false;
            console.log("location.href: ",location.href);
            console.log("Shell::initialize()......navigator.language: ",navigator.language);
            
            this.m_urlManager.initialize(appModule);
            if(this.m_urlManager.isModuleEnabled()) {
                
                var VoxCore = pwindow["VoxCore"];
                VoxCore["voxAppModuleLoader"] = this.m_moduleLoader;
                this.initConfigure();
            }

        }
    }
    private initConfigure(): void {

        if(this.m_urlManager.isDevEnvironment()) {
            this.loadNextModule();
        }
        else {
            this.showButton();
        }
    }
    private loadNextModule(): void {
        if(this.m_urlManager.isLoadEnabled() && this.m_loadFlag) {
            this.m_loadFlag = false;
            let module_ns: string = this.m_urlManager.getModuleName();
            let className: string = this.m_urlManager.getModuleClassName();
            let url:string = this.m_urlManager.getModuleUrl();
            this.m_urlManager.useNext();
            this.loadJSModule( module_ns,  url, className);
        }
    }

    run(): void {

        if(this.m_module != null) {
            if(this.m_moduleInsList.length > 1) {
                for(let i: number = 0; i < this.m_moduleInsList.length; ++i) {
                    this.m_moduleInsList[i].run();
                }
            }
        }
    }
}
export default Shell;