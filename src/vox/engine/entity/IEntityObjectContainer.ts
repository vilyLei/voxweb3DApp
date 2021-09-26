
import {Vector3D} from "../math/Vector3D";
import {Matrix4} from "../math/Matrix4";
import {AABB} from "../math/AABB";
import {IEntityObject} from "./IEntityObject";
/**
 * 定义了可渲染对象的容器
 */
interface IEntityObjectContainer {
    
    getGlobalBounds(): AABB;
    addChild(child: IEntityObjectContainer): void;
    removeChild(child: IEntityObjectContainer): void;
    getChildAt(i: number): IEntityObjectContainer;
    getChildrenTotal(): number;
    addEntity(entity: IEntityObject): void;
    removeEntity(entity: IEntityObject): void;
    getEntityAt(i: number): IEntityObject;
    getEntitysTotal(): number;
    update():void;
    destroy(): void;

    
    setVisible(boo: boolean): void;
    getVisible(): boolean;
    getUid(): number;
    getX(): number;
    getY(): number;
    getZ(): number;
    setX(p: number): void;
    setY(p: number): void;
    setZ(p: number): void;
    setXYZ(px: number, py: number, pz: number): void;
    offsetPosition(pv: Vector3D): void;
    setPosition(pv: Vector3D): void;
    getPosition(pv: Vector3D): void;
    
    getRotationX(): number;
    getRotationY(): number;
    getRotationZ(): number;
    setRotationX(degrees: number): void;
    setRotationY(degrees: number): void;
    setRotationZ(degrees: number): void;
    setRotationXYZ(rx: number, ry: number, rz: number): void;
    getScaleX(): number;
    getScaleY(): number;
    getScaleZ(): number;
    setScaleX(p: number): void;
    setScaleY(p: number): void;
    setScaleZ(p: number): void;
    setScaleXYZ(sx: number, sy: number, sz: number): void;
    setScaleXY(sx: number, sy: number): void;
    setScale(s: number): void;

    getRotationXYZ(pv: Vector3D): void;
    getScaleXYZ(pv: Vector3D): void;
    localToParent(pv: Vector3D): void;
    parentToLocal(pv: Vector3D): void;
    localToGlobal(pv: Vector3D): void;
    globalToLocal(pv: Vector3D): void;
    getInvMatrix(): Matrix4;
    getLocalMatrix(): Matrix4;
    getMatrix(): Matrix4;
}

export {IEntityObjectContainer}