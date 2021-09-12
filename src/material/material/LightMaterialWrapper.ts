import {ShdCodeMaterial} from "../../vox/engine/material/ShdCodeMaterial";
import {ShaderUniformData} from "../../vox/engine/material/ShaderUniformData";
import {Engine} from "../../vox/engine/Engine";

import {Vector3D} from "../../vox/engine/math/Vector3D";
import {Matrix4} from "../../vox/engine/math/Matrix4";
import {Color4} from "../../vox/engine/material/Color4";

import {LightShdWrapper} from "./LightShdWrapper";

class LightParam {

    readonly lightUniformDataList: ShaderUniformData[] = [null];

    readonly lightData: Float32Array = new Float32Array(12);
    readonly lightDir: Vector3D = new Engine.Vector3D(1,-1,1);
    readonly lightColor: Color4 = new Engine.Color4(1,1,1);
    readonly lightSpecular: Color4 = new Engine.Color4(0.3,0.2,0.8,1.0);
    readonly tempV: Vector3D = new Engine.Vector3D(1,1,1);
    readonly mat4: Matrix4 = new Engine.Matrix4();

    constructor() {
    }
    initialize(): void {

        if(this.lightUniformDataList[0] == null) {

            this.lightData.set([
                this.lightDir.x,this.lightDir.y,this.lightDir.z, 1.0
                ,this.lightColor.r,this.lightColor.g,this.lightColor.b, 1.0
                ,this.lightSpecular.r,this.lightSpecular.g,this.lightSpecular.b, 1.0
            ],0);
            
            let lightUniformData = new Engine.ShaderUniformData();
            lightUniformData.uniformNameList = ["u_lightParams"];
            lightUniformData.dataList = [this.lightData];
            this.lightUniformDataList[0] = lightUniformData;
        }
    }
    updateLightData(viewInvMatrix: Matrix4): void {

        if(this.lightData != null) {

            this.mat4.copyFrom( viewInvMatrix );
            this.mat4.transpose();
            this.mat4.deltaTransformOutVector(this.lightDir, this.tempV);
    
            this.lightData[0] = -this.tempV.x;
            this.lightData[1] = -this.tempV.y;
            this.lightData[2] = -this.tempV.z;
        }
    }
}

class LightMaterialWrapper {

    static readonly shaderWrapper: LightShdWrapper = new LightShdWrapper();

    private m_lightParam:LightParam = null;

    private m_colorData: Float32Array = null;
    private m_material: ShdCodeMaterial = null;
    constructor(lightParam:LightParam) {
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
export {LightParam, LightMaterialWrapper};