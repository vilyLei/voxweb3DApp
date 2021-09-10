
import { Vector3D } from "../math/Vector3D";
import { Color4 } from "../material/Color4";
import { EntityObject } from "./EntityObject";
import {Camera} from "../view/Camera";

interface DashedLineEntity extends EntityObject {

    initializeLS(va:Vector3D,vb:Vector3D):void;
    initiazlizeFrustrum(camera:Camera): void;
    initializeBySegmentLine(pvList:Vector3D[], colors: Color4[]):void;
    initializeByPosition(pvList:Vector3D[]):void;
}

export { DashedLineEntity }