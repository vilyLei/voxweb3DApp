import {ShdCodeMaterial} from "../../../vox/engine/material/ShdCodeMaterial";
import {ShaderUniformData} from "../../../vox/engine/material/ShaderUniformData";
import {IMaterialWrapper} from "../../../vox/engine/material/IMaterialWrapper";
import {Engine} from "../../../vox/engine/Engine";
import { TextureProxy } from "../../../vox/engine/texture/TextureProxy";

import {LightShdWrapper} from "./LightShdWrapper";
import {DirecLightParam} from "./DirecLightParam";

class LightMaterialWrapper implements IMaterialWrapper {

    static readonly shaderWrapper: LightShdWrapper = new LightShdWrapper();

    private m_lightParam:DirecLightParam = null;

    private m_colorData: Float32Array = null;
    private m_material: ShdCodeMaterial = null;
    constructor(lightParam:DirecLightParam) {
        this.m_lightParam = lightParam;
        this.initialize();
    }
    private initialize(): void {

        this.m_colorData = new Float32Array([1.0,1.0,1.0, 1.0]);
        let uniformData: ShaderUniformData = new Engine.ShaderUniformData();
        uniformData.uniformNameList = ["u_color"];
        uniformData.dataList = [this.m_colorData];
        this.m_material = new Engine.ShaderCodeMaterial();
        this.m_material.setShaderCodeWrapper(LightMaterialWrapper.shaderWrapper);
        this.m_material.setSelfUniformData(uniformData);
        this.m_material.setSharedUniformsData(this.m_lightParam.lightUniformDataList);
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
    
    initializeByCodeBuf(texEnabled:boolean):void {
        this.m_material.initializeByCodeBuf( texEnabled );
    }
    getMaterial(): ShdCodeMaterial {
        return this.m_material;
    }
    setTextureList(texList: TextureProxy[]): void {
        this.m_material.setTextureList( texList );
    }
    getBufSortFormat(): number {
        return this.m_material.getBufSortFormat();
    }
}
export {LightMaterialWrapper};