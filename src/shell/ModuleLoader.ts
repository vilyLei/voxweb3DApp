
export class CodeModule {

    private m_status: number = 0;

    private m_name: string = "";
    private m_className: string = "";
    private m_url: string = "";

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
    constructor() { }

    load(purl: string, loadedFunc: () => void, name: string, className: string): void {

        let block: CodeModule = null;
        if (this.m_moduleMap.has(name)) {
            block = this.m_moduleMap.get(name);
            if(block.getStatus() == 2) {
                loadedFunc();
            }
            return;
        }
        console.log("loadJSModule, purl: ", purl);
        block = new CodeModule(0, name, className, purl);
        this.m_moduleMap.set(name, block);

        let codeLoader: XMLHttpRequest = new XMLHttpRequest();
        codeLoader.open("GET", purl, true);
        //xhr.responseType = "arraybuffer";
        codeLoader.onerror = function (err) {
            console.error("load error: ", err);
        }

        codeLoader.onprogress = (e) => {
            this.showLoadInfo(" " + Math.round(100.0 * e.loaded / e.total) + "% ");
        };
        codeLoader.onload = () => {

            let scriptEle: HTMLScriptElement = document.createElement("script");
            scriptEle.onerror = (e) => {
                console.error("module script onerror, e: ", e);
            }
            scriptEle.innerHTML = codeLoader.response;
            document.head.appendChild(scriptEle);

            let block = new CodeModule(2, name, className, purl);
            this.m_moduleMap.set(name, block);

            //this.loadedMana(module_ns, codeLoader, className);
            loadedFunc();
        }
        codeLoader.send(null);
    }
    private m_div: any = null;
    private showLoadInfo(str: string): void {
        if (this.m_div == null) {

            var div: HTMLDivElement = document.createElement('div');
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
    loadFinish(): void {
        if (this.m_div != null) document.body.removeChild(this.m_div);
    }
}