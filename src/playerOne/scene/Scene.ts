
import {RendererInstance} from "../../vox/engine/RendererInstance";

import {CameraCtrl} from "../../common/ctrl/CameraCtrl";
import {IScene} from "../../common/scene/IScene";
import {PrimitivesScene} from "./PrimitivesScene";

/**
 * main scene
 */
class Scene implements IScene{

    private m_engine: RendererInstance = null;
    private m_camTrack: CameraCtrl = null;
    private m_subScene: IScene = new PrimitivesScene();
    constructor() { }

    initialize(engine: RendererInstance): void {

        if(this.m_engine == null) {

            this.m_engine = engine;
            
            this.m_camTrack = new CameraCtrl();
            this.m_camTrack.bindCamera(this.m_engine.getCamera());

            this.m_subScene.initialize( this.m_engine );
            
        }
    }

    run(): void {

        this.m_subScene.run();
        
        if(this.m_camTrack != null) {            
            this.m_camTrack.rotationOffsetAngleWorldY(-0.2);
            // update camera data to gpu data
            this.m_engine.updateCamera();
        }
    }
}

export {Scene};