
import { Vector3D } from "../math/Vector3D";
import { Matrix4 } from "../math/Matrix4";
import { EntityObject } from "./EntityObject";
import { TextureProxy } from "../texture/TextureProxy";

interface BoxEntity extends EntityObject {

    uvPartsNumber: number;
    
    setVtxTransformMatrix(matrix: Matrix4): void;
    useFlatNormal(): void;
    useGourandNormal(): void;
    
    showBackFace(): void;
    showFrontFace(): void;
    showAllFace(): void;
    scaleUVFaceAt(faceI: number, u: number, v: number, du: number, dv: number): void;
    scaleUVSFaceAt(faceI: number, uvsLen8: Float32Array): void;
    reinitializeMesh(): void;
    /**
     * set the face uv by the face index.
     * @param i index, the value is 0-5
     * @param uvslen8 Float32Array object, and it's length is 8
     * @param offset the default value is 0
     */
    setFaceUVSAt(i: number, uvslen8: Float32Array, offset: number): void;
    transformFaceAt(i: number, mat4: Matrix4): void;
    getFaceCenterAt(i: number, outV: Vector3D): void;
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