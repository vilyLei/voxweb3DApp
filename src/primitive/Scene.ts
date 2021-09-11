
import { IScene } from "../common/scene/IScene";

import { ImageTextureProxy } from "../vox/engine/texture/ImageTextureProxy";
import { Engine } from "../vox/engine/Engine";
import { EngineInstance } from "../vox/engine/EngineInstance";
import { AxisEntity } from "../vox/engine/entity/AxisEntity";
import { PlaneEntity } from "../vox/engine/entity/PlaneEntity";
import { BoxEntity } from "../vox/engine/entity/BoxEntity";
import { SphereEntity } from "../vox/engine/entity/SphereEntity";
import { CylinderEntity } from "../vox/engine/entity/CylinderEntity";
import { BoxFrameEntity } from "../vox/engine/entity/BoxFrameEntity";
import { DashedLineEntity } from "../vox/engine/entity/DashedLineEntity";

import { CameraCtrl } from "../common/ctrl/CameraCtrl";

/**
 * primitive objects display Scene
 */
class Scene implements IScene {

    private m_engine: EngineInstance = null;
    private m_camTrack: CameraCtrl = null;
    
    constructor() { }

    initialize(engine: EngineInstance): void {

        if (this.m_engine == null) {

            this.m_engine = engine;

            this.m_camTrack = new CameraCtrl();
            this.m_camTrack.bindCamera(this.m_engine.getCamera());
            this.initScene();
        }
    }

    private initScene(): void {

        this.m_engine.setClearRGBColor3f(0.1, 0.2, 0.1);

        this.initObjs();
    }

    getTexture(name: string): ImageTextureProxy {

        let tex: ImageTextureProxy = new Engine.ImageTextureProxy(64, 64);
        let img: HTMLImageElement = new Image();
        img.src = "static/assets/" + name + ".jpg";
        img.onload = (evt: any): void => {
            tex.setDataFromImage(img);
        }
        return tex;
    }
    private initObjs(): void {


        let tex0: ImageTextureProxy = this.getTexture("wood_01");
        let tex1: ImageTextureProxy = this.getTexture("metal_02");
        let tex2: ImageTextureProxy = this.getTexture("wood_02");

        let axis: AxisEntity = new AxisEntity();
        axis.initialize(500.0);
        this.m_engine.addEntity(axis);

        let plane: PlaneEntity = new PlaneEntity();
        plane.vtxColorEnabled = true;
        plane.color0.setRGB3f(0.0,2.0,0.0);
        plane.color1.setRGB3f(2.0,0.0,0.0);
        plane.color2.setRGB3f(2.0,0.0,2.0);
        plane.initializeXOZSquare(1300, [tex0]);
        this.m_engine.addEntity(plane);

        let box: BoxEntity = new BoxEntity();
        box.initializeCube(200.0, [tex1]);
        box.setXYZ(-500, 100, 0);
        this.m_engine.addEntity(box);

        let cyl: CylinderEntity = new CylinderEntity();
        cyl.initialize(100, 500, 10, [tex2]);
        cyl.setXYZ(-500, 250, 400);
        this.m_engine.addEntity(cyl);

        let sph: SphereEntity = new SphereEntity();
        sph.initialize(200, 20, 20, [tex2]);
        sph.setXYZ(500, 200, 500);
        this.m_engine.addEntity(sph);

        let size: number = 600.0;
        let boxFrame: BoxFrameEntity = new BoxFrameEntity(true);
        boxFrame.initialize(new Engine.Vector3D(-size, -size, -size), new Engine.Vector3D(size, size, size));
        boxFrame.setRGB3f(Math.random(), Math.random(), Math.random());
        this.m_engine.addEntity(boxFrame);

        let ls: DashedLineEntity = new DashedLineEntity();
        ls.initializeLS(new Engine.Vector3D(), new Engine.Vector3D(100,0,100));
        ls.setXYZ(0, 400, 0);
        this.m_engine.addEntity(ls);
    }

    run(): void {

        if (this.m_camTrack != null) {
            this.m_camTrack.rotationOffsetAngleWorldY(-0.2);
            // update camera data to gpu data
            this.m_engine.updateCamera();
        }
    }
}

export { Scene };