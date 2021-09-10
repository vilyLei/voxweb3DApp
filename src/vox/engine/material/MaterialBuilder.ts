
import {Vector3D} from "../math/Vector3D";
import {Matrix4} from "../math/Matrix4";
import {Color4} from "./Color4";
import {ShaderUniformData} from "./ShaderUniformData";
import {Engine} from "../Engine";

import {ShaderCodeWrapper} from "./ShaderCodeWrapper";
import {ShdCodeMaterial} from "./ShdCodeMaterial";

class MaterialBuilder {

    readonly shaderWrapper: ShaderCodeWrapper = new ShaderCodeWrapper();
    readonly lightUniformDataList: ShaderUniformData[] = [null];

    readonly lightData: Float32Array = new Float32Array(12);
    readonly lightDir: Vector3D = new Engine.Vector3D(1,-1,1);
    readonly lightColor: Color4 = new Engine.Color4(1,1,1);
    readonly lightSpecular: Color4 = new Engine.Color4(0.3,0.2,0.8,1.0);
    readonly tempV: Vector3D = new Engine.Vector3D(1,1,1);
    readonly mat4: Matrix4 = new Engine.Matrix4();

    constructor() {

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

    create(): ShdCodeMaterial {

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

        let shaderWrapper: ShaderCodeWrapper = this.shaderWrapper;

        let colorData: Float32Array = new Float32Array([Math.random() * 1.3, Math.random() * 1.3, Math.random() * 1.3, 1.0]);
        let uniformData: ShaderUniformData = new Engine.ShaderUniformData();
        uniformData.uniformNameList = ["u_color"];
        uniformData.dataList = [colorData];
        let material: ShdCodeMaterial = new Engine.ShaderCodeMaterial();
        material.setShaderCodeWrapper(shaderWrapper);
        material.setSelfUniformData(uniformData);
        material.setSharedUniformsData(this.lightUniformDataList);
        
        return material;
    }
}
export {MaterialBuilder};