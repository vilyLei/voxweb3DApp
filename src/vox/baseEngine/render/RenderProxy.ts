
/**
 * 渲染过程代理
 */
interface RenderProxy {

    getUid(): number;
    /**
     * @returns return renderer context unique id
     */
    getRCUid(): number;
    
    readPixels(px: number, py: number, width: number, height: number, format: number, dataType: number, pixels: Uint8Array): void;
    getGLVersion(): number;
    /**
    * @returns return gpu context lost status
    */
   isContextLost(): boolean;
}

export {RenderProxy}