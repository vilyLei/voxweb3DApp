import { Camera } from "../view/Camera";
import { Color4 } from "../material/Color4";
import { IEntityObject } from "./IEntityObject";

interface IFrustrumFrameEntity extends IEntityObject {
    
    initiazlize(camera:Camera, farColor: Color4, nearColor: Color4, sideColor: Color4): void;
    updateFrame(camera:Camera): boolean;
}

export { IFrustrumFrameEntity }