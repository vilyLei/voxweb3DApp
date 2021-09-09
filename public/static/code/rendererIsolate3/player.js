(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["VoxApp"]=e():t["VoxApp"]=e()})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s="fae3")}({"0bb0":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=window;void 0==r["VoxCore"]&&(r["VoxCore"]={});var n=r["VoxCore"];const a=i("5341");n["PlayerOne"]=a.PlayerOne},"1eb2":function(t,e,i){"use strict";if("undefined"!==typeof window){var r=window.document.currentScript,n=i("8875");r=n(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:n});var a=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);a&&(i.p=a[1])}},"31a5":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=i("32c7");class n{constructor(){this.m_matrix=new r.Engine.Matrix4,this.m_position=new r.Engine.Vector3D,this.m_direction=new r.Engine.Vector3D,this.m_angle=0,this.m_updateEnabled=!1,this.m_camera=null}destroy(){this.m_camera=null}bindCamera(t){this.m_camera=t,null!=t&&(this.m_direction.copyFrom(this.m_camera.getPosition()),this.m_direction.subtractBy(this.m_camera.getLookAtPosition()))}update(){null!=this.m_camera&&this.m_updateEnabled&&(this.m_updateEnabled=!1)}rotationOffsetAngleWorldY(t){this.m_angle=t,this.m_updateEnabled=!0,this.m_direction.copyFrom(this.m_camera.getPosition()),this.m_direction.subtractBy(this.m_camera.getLookAtPosition()),this.m_matrix.identity(),this.m_matrix.appendRotationY(this.m_angle*r.Engine.MathConst.MATH_PI_OVER_180),this.m_position.copyFrom(this.m_direction),this.m_matrix.transformVectorSelf(this.m_position),this.m_position.addBy(this.m_camera.getLookAtPosition()),this.m_camera.setPosition(this.m_position)}rotationOffsetAngleWordX(t){this.m_angle=t,this.m_updateEnabled=!0,this.m_direction.copyFrom(this.m_camera.getPosition()),this.m_direction.subtractBy(this.m_camera.getLookAtPosition()),this.m_matrix.identity(),this.m_matrix.appendRotationX(this.m_angle*r.Engine.MathConst.MATH_PI_OVER_180),this.m_position.copyFrom(this.m_direction),this.m_matrix.transformVectorSelf(this.m_position),this.m_position.addBy(this.m_camera.getLookAtPosition()),this.m_camera.setPosition(this.m_position)}rotationOffsetAngleWordZ(t){this.m_angle=t,this.m_updateEnabled=!0,this.m_direction.copyFrom(this.m_camera.getPosition()),this.m_direction.subtractBy(this.m_camera.getLookAtPosition()),this.m_matrix.identity(),this.m_matrix.appendRotationZ(this.m_angle*r.Engine.MathConst.MATH_PI_OVER_180),this.m_position.copyFrom(this.m_direction),this.m_matrix.transformVectorSelf(this.m_position),this.m_position.addBy(this.m_camera.getLookAtPosition()),this.m_camera.setPosition(this.m_position)}}e.CameraCtrl=n},"32c7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class r{static Initialize(t){r.ImageTextureProxy=t.ImageTextureProxy,r.PlaneEntity=t.Plane3DEntity,r.AxisEntity=t.Axis3DEntity,r.Sphere3DEntity=t.Sphere3DEntity,r.BoxEntity=t.Box3DEntity,r.MathConst=t.MathConst,r.Vector3D=t.Vector3D,r.Color4=t.Color4,r.Matrix4=t.Matrix4,r.AABB=t.AABB,r.Camera=t.CameraBase,r.ShaderCodeMaterial=t.ShaderCodeMaterial,r.ShaderUniformData=t.ShaderUniformData;new r.ShaderCodeMaterial,new r.ShaderUniformData}}e.Engine=r},5341:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=i("31a5"),n=i("c8da"),a=i("32c7"),o=i("fff0");class s{constructor(){this.m_renderer=null,this.m_rcontext=null,this.m_camTrack=null,this.m_materialBuilder=new n.MaterialBuilder,this.m_axisYAngle=0,this.m_planeYAngle=0}initialize(t){if(null!=t&&null==this.m_renderer){if(null==t["mainModule"])return;this.m_renderer=t["mainModule"].getRenderer(),this.m_rcontext=t["mainModule"].getRendererContext(),a.Engine.Initialize(t),this.m_camTrack=new r.CameraCtrl,this.m_camTrack.bindCamera(this.m_rcontext.getCamera()),this.initScene()}}initScene(){this.createLightObjs(new a.Engine.Vector3D(0,100,0),1),this.initObjs(),this.m_rcontext.setClearRGBColor3f(.1,.2,.1)}createLightObjs(t,e){let i=new a.Engine.ImageTextureProxy(64,64),r=new Image;r.src="static/assets/default.jpg",r.onload=t=>{i.setDataFromImage(r)};let n=new a.Engine.PlaneEntity;n.setPosition(t),n.setScaleXYZ(e,e,e),n.setMaterial(this.m_materialBuilder.create()),n.initializeXOZSquare(700,[i]),this.m_renderer.addEntity(n,0);let o=new a.Engine.BoxEntity;o.setMaterial(this.m_materialBuilder.create()),o.initializeCube(200,[i]),t.y+=100,o.setPosition(t),this.m_renderer.addEntity(o,0)}initObjs(){let t=new a.Engine.AxisEntity;t.initialize(500),this.m_renderer.addEntity(t,0),this.m_axis=t;let e=new a.Engine.ImageTextureProxy(64,64),i=new Image;i.onload=t=>{e.setDataFromImage(i)},i.src="static/assets/yanj.jpg";let r=new a.Engine.PlaneEntity;r.setMaterial(this.m_materialBuilder.create()),r.initializeXOZSquare(1300,[e]),this.m_renderer.addEntity(r,0),this.m_plane=r;for(let n=0;n<15;++n){let t=new o.SphereObject;t.initialize(this.m_renderer,this.m_materialBuilder)}}run(){null!=this.m_axis&&(this.m_axisYAngle+=1,this.m_planeYAngle+=.5,this.m_axis.setRotationXYZ(0,this.m_axisYAngle,0),this.m_axis.update(),this.m_plane.setRotationXYZ(0,this.m_planeYAngle,0),this.m_plane.update()),null!=this.m_camTrack&&(this.m_materialBuilder.updateLightData(this.m_rcontext.getCamera().getViewInvMatrix()),this.m_camTrack.rotationOffsetAngleWorldY(-.2),this.m_rcontext.updateCamera()),this.m_rcontext.renderBegin(),this.m_renderer.update(),this.m_renderer.run(),this.m_rcontext.runEnd()}}e.PlayerOne=s},8875:function(t,e,i){var r,n,a;(function(i,o){n=[],r=o,a="function"===typeof r?r.apply(e,n):r,void 0===a||(t.exports=a)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(u){var i,r,n,a=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,s=a.exec(u.stack)||o.exec(u.stack),l=s&&s[1]||!1,c=s&&s[2]||!1,m=document.location.href.replace(document.location.hash,""),h=document.getElementsByTagName("script");l===m&&(i=document.documentElement.outerHTML,r=new RegExp("(?:[^\\n]+?\\n){0,"+(c-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=i.replace(r,"$1").trim());for(var d=0;d<h.length;d++){if("interactive"===h[d].readyState)return h[d];if(h[d].src===l)return h[d];if(l===m&&h[d].innerHTML&&h[d].innerHTML.trim()===n)return h[d]}return null}}return t}))},9803:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class r{constructor(){}initialize(){}buildThisCode(t){}getFragShaderCode(t){return t.reset(),t.vertMatrixInverseEnabled=!0,t.addTextureSample2D("",!0,!0,!1),t.addVarying("vec2","v_uv"),t.addVarying("vec3","v_nv"),t.addVarying("vec3","v_viewDir"),t.addVertLayout("vec3","a_vs"),t.addVertLayout("vec2","a_uvs"),t.addVertLayout("vec3","a_nvs"),t.addFragOutput("vec4","FragColor0"),t.addFragUniform("vec4","u_color",0),t.addFragUniform("vec4","u_lightParams",3),t.useVertSpaceMats(!0,!0,!0),t.addFragMainCode("\nvec3 calcLight(vec3 baseColor, vec3 pLightDir, vec3 lightColor, vec3 specColor) {\n\n    vec3 nvs = (v_nv);\n\tvec3 viewDir = v_viewDir;\n    float nDotL = max(dot(nvs, pLightDir), 0.0);\n\tbaseColor = nDotL * baseColor * lightColor;\n\tviewDir = normalize(pLightDir + viewDir);\n\tlightColor = specColor * nDotL * pow(max(dot(nvs, viewDir), 0.0), 32.0);\n\treturn (baseColor * 0.3 + lightColor * 0.7);\n}\n\nvoid main()\n{\n    vec4 color4 = VOX_Texture2D(u_sampler0, v_uv);\n    color4.xyz *= u_color.xyz;\n    \n    vec3 lightDirec = u_lightParams[0].xyz;\n    vec3 lightColor = u_lightParams[1].xyz;\n    vec3 lightSpecColor = u_lightParams[2].xyz;\n\n    vec3 destColor = calcLight(\n        color4.xyz,\n        lightDirec,\n        lightColor,\n        lightSpecColor\n    );\n    FragColor0 = vec4(destColor * 0.9 + 0.4 * color4.xyz, 1.0);\n}\n"),t.buildFragCode()}getVtxShaderCode(t){return t.addVertMainCode("\nvoid main(){\n\n    mat4 viewMat4 = u_viewMat * u_objMat;\n    vec4 viewPos = viewMat4 * vec4(a_vs, 1.0);\n    gl_Position = u_projMat * viewPos;\n\n    v_viewDir = -normalize(viewPos.xyz);\n    v_uv = a_uvs;\n    v_nv = normalize(a_nvs * inverse(mat3(viewMat4)));\n}\n"),t.buildVertCode()}createSharedUniforms(){return null}getUniqueShaderName(){return"ShaderCodeWrapperTest01"}}e.ShaderCodeWrapper=r},c8da:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=i("32c7"),n=i("9803");class a{constructor(){this.shaderWrapper=new n.ShaderCodeWrapper,this.lightData=null,this.lightDir=null,this.lightColor=null,this.lightSpecular=null,this.tempV=null,this.mat4=null}updateLightData(t){null!=this.lightData&&(this.mat4.copyFrom(t),this.mat4.transpose(),this.mat4.deltaTransformOutVector(this.lightDir,this.tempV),this.lightData[0]=-this.tempV.x,this.lightData[1]=-this.tempV.y,this.lightData[2]=-this.tempV.z)}create(){if(null==this.lightUniformDataList){this.lightDir=new r.Engine.Vector3D(-1,-1,-1),this.lightColor=new r.Engine.Color4(1,1,1),this.lightSpecular=new r.Engine.Color4(.3,.2,.8,1),this.tempV=new r.Engine.Vector3D(1,1,1),this.mat4=new r.Engine.Matrix4,this.lightData=new Float32Array([this.lightDir.x,this.lightDir.y,this.lightDir.z,1,this.lightColor.r,this.lightColor.g,this.lightColor.b,1,this.lightSpecular.r,this.lightSpecular.g,this.lightSpecular.b,1]);let t=new r.Engine.ShaderUniformData;t.uniformNameList=["u_lightParams"],t.dataList=[this.lightData],this.lightUniformDataList=[t]}let t=this.shaderWrapper,e=new Float32Array([1.3*Math.random(),1.3*Math.random(),1.3*Math.random(),1]),i=new r.Engine.ShaderUniformData;i.uniformNameList=["u_color"],i.dataList=[e];let n=new r.Engine.ShaderCodeMaterial;return n.setShaderCodeWrapper(t),n.setSelfUniformData(i),n.setSharedUniformsData(this.lightUniformDataList),n}}e.MaterialBuilder=a},fae3:function(t,e,i){"use strict";i.r(e);i("1eb2");var r=i("0bb0");for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n)},fff0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=i("32c7");class n{constructor(){this.m_pos=new r.Engine.Vector3D}initialize(t,e){if(null==n.s_tex){let t=new r.Engine.ImageTextureProxy(64,64),e=new Image;e.onload=i=>{t.setDataFromImage(e)},e.src="static/assets/box_wood01.jpg",n.s_tex=t}let i=.5*Math.random()+.6,a=new r.Engine.Sphere3DEntity;this.m_pos.setXYZ(1e3*Math.random()-500,600*Math.random()-30,1e3*Math.random()-500),a.setPosition(this.m_pos),a.setScaleXYZ(i,i,i);let o=e.create();null!=o&&a.setMaterial(o),a.initialize(100,20,20,[n.s_tex]),null==o&&a.getMaterial().setRGB3f(1.5*Math.random(),1.5*Math.random(),1.5*Math.random()),t.addEntity(a,0),this.entity=a}}n.s_tex=null,n.s_sph=null,e.SphereObject=n}})}));