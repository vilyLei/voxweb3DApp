import { ImageTextureProxy } from "../vox/engine/texture/ImageTextureProxy";
import { EngineInstance } from "../vox/engine/EngineInstance";
import { Engine } from "../vox/engine/Engine";
import { IApp } from "../vox/app/IApp";
import { BoxEntity } from "../vox/engine/entity/BoxEntity";

/**
 * A 3D APP Box view Demo
 */
class App implements IApp{

    private m_initFlag: boolean = true;
    private m_engine: EngineInstance = new EngineInstance();

    private m_box: BoxEntity;
    private m_degY: number = 0.0;
    private m_degZ: number = 0.0;
    constructor() { }

    private initEvt(): void {
        
        document.onmousedown = (evt:any): void =>
        {
            let pwindow: any = window;
            var VoxCore = pwindow["VoxCore"];
            let loader: any = VoxCore["voxAppModuleLoader"];
            //"oscillator": "static/code/apps/demos/oscillator.js"
            //load(purl: string, loadedFunc: () => void, name: string, className: string): void
            loader.load(
                "static/code/apps/demos/oscillator.js",
                ():void=>{
                    console.log("load oscillator module ok.");
                    let oscillator = new VoxCore["oscillatorApp"]();
                    oscillator.initialize(VoxCore);
                },
                "oscillator",
                "oscillatorApp"
            );
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

        if (this.m_engine != null) {

            this.m_degY += 1.0;
            this.m_degZ += 0.5;
            this.m_box.setRotationXYZ(0.0, this.m_degY, this.m_degZ);
            this.m_box.update();

            this.m_engine.run();
        }
    }
    
    getModuleName():string {
        return "mouseEvent";
    }
    getModuleClassName():string {
        return "mouseEventApp";
    }
    getRuntimeType():string {
        return "default";
    }
}

export { App };