import { IApp } from "../../vox/app/IApp";
import { AppBase } from "../../vox/app/AppBase";
import { ObjDataParser } from "./ObjDataParser";
/*
// for example
import { ImageTextureProxy } from "../../vox/engine/texture/ImageTextureProxy";
import { RendererInstance } from "../../vox/engine/RendererInstance";
import { Engine } from "../../vox/engine/Engine";
import { IDataMesh } from "../../vox/engine/mesh/IDataMesh";
import { EntityObject } from "../../vox/engine/entity/EntityObject";
import { BoxEntity } from "../../vox/engine/entity/BoxEntity";
//*/
/**
 * fps display module
 */
class App extends AppBase implements IApp{

    private m_initFlag: boolean = true;
    private m_parser: ObjDataParser = new ObjDataParser();

    //  private m_engine: RendererInstance = new RendererInstance();
    //  private m_entity: EntityObject;
    //  private m_degY: number = 0.0;
    //  private m_degZ: number = 0.0;
    constructor() { super(); }

    load(url: string, callback: (data:any)=>void, moduleScale: number = 1.0, dataIsZxy:boolean = false): void {
        if(url != null && url != "") {

            let request:XMLHttpRequest = new XMLHttpRequest();
            request.open('GET', url, true);
            request.onload = () => {
                if (request.status <= 206 && request.responseText.indexOf(" OBJ ") > 0) {
                    if(callback !=  null) {
                        
                        let objDataStr: string = request.responseText;
                        this.m_parser.parseStrData(objDataStr, moduleScale, dataIsZxy);

                        let dataObj: any  = {
                            position: this.m_parser.getVS(),
                            uv: this.m_parser.getUVS(),
                            normal: this.m_parser.getNVS(),
                            indices: this.m_parser.getIVS(),
                            url: url
                        };
                        callback( dataObj );
                    }
                }
                else {
                    console.error("load obj format module url error: ",url);
                }
            };
            request.onerror = e => {
              console.error("load obj format module url error: ",url);
            };
            request.send();
        }
    }

    private initTest(): void {

        /*
        this.m_engine.initialize();
        let tex: ImageTextureProxy = new Engine.ImageTextureProxy(64, 64);
        let img: HTMLImageElement = new Image();
        img.src = "static/assets/box_wood01.jpg";
        img.onload = (evt: any): void => {
            tex.setDataFromImage(img);
        }

        //  let box:BoxEntity = new BoxEntity();
        //  box.initializeCube(700.0, [tex]);
        //  this.m_engine.addEntity(box);
        //  this.m_entity = box;

        

        //let objUrl: string = "static/assets/objs/box01.obj";
        let objUrl: string = "static/assets/objs/building_001.obj";
        this.load(
            objUrl,
            (data: any): void => {
                console.log("loaded and finish parsing the obj data: ",data);
                
                let box:BoxEntity = new BoxEntity();
                box.initializeCube(700.0, [tex]);
                //this.m_engine.addEntity(box);
                //return;
                //let dataMesh: IDataMesh = new Engine.DataMesh();
                //  dataMesh.vs = new Float32Array(data.position);
                //  dataMesh.uvs = new Float32Array(data.uv);
                //  dataMesh.ivs = new Uint16Array(data.indices);

                let dataMesh: IDataMesh = new Engine.DataMesh();
                dataMesh.vs = new Float32Array(data.position);
                dataMesh.uvs = new Float32Array(data.uv);
                dataMesh.ivs = new Uint16Array(data.indices);
                dataMesh.setBufSortFormat(box.getMaterial().getBufSortFormat());
                dataMesh.initialize();
                
                let scale: number = 3;
                let entity:EntityObject = new EntityObject();
                entity.setMaterial( box.getMaterial() );
                entity.setMesh( dataMesh );
                entity.setScaleXYZ(scale,scale,scale);
                this.m_engine.addEntity( entity );
                this.m_entity = entity;

            }
        );
        //*/
    }
    initialize(module: any): void {

        console.log("objDataParser::initialize().....");
        if (this.m_initFlag) {
            
            this.m_initFlag = false;
            
            //this.initTest();
        }
    }

    /**
     * running per frame
     */
    run(): void {
        /*
        if (this.m_entity != null) {

            this.m_degY += 1.0;
            this.m_degZ += 0.5;
            this.m_entity.setRotationXYZ(0.0, this.m_degY, this.m_degZ);
            this.m_entity.update();
        }
        if (this.m_engine != null) {
            this.m_engine.run();
        }
        //*/
    }
    getModuleName():string {
        return "objDataParser";
    }
    getModuleClassName():string {
        return "objDataParserApp";
    }
    getRuntimeType():string {
        return "default";
    }
}

export { App };