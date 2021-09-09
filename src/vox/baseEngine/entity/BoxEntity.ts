
import { Vector3D } from "../math/Vector3D";
import { EntityObject } from "./EntityObject";
import { TextureProxy } from "../texture/TextureProxy";

interface BoxEntity extends EntityObject {
    /**
    * initialize a box geometry data and texture data
    * @param minV the min position of the box
    * @param maxV the max position of the box
    * @param texList  TextureProxy instance list
    */
   initialize(minV: Vector3D, maxV: Vector3D, texList: TextureProxy[]): void;
   /**
    * initialize a box(geometry data and texture data) to a cube with the cube size value
    * @param cubeSize  cube size value
    * @param texList  TextureProxy instance list
    */
   initializeCube(cubeSize: number, texList: TextureProxy[]): void;
   initializeSizeXYZ(widthSize: number, heightSize: number, longSize: number, texList: TextureProxy[]): void;
}

export { BoxEntity }