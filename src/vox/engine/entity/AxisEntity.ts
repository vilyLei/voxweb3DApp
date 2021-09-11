
import { Color4 } from "../material/Color4";
import { IAxisEntity } from "./IAxisEntity";
import { EntityObject } from "./EntityObject";
import { Engine } from "../Engine";

class AxisEntity extends EntityObject implements IAxisEntity {
    private m_axisEngity: IAxisEntity = null;
    colorX: Color4 = new Engine.Color4();
    colorY: Color4 = new Engine.Color4();
    colorZ: Color4 = new Engine.Color4();
    constructor() {
        super(false);
        this.m_voxEntity = this.m_axisEngity = new Engine.AxisEntity();
    }
    /**
     * initialize the axis entity mesh and geometry data
     * @param axisSize the X/Y/Z axis length
     */
    initialize(axisSize: number = 300.0): void {
        this.m_axisEngity.initialize(axisSize);
    }
    /**
     * initialize the axis entity mesh and geometry data
     * @param sizeX the X axis length
     * @param sizeY the Y axis length
     * @param sizeZ the Z axis length
     */
    initializeSizeXYZ(sizeX: number, sizeY: number, sizeZ: number): void {
        this.m_axisEngity.initializeSizeXYZ(sizeX, sizeY, sizeZ);
    }

    destroy() {
        super.destroy();
        if (this.m_voxEntity == null) {
            this.m_axisEngity = null;
        }
    }
}

export { AxisEntity }