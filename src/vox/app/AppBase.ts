
import { IModuleLoader } from "../../vox/app/module/IModuleLoader";

/**
 * A 3D APP Box view Demo
 */
class AppBase {
    private m_running: boolean = true;
    constructor() { }

    protected getSystemModuleInstance(moduleNS: string, loadedFunc: (ins: any) => void = null): any {

        let pwindow: any = window;
        var VoxCore = pwindow["VoxCore"];
        let loader: IModuleLoader = VoxCore["voxAppModuleLoader"] as IModuleLoader;
        return loader.getSystemModuleInstance(
            moduleNS,
            ():void=>{
                let ins: any = VoxCore[moduleNS + "Ins"];
                if(loadedFunc != null) {
                    loadedFunc( ins );
                }
            }
        );
    }
    
    protected getModuleInstance(moduleNS: string, loadedFunc: (ins: any) => void = null, param: any = null): any {

        let pwindow: any = window;
        var VoxCore = pwindow["VoxCore"];
        let loader: IModuleLoader = VoxCore["voxAppModuleLoader"] as IModuleLoader;
        return loader.getModuleInstance(
            moduleNS,
            ():void=>{
                let ins: any;
                if(param != null) {
                    ins = new VoxCore[moduleNS + "App"]( param );
                }
                else {
                    ins = new VoxCore[moduleNS + "App"]();
                }
                ins.initialize(VoxCore);
                if(loadedFunc != null) {
                    loadedFunc( ins );
                }
            }
        );
    }
    
    startup(): void {
        this.m_running = true;
    }
    quit(): void {
        this.m_running = false;
    }
    isRunning(): boolean {
        return this.m_running;
    }
}

export { AppBase };