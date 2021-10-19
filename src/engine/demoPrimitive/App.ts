import { TextureProxy } from "../../vox/engine/texture/TextureProxy";
import { EngineInstance } from "../../vox/engine/EngineInstance";
import { IApp } from "../../vox/app/IApp";
import { AppBase } from "../../vox/app/AppBase";
import { BoxEntity } from "../../vox/engine/entity/BoxEntity";

import {RendererParam} from "../../vox/engine/scene/RendererParam";

import { JSZipModule } from "../../vox/libs/jszip/JSZipModule";
import JSZip from "jszip";
import { AxisEntity } from "../../vox/engine/entity/AxisEntity";

/**
 * A 3D APP Box view Demo
 */
class App extends AppBase implements IApp{

    private m_initFlag: boolean = true;
    private m_engine: EngineInstance = new EngineInstance();

    private m_box: BoxEntity;
    private m_degY: number = 0.0;
    private m_degZ: number = 0.0;
    constructor() { super(); }
    
    private m_moduleFlag: boolean = true;
    private m_module: JSZipModule = null;
    
    private testLoad(zipUrl:string):void
    {
        const reader:FileReader = new FileReader();
        reader.onload = (e:any) => {
            //target.loadedBuffer(<ArrayBuffer>reader.result);
            console.log("testLoad reader.onload....",e.target.result);
            this.parseBufferZip(e.target.result);
        };
        const request = new XMLHttpRequest();
        request.open("GET", zipUrl, true);
        request.responseType = "blob";
        request.onload = () => {
            if (request.status <= 206) {
            reader.readAsArrayBuffer(request.response);
            }else {
                console.log("loaded error request.status: ", request.status);
            }
        };
        request.onerror = e => {
            console.log("load error request.status: ", request.status);
        };
        request.send();
    }
    private parseBufferZip(buffer: ArrayBuffer): Promise<any> {
        return new Promise((resolve, reject) => {
                ///*
                let objZip: JSZip = this.m_module.createModule();
                objZip.loadAsync(buffer).then(file => {
                    console.log("zip parsed file: ",file);                    
                });
                //*/
            }
        );
    }
    private initModule(): void {
        document.onmousedown = (evt: any): void => {
            if (this.m_moduleFlag) {
                this.m_moduleFlag = false;
                let moduleNS: string = "jsZipModule";
                this.getSystemModuleInstance(
                    moduleNS,
                    (ins: any): void => {
                        this.m_module = ins as JSZipModule;
                        console.log("get a jsZipModule module: ", this.m_module);
                        //let jszip: JSZip = this.m_module.createModule();
                        //console.log("jszip: ",jszip);
                        this.testLoad( "static/assets/objs/objTest01.zip" );

                    }
                );
            }
            else if(this.m_module != null) {

            }
            console.log("Mouse Event initModule.");
        }
    }
    initialize(module: any): void {
        
        console.log("demoPrimitive app initialize() ....");

        if (this.m_initFlag) {
            
            this.m_initFlag = false;
            this.m_engine.initialize();
            ///*
            let tex: TextureProxy = this.m_engine.texLoader.getTexByUrl( "static/assets/box_wood01.jpg",true,true, true );
            this.m_box = new BoxEntity();
            this.m_box.initializeCube(700.0, [tex]);
            this.m_engine.rscene.addEntity(this.m_box);
            //*/
            let axis: AxisEntity = new AxisEntity();
            axis.initialize(500.0);
            this.m_engine.rscene.addEntity(axis);
        }
    }
    getRendererParam(): RendererParam {
        let param: RendererParam = this.m_engine.createRendererParam( null );
        console.log("param: ",param);
        return param;
    }

    /**
     * running per frame
     */
    run(): void {
        
        if(this.m_box != null) {
            
            this.m_degY += 0.2;
            this.m_degZ += 0.1;
            this.m_box.setRotationXYZ(0.0, this.m_degY, this.m_degZ);
            this.m_box.update();
        }
        //console.log("boxApp::run()....this.m_engine != null: ",this.m_engine != null);
        if (this.m_engine != null) this.m_engine.run();
    }
    getModuleName():string {
        return "demoPrimitive";
    }
    getModuleClassName():string {
        return "demoPrimitiveApp";
    }
    getRuntimeType():string {
        return "default";
    }
}

export { App };