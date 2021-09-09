import { TextureProxy } from "../texture/TextureProxy";

/**
 * Texture cpu memory data object
 */
interface ImageTextureProxy extends TextureProxy {

    setDataFromImage(img: HTMLCanvasElement | HTMLImageElement): void;
    
}

export {ImageTextureProxy};