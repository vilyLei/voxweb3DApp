
import { IApp } from "../../vox/app/IApp";
import { AppBase } from "../../vox/app/AppBase";
import { ThreadSystemModule } from "./core/ThreadSystemModule";
import { ThreadSystemTask } from "../../vox/engine/thread/ThreadSystemTask";
import { DracoTaskListener } from "../../vox/engine/draco/DracoTaskListener";
import { DracoMeshRawBuilder } from "./draco/DracoMeshRawBuilder";

//  import { DeomScene } from "./DeomScene";

/**
 * draco module
 */
class App extends AppBase implements IApp {

    private m_initFlag: boolean = true;

    private m_threadModule: ThreadSystemModule = null;
    private m_threadModuleLoadFlag: boolean = true;
    private m_dracoRawTask: ThreadSystemTask = null;
    private m_dracoMeshBuilder: DracoMeshRawBuilder = new DracoMeshRawBuilder();
    private m_dracoLoaderListener: DracoTaskListener = null;
    private m_url: string = "";

    //private m_demoScene: DeomScene = new DeomScene();

    constructor() {
        super();
    }
    load(url: string): void {
        this.m_url = url;
        if(this.m_dracoMeshBuilder != null &&  this.m_url != null && this.m_url != "") {
            this.m_dracoMeshBuilder.load( this.m_url );
        }
    }
    setListener(l: DracoTaskListener): void {
        this.m_dracoLoaderListener = l;
        if(this.m_dracoMeshBuilder != null) {
            this.m_dracoMeshBuilder.setListener(l);
        }
    }
    private initThread(): void {
        if (this.m_threadModuleLoadFlag) {

            this.m_threadModuleLoadFlag = false;

            let moduleNS: string = "threadFuncs";
            this.getSystemModuleInstance(
                moduleNS,
                (ins: any): void => {
                    this.m_threadModule = ins as ThreadSystemModule;
                    if (this.m_dracoRawTask == null) {

                        console.log("create thread system task classId "+this.m_dracoMeshBuilder.getTaskClassId());
                        this.m_dracoRawTask = this.m_threadModule.createThreadSystemTask(this.m_dracoMeshBuilder.getTaskClassId());
                        this.m_dracoMeshBuilder.threadSystem = this.m_threadModule;
                        this.m_dracoMeshBuilder.threadTask = this.m_dracoRawTask;
                        this.m_dracoMeshBuilder.initialize(2);
                        this.m_dracoMeshBuilder.setListener(this.m_dracoLoaderListener);
                        if(this.m_dracoLoaderListener != null &&  this.m_url != null && this.m_url != "") {
                            this.m_dracoMeshBuilder.load( this.m_url );
                        }
                    }
                }
            );
        }
    }
    initialize(module: any): void {

        if (this.m_initFlag) {

            console.log("initialize draco module...");

            this.m_initFlag = false;
            this.initThread();
            /*
            // fot test
            this.m_demoScene.initialize(module, false);
            this.setListener(this.m_demoScene);
            let url: string = "static/assets/modules/loveass.rawmd";
            this.load(url);
            //*/
        }
    }
    getTaskClassId(): number {
        return this.m_dracoMeshBuilder.getTaskClassId();
    }
    /**
     * running per frame
     */
    run(): void {

        //this.m_demoScene.run();
    }
    getModuleName(): string {
        return "draco";
    }
    getModuleClassName(): string {
        return "dracoApp";
    }
    getRuntimeType(): string {
        return "default";
    }
}

export { App };