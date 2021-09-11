

import { Vector3D } from "../math/Vector3D";
import { Color4 } from "../material/Color4";
import { IEntityObject } from "./IEntityObject";

interface ILineEntity extends IEntityObject {

    color:Color4;
    dynColorEnabled: boolean;
    initialize(begin:Vector3D,end:Vector3D):void;
    initializeRectXOY(px:number,py:number,pw:number,ph:number):void;
}

export { ILineEntity }