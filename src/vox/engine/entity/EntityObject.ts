
import { Vector3D } from "../math/Vector3D";
import { Matrix4 } from "../math/Matrix4";
import { AABB } from "../math/AABB";
import { RenderProxy } from "../render/RenderProxy";
import { Material } from "../material/Material";
import { TextureProxy } from "../texture/TextureProxy";
import { IMesh } from "../mesh/IMesh";
import { IEntityObject } from "./IEntityObject";
import { Engine } from "../Engine";

/**
 * 定义了可渲染对象
 */
class EntityObject implements IEntityObject {

    protected m_voxEntity: EntityObject = null;
    
    constructor(flag: boolean = true) {

        if (flag) {
            this.m_voxEntity = Engine.Entity();
        }
    }
    __$getREObj(): IEntityObject {
        return this.m_voxEntity;
    }
    /**
     * users need to call this function manually
     * 更新有两种形式, 1: 只是更改资源内部的数据, 2: 替换资源本身
     * 更新过程可以通过DisplayEntity对象来控制，也可以通过资源本身来控制
     */
    updateMeshToGpu(rc: RenderProxy, deferred: boolean = true): void {
        this.m_voxEntity.updateMeshToGpu(rc, deferred);
    }
    /**
     * users need to call this function manually
     * 更新有两种形式, 1: 只是更改资源内部的数据, 2: 替换资源本身
     * 更新过程可以通过DisplayEntity对象来控制，也可以通过资源本身来控制
     */
    updateMaterialToGpu(rc: RenderProxy, deferred: boolean = true): void {
        this.m_voxEntity.updateMaterialToGpu(rc, deferred);
    }
    /**
    * set new textures list for the material of this instance.
    */
    setTextureList(texList: TextureProxy[]): void {
        this.m_voxEntity.setTextureList(texList);
    }
    /**
     * set new texture by the index in the material textures list for the material of this instance.
     */
    setTextureAt(index: number, tex: TextureProxy): void {
        this.m_voxEntity.setTextureAt(index, tex);
    }
    setVisible(visible: boolean): void {
        this.m_voxEntity.setVisible(visible);
    }
    getVisible(): boolean {
        return this.m_voxEntity.getVisible();
    }
    getIvsIndex(): number {
        return this.m_voxEntity.getIvsIndex();
    }
    getIvsCount(): number {
        return this.m_voxEntity.getIvsCount();
    }
    setIvsParam(ivsIndex: number, ivsCount: number): void {
        return this.m_voxEntity.setIvsParam(ivsIndex, ivsCount);
    }
    /**
     * @return 返回true是则表示这是基于三角面的多面体, 返回false则是一个数学方程描述的几何体(例如球体),默认返回true
     */
    isPolyhedral(): boolean {
        return this.m_voxEntity.isPolyhedral();
    }


    setRotationXYZ(rx: number, ry: number, rz: number): void {
        this.m_voxEntity.setRotationXYZ(rx, ry, rz);
    }
    getRotationXYZ(sv: Vector3D): void {
        this.m_voxEntity.getRotationXYZ(sv);
    }
    setScaleXYZ(sx: number, sy: number, sz: number): void {
        this.m_voxEntity.setScaleXYZ(sx, sy, sz);
    }
    getScaleXYZ(sv: Vector3D): void {
        this.m_voxEntity.getScaleXYZ(sv);
    }
    setXYZ(x: number, y: number, z: number): void {
        this.m_voxEntity.setXYZ(x, y, z);
    }
    setPosition(pv: Vector3D): void {
        this.m_voxEntity.setPosition(pv);
    }
    getPosition(pv: Vector3D): void {
        this.m_voxEntity.getPosition(pv);
    }

    copyMesh(dst: IEntityObject): void {
        this.m_voxEntity.copyMesh(dst);
    }
    setMesh(mesh: IMesh): void {
        this.m_voxEntity.setMesh(mesh);
    }
    getMesh(): IMesh {
        return this.m_voxEntity.getMesh();
    }

    copyMaterial(dst: IEntityObject): void {
        return this.m_voxEntity.copyMaterial(dst);
    }
    setMaterial(material: Material): void {
        return this.m_voxEntity.setMaterial(material);
    }
    getMaterial(): Material {
        return this.m_voxEntity.getMaterial();
    }

    getGlobalBounds(): AABB {
        return this.m_voxEntity.getGlobalBounds();
    }
    getLocalBounds(): AABB {
        return this.m_voxEntity.getLocalBounds();
    }

    getInvMatrix(): Matrix4 {
        return this.m_voxEntity.getInvMatrix();
    }
    getMatrix(): Matrix4 {
        return this.m_voxEntity.getMatrix();
    }
    getToParentMatrix(): Matrix4 {
        return this.m_voxEntity.getToParentMatrix();
    }
    setRenderState(renderState: number): void {
        return this.m_voxEntity.setRenderState(renderState);
    }
    setRenderStateByName(renderState_name: string): void {
        return this.m_voxEntity.setRenderStateByName(renderState_name);
    }
    /**
     * @returns 是否已经加入渲染器中(但是可能还没有进入真正的渲染运行时)
     */
    isInRenderer(): boolean {
        return this.m_voxEntity.isInRenderer();
    }
    /**
     * @returns 是否处在渲染运行时中
     */
    isRenderEnabled(): boolean {
        return this.m_voxEntity.isRenderEnabled();
    }

    destroy(): void {
        if(!this.m_voxEntity.isInRenderer()) {
            this.m_voxEntity.destroy();
            this.m_voxEntity = null;
        }
    }

    updateBounds(): void {
        this.m_voxEntity.updateBounds();
    }
    update(): void {
        this.m_voxEntity.update();
    }
}

export { EntityObject }