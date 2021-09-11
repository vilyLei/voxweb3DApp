import { IApp } from "../vox/app/IApp";
/**
 * A 3D APP Box view Demo
 */
class App implements IApp{

    private m_initFlag: boolean = true;
    constructor() { }

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