
import { Vector3D } from "../math/Vector3D";
import { EntityObject } from "./EntityObject";
import { TextureProxy } from "../texture/TextureProxy";

interface SphereEntity extends EntityObject {
    initialize(radius: number, longitudeNumSegments: number, latitudeNumSegments: number, texList: TextureProxy[]): void;
}

export { SphereEntity }