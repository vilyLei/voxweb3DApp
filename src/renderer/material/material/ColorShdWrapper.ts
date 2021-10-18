
import IShdBuilder from "../../../vox/engine/material/IShdBuilder";
import {IShdWrapper} from "../../../vox/engine/material/IShdWrapper";

class ColorShdWrapper implements IShdWrapper {

    constructor(){
        
        console.log("ColorShdWrapper constructor()...");
    }
    initialize(): void {
    }
    buildThisCode(codeBuilder: IShdBuilder): void {
    }
    getFragShaderCode(codeBuilder: IShdBuilder): string {

        codeBuilder.reset();
        codeBuilder.addTextureSample2D("", true, true, false);

        codeBuilder.addVarying("vec2", "v_uv");

        codeBuilder.addVertLayout("vec3", "a_vs");
        codeBuilder.addVertLayout("vec2", "a_uvs");

        codeBuilder.addFragOutput("vec4", "FragColor0");
        codeBuilder.addFragUniform("vec4", "u_color", 0);
        codeBuilder.useVertSpaceMats(true, true, true);

        codeBuilder.addFragMainCode(
`

void main()
{
    vec4 color4 = VOX_Texture2D(u_sampler0, v_uv);
    color4.xyz *= u_color.xyz;
    
    FragColor0 = color4;
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
    v_uv = a_uvs;
}
`
        );
        return codeBuilder.buildVertCode();
    }

    createSharedUniforms(): any[] {
        return null;
    }
    getUniqueShaderName(): string {
        return "ColorShd";
    }
}

export {ColorShdWrapper};