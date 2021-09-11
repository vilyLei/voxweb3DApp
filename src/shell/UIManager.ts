

export class UIManager {

    private m_button: any = null;
    private m_btnInfoList: string[] = null;
    constructor() {
        this.initialize();
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
    }
    enableButton(infoIndex: number, callBack: () => void): void {
        if(this.m_button == null) {
            this.m_button = document.createElement('button');
        }
        this.m_button.innerText = this.m_btnInfoList[infoIndex];
        this.m_button.onclick = ()=> {            
            callBack();
            this.disableButton();
        }
        document.body.appendChild( this.m_button );
    }
    disableButton(): void {
        if(this.m_button != null) {
            document.body.removeChild( this.m_button );
        }
    }

}