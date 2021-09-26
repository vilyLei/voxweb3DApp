
import {RendererContext} from "../../vox/engine/render/RendererContext";
import {Renderer} from "../../vox/engine/render/Renderer";
import {IEngine} from "./IEngine";
/**
 * Engine system face.
 */
class Engine {

    private static s_rcontext: RendererContext = null;
    private static s_renderer: Renderer = null;
    private static s_engine: IEngine = null;

    // recorde the rednerer engine core class ------------- begin.
    static readonly RendererDevice: any;

    static readonly MathConst: any;
    static readonly Vector3D: any;
    static readonly Color4: any;
    static readonly Matrix4: any;
    static readonly AABB: any;
    static readonly Camera: any;

    static readonly DataMesh: any;
    static readonly DracoMesh: any;

    static readonly PlaneEntity: any;
    static readonly ImageTextureProxy: any;
    static readonly Entity: any;
    static readonly AxisEntity: any;
    static readonly BoxEntity: any;
    static readonly SphereEntity: any;
    static readonly CylinderEntity: any;
    static readonly BillboardEntity: any;
    static readonly LineEntity: any;
    static readonly DashedLineEntity: any;
    static readonly BoxFrameEntity: any;
    static readonly FrustrumFrameEntity: any;

    static readonly ShaderCodeMaterial: any;
    static readonly ShaderUniformData: any;

    // recorde the rednerer engine core class ------------- end.
    
    static IsWebGL1(): boolean {
        return Engine.RendererDevice.IsWebGL1();
    }
    static IsWebGL2(): boolean {
        return Engine.RendererDevice.IsWebGL2();
    }

    static GetRendererContext(): RendererContext {
        return Engine.s_rcontext;
    }
    static GetRenderer(): Renderer {
        return Engine.s_renderer;
    }
    static GetEngine(): IEngine {
        return Engine.s_engine;
    }
    static SetDebugEnabled(enabled: boolean): void {
        
        Engine.RendererDevice.SHADERCODE_TRACE_ENABLED = enabled;
        if(enabled) {
        }
    }
    
    static Initialize(): void {
        var pwindow: any = window;
        let pmodule: any = pwindow["VoxCore"];
        console.log("Engine::InitializeModule(), Engine.s_renderer == null: ",Engine.s_renderer == null);
        if(Engine.s_renderer == null) {

            let mainModule: any = pmodule["mainModule"];
            let engine: any = Engine;
            
            engine.s_renderer = mainModule.getRenderer() as Renderer;
            engine.s_rcontext = mainModule.getRendererContext() as RendererContext;
            if(pmodule["vox3DEngine"] != null) {
                engine.s_engine = mainModule.getEngine();
            }
            
            engine.MathConst = pmodule.MathConst;
            engine.Vector3D = pmodule.Vector3D;
            engine.Color4 = pmodule.Color4;
            engine.Matrix4 = pmodule.Matrix4;
            engine.AABB = pmodule.AABB;
            engine.Camera = pmodule.CameraBase;

            engine.RendererDevice = pmodule.RendererDevice;

            engine.ImageTextureProxy = pmodule.ImageTextureProxy;
            
            engine.DataMesh = pmodule.DataMesh;
            engine.DracoMesh = pmodule.DracoMesh;

            engine.Entity = pmodule.DisplayEntity;
            engine.AxisEntity = pmodule.Axis3DEntity;
            engine.PlaneEntity = pmodule.Plane3DEntity;
            engine.BoxEntity = pmodule.Box3DEntity;
            engine.SphereEntity = pmodule.Sphere3DEntity;
            engine.CylinderEntity = pmodule.Cylinder3DEntity;
            engine.BillboardEntity = pmodule.Billboard3DEntity;
            engine.LineEntity = pmodule.Line3DEntity;
            engine.DashedLineEntity = pmodule.DashedLine3DEntity;
            engine.BoxFrameEntity = pmodule.BoxFrame3D;
            engine.FrustrumFrameEntity = pmodule.FrustrumFrame3DEntity;
            
            engine.ShaderCodeMaterial = pmodule.ShaderCodeMaterial;
            engine.ShaderUniformData = pmodule.ShaderUniformData;
            
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
if(VoxCore["VoxAppEngine"] == undefined) {    
    VoxCore["VoxAppEngine"] = Engine;
}
export {Engine};