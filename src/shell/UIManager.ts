

export class UIManager {

    private m_bodyDiv: HTMLDivElement = null;
    private m_buttonDiv: HTMLDivElement = null;
    private m_infoDiv: HTMLDivElement = null;
    private m_button: HTMLButtonElement = null;
    private m_btnInfoList: string[] = null;
    constructor() {
        this.initialize();
    }
    private elementCenter(ele: HTMLElement,top: string = "50%", left: string = "50%", position: string = "absolute"): void {        
        
        ele.style.textAlign = "center";
        ele.style.display = "flex";
        ele.style.flexDirection = "column";
        ele.style.justifyContent = "center";
        ele.style.alignItems = "center";
        // ele.style.top = top;
        // ele.style.left = left;
        // ele.style.position = position;
        // ele.style.transform = "translate(-50%, -50%)";
    }
    private initialize(): void {

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
        this.m_bodyDiv = document.createElement('div');
        this.m_bodyDiv.style.width = "100vw";
        this.m_bodyDiv.style.height = "100vh";
        this.elementCenter(this.m_bodyDiv);
        document.body.appendChild( this.m_bodyDiv );
        document.body.style.margin = '0';
        
        this.m_buttonDiv = document.createElement('div');
        this.m_buttonDiv.style.backgroundColor = "#aa0033";
        this.elementCenter(this.m_buttonDiv,"45%");

        this.m_bodyDiv.appendChild( this.m_buttonDiv );
    }
    enableButton(infoIndex: number, callBack: () => void): void {
        if(this.m_button == null) {
            this.m_button = document.createElement("button");            
            this.m_buttonDiv.appendChild( this.m_button );
        }
        this.m_button.innerText = this.m_btnInfoList[infoIndex];
        let btn: any = this.m_button;
        if(this.m_infoDiv != null)this.m_infoDiv.style.width = (btn.offsetWidth) + "px";
        
        this.m_button.onclick = ()=> {            
            callBack();
            this.disableButton();
        }
        
        this.m_button.disabled = false;
    }
    disableButton(): void {
        if(this.m_button != null) {
            this.m_button.disabled = true;
        }
    }
    
    private showInfo(str: string): void {

        if (this.m_infoDiv == null) {
            this.m_infoDiv = document.createElement('div');
            this.m_infoDiv.style.backgroundColor = "rgba(255,255,255,0.3)";
            let btn: any = this.m_button;
            this.m_infoDiv.style.color = "#0099cc";
            this.elementCenter(this.m_infoDiv);
            this.m_bodyDiv.appendChild(this.m_infoDiv);           
        }
        this.m_infoDiv.innerHTML = str;
    }
    showLoadProgressInfo(e: any): void {
        let str: string = " " + Math.round(100.0 * e.loaded / e.total) + "% ";
        this.showInfo(str);
    }
    
    showLoadStart(): void {
        this.showInfo("0%");
    }
    showLoaded(): void {
        this.showInfo("100%");
    }
    loadFinish(): void {
        if (this.m_bodyDiv != null){
            this.m_bodyDiv.parentElement.removeChild(this.m_bodyDiv);
            this.m_bodyDiv = null;
        }
    }

}