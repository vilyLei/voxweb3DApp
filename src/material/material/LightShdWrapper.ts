
import IShdBuilder from "../../vox/engine/material/IShdBuilder";
import {IShdWrapper} from "../../vox/engine/material/IShdWrapper";

class LightShdWrapper implements IShdWrapper {

    constructor(){
        
        console.log("LightShdWrapper constructor()...");
    }
    initialize(): void {

    }
    buildThisCode(codeBuilder: IShdBuilder): void {

    }
    getFragShaderCode(codeBuilder: IShdBuilder): string {

        console.log("LightShdWrapper getFragShaderCode()...",codeBuilder);
        codeBuilder.reset();
        codeBuilder.vertMatrixInverseEnabled = true;

        codeBuilder.addTextureSample2D("", true, true, false);

        codeBuilder.addVarying("vec2", "v_uv");
        codeBuilder.addVarying("vec3", "v_nv");
        codeBuilder.addVarying("vec3", "v_viewDir");

        codeBuilder.addVertLayout("vec3", "a_vs");
        codeBuilder.addVertLayout("vec2", "a_uvs");
        codeBuilder.addVertLayout("vec3", "a_nvs");

        codeBuilder.addFragOutput("vec4", "FragColor0");
        codeBuilder.addFragUniform("vec4", "u_color", 0);
        codeBuilder.addFragUniform("vec4", "u_lightParams", 3);

        codeBuilder.useVertSpaceMats(true, true, true);

        codeBuilder.addFragMainCode(
`
vec3 calcLight(vec3 baseColor, vec3 pLightDir, vec3 lightColor, vec3 specColor) {

    vec3 nvs = (v_nv);
	vec3 viewDir = v_viewDir;
    float nDotL = max(dot(nvs, pLightDir), 0.0);
	baseColor = nDotL * baseColor * lightColor;
	viewDir = normalize(pLightDir + viewDir);
	lightColor = specColor * nDotL * pow(max(dot(nvs, viewDir), 0.0), 32.0);
	return (baseColor * 0.3 + lightColor * 0.7);
}

void main()
{
    vec4 color4 = VOX_Texture2D(u_sampler0, v_uv);
    color4.xyz *= u_color.xyz;
    
    vec3 lightDirec = u_lightParams[0].xyz;
    vec3 lightColor = u_lightParams[1].xyz;
    vec3 lightSpecColor = u_lightParams[2].xyz;

    vec3 destColor = calcLight(
        color4.xyz,
        lightDirec,
        lightColor,
        lightSpecColor
    );
    FragColor0 = vec4(destColor * 0.9 + 0.4 * color4.xyz, 1.0);
}
`
        );
        return codeBuilder.buildFragCode();
    }
    getVtxShaderCode(codeBuilder: IShdBuilder): string {

        codeBuilder.addVertMainCode(
`
void main(){

    mat4 viewMat4 = u_viewMat * u_objMat;
    vec4 viewPos = viewMat4 * vec4(a_vs, 1.0);
    gl_Position = u_projMat * viewPos;

    v_viewDir = -normalize(viewPos.xyz);
    v_uv = a_uvs;
    v_nv = normalize(a_nvs * inverse(mat3(viewMat4)));
}
`
        );
        return codeBuilder.buildVertCode();
    }

    createSharedUniforms(): any[] {
        return null;
    }
    getUniqueShaderName(): string {
        return "LightShd";
    }
}

export {LightShdWrapper};