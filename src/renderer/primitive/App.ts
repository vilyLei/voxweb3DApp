import { ImageTextureProxy } from "../../vox/engine/texture/ImageTextureProxy";
import { RendererInstance } from "../../vox/engine/RendererInstance";
import { Engine } from "../../vox/engine/Engine";
import { Scene } from "./Scene";
import { IApp } from "../../vox/app/IApp";
import { AppBase } from "../../vox/app/AppBase";
/**
 * A 3D APP Box view Demo
 */
class App extends AppBase implements IApp {

    private m_initFlag: boolean = true;
    private m_engine: RendererInstance = new RendererInstance();

    private m_scene: Scene;
    constructor() { super(); }

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

            this.m_scene = new Scene();
            this.m_scene.initialize( this.m_engine );
        }
    }

    /**
     * running per frame
     */
    run(): void {

        if (this.m_engine != null) {

            this.m_scene.run();

            this.m_engine.run();
        }
    }
    
    getModuleName():string {
        return "primitive";
    }
    getModuleClassName():string {
        return "primitiveApp";
    }
    getRuntimeType():string {
        return "default";
    }
}

export { App };