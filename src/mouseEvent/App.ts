import { AppBase } from "../vox/app/AppBase";
import { IApp } from "../vox/app/IApp";

import { IDemoModule } from "./IDemoModule";
import { DemoFPS } from "./DemoFPS";
import { DemoObjDataParser } from "./DemoObjDataParser";
import { DemoDraco } from "./DemoDraco";

/**
 * A 3D APP Box view Demo
 */
class App extends AppBase implements IApp {

    private m_initFlag: boolean = true;
    private m_currDemo: IDemoModule = null;

    constructor() {
        super();
    }
    initialize(module: any): void {

        if (this.m_initFlag) {

            console.log("MouseEvent module initialize...");
            this.m_initFlag = false;

            //this.m_currDemo = new DemoFPS();

            //this.m_currDemo = new DemoObjDataParser();

            this.m_currDemo = new DemoDraco();
            this.m_currDemo.initialize( module );
        }
    }

    /**
     * running per frame
     */
    run(): void {
        if(this.m_currDemo != null) {
            this.m_currDemo.run();
        }
    }

    getModuleName(): string {
        return "mouseEvent";
    }
    getModuleClassName(): string {
        return "mouseEventApp";
    }
    getRuntimeType(): string {
        return "default";
    }
}

export { App };