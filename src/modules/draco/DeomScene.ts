import { ImageTextureProxy } from "../../vox/engine/texture/ImageTextureProxy";
import { Color4 } from "../../vox/engine/material/Color4";
import { RendererInstance } from "../../vox/engine/RendererInstance";
import { Engine } from "../../vox/engine/Engine";
import { IApp } from "../../vox/app/IApp";
import { AppBase } from "../../vox/app/AppBase";
import { ThreadSystemTask } from "../../vox/engine/thread/ThreadSystemTask";
import { IModuleLoader } from "../../vox/app/module/IModuleLoader";
import { ThreadSystemModule } from "./core/ThreadSystemModule";
import { NumberAddTask } from "./task/NumberAddTask";
import { DracoTaskListener } from "../../vox/engine/draco/DracoTaskListener";
import { DracoMeshRawBuilder } from "./draco/DracoMeshRawBuilder";
import { BoxEntity } from "../../vox/engine/entity/BoxEntity";
import { EntityObject } from "../../vox/engine/entity/EntityObject";

import { DirecLightParam } from "../../material/material/DirecLightParam";
import { NormalMapLightWrapper } from "../../material/material/NormalMapLightWrapper";
import { ParallaxMapLightWrapper } from "../../material/material/ParallaxMapLightWrapper";
import { IDracoMesh } from "../../vox/engine/mesh/IDracoMesh";
import { CameraCtrl } from "../../common/ctrl/CameraCtrl";

//import { BoxEntity } from "../../vox/engine/entity/BoxEntity";

/**
 * A 3D APP Box view Demo
 */
class DeomScene extends AppBase implements IApp,DracoTaskListener{

    private m_initFlag: boolean = true;
    private m_engine: RendererInstance = new RendererInstance();

    private m_threadModule: ThreadSystemModule = null;
    private m_threadModuleLoadFlag: boolean = true;

    private m_dracoRawTask: ThreadSystemTask = null;
    private m_dracoMeshBuilder: DracoMeshRawBuilder = new DracoMeshRawBuilder();

    private m_addNumberTask: NumberAddTask = null;
    private m_degY: number = 0.0;
    private m_degZ: number = 0.0;
    private m_tex: ImageTextureProxy;
    private m_texList: ImageTextureProxy[] = [];
    private m_camTrack: CameraCtrl = null;

    private m_lightParam: DirecLightParam = null;
    constructor() {
        super();
    }
    private initTestEvt(): void {
        
        document.onmousedown = (evt:any): void =>
        {
            if(this.m_threadModule != null && this.m_addNumberTask != null) {
                this.m_threadModule.addTaskData(this.m_addNumberTask.clacNumberList(new Float32Array([10, 12, 21, 22])));
                
            }
            if(this.m_threadModuleLoadFlag) {

                this.m_threadModuleLoadFlag = false;
                
                let moduleNS: string = "threadFuncs";
                this.getSystemModuleInstance(
                    moduleNS,
                    (ins: any):void=>{
                        this.m_threadModule = ins as ThreadSystemModule;
                        NumberAddTask.AddTaskCodeToThreadSystem( this.m_threadModule );
                        this.m_threadModule.initializeThread(2,"");
                        console.log("load threadFuncs module ok.");
                    }
                );
            }
            else {
                console.log("this.m_threadModule != null: ", this.m_threadModule != null);
                if(this.m_threadModule != null) {
                    if(this.m_addNumberTask == null) {
                        let task: ThreadSystemTask = this.m_threadModule.createThreadSystemTask(0);
                        this.m_addNumberTask = new NumberAddTask(task);
                        console.log("create new task: ", task);
                    }
                }
            }
            console.log("Mouse Event DeomScene Mouse Down...");
        }
    }
    
    loadedObjData(data: any, scale: number): void {

        console.log("data: ",data);
        //let box:BoxEntity = new BoxEntity();
        //box.initializeCube(700.0, [this.m_tex]);
        
        //let materialWrrapper: ParallaxMapLightWrapper = new ParallaxMapLightWrapper(this.m_lightParam);
        let materialWrrapper: NormalMapLightWrapper = new NormalMapLightWrapper(this.m_lightParam);
        materialWrrapper.getMaterial().initializeByCodeBuf( true );
        materialWrrapper.getMaterial().setTextureList( this.m_texList );

        let color: Color4 = new Engine.Color4();
        color.normalizeRandom(2.0);
        materialWrrapper.setRGBColor3f(color.r, color.g, color.b);

        let dracoMesh: IDracoMesh = new Engine.DracoMesh();
        
        //dracoMesh.setBufSortFormat(box.getMaterial().getBufSortFormat());
        dracoMesh.setBufSortFormat(materialWrrapper.getMaterial().getBufSortFormat());
        dracoMesh.initialize(data);

        //let scale: number = 3;
        let entity:EntityObject = new EntityObject();
        //entity.setMaterial( box.getMaterial() );
        entity.setMaterial( materialWrrapper.getMaterial() );
        entity.setMesh( dracoMesh );
        entity.setScaleXYZ(scale,scale,scale);
        this.m_engine.addEntity( entity );
        //this.m_entity = entity;
    }
    dracoParse(pmodule: any, index: number, total: number): void {
        console.log("dracoParse index: "+index);

        //this.loadedObjData([pmodule], 1.0);
    }
    dracoParseFinish(modules: any[], total: number): void {

        console.log("dracoParseFinish total: "+total,modules);
        this.loadedObjData(modules, 4.0);
    }
    private initDracoEvt(): void {
        
        document.onmousedown = (evt:any): void =>
        {
            if(this.m_dracoMeshBuilder.threadSystem != null) {

                //let url: string = "static/assets/modules/clothRoll.rawmd";
                let url: string = "static/assets/modules/loveass.rawmd";
                this.m_dracoMeshBuilder.load(url);
            }
            if(this.m_threadModuleLoadFlag) {

                this.m_threadModuleLoadFlag = false;
                
                let moduleNS: string = "threadFuncs";
                this.getSystemModuleInstance(
                    moduleNS,
                    (ins: any):void=>{
                        this.m_threadModule = ins as ThreadSystemModule;
                        console.log("load threadFuncs module ok.");
                    }
                );
            }
            else {
                console.log("this.m_threadModule != null: ", this.m_threadModule != null);
                if(this.m_threadModule != null) {
                    if(this.m_dracoRawTask == null) {
                        
                        console.log("create thread system task classId 0.");
                        this.m_dracoRawTask = this.m_threadModule.createThreadSystemTask(this.m_dracoMeshBuilder.getTaskClassId());
                        this.m_dracoMeshBuilder.threadSystem = this.m_threadModule;
                        this.m_dracoMeshBuilder.threadTask = this.m_dracoRawTask;
                        this.m_dracoMeshBuilder.initialize(2);
                        this.m_dracoMeshBuilder.setListener( this );
                    }
                }
            }
            console.log("Mouse Event DeomScene Mouse Down...");
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
    initialize(module: any, enabled: boolean = true): void {

        if (this.m_initFlag) {

            console.log("initialize draco module...");

            this.m_initFlag = false;
            this.m_engine.initialize();

            let tex: ImageTextureProxy = new Engine.ImageTextureProxy(64, 64);
            let img: HTMLImageElement = new Image();
            img.src = "static/assets/box_wood01.jpg";
            img.onload = (evt: any): void => {
                tex.setDataFromImage(img);
            }
            this.m_tex = tex;
            if(enabled) {
                //this.initTestEvt();
                this.initDracoEvt();
            }
            
            //  this.m_box = new BoxEntity();
            //  this.m_box.initializeCube(700.0, [tex]);
            //  this.m_engine.addEntity(this.m_box);
            
            let texName: string = "box";
            //let texName: string = "lava_03";
            //let texName: string = "metal_01";
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

    /**
     * running per frame
     */
    run(): void {
        
        if (this.m_engine != null) {

            this.m_degY += 1.0;
            this.m_degZ += 0.5;
            //  this.m_box.setRotationXYZ(0.0, this.m_degY, this.m_degZ);
            //  this.m_box.update();
            if (this.m_camTrack != null) {
                this.m_camTrack.rotationOffsetAngleWorldY(-0.2);
                // update camera data to gpu data
                this.m_engine.updateCamera();
            }
            this.m_engine.run();
        }
    }
    getModuleName():string {
        return "threadDemo";
    }
    getModuleClassName():string {
        return "threadDemoApp";
    }
    getRuntimeType():string {
        return "default";
    }
}

export { DeomScene };