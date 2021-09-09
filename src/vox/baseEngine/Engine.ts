
class Engine{

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
    static Sphere3DEntity: any;
    static ShaderCodeMaterial: any;
    static ShaderUniformData: any;

    static Initialize(pmodule: any): void {

        Engine.ImageTextureProxy = pmodule.ImageTextureProxy;
            
        Engine.PlaneEntity = pmodule.Plane3DEntity;
        Engine.AxisEntity = pmodule.Axis3DEntity;
        Engine.Sphere3DEntity = pmodule.Sphere3DEntity;
        Engine.BoxEntity = pmodule.Box3DEntity;
        Engine.MathConst = pmodule.MathConst;
        Engine.Vector3D = pmodule.Vector3D;
        Engine.Color4 = pmodule.Color4;
        Engine.Matrix4 = pmodule.Matrix4;
        Engine.AABB = pmodule.AABB;
        Engine.Camera = pmodule.CameraBase;
        
        Engine.ShaderCodeMaterial = pmodule.ShaderCodeMaterial;
        Engine.ShaderUniformData = pmodule.ShaderUniformData;

        let shaderCodeMaterialIns = new Engine.ShaderCodeMaterial();
        console.log("shaderCodeMaterialIns: ",shaderCodeMaterialIns);
        let shaderUniformDataIns = new Engine.ShaderUniformData();
        console.log("shaderUniformDataIns: ",shaderUniformDataIns);
    }
}
export {Engine};