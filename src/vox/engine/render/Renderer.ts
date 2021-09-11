
import {IEntityObject} from "../entity/IEntityObject";
/**
 * 渲染器
 */
interface Renderer {
    /**
     * 将可渲染对象添加到渲染器
     * add the renderable entity to renderer
     * @param entity renderable entity
     * @param processIndex renderer process index, default value is 0
     */
    addEntity(entity: IEntityObject, processIndex: number): void;
    /**
     * remove entity from the renderer instance
     * @param entity renderable entity
     */
    removeEntity(entity: IEntityObject): void;
    /**
    * remove entity from the renderer process by process index
    * @param IRenderEntity IRenderEntity instance
    * @param processIndex RenderProcess instance index in renderer instance
    */
    removeEntityByProcessIndex(entity: IEntityObject, processIndex: number): void;
    /**
     * append a new renderer process instance
     * @param batchEnabled batch renderer runtime resource data
     * @param processFixedState the process is fix renderer state
     * @returns return renderer process
     */
    appendProcess(batchEnabled: boolean, processFixedState: boolean): any;
    
    /**
     * update all data or status of the renderer runtime
     * should call this function per frame
     */
    update(): void;
    /**
     * run the specific renderer process by its index in the renderer instance
     * @param index the renderer process index in the renderer instance
     */
    runAt(index: number): void;
    /**
     * run all renderer processes in the renderer instance
     */
    run(): void;
    /**
     * 在任意阶段绘制一个指定的 entity,只要其资源数据准备完整
     */
    drawEntity(entity: IEntityObject, useGlobalUniform: boolean, forceUpdateUniform: boolean): void;
}

export {Renderer}