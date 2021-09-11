
import { Vector3D } from "../math/Vector3D";
import { Color4 } from "../material/Color4";
import { IEntityObject } from "./IEntityObject";
import {Camera} from "../view/Camera";

interface IDashedLineEntity extends IEntityObject {

    initializeLS(va:Vector3D,vb:Vector3D):void;
    initiazlizeFrustrum(camera:Camera): void;
    initializeBySegmentLine(pvList:Vector3D[], colors: Color4[]):void;
    initializeByPosition(pvList:Vector3D[]):void;
}

export { IDashedLineEntity }