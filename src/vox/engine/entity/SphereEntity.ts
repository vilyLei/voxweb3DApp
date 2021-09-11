
import { Vector3D } from "../math/Vector3D";
import { TextureProxy } from "../texture/TextureProxy";
import { EntityObject } from "./EntityObject";
import { Engine } from "../Engine";

class SphereEntity extends EntityObject {

    private m_currEngity: SphereEntity = null;    
    constructor() {
        super(false);
        this.m_voxEntity = this.m_currEngity = new Engine.SphereEntity();
    }
    destroy() {
        super.destroy();
        if (this.m_voxEntity == null) {
            this.m_currEngity = null;
        }
    }
    
    initialize(radius: number, longitudeNumSegments: number, latitudeNumSegments: number, texList: TextureProxy[] = null): void {
        this.m_currEngity.initialize(radius, longitudeNumSegments, latitudeNumSegments, texList);
    }
}

export { SphereEntity }