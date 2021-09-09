
import { Vector3D } from "../math/Vector3D";
import { EntityObject } from "./EntityObject";
import { TextureProxy } from "../texture/TextureProxy";

interface PlaneEntity extends EntityObject {
    initializeXOZSquare(size: number, texList: TextureProxy[]): void;
    initializeXOYSquare(size: number, texList: TextureProxy[]): void;
}

export { PlaneEntity }