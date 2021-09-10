
import {Material} from "./Material";
import {IShdWrapper} from "./IShdWrapper";

interface ShdCodeMaterial extends Material {
    
    setRGB3f(r: number, g: number, b: number): void;
    setRGBA4f(r: number, g: number, b: number, a: number): void;
    setShaderCodeWrapper(shaderWrapper: IShdWrapper): void;
}
export {ShdCodeMaterial};