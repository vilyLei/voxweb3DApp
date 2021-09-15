import { IApp } from "../vox/app/IApp";
import { AppBase } from "../vox/app/AppBase";
/**
 * A 3D APP Box view Demo
 */
class App extends AppBase implements IApp{

    private m_initFlag: boolean = true;
    constructor() { super() }

    initialize(module: any): void {

        if (this.m_initFlag) {
            console.log("oscillator module initilaize....");
        }
    }

    /**
     * running per frame
     */
    run(): void {

    }
    
    getModuleName():string {
        return "oscillator";
    }
    getModuleClassName():string {
        return "oscillatorApp";
    }
    getRuntimeType():string {
        return "default";
    }
}

export { App };