import { ImageTextureProxy } from "../../vox/engine/texture/ImageTextureProxy";
import { RendererInstance } from "../../vox/engine/RendererInstance";
import { IDataMesh } from "../../vox/engine/mesh//IDataMesh";
import { Engine } from "../../vox/engine/Engine";
import { AppBase } from "../../vox/app/AppBase";
import { EntityObject } from "../../vox/engine/entity/EntityObject";
import { BoxEntity } from "../../vox/engine/entity/BoxEntity";
import { IDemoModule } from "./IDemoModule";
import { DracoTaskListener } from "../../vox/engine/draco/DracoTaskListener";
import { Color4 } from "../../vox/engine/material/Color4";
import { IDracoMesh } from "../../vox/engine/mesh/IDracoMesh";
import { DirecLightParam } from "../material/material/DirecLightParam";
import { NormalMapLightWrapper } from "../material/material/NormalMapLightWrapper";
import { ParallaxMapLightWrapper } from "../material/material/ParallaxMapLightWrapper";
import { CameraCtrl } from "../../common/ctrl/CameraCtrl";

/**
 * A 3D APP Box view Demo
 */
class DemoDraco extends AppBase implements IDemoModule, DracoTaskListener{

    private m_initFlag: boolean = true;
    private m_engine: RendererInstance = new RendererInstance();
    private m_tex: ImageTextureProxy;

    private m_texList: ImageTextureProxy[] = [];
    private m_lightParam: DirecLightParam = null;
    private m_moduleFlag: boolean = true;    
    private m_module: any = null;
    private m_camTrack: CameraCtrl = null;
    private m_scale: number = 2.0;

    constructor() {
        super();
    }

    dracoParse(pmodule: any, index: number, total: number): void {
        console.log("dracoParse index: "+index);

        //this.loadedObjData([pmodule], 1.0);
    }
    dracoParseFinish(modules: any[], total: number): void {

        console.log("dracoParseFinish total: "+total,modules);
        this.loadedModuleData(modules, this.m_scale);
    }
    private loadedModuleData(modules: any, scale: number): void {

        let materialWrrapper: ParallaxMapLightWrapper = new ParallaxMapLightWrapper(this.m_lightParam);
        //let materialWrrapper: NormalMapLightWrapper = new NormalMapLightWrapper(this.m_lightParam);
        materialWrrapper.initializeByCodeBuf( true );
        materialWrrapper.setTextureList( this.m_texList );

        let color: Color4 = new Engine.Color4();
        color.normalizeRandom(2.0);
        materialWrrapper.setRGBColor3f(color.r, color.g, color.b);

        let dracoMesh: IDracoMesh = new Engine.DracoMesh();
        
        dracoMesh.setBufSortFormat(materialWrrapper.getBufSortFormat());
        dracoMesh.initialize(modules);

        //let scale: number = 3;
        let entity:EntityObject = new EntityObject();
        entity.setMaterial( materialWrrapper.getMaterial() );
        entity.setMesh( dracoMesh );
        entity.setScaleXYZ(scale,scale,scale);
        entity.setXYZ(Math.random() * 1300 - 650, 0.0, Math.random() * 1300 - 650);
        this.m_engine.addEntity( entity );
        //this.m_entity = entity;
    }
    private initModule(): void {

        document.onmousedown = (evt: any): void => {
            if (this.m_moduleFlag) {
                this.m_moduleFlag = false;
                let moduleNS: string = "draco";
                this.getModuleInstance(
                    moduleNS,
                    (ins: any): void => {
                        this.m_module = ins;
                        console.log("get a draco parser ins");

                        this.m_module.setListener( this );

                        this.m_scale = 2.0;
                        let url: string = "static/assets/modules/loveass.rawmd";
                        this.m_module.load( url );
                    }
                );
            }
            else if(this.m_module != null) {

                this.m_scale = 0.5;
                let url: string = "static/assets/modules/stainlessSteel.rawmd";
                this.m_module.load( url );
            }
            console.log("Mouse Event initModule.");
        }
    }
    initialize(module: any): void {

        if (this.m_initFlag) {

            console.log("MouseEvent module initialize...");
            this.m_initFlag = false;
            this.m_engine.initialize();

            this.initModule();

            this.m_tex = new Engine.ImageTextureProxy(64, 64);
            let img: HTMLImageElement = new Image();
            img.src = "static/assets/box_wood01.jpg";
            img.onload = (evt: any): void => {
                this.m_tex.setDataFromImage(img);
            }

            //let texName: string = "box";
            //let texName: string = "lava_03";
            let texName: string = "metal_01";
            let baseColorTex: ImageTextureProxy = this.createTexture("static/assets/disp/" + texName + "_COLOR.png");
            let mormalTex: ImageTextureProxy = this.createTexture("static/assets/disp/" + texName + "_NRM.png");
            let specularTex: ImageTextureProxy = this.createTexture("static/assets/disp/" + texName + "_SPEC.png");
            let occTex: ImageTextureProxy = this.createTexture("static/assets/disp/" + texName + "_OCC.png");
            let dispTex: ImageTextureProxy = this.createTexture("static/assets/disp/" + texName + "_DISP.png");
            this.m_texList.push(baseColorTex);
            this.m_texList.push(mormalTex);
            this.m_texList.push(specularTex);
            this.m_texList.push(occTex);
            this.m_texList.push(dispTex);

            this.m_lightParam = new DirecLightParam();
            this.m_lightParam.initialize();
            
            this.m_camTrack = new CameraCtrl();
            this.m_camTrack.bindCamera(this.m_engine.getCamera());
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
    /**
     * running per frame
     */
    run(): void {

        if (this.m_engine != null) {
            if (this.m_camTrack != null) {
                this.m_camTrack.rotationOffsetAngleWorldY(-0.2);
                // update camera data to gpu data
                this.m_engine.updateCamera();
            }
            this.m_engine.run();
        }
    }
}

export { DemoDraco };