
import { Color4 } from "../material/Color4";
import { IEntityObject } from "./IEntityObject";

interface IAxisEntity extends IEntityObject {
    colorX: Color4;
    colorY: Color4;
    colorZ: Color4;
    /**
     * initialize the axis entity mesh and geometry data
     * @param axisSize the X/Y/Z axis length
     */
    initialize(axisSize: number): void;
    /**
     * initialize the axis entity mesh and geometry data
     * @param sizeX the X axis length
     * @param sizeY the Y axis length
     * @param sizeZ the Z axis length
     */
    initializeSizeXYZ(sizeX: number, sizeY: number, sizeZ: number): void;
}

export { IAxisEntity }