
import { Vector3D } from "../math/Vector3D";
import { IEntityObject } from "./IEntityObject";
import { TextureProxy } from "../texture/TextureProxy";

interface ISphereEntity extends IEntityObject {
    initialize(radius: number, longitudeNumSegments: number, latitudeNumSegments: number, texList: TextureProxy[]): void;
}

export { ISphereEntity }