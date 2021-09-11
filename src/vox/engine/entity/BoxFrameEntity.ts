
import { Vector3D } from "../math/Vector3D";
import { AABB } from "../math/AABB";
import { Color4 } from "../material/Color4";
import { EntityObject } from "./EntityObject";
import { Engine } from "../Engine";

class BoxFrameEntity extends EntityObject {

    private m_currEngity: BoxFrameEntity = null;
    constructor(dynColorBoo:boolean = false) {
        super(false);
        this.m_voxEntity = this.m_currEngity = new Engine.BoxFrameEntity(dynColorBoo);
    }
    destroy() {
        super.destroy();
        if (this.m_voxEntity == null) {
            this.m_currEngity = null;
        }
    }
    
    setRGB3f(pr: number, pg: number, pb: number): void {
        this.m_currEngity.setRGB3f(pr, pg, pb);
    }
    initialize(minV: Vector3D, maxV: Vector3D): void {
        this.m_currEngity.initialize(minV, maxV);
    }
    initializeBySegmentLine(pvList: Vector3D[], colors: Color4[]): void {
        this.m_currEngity.initializeBySegmentLine(pvList, colors);
    }
    initializeByPosition(pvList: Vector3D[]): void {
        this.m_currEngity.initializeByPosition(pvList);
    }
    initializeByPosList8(posList8: Vector3D[]): void {
        this.m_currEngity.initializeByPosList8(posList8);
    }
    updateFrame(minV: Vector3D, maxV: Vector3D): void {
        this.m_currEngity.updateFrame(minV, maxV);
    }
    updateFrameByAABB(ab: AABB): void {
        this.m_currEngity.updateFrameByAABB(ab);
    }
    getVertexAt(vtxIndex: number, outPos: Vector3D): void {
        this.m_currEngity.getVertexAt(vtxIndex, outPos);
    }
    setVertexAt(vtxIndex: number, pos: Vector3D): void {
        this.m_currEngity.setVertexAt(vtxIndex, pos);
    }
}

export { BoxFrameEntity }