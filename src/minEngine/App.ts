import { ImageTextureProxy } from "../vox/engine/texture/ImageTextureProxy";
import { RendererInstance } from "../vox/engine/RendererInstance";
import { Engine } from "../vox/engine/Engine";
import { IApp } from "../vox/app/IApp";
import { AppBase } from "../vox/app/AppBase";
import { PlaneEntity } from "../vox/engine/entity/PlaneEntity";

/**
 * A 3D APP Box view Demo
 */
class App extends AppBase implements IApp{

    private m_initFlag: boolean = true;
    private m_engine: RendererInstance = new RendererInstance();

    private m_plane: PlaneEntity;
    private m_degY: number = 0.0;
    private m_degZ: number = 0.0;
    constructor() { super(); }
    
    initialize(module: any): void {
        
        console.log("minEngine app module demo initialize() ....");

        if (this.m_initFlag) {
            
            this.m_initFlag = false;
            this.m_engine.initialize();

            let tex: ImageTextureProxy = new Engine.ImageTextureProxy(64, 64);
            let img: HTMLImageElement = new Image();
            img.src = "static/assets/box_wood01.jpg";
            img.onload = (evt: any): void => {
                tex.setDataFromImage(img);
            }

            this.m_plane = new PlaneEntity();
            this.m_plane.showDoubleFace();
            this.m_plane.initializeXOZSquare(700.0, [tex]);
            this.m_engine.addEntity(this.m_plane);
        }
    }

    /**
     * running per frame
     */
    run(): void {
        if(this.m_plane != null) {
            
            this.m_degY += 1.0;
            this.m_degZ += 0.5;
            this.m_plane.setRotationXYZ(0.0, this.m_degY, this.m_degZ);
            this.m_plane.update();
        }
        if (this.m_engine != null) this.m_engine.run();
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