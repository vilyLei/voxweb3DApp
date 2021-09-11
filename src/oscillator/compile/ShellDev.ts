
import {App} from "../App";
export class ShellDev {

    private m_inited: boolean = true;
    private m_module: any = null;
    private m_loadFlag: boolean = true;
    private m_className: string = "";
    private m_noduleInsList: any[] = [];
    private m_urlsObj: any = {
        "baseRenderer": "static/code/engine/baseRenderer.js",
        "rfuncs": "static/code/engine/rfuncs.js",
        "oscillator": "static/code/apps/demos/oscillator.js"
    };
    private m_moduleNameList: string[] = [
        "baseRenderer",
        "rfuncs",
        "oscillator"
    ];
    
    private m_moduleClassNameList: string[] = [
        "BaseRenderer",
        "ROFunctions",
        "oscillatorApp"
    ];
    private m_btnInfoList: string[] = null;
    private m_devTestEnv: boolean = false;
    private m_appIns: App = new App();
    private m_button: any = null;
    constructor() { }
    
    private initLoadJS(module_ns:string): void {

        let codeLoader: XMLHttpRequest = new XMLHttpRequest();
        codeLoader.open("GET", this.m_urlsObj[module_ns], true);
        //xhr.responseType = "arraybuffer";
        codeLoader.onerror = function (err) {
            console.error("load error: ", err);
        }

        codeLoader.onprogress = (e) => {            
            if(!this.m_devTestEnv) {
                this.showInfo(" " + Math.round(100.0 * e.loaded / e.total) + "% ");
            }
        };

        codeLoader.onload = () => {

            console.log("module file load success.....");
            let scriptEle: HTMLScriptElement = document.createElement("script");

            scriptEle.onerror = (e) => {
                console.log("module script onerror, e: ", e);
            }

            scriptEle.innerHTML = codeLoader.response;
            document.head.appendChild(scriptEle);
            let pwindow: any = window;
            var VoxCore = pwindow.VoxCore;
            console.log("module build success, module name: ",module_ns);
            if(module_ns == "baseRenderer") {
            }
            else if (VoxCore[this.m_className] != null) {
                console.log("module class name: ",this.m_className);
                let noduleIns = new VoxCore[this.m_className]();
                console.log("module noduleIns: ",noduleIns);
                this.m_noduleInsList.push(noduleIns);
                let initEnabled: boolean = this.m_devTestEnv ? (this.m_moduleNameList.length < 2) : (this.m_moduleNameList.length < 1);

                if( initEnabled ) {
                    if(this.m_devTestEnv && this.m_moduleNameList.length == 1) {
                        this.m_noduleInsList.push( this.m_appIns );
                    }
                    this.initModules(VoxCore);
                    return;
                }
            }
            
            this.m_loadFlag = true;

            if(this.m_button != null) {
                this.m_button.innerText = this.m_btnInfoList.shift();
                document.body.appendChild( this.m_button );
            }
            else {
                this.loadNextModule();
            }
        }
        codeLoader.send(null);
    }
    private initModules(module: any): void {

        if(this.m_div != null)document.body.removeChild(this.m_div);
        let mainModule = new module["BaseRenderer"]();
        mainModule.initialize();
        module["mainModule"] = mainModule;
        this.m_module = mainModule;

        let Engine:any = module["VoxAppEngine"];
        if(Engine != null) {
            Engine.InitializeModule( module );
        }
        for(let i: number = 0; i < this.m_noduleInsList.length; ++i) {
            this.m_noduleInsList[i].initialize( module );
        }
    }
    initialize(pmodule: any): void {
        console.log("location.href: ",location.href);
        let str: string = location.href + "";
        this.m_devTestEnv = (str.indexOf("/localhost") >= 0 || str.indexOf("127.0.0.") >= 0);
        if(!this.m_devTestEnv) {
            this.m_button = document.createElement('button');
        }
        if ( this.m_inited ) {
            this.m_inited = false;

            console.log("ShellDev::initialize()......navigator.language: ",navigator.language);
            if(navigator.language == "zh-CN") {

                this.m_btnInfoList = [
                    "加载渲染器核心",
                    "加载基础功能 ",
                    "加载测试用例"
            ];
            }
            else {
                this.m_btnInfoList = [
                        "load renderer core",
                        "load base functions",
                        "load test exmaple"
                ];
            }
            document.body.style.background = "#000000";

            if(this.m_button != null) {
                this.m_button.id = "button";
                this.m_button.innerText = this.m_btnInfoList.shift();
                this.m_button.onclick = ()=> {
                    this.loadNextModule();
                    document.body.removeChild( this.m_button );
                }
                document.body.appendChild( this.m_button );
            }
            else {
                this.loadNextModule();
            }
        }
    }
    private m_div: any = null;
    private showInfo(str:string): void {
        if(this.m_div == null) {

            var div: HTMLDivElement = document.createElement('div');
            //div.style.color = "";
            var pdiv: any = div;
            this.m_div = pdiv;
            pdiv.width = 128;
            pdiv.height = 64;
            pdiv.style.backgroundColor = "#aa0033";
            pdiv.style.left = '10px';
            pdiv.style.top = '50px';
            pdiv.style.position = 'absolute';
            document.body.appendChild(this.m_div);
        }
        this.m_div.innerHTML = str;
    }
    private loadNextModule(): void {

        if(this.m_moduleNameList.length > 0 && this.m_loadFlag) {

            this.m_loadFlag = false;

            let module_ns: string = this.m_moduleNameList.shift();
            this.m_className = this.m_moduleClassNameList.shift();

            console.log("start load module name: ", module_ns);
            console.log("start load class name: ", this.m_className);

            this.initLoadJS( module_ns );
        }
    }

    run(): void {

        if(this.m_module != null) {
            if(this.m_noduleInsList.length > 1) {
                //console.log("this.m_noduleInsList.length: ",this.m_noduleInsList.length);
                for(let i: number = 0; i < this.m_noduleInsList.length; ++i) {
                    this.m_noduleInsList[i].run();
                }
                //this.m_module.run();
            }
        }
    }
}
export default ShellDev;