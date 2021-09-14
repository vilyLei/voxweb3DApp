import { AABB } from "../math/AABB";
import { IMesh } from "./IMesh";

interface IDracoMesh extends IMesh {
    
    getVS(): Float32Array;
    getUVS(): Float32Array;
    getNVS(): Float32Array;
    
    initialize(geomDataList: any[]): void;
}

export { IDracoMesh }