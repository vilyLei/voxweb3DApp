import {EngineInstance} from "../vox/engine/EngineInstance";
import {Scene} from "./scene/Scene";
import { IApp } from "../vox/app/IApp";

/**
 * A 3D APP Demo
 */
class App implements IApp{

    private m_initFlag: boolean = true;
    private m_engine: EngineInstance = new EngineInstance();
    private m_scene: Scene = new Scene();

    constructor() { }

    initialize(module: any): void {

        if(this.m_initFlag) {
            
            this.m_initFlag = false;

            this.m_engine.initialize();
            this.m_scene.initialize( this.m_engine );
        }
    }

    /**
     * running per frame
     */
    run(): void {

        if(this.m_engine != null) {

            // scene run the logic program
            this.m_scene.run();
    
            // engine rendering begin
            this.m_engine.run();
            // engine rendering end
        }
    }
    
    getModuleName():string {
        return "box";
    }
    getModuleClassName():string {
        return "boxApp";
    }
    getRuntimeType():string {
        return "default";
    }
}

export {App};