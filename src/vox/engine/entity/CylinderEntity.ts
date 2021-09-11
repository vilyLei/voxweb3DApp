
import { Vector3D } from "../math/Vector3D";
import { EntityObject } from "./EntityObject";
import { TextureProxy } from "../texture/TextureProxy";
import { Engine } from "../Engine";

class CylinderEntity extends EntityObject {

    private m_currEntity: CylinderEntity = null;
    constructor() {
        super(false);
        this.m_voxEntity = this.m_currEntity = new Engine.CylinderEntity();
    }
    destroy() {
        super.destroy();
        if (this.m_voxEntity == null) {
            this.m_currEntity = null;
        }
    }
    
    /**
     * initialize CylinderEntity instance.
     * @param radius cylinder radius
     * @param height cylinder height
     * @param longitudeNumSegments cylinder longitude segments number.
     * @param texList texture list
     * @param uvType the type that it create the geometry uv data, the default value is 1
     * @param alignYRatio the type that it create the geometry position data align y-axis, the default value is -0.5
     */
    initialize(radius: number, height: number, longitudeNumSegments: number, texList: TextureProxy[] = null, uvType: number = 1, alignYRatio: number = -0.5): void {
        this.m_currEntity.initialize(radius, height, longitudeNumSegments, texList, uvType, alignYRatio);
    }
}

export { CylinderEntity }