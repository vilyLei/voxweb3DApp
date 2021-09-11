
import { Color4 } from "../material/Color4";
import { IAxisEntity } from "./IAxisEntity";
import { EntityObject } from "./EntityObject";
import { Engine } from "../Engine";

class AxisEntity extends EntityObject {

    private m_currEngity: AxisEntity = null;    
    constructor() {
        super(false);
        this.m_voxEntity = this.m_currEngity = new Engine.AxisEntity();
    }
    destroy() {
        super.destroy();
        if (this.m_voxEntity == null) {
            this.m_currEngity = null;
        }
    }
    
    /**
     * initialize the axis entity mesh and geometry data
     * @param axisSize the X/Y/Z axis length
     */
    initialize(axisSize: number = 300.0): void {
        this.m_currEngity.initialize(axisSize);
    }
    /**
     * initialize the axis entity mesh and geometry data
     * @param sizeX the X axis length
     * @param sizeY the Y axis length
     * @param sizeZ the Z axis length
     */
    initializeSizeXYZ(sizeX: number, sizeY: number, sizeZ: number): void {
        this.m_currEngity.initializeSizeXYZ(sizeX, sizeY, sizeZ);
    }
}

export { AxisEntity }