import { Color4 } from "../material/Color4";
import { TextureProxy } from "../texture/TextureProxy";
import { EntityObject } from "./EntityObject";
import { Engine } from "../Engine";

class PlaneEntity extends EntityObject {

    private m_currEngity: PlaneEntity = null;
    constructor() {
        super(false);
        this.m_voxEntity = this.m_currEngity = new Engine.PlaneEntity();
    }
    destroy() {
        super.destroy();
        if (this.m_voxEntity == null) {
            this.m_currEngity = null;
            this.uvs = null;
        }
    }

    readonly color0: Color4 = new Engine.Color4();
    readonly color1: Color4 = new Engine.Color4();
    readonly color2: Color4 = new Engine.Color4();
    readonly color3: Color4 = new Engine.Color4();

    offsetU: number = 0.0;
    offsetV: number = 0.0;
    uScale: number = 1.0;
    vScale: number = 1.0;

    uvs: Float32Array = null;
    flipVerticalUV: boolean = false;
    vtxColorEnabled: boolean = false;
    premultiplyAlpha: boolean = false;

    private syncParam(): void {

        let entity:PlaneEntity = this.m_currEngity;
        
        entity.offsetU = this. offsetU;
        entity.offsetV = this. offsetV;
        entity.uScale = this. uScale;
        entity.vScale = this. vScale;
        entity.uvs = this. uvs;
        entity.flipVerticalUV = this.flipVerticalUV;
        entity.vtxColorEnabled = this.vtxColorEnabled;
        entity.premultiplyAlpha = this.premultiplyAlpha;

        entity.color0.copyFrom( this.color0 );
        entity.color1.copyFrom( this.color1 );
        entity.color2.copyFrom( this.color2 );
        entity.color3.copyFrom( this.color3 );
        
    }
    /**
     * initialize a rectangle plane ,and it parallel the 3d space XOY plane
     * @param minX the min x axis position of the rectangle plane.
     * @param minZ the min y axis position of the rectangle plane.
     * @param pwidth the width of the rectangle plane.
     * @param height the height of the rectangle plane.
     * @param texList textures list, default value is null.
     */
    initializeXOY(minX: number, minY: number, pwidth: number, pheight: number, texList: TextureProxy[] = null): void {
        this.syncParam();
        this.m_currEngity.initializeXOY(minX, minY, pwidth, pheight, texList);
    }
    /**
     * initialize a square plane ,and it parallel the 3d space XOY plane
     * @param size the width and height of the rectangle plane.
     * @param texList textures list, default value is null.
     */
    initializeXOYSquare(size: number, texList: TextureProxy[] = null): void {
        this.syncParam();
        this.m_currEngity.initializeXOYSquare(size, texList);
    }
    /**
     * initialize a rectangle plane ,and it parallel the 3d space XOZ plane
     * @param minX the min x axis position of the rectangle plane.
     * @param minZ the min z axis position of the rectangle plane.
     * @param pwidth the width of the rectangle plane.
     * @param plong the long of the rectangle plane.
     * @param texList textures list, default value is null.
     */
    initializeXOZ(minX: number, minZ: number, pwidth: number, plong: number, texList: TextureProxy[] = null): void {
        this.syncParam();
        this.m_currEngity.initializeXOZ(minX, minZ, pwidth, plong, texList);
    }
    /**
     * initialize a rectangle plane ,and it parallel the 3d space YOZ plane
     * @param minX the min x axis position of the rectangle plane.
     * @param minZ the min z axis position of the rectangle plane.
     * @param pwidth the width of the rectangle plane.
     * @param plong the long of the rectangle plane.
     * @param texList textures list, default value is null.
     */
    initializeYOZ(minY: number, minZ: number, pwidth: number, plong: number, texList: TextureProxy[] = null): void {
        this.syncParam();
        this.m_currEngity.initializeYOZ(minY, minZ, pwidth, plong, texList);
    }
    /**
     * initialize a square plane ,and it parallel the 3d space XOZ plane
     * @param size the width and long of the rectangle plane.
     * @param texList textures list, default value is null.
     */
    initializeXOZSquare(size: number, texList: TextureProxy[] = null): void {
        this.syncParam();
        this.m_currEngity.initializeXOZSquare(size, texList);
    }
    /**
     * initialize a rectangle fix screen size plane ,and it parallel the 3d space XOY plane
     * @param texList textures list, default value is null.
     */
    initializeFixScreen(texList: TextureProxy[] = null): void {
        this.syncParam();
        this.m_currEngity.initializeFixScreen( texList );
    }
    /**
     * 是否是平铺在屏幕上
     * @param enable true or false
     */
    setScreenAlignEnable(enable: boolean): void {        
        this.m_currEngity.setScreenAlignEnable( enable );
    }

    showDoubleFace(always: boolean = false, doubleFace: boolean = true): void {
        this.m_currEngity.showDoubleFace( always,  doubleFace);
    }
    toTransparentBlend(always: boolean = false, doubleFace: boolean = true): void {
        this.m_currEngity.showDoubleFace( always,  doubleFace);
    }
    toBrightnessBlend(always: boolean = false, doubleFace: boolean = true): void {
        this.m_currEngity.toBrightnessBlend( always,  doubleFace);
    }
    setUVS(uvsLen8: Float32Array): void {
        this.m_currEngity.setUVS( uvsLen8 );
    }
    reinitializeMesh(): void {
        this.m_currEngity.reinitializeMesh();
    }
}

export { PlaneEntity }