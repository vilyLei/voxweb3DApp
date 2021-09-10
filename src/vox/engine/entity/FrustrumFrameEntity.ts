import { Camera } from "../view/Camera";
import { Color4 } from "../material/Color4";
import { EntityObject } from "./EntityObject";

interface FrustrumFrameEntity extends EntityObject {
    
    initiazlize(camera:Camera, farColor: Color4, nearColor: Color4, sideColor: Color4): void;
    updateFrame(camera:Camera): boolean;
}

export { FrustrumFrameEntity }