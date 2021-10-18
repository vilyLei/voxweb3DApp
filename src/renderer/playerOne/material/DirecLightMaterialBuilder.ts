
import {Vector3D} from "../../../vox/engine/math/Vector3D";
import {Matrix4} from "../../../vox/engine/math/Matrix4";
import {Color4} from "../../../vox/engine/material/Color4";
import {ShaderUniformData} from "../../../vox/engine/material/ShaderUniformData";
import {ShdCodeMaterial} from "../../../vox/engine/material/ShdCodeMaterial";
import {Engine} from "../../../vox/engine/Engine";

import {DirecLightShaderWrapper} from "./DirecLightShaderWrapper";

class DirecLightMaterialBuilder {

    shaderWrapper: DirecLightShaderWrapper = new DirecLightShaderWrapper();
    lightUniformDataList: ShaderUniformData[];

    lightData: Float32Array = null;
    lightDir: Vector3D = null;
    lightColor: Color4 = null;
    lightSpecular: Color4 = null;
    tempV: Vector3D = null;
    mat4: Matrix4 = null;
    
    constructor() {
        console.log("DirecLightMaterialBuilder::constructor()....");
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

        if(this.lightUniformDataList == null) {

            this.lightDir = new Engine.Vector3D(-1,-1,-1);
            this.lightColor = new Engine.Color4(1,1,1);
            this.lightSpecular = new Engine.Color4(0.3,0.2,0.8,1.0);
            this.tempV = new Engine.Vector3D(1,1,1);
            this.mat4 = new Engine.Matrix4();    
    
            this.lightData = new Float32Array([
                this.lightDir.x,this.lightDir.y,this.lightDir.z, 1.0
                ,this.lightColor.r,this.lightColor.g,this.lightColor.b, 1.0
                ,this.lightSpecular.r,this.lightSpecular.g,this.lightSpecular.b, 1.0
            ]);
            
            let lightUniformData = new Engine.ShaderUniformData();
            lightUniformData.uniformNameList = ["u_lightParams"];
            lightUniformData.dataList = [this.lightData];
            this.lightUniformDataList = [ lightUniformData ];
        }

        let shaderWrapper: DirecLightShaderWrapper = this.shaderWrapper;

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
export {DirecLightMaterialBuilder};