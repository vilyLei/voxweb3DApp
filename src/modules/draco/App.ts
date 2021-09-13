import { ImageTextureProxy } from "../../vox/engine/texture/ImageTextureProxy";
import { EngineInstance } from "../../vox/engine/EngineInstance";
import { Engine } from "../../vox/engine/Engine";
import { IApp } from "../../vox/app/IApp";
import { AppBase } from "../../vox/app/AppBase";
import { ThreadSystemTask } from "../../vox/engine/thread/ThreadSystemTask";
import { IModuleLoader } from "../../vox/app/module/IModuleLoader";
import { ThreadSystemModule } from "./core/ThreadSystemModule";
import { NumberAddTask } from "./task/NumberAddTask";
import { DracoMeshRawBuilder } from "./draco/DracoMeshRawBuilder";

//import { BoxEntity } from "../../vox/engine/entity/BoxEntity";

/**
 * A 3D APP Box view Demo
 */
class App extends AppBase implements IApp{

    private m_initFlag: boolean = true;
    private m_engine: EngineInstance = new EngineInstance();

    private m_threadModule: ThreadSystemModule = null;
    private m_threadModuleLoadFlag: boolean = true;
    private m_dracoRawTask: ThreadSystemTask = null;
    private m_addNumberTask: NumberAddTask = null;
    private m_dracoMeshBuilder: DracoMeshRawBuilder = new DracoMeshRawBuilder();
    private m_degY: number = 0.0;
    private m_degZ: number = 0.0;
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
            console.log("Mouse Event App Mouse Down...");
        }
    }
    private initDracoEvt(): void {
        
        document.onmousedown = (evt:any): void =>
        {
            if(this.m_threadModuleLoadFlag) {

                this.m_threadModuleLoadFlag = false;
                
                let moduleNS: string = "threadFuncs";
                this.getSystemModuleInstance(
                    moduleNS,
                    (ins: any):void=>{
                        this.m_threadModule = ins as ThreadSystemModule;
                        //NumberAddTask.AddTaskCodeToThreadSystem( this.m_threadModule );
                        //this.m_threadModule.initializeThread(2,"");
                        console.log("load threadFuncs module ok.");
                    }
                );
            }
            else {
                console.log("this.m_threadModule != null: ", this.m_threadModule != null);
                if(this.m_threadModule != null) {
                    if(this.m_dracoRawTask == null) {
                        
                        this.m_dracoRawTask = this.m_threadModule.createThreadSystemTask(0);
                        this.m_dracoMeshBuilder.threadSystem = this.m_threadModule;
                        this.m_dracoMeshBuilder.threadTask = this.m_dracoRawTask;
                        this.m_dracoMeshBuilder.initialize(2);
                    }                
                }
            }
            console.log("Mouse Event App Mouse Down...");
        }
    }
    initialize(module: any): void {

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
            //this.initTestEvt();
            this.initDracoEvt();
            
            //  this.m_box = new BoxEntity();
            //  this.m_box.initializeCube(700.0, [tex]);
            //  this.m_engine.addEntity(this.m_box);
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

export { App };