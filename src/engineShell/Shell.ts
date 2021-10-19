
import { IApp } from "../vox/app/IApp";
import {URLManager} from "./URLManager";
import {ModuleManager} from "./ModuleManager";
import {ModuleLoader} from "./ModuleLoader";
import {UIManager} from "./UIManager";

var pwindow: any = window;
if(pwindow["VoxCore"] == undefined) {
    pwindow["VoxCore"] = {};
}
if(pwindow["VoxIns"] == undefined) {
    pwindow["VoxIns"] = {};
}

export class Shell {

    private m_inited: boolean = true;
    private m_module: any = null;
    private m_loadFlag: boolean = true;
    private m_moduleManager: ModuleManager = null;
    private m_urlManager: URLManager= new URLManager();
    private m_moduleLoader: ModuleLoader;
    private m_uiManager: UIManager= new UIManager();
    constructor() { }
    
    private loadJSModule(module_ns:string, purl: string, className: string): void {
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
        console.log("module build success, module name,className: ",module_ns,className, "VoxCore[className] != null: ",VoxCore[className] != null);
        if(module_ns != "engine" && VoxCore[className] != null) {

            let noduleIns: IApp = new VoxCore[className]() as IApp;            
            this.m_moduleManager.addSystemModule( noduleIns, module_ns );
        }
        let initEnabled: boolean = this.m_urlManager.isLoadFinish();
        console.log("XXX initEnabled: ",initEnabled);
        if( initEnabled ) {
            this.initModules(VoxCore);
        }
        
        this.m_loadFlag = true;

        if(this.m_urlManager.isDevEnvironment()) {
            this.loadNextModule();
        }
        else {
            this.activeLoad();
        }
    }
    private activeLoad(): void {

        this.m_uiManager.enableButton(
            this.m_urlManager.getIndex(),
            () => {
                this.loadNextModule();
            }
        );
    }
    private initModules(module: any): void {

        this.m_moduleLoader.loadFinish();

        
        let Engine:any = module["VoxAppEngine"];
        Engine.InitializeClass();

        let mainModule = new module["vox3DEngine"]();
        if(this.m_appModule != null) {
            mainModule.setParam( this.m_appModule.getRendererParam() );
        }
        mainModule.initialize(module);
        module["mainModule"] = mainModule;
        this.m_module = mainModule;
        if(Engine != null) {
            Engine.Initialize();
        }
        this.m_moduleManager.initializeModules();
        console.log("this.m_appModule != null: ",this.m_appModule != null);
        if(this.m_appModule != null) {
            //this.m_sysModules.push( this.m_appModule );
            this.m_moduleManager.addSystemModule( this.m_appModule, this.m_appModule.getModuleName(), true );
        }
    }
    private m_appModule: IApp = null;

    initialize(appModule: IApp = null): void {
        if(this.m_inited) {
            
            var VoxCore = pwindow["VoxCore"];
            this.m_moduleManager = new ModuleManager( VoxCore );
            this.m_moduleLoader = new ModuleLoader( this.m_moduleManager, this.m_uiManager );
            this.m_inited = false;
            console.log("location.href: ",location.href);
            console.log("Shell::initialize()......navigator.language: ",navigator.language);
            
            this.m_appModule = this.m_urlManager.initialize(appModule);
            if(this.m_urlManager.isModuleEnabled()) {
                
                VoxCore["voxAppModuleLoader"] = this.m_moduleLoader;
                this.initConfigure();
            }

        }
    }
    
    setModuleNameAt(i: number, ns: string): void {
        this.m_urlManager.setModuleNameAt(i, ns);
    }
    setModuleClassNameAt(i: number, ns: string): void {
        this.m_urlManager.setModuleClassNameAt(i, ns);
    }
    private initConfigure(): void {

        if(this.m_urlManager.isDevEnvironment()) {
            this.loadNextModule();
        }
        else {
            this.activeLoad();
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
            let modules: IApp[] = this.m_moduleManager.getSystemModules();
            let len: number = modules.length;
            for(let i: number = 0; i < len; ++i) {
                modules[i].run();
            }
        }
    }
}
export default Shell;