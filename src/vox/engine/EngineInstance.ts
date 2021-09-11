
import { RendererContext } from "../../vox/engine/render/RendererContext";
import { Renderer } from "../../vox/engine/render/Renderer";
import { IEntityObject } from "../../vox/engine/entity/IEntityObject";

import { Engine } from "./Engine";
import { Camera } from "./view/Camera";

class EngineInstance {
    
    private m_renderer: Renderer = null;
    private m_rcontext: RendererContext = null;

    constructor() {
        console.log("EngineInstance::constructor()....");
    }

    initialize(): void {
        if(this.m_renderer == null) {
            this.m_renderer = Engine.GetRenderer();
            this.m_rcontext = Engine.GetRendererContext();
        }
    }
    
    getRenderer(): Renderer {
        return this.m_renderer;
    }
    getRendererContext(): RendererContext {
        return this.m_rcontext;
    }

    setClearRGBColor3f(pr: number, pg: number, pb: number): void {
        this.m_rcontext.setClearRGBColor3f(pr, pg, pb);
    }
    setClearRGBAColor4f(pr: number, pg: number, pb: number, pa: number): void {
        this.m_rcontext.setClearRGBAColor4f(pr, pg, pb, pa);
    }

    /**
     * initialize the renderer rendering status.
     */
    begin(): void {
        this.m_rcontext.renderBegin();
    }
    /**
     * update all data or status of the renderer runtime
     * should call this function per frame
     */
    update(): void {
        this.m_renderer.update();
    }
    /**
     * run all renderer processes in the renderer instance
     */
    render(): void {
        this.m_renderer.run();
    }
    /**
     * run the specific renderer process by its index in the renderer instance
     * @param index the renderer process index in the renderer instance
     */
    renderAt(processIndex: number): void {
        this.m_renderer.runAt(processIndex);
    }
    /**
     * run renderer the all processes end.
     */
    end(): void {
        this.m_rcontext.runEnd();
    }
    /**
     * run the rendering complete process
     */
    run(): void {
        this.m_rcontext.renderBegin();
        this.m_renderer.update();
        this.m_renderer.run();
        this.m_rcontext.runEnd();
    }
    /**
     * 将可渲染对象添加到渲染器
     * add the renderable entity to renderer
     * @param entity renderable entity
     * @param processIndex renderer process index, default value is 0
     */
    addEntity(entity: IEntityObject, processIndex: number = 0): void {
        let reobj: any = entity as any;
        if(reobj.__$getREObj != undefined) {
            entity = reobj.__$getREObj();
        }
        this.m_renderer.addEntity(entity, processIndex);
    }
    /**
     * remove entity from the renderer instance
     * @param entity renderable entity
     */
    removeEntity(entity: IEntityObject): void {
        this.m_renderer.removeEntity(entity);
    }
    /**
     * remove entity from the renderer process by process index
     * @param IRenderEntity IRenderEntity instance
     * @param processIndex RenderProcess instance index in renderer instance
     */
    removeEntityByProcessIndex(entity: IEntityObject, processIndex: number): void {
        this.m_renderer.removeEntityByProcessIndex(entity, processIndex);
    }
    /**
     * append a new renderer process instance
     * @param batchEnabled batch renderer runtime resource data
     * @param processFixedState the process is fix renderer state
     * @returns return renderer process
     */
    appendProcess(batchEnabled: boolean = true, processFixedState: boolean = false): any {
        this.m_renderer.appendProcess(batchEnabled, processFixedState);
    }
    
    /**
     * 在任意阶段绘制一个指定的 entity,只要其资源数据准备完整(不是必要条件)
     */
    drawEntity(entity: IEntityObject, useGlobalUniform: boolean = false, forceUpdateUniform: boolean = true): void {
        this.m_renderer.drawEntity(entity, useGlobalUniform, forceUpdateUniform);
    }
    getCamera(): Camera {
        return this.m_rcontext.getCamera();
    }
    updateCamera(): void {
        this.m_rcontext.updateCamera();
    }
}
export { EngineInstance };