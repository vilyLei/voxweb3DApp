import { ImageTextureProxy } from "../vox/engine/texture/ImageTextureProxy";
import { EngineInstance } from "../vox/engine/EngineInstance";
import { Engine } from "../vox/engine/Engine";
import { IApp } from "../vox/app/IApp";
import { BoxEntity } from "../vox/engine/entity/BoxEntity";

import { ColorMaterialWrapper } from "./material/ColorMaterialWrapper";
import { LightParam, LightMaterialWrapper } from "./material/LightMaterialWrapper";
import { Vector3D } from "../vox/engine/math/Vector3D";

/**
 * A 3D APP Box view Demo
 */
class App implements IApp{

    private m_initFlag: boolean = true;
    private m_engine: EngineInstance = new EngineInstance();

    private m_colorBox: BoxEntity;
    private m_colorBoxRotV: Vector3D;;
    
    private m_lightBox: BoxEntity;
    private m_lightBoxRotV: Vector3D;
    private m_lightParam: LightParam = null;
    constructor() { }

    initialize(module: any): void {

        if (this.m_initFlag) {
            
            this.m_initFlag = false;
            this.m_engine.initialize();

            let tex: ImageTextureProxy = new Engine.ImageTextureProxy(64, 64);
            let img: HTMLImageElement = new Image();
            img.src = "static/assets/box_wood01.jpg";
            img.onload = (evt: any): void => {
                tex.setDataFromImage(img);
            }

            this.m_lightParam  = new LightParam();
            this.m_lightParam.initialize();
            this.createLightEntity(tex, new Engine.Vector3D());

            this.createColorEntity(tex, new Engine.Vector3D(-600,0.0,0.0));
        }
    }
    private createLightEntity(tex: ImageTextureProxy, pos: Vector3D): void {

        this.m_lightBoxRotV = new Engine.Vector3D();
        let materialWrrapper: LightMaterialWrapper = new LightMaterialWrapper(this.m_lightParam);
        materialWrrapper.setRGBColor3f(0.0,1.0,1.0);
        this.m_lightBox = new BoxEntity();
        this.m_lightBox.setMaterial(materialWrrapper.getMaterial());
        this.m_lightBox.initializeCube(500.0, [tex]);
        this.m_lightBox.setPosition(pos);
        this.m_engine.addEntity(this.m_lightBox);
    }
    private createColorEntity(tex: ImageTextureProxy, pos: Vector3D): void {

        this.m_colorBoxRotV = new Engine.Vector3D();
        let colorMaterialWrapper: ColorMaterialWrapper = new ColorMaterialWrapper();
        //colorMaterialWrapper.setRGBColor3f(2.0,0.0,0.0);
        colorMaterialWrapper.setRGBColor3f(0.0,1.0,0.0);
        this.m_colorBox = new BoxEntity();
        this.m_colorBox.setMaterial(colorMaterialWrapper.getMaterial());
        this.m_colorBox.initializeCube(500.0, [tex]);
        this.m_colorBox.setPosition(pos);
        this.m_engine.addEntity(this.m_colorBox);
    }

    /**
     * running per frame
     */
    run(): void {

        if (this.m_engine != null) {

            this.m_colorBoxRotV.y += 1.0;
            this.m_colorBoxRotV.z += 0.5;
            this.m_colorBox.setRotation( this.m_colorBoxRotV );
            this.m_colorBox.update();

            this.m_lightBoxRotV.y += -1.0;
            this.m_lightBoxRotV.z += 0.5;
            this.m_lightBox.setRotation( this.m_colorBoxRotV );
            this.m_lightBox.update();

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