import { ImageTextureProxy } from "../vox/engine/texture/ImageTextureProxy";
import { EngineInstance } from "../vox/engine/EngineInstance";
import { Engine } from "../vox/engine/Engine";
import { AppBase } from "../vox/app/AppBase";
import { IApp } from "../vox/app/IApp";
import { BoxEntity } from "../vox/engine/entity/BoxEntity";

/**
 * A 3D APP Box view Demo
 */
class App extends AppBase implements IApp {

    private m_initFlag: boolean = true;
    private m_engine: EngineInstance = new EngineInstance();
    private m_fpsModule: IApp = null;
    private m_fpsModuleFlag: boolean = true;

    private m_box: BoxEntity;
    private m_degY: number = 0.0;
    private m_degZ: number = 0.0;
    constructor() {
        super();
    }

    private initEvt(): void {

        document.onmousedown = (evt: any): void => {
            if (this.m_fpsModuleFlag) {
                this.m_fpsModuleFlag = false;
                let moduleNS: string = "fps";
                this.getModuleInstance(
                    moduleNS,
                    (ins: any): void => {
                        this.m_fpsModule = ins;
                        console.log("get a fps ins");
                    }
                );
            }
            console.log("Mouse Event App Mouse Down...");
        }
    }
    initialize(module: any): void {

        if (this.m_initFlag) {

            console.log("MouseEvent module initialize...");
            this.m_initFlag = false;
            this.m_engine.initialize();

            this.initEvt();

            let tex: ImageTextureProxy = new Engine.ImageTextureProxy(64, 64);
            let img: HTMLImageElement = new Image();
            img.src = "static/assets/box_wood01.jpg";
            img.onload = (evt: any): void => {
                tex.setDataFromImage(img);
            }

            this.m_box = new Engine.BoxEntity();
            this.m_box.initializeCube(700.0, [tex]);
            this.m_engine.addEntity(this.m_box);
        }
    }

    /**
     * running per frame
     */
    run(): void {

        if (this.m_fpsModule != null) this.m_fpsModule.run();

        if (this.m_engine != null) {

            this.m_degY += 1.0;
            this.m_degZ += 0.5;
            this.m_box.setRotationXYZ(0.0, this.m_degY, this.m_degZ);
            this.m_box.update();

            this.m_engine.run();
        }
    }

    getModuleName(): string {
        return "mouseEvent";
    }
    getModuleClassName(): string {
        return "mouseEventApp";
    }
    getRuntimeType(): string {
        return "default";
    }
}

export { App };