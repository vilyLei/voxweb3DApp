
import { Camera } from "../view/Camera";
import { RenderProxy } from "../render/RenderProxy";
/**
 * 渲染过程的上下文
 */
interface RendererContext {

    setClearRGBColor3f(pr: number, pg: number, pb: number): void;
    setClearRGBAColor4f(pr: number, pg: number, pb: number, pa: number): void;

    renderBegin(): void;
    updateCamera(): void;
    getCamera(): Camera;
    getRenderProxy(): RenderProxy;
    getViewportX(): number;
    getViewportY(): number;
    getViewportWidth(): number;
    getViewportHeight(): number;
    setRenderToBackBuffer(): void;
    
    resetState(): void;
    resetmaterial(): void;
    resetUniform(): void;
    runEnd(): void;
}

export { RendererContext }