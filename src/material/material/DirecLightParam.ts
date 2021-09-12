import {ShdCodeMaterial} from "../../vox/engine/material/ShdCodeMaterial";
import {ShaderUniformData} from "../../vox/engine/material/ShaderUniformData";
import {Engine} from "../../vox/engine/Engine";

import {Vector3D} from "../../vox/engine/math/Vector3D";
import {Matrix4} from "../../vox/engine/math/Matrix4";
import {Color4} from "../../vox/engine/material/Color4";

import {LightShdWrapper} from "./LightShdWrapper";

class DirecLightParam {

    readonly lightUniformDataList: ShaderUniformData[] = [null];

    readonly lightData: Float32Array = new Float32Array(12);
    readonly lightDir: Vector3D = new Engine.Vector3D(1,-1,1);
    readonly lightColor: Color4 = new Engine.Color4(1,1,1);
    readonly lightSpecular: Color4 = new Engine.Color4(0.5,0.5,0.8,1.0);
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

export {DirecLightParam};