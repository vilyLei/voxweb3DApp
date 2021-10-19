
import { RendererContext } from "../../../vox/engine/render/RendererContext";
import { Renderer } from "../../../vox/engine/render/Renderer";
import { IRendererScene } from "../../../vox/engine/scene/IRendererScene";
import { IEntityObject } from "../../../vox/engine/entity/IEntityObject";
import { IEntityObjectContainer } from "../../../vox/engine/entity/IEntityObjectContainer";
import {Color4} from "../material/Color4";

import { Engine } from "../Engine";
import { Camera } from "../view/Camera";

class RendererScene implements IRendererScene{

    private m_renderer: Renderer = null;
    private m_rcontext: RendererContext = null;
    private m_rscene: IRendererScene = null;
    constructor() {
    }
    getUid(): number {
        return this.m_rscene.getUid();
    }
    initialize(scene: IRendererScene): void {
        if (this.m_rscene == null) {
            this.m_rscene = scene;
            this.m_renderer = Engine.GetRenderer();
            this.m_rcontext = Engine.GetRendererContext();
        }
    }

    getRendererContext(): RendererContext {
        return this.m_rcontext;
    }
    getRenderer(): Renderer {
        return this.m_renderer;
    }
    getRScene(): IRendererScene {
        return this.m_rscene;
    }

    /**
     * @param type event type
     * @param target event listerner
     * @param func event listerner callback function
     * @param captureEnabled the default value is true
     * @param bubbleEnabled the default value is false
     */
    addEventListener(type: number, target: any, func: (evt: any) => void, captureEnabled: boolean = true, bubbleEnabled: boolean = false): void {
       this.m_rscene.addEventListener(type, target, func, captureEnabled, bubbleEnabled);
    }
    /**
     * @param type event type
     * @param target event listerner
     * @param func event listerner callback function
     */
    removeEventListener(type: number, target: any, func: (evt: any) => void): void {
        this.m_rscene.removeEventListener(type, target, func);
    }
    isRayPickSelected(): boolean {
        return this.m_rscene.isRayPickSelected();
    }
    setRayTestEanbled(enabled: boolean): void {
        this.m_rscene.setRayTestEanbled(enabled);
    }
    setClearUint24Color(colorUint24: number, alpha: number = 1.0): void {
        this.m_rscene.setClearUint24Color(colorUint24, alpha);
    }
    setClearRGBColor3f(pr: number, pg: number, pb: number): void {
        this.m_rscene.setClearRGBColor3f(pr, pg, pb);
    }
    setClearRGBAColor4f(pr: number, pg: number, pb: number, pa: number): void {
        this.m_rscene.setClearRGBAColor4f(pr, pg, pb, pa);
    }
    setClearColor(color: Color4): void {
        this.m_rscene.setClearColor( color );
    }
    setRenderToBackBuffer(): void {
        this.m_rscene.setRenderToBackBuffer();
    }
    /**
     * the function only resets the renderer instance rendering status.
     * you should use it before the run or runAt function is called.
     */
    renderBegin(contextBeginEnabled: boolean = true): void {
        this.m_rscene.renderBegin(contextBeginEnabled);
    }
    /**
     * the function resets the renderer scene status.
     * you should use it on the frame starting time.
     */
    runBegin(autoCycle: boolean = true, contextBeginEnabled: boolean = true): void {
        this.m_rscene.runBegin(autoCycle, contextBeginEnabled);
    }
    /**
     * update all data or status of the renderer runtime
     * should call this function per frame
     */
    update(autoCycle: boolean = true, mouseEventEnabled: boolean = true): void {
        this.m_rscene.update(autoCycle, mouseEventEnabled);
    }
    /**
     * run the specific renderer process by its index in the renderer instance
     * @param index the renderer process index in the renderer instance
     */
    runAt(processIndex: number): void {
        this.m_rscene.runAt(processIndex);
    }
    /**
     * run renderer the all processes end.
     */
    runEnd(): void {
        this.m_rscene.runEnd();
    }

    /**
     * run all renderer processes in the renderer instance
     */
    run(autoCycle: boolean = true): void {
        this.m_rscene.run(autoCycle);
    }
    
    addContainer(child: IEntityObjectContainer, processIndex: number): void {
        this.m_rscene.addContainer(child, processIndex);
    }
    removeContainer(child: IEntityObjectContainer): void {
        this.m_rscene.removeContainer( child );
    }
    /**
     * 将可渲染对象添加到渲染器
     * add the renderable entity to renderer
     * @param entity renderable entity
     * @param processIndex renderer process index, default value is 0
     */
    addEntity(entity: IEntityObject, processIndex: number = 0, deferred: boolean = true): void {
        let reobj: any = entity as any;
        if (reobj.__$getREObj != undefined) {
            entity = reobj.__$getREObj();
        }
        this.m_rscene.addEntity(entity, processIndex, deferred);
    }
    /**
     * remove entity from the renderer instance
     * @param entity renderable entity
     */
    removeEntity(entity: IEntityObject): void {
        let reobj: any = entity as any;
        if (reobj.__$getREObj != undefined) {
            entity = reobj.__$getREObj();
        }
        this.m_rscene.removeEntity(entity);
    }
    /**
     * append a new renderer process instance
     * @param batchEnabled batch renderer runtime resource data
     * @param processFixedState the process is fix renderer state
     */
    appendARendererProcess(batchEnabled: boolean = true, processFixedState: boolean = false): void {
        this.m_rscene.appendARendererProcess(batchEnabled, processFixedState);
    }

    /**
     * 单独绘制可渲染对象, 可能是使用了 global material也可能没有。这种方式比较耗性能,只能用在特殊的地方。
     * @param entity 需要指定绘制的 IRenderEntity 实例
     * @param useGlobalUniform 是否使用当前 global material 所携带的 uniform, default value: false
     * @param forceUpdateUniform 是否强制更新当前 global material 所对应的 shader program 的 uniform, default value: true
     */
    drawEntity(entity: IEntityObject, useGlobalUniform: boolean = false, forceUpdateUniform: boolean = true): void {
        this.m_rscene.drawEntity(entity, useGlobalUniform, forceUpdateUniform);
    }
    getCamera(): Camera {
        return this.m_rscene.getCamera();
    }
    updateCamera(): void {
        this.m_rscene.updateCamera();
    }
}
export { RendererScene };