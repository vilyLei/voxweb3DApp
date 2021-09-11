
import { Vector3D } from "../math/Vector3D";
import { AABB } from "../math/AABB";
import { Color4 } from "../material/Color4";
import { IEntityObject } from "./IEntityObject";

interface BoxFrameEntity extends IEntityObject {

    setRGB3f(pr:number,pg:number,pb:number): void;
    initialize(minV:Vector3D,maxV:Vector3D):void;
    initializeBySegmentLine(pvList:Vector3D[], colors: Color4[]):void;
    initializeByPosition(pvList:Vector3D[]):void;
    initializeByPosList8(posList8:Vector3D[]):void;
    updateFrame(minV:Vector3D,maxV:Vector3D):void;
    updateFrameByAABB(ab:AABB):void;
    getVertexAt(vtxIndex:number,outPos:Vector3D):void;
    setVertexAt(vtxIndex:number,pos:Vector3D):void
}

export { BoxFrameEntity }