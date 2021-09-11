
import { Vector3D } from "../math/Vector3D";
import { Color4 } from "../material/Color4";
import { IEntityObject } from "./IEntityObject";
import { TextureProxy } from "../texture/TextureProxy";

interface PlaneEntity extends IEntityObject {

    color0: Color4;
    color1: Color4;
    color2: Color4;
    color3: Color4;

    offsetU: number;
    offsetV: number;
    uScale: number;
    vScale: number;

    uvs: Float32Array;
    flipVerticalUV: boolean;
    vtxColorEnabled: boolean;
    premultiplyAlpha: boolean;

    initializeXOZSquare(size: number, texList: TextureProxy[]): void;
    initializeXOYSquare(size: number, texList: TextureProxy[]): void;

    /**
     * initialize a rectangle plane ,and it parallel the 3d space XOY plane
     * @param minX the min x axis position of the rectangle plane.
     * @param minZ the min y axis position of the rectangle plane.
     * @param pwidth the width of the rectangle plane.
     * @param height the height of the rectangle plane.
     * @param texList textures list, default value is null.
     */
    initializeXOY(minX: number, minY: number, pwidth: number, pheight: number, texList: TextureProxy[]): void;
    /**
     * initialize a square plane ,and it parallel the 3d space XOY plane
     * @param size the width and height of the rectangle plane.
     * @param texList textures list, default value is null.
     */
    initializeXOYSquare(size: number, texList: TextureProxy[]): void;
    /**
     * initialize a rectangle plane ,and it parallel the 3d space XOZ plane
     * @param minX the min x axis position of the rectangle plane.
     * @param minZ the min z axis position of the rectangle plane.
     * @param pwidth the width of the rectangle plane.
     * @param plong the long of the rectangle plane.
     * @param texList textures list, default value is null.
     */
    initializeXOZ(minX: number, minZ: number, pwidth: number, plong: number, texList: TextureProxy[]): void;
    /**
     * initialize a rectangle plane ,and it parallel the 3d space YOZ plane
     * @param minX the min x axis position of the rectangle plane.
     * @param minZ the min z axis position of the rectangle plane.
     * @param pwidth the width of the rectangle plane.
     * @param plong the long of the rectangle plane.
     * @param texList textures list, default value is null.
     */
    initializeYOZ(minY: number, minZ: number, pwidth: number, plong: number, texList: TextureProxy[]): void;
    /**
     * initialize a square plane ,and it parallel the 3d space XOZ plane
     * @param size the width and long of the rectangle plane.
     * @param texList textures list, default value is null.
     */
    initializeXOZSquare(size: number, texList: TextureProxy[]): void
    /**
     * 是否是平铺在屏幕上
     * @param enable true or false
     */
    setScreenAlignEnable(enable: boolean): void;

    showDoubleFace(always: boolean, doubleFace: boolean): void;
    toTransparentBlend(always: boolean, doubleFace: boolean): void;
    toBrightnessBlend(always: boolean, doubleFace: boolean): void;
    /**
     * initialize a rectangle fix screen size plane ,and it parallel the 3d space XOY plane
     * @param texList textures list, default value is null.
     */
    initializeFixScreen(texList: TextureProxy[]): void;
    setUVS(uvsLen8: Float32Array): void;
    reinitializeMesh(): void;
}

export { PlaneEntity }