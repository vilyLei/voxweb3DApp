import { TextureProxy } from "../texture/TextureProxy";
import { EntityObject } from "./EntityObject";
import { Engine } from "../Engine";

class BillboardEntity extends EntityObject {
    
    private m_currEngity: BillboardEntity = null;
    constructor() {
        super(false);
        this.m_voxEntity = this.m_currEngity = new Engine.BillboardEntity();
    }
    destroy() {
        super.destroy();
        if (this.m_voxEntity == null) {
            this.m_currEngity = null;
        }
    }

    setRGB3f(pr: number, pg: number, pb: number): void {
        this.m_currEngity.setRGB3f(pr,pg,pb);
    }
    setRGBOffset3f(pr: number, pg: number, pb: number): void {
        this.m_currEngity.setRGBOffset3f(pr,pg,pb);
    }
    setFadeFactor(pa: number): void {
        this.m_currEngity.setFadeFactor(pa);
    }
    getFadeFactor(): number {
        return this.m_currEngity.getFadeFactor();
    }
    getRotationZ(): number {
        return this.m_currEngity.getRotationZ();
    }
    setRotationZ(degrees: number): void {

    }
    getScaleX(): number {
        return this.m_currEngity.getScaleX();
    }
    getScaleY(): number {
        return this.m_currEngity.getScaleY();
    }
    setScaleX(p: number): void {
        this.m_currEngity.setScaleX(p);
    }
    setScaleY(p: number): void {
        this.m_currEngity.setScaleY(p);
    }
    setScaleXY(sx: number, sy: number): void {
        this.m_currEngity.setScaleXY(sx, sy);
    }

    toTransparentBlend(always: boolean): void {
        this.m_currEngity.toTransparentBlend( always );
    }
    toBrightnessBlend(always: boolean): void {
        this.m_currEngity.toBrightnessBlend( always );
    }
    initializeSquare(size: number, texList: TextureProxy[] = null): void {
        this.m_currEngity.initializeSquare( size, texList );
    }
    initialize(bw: number, bh: number, texList: TextureProxy[] = null): void {
        this.m_currEngity.initialize( bw, bh, texList );
    }
    setUV(pu: number, pv: number, du: number, dv: number): void {
        this.m_currEngity.setUV( pu, pv, du, dv );
    }
}

export { BillboardEntity }