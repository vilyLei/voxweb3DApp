(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["VoxApp"]=e():t["VoxApp"]=e()})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s="fae3")}({"14bb":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=window;void 0==n["VoxCore"]&&(n["VoxCore"]={});var r=n["VoxCore"];const s=i("ded0");r["primitiveApp"]=s.App},"1c35":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("84de"),r=i("8b8f");class s extends n.EntityObject{constructor(){super(!1),this.m_currEngity=null,this.dynColorEnabled=!0,this.m_voxEntity=this.m_currEngity=new r.Engine.DashedLineEntity}destroy(){super.destroy(),null==this.m_voxEntity&&(this.m_currEngity=null)}initializeLS(t,e){this.m_currEngity.dynColorEnabled=this.dynColorEnabled,this.m_currEngity.initializeLS(t,e)}initiazlizeFrustrum(t){this.m_currEngity.dynColorEnabled=this.dynColorEnabled,this.m_currEngity.initiazlizeFrustrum(t)}initializeBySegmentLine(t,e){this.m_currEngity.dynColorEnabled=this.dynColorEnabled,this.m_currEngity.initializeBySegmentLine(t,e)}initializeByPosition(t){this.m_currEngity.dynColorEnabled=this.dynColorEnabled,this.m_currEngity.initializeByPosition(t)}}e.DashedLineEntity=s},"1eb2":function(t,e,i){"use strict";if("undefined"!==typeof window){var n=window.document.currentScript,r=i("8875");n=r(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:r});var s=n&&n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);s&&(i.p=s[1])}},4707:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("84de"),r=i("8b8f");class s extends n.EntityObject{constructor(){super(!1),this.normalScale=1,this.uvPartsNumber=0,this.m_currEntity=null,this.m_currEntity=this.m_voxEntity=new r.Engine.BoxEntity}destroy(){super.destroy(),null==this.m_voxEntity&&(this.m_currEntity=null)}setVtxTransformMatrix(t){this.m_currEntity.setVtxTransformMatrix(t)}useFlatNormal(){this.m_currEntity.useFlatNormal()}useGourandNormal(){this.m_currEntity.useGourandNormal()}showBackFace(){this.m_currEntity.showBackFace()}showFrontFace(){this.m_currEntity.showFrontFace()}showAllFace(){this.m_currEntity.showAllFace()}scaleUVFaceAt(t,e,i,n,r){this.m_currEntity.scaleUVFaceAt(t,e,i,n,r)}scaleUVSFaceAt(t,e){this.m_currEntity.scaleUVSFaceAt(t,e)}reinitializeMesh(){this.m_currEntity.reinitializeMesh()}setFaceUVSAt(t,e,i=0){this.m_currEntity.setFaceUVSAt(t,e,i)}transformFaceAt(t,e){this.m_currEntity.transformFaceAt(t,e)}getFaceCenterAt(t,e){this.m_currEntity.getFaceCenterAt(t,e)}initialize(t,e,i=null){this.m_currEntity.normalScale=this.normalScale,this.m_currEntity.uvPartsNumber=this.uvPartsNumber,this.m_currEntity.initialize(t,e,i)}initializeCube(t,e){this.m_currEntity.normalScale=this.normalScale,this.m_currEntity.uvPartsNumber=this.uvPartsNumber,this.m_currEntity.initializeCube(t,e)}initializeSizeXYZ(t,e,i,n){this.m_currEntity.normalScale=this.normalScale,this.m_currEntity.uvPartsNumber=this.uvPartsNumber,this.m_currEntity.initializeSizeXYZ(t,e,i,n)}}e.BoxEntity=s},"4b33":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("84de"),r=i("8b8f");class s extends n.EntityObject{constructor(){super(!1),this.m_currEngity=null,this.m_voxEntity=this.m_currEngity=new r.Engine.AxisEntity}destroy(){super.destroy(),null==this.m_voxEntity&&(this.m_currEngity=null)}initialize(t=300){this.m_currEngity.initialize(t)}initializeSizeXYZ(t,e,i){this.m_currEngity.initializeSizeXYZ(t,e,i)}}e.AxisEntity=s},7675:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("8b8f"),r=i("4b33"),s=i("a58a"),o=i("4707"),a=i("ea22"),c=i("d307"),l=i("f3f7"),u=i("1c35"),m=i("d2a5"),h=i("7c67");class y{constructor(){this.m_engine=null,this.m_camTrack=null}initialize(t){null==this.m_engine&&(this.m_engine=t,this.m_camTrack=new m.CameraCtrl,this.m_camTrack.bindCamera(this.m_engine.getCamera()),this.initScene())}initScene(){this.m_engine.setClearRGBColor3f(.1,.2,.1),this.initObjs()}getTexture(t){let e=new n.Engine.ImageTextureProxy(64,64),i=new Image;return i.src="static/assets/"+t+".jpg",i.onload=t=>{e.setDataFromImage(i)},e}initObjs(){let t=this.getTexture("wood_01"),e=this.getTexture("metal_02"),i=this.getTexture("wood_02"),m=new r.AxisEntity;m.initialize(500),this.m_engine.addEntity(m);let y=new s.PlaneEntity;y.vtxColorEnabled=!0,y.color0.setRGB3f(0,2,0),y.color1.setRGB3f(2,0,0),y.color2.setRGB3f(2,0,2),y.initializeXOZSquare(1300,[t]),this.m_engine.addEntity(y);let d=new o.BoxEntity;d.initializeCube(200,[e]),d.setXYZ(-500,100,0),this.m_engine.addEntity(d);let _=new c.CylinderEntity;_.initialize(100,500,10,[i]),_.setXYZ(-500,250,400),this.m_engine.addEntity(_);let E=new a.SphereEntity;E.initialize(200,20,20,[i]),E.setXYZ(500,200,500),this.m_engine.addEntity(E);let g=600,p=new l.BoxFrameEntity(!0);p.initialize(new n.Engine.Vector3D(-g,-g,-g),new n.Engine.Vector3D(g,g,g)),p.setRGB3f(Math.random(),Math.random(),Math.random()),this.m_engine.addEntity(p);let x=new h.LineEntity;x.color.setRGB3f(1,0,0),x.initialize(new n.Engine.Vector3D,new n.Engine.Vector3D(-100,0,-100)),x.setXYZ(0,300,0),this.m_engine.addEntity(x);let f=new u.DashedLineEntity;f.initializeLS(new n.Engine.Vector3D,new n.Engine.Vector3D(100,0,100)),f.setXYZ(0,400,0),this.m_engine.addEntity(f)}run(){null!=this.m_camTrack&&(this.m_camTrack.rotationOffsetAngleWorldY(-.2),this.m_engine.updateCamera())}}e.Scene=y},"7c67":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("84de"),r=i("8b8f");class s extends n.EntityObject{constructor(){super(!1),this.color=new r.Engine.Color4,this.dynColorEnabled=!1,this.m_currEngity=null,this.m_voxEntity=this.m_currEngity=new r.Engine.LineEntity}destroy(){super.destroy(),null==this.m_voxEntity&&(this.m_currEngity=null)}initialize(t,e){this.m_currEngity.color.copyFrom(this.color),this.m_currEngity.dynColorEnabled=this.dynColorEnabled,this.m_currEngity.initialize(t,e)}initializeRectXOY(t,e,i,n){this.m_currEngity.color.copyFrom(this.color),this.m_currEngity.dynColorEnabled=this.dynColorEnabled,this.m_currEngity.initializeRectXOY(t,e,i,n)}}e.LineEntity=s},"84de":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("8b8f");class r{constructor(t=!0){this.m_voxEntity=null,t&&(this.m_voxEntity=n.Engine.Entity())}__$getREObj(){return this.m_voxEntity}updateMeshToGpu(t,e=!0){this.m_voxEntity.updateMeshToGpu(t,e)}updateMaterialToGpu(t,e=!0){this.m_voxEntity.updateMaterialToGpu(t,e)}setTextureList(t){this.m_voxEntity.setTextureList(t)}setTextureAt(t,e){this.m_voxEntity.setTextureAt(t,e)}setVisible(t){this.m_voxEntity.setVisible(t)}getVisible(){return this.m_voxEntity.getVisible()}getIvsIndex(){return this.m_voxEntity.getIvsIndex()}getIvsCount(){return this.m_voxEntity.getIvsCount()}setIvsParam(t,e){return this.m_voxEntity.setIvsParam(t,e)}isPolyhedral(){return this.m_voxEntity.isPolyhedral()}setRotationXYZ(t,e,i){this.m_voxEntity.setRotationXYZ(t,e,i)}getRotationXYZ(t){this.m_voxEntity.getRotationXYZ(t)}setScaleXYZ(t,e,i){this.m_voxEntity.setScaleXYZ(t,e,i)}getScaleXYZ(t){this.m_voxEntity.getScaleXYZ(t)}setXYZ(t,e,i){this.m_voxEntity.setXYZ(t,e,i)}setPosition(t){this.m_voxEntity.setPosition(t)}getPosition(t){this.m_voxEntity.getPosition(t)}copyMesh(t){this.m_voxEntity.copyMesh(t)}setMesh(t){this.m_voxEntity.setMesh(t)}getMesh(){return this.m_voxEntity.getMesh()}copyMaterial(t){return this.m_voxEntity.copyMaterial(t)}setMaterial(t){return this.m_voxEntity.setMaterial(t)}getMaterial(){return this.m_voxEntity.getMaterial()}getGlobalBounds(){return this.m_voxEntity.getGlobalBounds()}getLocalBounds(){return this.m_voxEntity.getLocalBounds()}getInvMatrix(){return this.m_voxEntity.getInvMatrix()}getMatrix(){return this.m_voxEntity.getMatrix()}getToParentMatrix(){return this.m_voxEntity.getToParentMatrix()}setRenderState(t){return this.m_voxEntity.setRenderState(t)}setRenderStateByName(t){return this.m_voxEntity.setRenderStateByName(t)}isInRenderer(){return this.m_voxEntity.isInRenderer()}isRenderEnabled(){return this.m_voxEntity.isRenderEnabled()}destroy(){this.m_voxEntity.isInRenderer()||(this.m_voxEntity.destroy(),this.m_voxEntity=null)}updateBounds(){this.m_voxEntity.updateBounds()}update(){this.m_voxEntity.update()}}e.EntityObject=r},8875:function(t,e,i){var n,r,s;(function(i,o){r=[],n=o,s="function"===typeof n?n.apply(e,r):n,void 0===s||(t.exports=s)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(y){var i,n,r,s=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,a=s.exec(y.stack)||o.exec(y.stack),c=a&&a[1]||!1,l=a&&a[2]||!1,u=document.location.href.replace(document.location.hash,""),m=document.getElementsByTagName("script");c===u&&(i=document.documentElement.outerHTML,n=new RegExp("(?:[^\\n]+?\\n){0,"+(l-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),r=i.replace(n,"$1").trim());for(var h=0;h<m.length;h++){if("interactive"===m[h].readyState)return m[h];if(m[h].src===c)return m[h];if(c===u&&m[h].innerHTML&&m[h].innerHTML.trim()===r)return m[h]}return null}}return t}))},"8b8f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class n{static GetRenderer(){return n.s_renderer}static GetRendererContext(){return n.s_rcontext}static InitializeModule(t){if(null==n.s_renderer){let e=t["mainModule"];n.s_renderer=e.getRenderer(),n.s_rcontext=e.getRendererContext(),n.ImageTextureProxy=t.ImageTextureProxy,n.Entity=t.DisplayEntity,n.AxisEntity=t.Axis3DEntity,n.PlaneEntity=t.Plane3DEntity,n.BoxEntity=t.Box3DEntity,n.SphereEntity=t.Sphere3DEntity,n.CylinderEntity=t.Cylinder3DEntity,n.BillboardEntity=t.Billboard3DEntity,n.LineEntity=t.Line3DEntity,n.DashedLineEntity=t.DashedLine3DEntity,n.BoxFrameEntity=t.BoxFrame3D,n.FrustrumFrameEntity=t.FrustrumFrame3DEntity,n.MathConst=t.MathConst,n.Vector3D=t.Vector3D,n.Color4=t.Color4,n.Matrix4=t.Matrix4,n.AABB=t.AABB,n.Camera=t.CameraBase,n.ShaderCodeMaterial=t.ShaderCodeMaterial,n.ShaderUniformData=t.ShaderUniformData}}}n.s_renderer=null,n.s_rcontext=null,e.Engine=n;var r=window;void 0==r["VoxCore"]&&(r["VoxCore"]={});var s=r["VoxCore"];s["VoxAppEngine"]=n},a0cf:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("8b8f");class r{constructor(){this.m_renderer=null,this.m_rcontext=null}initialize(){null==this.m_renderer&&(this.m_renderer=n.Engine.GetRenderer(),this.m_rcontext=n.Engine.GetRendererContext())}getRenderer(){return this.m_renderer}getRendererContext(){return this.m_rcontext}setClearRGBColor3f(t,e,i){this.m_rcontext.setClearRGBColor3f(t,e,i)}setClearRGBAColor4f(t,e,i,n){this.m_rcontext.setClearRGBAColor4f(t,e,i,n)}begin(){this.m_rcontext.renderBegin()}update(){this.m_renderer.update()}render(){this.m_renderer.run()}renderAt(t){this.m_renderer.runAt(t)}end(){this.m_rcontext.runEnd()}run(){this.m_rcontext.renderBegin(),this.m_renderer.update(),this.m_renderer.run(),this.m_rcontext.runEnd()}addEntity(t,e=0){let i=t;void 0!=i.__$getREObj&&(t=i.__$getREObj()),this.m_renderer.addEntity(t,e)}removeEntity(t){let e=t;void 0!=e.__$getREObj&&(t=e.__$getREObj()),this.m_renderer.removeEntity(t)}removeEntityByProcessIndex(t,e){this.m_renderer.removeEntityByProcessIndex(t,e)}appendProcess(t=!0,e=!1){this.m_renderer.appendProcess(t,e)}drawEntity(t,e=!1,i=!0){this.m_renderer.drawEntity(t,e,i)}getCamera(){return this.m_rcontext.getCamera()}updateCamera(){this.m_rcontext.updateCamera()}}e.EngineInstance=r},a58a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("84de"),r=i("8b8f");class s extends n.EntityObject{constructor(){super(!1),this.m_currEngity=null,this.color0=new r.Engine.Color4,this.color1=new r.Engine.Color4,this.color2=new r.Engine.Color4,this.color3=new r.Engine.Color4,this.offsetU=0,this.offsetV=0,this.uScale=1,this.vScale=1,this.uvs=null,this.flipVerticalUV=!1,this.vtxColorEnabled=!1,this.premultiplyAlpha=!1,this.m_voxEntity=this.m_currEngity=new r.Engine.PlaneEntity}destroy(){super.destroy(),null==this.m_voxEntity&&(this.m_currEngity=null,this.uvs=null)}syncParam(){let t=this.m_currEngity;t.offsetU=this.offsetU,t.offsetV=this.offsetV,t.uScale=this.uScale,t.vScale=this.vScale,t.uvs=this.uvs,t.flipVerticalUV=this.flipVerticalUV,t.vtxColorEnabled=this.vtxColorEnabled,t.premultiplyAlpha=this.premultiplyAlpha,t.color0.copyFrom(this.color0),t.color1.copyFrom(this.color1),t.color2.copyFrom(this.color2),t.color3.copyFrom(this.color3)}initializeXOY(t,e,i,n,r=null){this.syncParam(),this.m_currEngity.initializeXOY(t,e,i,n,r)}initializeXOYSquare(t,e=null){this.syncParam(),this.m_currEngity.initializeXOYSquare(t,e)}initializeXOZ(t,e,i,n,r=null){this.syncParam(),this.m_currEngity.initializeXOZ(t,e,i,n,r)}initializeYOZ(t,e,i,n,r=null){this.syncParam(),this.m_currEngity.initializeYOZ(t,e,i,n,r)}initializeXOZSquare(t,e=null){this.syncParam(),this.m_currEngity.initializeXOZSquare(t,e)}initializeFixScreen(t=null){this.syncParam(),this.m_currEngity.initializeFixScreen(t)}setScreenAlignEnable(t){this.m_currEngity.setScreenAlignEnable(t)}showDoubleFace(t=!1,e=!0){this.m_currEngity.showDoubleFace(t,e)}toTransparentBlend(t=!1,e=!0){this.m_currEngity.showDoubleFace(t,e)}toBrightnessBlend(t=!1,e=!0){this.m_currEngity.toBrightnessBlend(t,e)}setUVS(t){this.m_currEngity.setUVS(t)}reinitializeMesh(){this.m_currEngity.reinitializeMesh()}}e.PlaneEntity=s},d2a5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("8b8f");class r{constructor(){this.m_matrix=new n.Engine.Matrix4,this.m_position=new n.Engine.Vector3D,this.m_direction=new n.Engine.Vector3D,this.m_angle=0,this.m_updateEnabled=!1,this.m_camera=null}destroy(){this.m_camera=null}bindCamera(t){this.m_camera=t,null!=t&&(this.m_direction.copyFrom(this.m_camera.getPosition()),this.m_direction.subtractBy(this.m_camera.getLookAtPosition()))}update(){null!=this.m_camera&&this.m_updateEnabled&&(this.m_updateEnabled=!1)}rotationOffsetAngleWorldY(t){this.m_angle=t,this.m_updateEnabled=!0,this.m_direction.copyFrom(this.m_camera.getPosition()),this.m_direction.subtractBy(this.m_camera.getLookAtPosition()),this.m_matrix.identity(),this.m_matrix.appendRotationY(this.m_angle*n.Engine.MathConst.MATH_PI_OVER_180),this.m_position.copyFrom(this.m_direction),this.m_matrix.transformVectorSelf(this.m_position),this.m_position.addBy(this.m_camera.getLookAtPosition()),this.m_camera.setPosition(this.m_position)}rotationOffsetAngleWordX(t){this.m_angle=t,this.m_updateEnabled=!0,this.m_direction.copyFrom(this.m_camera.getPosition()),this.m_direction.subtractBy(this.m_camera.getLookAtPosition()),this.m_matrix.identity(),this.m_matrix.appendRotationX(this.m_angle*n.Engine.MathConst.MATH_PI_OVER_180),this.m_position.copyFrom(this.m_direction),this.m_matrix.transformVectorSelf(this.m_position),this.m_position.addBy(this.m_camera.getLookAtPosition()),this.m_camera.setPosition(this.m_position)}rotationOffsetAngleWordZ(t){this.m_angle=t,this.m_updateEnabled=!0,this.m_direction.copyFrom(this.m_camera.getPosition()),this.m_direction.subtractBy(this.m_camera.getLookAtPosition()),this.m_matrix.identity(),this.m_matrix.appendRotationZ(this.m_angle*n.Engine.MathConst.MATH_PI_OVER_180),this.m_position.copyFrom(this.m_direction),this.m_matrix.transformVectorSelf(this.m_position),this.m_position.addBy(this.m_camera.getLookAtPosition()),this.m_camera.setPosition(this.m_position)}}e.CameraCtrl=r},d307:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("84de"),r=i("8b8f");class s extends n.EntityObject{constructor(){super(!1),this.m_currEntity=null,this.m_voxEntity=this.m_currEntity=new r.Engine.CylinderEntity}destroy(){super.destroy(),null==this.m_voxEntity&&(this.m_currEntity=null)}initialize(t,e,i,n=null,r=1,s=-.5){this.m_currEntity.initialize(t,e,i,n,r,s)}}e.CylinderEntity=s},ded0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("a0cf"),r=i("8b8f"),s=i("7675");class o{constructor(){this.m_initFlag=!0,this.m_engine=new n.EngineInstance}initialize(t){if(this.m_initFlag){this.m_initFlag=!1,this.m_engine.initialize();let t=new r.Engine.ImageTextureProxy(64,64),e=new Image;e.src="static/assets/box_wood01.jpg",e.onload=i=>{t.setDataFromImage(e)},this.m_scene=new s.Scene,this.m_scene.initialize(this.m_engine)}}run(){null!=this.m_engine&&(this.m_scene.run(),this.m_engine.run())}}e.App=o},ea22:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("84de"),r=i("8b8f");class s extends n.EntityObject{constructor(){super(!1),this.m_currEngity=null,this.m_voxEntity=this.m_currEngity=new r.Engine.SphereEntity}destroy(){super.destroy(),null==this.m_voxEntity&&(this.m_currEngity=null)}initialize(t,e,i,n=null){this.m_currEngity.initialize(t,e,i,n)}}e.SphereEntity=s},f3f7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i("84de"),r=i("8b8f");class s extends n.EntityObject{constructor(t=!1){super(!1),this.m_currEngity=null,this.m_voxEntity=this.m_currEngity=new r.Engine.BoxFrameEntity(t)}destroy(){super.destroy(),null==this.m_voxEntity&&(this.m_currEngity=null)}setRGB3f(t,e,i){this.m_currEngity.setRGB3f(t,e,i)}initialize(t,e){this.m_currEngity.initialize(t,e)}initializeBySegmentLine(t,e){this.m_currEngity.initializeBySegmentLine(t,e)}initializeByPosition(t){this.m_currEngity.initializeByPosition(t)}initializeByPosList8(t){this.m_currEngity.initializeByPosList8(t)}updateFrame(t,e){this.m_currEngity.updateFrame(t,e)}updateFrameByAABB(t){this.m_currEngity.updateFrameByAABB(t)}getVertexAt(t,e){this.m_currEngity.getVertexAt(t,e)}setVertexAt(t,e){this.m_currEngity.setVertexAt(t,e)}}e.BoxFrameEntity=s},fae3:function(t,e,i){"use strict";i.r(e);i("1eb2");var n=i("14bb");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r)}})}));