
import { AppBase } from "../../vox/app/AppBase";
import { IApp } from "../../vox/app/IApp";
import { IDemoModule } from "./IDemoModule";

/**
 * mouse event module demo
 */
class DemoFPS extends AppBase implements IDemoModule{

    private m_initFlag: boolean = true;
    private m_module: IApp = null;
    private m_moduleFlag: boolean = true;

    constructor() {
        super();
    }

    private initFPSModuleLoad(): void {

        document.onmousedown = (evt: any): void => {

            if (this.m_moduleFlag) {
                this.m_moduleFlag = false;
                let moduleNS: string = "fps";
                this.getModuleInstance(
                    moduleNS,
                    (ins: any): void => {
                        this.m_module = ins;
                        console.log("get a fps ins");
                    }
                );
            }
            console.log("Mouse Event initFPSModuleLoad.");
        }
    }
    
    initialize(module: any): void {

        if (this.m_initFlag) {

            console.log("MouseEvent module initialize...");
            this.m_initFlag = false;
            this.initFPSModuleLoad();
        }
    }

    /**
     * running per frame
     */
    run(): void {

        if (this.m_module != null) this.m_module.run();
    }
}

export { DemoFPS };