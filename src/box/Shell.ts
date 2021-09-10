

export class Shell {

    private m_inited: boolean = true;
    private m_module: any = null;
    private m_loadFlag: boolean = true;
    private m_className: string = "";
    private m_noduleInsList: any[] = [];

    private m_urlsObj: any = {
        "baseRenderer": "static/code/engine/baseRenderer.js",
        "rfuncs": "static/code/engine/rfuncs.js",
        "box": "static/code/apps/demos/box.js"
    };
    private m_moduleNameList: string[] = [
        "baseRenderer",
        "rfuncs",
        "box"
    ];
    
    private m_moduleClassNameList: string[] = [
        "BaseRenderer",
        "ROFunctions",
        "boxApp"
    ];
    private m_btnInfoList: string[] = null;
    private m_devTestEnv: boolean = false;
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
            this.showInfo(" " + Math.round(100.0 * e.loaded / e.total) + "% ");
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
            var VoxCore: any = pwindow.VoxCore;
            console.log("module build success: ",module_ns);
            if(module_ns == "baseRenderer") {
                //console.log("pwindow.VoxCore: ", pwindow.VoxCore);
            }
            else if (VoxCore[this.m_className] != null) {
                console.log("module class name: ",this.m_className);
                let noduleIns = new VoxCore[this.m_className]();
                //console.log("module noduleIns: ",noduleIns);
                this.m_noduleInsList.push(noduleIns);

                if(this.m_moduleNameList.length < 1) {
                    
                    document.body.removeChild(this.m_div);
                    let mainModule = new VoxCore["BaseRenderer"]();
                    mainModule.initialize();
                    VoxCore["mainModule"] = mainModule;
                    this.m_module = mainModule;
                    
                    let Engine:any = VoxCore["VoxAppEngine"];
                    if(Engine != null) {
                        Engine.InitializeModule( VoxCore );
                    }
                    else {
                        console.error("VoxAppEngine is undefined.");
                    }
                    for(let i: number = 0; i < this.m_noduleInsList.length; ++i) {
                        this.m_noduleInsList[i].initialize( VoxCore );
                    }
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
    initialize(pmodule: any): void {
        let str: string = location.href + "";
        this.m_devTestEnv = (str.indexOf("/localhost") >= 0 || str.indexOf("127.0.0.") >= 0);
        if(!this.m_devTestEnv) {
            this.m_button = document.createElement('button');
        }
        if ( this.m_inited ) {
            this.m_inited = false;

            console.log("Shell::initialize()......navigator.language: ",navigator.language);
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

                for(let i: number = 0; i < this.m_noduleInsList.length; ++i) {
                    this.m_noduleInsList[i].run();
                }
                this.m_module.run();
            }
        }
    }
}
export default Shell;