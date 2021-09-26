
import {RendererContext} from "../../vox/engine/render/RendererContext";
import {Renderer} from "../../vox/engine/render/Renderer";
/**
 * MinEngine system face.
 */
class MinEngine {

    private static s_renderer: Renderer = null;
    private static s_rcontext: RendererContext = null;

    // recorde the rednerer engine core class ------------- begin.
    static readonly RendererDevice: any;
    
    static readonly Vector3D: any;
    static readonly Color4: any;
    static readonly Matrix4: any;
    static readonly Camera: any;

    static readonly DataMesh: any;

    static readonly ImageTextureProxy: any;
    static readonly Entity: any;
    static readonly PlaneEntity: any;

    // recorde the rednerer engine core class ------------- end.
    
    static IsWebGL1(): boolean {
        return MinEngine.RendererDevice.IsWebGL1();
    }
    static IsWebGL2(): boolean {
        return MinEngine.RendererDevice.IsWebGL2();
    }

    static GetRenderer(): Renderer {
        return MinEngine.s_renderer;
    }
    static GetRendererContext(): RendererContext {
        return MinEngine.s_rcontext;
    }
    static SetDebugEnabled(enabled: boolean): void {
        
        MinEngine.RendererDevice.SHADERCODE_TRACE_ENABLED = enabled;
        if(enabled) {
        }
    }
    
    static Initialize(): void {
        var pwindow: any = window;
        let pmodule: any = pwindow["VoxCore"];
        console.log("MinEngine::InitializeModule(), MinEngine.s_renderer == null: ",MinEngine.s_renderer == null);
        if(MinEngine.s_renderer == null) {

            let mainModule: any = pmodule["mainModule"];
            let engine: any = MinEngine;
            engine.s_renderer = mainModule.getRenderer() as Renderer;
            engine.s_rcontext = mainModule.getRendererContext() as RendererContext;
            
            engine.RendererDevice = pmodule.RendererDevice;

            engine.Vector3D = pmodule.Vector3D;
            engine.Color4 = pmodule.Color4;
            engine.Matrix4 = pmodule.Matrix4;
            engine.Camera = pmodule.CameraBase;

            engine.ImageTextureProxy = pmodule.ImageTextureProxy;
            
            engine.DataMesh = pmodule.DataMesh;

            engine.Entity = pmodule.DisplayEntity;
            engine.PlaneEntity = pmodule.Plane3DEntity;
            
        }
    }
}
var pwindow: any = window;
if(pwindow["VoxCore"] == undefined) {
    pwindow["VoxCore"] = {};
}
var VoxCore = pwindow["VoxCore"];
if(VoxCore["VoxAppEngine"] == undefined) {    
    VoxCore["VoxAppEngine"] = MinEngine;
}
export {MinEngine};