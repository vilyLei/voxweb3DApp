
import {Vector3D} from "../math/Vector3D";
import {Matrix4} from "../math/Matrix4";
import {AABB} from "../math/AABB";
import {RenderProxy} from "../render/RenderProxy";
import {Material} from "../material/Material";
import {TextureProxy} from "../texture/TextureProxy";
import {IMesh} from "../mesh/IMesh";
/**
 * 定义了可渲染对象
 */
interface IEntityObject {
    
    /**
     * users need to call this function manually
     * 更新有两种形式, 1: 只是更改资源内部的数据, 2: 替换资源本身
     * 更新过程可以通过DisplayEntity对象来控制，也可以通过资源本身来控制
     */
    updateMeshToGpu(rc: RenderProxy, deferred: boolean): void;
    /**
     * users need to call this function manually
     * 更新有两种形式, 1: 只是更改资源内部的数据, 2: 替换资源本身
     * 更新过程可以通过DisplayEntity对象来控制，也可以通过资源本身来控制
     */
    updateMaterialToGpu(rc: RenderProxy, deferred: boolean): void;
    /**
    * set new textures list for the material of this instance.
    */
    setTextureList(texList: TextureProxy[]): void;
    /**
     * set new texture by the index in the material textures list for the material of this instance.
     */
    setTextureAt(index: number, tex: TextureProxy): void;
    setVisible(boo: boolean): void;
    getVisible(): boolean;
    getIvsIndex(): number;
    getIvsCount(): number;
    setIvsParam(ivsIndex: number, ivsCount: number): void;
    /**
     * @return 返回true是则表示这是基于三角面的多面体, 返回false则是一个数学方程描述的几何体(例如球体),默认返回true
     */
    isPolyhedral(): boolean;
    

    setRotationXYZ(rx: number, ry: number, rz: number):void;
    getRotationXYZ(sv: Vector3D):void;
    setScaleXYZ(sx: number, sy: number, sz: number):void;
    getScaleXYZ(sv: Vector3D):void;
    setXYZ(x: number, y: number, z: number): void;
    setPosition(pv: Vector3D): void;
    getPosition(pv: Vector3D): void;
    
    copyMesh(dst:IEntityObject): void;    
    setMesh(mesh: IMesh): void;
    getMesh(): IMesh;

    copyMaterial(dst:IEntityObject): void;
    setMaterial(material:Material): void;
    getMaterial(): Material;

    getGlobalBounds(): AABB;
    getLocalBounds(): AABB;

    getInvMatrix(): Matrix4;
    getMatrix(): Matrix4;
    getToParentMatrix(): Matrix4;
    setRenderState(renderState: number): void;
    setRenderStateByName(renderState_name: string): void;
    /**
     * @returns 是否已经加入渲染器中(但是可能还没有进入真正的渲染运行时)
     */
    isInRenderer(): boolean;
    /**
     * @returns 是否处在渲染运行时中
     */
    isRenderEnabled(): boolean;

    destroy(): void;

    updateBounds(): void;
    update():void;
}

export {IEntityObject}