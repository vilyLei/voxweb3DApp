
import {RenderProxy} from "../render/RenderProxy";
/**
 * Texture cpu memory data object
 */
interface TextureProxy {

    name: string;
    internalFormat: number;
    srcFormat: number;
    dataType: number;
    wrap_s: number;
    wrap_t: number;
    wrap_r: number;

    mipmapEnabled: boolean;
    flipY: boolean;
    premultiplyAlpha: boolean;
    /**
     * the value contains (1,2,4,8) 
     */
    unpackAlignment: number;
    minFilter: number;
    magFilter: number;
    // 用于记录自身变换的版本号，例如数据变换
    version: number;
    
    __$setRenderProxy(rc: RenderProxy): void;
    /**
     * 被引用计数加一
     */
    __$attachThis(): void;
    /**
     * 被引用计数减一
     */
    __$detachThis(): void;
    /**
     * @returns 获得引用计数值
     */
    getAttachCount(): number;
    /**
     * @returns 返回true, 表示当前纹理对象是渲染直接使用其对应的显存资源的对象
     *          返回false, 表示不能直接使用对应的显存资源
     */
    isDirect(): boolean;
    
    /**
     * @returns 返回自己的 纹理资源 unique id, 这个id会被对应的资源管理器使用, 此方法子类可以依据需求覆盖
     */
    getResUid(): number;
    /**
     * @returns 返回自己的 unique id, 此方法不允许子类覆盖
     */
    getUid(): number;
    setWrap(wrap: number): void;
    /**
     * 注意，这个返回值在多 renderer instance的时候，如果renderer instance 共享了这个texture，则此返回值和TextureSlot相关
     * @returns the texture gpu resource is enabled or not.
     */
    isGpuEnabled(): boolean;
    /**
     * @returns The fragment processor texture sampler type.
     */
    getSampler(): number;
    /**
     * @returns return value is TextureConst.TEXTURE_2D or TextureConst.TEXTURE_CUBE or TextureConst.TEXTURE_3D
     */
    getTargetType(): number;
    // logic texture size
    getWidth(): number;
    getHeight(): number;
    /**
     * @returns the texture data is enough or not.
     */
    isDataEnough(): boolean;

    /**
     * 准备将数据更新到当前的 Gpu context,这是一个异步过程，在渲染运行时才会真正的提交给gpu
     * 这个函数由用户主动调用
     * 这个函数不能被子类覆盖
     */
    updateDataToGpu(rc: RenderProxy, deferred: boolean): void;
    /**
     * @returns This textureProxy instance has been destroyed.
     */
    isDestroyed(): boolean;
    
}

export {TextureProxy};