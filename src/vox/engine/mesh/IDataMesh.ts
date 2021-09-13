import { IMesh } from "./IMesh";

interface IDataMesh extends IMesh {

    /**
     * the default value is 3, it represents 3 float value vertex position(x,y,z)
     */
    vsStride: number;

    vs:Float32Array;
    uvs:Float32Array;
    nvs:Float32Array;
    cvs:Float32Array;
    tvs:Float32Array;
    btvs:Float32Array;

    ivs:Uint16Array | Uint32Array;

    initialize(): void;
    
}

export { IDataMesh }