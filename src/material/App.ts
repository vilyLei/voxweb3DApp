import { ImageTextureProxy } from "../vox/engine/texture/ImageTextureProxy";
import { EngineInstance } from "../vox/engine/EngineInstance";
import { Engine } from "../vox/engine/Engine";
import { CameraCtrl } from "../common/ctrl/CameraCtrl";
import { IApp } from "../vox/app/IApp";
import { BoxEntity } from "../vox/engine/entity/BoxEntity";
import { Vector3D } from "../vox/engine/math/Vector3D";

import { IModuleLoader } from "../shell/IModuleLoader";
import { DirecLightParam } from "./material/DirecLightParam";
import { ColorMaterialWrapper } from "./material/ColorMaterialWrapper";
import { LightMaterialWrapper } from "./material/LightMaterialWrapper";
import { NormalMapLightWrapper } from "./material/NormalMapLightWrapper";
import { Color4 } from "../vox/engine/material/Color4";

/**
 * A 3D APP Box view Demo
 */
class App implements IApp{

    private m_initFlag: boolean = true;
    private m_engine: EngineInstance = new EngineInstance();

    private m_lightParam: DirecLightParam = null;

    private m_colorBox: BoxEntity;
    private m_colorBoxRotV: Vector3D;;
    
    private m_lightBox: BoxEntity;
    private m_lightBoxRotV: Vector3D;

    private m_normalMapBox: BoxEntity;
    private m_normalMapBoxRotV: Vector3D;
    
    private m_fpsModule: IApp = null;
    private m_fpsModuleFlag: boolean = true;
    private m_camTrack: CameraCtrl = null;
    constructor() { }

    private loaFPSModule(): void {
        
        if(this.m_fpsModuleFlag) {
            this.m_fpsModuleFlag = false;                
            let moduleNS: string = "fps";
            let className: string = moduleNS + "App";
            let pwindow: any = window;
            var VoxCore = pwindow["VoxCore"];
            let loader: IModuleLoader = VoxCore["voxAppModuleLoader"] as IModuleLoader;
            if(loader.hasModuleByName(moduleNS)) {

            }
            loader.load(
                "static/code/apps/demos/"+moduleNS+".js",
                ():void=>{
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
        
        document.onmousedown = (evt:any): void =>
        {
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
    initialize(module: any): void {

        if (this.m_initFlag) {
            
            this.m_initFlag = false;
            this.m_engine.initialize();
            let texName: string = "box";
            //let texName: string = "lava_03";
            //let texName: string = "metal_01";
            let baseColorTex: ImageTextureProxy = this.createTexture( "static/assets/disp/"+texName+"_COLOR.png" );
            let mormalTex: ImageTextureProxy = this.createTexture( "static/assets/disp/"+texName+"_NRM.png" );
            let specularTex: ImageTextureProxy = this.createTexture( "static/assets/disp/"+texName+"_SPEC.png" );
            let occTex: ImageTextureProxy = this.createTexture( "static/assets/disp/"+texName+"_OCC.png" );

            this.m_lightParam  = new DirecLightParam();
            this.m_lightParam.initialize();

            this.initEvt();
            this.m_camTrack = new CameraCtrl();
            this.m_camTrack.bindCamera(this.m_engine.getCamera());

            this.createNormalMapEntity(baseColorTex, mormalTex, specularTex, occTex, new Engine.Vector3D(200.0,0.0,0.0));
            this.createLightEntity(baseColorTex, new Engine.Vector3D(-400.0,0.0,0.0));
            this.createColorEntity(baseColorTex, new Engine.Vector3D(-1000,0.0,0.0));
        }
    }
    private createNormalMapEntity(tex0: ImageTextureProxy, tex1: ImageTextureProxy, tex2: ImageTextureProxy, tex3: ImageTextureProxy, pos: Vector3D): void {

        this.m_normalMapBoxRotV = new Engine.Vector3D();
        let materialWrrapper: NormalMapLightWrapper = new NormalMapLightWrapper(this.m_lightParam);
        let color: Color4 = new Engine.Color4();
        color.normalizeRandom(2.0);
        materialWrrapper.setRGBColor3f(color.r,color.g,color.b);
        this.m_normalMapBox = new BoxEntity();
        this.m_normalMapBox.setMaterial(materialWrrapper.getMaterial());
        this.m_normalMapBox.initializeCube(500.0, [tex0, tex1, tex2, tex3]);
        this.m_normalMapBox.setPosition(pos);
        this.m_engine.addEntity(this.m_normalMapBox);
    }
    private createLightEntity(tex: ImageTextureProxy, pos: Vector3D): void {

        this.m_lightBoxRotV = new Engine.Vector3D();
        let materialWrrapper: LightMaterialWrapper = new LightMaterialWrapper(this.m_lightParam);
        let color: Color4 = new Engine.Color4();
        color.normalizeRandom(2.0);
        materialWrrapper.setRGBColor3f(color.r,color.g,color.b);
        this.m_lightBox = new BoxEntity();
        this.m_lightBox.setMaterial(materialWrrapper.getMaterial());
        this.m_lightBox.initializeCube(500.0, [tex]);
        this.m_lightBox.setPosition(pos);
        this.m_engine.addEntity(this.m_lightBox);
    }
    private createColorEntity(tex: ImageTextureProxy, pos: Vector3D): void {

        this.m_colorBoxRotV = new Engine.Vector3D();
        let materialWrrapper: ColorMaterialWrapper = new ColorMaterialWrapper();
        let color: Color4 = new Engine.Color4();
        color.normalizeRandom(2.0);
        materialWrrapper.setRGBColor3f(color.r,color.g,color.b);
        this.m_colorBox = new BoxEntity();
        this.m_colorBox.setMaterial(materialWrrapper.getMaterial());
        this.m_colorBox.initializeCube(500.0, [tex]);
        this.m_colorBox.setPosition(pos);
        this.m_engine.addEntity(this.m_colorBox);
    }

    /**
     * running per frame
     */
    run(): void {

        if (this.m_engine != null) {

            if(this.m_fpsModule != null) this.m_fpsModule.run();
            
            if (this.m_camTrack != null) {
                this.m_camTrack.rotationOffsetAngleWorldY(-0.2);
                // update camera data to gpu data
                this.m_engine.updateCamera();
            }
            if(this.m_colorBox != null) {
                this.m_colorBoxRotV.y += 1.0;
                this.m_colorBoxRotV.z += 0.5;
                this.m_colorBox.setRotation( this.m_colorBoxRotV );
                this.m_colorBox.update();
            }
            if(this.m_lightBoxRotV != null) {
                this.m_lightBoxRotV.y += -0.8;
                this.m_lightBoxRotV.z += 0.8;
                this.m_lightBox.setRotation( this.m_lightBoxRotV );
                this.m_lightBox.update();
            }
            if(this.m_normalMapBox != null) {
                this.m_normalMapBoxRotV.y += -0.7;
                this.m_normalMapBoxRotV.z += 1.0;
                this.m_normalMapBox.setRotation( this.m_normalMapBoxRotV );
                this.m_normalMapBox.update();
            }

            this.m_lightParam.updateLightData(this.m_engine.getCamera().getViewInvMatrix())

            this.m_engine.run();
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

export { App };