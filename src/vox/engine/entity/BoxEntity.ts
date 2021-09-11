
import { Vector3D } from "../math/Vector3D";
import { Matrix4 } from "../math/Matrix4";
import { IBoxEntity } from "./IBoxEntity";
import { TextureProxy } from "../texture/TextureProxy";
import { EntityObject } from "./EntityObject";
import { Engine } from "../Engine";

class BoxEntity extends EntityObject implements IBoxEntity {

    private m_boxEngity: IBoxEntity = null;
    normalScale: number = 1.0;
    uvPartsNumber: number = 0;
    constructor() {
        super(false);
        this.m_boxEngity = this.m_voxEntity = new Engine.BoxEntity();
    }
    setVtxTransformMatrix(matrix: Matrix4): void {
        this.m_boxEngity.setVtxTransformMatrix(matrix);
    }
    useFlatNormal(): void {
        this.m_boxEngity.useFlatNormal();
    }
    useGourandNormal(): void {
        this.m_boxEngity.useGourandNormal();
    }

    showBackFace(): void {
        this.m_boxEngity.showBackFace();
    }
    showFrontFace(): void {
        this.m_boxEngity.showFrontFace();
    }
    showAllFace(): void {

    }
    scaleUVFaceAt(faceI: number, u: number, v: number, du: number, dv: number): void {
        this.m_boxEngity.scaleUVFaceAt(faceI, u, v, du, dv);
    }
    scaleUVSFaceAt(faceI: number, uvsLen8: Float32Array): void {
        this.m_boxEngity.scaleUVSFaceAt(faceI, uvsLen8);
    }
    reinitializeMesh(): void {
        this.m_boxEngity.reinitializeMesh();
    }
    /**
     * set the face uv by the face index.
     * @param i index, the value is 0-5
     * @param uvsLen8 Float32Array object, and it's length is 8
     * @param offset the default value is 0
     */
    setFaceUVSAt(i: number, uvsLen8: Float32Array, offset: number = 0): void {
        this.m_boxEngity.setFaceUVSAt(i, uvsLen8, offset);
    }
    transformFaceAt(i: number, mat4: Matrix4): void {
        this.m_boxEngity.transformFaceAt(i, mat4);
    }
    getFaceCenterAt(i: number, outV: Vector3D): void {
        this.m_boxEngity.getFaceCenterAt(i, outV);
    }
    /**
     * initialize a box geometry data and texture data
     * @param minV the min position of the box
     * @param maxV the max position of the box
     * @param texList  TextureProxy instance list
     */
    initialize(minV: Vector3D, maxV: Vector3D, texList: TextureProxy[] = null): void {
        this.m_boxEngity.initialize(minV, maxV, texList);
    }
    /**
     * initialize a box(geometry data and texture data) to a cube with the cube size value
     * @param cubeSize  cube size value
     * @param texList  TextureProxy instance list
     */
    initializeCube(cubeSize: number, texList: TextureProxy[]): void {
        this.m_boxEngity.initializeCube(cubeSize, texList);
    }
    initializeSizeXYZ(widthSize: number, heightSize: number, longSize: number, texList: TextureProxy[]): void {
        this.m_boxEngity.initializeSizeXYZ(widthSize, heightSize, longSize, texList);
    }
    destroy() {
        super.destroy();
        if(this.m_voxEntity == null) {
            this.m_boxEngity = null;
        }
    }
}

export { BoxEntity }