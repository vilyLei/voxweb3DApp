
import {Vector3D} from "../../vox/baseEngine/math/Vector3D";
import {EntityObject} from "../../vox/baseEngine/entity/EntityObject";
import {RendererContext} from "../../vox/baseEngine/render/RendererContext";
import {Renderer} from "../../vox/baseEngine/render/Renderer";
import {CameraCtrl} from "../../vox/baseEngine/view/CameraCtrl";

import {ImageTextureProxy} from "../../vox/baseEngine/texture/ImageTextureProxy";
import {MaterialBuilder} from "../../vox/baseEngine/material/MaterialBuilder";
import {Engine} from "../../vox/baseEngine/Engine";
import {SphereObject} from "../../vox/baseEngine/entity/SphereObject";
import {AxisEntity} from "../../vox/baseEngine/entity/AxisEntity";
import {PlaneEntity} from "../../vox/baseEngine/entity/PlaneEntity";
import {BoxEntity} from "../../vox/baseEngine/entity/BoxEntity";

/**
 * A 3D APP Demo
 */
class PlayerOne {

    private m_renderer: Renderer = null;
    private m_rcontext: RendererContext = null;

    private m_camTrack: CameraCtrl = null;
    private m_materialBuilder: MaterialBuilder = new MaterialBuilder();
    constructor() { }

    initialize(pmodule: any): void {
        if(pmodule != null && this.m_renderer == null) {
            if(pmodule["mainModule"] == null) {

                console.error("PlayerOne::initialize() is invalid.");
                return;
            }

            console.log("PlayerOne::initialize()...");

            this.m_renderer = pmodule["mainModule"].getRenderer() as Renderer;
            this.m_rcontext = pmodule["mainModule"].getRendererContext() as RendererContext;

            Engine.Initialize( pmodule );

            
            this.m_camTrack = new CameraCtrl();
            this.m_camTrack.bindCamera(this.m_rcontext.getCamera());
            console.log("rcontext.getCamera(): ",this.m_rcontext.getCamera());
            console.log("camTrack: ",this.m_camTrack);

            this.initScene();
        }
    }
    
    private m_axis: EntityObject;
    private m_plane: EntityObject;
    
    private initScene(): void {

        this.createLightObjs(new Engine.Vector3D(0.0,100.0,0.0), 1.0);        
        this.initObjs();
        this.m_rcontext.setClearRGBColor3f(0.1,0.2,0.1);
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
        this.m_renderer.addEntity(plane, 0);
        
        let box: BoxEntity = new Engine.BoxEntity();
        box.setMaterial( this.m_materialBuilder.create() );
        box.initializeCube(200.0, [tex]);
        pos.y += 100.0;
        box.setPosition( pos );
        this.m_renderer.addEntity(box, 0);
    }
    private initObjs(): void {

        let axis: AxisEntity = new Engine.AxisEntity();
        console.log("initObjs(), axis: ",axis);
        axis.initialize(500.0);
        this.m_renderer.addEntity(axis, 0);
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
        this.m_renderer.addEntity(plane, 0);
        this.m_plane = plane;

        for(let i: number = 0; i < 15; ++i) {

            let sphObj = new SphereObject();
            sphObj.initialize(this.m_renderer, this.m_materialBuilder);
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

        if(this.m_camTrack != null) {

            this.m_materialBuilder.updateLightData( this.m_rcontext.getCamera().getViewInvMatrix() );
            this.m_camTrack.rotationOffsetAngleWorldY(-0.2);
            this.m_rcontext.updateCamera();
        }
        // render process code block    ----- begin
        this.m_rcontext.renderBegin();
        
        this.m_renderer.update();
        this.m_renderer.run();

        this.m_rcontext.runEnd();
        // render process code block    ----- end
    }
}

export {PlayerOne};