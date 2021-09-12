import { EngineInstance } from "../vox/engine/EngineInstance";
import { IApp } from "../vox/app/IApp";
import { Scene } from "./scene/Scene";
import { Engine } from "../vox/engine/Engine";

/**
 * A 3D APP Box view Demo
 */
class App implements IApp{

    private m_initFlag: boolean = true;
    private m_engine: EngineInstance = new EngineInstance();
    private m_scene: Scene = new Scene();

    constructor() { }

    initialize(module: any): void {

        if (this.m_initFlag) {
            
            this.m_initFlag = false;
            // need use debug engine code
            //Engine.SetDebugEnabled( true );

            this.m_engine.initialize();

            this.m_scene = new Scene();
            this.m_scene.initialize( this.m_engine );
        }
    }
    /**
     * running per frame
     */
    run(): void {

        if (this.m_scene != null) {

            this.m_scene.run();
            this.m_engine.run();
        }
    }
    getModuleName():string {
        return "material";
    }
    getModuleClassName():string {
        return "materialApp";
    }
    getRuntimeType():string {
        return "default";
    }
}

export { App };