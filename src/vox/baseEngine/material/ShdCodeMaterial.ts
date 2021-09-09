
import {ShaderUniformData} from "./ShaderUniformData";
import {IShdWrapper} from "./IShdWrapper";

interface ShdCodeMaterial {

    setRGB3f(r: number, g: number, b: number): void;
    setRGBA4f(r: number, g: number, b: number, a: number): void;
    setShaderCodeWrapper(shaderWrapper: IShdWrapper): void;
    setSelfUniformData(uniformData: ShaderUniformData): void;
    setSharedUniformsData(uniformDataList: ShaderUniformData[]): void;
}
export {ShdCodeMaterial};