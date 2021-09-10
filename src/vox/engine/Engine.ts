
import {RendererContext} from "../../vox/engine/render/RendererContext";
import {Renderer} from "../../vox/engine/render/Renderer";
/**
 * Engine system face.
 */
class Engine {

    private static s_renderer: Renderer = null;
    private static s_rcontext: RendererContext = null;

    // recorde the rednerer engine core class ------------- begin.
    static MathConst: any;
    static Vector3D: any;
    static Color4: any;
    static Matrix4: any;
    static AABB: any;
    static Camera: any;
    static PlaneEntity: any;
    static ImageTextureProxy: any;
    static AxisEntity: any;
    static BoxEntity: any;
    static SphereEntity: any;
    static CylinderEntity: any;
    static BillboardEntity: any;
    static LineEntity: any;
    static DashedLineEntity: any;
    static BoxFrameEntity: any;
    static FrustrumFrameEntity: any;

    static ShaderCodeMaterial: any;
    static ShaderUniformData: any;

    // recorde the rednerer engine core class ------------- end.

    static GetRenderer(): Renderer {
        return Engine.s_renderer;
    }
    static GetRendererContext(): RendererContext {
        return Engine.s_rcontext;
    }

    static InitializeModule(pmodule: any): void {
        console.log("Engine::InitializeModule(), Engine.s_renderer == null: ",Engine.s_renderer == null);
        if(Engine.s_renderer == null) {

            let mainModule: any = pmodule["mainModule"];

            Engine.s_renderer = mainModule.getRenderer() as Renderer;
            Engine.s_rcontext = mainModule.getRendererContext() as RendererContext;
            
            Engine.ImageTextureProxy = pmodule.ImageTextureProxy;
            
            Engine.PlaneEntity = pmodule.Plane3DEntity;
            Engine.AxisEntity = pmodule.Axis3DEntity;
            Engine.BoxEntity = pmodule.Box3DEntity;
            Engine.SphereEntity = pmodule.Sphere3DEntity;
            Engine.CylinderEntity = pmodule.Cylinder3DEntity;
            Engine.BillboardEntity = pmodule.Billboard3DEntity;
            Engine.LineEntity = pmodule.Line3DEntity;
            Engine.DashedLineEntity = pmodule.DashedLine3DEntity;
            Engine.BoxFrameEntity = pmodule.BoxFrame3D;
            Engine.FrustrumFrameEntity = pmodule.FrustrumFrame3DEntity;
    
            Engine.MathConst = pmodule.MathConst;
            Engine.Vector3D = pmodule.Vector3D;
            Engine.Color4 = pmodule.Color4;
            Engine.Matrix4 = pmodule.Matrix4;
            Engine.AABB = pmodule.AABB;
            
            Engine.Camera = pmodule.CameraBase;
            
            Engine.ShaderCodeMaterial = pmodule.ShaderCodeMaterial;
            Engine.ShaderUniformData = pmodule.ShaderUniformData;
            
            // // for test
            // let shaderCodeMaterialIns = new Engine.ShaderCodeMaterial();
            // console.log("shaderCodeMaterialIns: ",shaderCodeMaterialIns);
            // let shaderUniformDataIns = new Engine.ShaderUniformData();
            // console.log("shaderUniformDataIns: ",shaderUniformDataIns);
        }
    }
}
var pwindow: any = window;
if(pwindow["VoxCore"] == undefined) {
    pwindow["VoxCore"] = {};
}
var VoxCore = pwindow["VoxCore"];
VoxCore["VoxAppEngine"] = Engine;
export {Engine};