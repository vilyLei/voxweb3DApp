
import IShdBuilder from "../../vox/engine/material/IShdBuilder";
import {IShdWrapper} from "../../vox/engine/material/IShdWrapper";
import {IShdUniform} from "../../vox/engine/material/IShdUniform";

class ParallaxMapLightShdWrapper implements IShdWrapper {

    constructor(){
        
        console.log("ParallaxMapLightShdWrapper constructor()...");
    }
    initialize(): void {

    }
    buildThisCode(codeBuilder: IShdBuilder): void {

    }
    getFragShaderCode(codeBuilder: IShdBuilder): string {

        console.log("ParallaxMapLightShdWrapper getFragShaderCode()...",codeBuilder);
        codeBuilder.reset();
        codeBuilder.normalMapEanbled = true;
        codeBuilder.vertMatrixInverseEnabled = true;
        // base color texture
        codeBuilder.addTextureSample2D("", true, true, false);
        // normal texture
        codeBuilder.addTextureSample2D("", true, true, false);
        // specular texture
        codeBuilder.addTextureSample2D("", true, true, false);
        // occ texture
        codeBuilder.addTextureSample2D("", true, true, false);
        // disp texture
        codeBuilder.addTextureSample2D("", true, true, false);

        codeBuilder.addVarying("vec2", "v_uv");
        codeBuilder.addVarying("vec3", "v_nv");
        codeBuilder.addVarying("vec3", "v_viewPos");

        codeBuilder.addVertLayout("vec3", "a_vs");
        codeBuilder.addVertLayout("vec2", "a_uvs");
        codeBuilder.addVertLayout("vec3", "a_nvs");

        codeBuilder.addFragOutput("vec4", "FragColor0");
        codeBuilder.addFragUniform("vec4", "u_color", 0);
        codeBuilder.addFragUniform("vec4", "u_lightParams", 3);

        codeBuilder.useVertSpaceMats(true, true, true);

        codeBuilder.addFragMainCode(
`
const vec4 occParam = vec4(1.0,10.0,2.0,0.1);
vec2 paralOccRayMarchDep2(sampler2D texSampler, vec2 puvs, vec3 viewDir,vec4 poccParam)
{
    float depthValue = 1.0 - texture(texSampler, puvs).r;
    float numLayers = mix(poccParam.x, poccParam.y, max(dot(vec3(0.0, 0.0, 1.0), viewDir),0.0));
    float layerHeight = poccParam.z / numLayers;
    vec2 tuv = (viewDir.xy * poccParam.w) / numLayers;  
    float ph = 0.0;
    while(ph < depthValue)
    {
        puvs -= tuv;
        depthValue = 1.0 - texture(texSampler, puvs).r;
        ph += layerHeight;
    }
    tuv += puvs;
    depthValue -= ph;
    ph = 1.0 - texture(texSampler, tuv).r - ph + layerHeight;
    float weight = depthValue / (depthValue - ph);
    return tuv * weight + puvs * (1.0 - weight);
}
mat3 getBTN(vec2 texUV, vec3 pos, vec3 nv)
{
    vec3 Q1  = dFdx(pos);
    vec3 Q2  = dFdy(pos);
    vec2 st1 = dFdx(texUV);
    vec2 st2 = dFdy(texUV);

    vec3 N  = normalize(nv);
    vec3 T  = normalize(Q1*st2.t - Q2*st1.t);    
    vec3 B  = -normalize(cross(N, T));
    return mat3(T, B, N);
}
vec3 getNormalFromMap(sampler2D texSampler, vec2 texUV, vec3 pos, vec3 nv)
{
    vec3 tangentNormal = VOX_Texture2D(texSampler, texUV).xyz * 2.0 - 1.0;

    vec3 Q1  = dFdx(pos);
    vec3 Q2  = dFdy(pos);
    vec2 st1 = dFdx(texUV);
    vec2 st2 = dFdy(texUV);

    vec3 N   = normalize(nv);
    vec3 T  = normalize(Q1*st2.t - Q2*st1.t);    
    vec3 B  = -normalize(cross(N, T));
    mat3 TBN = mat3(T, B, N);

    return TBN * tangentNormal;
}
vec3 calcLight(vec3 baseColor, vec3 pLightDir, vec3 lightColor, vec3 specColor, vec3 viewDir, vec3 nv, float specFactor) {

    float nDotL = max(dot(nv, pLightDir), 0.0);
	baseColor = nDotL * baseColor * lightColor;
	viewDir = normalize(pLightDir + viewDir);
	lightColor = specColor * nDotL * pow(max(dot(nv, viewDir), 0.0), 64.0 * specFactor);
	return (baseColor * 0.3 + lightColor * 0.7);
}

void main()
{
    vec3 viewPos = v_viewPos;
    vec3 viewDir = -normalize(viewPos);
    
    vec3 nv = v_nv;
    vec3 btnViewDir = getBTN(v_uv.xy, viewPos, v_nv) * viewDir;

    vec2 puv = paralOccRayMarchDep2(u_sampler4, v_uv, btnViewDir, occParam);

    nv = getNormalFromMap(u_sampler1, puv, viewPos, v_nv);
    vec4 color4 = VOX_Texture2D(u_sampler0, puv);
    color4.xyz *= u_color.xyz;

    vec4 specular = VOX_Texture2D(u_sampler2, puv);
    vec4 occ = VOX_Texture2D(u_sampler3, puv);

    vec3 lightDirec = u_lightParams[0].xyz;
    vec3 lightColor = u_lightParams[1].xyz;
    vec3 lightSpecColor = u_lightParams[2].xyz;

    vec3 destColor = calcLight(
        color4.xyz,
        lightDirec,
        lightColor,
        lightSpecColor,
        viewDir,
        nv,
        specular.x
    );
    destColor.xyz *= occ.xxx;
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

    v_viewPos = (viewPos.xyz);
    //v_viewDir = -normalize(viewPos.xyz);
    v_uv = a_uvs;
    v_nv = normalize(a_nvs * inverse(mat3(viewMat4)));
}
`
        );
        return codeBuilder.buildVertCode();
    }

    //createSharedUniforms(): any[] {
    createSharedUniforms(): IShdUniform[] {
        return null;
    }
    getUniqueShaderName(): string {
        return "ParallaxMapLightShd";
    }
}

export {ParallaxMapLightShdWrapper};