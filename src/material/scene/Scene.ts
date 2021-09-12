import { ImageTextureProxy } from "../../vox/engine/texture/ImageTextureProxy";
import { EngineInstance } from "../../vox/engine/EngineInstance";
import { Engine } from "../../vox/engine/Engine";
import { CameraCtrl } from "../../common/ctrl/CameraCtrl";
import { IApp } from "../../vox/app/IApp";
import { EntityObject } from "../../vox/engine/entity/EntityObject";
import { BoxEntity } from "../../vox/engine/entity/BoxEntity";
import { Vector3D } from "../../vox/engine/math/Vector3D";

import { IModuleLoader } from "../../shell/IModuleLoader";
import { IScene } from "../../common/scene/IScene";
import { DirecLightParam } from "../material/DirecLightParam";
import { ColorMaterialWrapper } from "../material/ColorMaterialWrapper";
import { LightMaterialWrapper } from "../material/LightMaterialWrapper";
import { NormalMapLightWrapper } from "../material/NormalMapLightWrapper";
import { ParallaxMapLightWrapper } from "../material/ParallaxMapLightWrapper";
import { Color4 } from "../../vox/engine/material/Color4";

class MotionObject {
    private m_entity: EntityObject;
    private m_rotV: Vector3D;
    private m_spdV: Vector3D;
    constructor(entity: EntityObject) {
        this.m_entity = entity;
        this.m_rotV = new Engine.Vector3D(Math.random() * 100.0, Math.random() * 100.0, Math.random() * 100.0);
        this.m_spdV = new Engine.Vector3D(Math.random() * 2 - 1.0, Math.random() * 2 - 1.0, Math.random() * 2 - 1.0);
    }
    run(): void {
        this.m_rotV.addBy(this.m_spdV);
        this.m_entity.setRotation(this.m_rotV);
        this.m_entity.update();
    }
}
/**
 * A 3D APP Box view Demo
 */
class Scene implements IScene {

    private m_engine: EngineInstance = null;
    private m_lightParam: DirecLightParam = null;

    private m_motionObjs: MotionObject[] = [];
    private m_fpsModule: IApp = null;
    private m_fpsModuleFlag: boolean = true;
    private m_camTrack: CameraCtrl = null;
    constructor() { }

    private loaFPSModule(): void {

        if (this.m_fpsModuleFlag) {
            this.m_fpsModuleFlag = false;
            let moduleNS: string = "fps";
            let className: string = moduleNS + "App";
            let pwindow: any = window;
            var VoxCore = pwindow["VoxCore"];
            let loader: IModuleLoader = VoxCore["voxAppModuleLoader"] as IModuleLoader;
            if (loader.hasModuleByName(moduleNS)) {

            }
            loader.load(
                "static/code/apps/demos/" + moduleNS + ".js",
                (): void => {
                    console.log("load oscillator module ok.");
                    this.m_fpsModule = new VoxCore[className]() as IApp;
                    this.m_fpsModule.initialize(VoxCore);
                },
                moduleNS,
                className
            );
        }
    }
    private initEvt(): void {

        document.onmousedown = (evt: any): void => {
            this.loaFPSModule();
            console.log("Mouse Event App Mouse Down...");
        }
    }

    private createTexture(url: string): ImageTextureProxy {

        let tex: ImageTextureProxy = new Engine.ImageTextureProxy(64, 64);
        let img: HTMLImageElement = new Image();
        img.src = url;
        img.onload = (evt: any): void => {
            tex.setDataFromImage(img);
        }
        return tex;
    }
    initialize(engine: EngineInstance): void {

        if (this.m_engine == null) {

            this.m_engine = engine;

            let texName: string = "box";
            //let texName: string = "lava_03";
            //let texName: string = "metal_01";
            let baseColorTex: ImageTextureProxy = this.createTexture("static/assets/disp/" + texName + "_COLOR.png");
            let mormalTex: ImageTextureProxy = this.createTexture("static/assets/disp/" + texName + "_NRM.png");
            let specularTex: ImageTextureProxy = this.createTexture("static/assets/disp/" + texName + "_SPEC.png");
            let occTex: ImageTextureProxy = this.createTexture("static/assets/disp/" + texName + "_DISP.png");
            let dispTex: ImageTextureProxy = this.createTexture("static/assets/disp/" + texName + "_OCC.png");

            this.m_lightParam = new DirecLightParam();
            this.m_lightParam.initialize();

            this.initEvt();
            this.m_camTrack = new CameraCtrl();
            this.m_camTrack.bindCamera(this.m_engine.getCamera());

            this.createParallaxMapEntity(baseColorTex, mormalTex, specularTex, occTex, dispTex, new Engine.Vector3D(800.0, 0.0, 0.0));
            this.createNormalMapEntity(baseColorTex, mormalTex, specularTex, occTex, new Engine.Vector3D(200.0, 0.0, 0.0));
            this.createLightEntity(baseColorTex, new Engine.Vector3D(-400.0, 0.0, 0.0));
            this.createColorEntity(baseColorTex, new Engine.Vector3D(-1000, 0.0, 0.0));
        }
    }
    private createParallaxMapEntity(tex0: ImageTextureProxy, tex1: ImageTextureProxy, tex2: ImageTextureProxy, tex3: ImageTextureProxy, tex4: ImageTextureProxy, pos: Vector3D): void {

        //this.m_normalMapBoxRotV = new Engine.Vector3D();
        let materialWrrapper: ParallaxMapLightWrapper = new ParallaxMapLightWrapper(this.m_lightParam);
        let color: Color4 = new Engine.Color4();
        color.normalizeRandom(2.0);
        materialWrrapper.setRGBColor3f(color.r, color.g, color.b);
        let entity = new BoxEntity();
        entity.setMaterial(materialWrrapper.getMaterial());
        entity.initializeCube(500.0, [tex0, tex1, tex2, tex3, tex4]);
        entity.setPosition(pos);
        this.m_engine.addEntity( entity);
        this.m_motionObjs.push(new MotionObject( entity ) );
    }
    private createNormalMapEntity(tex0: ImageTextureProxy, tex1: ImageTextureProxy, tex2: ImageTextureProxy, tex3: ImageTextureProxy, pos: Vector3D): void {

        let materialWrrapper: NormalMapLightWrapper = new NormalMapLightWrapper(this.m_lightParam);
        let color: Color4 = new Engine.Color4();
        color.normalizeRandom(2.0);
        materialWrrapper.setRGBColor3f(color.r, color.g, color.b);
        let entity = new BoxEntity();
        entity.setMaterial(materialWrrapper.getMaterial());
        entity.initializeCube(500.0, [tex0, tex1, tex2, tex3]);
        entity.setPosition(pos);
        this.m_engine.addEntity( entity );
        this.m_motionObjs.push(new MotionObject( entity ) );
    }
    private createLightEntity(tex: ImageTextureProxy, pos: Vector3D): void {

        let materialWrrapper: LightMaterialWrapper = new LightMaterialWrapper(this.m_lightParam);
        let color: Color4 = new Engine.Color4();
        color.normalizeRandom(2.0);
        materialWrrapper.setRGBColor3f(color.r, color.g, color.b);
        let entity = new BoxEntity();
        entity.setMaterial(materialWrrapper.getMaterial());
        entity.initializeCube(500.0, [tex]);
        entity.setPosition(pos);
        this.m_engine.addEntity( entity );
        this.m_motionObjs.push( new MotionObject( entity ) );
    }
    private createColorEntity(tex: ImageTextureProxy, pos: Vector3D): void {

        let materialWrrapper: ColorMaterialWrapper = new ColorMaterialWrapper();
        let color: Color4 = new Engine.Color4();
        color.normalizeRandom(1.5);
        materialWrrapper.setRGBColor3f(color.r, color.g, color.b);
        let entity = new BoxEntity();
        entity.setMaterial(materialWrrapper.getMaterial());
        entity.initializeCube(500.0, [tex]);
        entity.setPosition(pos);
        this.m_engine.addEntity( entity );
        this.m_motionObjs.push(new MotionObject( entity ));
    }

    /**
     * running per frame
     */
    run(): void {

        if (this.m_fpsModule != null) this.m_fpsModule.run();

        if (this.m_camTrack != null) {
            this.m_camTrack.rotationOffsetAngleWorldY(-0.2);
            // update camera data to gpu data
            this.m_engine.updateCamera();
        }
        for(let i: number = 0; i < this.m_motionObjs.length; ++i) {
            this.m_motionObjs[i].run();
        }

        this.m_lightParam.updateLightData(this.m_engine.getCamera().getViewInvMatrix());
    }
}

export { Scene };