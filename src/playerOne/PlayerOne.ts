import {EngineInstance} from "../vox/engine/EngineInstance";
import {Scene} from "./scene/Scene";

/**
 * A 3D APP Demo
 */
class PlayerOne {

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
            this.m_engine.begin();
            this.m_engine.update();
            this.m_engine.render();
            this.m_engine.end();
            // engine rendering end
        }
    }
}

export {PlayerOne};