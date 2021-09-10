
import { Vector3D } from "../math/Vector3D";
import { EntityObject } from "./EntityObject";
import { TextureProxy } from "../texture/TextureProxy";

interface CylinderEntity extends EntityObject {
    /**
     * initialize CylinderEntity instance.
     * @param radius cylinder radius
     * @param height cylinder height
     * @param longitudeNumSegments cylinder longitude segments number.
     * @param texList texture list
     * @param uvType the type that it create the geometry uv data, the default value is 1
     * @param alignYRatio the type that it create the geometry position data align y-axis, the default value is -0.5
     */
    initialize(radius:number, height:number, longitudeNumSegments:number,texList:TextureProxy[],uvType:number, alignYRatio:number):void;
}

export { CylinderEntity }