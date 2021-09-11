import { Camera } from "../view/Camera";
import { Color4 } from "../material/Color4";
import { EntityObject } from "./EntityObject";
import { Engine } from "../Engine";

class FrustrumFrameEntity extends EntityObject {

    private m_currEngity: FrustrumFrameEntity = null;
    constructor() {
        super(false);
        this.m_voxEntity = this.m_currEngity = new Engine.BoxFrameEntity();
    }
    destroy() {
        super.destroy();
        if (this.m_voxEntity == null) {
            this.m_currEngity = null;
        }
    }

    initiazlize(camera: Camera, farColor: Color4 = null, nearColor: Color4 = null, sideColor: Color4 = null): void {
        this.m_currEngity.initiazlize(camera, farColor, nearColor, sideColor);
    }
    updateFrame(camera: Camera): boolean {
        return this.m_currEngity.updateFrame(camera);
    }
}

export { FrustrumFrameEntity }