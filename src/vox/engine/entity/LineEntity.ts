

import { Vector3D } from "../math/Vector3D";
import { EntityObject } from "./EntityObject";

interface LineEntity extends EntityObject {

    initialize(begin:Vector3D,end:Vector3D):void;
    initializeRectXOY(px:number,py:number,pw:number,ph:number):void;
}

export { LineEntity }