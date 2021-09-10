
import {Vector3D} from "../../vox/engine/math/Vector3D";
import {EntityObject} from "../../vox/engine/entity/EntityObject";
import {IScene} from "./IScene";

import {ImageTextureProxy} from "../../vox/engine/texture/ImageTextureProxy";
import {Engine} from "../../vox/engine/Engine";
import {EngineInstance} from "../../vox/engine/EngineInstance";
import {SphereObject} from "../../playerOne/entity/SphereObject";
import {AxisEntity} from "../../vox/engine/entity/AxisEntity";
import {PlaneEntity} from "../../vox/engine/entity/PlaneEntity";
import {BoxEntity} from "../../vox/engine/entity/BoxEntity";
import {CylinderEntity} from "../../vox/engine/entity/CylinderEntity";
import {BoxFrameEntity} from "../../vox/engine/entity/BoxFrameEntity";
import {DirecLightMaterialBuilder} from "../material/DirecLightMaterialBuilder";

/**
 * primitive objects display Scene
 */
class PrimitivesScene implements IScene{

    private m_engine: EngineInstance = null;
    //private m_camTrack: CameraCtrl = null;
    private m_materialBuilder: DirecLightMaterialBuilder = new DirecLightMaterialBuilder();

    constructor() { }

    initialize(engine: EngineInstance): void {

        if(this.m_engine == null) {

            this.m_engine = engine;

            //this.m_camTrack = new CameraCtrl();
            //this.m_camTrack.bindCamera(this.m_engine.getCamera());

            this.initScene();
        }
    }
    
    private m_axis: EntityObject;
    private m_plane: EntityObject;
    
    private initScene(): void {

        this.createLightObjs(new Engine.Vector3D(0.0,100.0,0.0), 1.0);        
        this.initObjs();
        this.m_engine.setClearRGBColor3f(0.1,0.2,0.1);
    }
    
    private createLightObjs(pos: Vector3D, scale: number): void {

        let tex: ImageTextureProxy = new Engine.ImageTextureProxy(64, 64);
        let img: HTMLImageElement = new Image();
        img.src = "static/assets/default.jpg";
        img.onload = (evt: any): void => {
            tex.setDataFromImage(img);
        }
        
        let plane:PlaneEntity = new Engine.PlaneEntity();
        plane.setPosition(pos);
        plane.setScaleXYZ(scale, scale, scale);
        plane.setMaterial( this.m_materialBuilder.create() );
        plane.initializeXOZSquare(700, [tex]);
        this.m_engine.addEntity(plane);
        
        let box: BoxEntity = new Engine.BoxEntity();
        box.setMaterial( this.m_materialBuilder.create() );
        box.initializeCube(200.0, [tex]);
        pos.y += 100.0;
        box.setPosition( pos );
        this.m_engine.addEntity(box);

        let cyl: CylinderEntity = new Engine.CylinderEntity();
        cyl.setMaterial( this.m_materialBuilder.create() );
        cyl.initialize(50,200,10, [tex],1,-0.5);
        cyl.setXYZ(-600,50,-600);
        this.m_engine.addEntity(cyl);

        let boxFrame: BoxFrameEntity = new Engine.BoxFrameEntity(true);
        boxFrame.initialize(new Engine.Vector3D(-500,-500,-500), new Engine.Vector3D(500,500,500));
        boxFrame.setRGB3f(Math.random(), Math.random(), Math.random());
        this.m_engine.addEntity(boxFrame);
    }
    private initObjs(): void {

        let axis: AxisEntity = new Engine.AxisEntity();
        axis.initialize( 500.0 );
        this.m_engine.addEntity(axis);
        this.m_axis = axis;

        let tex: ImageTextureProxy = new Engine.ImageTextureProxy(64, 64);
        let img: HTMLImageElement = new Image();
        img.onload = (evt: any): void => {
            tex.setDataFromImage(img);
        }
        img.src = "static/assets/yanj.jpg";

        let plane: PlaneEntity = new Engine.PlaneEntity();
        plane.setMaterial( this.m_materialBuilder.create() );
        plane.initializeXOZSquare(1300.0, [tex]);
        this.m_engine.addEntity(plane);
        this.m_plane = plane;

        for(let i: number = 0; i < 15; ++i) {

            let sphObj = new SphereObject();
            sphObj.initialize(this.m_engine, this.m_materialBuilder);
        }
    }

    private m_axisYAngle: number = 0;
    private m_planeYAngle: number = 0;

    run(): void {

        if(this.m_axis != null) {
            
            this.m_axisYAngle += 1.0;
            this.m_planeYAngle += 0.5;
            this.m_axis.setRotationXYZ(0.0, this.m_axisYAngle, 0.0);
            this.m_axis.update();
            this.m_plane.setRotationXYZ(0.0, this.m_planeYAngle, 0.0);
            this.m_plane.update();
        }

        // update light dir data
        this.m_materialBuilder.updateLightData( this.m_engine.getCamera().getViewInvMatrix() );
        //if(this.m_camTrack != null) {
        //    // update light dir data
        //    this.m_materialBuilder.updateLightData( this.m_engine.getCamera().getViewInvMatrix() );
        //    this.m_camTrack.rotationOffsetAngleWorldY(-0.2);
        //    // update camera data to gpu data
        //    this.m_engine.updateCamera();
        //}
    }
}

export {PrimitivesScene};