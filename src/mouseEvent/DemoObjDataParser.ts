import { ImageTextureProxy } from "../vox/engine/texture/ImageTextureProxy";
import { RendererInstance } from "../vox/engine/RendererInstance";
import { IDataMesh } from "../vox/engine/mesh//IDataMesh";
import { Engine } from "../vox/engine/Engine";
import { AppBase } from "../vox/app/AppBase";
import { EntityObject } from "../vox/engine/entity/EntityObject";
import { BoxEntity } from "../vox/engine/entity/BoxEntity";
import { IDemoModule } from "./IDemoModule";

/**
 * A 3D APP Box view Demo
 */
class DemoObjDataParser extends AppBase implements IDemoModule{

    private m_initFlag: boolean = true;
    private m_engine: RendererInstance = new RendererInstance();
    private m_tex: ImageTextureProxy;

    private m_moduleFlag: boolean = true;
    private m_module: any = null;
    private m_entity: EntityObject;

    private m_degY: number = 0.0;
    private m_degZ: number = 0.0;
    constructor() {
        super();
    }

    private loadedObjData(data: any, scale: number): void {

        console.log("data: ",data);
        let box:BoxEntity = new BoxEntity();
        box.initializeCube(700.0, [this.m_tex]);

        let dataMesh: IDataMesh = new Engine.DataMesh();
        dataMesh.vs = new Float32Array(data.position);
        dataMesh.uvs = new Float32Array(data.uv);
        dataMesh.nvs = new Float32Array(data.normal);
        dataMesh.ivs = new Uint16Array(data.indices);
        dataMesh.setBufSortFormat(box.getMaterial().getBufSortFormat());
        dataMesh.initialize();
        
        //let scale: number = 3;
        let entity:EntityObject = new EntityObject();
        entity.setMaterial( box.getMaterial() );
        entity.setMesh( dataMesh );
        entity.setScaleXYZ(scale,scale,scale);
        this.m_engine.addEntity( entity );
        this.m_entity = entity;
    }
    private initModule(): void {

        document.onmousedown = (evt: any): void => {
            if (this.m_moduleFlag) {
                this.m_moduleFlag = false;
                let moduleNS: string = "objDataParser";
                this.getModuleInstance(
                    moduleNS,
                    (ins: any): void => {
                        this.m_module = ins;
                        console.log("get a ObjDataParserModule ins");
                        
                        let objUrl: string = "static/assets/objs/box01.obj";
                        //let objUrl: string = "static/assets/objs/torus01.obj";
                        //let objUrl: string = "static/assets/objs/building_001.obj";
                        this.m_module.load(objUrl, (data:any):void => {
                            this.loadedObjData(data, 6);
                        });
                    }
                );
            }
            else if(this.m_module != null) {

                //let objUrl: string = "static/assets/objs/box01.obj";
                //let objUrl: string = "static/assets/objs/building_001.obj";
                let objUrl: string = "static/assets/objs/torus01.obj";
                this.m_module.load(objUrl, (data:any):void => {
                    this.loadedObjData(data, 8);
                });
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

            //  let box: BoxEntity = new Engine.BoxEntity();
            //  box.initializeCube(700.0, [this.m_tex]);
            //  this.m_engine.addEntity(box);
            //  this.m_entity = box;
        }
    }

    /**
     * running per frame
     */
    run(): void {

        if(this.m_entity != null) {

            this.m_degY += 1.0;
            this.m_degZ += 0.5;
            this.m_entity.setRotationXYZ(0.0, this.m_degY, this.m_degZ);
            this.m_entity.update();
        }

        if (this.m_engine != null) {
            this.m_engine.run();
        }
    }
}

export { DemoObjDataParser };