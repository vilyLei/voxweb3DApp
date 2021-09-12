import {ShdCodeMaterial} from "../../vox/engine/material/ShdCodeMaterial";
import {ShaderUniformData} from "../../vox/engine/material/ShaderUniformData";
import {Engine} from "../../vox/engine/Engine";

import {ColorShdWrapper} from "./ColorShdWrapper";

class ColorMaterialWrapper {

    static readonly shaderWrapper: ColorShdWrapper = new ColorShdWrapper();
    private m_colorData: Float32Array = null;
    private m_material: ShdCodeMaterial = null;
    constructor() {
        this.initizlize();
    }

    private initizlize(): void {

        this.m_colorData = new Float32Array([1.0,1.0,1.0, 1.0]);
        let uniformData: ShaderUniformData = new Engine.ShaderUniformData();
        uniformData.uniformNameList = ["u_color"];
        uniformData.dataList = [this.m_colorData];
        this.m_material = new Engine.ShaderCodeMaterial();
        this.m_material.setShaderCodeWrapper(ColorMaterialWrapper.shaderWrapper);
        this.m_material.setSelfUniformData(uniformData);
    }
    getMaterial(): ShdCodeMaterial {
        return this.m_material;
    }
    setRGBColor3f(r: number, g: number, b: number): void {
        this.m_colorData[0] = r;
        this.m_colorData[1] = g;
        this.m_colorData[2] = b;
    }
    setRGBAColor4f(r: number, g: number, b: number, a: number): void {
        this.m_colorData[0] = r;
        this.m_colorData[1] = g;
        this.m_colorData[2] = b;
        this.m_colorData[4] = a;
    }
}
export {ColorMaterialWrapper};