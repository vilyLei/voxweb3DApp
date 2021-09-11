import { ImageTextureProxy } from "../vox/engine/texture/ImageTextureProxy";
import { EngineInstance } from "../vox/engine/EngineInstance";
import { Engine } from "../vox/engine/Engine";
import { Scene } from "./Scene";

/**
 * A 3D APP Box view Demo
 */
class App {

    private m_initFlag: boolean = true;
    private m_engine: EngineInstance = new EngineInstance();

    private m_scene: Scene;
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
}

export { App };