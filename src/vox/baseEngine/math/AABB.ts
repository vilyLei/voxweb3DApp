
import {Vector3D} from "../math/Vector3D";
interface AABB {
    min: Vector3D;
    mmax: Vector3D;
    copyFrom(v3: Vector3D): void;
    update(): void;
}

export {AABB}