(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VoxApp"] = factory();
	else
		root["VoxApp"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "030e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2020 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/
// renderer context Extensions

class RCExtension {
  static Initialize(webVer, gl) {
    let selfT = this;

    if (webVer == 1) {
      //#extension OES_standard_derivatives : enable
      selfT.OES_standard_derivatives = gl.getExtension('OES_standard_derivatives');
      if (selfT.OES_standard_derivatives != null) console.log("Use OES_standard_derivatives Extension success!");else console.log("OES_standard_derivatives Extension can not support!"); //#extension GL_EXT_shader_texture_lod : enable, for example: textureCubeLodEXT(envMap, dir, mipLv)
      // vec4 texture2DLodEXT(sampler2D sampler, vec2 coord, float lod)
      // vec4 texture2DProjLodEXT(sampler2D sampler, vec3 coord, float lod)
      // vec4 texture2DProjLodEXT(sampler2D sampler, vec4 coord, float lod)
      // vec4 textureCubeLodEXT(samplerCube sampler, vec3 coord, float lod)
      // vec4 texture2DGradEXT(sampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy)
      // vec4 texture2DProjGradEXT(sampler2D sampler, vec3 P, vec2 dPdx, vec2 dPdy)
      // vec4 texture2DProjGradEXT(sampler2D sampler, vec4 P, vec2 dPdx, vec2 dPdy)
      // vec4 textureCubeGradEXT(samplerCube sampler, vec3 P, vec3 dPdx, vec3 dPdy)

      selfT.EXT_shader_texture_lod = gl.getExtension('EXT_shader_texture_lod');
      if (selfT.EXT_shader_texture_lod != null) console.log("Use EXT_shader_texture_lod Extension success!");else console.log("EXT_shader_texture_lod Extension can not support!");
      /*
      <script type="x-shader/x-fragment">
      #extension GL_EXT_shader_texture_lod : enable
      #extension GL_OES_standard_derivatives : enable
      
      uniform sampler2D myTexture;
      varying vec2 texcoord;
      
      void main(){
        gl_FragColor = texture2DGradEXT(myTexture, mod(texcoord, vec2(0.1, 0.5)),
                                        dFdx(texcoord), dFdy(texcoord));
      }
      </script>
      */

      selfT.WEBGL_draw_buffers = gl.getExtension('WEBGL_draw_buffers');
      if (selfT.WEBGL_draw_buffers != null) console.log("Use WEBGL_draw_buffers Extension success!");else console.log("WEBGL_draw_buffers Extension can not support!"); //DivLog.ShowLog("selfT.WEBGL_draw_buffers != null: "+(selfT.WEBGL_draw_buffers != null));

      selfT.OES_vertex_array_object = gl.getExtension('OES_vertex_array_object');
      if (selfT.OES_vertex_array_object != null) console.log("Use OES_vertex_array_object Extension success!");else console.log("OES_vertex_array_object Extension can not support!");
      selfT.ANGLE_instanced_arrays = gl.getExtension('ANGLE_instanced_arrays');
      if (selfT.ANGLE_instanced_arrays != null) console.log("Use ANGLE_instanced_arrays Extension success!");else console.log("ANGLE_instanced_arrays Extension can not support!");
      selfT.EXT_color_buffer_float = gl.getExtension('EXT_color_buffer_float');
      if (selfT.EXT_color_buffer_float != null) console.log("Use EXT_color_buffer_float Extension success!");else console.log("EXT_color_buffer_float Extension can not support!");
      selfT.EXT_color_buffer_half_float = gl.getExtension('EXT_color_buffer_half_float');
      if (selfT.EXT_color_buffer_half_float != null) console.log("Use EXT_color_buffer_half_float Extension success!");else console.log("EXT_color_buffer_half_float Extension can not support!");
      selfT.OES_texture_half_float = gl.getExtension('OES_texture_half_float');
      if (selfT.OES_texture_half_float != null) console.log("Use OES_texture_half_float Extension success!");else console.log("OES_texture_half_float Extension can not support!");
      selfT.OES_texture_half_float_linear = gl.getExtension('OES_texture_half_float_linear');
      if (selfT.OES_texture_half_float_linear != null) console.log("Use OES_texture_half_float_linear Extension success!");else console.log("OES_texture_half_float_linear Extension can not support!");
      selfT.OES_texture_float = gl.getExtension('OES_texture_float');
      if (selfT.OES_texture_float != null) console.log("Use OES_texture_float Extension success!");else console.log("OES_texture_float Extension can not support!"); //

      selfT.OES_element_index_uint = gl.getExtension('OES_element_index_uint');
      if (selfT.OES_element_index_uint != null) console.log("Use OES_element_index_uint Extension success!");else console.log("OES_element_index_uint Extension can not support!"); //EXT_blend_minmax

      selfT.EXT_blend_minmax = gl.getExtension('EXT_blend_minmax');
      if (selfT.EXT_blend_minmax != null) console.log("Use EXT_blend_minmax Extension success!");else console.log("EXT_blend_minmax Extension can not support!");
    } else {
      //  selfT.OES_standard_derivatives = gl.getExtension('OES_standard_derivatives');
      //  if(selfT.OES_standard_derivatives != null)
      //  console.log("Use OES_standard_derivatives Extension success!");
      //  else
      //  console.log("OES_standard_derivatives Extension can not support!");
      selfT.EXT_shader_texture_lod = gl.getExtension('EXT_shader_texture_lod');
      if (selfT.EXT_shader_texture_lod != null) console.log("Use EXT_shader_texture_lod Extension success!");else console.log("EXT_shader_texture_lod Extension can not support!");
      selfT.EXT_color_buffer_half_float = gl.getExtension('EXT_color_buffer_half_float');
      if (selfT.EXT_color_buffer_half_float != null) console.log("Use EXT_color_buffer_half_float Extension success!");else console.log("EXT_color_buffer_half_float Extension can not support!");
      selfT.OES_texture_half_float_linear = gl.getExtension('OES_texture_half_float_linear');
      if (selfT.OES_texture_half_float_linear != null) console.log("Use OES_texture_half_float_linear Extension success!");else console.log("OES_texture_half_float_linear Extension can not support!");
      selfT.EXT_color_buffer_float = gl.getExtension('EXT_color_buffer_float');
      if (selfT.EXT_color_buffer_float != null) console.log("Use EXT_color_buffer_float Extension success!");else console.log("EXT_color_buffer_float Extension can not support!");
    }

    selfT.OES_texture_float_linear = gl.getExtension('OES_texture_float_linear');
    if (selfT.OES_texture_float_linear != null) console.log("Use OES_texture_float_linear Extension success!");else console.log("OES_texture_float_linear Extension can not support!");
    selfT.WEBGL_depth_texture = gl.getExtension('WEBGL_depth_texture');
    if (selfT.WEBGL_depth_texture != null) console.log("Use WEBGL_depth_texture Extension success!");else console.log("WEBGL_depth_texture Extension can not support!");
    selfT.WEBGL_debug_renderer_info = gl.getExtension('WEBGL_debug_renderer_info');
    if (selfT.WEBGL_debug_renderer_info != null) console.log("Use WEBGL_debug_renderer_info Extension success!");else console.log("WEBGL_debug_renderer_info Extension can not support!"); //
    //console.log("RCExtension.WEBGL_depth_texture: ",RCExtension.WEBGL_depth_texture);
  }

}

RCExtension.OES_standard_derivatives = null;
RCExtension.EXT_shader_texture_lod = null;
RCExtension.WEBGL_draw_buffers = null;
RCExtension.OES_vertex_array_object = null;
RCExtension.ANGLE_instanced_arrays = null;
RCExtension.EXT_color_buffer_float = null;
RCExtension.EXT_color_buffer_half_float = null;
RCExtension.OES_texture_float_linear = null;
RCExtension.OES_texture_half_float_linear = null;
RCExtension.OES_texture_half_float = null;
RCExtension.OES_texture_float = null;
RCExtension.OES_element_index_uint = null;
RCExtension.EXT_blend_minmax = null;
RCExtension.WEBGL_depth_texture = null;
RCExtension.WEBGL_debug_renderer_info = null;
exports.default = RCExtension;

/***/ }),

/***/ "0851":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const TextureConst_1 = __webpack_require__("8d98");

const MathConst_1 = __importDefault(__webpack_require__("6e01"));

const TextureResSlot_1 = __importDefault(__webpack_require__("da6a"));
/**
 * Texture cpu memory data object
 */


class TextureProxy {
  constructor(texWidth, texHeight, powerof2Boo = false) {
    this.m_uid = -1; // 自身的引用计数器

    this.m_attachCount = 0;
    this.m_renderProxy = null;
    this.m_slot = null;
    this.m_miplevel = -1;
    this.m_texWidth = 128;
    this.m_texHeight = 128;
    this.m_texBufW = 128;
    this.m_texBufH = 128;
    this.m_texTarget = TextureConst_1.TextureTarget.TEXTURE_2D; // The fragment processor texture sampler type.

    this.m_sampler = -1; // have render useable data

    this.m_haveRData = false;
    this.m_type = TextureConst_1.TextureProxyType.Default;
    this.m_generateMipmap = true;
    this.name = "TextureProxy";
    this.internalFormat = TextureConst_1.TextureFormat.RGBA;
    this.srcFormat = TextureConst_1.TextureFormat.RGBA;
    this.dataType = TextureConst_1.TextureDataType.UNSIGNED_BYTE;
    this.wrap_s = TextureConst_1.TextureConst.WRAP_CLAMP_TO_EDGE;
    this.wrap_t = TextureConst_1.TextureConst.WRAP_CLAMP_TO_EDGE;
    this.wrap_r = TextureConst_1.TextureConst.WRAP_CLAMP_TO_EDGE;
    this.mipmapEnabled = false;
    this.flipY = false;
    this.premultiplyAlpha = false;
    /**
     * the value contains (1,2,4,8)
     */

    this.unpackAlignment = 4;
    this.minFilter = TextureConst_1.TextureConst.LINEAR_MIPMAP_LINEAR; // webgl1环境下,这个参数值为LINEAR会报错:
    // [.WebGL-0BC70EE8]RENDER WARNING: texture bound to texture unit 1 is not renderable. It maybe non-power-of-2 and have incompatible texture filtering.

    this.magFilter = TextureConst_1.TextureConst.LINEAR; // 用于记录自身变换的版本号，例如数据变换

    this.version = 0;
    this.m_slot = TextureResSlot_1.default.GetInstance();
    this.m_uid = this.m_slot.getFreeUid();
    if (texWidth < 1) texWidth = 128;
    if (texHeight < 1) texHeight = 128;

    if (powerof2Boo) {
      this.m_texWidth = MathConst_1.default.CalcNearestCeilPow2(texWidth);
      this.m_texHeight = MathConst_1.default.CalcNearestCeilPow2(texHeight);
    } else {
      this.m_texWidth = texWidth;
      this.m_texHeight = texHeight;
    }

    this.m_slot.__$$addTexture(this);
  }
  /**
   * This function only be be called by the renderer inner system.
   */


  __$$use(resTex) {
    resTex.bindToGpu(this.getResUid());
  }

  __$setRenderProxy(rc) {
    if (this.m_slot != null) {
      this.m_renderProxy = rc;
    } else {
      // 这样处理可能有错误
      this.m_slot = TextureResSlot_1.default.GetInstance();
      this.m_uid = this.m_slot.getFreeUid();

      this.m_slot.__$$addTexture(this);

      this.m_renderProxy = rc;
    }
  }
  /**
   * 被引用计数加一
   */


  __$attachThis() {
    if (this.m_attachCount == -1) {
      this.m_slot.removeFreeUid(this.getUid());
      this.m_attachCount = 0;
    }

    ++this.m_attachCount; //console.log("TextureProxy::__$attachThis() this(uid="+this.getUid()+").attachCount: "+this.m_attachCount);
  }
  /**
   * 被引用计数减一
   */


  __$detachThis() {
    if (this.m_attachCount > 0) {
      --this.m_attachCount; //console.log("TextureProxy::__$detachThis() this(uid="+this.getUid()+").attachCount: "+this.m_attachCount);

      if (this.m_attachCount < 1) {
        this.m_attachCount = -1;
        this.m_slot.addFreeUid(this.getUid()); //console.log("TextureProxy::__$detachThis() this.m_attachCount value is 0.");
      }
    }
  }
  /**
   * @returns 获得引用计数值
   */


  getAttachCount() {
    return this.m_attachCount;
  }
  /**
   * @returns 返回true, 表示当前纹理对象是渲染直接使用其对应的显存资源的对象
   *          返回false, 表示不能直接使用对应的显存资源
   */


  isDirect() {
    return true;
  }
  /**
   * @returns 返回自己的纹理类型(value: TextureProxyType)
   */


  getType() {
    return this.m_type;
  }
  /**
   * @returns 返回自己的 纹理资源 unique id, 这个id会被对应的资源管理器使用, 此方法子类可以依据需求覆盖
   */


  getResUid() {
    return this.m_uid;
  }
  /**
   * @returns 返回自己的 unique id, 此方法不允许子类覆盖
   */


  getUid() {
    return this.m_uid;
  }

  setWrap(wrap) {
    this.wrap_s = this.wrap_t = this.wrap_r = wrap;
  }
  /**
   * 注意，这个返回值在多 renderer instance的时候，如果renderer instance 共享了这个texture，则此返回值和TextureSlot相关
   * @returns the texture gpu resource is enabled or not.
   */


  isGpuEnabled() {
    return this.m_renderProxy != null && this.m_renderProxy.Texture.hasResUid(this.getResUid());
  }
  /**
   * @returns The fragment processor texture sampler type.
   */


  getSampler() {
    return this.m_sampler;
  }
  /**
   * @returns return value is TextureConst.TEXTURE_2D or TextureConst.TEXTURE_CUBE or TextureConst.TEXTURE_3D
   */


  getTargetType() {
    return this.m_texTarget;
  } // gpu texture buf size


  getBufWidth() {
    return this.m_texBufW;
  }

  getBufHeight() {
    return this.m_texBufH;
  } // logic texture size


  getWidth() {
    return this.m_texWidth;
  }

  getHeight() {
    return this.m_texHeight;
  }
  /**
   * @returns the texture data is enough or not.
   */


  isDataEnough() {
    return this.m_haveRData;
  }

  __$buildParam(gl) {
    this.m_texBufW = this.m_texWidth;
    this.m_texBufH = this.m_texHeight; // texture wrap

    gl.texParameteri(this.m_sampler, gl.TEXTURE_WRAP_S, TextureConst_1.TextureConst.GetConst(gl, this.wrap_s));
    gl.texParameteri(this.m_sampler, gl.TEXTURE_WRAP_T, TextureConst_1.TextureConst.GetConst(gl, this.wrap_t)); // texture filter

    gl.texParameteri(this.m_sampler, gl.TEXTURE_MIN_FILTER, TextureConst_1.TextureConst.GetConst(gl, this.minFilter));
    gl.texParameteri(this.m_sampler, gl.TEXTURE_MAG_FILTER, TextureConst_1.TextureConst.GetConst(gl, this.magFilter)); //      //gl.DONT_CARE
    //      //gl.hint(gl.GENERATE_MIPMAP_HINT, gl.NICEST);
    //      //gl.hint(gl.GENERATE_MIPMAP_HINT, gl.FASTEST);

    if (this.m_texTarget == TextureConst_1.TextureTarget.TEXTURE_3D) {
      gl.texParameteri(this.m_sampler, gl.TEXTURE_WRAP_R, TextureConst_1.TextureConst.GetConst(gl, this.wrap_r));
      gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_BASE_LEVEL, 0);
      gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MAX_LEVEL, Math.log2(this.m_texWidth));
    }

    if (this.mipmapEnabled && this.m_generateMipmap) {
      gl.generateMipmap(this.m_sampler);
    }
  }

  generateMipmap(texRes) {
    if (this.mipmapEnabled && this.m_generateMipmap) {
      let gl = texRes.getRC();
      texRes.bindToGpu(this.getResUid()); //gl.generateMipmap(this.m_sampler);

      this.__$buildParam(gl);
    }
  } // sub class override


  uploadData(texRes) {} // sub class override


  __$updateToGpu(texRes) {}
  /**
   * 准备将数据更新到当前的 Gpu context,这是一个异步过程，在渲染运行时才会真正的提交给gpu
   * 这个函数由用户主动调用
   * 这个函数不能被子类覆盖
   */


  updateDataToGpu(rc = null, deferred = true) {
    if (rc != null) this.m_renderProxy = rc;

    if (this.m_renderProxy != null) {
      this.m_renderProxy.MaterialUpdater.updateTextureData(this, deferred);
    }
  }

  createTexBuf(texResource) {
    if (!texResource.hasResUid(this.getResUid())) {
      this.m_sampler = TextureConst_1.TextureTarget.GetValue(texResource.getRC(), this.m_texTarget);
      texResource.createResByParams3(this.getResUid(), this.getWidth(), this.getHeight(), this.m_sampler);
      return true;
    }

    return false;
  }
  /**
   * This function only be be called by the renderer inner system.
   * if sub class override this function, it must does call this function.
   */


  __$$upload(texRes) {
    if (this.m_haveRData && this.m_slot != null) {
      let buildStatus = this.createTexBuf(texRes); //console.log("Tex __$$upload buildStatus: ",buildStatus, ",resUid: ", this.getResUid());

      if (buildStatus) {
        this.__$updateToGpuBegin(texRes);

        this.uploadData(texRes);

        this.__$buildParam(texRes.getRC());

        this.m_generateMipmap = true;
      }
    }
  }
  /**
   * sub class can not override!!!!
   */


  dataUploadToGpu(gl, texData, texDatas, force = false) {
    this.version = 0;
    let interType = TextureConst_1.TextureFormat.ToGL(gl, this.internalFormat);
    let format = TextureConst_1.TextureFormat.ToGL(gl, this.srcFormat);
    let type = TextureConst_1.TextureDataType.ToGL(gl, this.dataType);
    let d = texData;

    if (texDatas == null) {
      if (d.status > -1 || force) d.updateToGpu(gl, this.m_sampler, interType, format, type, force);
    } else {
      let ds = texDatas;

      for (let i = 0, len = ds.length; i < len; ++i) {
        d = ds[i];

        if (d != null) {
          if (d.status > -1 || force) d.updateToGpu(gl, this.m_sampler, interType, format, type, force);
        }
      }

      this.m_generateMipmap = false;
    }
  }

  __$updateToGpuBegin(texRes) {
    let gl = texRes.getRC();
    texRes.bindToGpu(this.getResUid());
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, this.unpackAlignment);
  }

  __$updateToGpuEnd(gl) {}
  /**
   * @returns This textureProxy instance has been destroyed.
   */


  isDestroyed() {
    return this.m_attachCount < -1;
  }

  __$destroy() {
    if (this.getAttachCount() < 1) {
      this.m_attachCount = -2;
      this.m_haveRData = false;
      this.m_texWidth = 1;
      this.m_texHeight = 1;
      this.m_renderProxy = null; //console.log("TextureProxy::destroy(), destroy a textureProxy instance(uid="+this.getUid()+")...");
    }
  }
  /**
   * 移除之后则不能再正常使用了
   */


  __$$removeFromSlot() {
    if (this.m_slot != null && this.getAttachCount() == -2) {
      // this.m_slot.__$$removeTexture(this);
      // this.m_slot 不能随便等于null,因为当前textureProxy实例还会通过this.m_slot来重复使用
      // 如果 this.m_slot 要等于 null, 则这个textureProxy实例及其uid需要回收
      console.log("TextureProxy::RemoveFromSlot(), destroy a textureProxy instance(uid=" + this.getUid() + ")...");
      this.m_slot = null;
      this.m_renderProxy = null;
      this.m_uid = -1;
    }
  }

  toString() {
    return "[TextureProxy(name:" + this.name + ",uid=" + this.getUid() + ",width=" + this.getWidth() + ",height=" + this.getHeight() + ")]";
  }

}

exports.TextureProxy = TextureProxy;
exports.default = TextureProxy;

/***/ }),

/***/ "0929":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/
// 只是用transform 和一个 ROTransform 一一对应, 只是记录transform的最终形态

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const MathConst_1 = __importDefault(__webpack_require__("6e01"));

const Matrix4Pool_1 = __importDefault(__webpack_require__("2139"));

const ROTransPool_1 = __importDefault(__webpack_require__("9156"));

class ROTransform {
  constructor() {
    this.m_uid = 0;
    this.m_fs32 = new Float32Array(16); // It is a flag that need inverted mat yes or no

    this.m_invMatEnabled = false;
    this.m_rotFlag = false;
    this.updatedStatus = ROTransform.UPDATE_POSITION;
    this.updateStatus = ROTransform.UPDATE_TRANSFORM; // local to world spcae matrix

    this.m_omat = null;
    this.m_localMat = null;
    this.m_parentMat = null;
    this.m_toParentMat = null;
    this.m_toParentMatFlag = true; // word to local matrix

    this.m_invOmat = null;
    this.m_uid = ROTransform.s_uid++;
  }

  getUid() {
    return this.m_uid;
  }

  getX() {
    return this.m_fs32[12];
  }

  getY() {
    return this.m_fs32[13];
  }

  getZ() {
    return this.m_fs32[14];
  }

  setX(p) {
    this.updateStatus |= 1;
    this.updatedStatus |= 1;
    this.m_fs32[12] = p;
  }

  setY(p) {
    this.updateStatus |= 1;
    this.updatedStatus |= 1;
    this.m_fs32[13] = p;
  }

  setZ(p) {
    this.updateStatus |= 1;
    this.updatedStatus |= 1;
    this.m_fs32[14] = p;
  }

  setXYZ(px, py, pz) {
    this.m_fs32[12] = px;
    this.m_fs32[13] = py;
    this.m_fs32[14] = pz;
    this.updateStatus |= 1;
    this.updatedStatus |= 1;
  }

  offsetPosition(pv) {
    this.m_fs32[12] += pv.x;
    this.m_fs32[13] += pv.y;
    this.m_fs32[14] += pv.z;
    this.updateStatus |= 1;
    this.updatedStatus |= 1;
  }

  setPosition(pv) {
    this.m_fs32[12] = pv.x;
    this.m_fs32[13] = pv.y;
    this.m_fs32[14] = pv.z;
    this.updateStatus |= 1;
    this.updatedStatus |= 1;
  }

  getPosition(pv) {
    pv.x = this.m_fs32[12];
    pv.y = this.m_fs32[13];
    pv.z = this.m_fs32[14];
  }

  copyPositionFrom(t) {
    if (t != null) {
      this.m_fs32[12] = t.m_fs32[12];
      this.m_fs32[13] = t.m_fs32[13];
      this.m_fs32[14] = t.m_fs32[14];
      this.updateStatus |= ROTransform.UPDATE_POSITION;
      this.updatedStatus |= ROTransform.UPDATE_POSITION;
    }
  }

  getRotationX() {
    return this.m_fs32[1];
  }

  getRotationY() {
    return this.m_fs32[6];
  }

  getRotationZ() {
    return this.m_fs32[9];
  }

  setRotationX(degrees) {
    this.m_fs32[1] = degrees;
    this.m_rotFlag = true;
    this.updateStatus |= ROTransform.UPDATE_ROTATION;
    this.updatedStatus |= ROTransform.UPDATE_ROTATION;
  }

  setRotationY(degrees) {
    this.m_fs32[6] = degrees;
    this.m_rotFlag = true;
    this.updateStatus |= ROTransform.UPDATE_ROTATION;
    this.updatedStatus |= ROTransform.UPDATE_ROTATION;
  }

  setRotationZ(degrees) {
    this.m_fs32[9] = degrees;
    this.m_rotFlag = true;
    this.updateStatus |= ROTransform.UPDATE_ROTATION;
    this.updatedStatus |= ROTransform.UPDATE_ROTATION;
  }

  setRotationXYZ(rx, ry, rz) {
    this.m_fs32[1] = rx;
    this.m_fs32[6] = ry;
    this.m_fs32[9] = rz;
    this.updateStatus |= ROTransform.UPDATE_ROTATION;
    this.updatedStatus |= ROTransform.UPDATE_ROTATION;
    this.m_rotFlag = true;
  }

  getScaleX() {
    return this.m_fs32[0];
  }

  getScaleY() {
    return this.m_fs32[5];
  }

  getScaleZ() {
    return this.m_fs32[10];
  }

  setScaleX(p) {
    this.m_fs32[0] = p;
    this.updateStatus |= ROTransform.UPDATE_SCALE;
    this.updatedStatus |= ROTransform.UPDATE_SCALE;
  }

  setScaleY(p) {
    this.m_fs32[5] = p;
    this.updateStatus |= ROTransform.UPDATE_SCALE;
    this.updatedStatus |= ROTransform.UPDATE_SCALE;
  }

  setScaleZ(p) {
    this.m_fs32[10] = p;
    this.updateStatus |= ROTransform.UPDATE_SCALE;
    this.updatedStatus |= ROTransform.UPDATE_SCALE;
  }

  setScaleXYZ(sx, sy, sz) {
    this.m_fs32[0] = sx;
    this.m_fs32[5] = sy;
    this.m_fs32[10] = sz;
    this.updateStatus |= ROTransform.UPDATE_SCALE;
    this.updatedStatus |= ROTransform.UPDATE_SCALE;
  }

  setScale(s) {
    this.m_fs32[0] = s;
    this.m_fs32[5] = s;
    this.m_fs32[10] = s;
    this.updateStatus |= ROTransform.UPDATE_SCALE;
    this.updatedStatus |= ROTransform.UPDATE_SCALE;
  }

  getRotationXYZ(pv) {
    pv.x = this.m_fs32[1];
    pv.y = this.m_fs32[6];
    pv.z = this.m_fs32[9];
  }

  getScaleXYZ(pv) {
    pv.x = this.m_fs32[0];
    pv.y = this.m_fs32[5];
    pv.z = this.m_fs32[10];
  }

  localToGlobal(pv) {
    this.getMatrix().transformVectorSelf(pv);
  }

  globalToLocal(pv) {
    this.getInvMatrix().transformVectorSelf(pv);
  } // maybe need call update function


  getInvMatrix() {
    if (this.m_invOmat != null) {
      if (this.m_invMatEnabled) {
        this.m_invOmat.copyFrom(this.m_omat);
        this.m_invOmat.invert();
      }
    } else {
      this.m_invOmat = Matrix4Pool_1.default.GetMatrix();
      this.m_invOmat.copyFrom(this.m_omat);
      this.m_invOmat.invert();
    }

    this.m_invMatEnabled = false;
    return this.m_invOmat;
  }

  getLocalMatrix() {
    if (this.updateStatus > 0) {
      this.update();
    }

    return this.m_localMat;
  } // get local to world matrix, maybe need call update function


  getMatrix() {
    if (this.updateStatus > 0) {
      this.update();
    }

    return this.m_omat;
  } // get local to parent space matrix, maybe need call update function


  getToParentMatrix() {
    if (this.m_toParentMat != null) {
      //  if(this.m_toParentMatFlag)
      //  {
      //      console.log("....");
      //      this.m_toParentMat.invert();
      //  }
      return this.m_toParentMat;
    }

    return this.m_omat;
  } // local to world matrix, 使用的时候注意数据安全->防止多个显示对象拥有而出现多次修改的问题,因此此函数尽量不要用


  setParentMatrix(matrix) {
    //  console.log("sTOTransform::etParentMatrix(), this.m_parentMat != matrix: ",(this.m_parentMat != matrix),this.m_uid);
    this.m_parentMat = matrix;
    this.m_invMatEnabled = true;

    if (this.m_parentMat != null) {
      if (this.m_localMat == this.m_omat) {
        this.updateStatus = ROTransform.UPDATE_TRANSFORM;
        this.updatedStatus = this.updateStatus;
        this.m_localMat = Matrix4Pool_1.default.GetMatrix();
      } else {
        this.updateStatus |= ROTransform.UPDATE_PARENT_MAT;
        this.updatedStatus = this.updateStatus;
      }
    }
  }

  updateMatrixData(matrix) {
    if (matrix != null) {
      this.updateStatus = ROTransform.UPDATE_NONE;
      this.m_invMatEnabled = true;
      this.m_omat.copyFrom(matrix);
    }
  }

  __$setMatrix(matrix) {
    if (matrix != null) {
      this.updateStatus = ROTransform.UPDATE_NONE;
      this.m_invMatEnabled = true;

      if (this.m_localMat == this.m_omat) {
        this.m_localMat = matrix;
      }

      if (this.m_omat != null) {
        ROTransPool_1.default.RemoveTransUniform(this.m_omat);
        Matrix4Pool_1.default.RetrieveMatrix(this.m_omat);
      }

      this.m_omat = matrix;
    }
  }

  destroy() {
    // 当自身被完全移出RenderWorld之后才能执行自身的destroy
    if (this.m_invOmat != null) Matrix4Pool_1.default.RetrieveMatrix(this.m_invOmat);

    if (this.m_localMat != null) {
      if (this.m_omat == this.m_localMat) {
        ROTransPool_1.default.RemoveTransUniform(this.m_omat);
      }

      Matrix4Pool_1.default.RetrieveMatrix(this.m_localMat);
    }

    if (this.m_omat != null && this.m_omat != this.m_localMat) {
      ROTransPool_1.default.RemoveTransUniform(this.m_omat);
      Matrix4Pool_1.default.RetrieveMatrix(this.m_omat);
    }

    this.m_invOmat = null;
    this.m_localMat = null;
    this.m_omat = null;
    this.m_parentMat = null;
    this.updateStatus = ROTransform.UPDATE_TRANSFORM;
  }

  copyFrom(src) {
    this.m_fs32.set(src.m_fs32, 0);
    this.updatedStatus |= 1;
    this.updateStatus |= ROTransform.UPDATE_TRANSFORM;
    this.m_rotFlag = src.m_rotFlag;
  }

  update() {
    //console.log("ROTransform::update(), updateStatus: " + this.updateStatus);
    if (this.updateStatus > 0) {
      this.m_invMatEnabled = true;
      this.updateStatus = this.updateStatus | this.updatedStatus;

      if ((this.updateStatus & ROTransform.UPDATE_TRANSFORM) > 0) {
        this.m_localMat.getLocalFS32().set(this.m_fs32, 0);

        if (this.m_rotFlag) {
          this.m_localMat.setRotationEulerAngle(this.m_fs32[1] * MathConst_1.default.MATH_PI_OVER_180, this.m_fs32[6] * MathConst_1.default.MATH_PI_OVER_180, this.m_fs32[9] * MathConst_1.default.MATH_PI_OVER_180);
        }

        if (this.m_parentMat != null) {
          this.updateStatus = this.updateStatus | ROTransform.UPDATE_PARENT_MAT;
        }
      }

      if (this.m_omat != this.m_localMat) {
        this.m_omat.copyFrom(this.m_localMat);
      }

      if ((this.updateStatus & ROTransform.UPDATE_PARENT_MAT) == ROTransform.UPDATE_PARENT_MAT) {
        if (this.m_toParentMat != null) {
          this.m_toParentMat.copyFrom(this.m_omat);
        } else {
          this.m_toParentMat = Matrix4Pool_1.default.GetMatrix();
          this.m_toParentMat.copyFrom(this.m_omat);
        }

        this.m_toParentMatFlag = true;
        this.m_omat.append(this.m_parentMat);
      }

      this.updateStatus = ROTransform.UPDATE_NONE;
    }
  }

  getMatrixFS32() {
    return this.getMatrix().getLocalFS32();
  }

  toString() {
    return "[ROTransform(uid = " + this.m_uid + ")]";
  }

  static GetFreeId() {
    if (ROTransform.m_freeIdList.length > 0) {
      return ROTransform.m_freeIdList.pop();
    }

    return -1;
  }

  static Create(matrix = null) {
    let unit = null;
    let index = ROTransform.GetFreeId();

    if (index >= 0) {
      unit = ROTransform.m_unitList[index];
      ROTransform.m_unitFlagList[index] = ROTransform.S_FLAG_BUSY;
    } else {
      unit = new ROTransform();
      ROTransform.m_unitList.push(unit);
      ROTransform.m_unitFlagList.push(ROTransform.S_FLAG_BUSY);
      ROTransform.m_unitListLen++;
    }

    if (matrix == null) {
      unit.m_omat = Matrix4Pool_1.default.GetMatrix();
    } else {
      unit.m_omat = matrix;
    }

    unit.m_localMat = unit.m_omat;
    unit.m_fs32.set(ROTransform.s_initData, 0);
    return unit;
  }

  static Restore(pt) {
    if (pt != null && ROTransform.m_unitFlagList[pt.getUid()] == ROTransform.S_FLAG_BUSY) {
      let uid = pt.getUid();
      ROTransform.m_freeIdList.push(uid);
      ROTransform.m_unitFlagList[uid] = ROTransform.S_FLAG_FREE;
      pt.destroy();
    }
  }

}

ROTransform.s_uid = 0;
ROTransform.s_initData = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
ROTransform.UPDATE_NONE = 0;
ROTransform.UPDATE_POSITION = 1;
ROTransform.UPDATE_ROTATION = 2;
ROTransform.UPDATE_SCALE = 4;
ROTransform.UPDATE_TRANSFORM = 7;
ROTransform.UPDATE_PARENT_MAT = 8;
ROTransform.S_FLAG_BUSY = 1;
ROTransform.S_FLAG_FREE = 0;
ROTransform.m_unitFlagList = [];
ROTransform.m_unitListLen = 0;
ROTransform.m_unitList = [];
ROTransform.m_freeIdList = [];
exports.default = ROTransform;

/***/ }),

/***/ "0fc4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const MaterialResource_1 = __importDefault(__webpack_require__("9666"));

const ShaderCodeBuffer_1 = __importDefault(__webpack_require__("faa5"));

class MaterialBase {
  constructor() {
    // use rgb normalize bias enabled
    this.m_shduns = "";
    this.m_shdData = null; // tex list unique hash value

    this.__$troMid = -1;
    this.__$uniform = null;
    this.m_texList = null;
    this.m_texListLen = 0;
    this.m_texDataEnabled = false;
    this.m_attachCount = 0;
  }

  getShdUniqueName() {
    return this.m_shduns;
  }

  initializeByUniqueName(shdCode_uniqueName) {
    if (this.getShaderData() == null) {
      let shdData = MaterialResource_1.default.FindData(shdCode_uniqueName);
      if (shdData != null) this.m_shdData = shdData;
    }

    return this.getShaderData() != null;
  }

  initialize(shdCode_uniqueName, shdCode_vshdCode, shdCode_fshdCode, adaptationShaderVersion = true) {
    if (this.getShaderData() == null) {
      ShaderCodeBuffer_1.default.UseShaderBuffer(null); //trace("MaterialBase::initialize(), shdCode_uniqueName: "+shdCode_uniqueName);

      let shdData = MaterialResource_1.default.FindData(shdCode_uniqueName);

      if (null == shdData) {
        shdData = MaterialResource_1.default.CreateShdData(shdCode_uniqueName, shdCode_vshdCode, shdCode_fshdCode, adaptationShaderVersion, ShaderCodeBuffer_1.default.GetPreCompileInfo());
      }

      this.m_shduns = shdCode_uniqueName;
      this.m_shdData = shdData;
    }
  } // get a shader code buf instance, for sub class override


  getCodeBuf() {
    if (MaterialBase.s_codeBuffer != null) {
      return MaterialBase.s_codeBuffer;
    }

    MaterialBase.s_codeBuffer = new ShaderCodeBuffer_1.default();
    return MaterialBase.s_codeBuffer;
  }

  hasShaderData() {
    if (this.m_shdData != null) {
      if (this.m_shdData.haveTexture()) {
        // console.log("this.texDataEnabled(): ",this.texDataEnabled());
        if (this.texDataEnabled()) {
          return true;
        }
      } else {
        return true;
      }
    }

    return false;
  }

  initializeByCodeBuf(texEnabled = false) {
    if (this.m_shdData == null) {
      let buf = this.getCodeBuf();

      if (buf != null) {
        if (MaterialBase.s_codeBuffer == null) {
          MaterialBase.s_codeBuffer = new ShaderCodeBuffer_1.default();
        }

        ShaderCodeBuffer_1.default.UseShaderBuffer(buf); //

        MaterialBase.s_codeBuffer.initialize(texEnabled);
        let shdCode_uniqueName = MaterialBase.s_codeBuffer.getUniqueShaderName();
        this.m_shduns = shdCode_uniqueName;

        this.__$initShd(this.m_shduns);

        let shdData = MaterialResource_1.default.FindData(shdCode_uniqueName);

        if (null == shdData) {
          MaterialBase.s_codeBuffer.buildShader();
          let shdCode_fshdCode = MaterialBase.s_codeBuffer.getFragShaderCode();
          let shdCode_vshdCode = MaterialBase.s_codeBuffer.getVtxShaderCode();
          shdData = MaterialResource_1.default.CreateShdData(shdCode_uniqueName, shdCode_vshdCode, shdCode_fshdCode, buf.adaptationShaderVersion, ShaderCodeBuffer_1.default.GetPreCompileInfo());
        }

        ShaderCodeBuffer_1.default.UseShaderBuffer(null);
        this.m_shdData = shdData;
      }
    }
  }

  __$initShd(pshduns) {}

  getShaderData() {
    return this.m_shdData;
  } // @param           texList     [tex0,tex1,...]


  setTextureList(texList) {
    if (this.m_texList != texList) {
      this.m_texDataEnabled = false;

      if (texList != null) {
        this.m_texListLen = texList.length;
      } else {
        this.m_texListLen = 0;
      }

      let i = 0;

      if (this.m_texList != null) {
        for (; i < this.m_texList.length; ++i) {
          this.m_texList[i].__$detachThis();
        }
      }

      this.m_texDataEnabled = true;
      this.m_texList = texList;

      if (this.m_texList != null) {
        let key = 31;

        for (i = 0; i < this.m_texList.length; ++i) {
          key = key * 131 + this.m_texList[i].getUid();

          this.m_texList[i].__$attachThis();

          if (!this.m_texList[i].isDataEnough()) {
            this.m_texDataEnabled = false;
          }
        }

        this.__$troMid = key;
      }
    }
  }

  setTextureAt(index, tex) {
    if (index >= 0 && tex != null) {
      let texList = this.m_texList;
      let len = texList.length;

      if (texList != null && texList[index] != tex && index < len && len > 0) {
        texList = texList.slice(0);

        texList[index].__$detachThis();

        texList[index] = tex;
        this.m_texDataEnabled = tex.isDataEnough();

        tex.__$attachThis();

        let key = 31;

        for (let i = 0; i < len; ++i) {
          key = key * 131 + texList[i].getUid();
        }

        this.__$troMid = key;
        this.m_texList = texList;
      }
    }
  }

  getTextureList() {
    return this.m_texList;
  }

  getTextureAt(index) {
    return this.m_texList[index];
  }

  getTextureTotal() {
    return this.m_texListLen;
  }

  getShdTexTotal() {
    if (this.m_shdData != null) {
      return this.m_shdData.getTexTotal();
    }

    return 0;
  }

  texDataEnabled() {
    if (this.m_texList != null) {
      if (this.m_texDataEnabled) {
        return true;
      }

      let boo = true;
      let texList = this.m_texList;

      for (let i = 0; i < this.m_texListLen; ++i) {
        if (!texList[i].isDataEnough()) {
          boo = false;
          break;
        }
      }

      this.m_texDataEnabled = boo;
      return boo;
    } else {
      if (this.m_shdData != null && this.m_shdData.getTexTotal() > 0) {
        console.warn("this material texList is null, need " + this.m_shdData.getTexTotal() + " textures.");
      }
    }

    return false;
  }

  createSharedUniforms() {
    return null;
  }

  createSharedUniformsData() {
    return null;
  }

  createSelfUniformData() {
    return null;
  } //synchronism ubo data or other displayEntity data


  updateSelfData(ro) {}

  hasTexture() {
    return this.m_shdData.haveTexture();
  }

  getBufSortFormat() {
    //trace("null != m_shdData: "+(null != m_shdData));
    if (null != this.m_shdData) {
      return this.m_shdData.getLayoutBit();
    }

    return 0x0;
  }

  __$attachThis() {
    ++this.m_attachCount; //console.log("MaterialBase::__$attachThis() this.m_attachCount: "+this.m_attachCount);
  }

  __$detachThis() {
    --this.m_attachCount; //console.log("MaterialBase::__$detachThis() this.m_attachCount: "+this.m_attachCount);

    if (this.m_attachCount < 1) {
      this.m_attachCount = 0;
    }
  }

  getAttachCount() {
    return this.m_attachCount;
  }

  destroy() {
    if (this.getAttachCount() < 1) {
      if (this.m_texList != null) {
        for (let i = 0; i < this.m_texList.length; ++i) {
          this.m_texList[i].__$detachThis();
        }
      }

      this.m_shdData = null;
      this.m_texList = null;
      this.m_texDataEnabled = false;
      this.__$troMid = 0;

      if (this.__$uniform != null) {
        this.__$uniform.destroy();

        this.__$uniform = null;
      }
    }
  }

  toString() {
    return "[MaterialBase()]";
  }

}

MaterialBase.s_codeBuffer = null;
exports.default = MaterialBase;

/***/ }),

/***/ "11e6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

class RSEntityFlag {
  static AddContainerFlag(flag) {
    //return flag | RSEntityFlag.CONTAINER_FLAG;
    return flag | 0x80000000;
  }

  static RemoveContainerFlag(flag) {
    //return flag & RSEntityFlag.CONTAINER_NOT_FLAG;
    return flag & -0x80000001;
  }

  static AddSpaceUid(flag, rawUid) {
    return flag & -0x100000 | rawUid;
  }

  static RemoveSpaceUid(flag) {
    //return flag & RSEntityFlag.SPACE_NOT_FLAT;
    return flag & -0x100000;
  }

  static GetSpaceUid(flag) {
    //return flag & RSEntityFlag.SPACE_FLAT;
    return flag & 0xFFFFF;
  }

  static AddRendererUid(flag, rawUid) {
    return flag & -0x7f00001 | rawUid << 20;
  }

  static RemoveRendererUid(flag) {
    //return flag | RSEntityFlag.RENDERER_UID_FLAT;
    return flag | 0x7F00000;
  }

  static GetRendererUid(flag) {
    //return (flag & RSEntityFlag.RENDERER_UID_FLAT)>>20;
    return (flag & 0x7F00000) >> 20;
  }

  static AddSortEnabled(flag) {
    //return flag | RSEntityFlag.SORT_FLAT;
    return flag | 0x40000000;
  }

  static RemoveSortEnabled(flag) {
    //return flag & RSEntityFlag.SORT_NOT_FLAT;
    return flag & -0x40000001;
  }

  static TestSortEnabled(flag) {
    //return (flag & RSEntityFlag.SORT_FLAT) == RSEntityFlag.SORT_FLAT;
    return (flag & 0x40000000) == 0x40000000;
  }

  static AddRendererLoad(flag) {
    //return flag | RSEntityFlag.RENDERER_LOAD_FLAT;
    return flag | 0x30000000;
  }

  static RemoveRendererLoad(flag) {
    //return flag & RSEntityFlag.RENDERER_LOAD_NOT_FLAT;
    return flag & -0x30000001;
  }

  static TestSpaceContains(flag) {
    return (0xFFFFF & flag) > 0;
  }

  static TestSpaceEnabled(flag) {
    return (0xFFFFF & flag) < 1;
  }

  static TestSpaceEnabled2(flag) {
    return (0xFFFFF & flag) < 1 && (0x80000000 & flag) != 0x80000000;
  }

  static TestContainerEnabled(flag) {
    //return (RSEntityFlag.RENDERER_UID_FLAT & flag) == RSEntityFlag.RENDERER_UID_FLAT && (RSEntityFlag.CONTAINER_FLAG & flag) != RSEntityFlag.CONTAINER_FLAG;
    return (0x7F00000 & flag) == 0x7F00000 && (0x80000000 & flag) != 0x80000000;
  }

  static TestRendererEnabled(flag) {
    //return (RSEntityFlag.RENDERER_ADN_LOAD_FLAT & flag) == RSEntityFlag.RENDERER_UID_FLAT && (RSEntityFlag.CONTAINER_FLAG & flag) != RSEntityFlag.CONTAINER_FLAG;
    return (0x37F00000 & flag) == 0x7F00000 && (0x80000000 & flag) != 0x80000000;
  }

}

RSEntityFlag.DEFAULT = 0x7f00000; // 第27位存放是否在container里面
// 在 container 内

RSEntityFlag.CONTAINER_FLAG = 0x80000000; // (1<<27)
// 没在 container 内

RSEntityFlag.CONTAINER_NOT_FLAG = -0x80000001; //~(0x80000000), ~(1<<27)
// 第0位到第19位总共20位存放自身在space中的 index id(1 到 1048575(0xFFFFF), 但是不会包含0xFFFFF)

RSEntityFlag.SPACE_FLAT = 0xFFFFF;
RSEntityFlag.SPACE_NOT_FLAT = -0x100000; // ~0xFFFFF;
// 第20位开始到26位为总共7位止存放在renderer中的状态数据(renderer unique id and others),
// 最多可以支持同时构建64个renderer instance

RSEntityFlag.RENDERER_UID_FLAT = 0x7F00000; // (1<<20 | 1<<21 | 1<<22 | 1<<23 | 1<<24 | 1<<25 | 1<<26);

RSEntityFlag.RENDERER_UID_NOT_FLAT = -0x7f00001; // ~0x7F00000;
//0x40000000
// 第30位存放 是否渲染运行时排序(rendering sort enabled) 的相关信息

RSEntityFlag.SORT_FLAT = 0x40000000; // (1<<30);

RSEntityFlag.SORT_NOT_FLAT = -0x40000001; // ~0x40000000;
// 第28位开始到29位总共2位存放renderer 载入状态 的相关信息

RSEntityFlag.RENDERER_LOAD_FLAT = 0x30000000; // (1<<28 | 1<<29);

RSEntityFlag.RENDERER_LOAD_NOT_FLAT = -0x30000001; // ~0x30000000;

RSEntityFlag.RENDERER_ADN_LOAD_FLAT = 0x37F00000; // 0x7f00000 | 0x30000000;

exports.default = RSEntityFlag;

/***/ }),

/***/ "1710":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/
// mouse or touch event

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const EventBase_1 = __importDefault(__webpack_require__("a996"));

class MouseEvent extends EventBase_1.default {
  constructor() {
    super(); // phase is event flow phase: 0(none phase),1(capture phase),2(bubble phase)

    this.phase = 0; // 事件类型

    this.type = 0; //MouseEvent.MOUSE_DOWN;
    // 事件发送者

    this.target = null; // 物体空间坐标

    this.lpos = new Vector3D_1.default(); // 世界坐标

    this.wpos = new Vector3D_1.default(); // 射线参数方向参数

    this.raytv = new Vector3D_1.default(1.0, 0.0, 0.0); // 射线发射起点参数

    this.raypv = new Vector3D_1.default(0.0, 0.0, 0.0); // 屏幕空间鼠标坐标,和gpu空间对齐

    this.mouseX = 0.0;
    this.mouseY = 0.0; // 屏幕空间页面鼠标坐标

    this.mouseViewX = 0.0;
    this.mouseViewY = 0.0; // 例如多点触摸的时候就会有这个数据

    this.posArray = null; // 鼠标滚轮速度

    this.wheelDeltaY = 0;
  }

  static GetMouseEvtTypeValueBase() {
    return 5001;
  }

  static GetMouseEvtTypeValuesTotal() {
    return 17;
  } //classType:number = 1001;


  getClassType() {
    return MouseEvent.EventClassType;
  }

  toString() {
    return "[MouseEvent]";
  }

}

MouseEvent.EventClassType = 1002;
MouseEvent.MOUSE_DOWN = 5001;
MouseEvent.MOUSE_UP = 5002;
MouseEvent.MOUSE_RIGHT_UP = 5003;
MouseEvent.MOUSE_RIGHT_DOWN = 5004;
MouseEvent.MOUSE_MOVE = 5005;
MouseEvent.MOUSE_WHEEL = 5006;
MouseEvent.MOUSE_OVER = 5007;
MouseEvent.MOUSE_OUT = 5008;
MouseEvent.MOUSE_CLICK = 5009;
MouseEvent.MOUSE_RIGHT_CLICK = 5010;
MouseEvent.MOUSE_DOUBLE_CLICK = 5011;
MouseEvent.MOUSE_CANCEL = 5012;
MouseEvent.MOUSE_MULTI_DOWN = 5013;
MouseEvent.MOUSE_MULTI_UP = 5014;
MouseEvent.MOUSE_MULTI_MOVE = 5015;
MouseEvent.MOUSE_BG_DOWN = 5016; //  mouse down do not hit any 3d object, only in stage

MouseEvent.MOUSE_BG_UP = 5017; //  mouse up do not hit any 3d object, only in stage

exports.default = MouseEvent;

/***/ }),

/***/ "18c7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const MathConst_1 = __importDefault(__webpack_require__("6e01"));

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const OrientationType_1 = __importDefault(__webpack_require__("abdb"));

class Matrix4 {
  constructor(pfs32 = null, index = 0) {
    this.m_uid = -1;
    this.m_index = 0;
    this.m_fs32 = null;
    this.m_localFS32 = null;
    this.m_index = index;

    if (pfs32 != null) {
      this.m_uid = Matrix4.s_uid++;
      this.m_fs32 = pfs32;
      this.m_localFS32 = this.m_fs32.subarray(index, index + 16);
    } else {
      this.m_uid = Matrix4.s_isolatedUid++;
      this.m_fs32 = new Float32Array(16);
      this.m_fs32.set(Matrix4.s_InitData, 0);
      this.m_localFS32 = this.m_fs32;
    }
  }

  setData(data) {
    if (data.length == 16) {
      this.m_localFS32.set(data);
    }
  }

  getCapacity() {
    return 16;
  }

  GetMaxUid() {
    return Matrix4.s_uid;
  }

  getUid() {
    return this.m_uid;
  }

  getLocalFS32() {
    return this.m_localFS32;
  }

  getFS32() {
    return this.m_fs32;
  }

  getFSIndex() {
    return this.m_index;
  }

  identity() {
    this.m_localFS32.set(Matrix4.s_InitData, 0);
  }

  determinant() {
    return (this.m_localFS32[0] * this.m_localFS32[5] - this.m_localFS32[4] * this.m_localFS32[1]) * (this.m_localFS32[10] * this.m_localFS32[15] - this.m_localFS32[14] * this.m_localFS32[11]) - (this.m_localFS32[0] * this.m_localFS32[9] - this.m_localFS32[8] * this.m_localFS32[1]) * (this.m_localFS32[6] * this.m_localFS32[15] - this.m_localFS32[14] * this.m_localFS32[7]) + (this.m_localFS32[0] * this.m_localFS32[13] - this.m_localFS32[12] * this.m_localFS32[1]) * (this.m_localFS32[6] * this.m_localFS32[11] - this.m_localFS32[10] * this.m_localFS32[7]) + (this.m_localFS32[4] * this.m_localFS32[9] - this.m_localFS32[8] * this.m_localFS32[5]) * (this.m_localFS32[2] * this.m_localFS32[15] - this.m_localFS32[14] * this.m_localFS32[3]) - (this.m_localFS32[4] * this.m_localFS32[13] - this.m_localFS32[12] * this.m_localFS32[5]) * (this.m_localFS32[2] * this.m_localFS32[11] - this.m_localFS32[10] * this.m_localFS32[3]) + (this.m_localFS32[8] * this.m_localFS32[13] - this.m_localFS32[12] * this.m_localFS32[9]) * (this.m_localFS32[2] * this.m_localFS32[7] - this.m_localFS32[6] * this.m_localFS32[3]);
  }

  append(lhs) {
    let lfs32 = lhs.getLocalFS32();
    let sfs32 = this.m_localFS32;
    let m111 = sfs32[0];
    let m121 = sfs32[4];
    let m131 = sfs32[8];
    let m141 = sfs32[12];
    let m112 = sfs32[1];
    let m122 = sfs32[5];
    let m132 = sfs32[9];
    let m142 = sfs32[13];
    let m113 = sfs32[2];
    let m123 = sfs32[6];
    let m133 = sfs32[10];
    let m143 = sfs32[14];
    let m114 = sfs32[3];
    let m124 = sfs32[7];
    let m134 = sfs32[11];
    let m144 = sfs32[15];
    let m211 = lfs32[0];
    let m221 = lfs32[4];
    let m231 = lfs32[8];
    let m241 = lfs32[12];
    let m212 = lfs32[1];
    let m222 = lfs32[5];
    let m232 = lfs32[9];
    let m242 = lfs32[13];
    let m213 = lfs32[2];
    let m223 = lfs32[6];
    let m233 = lfs32[10];
    let m243 = lfs32[14];
    let m214 = lfs32[3];
    let m224 = lfs32[7];
    let m234 = lfs32[11];
    let m244 = lfs32[15];
    sfs32[0] = m111 * m211 + m112 * m221 + m113 * m231 + m114 * m241;
    sfs32[1] = m111 * m212 + m112 * m222 + m113 * m232 + m114 * m242;
    sfs32[2] = m111 * m213 + m112 * m223 + m113 * m233 + m114 * m243;
    sfs32[3] = m111 * m214 + m112 * m224 + m113 * m234 + m114 * m244;
    sfs32[4] = m121 * m211 + m122 * m221 + m123 * m231 + m124 * m241;
    sfs32[5] = m121 * m212 + m122 * m222 + m123 * m232 + m124 * m242;
    sfs32[6] = m121 * m213 + m122 * m223 + m123 * m233 + m124 * m243;
    sfs32[7] = m121 * m214 + m122 * m224 + m123 * m234 + m124 * m244;
    sfs32[8] = m131 * m211 + m132 * m221 + m133 * m231 + m134 * m241;
    sfs32[9] = m131 * m212 + m132 * m222 + m133 * m232 + m134 * m242;
    sfs32[10] = m131 * m213 + m132 * m223 + m133 * m233 + m134 * m243;
    sfs32[11] = m131 * m214 + m132 * m224 + m133 * m234 + m134 * m244;
    sfs32[12] = m141 * m211 + m142 * m221 + m143 * m231 + m144 * m241;
    sfs32[13] = m141 * m212 + m142 * m222 + m143 * m232 + m144 * m242;
    sfs32[14] = m141 * m213 + m142 * m223 + m143 * m233 + m144 * m243;
    sfs32[15] = m141 * m214 + m142 * m224 + m143 * m234 + m144 * m244;
  }

  append3x3(lhs) {
    let lfs32 = lhs.getLocalFS32();
    let sfs32 = this.m_localFS32;
    let m111 = sfs32[0];
    let m121 = sfs32[4];
    let m131 = sfs32[8];
    let m112 = sfs32[1];
    let m122 = sfs32[5];
    let m132 = sfs32[9];
    let m113 = sfs32[2];
    let m123 = sfs32[6];
    let m133 = sfs32[10];
    let m211 = lfs32[0];
    let m221 = lfs32[4];
    let m231 = lfs32[8];
    let m212 = lfs32[1];
    let m222 = lfs32[5];
    let m232 = lfs32[9];
    let m213 = lfs32[2];
    let m223 = lfs32[6];
    let m233 = lfs32[10];
    sfs32[0] = m111 * m211 + m112 * m221 + m113 * m231;
    sfs32[1] = m111 * m212 + m112 * m222 + m113 * m232;
    sfs32[2] = m111 * m213 + m112 * m223 + m113 * m233;
    sfs32[4] = m121 * m211 + m122 * m221 + m123 * m231;
    sfs32[5] = m121 * m212 + m122 * m222 + m123 * m232;
    sfs32[6] = m121 * m213 + m122 * m223 + m123 * m233;
    sfs32[8] = m131 * m211 + m132 * m221 + m133 * m231;
    sfs32[9] = m131 * m212 + m132 * m222 + m133 * m232;
    sfs32[10] = m131 * m213 + m132 * m223 + m133 * m233;
  }

  appendRotationPivot(radian, axis, pivotPoint = null) {
    if (pivotPoint == null) {
      pivotPoint = Vector3D_1.default.Z_AXIS;
    }

    Matrix4.s_tMat4.identity();
    Matrix4.s_tMat4.getAxisRotation(axis.x, axis.y, axis.z, radian);
    Matrix4.s_tMat4.appendTranslationXYZ(pivotPoint.x, pivotPoint.y, pivotPoint.z);
    this.append(Matrix4.s_tMat4);
  }

  appendRotation(radian, axis) {
    Matrix4.s_tMat4.identity();
    Matrix4.s_tMat4.getAxisRotation(axis.x, axis.y, axis.z, radian);
    this.append(Matrix4.s_tMat4);
  }

  appendRotationX(radian) {
    Matrix4.s_tMat4.rotationX(radian);
    this.append3x3(Matrix4.s_tMat4);
  }

  appendRotationY(radian) {
    Matrix4.s_tMat4.rotationY(radian);
    this.append3x3(Matrix4.s_tMat4);
  }

  appendRotationZ(radian) {
    Matrix4.s_tMat4.rotationZ(radian);
    this.append3x3(Matrix4.s_tMat4);
  } // 用欧拉角形式旋转(heading->pitch->bank) => (y->x->z)


  appendRotationEulerAngle(radianX, radianY, radianZ) {
    Matrix4.s_tMat4.rotationY(radianY);
    this.append3x3(Matrix4.s_tMat4);
    Matrix4.s_tMat4.rotationX(radianX);
    this.append3x3(Matrix4.s_tMat4);
    Matrix4.s_tMat4.rotationZ(radianZ);
    this.append3x3(Matrix4.s_tMat4);
  }

  setScaleXYZ(xScale, yScale, zScale) {
    let sfs32 = this.m_localFS32;
    sfs32[0] = xScale;
    sfs32[5] = yScale;
    sfs32[10] = zScale;
  }

  setRotationEulerAngle(radianX, radianY, radianZ) {
    let sfs32 = this.m_localFS32; //let sx:number = sfs32[0];
    //let sy:number = sfs32[5];
    //let sz:number = sfs32[10];

    let cosX = Math.cos(radianX);
    let sinX = Math.sin(radianX);
    let cosY = Math.cos(radianY);
    let sinY = Math.sin(radianY);
    let cosZ = Math.cos(radianZ);
    let sinZ = Math.sin(radianZ);
    let cosZsinY = cosZ * sinY;
    let sinZsinY = sinZ * sinY;
    let cosYscaleX = cosY * sfs32[0];
    let sinXscaleY = sinX * sfs32[5];
    let cosXscaleY = cosX * sfs32[5];
    let cosXscaleZ = cosX * sfs32[10];
    let sinXscaleZ = sinX * sfs32[10];
    sfs32[1] = sinZ * cosYscaleX;
    sfs32[2] = -sinY * sfs32[0];
    sfs32[0] = cosZ * cosYscaleX;
    sfs32[4] = cosZsinY * sinXscaleY - sinZ * cosXscaleY;
    sfs32[8] = cosZsinY * cosXscaleZ + sinZ * sinXscaleZ;
    sfs32[5] = sinZsinY * sinXscaleY + cosZ * cosXscaleY;
    sfs32[9] = sinZsinY * cosXscaleZ - cosZ * sinXscaleZ;
    sfs32[6] = cosY * sinXscaleY;
    sfs32[10] = cosY * cosXscaleZ;
  }

  setRotationEulerAngle2(cosX, sinX, cosY, sinY, cosZ, sinZ) {
    let sfs32 = this.m_localFS32; //let sx:number = sfs32[0];
    //let sy:number = sfs32[5];
    //let sz:number = sfs32[10];
    //	let cosX: number = Math.cos(radianX);
    //	let sinX:number = Math.sin(radianX);
    //	let cosY:number = Math.cos(radianY);
    //	let sinY:number = Math.sin(radianY);
    //	let cosZ:number = Math.cos(radianZ);
    //	let sinZ:number = Math.sin(radianZ);

    let cosZsinY = cosZ * sinY;
    let sinZsinY = sinZ * sinY;
    let cosYscaleX = cosY * sfs32[0];
    let sinXscaleY = sinX * sfs32[5];
    let cosXscaleY = cosX * sfs32[5];
    let cosXscaleZ = cosX * sfs32[10];
    let sinXscaleZ = sinX * sfs32[10];
    sfs32[1] = sinZ * cosYscaleX;
    sfs32[2] = -sinY * sfs32[0];
    sfs32[0] = cosZ * cosYscaleX;
    sfs32[4] = cosZsinY * sinXscaleY - sinZ * cosXscaleY;
    sfs32[8] = cosZsinY * cosXscaleZ + sinZ * sinXscaleZ;
    sfs32[5] = sinZsinY * sinXscaleY + cosZ * cosXscaleY;
    sfs32[9] = sinZsinY * cosXscaleZ - cosZ * sinXscaleZ;
    sfs32[6] = cosY * sinXscaleY;
    sfs32[10] = cosY * cosXscaleZ;
  }

  setTranslationXYZ(px, py, pz) {
    this.m_localFS32[12] = px;
    this.m_localFS32[13] = py;
    this.m_localFS32[14] = pz;
  }

  setTranslation(v3) {
    this.m_localFS32[12] = v3.x;
    this.m_localFS32[13] = v3.y;
    this.m_localFS32[14] = v3.z;
  }

  appendScaleXYZ(xScale, yScale, zScale) {
    let sfs32 = this.m_localFS32;
    sfs32[0] *= xScale;
    sfs32[1] *= xScale;
    sfs32[2] *= xScale;
    sfs32[3] *= xScale;
    sfs32[4] *= yScale;
    sfs32[5] *= yScale;
    sfs32[6] *= yScale;
    sfs32[7] *= yScale;
    sfs32[8] *= zScale;
    sfs32[9] *= zScale;
    sfs32[10] *= zScale;
    sfs32[11] *= zScale;
  }

  appendScaleXY(xScale, yScale) {
    this.m_localFS32[0] *= xScale;
    this.m_localFS32[1] *= xScale;
    this.m_localFS32[2] *= xScale;
    this.m_localFS32[3] *= xScale;
    this.m_localFS32[4] *= yScale;
    this.m_localFS32[5] *= yScale;
    this.m_localFS32[6] *= yScale;
    this.m_localFS32[7] *= yScale;
  }

  appendTranslationXYZ(px, py, pz) {
    this.m_localFS32[12] += px;
    this.m_localFS32[13] += py;
    this.m_localFS32[14] += pz;
  }

  appendTranslation(v3) {
    this.m_localFS32[12] += v3.x;
    this.m_localFS32[13] += v3.y;
    this.m_localFS32[14] += v3.z;
  }

  copyColumnFrom(column_index, v3) {
    switch (column_index) {
      case 0:
        {
          this.m_localFS32[0] = v3.x;
          this.m_localFS32[1] = v3.y;
          this.m_localFS32[2] = v3.z;
          this.m_localFS32[3] = v3.w;
        }
        break;

      case 1:
        {
          this.m_localFS32[4] = v3.x;
          this.m_localFS32[5] = v3.y;
          this.m_localFS32[6] = v3.z;
          this.m_localFS32[7] = v3.w;
        }
        break;

      case 2:
        {
          this.m_localFS32[8] = v3.x;
          this.m_localFS32[9] = v3.y;
          this.m_localFS32[10] = v3.z;
          this.m_localFS32[11] = v3.w;
        }
        break;

      case 3:
        {
          this.m_localFS32[12] = v3.x;
          this.m_localFS32[13] = v3.y;
          this.m_localFS32[14] = v3.z;
          this.m_localFS32[15] = v3.w;
        }
        break;

      default:
        break;
    }
  }

  copyColumnTo(column_index, v3) {
    column_index <<= 2;
    v3.x = this.m_localFS32[column_index];
    v3.y = this.m_localFS32[1 + column_index];
    v3.z = this.m_localFS32[2 + column_index];
    v3.w = this.m_localFS32[3 + column_index];
  }

  setF32ArrAndIndex(fs32Arr, index = 0) {
    if (fs32Arr != null && index >= 0) {
      this.m_fs32 = fs32Arr;
      this.m_index = index;
      this.m_localFS32 = this.m_fs32.subarray(index, index + 16);
    }
  }

  setF32ArrIndex(index = 0) {
    if (index >= 0) {
      this.m_index = index;
      this.m_localFS32 = this.m_fs32.subarray(index, index + 16);
    }
  }

  setF32Arr(fs32Arr) {
    if (fs32Arr != null) {
      this.m_fs32 = fs32Arr;
    }
  }

  copyFromF32Arr(fs32Arr, index = 0) {
    //let subArr:Float32Array = fs32Arr.subarray(index, index + 16);
    //this.m_localFS32.set(fs32Arr.subarray(index, index + 16), 0);
    let i = 0;

    for (let end = index + 16; index < end; index++) {
      this.m_localFS32[i] = fs32Arr[index];
      ++i;
    }
  }

  copyToF32Arr(fs32Arr, index = 0) {
    fs32Arr.set(this.m_localFS32, index);
  }

  copyFrom(smat) {
    this.m_localFS32.set(smat.m_localFS32, 0);
  }

  copyTo(dmat) {
    //dmat.copyFrom(this);
    dmat.m_localFS32.set(this.m_localFS32, 0);
  }

  copyRawDataFrom(float_rawDataArr, rawDataLength = 16, index = 0, bool_tp = false) {
    if (bool_tp) this.transpose();
    rawDataLength = rawDataLength - index;
    let c = 0;

    while (c < rawDataLength) {
      this.m_fs32[this.m_index + c] = float_rawDataArr[c + index];
      ++c;
    }

    if (bool_tp) this.transpose();
  }

  copyRawDataTo(float_rawDataArr, rawDataLength = 16, index = 0, bool_tp = false) {
    if (bool_tp) this.transpose();
    let c = 0;

    while (c < rawDataLength) {
      float_rawDataArr[c + index] = this.m_fs32[this.m_index + c];
      ++c;
    }

    if (bool_tp) this.transpose();
  }

  copyRowFrom(row_index, v3) {
    switch (row_index) {
      case 0:
        {
          this.m_localFS32[0] = v3.x;
          this.m_localFS32[4] = v3.y;
          this.m_localFS32[8] = v3.z;
          this.m_localFS32[12] = v3.w;
        }
        break;

      case 1:
        {
          this.m_localFS32[1] = v3.x;
          this.m_localFS32[5] = v3.y;
          this.m_localFS32[9] = v3.z;
          this.m_localFS32[13] = v3.w;
        }
        break;

      case 2:
        {
          this.m_localFS32[2] = v3.x;
          this.m_localFS32[6] = v3.y;
          this.m_localFS32[10] = v3.z;
          this.m_localFS32[14] = v3.w;
        }
        break;

      case 3:
        {
          this.m_localFS32[3] = v3.x;
          this.m_localFS32[7] = v3.y;
          this.m_localFS32[11] = v3.z;
          this.m_localFS32[15] = v3.w;
        }
        break;

      default:
        break;
    }
  }

  copyRowTo(row_index, v3) {
    v3.x = this.m_localFS32[row_index];
    v3.y = this.m_localFS32[4 + row_index];
    v3.z = this.m_localFS32[8 + row_index];
    v3.w = this.m_localFS32[12 + row_index];
  }

  decompose(orientationStyle) {
    // TODO: optimize after 4 lines
    let vec = [];
    let mr = Matrix4.s_tMat4;
    let mrfs32 = mr.getFS32(); //let mrfsI = mr.getFSIndex();
    //std::memcpy(&mr, m_rawData, m_rawDataSize);

    mr.copyFrom(this); ///*

    let pos = new Vector3D_1.default(mrfs32[12], mrfs32[13], mrfs32[14]);
    let scale = new Vector3D_1.default();
    scale.x = Math.sqrt(mrfs32[0] * mrfs32[0] + mrfs32[1] * mrfs32[1] + mrfs32[2] * mrfs32[2]);
    scale.y = Math.sqrt(mrfs32[4] * mrfs32[4] + mrfs32[5] * mrfs32[5] + mrfs32[6] * mrfs32[6]);
    scale.z = Math.sqrt(mrfs32[8] * mrfs32[8] + mrfs32[9] * mrfs32[9] + mrfs32[10] * mrfs32[10]);
    if (mrfs32[0] * (mrfs32[5] * mrfs32[10] - mrfs32[6] * mrfs32[9]) - mrfs32[1] * (mrfs32[4] * mrfs32[10] - mrfs32[6] * mrfs32[8]) + mrfs32[2] * (mrfs32[4] * mrfs32[9] - mrfs32[5] * mrfs32[8]) < 0) scale.z = -scale.z;
    mrfs32[0] /= scale.x;
    mrfs32[1] /= scale.x;
    mrfs32[2] /= scale.x;
    mrfs32[4] /= scale.y;
    mrfs32[5] /= scale.y;
    mrfs32[6] /= scale.y;
    mrfs32[8] /= scale.z;
    mrfs32[9] /= scale.z;
    mrfs32[10] /= scale.z;
    let rot = new Vector3D_1.default();

    switch (orientationStyle) {
      case OrientationType_1.default.AXIS_ANGLE:
        {
          rot.w = MathConst_1.default.SafeACos((mrfs32[0] + mrfs32[5] + mrfs32[10] - 1) / 2);
          let len = Math.sqrt((mrfs32[6] - mrfs32[9]) * (mrfs32[6] - mrfs32[9]) + (mrfs32[8] - mrfs32[2]) * (mrfs32[8] - mrfs32[2]) + (mrfs32[1] - mrfs32[4]) * (mrfs32[1] - mrfs32[4]));

          if (len > MathConst_1.default.MATH_MIN_POSITIVE) {
            rot.x = (mrfs32[6] - mrfs32[9]) / len;
            rot.y = (mrfs32[8] - mrfs32[2]) / len;
            rot.z = (mrfs32[1] - mrfs32[4]) / len;
          } else rot.x = rot.y = rot.z = 0;
        }
        break;

      case OrientationType_1.default.QUATERNION:
        {
          let tr = mrfs32[0] + mrfs32[5] + mrfs32[10];

          if (tr > 0) {
            rot.w = Math.sqrt(1 + tr) / 2;
            rot.x = (mrfs32[6] - mrfs32[9]) / (4 * rot.w);
            rot.y = (mrfs32[8] - mrfs32[2]) / (4 * rot.w);
            rot.z = (mrfs32[1] - mrfs32[4]) / (4 * rot.w);
          } else if (mrfs32[0] > mrfs32[5] && mrfs32[0] > mrfs32[10]) {
            rot.x = Math.sqrt(1 + mrfs32[0] - mrfs32[5] - mrfs32[10]) / 2;
            rot.w = (mrfs32[6] - mrfs32[9]) / (4 * rot.x);
            rot.y = (mrfs32[1] + mrfs32[4]) / (4 * rot.x);
            rot.z = (mrfs32[8] + mrfs32[2]) / (4 * rot.x);
          } else if (mrfs32[5] > mrfs32[10]) {
            rot.y = Math.sqrt(1 + mrfs32[5] - mrfs32[0] - mrfs32[10]) / 2;
            rot.x = (mrfs32[1] + mrfs32[4]) / (4 * rot.y);
            rot.w = (mrfs32[8] - mrfs32[2]) / (4 * rot.y);
            rot.z = (mrfs32[6] + mrfs32[9]) / (4 * rot.y);
          } else {
            rot.z = Math.sqrt(1 + mrfs32[10] - mrfs32[0] - mrfs32[5]) / 2;
            rot.x = (mrfs32[8] + mrfs32[2]) / (4 * rot.z);
            rot.y = (mrfs32[6] + mrfs32[9]) / (4 * rot.z);
            rot.w = (mrfs32[1] - mrfs32[4]) / (4 * rot.z);
          }
        }
        break;

      case OrientationType_1.default.EULER_ANGLES:
        {
          rot.y = Math.asin(-mrfs32[2]);

          if (mrfs32[2] != 1 && mrfs32[2] != -1) {
            rot.x = Math.atan2(mrfs32[6], mrfs32[10]);
            rot.z = Math.atan2(mrfs32[1], mrfs32[0]);
          } else {
            rot.z = 0;
            rot.x = Math.atan2(mrfs32[4], mrfs32[5]);
          }
        }
        break;

      default:
        break;
    }

    ;
    vec.push(pos);
    vec.push(rot);
    vec.push(scale);
    mr = null;
    return vec;
  }

  invert() {
    let d = this.determinant();
    let invertable = Math.abs(d) > MathConst_1.default.MATH_MIN_POSITIVE;

    if (invertable) {
      let sfs32 = this.m_localFS32;
      d = 1.0 / d;
      let m11 = sfs32[0];
      let m21 = sfs32[4];
      let m31 = sfs32[8];
      let m41 = sfs32[12];
      let m12 = sfs32[1];
      let m22 = sfs32[5];
      let m32 = sfs32[9];
      let m42 = sfs32[13];
      let m13 = sfs32[2];
      let m23 = sfs32[6];
      let m33 = sfs32[10];
      let m43 = sfs32[14];
      let m14 = sfs32[3];
      let m24 = sfs32[7];
      let m34 = sfs32[11];
      let m44 = sfs32[15];
      sfs32[0] = d * (m22 * (m33 * m44 - m43 * m34) - m32 * (m23 * m44 - m43 * m24) + m42 * (m23 * m34 - m33 * m24));
      sfs32[1] = -d * (m12 * (m33 * m44 - m43 * m34) - m32 * (m13 * m44 - m43 * m14) + m42 * (m13 * m34 - m33 * m14));
      sfs32[2] = d * (m12 * (m23 * m44 - m43 * m24) - m22 * (m13 * m44 - m43 * m14) + m42 * (m13 * m24 - m23 * m14));
      sfs32[3] = -d * (m12 * (m23 * m34 - m33 * m24) - m22 * (m13 * m34 - m33 * m14) + m32 * (m13 * m24 - m23 * m14));
      sfs32[4] = -d * (m21 * (m33 * m44 - m43 * m34) - m31 * (m23 * m44 - m43 * m24) + m41 * (m23 * m34 - m33 * m24));
      sfs32[5] = d * (m11 * (m33 * m44 - m43 * m34) - m31 * (m13 * m44 - m43 * m14) + m41 * (m13 * m34 - m33 * m14));
      sfs32[6] = -d * (m11 * (m23 * m44 - m43 * m24) - m21 * (m13 * m44 - m43 * m14) + m41 * (m13 * m24 - m23 * m14));
      sfs32[7] = d * (m11 * (m23 * m34 - m33 * m24) - m21 * (m13 * m34 - m33 * m14) + m31 * (m13 * m24 - m23 * m14));
      sfs32[8] = d * (m21 * (m32 * m44 - m42 * m34) - m31 * (m22 * m44 - m42 * m24) + m41 * (m22 * m34 - m32 * m24));
      sfs32[9] = -d * (m11 * (m32 * m44 - m42 * m34) - m31 * (m12 * m44 - m42 * m14) + m41 * (m12 * m34 - m32 * m14));
      sfs32[10] = d * (m11 * (m22 * m44 - m42 * m24) - m21 * (m12 * m44 - m42 * m14) + m41 * (m12 * m24 - m22 * m14));
      sfs32[11] = -d * (m11 * (m22 * m34 - m32 * m24) - m21 * (m12 * m34 - m32 * m14) + m31 * (m12 * m24 - m22 * m14));
      sfs32[12] = -d * (m21 * (m32 * m43 - m42 * m33) - m31 * (m22 * m43 - m42 * m23) + m41 * (m22 * m33 - m32 * m23));
      sfs32[13] = d * (m11 * (m32 * m43 - m42 * m33) - m31 * (m12 * m43 - m42 * m13) + m41 * (m12 * m33 - m32 * m13));
      sfs32[14] = -d * (m11 * (m22 * m43 - m42 * m23) - m21 * (m12 * m43 - m42 * m13) + m41 * (m12 * m23 - m22 * m13));
      sfs32[15] = d * (m11 * (m22 * m33 - m32 * m23) - m21 * (m12 * m33 - m32 * m13) + m31 * (m12 * m23 - m22 * m13));
    }

    ;
    return invertable;
  }

  pointAt(pos, at, up) {
    //TODO: need optimize
    if (at == null || at == undefined) at = new Vector3D_1.default(0.0, 0.0, -1.0);
    if (up == null || up == undefined) up = new Vector3D_1.default(0.0, -1.0, 0.0);
    let dir = at.subtract(pos);
    let vup = new Vector3D_1.default(up.x, up.y, up.z); //up->clone();
    //Vector3D right;

    dir.normalize();
    vup.normalize();
    let dir2 = new Vector3D_1.default(dir.x, dir.y, dir.z);
    dir2.scaleBy(vup.dot(dir)); //

    vup.subtractBy(dir2);
    if (vup.getLength() > MathConst_1.default.MATH_MIN_POSITIVE) vup.normalize();else if (dir.x != 0) vup.setTo(-dir.y, dir.x, 0); // vup = Vector3D(-dir.y, dir.x, 0);
    else vup.setTo(1, 0, 0); // vup = Vector3D(1, 0, 0);

    let right = vup.crossProduct(dir);
    right.normalize();
    let sfs32 = this.m_localFS32;
    sfs32[0] = right.x;
    sfs32[4] = right.y;
    sfs32[8] = right.z;
    sfs32[12] = 0.0;
    sfs32[1] = vup.x;
    sfs32[5] = vup.y;
    sfs32[9] = vup.z;
    sfs32[13] = 0.0;
    sfs32[2] = dir.x;
    sfs32[6] = dir.y;
    sfs32[10] = dir.z;
    sfs32[14] = 0.0;
    sfs32[3] = pos.x;
    sfs32[7] = pos.y;
    sfs32[11] = pos.z;
    sfs32[15] = 1.0;
  }

  prepend(rhs) {
    let rfs32 = rhs.getLocalFS32();
    let sfs32 = this.m_localFS32;
    let m111 = rfs32[0];
    let m121 = rfs32[4];
    let m131 = rfs32[8];
    let m141 = rfs32[12];
    let m112 = rfs32[1];
    let m122 = rfs32[5];
    let m132 = rfs32[9];
    let m142 = rfs32[13];
    let m113 = rfs32[2];
    let m123 = rfs32[6];
    let m133 = rfs32[10];
    let m143 = rfs32[14];
    let m114 = rfs32[3];
    let m124 = rfs32[7];
    let m134 = rfs32[11];
    let m144 = rfs32[15];
    let m211 = sfs32[0];
    let m221 = sfs32[4];
    let m231 = sfs32[8];
    let m241 = sfs32[12];
    let m212 = sfs32[1];
    let m222 = sfs32[5];
    let m232 = sfs32[9];
    let m242 = sfs32[13];
    let m213 = sfs32[2];
    let m223 = sfs32[6];
    let m233 = sfs32[10];
    let m243 = sfs32[14];
    let m214 = sfs32[3];
    let m224 = sfs32[7];
    let m234 = sfs32[11];
    let m244 = sfs32[15];
    sfs32[0] = m111 * m211 + m112 * m221 + m113 * m231 + m114 * m241;
    sfs32[1] = m111 * m212 + m112 * m222 + m113 * m232 + m114 * m242;
    sfs32[2] = m111 * m213 + m112 * m223 + m113 * m233 + m114 * m243;
    sfs32[3] = m111 * m214 + m112 * m224 + m113 * m234 + m114 * m244;
    sfs32[4] = m121 * m211 + m122 * m221 + m123 * m231 + m124 * m241;
    sfs32[5] = m121 * m212 + m122 * m222 + m123 * m232 + m124 * m242;
    sfs32[6] = m121 * m213 + m122 * m223 + m123 * m233 + m124 * m243;
    sfs32[7] = m121 * m214 + m122 * m224 + m123 * m234 + m124 * m244;
    sfs32[8] = m131 * m211 + m132 * m221 + m133 * m231 + m134 * m241;
    sfs32[9] = m131 * m212 + m132 * m222 + m133 * m232 + m134 * m242;
    sfs32[10] = m131 * m213 + m132 * m223 + m133 * m233 + m134 * m243;
    sfs32[11] = m131 * m214 + m132 * m224 + m133 * m234 + m134 * m244;
    sfs32[12] = m141 * m211 + m142 * m221 + m143 * m231 + m144 * m241;
    sfs32[13] = m141 * m212 + m142 * m222 + m143 * m232 + m144 * m242;
    sfs32[14] = m141 * m213 + m142 * m223 + m143 * m233 + m144 * m243;
    sfs32[15] = m141 * m214 + m142 * m224 + m143 * m234 + m144 * m244;
  }

  prepend3x3(rhs) {
    let rfs32 = rhs.getLocalFS32();
    let sfs32 = this.m_localFS32;
    let m111 = rfs32[0];
    let m121 = rfs32[4];
    let m131 = rfs32[8];
    let m112 = rfs32[1];
    let m122 = rfs32[5];
    let m132 = rfs32[9];
    let m113 = rfs32[2];
    let m123 = rfs32[6];
    let m133 = rfs32[10];
    let m211 = sfs32[0];
    let m221 = sfs32[4];
    let m231 = sfs32[8];
    let m212 = sfs32[1];
    let m222 = sfs32[5];
    let m232 = sfs32[9];
    let m213 = sfs32[2];
    let m223 = sfs32[6];
    let m233 = sfs32[10];
    sfs32[0] = m111 * m211 + m112 * m221 + m113 * m231;
    sfs32[1] = m111 * m212 + m112 * m222 + m113 * m232;
    sfs32[2] = m111 * m213 + m112 * m223 + m113 * m233;
    sfs32[4] = m121 * m211 + m122 * m221 + m123 * m231;
    sfs32[5] = m121 * m212 + m122 * m222 + m123 * m232;
    sfs32[6] = m121 * m213 + m122 * m223 + m123 * m233;
    sfs32[8] = m131 * m211 + m132 * m221 + m133 * m231;
    sfs32[9] = m131 * m212 + m132 * m222 + m133 * m232;
    sfs32[10] = m131 * m213 + m132 * m223 + m133 * m233;
  }

  prependRotationPivot(radian, axis, pivotPoint) {
    Matrix4.s_tMat4.identity();
    Matrix4.s_tMat4.getAxisRotation(axis.x, axis.y, axis.z, radian);
    Matrix4.s_tMat4.appendTranslationXYZ(pivotPoint.x, pivotPoint.y, pivotPoint.z);
    this.prepend(Matrix4.s_tMat4);
  }

  prependRotation(radian, axis) {
    Matrix4.s_tMat4.identity();
    Matrix4.s_tMat4.getAxisRotation(axis.x, axis.y, axis.z, radian);
    this.prepend(Matrix4.s_tMat4);
  }

  prependRotationX(radian) {
    //s_tempMat.identity();
    Matrix4.s_tMat4.rotationX(radian);
    this.prepend3x3(Matrix4.s_tMat4);
  }

  prependRotationY(radian) {
    //s_tempMat.identity();
    Matrix4.s_tMat4.rotationY(radian);
    this.prepend3x3(Matrix4.s_tMat4);
  }

  prependRotationZ(radian) {
    //s_tempMat.identity();
    Matrix4.s_tMat4.rotationZ(radian);
    this.prepend3x3(Matrix4.s_tMat4);
  } // 用欧拉角形式旋转(heading->pitch->bank) => (y->x->z)


  prependRotationEulerAngle(radianX, radianY, radianZ) {
    //s_tempMat.identity();
    Matrix4.s_tMat4.rotationY(radianY);
    this.prepend3x3(Matrix4.s_tMat4); //s_tempMat.identity();

    Matrix4.s_tMat4.rotationX(radianX);
    this.prepend3x3(Matrix4.s_tMat4); //s_tempMat.identity();

    Matrix4.s_tMat4.rotationZ(radianZ);
    this.prepend3x3(Matrix4.s_tMat4);
  }

  prependScale(xScale, yScale, zScale) {
    let sfs32 = this.m_localFS32;
    sfs32[0] *= xScale;
    sfs32[1] *= yScale;
    sfs32[2] *= zScale;
    sfs32[4] *= xScale;
    sfs32[5] *= yScale;
    sfs32[6] *= zScale;
    sfs32[8] *= xScale;
    sfs32[9] *= yScale;
    sfs32[10] *= zScale;
    sfs32[12] *= xScale;
    sfs32[13] *= yScale;
    sfs32[14] *= zScale;
  }

  prependScaleXY(xScale, yScale) {
    this.m_localFS32[0] *= xScale;
    this.m_localFS32[1] *= yScale;
    this.m_localFS32[4] *= xScale;
    this.m_localFS32[5] *= yScale;
    this.m_localFS32[8] *= xScale;
    this.m_localFS32[9] *= yScale;
    this.m_localFS32[12] *= xScale;
    this.m_localFS32[13] *= yScale;
  }

  prependTranslationXYZ(px, py, pz) {
    Matrix4.s_tMat4.identity(); //Matrix4.s_tMat4.setPositionXYZ(px, py, pz);

    this.prepend(Matrix4.s_tMat4);
  }

  prependTranslation(v3) {
    Matrix4.s_tMat4.identity(); //Matrix4.s_tMat4.setPositionXYZ(v3.x, v3.y, v3.z);

    this.prepend(Matrix4.s_tMat4);
  }

  recompose(components, orientationStyle) {
    if (components.length < 3 || components[2].x == 0 || components[2].y == 0 || components[2].z == 0) return false;
    this.identity();
    let scale = Matrix4.s_tMat4.getFS32();
    scale[0] = scale[1] = scale[2] = components[2].x;
    scale[4] = scale[5] = scale[6] = components[2].y;
    scale[8] = scale[9] = scale[10] = components[2].z;
    let sfs32 = this.m_localFS32;

    switch (orientationStyle) {
      case OrientationType_1.default.EULER_ANGLES:
        {
          let cx = Math.cos(components[1].x);
          let cy = Math.cos(components[1].y);
          let cz = Math.cos(components[1].z);
          let sx = Math.sin(components[1].x);
          let sy = Math.sin(components[1].y);
          let sz = Math.sin(components[1].z);
          sfs32[0] = cy * cz * scale[0];
          sfs32[1] = cy * sz * scale[1];
          sfs32[2] = -sy * scale[2];
          sfs32[3] = 0;
          sfs32[4] = (sx * sy * cz - cx * sz) * scale[4];
          sfs32[5] = (sx * sy * sz + cx * cz) * scale[5];
          sfs32[6] = sx * cy * scale[6];
          sfs32[7] = 0;
          sfs32[8] = (cx * sy * cz + sx * sz) * scale[8];
          sfs32[9] = (cx * sy * sz - sx * cz) * scale[9];
          sfs32[10] = cx * cy * scale[10];
          sfs32[11] = 0;
          sfs32[12] = components[0].x;
          sfs32[13] = components[0].y;
          sfs32[14] = components[0].z;
          sfs32[15] = 1;
        }
        break;

      default:
        {
          let x = components[1].x;
          let y = components[1].y;
          let z = components[1].z;
          let w = components[1].w;

          if (orientationStyle == OrientationType_1.default.AXIS_ANGLE) {
            let halfW = 0.5 * w;
            x *= Math.sin(halfW);
            y *= Math.sin(halfW);
            z *= Math.sin(halfW);
            w = Math.cos(halfW);
          }

          ;
          sfs32[0] = (1 - 2 * y * y - 2 * z * z) * scale[0];
          sfs32[1] = (2 * x * y + 2 * w * z) * scale[1];
          sfs32[2] = (2 * x * z - 2 * w * y) * scale[2];
          sfs32[3] = 0;
          sfs32[4] = (2 * x * y - 2 * w * z) * scale[4];
          sfs32[5] = (1 - 2 * x * x - 2 * z * z) * scale[5];
          sfs32[6] = (2 * y * z + 2 * w * x) * scale[6];
          sfs32[7] = 0;
          sfs32[8] = (2 * x * z + 2 * w * y) * scale[8];
          sfs32[9] = (2 * y * z - 2 * w * x) * scale[9];
          sfs32[10] = (1 - 2 * x * x - 2 * y * y) * scale[10];
          sfs32[11] = 0;
          sfs32[12] = components[0].x;
          sfs32[13] = components[0].y;
          sfs32[14] = components[0].z;
          sfs32[15] = 1;
        }
        break;
    }

    ; //TODO: need thinking

    if (components[2].x == 0) this.m_localFS32[0] = 0; // 1e-15;

    if (components[2].y == 0) this.m_localFS32[5] = 0; // 1e-15;

    if (components[2].z == 0) this.m_localFS32[10] = 0; // 1e-15;

    scale = null;
    return true;
  }

  deltaTransformVector(v3) {
    let x = v3.x;
    let y = v3.y;
    let z = v3.z;
    return new Vector3D_1.default(x * this.m_localFS32[0] + y * this.m_localFS32[4] + z * this.m_localFS32[8], x * this.m_localFS32[1] + y * this.m_localFS32[5] + z * this.m_localFS32[9], x * this.m_localFS32[2] + y * this.m_localFS32[6] + z * this.m_localFS32[10], 0.0);
  }

  deltaTransformVectorSelf(v3) {
    let sfs32 = this.m_localFS32;
    let x = v3.x;
    let y = v3.y;
    let z = v3.z;
    v3.x = x * sfs32[0] + y * sfs32[4] + z * sfs32[8];
    v3.y = x * sfs32[1] + y * sfs32[5] + z * sfs32[9];
    v3.z = x * sfs32[2] + y * sfs32[6] + z * sfs32[10];
  }

  deltaTransformOutVector(v3, out_v3) {
    let sfs32 = this.m_localFS32;
    out_v3.x = v3.x * sfs32[0] + v3.y * sfs32[4] + v3.z * sfs32[8];
    out_v3.y = v3.x * sfs32[1] + v3.y * sfs32[5] + v3.z * sfs32[9];
    out_v3.z = v3.x * sfs32[2] + v3.y * sfs32[6] + v3.z * sfs32[10];
  }

  transformVector(v3) {
    let sfs32 = this.m_localFS32;
    let x = v3.x;
    let y = v3.y;
    let z = v3.z;
    return new Vector3D_1.default(x * sfs32[0] + y * sfs32[4] + z * sfs32[8] + sfs32[12], x * sfs32[1] + y * sfs32[5] + z * sfs32[9] + sfs32[13], x * sfs32[2] + y * sfs32[6] + z * sfs32[10] + sfs32[14], x * sfs32[3] + y * sfs32[7] + z * sfs32[11] + sfs32[15]);
  }

  transformOutVector(v3, out_v3) {
    let x = v3.x;
    let y = v3.y;
    let z = v3.z;
    let sfs32 = this.m_localFS32;
    out_v3.setTo(x * sfs32[0] + y * sfs32[4] + z * sfs32[8] + sfs32[12], x * sfs32[1] + y * sfs32[5] + z * sfs32[9] + sfs32[13], x * sfs32[2] + y * sfs32[6] + z * sfs32[10] + sfs32[14], x * sfs32[3] + y * sfs32[7] + z * sfs32[11] + sfs32[15]);
  }

  transformOutVector3(v3, out_v3) {
    let sfs32 = this.m_localFS32;
    out_v3.x = v3.x * sfs32[0] + v3.y * sfs32[4] + v3.z * sfs32[8] + sfs32[12];
    out_v3.y = v3.x * sfs32[1] + v3.y * sfs32[5] + v3.z * sfs32[9] + sfs32[13];
    out_v3.z = v3.x * sfs32[2] + v3.y * sfs32[6] + v3.z * sfs32[10] + sfs32[14];
  }

  transformVector3Self(v3) {
    let x = v3.x;
    let y = v3.y;
    let z = v3.z;
    let sfs32 = this.m_localFS32;
    v3.x = x * sfs32[0] + y * sfs32[4] + z * sfs32[8] + sfs32[12];
    v3.y = x * sfs32[1] + y * sfs32[5] + z * sfs32[9] + sfs32[13];
    v3.z = x * sfs32[2] + y * sfs32[6] + z * sfs32[10] + sfs32[14];
  }

  transformVectorSelf(v3) {
    let x = v3.x;
    let y = v3.y;
    let z = v3.z;
    let sfs32 = this.m_localFS32;
    v3.setTo(x * sfs32[0] + y * sfs32[4] + z * sfs32[8] + sfs32[12], x * sfs32[1] + y * sfs32[5] + z * sfs32[9] + sfs32[13], x * sfs32[2] + y * sfs32[6] + z * sfs32[10] + sfs32[14], x * sfs32[3] + y * sfs32[7] + z * sfs32[11] + sfs32[15]);
  }

  transformVectors(float_vinArr, vinLength, float_voutArr) {
    let i = 0;
    let x, y, z;
    let pfs = this.m_localFS32;
    vinLength -= 3;

    while (i <= vinLength) {
      x = float_vinArr[i];
      y = float_vinArr[i + 1];
      z = float_vinArr[i + 2];
      float_voutArr[i] = x * pfs[0] + y * pfs[4] + z * pfs[8] + pfs[12];
      float_voutArr[i + 1] = x * pfs[1] + y * pfs[5] + z * pfs[9] + pfs[13];
      float_voutArr[i + 2] = x * pfs[2] + y * pfs[6] + z * pfs[10] + pfs[14];
      i += 3;
    }
  }

  transformVectorsSelf(float_vinArr, vinLength) {
    let i = 0;
    let x, y, z;
    let pfs = this.m_localFS32;
    vinLength -= 3;

    while (i <= vinLength) {
      x = float_vinArr[i];
      y = float_vinArr[i + 1];
      z = float_vinArr[i + 2];
      float_vinArr[i] = x * pfs[0] + y * pfs[4] + z * pfs[8] + pfs[12];
      float_vinArr[i + 1] = x * pfs[1] + y * pfs[5] + z * pfs[9] + pfs[13];
      float_vinArr[i + 2] = x * pfs[2] + y * pfs[6] + z * pfs[10] + pfs[14];
      i += 3;
    }
  }

  transformVectorsRangeSelf(float_vinArr, begin, end) {
    let i = begin;
    let x, y, z;
    let pfs = this.m_localFS32;
    end -= 3;

    while (i <= end) {
      x = float_vinArr[i];
      y = float_vinArr[i + 1];
      z = float_vinArr[i + 2];
      float_vinArr[i] = x * pfs[0] + y * pfs[4] + z * pfs[8] + pfs[12];
      float_vinArr[i + 1] = x * pfs[1] + y * pfs[5] + z * pfs[9] + pfs[13];
      float_vinArr[i + 2] = x * pfs[2] + y * pfs[6] + z * pfs[10] + pfs[14];
      i += 3;
    }
  }

  transpose() {
    Matrix4.s_tMat4.copyFrom(this);
    let fs32 = Matrix4.s_tMat4.getFS32();
    let sfs32 = this.m_localFS32;
    sfs32[1] = fs32[4];
    sfs32[2] = fs32[8];
    sfs32[3] = fs32[12];
    sfs32[4] = fs32[1];
    sfs32[6] = fs32[9];
    sfs32[7] = fs32[13];
    sfs32[8] = fs32[2];
    sfs32[9] = fs32[6];
    sfs32[11] = fs32[14];
    sfs32[12] = fs32[3];
    sfs32[13] = fs32[7];
    sfs32[14] = fs32[11];
  }

  interpolateTo(toMat, float_percent) {
    let fs32 = toMat.getFS32();
    let fsI = toMat.getFSIndex();
    let _g = 0;
    let i = this.m_index;

    while (_g < 16) {
      this.m_fs32[i] += (fs32[fsI + _g] - this.m_fs32[i]) * float_percent;
      ++i;
      ++_g;
    }
  }

  getAxisRotation(x, y, z, radian) {
    radian = -radian;
    let sfs32 = this.m_localFS32;
    let s = Math.sin(radian),
        c = Math.cos(radian);
    let t = 1.0 - c;
    sfs32[0] = c + x * x * t;
    sfs32[5] = c + y * y * t;
    sfs32[10] = c + z * z * t;
    let tmp1 = x * y * t;
    let tmp2 = z * s;
    sfs32[4] = tmp1 + tmp2;
    sfs32[1] = tmp1 - tmp2;
    tmp1 = x * z * t;
    tmp2 = y * s;
    sfs32[8] = tmp1 - tmp2;
    sfs32[2] = tmp1 + tmp2;
    tmp1 = y * z * t;
    tmp2 = x * s;
    sfs32[9] = tmp1 + tmp2;
    sfs32[6] = tmp1 - tmp2;
  }

  rotationX(radian) {
    let s = Math.sin(radian),
        c = Math.cos(radian);
    this.m_localFS32[0] = 1.0;
    this.m_localFS32[1] = 0.0;
    this.m_localFS32[2] = 0.0;
    this.m_localFS32[4] = 0.0;
    this.m_localFS32[5] = c;
    this.m_localFS32[6] = s;
    this.m_localFS32[8] = 0.0;
    this.m_localFS32[9] = -s;
    this.m_localFS32[10] = c;
  }

  rotationY(radian) {
    let s = Math.sin(radian),
        c = Math.cos(radian);
    this.m_localFS32[0] = c;
    this.m_localFS32[1] = 0.0;
    this.m_localFS32[2] = -s;
    this.m_localFS32[4] = 0.0;
    this.m_localFS32[5] = 1.0;
    this.m_localFS32[6] = 0.0;
    this.m_localFS32[8] = s;
    this.m_localFS32[9] = 0.0;
    this.m_localFS32[10] = c;
  }

  rotationZ(radian) {
    let s = Math.sin(radian),
        c = Math.cos(radian);
    this.m_localFS32[0] = c;
    this.m_localFS32[1] = s;
    this.m_localFS32[2] = 0.0;
    this.m_localFS32[4] = -s;
    this.m_localFS32[5] = c;
    this.m_localFS32[6] = 0.0;
    this.m_localFS32[8] = 0.0;
    this.m_localFS32[9] = 0.0;
    this.m_localFS32[10] = 1.0;
  } /////////////////////////////////////////////////////////////


  toString() {
    let str = "\n" + this.m_localFS32[0] + "," + this.m_localFS32[1] + "," + this.m_localFS32[2] + "," + this.m_localFS32[3] + "\n";
    str += this.m_localFS32[4] + "," + this.m_localFS32[5] + "," + this.m_localFS32[6] + "," + this.m_localFS32[7] + "\n";
    str += this.m_localFS32[8] + "," + this.m_localFS32[9] + "," + this.m_localFS32[10] + "," + this.m_localFS32[11] + "\n";
    str += this.m_localFS32[12] + "," + this.m_localFS32[13] + "," + this.m_localFS32[14] + "," + this.m_localFS32[15] + "\n";
    return str;
  }

  transformPerspV4Self(v4) {
    v4.w = v4.z;
    v4.x *= this.m_localFS32[0];
    v4.y *= this.m_localFS32[5];
    v4.z *= this.m_localFS32[10];
    v4.z += this.m_localFS32[14];
    v4.w *= this.m_localFS32[11];
    v4.w += this.m_localFS32[15];
  } ///////
  // view etc..
  ///////////////////////////////////////////


  perspectiveRH(fovy, aspect, zNear, zFar) {
    //assert(abs(aspect - std::numeric_limits<float>::epsilon()) > minFloatValue)
    let tanHalfFovy = Math.tan(fovy * 0.5);
    this.identity();
    this.m_localFS32[0] = 1.0 / (aspect * tanHalfFovy);
    this.m_localFS32[5] = 1.0 / tanHalfFovy;
    this.m_localFS32[10] = -(zFar + zNear) / (zFar - zNear);
    this.m_localFS32[11] = -1.0;
    this.m_localFS32[14] = -(2.0 * zFar * zNear) / (zFar - zNear);
  }

  perspectiveRH2(fovy, pw, ph, zNear, zFar) {
    let focalLength = pw / Math.tan(fovy * 0.5);
    let m0 = focalLength / pw;
    let m5 = focalLength / ph;
    let m10 = -zFar / (zFar - zNear);
    let m14 = -zNear * m10;
    this.identity();
    this.m_localFS32[0] = m0;
    this.m_localFS32[5] = m5;
    this.m_localFS32[10] = m10;
    this.m_localFS32[11] = -1.0;
    this.m_localFS32[14] = m14;
  }

  orthoRH(b, t, l, r, zNear, zFar) {
    this.identity();
    this.m_localFS32[0] = 2.0 / (r - l);
    this.m_localFS32[5] = 2.0 / (t - b);
    this.m_localFS32[10] = -2.0 / (zFar - zNear);
    this.m_localFS32[12] = -(r + l) / (r - l);
    this.m_localFS32[13] = -(t + b) / (t - b);
    this.m_localFS32[14] = -(zFar + zNear) / (zFar - zNear);
    this.m_localFS32[15] = 1.0;
  }

  perspectiveLH(fovy, aspect, zNear, zFar) {
    //assert(abs(aspect - std::numeric_limits<float>::epsilon()) > minFloatValue)
    let tanHalfFovy = Math.tan(fovy * 0.5);
    this.identity();
    this.m_localFS32[0] = 1.0 / (aspect * tanHalfFovy);
    this.m_localFS32[5] = 1.0 / tanHalfFovy;
    this.m_localFS32[10] = (zFar + zNear) / (zFar - zNear);
    this.m_localFS32[11] = 1.0;
    this.m_localFS32[14] = 2.0 * zFar * zNear / (zFar - zNear);
  }

  orthoLH(b, t, l, r, zNear, zFar) {
    this.identity();
    this.m_localFS32[0] = 2.0 / (r - l); // / (aspect * tanHalfFovy);

    this.m_localFS32[5] = 2.0 / (t - b); // / tanHalfFovy;

    this.m_localFS32[10] = 2.0 / (zFar - zNear);
    this.m_localFS32[12] = -(r + l) / (r - l);
    this.m_localFS32[13] = -(t + b) / (t - b);
    this.m_localFS32[14] = -(zFar + zNear) / (zFar - zNear);
    this.m_localFS32[15] = 1.0;
  }

  lookAtRH(eye, center, up) {
    this.identity();
    let f = center.subtract(eye);
    f.normalize();
    let s = f.crossProduct(up);
    s.normalize();
    let u = s.crossProduct(f);
    s.w = -s.dot(eye);
    u.w = -u.dot(eye);
    f.w = f.dot(eye);
    f.negate();
    this.copyRowFrom(0, s);
    this.copyRowFrom(1, u);
    this.copyRowFrom(2, f);
  }

  lookAtLH(eye, center, up) {
    this.identity();
    let f = center.subtract(eye);
    f.normalize();
    let s = f.crossProduct(up);
    s.normalize();
    let u = s.crossProduct(f);
    s.w = -s.dot(eye);
    u.w = -u.dot(eye);
    f.w = -f.dot(eye);
    this.copyRowFrom(0, s);
    this.copyRowFrom(1, u);
    this.copyRowFrom(2, f);
  }

  destroy() {
    this.m_localFS32 = null;
    this.m_fs32 = null;
    this.m_index = -1;
  }

}

Matrix4.s_InitData = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
Matrix4.s_uid = 0;
Matrix4.s_isolatedUid = 0x4ffff;
Matrix4.s_tMat4 = new Matrix4();
exports.default = Matrix4;

/***/ }),

/***/ "1eb2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* unused harmony default export */ var _unused_webpack_default_export = (null);


/***/ }),

/***/ "2139":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Matrix4_1 = __importDefault(__webpack_require__("18c7"));

class Matrix4Pool {
  static GetMatTotal() {
    return Matrix4Pool.s_mtotal;
  }

  static GetFS32Arr() {
    return Matrix4Pool.s_mfs32Arr;
  }

  static SetFS32Arr(fs32) {
    Matrix4Pool.s_mfs32Arr = fs32;
    let total = Matrix4Pool.s_mtotal;
    let list = Matrix4Pool.s_matList;

    for (let i = 0; i < total; ++i) {
      list[i].setF32Arr(fs32);
    }
  }

  static GetFreeId() {
    if (Matrix4Pool.m_freeIdList.length > 0) {
      return Matrix4Pool.m_freeIdList.pop();
    }

    return -1;
  }

  static Allocate(total) {
    if (total < 1024) {
      total = 1024;
    }

    if (Matrix4Pool.s_mtotal < 1) {
      //console.log("Matrix4Pool::Allocate(), Matrix total: "+total);
      Matrix4Pool.s_mtotal = total;
      Matrix4Pool.s_mfs32Arr = new Float32Array(total * 16);
      let i = 0;
      let mat = new Matrix4_1.default(Matrix4Pool.s_mfs32Arr, i * 16);
      let uid = mat.getUid();
      Matrix4Pool.s_baseUid = uid;
      Matrix4Pool.s_maxUid = uid + total;

      for (; i < uid; ++i) {
        Matrix4Pool.s_matList.push(null);
        Matrix4Pool.s_matFlagList.push(Matrix4Pool.S_FLAG_FREE);
      }

      Matrix4Pool.s_matList.push(mat);
      Matrix4Pool.s_matFlagList.push(Matrix4Pool.S_FLAG_FREE);
      Matrix4Pool.m_freeIdList.push(mat.getUid());

      for (i = 1; i < total; ++i) {
        mat = new Matrix4_1.default(Matrix4Pool.s_mfs32Arr, i * 16);
        Matrix4Pool.s_matList.push(mat);
        Matrix4Pool.s_matFlagList.push(Matrix4Pool.S_FLAG_FREE);
        Matrix4Pool.m_freeIdList.push(mat.getUid());
      }
    }
  }

  static GetMatrix() {
    let mat = null;
    let index = Matrix4Pool.GetFreeId() - Matrix4Pool.s_baseUid;

    if (index >= 0) {
      mat = Matrix4Pool.s_matList[index];
      mat.identity();
      Matrix4Pool.s_matFlagList[index] = Matrix4Pool.S_FLAG_BUSY; //console.log("Get a free Matrix !!!");
    } else {
      //console.error("Matrix4Pool::GetMatrix(), Error Matrix4Pool is empty !!!");
      mat = new Matrix4_1.default();
    }

    return mat;
  }

  static RetrieveMatrix(mat) {
    if (mat != null) {
      let uid = mat.getUid();

      if (uid >= Matrix4Pool.s_baseUid && uid < Matrix4Pool.s_maxUid) {
        if (Matrix4Pool.s_matFlagList[uid - Matrix4Pool.s_baseUid] == Matrix4Pool.S_FLAG_BUSY) {
          Matrix4Pool.m_freeIdList.push(uid);
          Matrix4Pool.s_matFlagList[uid - Matrix4Pool.s_baseUid] = Matrix4Pool.S_FLAG_FREE;
        }
      }
    }
  }

}

Matrix4Pool.S_FLAG_BUSY = 1;
Matrix4Pool.S_FLAG_FREE = 0;
Matrix4Pool.s_matList = [];
Matrix4Pool.s_matFlagList = [];
Matrix4Pool.m_freeIdList = [];
Matrix4Pool.s_mfs32Arr = null;
Matrix4Pool.s_baseUid = 0;
Matrix4Pool.s_maxUid = 0;
Matrix4Pool.s_mtotal = 0;
exports.default = Matrix4Pool;

/***/ }),

/***/ "250c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

const GLSLConverter_1 = __importDefault(__webpack_require__("81ce"));

const ShaderCompileInfo_1 = __importDefault(__webpack_require__("f208"));

class ShaderCodeBuilder2 {
  constructor() {
    this.m_versionDeclare = `#version 300 es
`;
    this.m_preciousCode = `
precision mediump float;
`;
    this.m_mainBeginCode = `
\nvoid main(){
`;
    this.m_mainEndCode = `
}
`;
    this.m_fragExt = [];
    this.m_vertExt = [];
    this.m_defineNames = [];
    this.m_defineValues = [];
    this.m_vertLayoutNames = [];
    this.m_vertLayoutTypes = [];
    this.m_fragOutputNames = [];
    this.m_fragOutputTypes = [];
    this.m_vertUniformNames = [];
    this.m_vertUniformTypes = [];
    this.m_fragUniformNames = [];
    this.m_fragUniformTypes = [];
    this.m_varyingNames = [];
    this.m_varyingTypes = [];
    this.m_fragFunctionBlocks = [];
    this.m_vertFunctionBlocks = [];
    this.m_textureSampleTypes = [];
    this.m_texturePrecises = [];
    this.m_textureMacroNames = [];
    this.m_texturePrecise = "";
    this.m_textureFlags = [];
    this.m_vertObjMat = false;
    this.m_vertViewMat = false;
    this.m_vertProjMat = false;
    this.m_fragObjMat = false;
    this.m_fragViewMat = false;
    this.m_fragProjMat = false;
    this.m_vertHeadCode = "";
    this.m_vertMainCode = "";
    this.m_fragHeadCode = "";
    this.m_fragMainCode = "";
    this.m_use2DMap = false;
    /**
     * 记录 shader 预编译信息
     */

    this.m_preCompileInfo = null;
    this.normalMapEanbled = false;
    this.mapLodEnabled = false;
    this.derivatives = false;
    this.vertMatrixInverseEnabled = false;
    this.fragMatrixInverseEnabled = false;
  }

  reset() {
    this.m_vertObjMat = false;
    this.m_vertViewMat = false;
    this.m_vertProjMat = false;
    this.m_fragObjMat = false;
    this.m_fragViewMat = false;
    this.m_fragProjMat = false;
    this.m_use2DMap = false;
    this.m_vertHeadCode = "";
    this.m_vertMainCode = "";
    this.m_fragHeadCode = "";
    this.m_fragMainCode = "";
    this.m_vertExt = [];
    this.m_fragExt = [];
    this.m_vertLayoutNames = [];
    this.m_vertLayoutTypes = [];
    this.m_fragOutputNames = [];
    this.m_fragOutputTypes = [];
    this.m_varyingNames = [];
    this.m_varyingTypes = [];
    this.m_vertUniformNames = [];
    this.m_vertUniformTypes = [];
    this.m_fragUniformNames = [];
    this.m_fragUniformTypes = [];
    this.m_fragFunctionBlocks = [];
    this.m_vertFunctionBlocks = [];
    this.m_defineNames = [];
    this.m_defineValues = [];
    this.m_textureSampleTypes = [];
    this.m_texturePrecises = [];
    this.m_textureMacroNames = [];
    this.m_textureFlags = [];
    this.m_texturePrecise = "";
    this.normalMapEanbled = false;
    this.mapLodEnabled = false;
    this.vertMatrixInverseEnabled = false;
    this.fragMatrixInverseEnabled = false;
    this.m_preCompileInfo = null;
  }
  /**
   * 预编译信息
   * @returns 返回预编译信息
   */


  getPreCompileInfo() {
    let info = this.m_preCompileInfo;
    this.m_preCompileInfo = null;
    return info;
  }

  useHighPrecious() {
    this.m_preciousCode = "precision highp float;";
  }

  useMediumPrecious() {
    this.m_preciousCode = "precision mediump float;";
  }

  useLowPrecious() {
    this.m_preciousCode = "precision lowp float;";
  }

  addDefine(name, value = "1") {
    this.m_defineNames.push(name);
    this.m_defineValues.push(value);
  }

  addVertLayout(type, name) {
    this.m_vertLayoutNames.push(name);
    this.m_vertLayoutTypes.push(type);
  }

  addFragOutput(type, name) {
    this.m_fragOutputNames.push(name);
    this.m_fragOutputTypes.push(type);
  }

  addVarying(type, name) {
    this.m_varyingNames.push(name);
    this.m_varyingTypes.push(type);
  }

  addVertUniform(type, name, arrayLength = 0) {
    if (!this.m_fragUniformNames.includes(name)) {
      if (arrayLength > 0) {
        this.m_vertUniformNames.push(name + "[" + arrayLength + "]");
      } else {
        this.m_vertUniformNames.push(name);
      }

      this.m_vertUniformTypes.push(type);
    }
  }

  addVertUniformParam(unifromParam) {
    this.addVertUniform(unifromParam.type, unifromParam.name, unifromParam.arrayLength);
  }

  addFragUniform(type, name, arrayLength = 0) {
    if (!this.m_fragUniformNames.includes(name)) {
      if (arrayLength > 0) {
        this.m_fragUniformNames.push(name + "[" + arrayLength + "]");
      } else {
        this.m_fragUniformNames.push(name);
      }

      this.m_fragUniformTypes.push(type);
    }
  }

  addFragUniformParam(unifromParam) {
    this.addFragUniform(unifromParam.type, unifromParam.name, unifromParam.arrayLength);
  } //IUniformParam


  addFragFunction(codeBlock) {
    this.m_fragFunctionBlocks.push(codeBlock);
  }

  addVertFunction(codeBlock) {
    this.m_vertFunctionBlocks.push(codeBlock);
  }

  useTexturePreciseHighp() {
    this.m_texturePrecise = "highp";
  }

  addTextureSample2D(macroName = "", map2DEnabled = true, fragEnabled = true, vertEnabled = false) {
    this.m_textureSampleTypes.push("sampler2D");
    this.m_textureMacroNames.push(macroName);
    this.m_texturePrecises.push(this.m_texturePrecise);
    let flag = 0;
    if (fragEnabled) flag |= 2;
    if (vertEnabled) flag |= 4;
    this.m_textureFlags.push(flag);
    this.m_texturePrecise = "";

    if (map2DEnabled) {
      this.m_use2DMap = true;
    }
  }

  addTextureSampleCube(macroName = "", fragEnabled = true, vertEnabled = false) {
    this.m_textureSampleTypes.push("samplerCube");
    this.m_textureMacroNames.push(macroName);
    this.m_texturePrecises.push(this.m_texturePrecise);
    let flag = 0;
    if (fragEnabled) flag |= 2;
    if (vertEnabled) flag |= 4;
    this.m_textureFlags.push(flag);
    this.m_texturePrecise = "";
  }

  addTextureSample3D(macroName = "", fragEnabled = true, vertEnabled = false) {
    this.m_textureSampleTypes.push("sampler3D");
    this.m_textureMacroNames.push(macroName);
    this.m_texturePrecises.push(this.m_texturePrecise);
    let flag = 0;
    if (fragEnabled) flag |= 2;
    if (vertEnabled) flag |= 4;
    this.m_textureFlags.push(flag);
    this.m_texturePrecise = "";
  }

  isHaveTexture() {
    return this.m_textureSampleTypes.length > 0;
  }

  isHaveTexture2D() {
    return this.m_use2DMap;
  }

  useVertSpaceMats(objMatEnabled = true, viewMatEnabled = true, projMatEnabled = true) {
    this.m_vertObjMat = objMatEnabled;
    this.m_vertViewMat = viewMatEnabled;
    this.m_vertProjMat = projMatEnabled;
  }

  useFragSpaceMats(objMatEnabled = true, viewMatEnabled = true, projMatEnabled = true) {
    this.m_fragObjMat = objMatEnabled;
    this.m_fragViewMat = viewMatEnabled;
    this.m_fragProjMat = projMatEnabled;
  }

  addVertExtend(code) {
    this.m_vertExt.push(code);
  }

  addFragExtend(code) {
    this.m_fragExt.push(code);
  }

  addVertHeadCode(code) {
    this.m_vertHeadCode += code;
  }

  addVertMainCode(code) {
    this.m_vertMainCode += code;
  }

  addFragHeadCode(code) {
    this.m_fragHeadCode += code;
  }

  addFragMainCode(code) {
    this.m_fragMainCode += code;
  }

  buildFragCode() {
    let i = 0;
    let len = 0;
    let code = "";

    if (RendererDevice_1.default.FRAG_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED) {
      this.useHighPrecious();
    }

    if (RendererDevice_1.default.IsWebGL2()) {
      code += this.m_versionDeclare;
    }

    this.m_preCompileInfo = new ShaderCompileInfo_1.default();
    this.m_preCompileInfo.info = "\n//##COMPILE_INFO_BEGIN"; // complie info, for example: uniform info

    this.m_preCompileInfo.info += "\n//##COMPILE_INFO_END";
    i = 0;
    len = this.m_fragExt.length;

    for (; i < len; i++) {
      code += "\n" + this.m_fragExt[i];
    }

    if (RendererDevice_1.default.IsWebGL1()) {
      if (this.m_fragOutputNames.length > 1) {
        code += "\n#extension GL_EXT_draw_buffers: require";
      }

      if (this.normalMapEanbled || this.derivatives) {
        code += "\n#extension GL_OES_standard_derivatives : enable";
      }

      if (this.mapLodEnabled) {
        code += "\n#extension GL_EXT_shader_texture_lod : enable";
      }
    }

    if (RendererDevice_1.default.IsWebGL2()) {
      code += "\n#define VOX_IN in";

      if (this.mapLodEnabled) {
        code += "\n#define VOX_TextureCubeLod textureLod";
        code += "\n#define VOX_Texture2DLod textureLod";
      }

      code += "\n#define VOX_Texture2D texture";
      code += "\n#define VOX_TextureCube texture";
    } else {
      code += "\n#define VOX_IN varying";

      if (this.mapLodEnabled) {
        code += "\n#define VOX_TextureCubeLod textureCubeLodEXT";
        code += "\n#define VOX_Texture2DLod texture2DLodEXT";
      }

      code += "\n#define VOX_TextureCube textureCube";
      code += "\n#define VOX_Texture2D texture2D";
    }

    if (RendererDevice_1.default.IsMobileWeb()) {
      code += "\nprecision highp float;";
    } else {
      code += "\n" + this.m_preciousCode;
    }

    len = this.m_defineNames.length;

    for (i = 0; i < len; i++) {
      if (this.m_defineValues[i] != "") {
        code += "\n#define " + this.m_defineNames[i] + " " + this.m_defineValues[i];
      } else {
        code += "\n#define " + this.m_defineNames[i] + " 1";
      }
    }

    i = 0;
    len = this.m_textureMacroNames.length;

    for (; i < len; i++) {
      if (this.m_textureMacroNames[i] != "" && (this.m_textureFlags[i] & 2) != 0) {
        code += "\n#define " + this.m_textureMacroNames[i] + " u_sampler" + i + "";
      }
    }

    if (this.m_use2DMap) {
      code += "\n#define VOX_USE_2D_MAP 1";
    }

    i = 0;
    len = this.m_textureSampleTypes.length;

    for (; i < len; i++) {
      if ((this.m_textureFlags[i] & 2) != 0) {
        if (this.m_texturePrecises[i] == "") {
          code += "\nuniform " + this.m_textureSampleTypes[i] + " u_sampler" + i + ";";
        } else {
          code += "\nuniform " + this.m_texturePrecises[i] + " " + this.m_textureSampleTypes[i] + " u_sampler" + i + ";";
        }
      }
    }

    i = 0;
    len = this.m_fragUniformTypes.length;

    for (; i < len; i++) {
      code += "\nuniform " + this.m_fragUniformTypes[i] + " " + this.m_fragUniformNames[i] + ";";
    }

    if (this.m_fragObjMat) code += "\nuniform mat4 u_objMat;";
    if (this.m_fragViewMat) code += "\nuniform mat4 u_viewMat;";
    if (this.m_fragProjMat) code += "\nuniform mat4 u_projMat;";
    len = this.m_varyingNames.length;

    if (RendererDevice_1.default.IsWebGL2()) {
      for (i = 0; i < len; i++) {
        code += "\nin " + this.m_varyingTypes[i] + " " + this.m_varyingNames[i] + ";";
      }
    } else {
      for (i = 0; i < len; i++) {
        code += "\nvarying " + this.m_varyingTypes[i] + " " + this.m_varyingNames[i] + ";";
      }
    }

    if (this.fragMatrixInverseEnabled && RendererDevice_1.default.IsWebGL1()) {
      this.addVertFunction(GLSLConverter_1.default.__glslInverseMat3);
      this.addVertFunction(GLSLConverter_1.default.__glslInverseMat4);
    }

    code += this.m_fragHeadCode;
    i = 0;
    len = this.m_fragFunctionBlocks.length;

    for (; i < len; i++) {
      code += "\n" + this.m_fragFunctionBlocks[i];
    }

    i = 0;
    len = this.m_fragOutputNames.length;

    if (RendererDevice_1.default.IsWebGL2()) {
      for (; i < len; i++) {
        code += "\nlayout(location = " + i + ") out " + this.m_fragOutputTypes[i] + " " + this.m_fragOutputNames[i] + ";";
      }
    } else {
      if (len == 1) {
        code += "\n#define " + this.m_fragOutputNames[i] + " gl_FragColor";
      }
    } //  code += this.m_mainBeginCode;


    code += this.m_fragMainCode; //  code += this.m_mainEndCode;

    len = this.m_fragOutputNames.length;

    if (RendererDevice_1.default.IsWebGL1()) {
      if (len > 1) {
        for (i = 0; i < len; i++) {
          let tempReg = new RegExp(this.m_fragOutputNames[i], "g");
          code = code.replace(tempReg, "gl_FragData[" + i + "]");
        }
      }
    }

    return code;
  }

  buildVertCode() {
    let i = 0;
    let len = 0;
    let code = "";

    if (RendererDevice_1.default.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED) {
      this.useHighPrecious();
    }

    if (RendererDevice_1.default.IsWebGL2()) {
      code += this.m_versionDeclare;
    }

    i = 0;
    len = this.m_vertExt.length;

    for (; i < len; i++) {
      code += "\n" + this.m_vertExt[i];
    }

    if (RendererDevice_1.default.IsWebGL2()) {
      code += "\n#define VOX_IN in";

      if (this.mapLodEnabled) {
        code += "\n#define VOX_TextureCubeLod textureLod";
        code += "\n#define VOX_Texture2DLod textureLod";
      }

      code += "\n#define VOX_Texture2D texture";
      code += "\n#define VOX_TextureCube texture";
    } else {
      code += "\n#define VOX_IN varying";

      if (this.mapLodEnabled) {
        code += "\n#define VOX_TextureCubeLod textureCubeLodEXT";
        code += "\n#define VOX_Texture2DLod texture2DLodEXT";
      }

      code += "\n#define VOX_TextureCube textureCube";
      code += "\n#define VOX_Texture2D texture2D";
    }

    if (RendererDevice_1.default.IsMobileWeb()) {
      code += "\nprecision highp float;";
    } else {
      code += "\n" + this.m_preciousCode;
    } //code += "\n"+this.m_preciousCode;


    if (RendererDevice_1.default.IsWebGL2()) {
      code += "\n#define VOX_OUT out";
    } else {
      code += "\n#define VOX_OUT varying";
    }

    len = this.m_defineNames.length;

    for (i = 0; i < len; i++) {
      if (this.m_defineValues[i] != "") {
        code += "\n#define " + this.m_defineNames[i] + " " + this.m_defineValues[i];
      } else {
        code += "\n#define " + this.m_defineNames[i];
      }
    } //if (this.m_use2DMap) {
    //    code += "\n#define VOX_USE_2D_MAP 1";
    //}


    i = 0;
    len = this.m_textureMacroNames.length;

    for (; i < len; i++) {
      if (this.m_textureMacroNames[i] != "" && (this.m_textureFlags[i] & 4) != 0) {
        code += "\n#define " + this.m_textureMacroNames[i] + " u_sampler" + i + "";
      }
    }

    if (this.m_use2DMap) {
      code += "\n#define VOX_USE_2D_MAP 1";
    }

    i = 0;
    len = this.m_textureSampleTypes.length;

    for (; i < len; i++) {
      if ((this.m_textureFlags[i] & 4) != 0) {
        if (this.m_texturePrecises[i] == "") {
          code += "\nuniform " + this.m_textureSampleTypes[i] + " u_sampler" + i + ";";
        } else {
          code += "\nuniform " + this.m_texturePrecises[i] + " " + this.m_textureSampleTypes[i] + " u_sampler" + i + ";";
        }
      }
    }

    len = this.m_vertLayoutNames.length;

    if (RendererDevice_1.default.IsWebGL2()) {
      for (i = 0; i < len; i++) {
        code += "\nlayout(location = " + i + ") in " + this.m_vertLayoutTypes[i] + " " + this.m_vertLayoutNames[i] + ";";
      }
    } else {
      for (i = 0; i < len; i++) {
        code += "\nattribute " + this.m_vertLayoutTypes[i] + " " + this.m_vertLayoutNames[i] + ";";
      }
    }

    len = this.m_vertUniformTypes.length;

    for (i = 0; i < len; i++) {
      code += "\nuniform " + this.m_vertUniformTypes[i] + " " + this.m_vertUniformNames[i] + ";";
    }

    if (this.m_vertObjMat) code += "\nuniform mat4 u_objMat;";
    if (this.m_vertViewMat) code += "\nuniform mat4 u_viewMat;";
    if (this.m_vertProjMat) code += "\nuniform mat4 u_projMat;";
    len = this.m_varyingNames.length;

    if (RendererDevice_1.default.IsWebGL2()) {
      for (i = 0; i < len; i++) {
        code += "\nout " + this.m_varyingTypes[i] + " " + this.m_varyingNames[i] + ";";
      }
    } else {
      for (i = 0; i < len; i++) {
        code += "\nvarying " + this.m_varyingTypes[i] + " " + this.m_varyingNames[i] + ";";
      }
    }

    if (this.vertMatrixInverseEnabled && RendererDevice_1.default.IsWebGL1()) {
      this.addVertFunction(GLSLConverter_1.default.__glslInverseMat3);
      this.addVertFunction(GLSLConverter_1.default.__glslInverseMat4);
    }

    code += this.m_vertHeadCode;
    i = 0;
    len = this.m_vertFunctionBlocks.length;

    for (; i < len; i++) {
      code += "\n" + this.m_vertFunctionBlocks[i];
    } //  code += this.m_mainBeginCode;


    code += this.m_vertMainCode; //  code += this.m_mainEndCode;

    return code;
  }

}

exports.default = ShaderCodeBuilder2;

/***/ }),

/***/ "29ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const RODrawState_1 = __webpack_require__("7c63");

const RenderConst_1 = __webpack_require__("e08e");

class RendererState {
  static Initialize() {
    if (RendererState.s_initBoo) {
      RendererState.s_initBoo = false;
      let state = RendererState;
      state.Rstate = new RODrawState_1.RODrawState();
      RODrawState_1.RenderColorMask.Rstate = RendererState.Rstate;
      RODrawState_1.RenderStateObject.Rstate = RendererState.Rstate;
      state.COLOR_MASK_ALL_TRUE = RODrawState_1.RenderColorMask.Create("all_true", true, true, true, true);
      state.COLOR_MASK_ALL_FALSE = RODrawState_1.RenderColorMask.Create("all_false", false, false, false, false);
      let rso = RODrawState_1.RenderStateObject;
      let rBlendMode = RenderConst_1.RenderBlendMode;
      rBlendMode.NORMAL = rso.CreateBlendMode("NORMAL", RenderConst_1.GLBlendMode.ONE, RenderConst_1.GLBlendMode.ZERO, RenderConst_1.GLBlendEquation.FUNC_ADD);
      rBlendMode.OPAQUE = rso.CreateBlendMode("OPAQUE", RenderConst_1.GLBlendMode.ONE, RenderConst_1.GLBlendMode.ZERO, RenderConst_1.GLBlendEquation.FUNC_ADD);
      rBlendMode.TRANSPARENT = rso.CreateBlendMode("TRANSPARENT", RenderConst_1.GLBlendMode.SRC_ALPHA, RenderConst_1.GLBlendMode.ONE_MINUS_SRC_ALPHA, RenderConst_1.GLBlendEquation.FUNC_ADD);
      rBlendMode.ALPHA_ADD = rso.CreateBlendMode("ALPHA_ADD", RenderConst_1.GLBlendMode.ONE, RenderConst_1.GLBlendMode.ONE_MINUS_SRC_ALPHA, RenderConst_1.GLBlendEquation.FUNC_ADD);
      rBlendMode.ADD = rso.CreateBlendMode("ADD", RenderConst_1.GLBlendMode.SRC_ALPHA, RenderConst_1.GLBlendMode.ONE, RenderConst_1.GLBlendEquation.FUNC_ADD);
      rBlendMode.ADD_LINEAR = rso.CreateBlendMode("ADD_LINEAR", RenderConst_1.GLBlendMode.ONE, RenderConst_1.GLBlendMode.ONE, RenderConst_1.GLBlendEquation.FUNC_ADD);
      rBlendMode.INVERSE_ALPHA = rso.CreateBlendMode("INVERSE_ALPHA", RenderConst_1.GLBlendMode.ONE, RenderConst_1.GLBlendMode.SRC_ALPHA, RenderConst_1.GLBlendEquation.FUNC_ADD);
      rBlendMode.BLAZE = rso.CreateBlendMode("BLAZE", RenderConst_1.GLBlendMode.SRC_COLOR, RenderConst_1.GLBlendMode.ONE, RenderConst_1.GLBlendEquation.FUNC_ADD);
      rBlendMode.OVERLAY = rso.CreateBlendMode("OVERLAY", RenderConst_1.GLBlendMode.DST_COLOR, RenderConst_1.GLBlendMode.DST_ALPHA, RenderConst_1.GLBlendEquation.FUNC_ADD);
      rBlendMode.OVERLAY2 = rso.CreateBlendMode("OVERLAY2", RenderConst_1.GLBlendMode.DST_COLOR, RenderConst_1.GLBlendMode.SRC_ALPHA, RenderConst_1.GLBlendEquation.FUNC_ADD);
      state.NORMAL_STATE = rso.Create("normal", RenderConst_1.CullFaceMode.BACK, RenderConst_1.RenderBlendMode.NORMAL, RenderConst_1.DepthTestMode.OPAQUE);
      state.BACK_CULLFACE_NORMAL_STATE = state.NORMAL_STATE;
      state.FRONT_CULLFACE_NORMAL_STATE = rso.Create("front_normal", RenderConst_1.CullFaceMode.FRONT, RenderConst_1.RenderBlendMode.NORMAL, RenderConst_1.DepthTestMode.OPAQUE);
      state.NONE_CULLFACE_NORMAL_STATE = rso.Create("none_normal", RenderConst_1.CullFaceMode.NONE, RenderConst_1.RenderBlendMode.NORMAL, RenderConst_1.DepthTestMode.OPAQUE);
      state.ALL_CULLFACE_NORMAL_STATE = rso.Create("all_cull_normal", RenderConst_1.CullFaceMode.FRONT_AND_BACK, RenderConst_1.RenderBlendMode.NORMAL, RenderConst_1.DepthTestMode.OPAQUE);
      state.BACK_NORMAL_ALWAYS_STATE = rso.Create("back_normal_always", RenderConst_1.CullFaceMode.BACK, RenderConst_1.RenderBlendMode.NORMAL, RenderConst_1.DepthTestMode.ALWAYS);
      state.BACK_TRANSPARENT_STATE = rso.Create("back_transparent", RenderConst_1.CullFaceMode.BACK, RenderConst_1.RenderBlendMode.TRANSPARENT, RenderConst_1.DepthTestMode.TRANSPARENT_SORT);
      state.BACK_TRANSPARENT_ALWAYS_STATE = rso.Create("back_transparent_always", RenderConst_1.CullFaceMode.BACK, RenderConst_1.RenderBlendMode.TRANSPARENT, RenderConst_1.DepthTestMode.ALWAYS);
      state.NONE_TRANSPARENT_STATE = rso.Create("none_transparent", RenderConst_1.CullFaceMode.NONE, RenderConst_1.RenderBlendMode.TRANSPARENT, RenderConst_1.DepthTestMode.TRANSPARENT_SORT);
      state.NONE_TRANSPARENT_ALWAYS_STATE = rso.Create("none_transparent_always", RenderConst_1.CullFaceMode.NONE, RenderConst_1.RenderBlendMode.TRANSPARENT, RenderConst_1.DepthTestMode.ALWAYS);
      state.FRONT_CULLFACE_GREATER_STATE = rso.Create("front_greater", RenderConst_1.CullFaceMode.FRONT, RenderConst_1.RenderBlendMode.NORMAL, RenderConst_1.DepthTestMode.TRUE_GREATER);
      state.BACK_ADD_BLENDSORT_STATE = rso.Create("back_add_blendSort", RenderConst_1.CullFaceMode.BACK, RenderConst_1.RenderBlendMode.ADD, RenderConst_1.DepthTestMode.TRANSPARENT_SORT);
      state.BACK_ADD_ALWAYS_STATE = rso.Create("back_add_always", RenderConst_1.CullFaceMode.BACK, RenderConst_1.RenderBlendMode.ADD, RenderConst_1.DepthTestMode.ALWAYS);
      state.BACK_ALPHA_ADD_ALWAYS_STATE = rso.Create("back_alpha_add_always", RenderConst_1.CullFaceMode.BACK, RenderConst_1.RenderBlendMode.ALPHA_ADD, RenderConst_1.DepthTestMode.ALWAYS);
      state.NONE_ADD_ALWAYS_STATE = rso.Create("none_add_always", RenderConst_1.CullFaceMode.NONE, RenderConst_1.RenderBlendMode.ADD, RenderConst_1.DepthTestMode.ALWAYS);
      state.NONE_ADD_BLENDSORT_STATE = rso.Create("none_add_blendSort", RenderConst_1.CullFaceMode.NONE, RenderConst_1.RenderBlendMode.ADD, RenderConst_1.DepthTestMode.TRANSPARENT_SORT);
      state.NONE_ALPHA_ADD_ALWAYS_STATE = rso.Create("none_alpha_add_always", RenderConst_1.CullFaceMode.NONE, RenderConst_1.RenderBlendMode.ALPHA_ADD, RenderConst_1.DepthTestMode.ALWAYS);
      state.FRONT_ADD_ALWAYS_STATE = rso.Create("front_add_always", RenderConst_1.CullFaceMode.FRONT, RenderConst_1.RenderBlendMode.ADD, RenderConst_1.DepthTestMode.ALWAYS);
      state.FRONT_TRANSPARENT_STATE = rso.Create("front_transparent", RenderConst_1.CullFaceMode.FRONT, RenderConst_1.RenderBlendMode.TRANSPARENT, RenderConst_1.DepthTestMode.TRANSPARENT_SORT);
      state.FRONT_TRANSPARENT_ALWAYS_STATE = rso.Create("front_transparent_always", RenderConst_1.CullFaceMode.FRONT, RenderConst_1.RenderBlendMode.TRANSPARENT, RenderConst_1.DepthTestMode.ALWAYS);
      state.NONE_CULLFACE_NORMAL_ALWAYS_STATE = rso.Create("none_normal_always", RenderConst_1.CullFaceMode.NONE, RenderConst_1.RenderBlendMode.NORMAL, RenderConst_1.DepthTestMode.ALWAYS);
      state.BACK_ALPHA_ADD_BLENDSORT_STATE = rso.Create("back_alpha_add_blendSort", RenderConst_1.CullFaceMode.BACK, RenderConst_1.RenderBlendMode.ALPHA_ADD, RenderConst_1.DepthTestMode.TRANSPARENT_SORT);
    }
  }

  static CreateBlendMode(name, srcColor, dstColor, blendEquation = 0) {
    return RODrawState_1.RenderStateObject.CreateBlendMode(name, srcColor, dstColor, blendEquation);
  }

  static CreateBlendModeSeparate(name, srcColor, dstColor, srcAlpha = 0, dstAlpha = 0, blendEquation = 0) {
    return RODrawState_1.RenderStateObject.CreateBlendModeSeparate(name, srcColor, dstColor, srcAlpha, dstAlpha, blendEquation);
  }

  static CreateRenderState(objName, cullFaceMode, blendMode, depthTestMode) {
    return RODrawState_1.RenderStateObject.Create(objName, cullFaceMode, blendMode, depthTestMode);
  }

  static CreateRenderColorMask(objName, rBoo, gBoo, bBoo, aBoo) {
    return RODrawState_1.RenderColorMask.Create(objName, rBoo, gBoo, bBoo, aBoo);
  }

  static GetRenderStateByName(objName) {
    return RODrawState_1.RenderStateObject.GetRenderStateByName(objName);
  }

  static GetRenderColorMaskByName(objName) {
    return RODrawState_1.RenderColorMask.GetColorMaskByName(objName);
  }

  static UnlockBlendMode() {
    RODrawState_1.RenderStateObject.UnlockBlendMode();
  }

  static LockBlendMode(cullFaceMode) {
    RODrawState_1.RenderStateObject.LockBlendMode(cullFaceMode);
  }

  static UnlockDepthTestMode() {
    RODrawState_1.RenderStateObject.UnlockDepthTestMode();
  }

  static LockDepthTestMode(depthTestMode) {
    RODrawState_1.RenderStateObject.LockDepthTestMode(depthTestMode);
  }

  static ResetState() {
    RODrawState_1.RenderColorMask.Reset();
    RODrawState_1.RenderStateObject.Reset();
    RendererState.Rstate.reset();
  }

  static Reset(context) {
    RODrawState_1.RenderColorMask.Reset();
    RODrawState_1.RenderStateObject.Reset();
    RendererState.Rstate.setRenderContext(context);
    RendererState.Rstate.reset();
  }

  static ResetInfo() {
    RendererState.DrawCallTimes = 0;
    RendererState.DrawTrisNumber = 0;
    RendererState.POVNumber = 0;
  }

  static SetDepthTestEnable(enable) {
    RendererState.Rstate.setDepthTestEnable(enable);
  }

  static SetBlendEnable(enable) {
    RendererState.Rstate.setBlendEnable(enable);
  }
  /**
   * 设置 gpu stencilFunc 状态
   * @param func Specifies the test function. Eight symbolic constants are valid: GL_NEVER, GL_LESS, GL_LEQUAL, GL_GREATER, GL_GEQUAL, GL_EQUAL, GL_NOTEQUAL, and GL_ALWAYS. The initial value is GL_ALWAYS.
   * @param ref a GLint type number, value range: [0,2n−1];
   * @param mask GLint type number
   */


  static SetStencilFunc(func, ref, mask) {
    RendererState.Rstate.setStencilFunc(func, ref, mask);
  }
  /**
   * 设置 gpu stencilMask 状态
   * @param mask GLint type number
   */


  static SetStencilMask(mask) {
    RendererState.Rstate.setStencilMask(mask);
  }
  /**
   * 设置 gpu stencilOp 状态
   * @param fail Specifies the action to take when the stencil test fails. Eight symbolic constants are accepted: GL_KEEP, GL_ZERO, GL_REPLACE, GL_INCR, GL_INCR_WRAP, GL_DECR, GL_DECR_WRAP, and GL_INVERT. The initial value is GL_KEEP.
   * @param zfail Specifies the stencil action when the stencil test passes, but the depth test fails. dpfail accepts the same symbolic constants as sfail. The initial value is GL_KEEP.
   * @param zpass Specifies the stencil action when both the stencil test and the depth test pass, or when the stencil test passes and either there is no depth buffer or depth testing is not enabled. dppass accepts the same symbolic constants as sfail. The initial value is GL_KEEP.
   */


  static SetStencilOp(fail, zfail, zpass) {
    RendererState.Rstate.setStencilOp(fail, zfail, zpass);
  }

}

RendererState.s_initBoo = true;
RendererState.Rstate = null;
RendererState.DrawCallTimes = 0;
RendererState.DrawTrisNumber = 0;
RendererState.POVNumber = 0;
RendererState.COLOR_MASK_ALL_TRUE = 0;
RendererState.COLOR_MASK_ALL_FALSE = 1;
RendererState.NORMAL_STATE = 0;
RendererState.BACK_CULLFACE_NORMAL_STATE = 0;
RendererState.FRONT_CULLFACE_NORMAL_STATE = 1;
RendererState.NONE_CULLFACE_NORMAL_STATE = 2;
RendererState.ALL_CULLFACE_NORMAL_STATE = 3;
RendererState.BACK_NORMAL_ALWAYS_STATE = 4;
RendererState.BACK_TRANSPARENT_STATE = 5;
RendererState.BACK_TRANSPARENT_ALWAYS_STATE = 6;
RendererState.NONE_TRANSPARENT_STATE = 7;
RendererState.NONE_TRANSPARENT_ALWAYS_STATE = 8;
RendererState.FRONT_CULLFACE_GREATER_STATE = 9;
RendererState.BACK_ADD_BLENDSORT_STATE = 10;
RendererState.BACK_ADD_ALWAYS_STATE = 11;
RendererState.BACK_ALPHA_ADD_ALWAYS_STATE = 12;
RendererState.NONE_ADD_ALWAYS_STATE = 13;
RendererState.NONE_ADD_BLENDSORT_STATE = 14;
RendererState.NONE_ALPHA_ADD_ALWAYS_STATE = 15;
RendererState.FRONT_ADD_ALWAYS_STATE = 16;
RendererState.FRONT_TRANSPARENT_STATE = 17;
RendererState.FRONT_TRANSPARENT_ALWAYS_STATE = 18;
RendererState.NONE_CULLFACE_NORMAL_ALWAYS_STATE = 19;
RendererState.BACK_ALPHA_ADD_BLENDSORT_STATE = 20;
exports.default = RendererState;

/***/ }),

/***/ "2e8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const MaterialConst_1 = __importDefault(__webpack_require__("644c"));

class AttributeLine {
  constructor() {
    this.type = -1;
    this.attriType = -1;
    this.typeSize = 3;
    this.typeName = "";
    this.name = "";
    this.layoutEnabled = true;
  }

  parseCode(codeStr) {
    const SEMICOLON = ";";
    const SPACE = " "; // 去掉两头的空格

    codeStr = codeStr.replace(/^\s*|\s*$/g, "");
    let i = codeStr.indexOf(SEMICOLON);
    if (i > 0) codeStr = codeStr.slice(0, i);
    let arr = codeStr.split(SPACE);
    this.typeName = arr[arr.length - 2];
    this.name = arr[arr.length - 1];
    this.type = MaterialConst_1.default.GetTypeByTypeNS(this.typeName);
    this.typeSize = parseInt(this.typeName.slice(this.typeName.length - 1));
    this.attriType = VtxBufConst_1.default.GetVBufAttributeTypeByNS(this.name); //trace("Attribute: >"+this.typeName+"<,>"+this.name+"<,>"+this.type+"<,typeSize: >"+this.typeSize+",attriType: "+this.attriType);
  }

}

exports.default = AttributeLine;

/***/ }),

/***/ "32cc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const ShaderUniformData_1 = __importDefault(__webpack_require__("b3bd"));

const ShaderCodeBuffer_1 = __importDefault(__webpack_require__("faa5"));

const MaterialBase_1 = __importDefault(__webpack_require__("0fc4"));

class Line3DShaderBuffer extends ShaderCodeBuffer_1.default {
  constructor() {
    super();
    this.m_uniqueName = "";
    this.dynColorEnabled = false;
  }

  initialize(texEnabled) {
    //console.log("Line3DShaderBuffer::initialize()...");
    this.m_uniqueName = "Line3DShd";

    if (this.dynColorEnabled) {
      this.m_uniqueName += "_dynColor";
    }
  }

  getFragShaderCode() {
    let fragCode = `precision mediump float;
varying vec3 v_vtxColor;
void main()
{
gl_FragColor = vec4(v_vtxColor, 1.0);
}
`;
    return fragCode;
  }

  getVtxShaderCode() {
    let vtxCode = "\
precision mediump float;\n\
attribute vec3 a_vs;\n\
";

    if (this.dynColorEnabled) {
      vtxCode += "\
uniform vec4 u_color;\n\
";
    } else {
      vtxCode += "\
attribute vec3 a_cvs;\n\
";
    }

    vtxCode += `
uniform mat4 u_objMat;
uniform mat4 u_viewMat;
uniform mat4 u_projMat;
varying vec3 v_vtxColor;
void main()
{
vec4 pv = u_projMat * u_viewMat * u_objMat * vec4(a_vs,1.0);
// pixels move offset, and no perspective error.
//  pv.xy = (pv.xy/pv.w - vec2(0.5)) * pv.w;
gl_Position = pv;
`;

    if (this.dynColorEnabled) {
      vtxCode += "\
v_vtxColor = u_color.xyz;\n\
";
    } else {
      vtxCode += "\
v_vtxColor = a_cvs;\n\
";
    }

    vtxCode += "\
}\n\
";
    return vtxCode;
  }

  getUniqueShaderName() {
    //console.log("H ########################### this.m_uniqueName: "+this.m_uniqueName);
    return this.m_uniqueName;
  }

  toString() {
    return "[Line3DShaderBuffer()]";
  }

  static GetInstance() {
    if (Line3DShaderBuffer.s_instance != null) {
      return Line3DShaderBuffer.s_instance;
    }

    Line3DShaderBuffer.s_instance = new Line3DShaderBuffer();
    return Line3DShaderBuffer.s_instance;
  }

}

Line3DShaderBuffer.s_instance = null;

class Line3DMaterial extends MaterialBase_1.default {
  constructor(dynColorEnabled = false) {
    super();
    this.m_dynColorEnabled = false;
    this.m_colorArray = null;

    if (dynColorEnabled) {
      this.m_colorArray = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    }

    this.m_dynColorEnabled = dynColorEnabled;
  }

  getCodeBuf() {
    Line3DShaderBuffer.GetInstance().dynColorEnabled = this.m_dynColorEnabled;
    return Line3DShaderBuffer.GetInstance();
  }

  setRGB3f(pr, pg, pb) {
    if (this.m_colorArray != null) {
      this.m_colorArray[0] = pr;
      this.m_colorArray[1] = pg;
      this.m_colorArray[2] = pb;
    }
  }

  createSelfUniformData() {
    if (this.m_dynColorEnabled) {
      let oum = new ShaderUniformData_1.default();
      oum.uniformNameList = ["u_color"];
      oum.dataList = [this.m_colorArray];
      return oum;
    }

    return null;
  }

}

exports.default = Line3DMaterial;

/***/ }),

/***/ "35fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

class SurfaceNormalCalc {
  /**
  * calc a triangle's normal,cw is positive, right hand rule. there is calc result is positive.
  */
  static ClacTriNormal(va, vb, vc, resultNormal) {
    Vector3D_1.default.Subtract(vb, va, SurfaceNormalCalc.s_temp_vb);
    Vector3D_1.default.Subtract(vc, vb, SurfaceNormalCalc.s_temp_vc);
    Vector3D_1.default.Cross(SurfaceNormalCalc.s_temp_vb, SurfaceNormalCalc.s_temp_vc, resultNormal);
    resultNormal.normalize();
  }
  /**
  * calc a triangle's normal,cw is positive, right hand rule. there is calc result is positive.
  * @param verteies			verteies's length is N multiple 9
  * @param triangleIndex		triangle index of triangles
  * @param resultNormal		result normalize Vector3D normal
  */


  static ClacTriNormalByVS(verteies, triangleIndex, resultNormal) {
    let i = triangleIndex * 9;
    SurfaceNormalCalc.s_temp_va.setTo(verteies[i], verteies[i + 1], verteies[i + 2]);
    resultNormal.setTo(verteies[i + 3], verteies[i + 4], verteies[i + 5]);
    SurfaceNormalCalc.s_temp_vc.setTo(verteies[i + 6], verteies[i + 7], verteies[i + 8]);
    resultNormal.subtractBy(SurfaceNormalCalc.s_temp_va);
    SurfaceNormalCalc.s_temp_vc.subtractBy(SurfaceNormalCalc.s_temp_va); //vox::kernel::geom::Vector3D::cross(vb, vc, resultNormal);

    resultNormal.crossBy(SurfaceNormalCalc.s_temp_vc);
    resultNormal.normalize();
  }

  static ClacTriNormalByIVS(verteies, triangleIndex, indices, resultNormal) {
    let j = triangleIndex * 3;
    let i = indices[j] * 3;
    SurfaceNormalCalc.s_temp_va.setTo(verteies[i], verteies[i + 1], verteies[i + 2]);
    i = indices[j + 1] * 3;
    resultNormal.setTo(verteies[i], verteies[i + 1], verteies[i + 2]);
    i = indices[j + 2] * 3;
    SurfaceNormalCalc.s_temp_vc.setTo(verteies[i], verteies[i + 1], verteies[i + 2]); //trace(triangleIndex, ", v3a: ", SurfaceNormalCalc.s_temp_va, ", v3b: ", resultNormal, ", v3c: ", SurfaceNormalCalc.s_temp_vc);

    resultNormal.subtractBy(SurfaceNormalCalc.s_temp_va);
    SurfaceNormalCalc.s_temp_vc.subtractBy(SurfaceNormalCalc.s_temp_va);
    resultNormal.crossBy(SurfaceNormalCalc.s_temp_vc);
    resultNormal.normalize(); //trace("						normal: ", resultNormal);
  }

  static ClacTrisNormal(verteies, verteiesLength, numTriangles, indices, normals) {
    let v3 = new Vector3D_1.default();
    let j = 0,
        k = 0,
        i = 0;

    for (i = 0; i < verteiesLength; ++i) {
      normals[i] = 0.0;
    }

    for (i = 0; i < numTriangles; ++i) {
      SurfaceNormalCalc.ClacTriNormalByIVS(verteies, i, indices, v3);
      j = i * 3;
      k = indices[j] * 3;
      normals[k] += v3.x;
      normals[k + 1] += v3.y;
      normals[k + 2] += v3.z;
      k = indices[j + 1] * 3;
      normals[k] += v3.x;
      normals[k + 1] += v3.y;
      normals[k + 2] += v3.z;
      k = indices[j + 2] * 3;
      normals[k] += v3.x;
      normals[k + 1] += v3.y;
      normals[k + 2] += v3.z;
    }

    for (i = 0; i < verteiesLength; i += 3) {
      SurfaceNormalCalc.s_temp_va.setTo(normals[i], normals[i + 1], normals[i + 2]);
      SurfaceNormalCalc.s_temp_va.normalize();
      normals[i] = SurfaceNormalCalc.s_temp_va.x;
      normals[i + 1] = SurfaceNormalCalc.s_temp_va.y;
      normals[i + 2] = SurfaceNormalCalc.s_temp_va.z;
    }
  }

  static ClacTriTangent(verteies, uvs, nvs, triangleIndex, indices, tangent, biTangent) {
    let j = triangleIndex * 3; // pos

    let i = indices[j] * 3;
    SurfaceNormalCalc.s_temp_va.setTo(nvs[i], nvs[i + 1], nvs[i + 2]);
    SurfaceNormalCalc.s_temp_va.setTo(verteies[i], verteies[i + 1], verteies[i + 2]);
    i = indices[j + 1] * 3;
    SurfaceNormalCalc.s_temp_vb.setTo(verteies[i], verteies[i + 1], verteies[i + 2]);
    i = indices[j + 2] * 3;
    SurfaceNormalCalc.s_temp_vc.setTo(verteies[i], verteies[i + 1], verteies[i + 2]); // uv

    i = indices[j] * 2;
    SurfaceNormalCalc.s_temp_vd.setTo(uvs[i], uvs[i + 1], 0.0);
    i = indices[j + 1] * 2;
    SurfaceNormalCalc.s_temp_ve.setTo(uvs[i], uvs[i + 1], 0.0);
    i = indices[j + 2] * 2;
    SurfaceNormalCalc.s_temp_vf.setTo(uvs[i], uvs[i + 1], 0.0); // edges of pos

    SurfaceNormalCalc.s_temp_vb.subtractBy(SurfaceNormalCalc.s_temp_va);
    SurfaceNormalCalc.s_temp_vc.subtractBy(SurfaceNormalCalc.s_temp_va);
    SurfaceNormalCalc.s_temp_ve.subtractBy(SurfaceNormalCalc.s_temp_vd);
    SurfaceNormalCalc.s_temp_vf.subtractBy(SurfaceNormalCalc.s_temp_vd);
    let dt = 1.0 / (SurfaceNormalCalc.s_temp_ve.x * SurfaceNormalCalc.s_temp_vf.y - SurfaceNormalCalc.s_temp_ve.y * SurfaceNormalCalc.s_temp_vf.x);
    tangent.copyFrom(SurfaceNormalCalc.s_temp_vb);
    tangent.scaleBy(SurfaceNormalCalc.s_temp_vf.y);
    SurfaceNormalCalc.s_temp_va.copyFrom(SurfaceNormalCalc.s_temp_vc);
    SurfaceNormalCalc.s_temp_va.scaleBy(SurfaceNormalCalc.s_temp_ve.y);
    tangent.subtractBy(SurfaceNormalCalc.s_temp_va);
    tangent.scaleBy(dt);
    tangent.normalize();
    biTangent.copyFrom(SurfaceNormalCalc.s_temp_vc);
    biTangent.scaleBy(SurfaceNormalCalc.s_temp_ve.x);
    SurfaceNormalCalc.s_temp_va.copyFrom(SurfaceNormalCalc.s_temp_vb);
    SurfaceNormalCalc.s_temp_va.scaleBy(SurfaceNormalCalc.s_temp_vf.x);
    biTangent.subtractBy(SurfaceNormalCalc.s_temp_va);
    biTangent.scaleBy(dt);
    biTangent.normalize(); //*/
  }

  static ClacTrisTangent(verteies, verteiesLength, uvs, nvs, numTriangles, indices, tangent, biTangent) {
    let tv3 = new Vector3D_1.default(),
        btv3 = new Vector3D_1.default();
    let j = 0,
        k = 0,
        i = 0;

    for (i = 0; i < verteiesLength; ++i) {
      tangent[i] = 0.0;
      biTangent[i] = 0.0;
    }

    for (i = 0; i < numTriangles; ++i) {
      SurfaceNormalCalc.ClacTriTangent(verteies, uvs, nvs, i, indices, tv3, btv3);
      j = i * 3;
      k = indices[j] * 3;
      tangent[k] = tv3.x;
      tangent[k + 1] = tv3.y;
      tangent[k + 2] = tv3.z;
      biTangent[k] = btv3.x;
      biTangent[k + 1] = btv3.y;
      biTangent[k + 2] = btv3.z;
      k = indices[j + 1] * 3;
      tangent[k] = tv3.x;
      tangent[k + 1] = tv3.y;
      tangent[k + 2] = tv3.z;
      biTangent[k] = btv3.x;
      biTangent[k + 1] = btv3.y;
      biTangent[k + 2] = btv3.z;
      k = indices[j + 2] * 3;
      tangent[k] = tv3.x;
      tangent[k + 1] = tv3.y;
      tangent[k + 2] = tv3.z;
      biTangent[k] = btv3.x;
      biTangent[k + 1] = btv3.y;
      biTangent[k + 2] = btv3.z;
    }

    for (i = 0; i < verteiesLength; i += 3) {
      SurfaceNormalCalc.s_temp_vd.setTo(tangent[i], tangent[i + 1], tangent[i + 2]);
      SurfaceNormalCalc.s_temp_vd.normalize();
      SurfaceNormalCalc.s_temp_vb.setTo(biTangent[i], biTangent[i + 1], biTangent[i + 2]);
      SurfaceNormalCalc.s_temp_vb.normalize();
      SurfaceNormalCalc.s_temp_vc.setTo(nvs[i], nvs[i + 1], nvs[i + 2]);
      SurfaceNormalCalc.s_temp_va.copyFrom(SurfaceNormalCalc.s_temp_vc);
      SurfaceNormalCalc.s_temp_vc.scaleBy(SurfaceNormalCalc.s_temp_vc.dot(SurfaceNormalCalc.s_temp_vd));
      SurfaceNormalCalc.s_temp_vd.subtractBy(SurfaceNormalCalc.s_temp_vc);
      SurfaceNormalCalc.s_temp_vd.normalize(); //b = b - n * dot( b, n )

      SurfaceNormalCalc.s_temp_vc.setTo(nvs[i], nvs[i + 1], nvs[i + 2]);
      SurfaceNormalCalc.s_temp_vc.scaleBy(SurfaceNormalCalc.s_temp_vb.dot(SurfaceNormalCalc.s_temp_vc));
      SurfaceNormalCalc.s_temp_vb.subtractBy(SurfaceNormalCalc.s_temp_vc);
      SurfaceNormalCalc.s_temp_vb.normalize();
      SurfaceNormalCalc.s_temp_va.crossBy(SurfaceNormalCalc.s_temp_vd);

      if (SurfaceNormalCalc.s_temp_va.dot(SurfaceNormalCalc.s_temp_vb) < 0.0) {
        SurfaceNormalCalc.s_temp_vd.scaleBy(-1.0);
      }

      tangent[i] = SurfaceNormalCalc.s_temp_vd.x;
      tangent[i + 1] = SurfaceNormalCalc.s_temp_vd.y;
      tangent[i + 2] = SurfaceNormalCalc.s_temp_vd.z;
      SurfaceNormalCalc.s_temp_vb.setTo(nvs[i], nvs[i + 1], nvs[i + 2]);
      SurfaceNormalCalc.s_temp_vb.crossBy(SurfaceNormalCalc.s_temp_vd);
      SurfaceNormalCalc.s_temp_vb.normalize();
      biTangent[i] = SurfaceNormalCalc.s_temp_vb.x;
      biTangent[i + 1] = SurfaceNormalCalc.s_temp_vb.y;
      biTangent[i + 2] = SurfaceNormalCalc.s_temp_vb.z;
    }
  }

}

SurfaceNormalCalc.s_temp_va = new Vector3D_1.default();
SurfaceNormalCalc.s_temp_vb = new Vector3D_1.default();
SurfaceNormalCalc.s_temp_vc = new Vector3D_1.default();
SurfaceNormalCalc.s_temp_vd = new Vector3D_1.default();
SurfaceNormalCalc.s_temp_ve = new Vector3D_1.default();
SurfaceNormalCalc.s_temp_vf = new Vector3D_1.default();
SurfaceNormalCalc.s_temp_vg = new Vector3D_1.default();
exports.default = SurfaceNormalCalc;

/***/ }),

/***/ "38de":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const MathConst_1 = __importDefault(__webpack_require__("6e01"));

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const AbsGeomBase_1 = __importDefault(__webpack_require__("f48d")); //import PlaneCalc = PlaneCalcT.vox.geom.PlaneCalc;


class RadialLine extends AbsGeomBase_1.default {
  constructor() {
    super(...arguments);
    this.tv = new Vector3D_1.default(1.0, 0.0, 0.0);
  }

  update() {
    this.tv.normalize();
  }

  updateFast() {
    this.tv.normalize();
  } // 射线和三个点表示的三角形是否相交


  static IntersectionTri(rlpv, rltv, triva, trivb, trivc, outV) {
    return 0;
  } // 射线和两个点表示的线段是否相交


  static IntersectionLS(rlpv, rltv, lspva, lspvb, outV, radius = 1.0) {
    let pv = RadialLine.__tAv;
    pv.copyFrom(lspvb);
    pv.subtractBy(lspva);
    pv.normalize();
    Vector3D_1.default.Cross(rltv, pv, outV);
    outV.normalize();
    pv.w = outV.dot(rlpv) - outV.dot(lspvb);

    if (Math.abs(pv.w) <= radius) {
      // 两条直线已经相交
      // outV 和 rlpv rltv 计算构成了一个平面
      outV.crossBy(rltv);
      outV.normalize();
      outV.w = outV.dot(rlpv); // 计算 lspva 所在的直线与平面的交点
      //let tv2:Vector3D = AbsGeomBase.__tV1;

      pv.w = (outV.w - outV.dot(lspva)) / pv.dot(outV);
      outV.copyFrom(pv);
      outV.scaleBy(pv.w);
      outV.addBy(lspva);
      pv.copyFrom(outV);
      pv.subtractBy(lspva);
      let pv1 = AbsGeomBase_1.default.__tV1;
      pv1.copyFrom(outV);
      pv1.subtractBy(lspvb);

      if (pv.dot(pv1) <= 0.0) {
        return 1;
      }
    }

    return 0;
  } // @return 检测得到距离射线起点最近的点, 1表示相交,1表示不相交


  static IntersectioNearSphere2(rlpv, rltv, cv, radius, outV) {
    let pv = RadialLine.__tAv;
    pv.x = cv.x - rlpv.x;
    pv.y = cv.y - rlpv.y;
    pv.z = cv.z - rlpv.z;
    pv.w = pv.dot(rltv);
    radius *= radius;

    if (pv.w > MathConst_1.default.MATH_MIN_POSITIVE) {
      outV.copyFrom(rltv);
      outV.scaleBy(pv.w);
      outV.subtractBy(pv);
      pv.x = outV.getLengthSquared();

      if (pv.x <= radius) {
        // 远距离
        //outV.w = pv.w + Math.sqrt(radius * radius - outV.getLengthSquared());
        // 取近距离
        pv.w -= Math.sqrt(radius - pv.x);
        outV.copyFrom(rltv);
        outV.scaleBy(pv.w);
        outV.addBy(rlpv);
        outV.w = 1.0;
        return 1;
      }
    } else if (pv.getLengthSquared() <= radius) {
      outV.copyFrom(rltv);
      outV.scaleBy(pv.w);
      outV.subtractBy(pv);
      pv.x = outV.getLengthSquared();

      if (pv.x <= radius) {
        // 取远距离
        pv.w += Math.sqrt(radius - pv.x);
        outV.copyFrom(rltv);
        outV.scaleBy(pv.w);
        outV.addBy(rlpv);
        outV.w = 1.0;
        return 1;
      }
    }

    return 0;
  } // @return 检测得到距离射线起点最近的点, 1表示相交,0表示不相交


  static IntersectioNearSphere(rlpv, rltv, cv, radius, outV) {
    let pv = RadialLine.__tAv;
    pv.x = cv.x - rlpv.x;
    pv.y = cv.y - rlpv.y;
    pv.z = cv.z - rlpv.z;
    pv.w = pv.dot(rltv);

    if (pv.w > MathConst_1.default.MATH_MIN_POSITIVE) {
      outV.x = pv.x - pv.w * rltv.x;
      outV.y = pv.y - pv.w * rltv.y;
      outV.z = pv.z - pv.w * rltv.z;
      outV.x = outV.getLengthSquared();
      outV.w = radius * radius;

      if (outV.x <= outV.w) {
        // rlpv到远交点记作XP, rlpv到球心记作CP, CP到远交点记作RP
        // 通过余弦定律得到一元二次方程得并且解这个方程得到 XP 的距离
        // 获得CP距离的平方值
        outV.x = pv.getLengthSquared(); // RP距离的平方值 减去 CP距离的平方值

        outV.z = outV.w - outV.x; //	// 获得CP距离值
        //	outV.w = Math.sqrt(outV.x);
        // 准备计算 CP和XP 之间夹角a的余弦值, cos(a)值

        pv.normalize(); // cos(a) 值 和 CP距离值相乘
        //pv.y = pv.dot(rltv) * outV.w;

        outV.y = pv.dot(rltv) * Math.sqrt(outV.x); // 求解方程的根,得到近些的距离

        pv.w = (-outV.y + Math.sqrt(outV.y * outV.y + 4.0 * outV.z)) * 0.5;
        outV.copyFrom(rltv);
        outV.scaleBy(pv.w);
        outV.addBy(rlpv);
        outV.w = 1.0;
        return 1;
      }
    } else {
      outV.x = pv.getLengthSquared();
      outV.w = radius * radius;

      if (outV.x <= outV.w) {
        outV.z = outV.w - outV.x;
        pv.normalize();
        outV.y = pv.dot(rltv) * Math.sqrt(outV.x); // 求解方程的根,得到远些的距离

        pv.w = (-outV.y + Math.sqrt(outV.y * outV.y + 4.0 * outV.z)) * 0.5;
        outV.copyFrom(rltv);
        outV.scaleBy(pv.w);
        outV.addBy(rlpv);
        outV.w = 1.0;
        return 1;
      }
    }

    return 0;
  }

  static IntersectSphere(rlpv, rltv, cv, radius) {
    let pv = RadialLine.__tAv;
    pv.x = cv.x - rlpv.x;
    pv.y = cv.y - rlpv.y;
    pv.z = cv.z - rlpv.z;
    pv.w = pv.dot(rltv);

    if (pv.w < MathConst_1.default.MATH_MIN_POSITIVE) {
      return pv.getLengthSquared() <= radius * radius;
    }

    pv.x -= pv.w * rltv.x;
    pv.y -= pv.w * rltv.y;
    pv.z -= pv.w * rltv.z;
    return pv.getLengthSquared() <= radius * radius;
  }

}

RadialLine.__tAv = new Vector3D_1.default();
exports.default = RadialLine;

/***/ }),

/***/ "3930":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

const MathConst_1 = __importDefault(__webpack_require__("6e01"));

class Color4 {
  constructor(pr = 1.0, pg = 1.0, pb = 1.0, pa = 1.0) {
    this.r = 1.0;
    this.g = 1.0;
    this.b = 1.0;
    this.a = 1.0;
    this.r = pr;
    this.g = pg;
    this.b = pb;
    this.a = pa;
  }

  setRGB3Bytes(r, g, b) {
    this.r = r / 255.0;
    this.g = g / 255.0;
    this.b = b / 255.0;
  }

  setRGB3f(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  setRGBUint24(rgbUint24) {
    this.r = (rgbUint24 >> 16 & 0x0000ff) / 255.0;
    this.g = (rgbUint24 >> 8 & 0x0000ff) / 255.0;
    this.b = (rgbUint24 & 0x0000ff) / 255.0;
  }

  setRGBA4f(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  copyFrom(c) {
    this.r = c.r;
    this.g = c.g;
    this.b = c.b;
    this.a = c.a;
  }

  scaleBy(s) {
    this.r *= s;
    this.g *= s;
    this.b *= s;
  }

  inverseRGB() {
    this.r = 1.0 - this.r;
    this.g = 1.0 - this.g;
    this.b = 1.0 - this.b;
  }

  randomRGB(density = 1.0) {
    this.r = Math.random() * density;
    this.g = Math.random() * density;
    this.b = Math.random() * density;
  }

  normalizeRandom(density = 1.0) {
    this.r = Math.random();
    this.g = Math.random();
    this.b = Math.random();
    let d = Math.sqrt(this.r * this.r + this.g * this.g + this.b * this.b);

    if (d > MathConst_1.default.MATH_MIN_POSITIVE) {
      this.r = density * this.r / d;
      this.g = density * this.g / d;
      this.b = density * this.b / d;
    }
  }

  normalize(density) {
    if (density == undefined) density = 1.0;
    let d = Math.sqrt(this.r * this.r + this.g * this.g + this.b * this.b);

    if (d > MathConst_1.default.MATH_MIN_POSITIVE) {
      this.r = density * this.r / d;
      this.g = density * this.g / d;
      this.b = density * this.b / d;
    }
  }
  /**
   * @returns for example: rgba(255,255,255,1.0)
   */


  getCSSDecRGBAColor() {
    return "rgba(" + Math.floor(this.r * 255.0) + "," + Math.floor(this.g * 255.0) + "," + Math.floor(this.b * 255.0) + "," + this.a.toFixed(4) + ")";
  }
  /**
   * @returns for example: #350b7e
   */


  getCSSHeXRGBColor() {
    let str = "#";
    let t = Math.floor(this.r * 255.0);

    if (t < 0xf) {
      str += "0" + t.toString(16);
    } else {
      str += "" + t.toString(16);
    }

    t = Math.floor(this.g * 255.0);

    if (t < 0xf) {
      str += "0" + t.toString(16);
    } else {
      str += "" + t.toString(16);
    }

    t = Math.floor(this.b * 255.0);

    if (t < 0xf) {
      str += "0" + t.toString(16);
    } else {
      str += "" + t.toString(16);
    }

    return str;
  }

  toString() {
    return "[Color4(r=" + this.r + ", g=" + this.g + ",b=" + this.b + ",a=" + this.a + ")]";
  }

}

exports.default = Color4;

/***/ }),

/***/ "3b73":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class RendererDevice {
  static SetLanguage(language) {
    RendererDevice.s_language = language;
  }

  static GetLanguage() {
    return RendererDevice.s_language;
  }

  static SetThreadEnabled(boo) {
    RendererDevice.s_threadEnabled = boo;
  }

  static GetThreadEnabled() {
    return RendererDevice.s_threadEnabled;
  }

  static GetDebugEnabled() {
    return RendererDevice.s_debugEnabled;
  }

  static SetDebugEnabled(boo) {
    RendererDevice.s_debugEnabled = boo;
  }

  static SetDevicePixelRatio(dpr) {
    RendererDevice.s_devicePixelRatio = dpr;
  }

  static GetDevicePixelRatio() {
    return RendererDevice.s_devicePixelRatio;
  }

  static Initialize(infoArr) {
    if (RendererDevice.s_inited) {
      RendererDevice.s_inited = false;
      RendererDevice.s_WEBGL_VER = infoArr[0];
      RendererDevice.TestMobileWeb();
      RendererDevice.s_language = navigator.language + "";
    }
  }

  static IsWebGL1() {
    return RendererDevice.s_WEBGL_VER == 1;
  }

  static IsWebGL2() {
    return RendererDevice.s_WEBGL_VER == 2;
  }

  static IsMobileWeb() {
    if (RendererDevice.s_mobileFlag > 0) {
      return RendererDevice.s_mobileFlag == 2;
    }

    return RendererDevice.TestMobileWeb();
  }

  static IsIOS() {
    if (RendererDevice.s_IOS_Flag > 0) {
      return RendererDevice.s_IOS_Flag == 2;
    }

    let boo = false;

    if (/iPad|iPhone|iPod/.test(navigator.platform)) {
      boo = true;
    } else {
      boo = navigator.maxTouchPoints != undefined && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform);
    }

    RendererDevice.s_IOS_Flag = boo ? 2 : 1;
    return boo;
  }

  static IsIpadOS() {
    if (RendererDevice.s_IPad_Flag > 0) {
      return RendererDevice.s_IPad_Flag == 2;
    }

    let boo = navigator.maxTouchPoints > 0 && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform);

    if (!boo && /iPod|iPad|iPadPro|iPodPro/i.test(navigator.userAgent)) {
      boo = true;
    }

    RendererDevice.s_IPad_Flag = boo ? 2 : 1;
    return boo;
  }

  static IsAndroidOS() {
    if (RendererDevice.s_Android_Flag > 0) {
      return RendererDevice.s_Android_Flag == 2;
    }

    let boo = RendererDevice.TestMobileWeb();

    if (boo && /Android|Linux/i.test(navigator.userAgent)) {
      boo = true;
    } else {
      boo = false;
    }

    RendererDevice.s_Android_Flag = boo ? 2 : 1;
    return boo;
  }

  static TestMobileWeb() {
    if (RendererDevice.s_mobileFlag > 0) {
      return RendererDevice.s_mobileFlag == 2;
    }

    if (/mobile/.test(location.href)) {
      RendererDevice.s_mobileFlag = 2;
      return RendererDevice.s_mobileFlag == 2;
    }

    if (/Android/i.test(navigator.userAgent)) {
      if (/Mobile/i.test(navigator.userAgent)) {
        RendererDevice.s_mobileFlag = 2;
        return RendererDevice.s_mobileFlag == 2;
      } else {
        RendererDevice.s_mobileFlag = 1;
        return RendererDevice.s_mobileFlag == 2;
      }
    } else if (/webOS|iPhone|iPod|iPad|iPodPro|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      RendererDevice.s_mobileFlag = 2;
      return RendererDevice.s_mobileFlag == 2;
    }

    RendererDevice.s_mobileFlag = 1;
    return RendererDevice.s_mobileFlag == 2;
  }

}

RendererDevice.s_inited = true;
RendererDevice.s_WEBGL_VER = 2;
RendererDevice.s_devicePixelRatio = 1.0;
RendererDevice.s_mobileFlag = 0;
RendererDevice.s_Android_Flag = 0;
RendererDevice.s_IOS_Flag = 0;
RendererDevice.s_IPad_Flag = 0;
/**
 * zh-CN, en-US, ect....
 */

RendererDevice.s_language = "zh-CN";
RendererDevice.s_debugEnabled = true;
RendererDevice.GPU_VENDOR = "unknown";
RendererDevice.GPU_RENDERER = "unknown";
RendererDevice.MAX_TEXTURE_SIZE = 4096;
RendererDevice.MAX_RENDERBUFFER_SIZE = 4096;
RendererDevice.MAX_VIEWPORT_WIDTH = 4096;
RendererDevice.MAX_VIEWPORT_HEIGHT = 4096; // for debug

RendererDevice.SHOWLOG_ENABLED = false;
RendererDevice.SHADERCODE_TRACE_ENABLED = false; // true: force vertex shader precision to highp

RendererDevice.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true; // true: force fragment shader precision to highp

RendererDevice.FRAG_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true; // worker multi threads enabled yes or no

RendererDevice.s_threadEnabled = true;
exports.default = RendererDevice;

/***/ }),

/***/ "3bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const MathConst_1 = __importDefault(__webpack_require__("6e01"));

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const SurfaceNormalCalc_1 = __importDefault(__webpack_require__("35fa"));

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const ROVertexBuffer_1 = __importDefault(__webpack_require__("e7d2"));

const VtxBufConst_2 = __webpack_require__("8a0a");

const AABB_1 = __importDefault(__webpack_require__("fecb"));

const MeshBase_1 = __importDefault(__webpack_require__("cb29"));

class Box3DMesh extends MeshBase_1.default {
  constructor(bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    super(bufDataUsage);
    this.m_posList = [null, null, null, null, null, null, null, null];
    this.m_pos = new Vector3D_1.default();
    this.normalType = VtxBufConst_2.VtxNormalType.FLAT;
    this.m_vs = null;
    this.m_uvs = null;
    this.m_nvs = null;
    this.m_cvs = null;
    this.flipVerticalUV = false;
    this.uvPartsNumber = 0;
  }

  getVS() {
    return this.m_vs;
  }

  getUVS() {
    return this.m_uvs;
  }

  getNVS() {
    return this.m_nvs;
  }

  getCVS() {
    return this.m_cvs;
  }

  setPositionAt(i, position) {
    if (i >= 0 && i < 8) {
      if (this.m_vs != null) {
        let arr = this.m_posList[i];
        arr[0] = position.x;
        arr[1] = position.y;
        arr[2] = position.z;
      }
    }
  }

  getPositionAt(i, position) {
    if (i >= 0 && i < 8) {
      if (this.m_vs != null) {
        let arr = this.m_posList[i];
        position.x = arr[0];
        position.y = arr[1];
        position.z = arr[2];
      }
    }
  }

  setEdgeAt(i, lsPA, lsPB) {
    if (i >= 0 && i < 8) {
      if (this.m_vs != null) {
        let arr0 = this.m_posList[i];
        i++;
        if (i == 3) i = 0;else if (i == 7) i = 4;
        let arr1 = this.m_posList[i];
        arr0[0] = lsPA.x;
        arr0[1] = lsPA.y;
        arr0[2] = lsPA.z;
        arr1[0] = lsPB.x;
        arr1[1] = lsPB.y;
        arr1[2] = lsPB.z;
      }
    }
  }

  getEdgeAt(i, lsPA, lsPB) {
    if (i >= 0 && i < 8) {
      if (this.m_vs != null) {
        let arr0 = this.m_posList[i];
        i++;
        if (i == 3) i = 0;else if (i == 7) i = 4;
        let arr1 = this.m_posList[i];
        lsPA.x = arr0[0];
        lsPA.y = arr0[1];
        lsPA.z = arr0[2];
        lsPB.x = arr1[0];
        lsPB.y = arr1[1];
        lsPB.z = arr1[2];
      }
    }
  }

  setFaceAt(i, lsPA, lsPB, lsPC, lsPD) {
    if (i >= 0 && i < 8) {
      if (this.m_vs != null) {
        i *= 4;
        let posList = [lsPA, lsPB, lsPC, lsPD];
        let idList = Box3DMesh.s_facePosIds;
        let list = this.m_posList;
        let arr;
        let pos;

        for (let iMax = i + 4, j = 0; i < iMax; ++i) {
          arr = list[idList[i]];
          pos = posList[j++];
          arr[0] = pos.x;
          arr[1] = pos.y;
          arr[2] = pos.z;
        }
      }
    }
  }

  getFaceAt(i, lsPA, lsPB, lsPC, lsPD) {
    if (i >= 0 && i < 8) {
      if (this.m_vs != null) {
        i *= 4;
        let posList = [lsPA, lsPB, lsPC, lsPD];
        let idList = Box3DMesh.s_facePosIds;
        let list = this.m_posList;
        let arr;
        let pos;

        for (let iMax = i + 4, j = 0; i < iMax; ++i) {
          arr = list[idList[i]];
          pos = posList[j++];
          pos.x = arr[0];
          pos.y = arr[1];
          pos.z = arr[2];
        }
      }
    }
  }

  getFaceCenterAt(i, outV) {
    if (i >= 0 && i < 8) {
      if (this.m_vs != null) {
        i *= 4;
        let idList = Box3DMesh.s_facePosIds;
        let list = this.m_posList;
        let arr;
        outV.setXYZ(0.0, 0.0, 0.0);

        for (let iMax = i + 4; i < iMax; ++i) {
          arr = list[idList[i]];
          outV.x += arr[0];
          outV.y += arr[1];
          outV.z += arr[2];
        }

        outV.scaleBy(0.33333);
      }
    }
  }

  transformFaceAt(i, mat4) {
    if (i >= 0 && i < 8) {
      if (this.m_vs != null) {
        i *= 4;
        let idList = Box3DMesh.s_facePosIds;
        let list = this.m_posList;

        for (let iMax = i + 4; i < iMax; ++i) {
          mat4.transformVectorsSelf(list[idList[i]], 3);
        }
      }
    }
  }

  initializeWithYFace(bottomFaceMinV, bottomFaceMaxV, topFaceMinV, topFaceMaxV) {
    let minV = bottomFaceMinV;
    let maxV = bottomFaceMaxV;
    let minY = (minV.y + maxV.y) * 0.5;
    this.m_posList[0] = [maxV.x, minY, maxV.z];
    this.m_posList[1] = [maxV.x, minY, minV.z];
    this.m_posList[2] = [minV.x, minY, minV.z];
    this.m_posList[3] = [minV.x, minY, maxV.z];
    minV = topFaceMinV;
    maxV = topFaceMaxV;
    let maxY = (minV.y + maxV.y) * 0.5;
    this.m_posList[4] = [maxV.x, maxY, maxV.z];
    this.m_posList[5] = [maxV.x, maxY, minV.z];
    this.m_posList[6] = [minV.x, maxY, minV.z];
    this.m_posList[7] = [minV.x, maxY, maxV.z];
    this.initData(this.m_posList);
  }

  initialize(minV, maxV) {
    this.m_posList[0] = [maxV.x, minV.y, maxV.z];
    this.m_posList[1] = [maxV.x, minV.y, minV.z];
    this.m_posList[2] = [minV.x, minV.y, minV.z];
    this.m_posList[3] = [minV.x, minV.y, maxV.z];
    this.m_posList[4] = [maxV.x, maxV.y, maxV.z];
    this.m_posList[5] = [maxV.x, maxV.y, minV.z];
    this.m_posList[6] = [minV.x, maxV.y, minV.z];
    this.m_posList[7] = [minV.x, maxV.y, maxV.z];
    this.initData(this.m_posList);
  }

  scaleUVFaceAt(faceI, u, v, du, dv) {
    if (this.m_uvs != null && faceI >= 0 && faceI < 6) {
      let i = faceI * 8;
      let t = i + 8;
      let uvs = this.m_uvs;

      for (; i < t; i += 2) {
        uvs[i] = u + uvs[i] * du;
        uvs[i + 1] = v + uvs[i + 1] * dv;
      }
    }
  }

  reinitialize() {
    this.initData(this.m_posList);
  }

  initData(posList) {
    this.vtxTotal = 24;
    let i = 0;
    let k = 0;
    let baseI = 0;
    let newBuild = this.m_ivs == null;

    if (newBuild) {
      this.m_vs = new Float32Array(72);
      this.m_ivs = new Uint16Array(36);
      let flags = [3, 2, 3, 3, 2, 2];

      for (i = 0; i < 6; ++i) {
        if (flags[i] == 3) {
          this.m_ivs[baseI] = k + 3;
          this.m_ivs[baseI + 1] = k + 2;
          this.m_ivs[baseI + 2] = k + 1;
          this.m_ivs[baseI + 3] = k + 3;
          this.m_ivs[baseI + 4] = k + 1;
          this.m_ivs[baseI + 5] = k;
        } else {
          this.m_ivs[baseI] = k + 2;
          this.m_ivs[baseI + 1] = k + 3;
          this.m_ivs[baseI + 2] = k;
          this.m_ivs[baseI + 3] = k + 2;
          this.m_ivs[baseI + 4] = k;
          this.m_ivs[baseI + 5] = k + 1;
        }

        baseI += 6;
        k += 4;
      }
    }

    let idList = Box3DMesh.s_facePosIds;
    let list = this.m_posList;
    let arr;
    let pvs = this.m_vs;
    k = 0;

    for (i = 0; i < this.vtxTotal; ++i) {
      arr = list[idList[i]];
      pvs.set(arr, k);
      k += 3;
    }

    this.bounds = new AABB_1.default();

    if (this.m_transMatrix != null) {
      this.m_transMatrix.transformVectorsSelf(this.m_vs, this.m_vs.length);
      this.bounds.addXYZFloat32Arr(this.m_vs);
    } else {
      this.bounds.addXYZFloat32Arr(this.m_vs);
    }

    this.bounds.updateFast();
    ROVertexBuffer_1.default.Reset();
    ROVertexBuffer_1.default.AddFloat32Data(this.m_vs, 3);
    let faceTotal = 6;

    if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_UVS_INDEX)) {
      if (this.m_uvs == null) {
        // uv
        this.m_uvs = new Float32Array(48);
        this.initUVData(this.vtxTotal * 2);

        if (this.uvPartsNumber == 4) {
          this.scaleUVFaceAt(0, 0.5, 0.5, 0.5, 0.5);
          this.scaleUVFaceAt(1, 0.0, 0.0, 0.5, 0.5);
          this.scaleUVFaceAt(2, 0.5, 0.0, 0.5, 0.5);
          this.scaleUVFaceAt(3, 0.0, 0.5, 0.5, 0.5);
          this.scaleUVFaceAt(4, 0.5, 0.0, 0.5, 0.5);
          this.scaleUVFaceAt(5, 0.0, 0.5, 0.5, 0.5);
        } else if (this.uvPartsNumber == 6) {
          this.scaleUVFaceAt(0, 0.0, 0.0, 0.25, 0.5);
          this.scaleUVFaceAt(1, 0.25, 0.0, 0.25, 0.5);
          this.scaleUVFaceAt(2, 0.5, 0.0, 0.25, 0.5);
          this.scaleUVFaceAt(3, 0.75, 0.0, 0.25, 0.5);
          this.scaleUVFaceAt(4, 0.0, 0.5, 0.25, 0.5);
          this.scaleUVFaceAt(5, 0.25, 0.5, 0.25, 0.5);
        }

        if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_TVS_INDEX)) {
          baseI = 0;

          while (baseI < 6) {
            switch (baseI) {
              case 0:
                // -z
                i = 0;
                this.m_uvs[i] = 0.0;
                this.m_uvs[i + 1] = 1.0;
                this.m_uvs[i + 2] = 1.0;
                this.m_uvs[i + 3] = 1.0;
                this.m_uvs[i + 4] = 1.0;
                this.m_uvs[i + 5] = 0.0;
                this.m_uvs[i + 6] = 0.0;
                this.m_uvs[i + 7] = 0.0;
                break;

              case 3:
                // +x
                i = 24;
                this.m_uvs[i] = 0.0;
                this.m_uvs[i + 1] = 1.0;
                this.m_uvs[i + 2] = 1.0;
                this.m_uvs[i + 3] = 1.0;
                this.m_uvs[i + 4] = 1.0;
                this.m_uvs[i + 5] = 0.0;
                this.m_uvs[i + 6] = 0.0;
                this.m_uvs[i + 7] = 0.0;
                break;

              case 5:
                // -y;
                i = 32;
                this.m_uvs[i] = 0.0;
                this.m_uvs[i + 1] = 1.0;
                this.m_uvs[i + 2] = 1.0;
                this.m_uvs[i + 3] = 1.0;
                this.m_uvs[i + 4] = 1.0;
                this.m_uvs[i + 5] = 0.0;
                this.m_uvs[i + 6] = 0.0;
                this.m_uvs[i + 7] = 0.0;
                break;

              default:
                break;
            }

            ++baseI;
          }
        }
      }

      ROVertexBuffer_1.default.AddFloat32Data(this.m_uvs, 2);
    }

    if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_NVS_INDEX)) {
      this.m_nvs = new Float32Array(72);
      baseI = 0;
      let nx = 0.0;
      let ny = 0.0;
      let nz = 0.0;

      if (this.normalType == VtxBufConst_2.VtxNormalType.FLAT) {
        while (baseI < faceTotal) {
          nx = 0.0;
          ny = 0.0;
          nz = 0.0;

          switch (baseI) {
            case 0:
              ny = -1.0;
              break;

            case 1:
              ny = 1.0;
              break;

            case 2:
              nx = 1.0;
              break;

            case 3:
              nz = -1.0;
              break;

            case 4:
              nx = -1.0;
              break;

            case 5:
              nz = 1.0;
              break;

            default:
              break;
          }

          i = baseI * 12;
          nx *= this.normalScale;
          ny *= this.normalScale;
          nz *= this.normalScale;
          this.m_nvs[i] = nx;
          this.m_nvs[i + 1] = ny;
          this.m_nvs[i + 2] = nz;
          this.m_nvs[i + 3] = nx;
          this.m_nvs[i + 4] = ny;
          this.m_nvs[i + 5] = nz;
          this.m_nvs[i + 6] = nx;
          this.m_nvs[i + 7] = ny;
          this.m_nvs[i + 8] = nz;
          this.m_nvs[i + 9] = nx;
          this.m_nvs[i + 10] = ny;
          this.m_nvs[i + 11] = nz;
          ++baseI;
        }
      } else {
        let centV = this.bounds.center;
        let d = 0.0;

        while (baseI < this.vtxTotal) {
          i = baseI * 3;
          nx = this.m_vs[i] - centV.x;
          ny = this.m_vs[i + 1] - centV.y;
          nz = this.m_vs[i + 2] - centV.z;
          d = Math.sqrt(nx * nx + ny * ny + nz * nz);

          if (d > MathConst_1.default.MATH_MIN_POSITIVE) {
            this.m_nvs[i] = nx / d;
            this.m_nvs[i + 1] = ny / d;
            this.m_nvs[i + 2] = nz / d;
          }

          ++baseI;
        }
      }

      ROVertexBuffer_1.default.AddFloat32Data(this.m_nvs, 3);
    }

    if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_CVS_INDEX)) {
      this.m_cvs = new Float32Array(72);
      baseI = 0;
      let pr = 1.0;
      let pg = 1.0;
      let pb = 1.0;

      while (baseI < faceTotal) {
        i = baseI * 12;
        this.m_cvs[i] = pr;
        this.m_cvs[i + 1] = pg;
        this.m_cvs[i + 2] = pb;
        this.m_cvs[i + 3] = pr;
        this.m_cvs[i + 4] = pg;
        this.m_cvs[i + 5] = pb;
        this.m_cvs[i + 6] = pr;
        this.m_cvs[i + 7] = pg;
        this.m_cvs[i + 8] = pb;
        this.m_cvs[i + 9] = pr;
        this.m_cvs[i + 10] = pg;
        this.m_cvs[i + 11] = pb;
        ++baseI;
      }

      ROVertexBuffer_1.default.AddFloat32Data(this.m_cvs, 3);
    }

    if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_TVS_INDEX)) {
      let numTriangles = 12;
      let tvs = new Float32Array(this.m_nvs.length);
      let btvs = new Float32Array(this.m_nvs.length);
      SurfaceNormalCalc_1.default.ClacTrisTangent(this.m_vs, this.m_vs.length, this.m_uvs, this.m_nvs, numTriangles, this.m_ivs, tvs, btvs);
      ROVertexBuffer_1.default.AddFloat32Data(tvs, 3);
      ROVertexBuffer_1.default.AddFloat32Data(btvs, 3);
    }

    ROVertexBuffer_1.default.vbWholeDataEnabled = this.vbWholeDataEnabled;

    if (newBuild) {
      this.m_vbuf = ROVertexBuffer_1.default.CreateBySaveData(this.getBufDataUsage());
      this.m_vbuf.setUint16IVSData(this.m_ivs);
      this.vtCount = this.m_ivs.length;
      this.trisNumber = 12;
      this.buildEnd();
    } else {
      ROVertexBuffer_1.default.UpdateBufData(this.m_vbuf);
    }
  }

  setFaceUVSAt(i, uvsLen8, offset = 0) {
    if (this.m_uvs != null) {
      if (offset < 1) {
        this.m_uvs.set(uvsLen8, i * 8);
      } else {
        i *= 8;
        if (offset < 0) offset = 0;

        for (let k = 0; k < 4; ++k) {
          this.m_uvs[i++] = uvsLen8[offset * 2];
          this.m_uvs[i++] = uvsLen8[offset * 2 + 1];
          offset++;
          offset = offset % 4;
        }
      }
    }
  }

  initUVData(baseI) {
    let i = 0;

    if (this.flipVerticalUV) {
      while (i < baseI) {
        this.m_uvs[i] = 1.0;
        this.m_uvs[i + 1] = 1.0;
        this.m_uvs[i + 2] = 0.0;
        this.m_uvs[i + 3] = 1.0;
        this.m_uvs[i + 4] = 0.0;
        this.m_uvs[i + 5] = 0.0;
        this.m_uvs[i + 6] = 1.0;
        this.m_uvs[i + 7] = 0.0;
        i += 8;
      }
    } else {
      while (i < baseI) {
        this.m_uvs[i] = 0.0;
        this.m_uvs[i + 1] = 0.0;
        this.m_uvs[i + 2] = 1.0;
        this.m_uvs[i + 3] = 0.0;
        this.m_uvs[i + 4] = 1.0;
        this.m_uvs[i + 5] = 1.0;
        this.m_uvs[i + 6] = 0.0;
        this.m_uvs[i + 7] = 1.0;
        i += 8;
      }
    }
  }

  toString() {
    return "Box3DMesh()";
  }

  __$destroy() {
    if (this.isResFree()) {
      this.bounds = null;
      this.m_vs = null;
      this.m_uvs = null;
      this.m_nvs = null;
      this.m_cvs = null;

      super.__$destroy();
    }
  }

} // face order: -y,+y,+x,-z,-x,+z


Box3DMesh.s_facePosIds = [0, 1, 2, 3, 4, 5, 6, 7, 4, 5, 1, 0, 5, 6, 2, 1, 7, 6, 2, 3, 4, 7, 3, 0];
exports.default = Box3DMesh;

/***/ }),

/***/ "402a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const RSEntityFlag_1 = __importDefault(__webpack_require__("11e6"));

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const AABB_1 = __importDefault(__webpack_require__("fecb"));

const MouseEvent_1 = __importDefault(__webpack_require__("1710"));

const RendererState_1 = __importDefault(__webpack_require__("29ef"));

const ROTransform_1 = __importDefault(__webpack_require__("0929"));

const SpaceCullingMask_1 = __importDefault(__webpack_require__("cc48"));

const RODisplay_1 = __importDefault(__webpack_require__("dc2b"));

class DisplayEntity {
  constructor(transform = null) {
    this.m_uid = 0;
    this.m_transfrom = null;
    this.m_mouseEvtDispatcher = null;
    this.m_visible = true;
    this.m_drawEnabled = true;
    this.m_rcolorMask = RendererState_1.default.COLOR_MASK_ALL_TRUE;
    this.m_renderState = RendererState_1.default.BACK_CULLFACE_NORMAL_STATE;
    this.m_display = null;
    this.m_mesh = null; // 如果一个entity如果包含了多个mesh,则这个bounds就是多个mesh aabb 合并的aabb

    this.m_globalBounds = null;
    this.m_parent = null;
    this.m_renderProxy = null;
    /**
     * renderer scene entity flag, be used by the renderer system
     * 第0位到第19位总共20位存放自身在space中的 index id(最小值为1, 最大值为1048575,默认值是0, 也就是最多只能展示1048575个entitys),
     * 第20位开始到26位为总共7位止存放在renderer中的状态数据(renderer unique id and others)
     * 第27位存放是否在container里面
     * 第28位开始到29位总共二位存放renderer 载入状态 的相关信息
     * 第30位位存放是否渲染运行时排序
     */

    this.__$rseFlag = RSEntityFlag_1.default.DEFAULT;
    this.name = "DisplayEntity"; // 可见性裁剪是否开启, 如果不开启，则摄像机和遮挡剔除都不会裁剪, 取值于 SpaceCullingMask, 默认只会有摄像机裁剪

    this.spaceCullMask = SpaceCullingMask_1.default.CAMERA; // recorde a draw status

    this.drawEnabled = false; // mouse interaction enabled

    this.mouseEnabled = false; //

    this.vbWholeDataEnabled = true;
    this.m_texChanged = false;
    this.m_meshChanged = false;
    this.m_transStatus = ROTransform_1.default.UPDATE_TRANSFORM;
    this.m_uid = DisplayEntity.s_uid++;

    if (transform == null) {
      this.m_transfrom = ROTransform_1.default.Create();
    } else {
      this.m_transfrom = transform;
    }

    this.createBounds();
  }

  createBounds() {
    this.m_globalBounds = new AABB_1.default();
  }

  __$setRenderProxy(rc) {
    this.m_renderProxy = rc;
  }

  __$setParent(parent) {
    if (this.m_parent == null) {}

    this.m_parent = parent;
  }

  __$getParent() {
    return this.m_parent;
  }

  __$testSpaceEnabled() {
    //return this.__$spaceId < 0 && this.__$contId < 1;
    return RSEntityFlag_1.default.TestSpaceEnabled2(this.__$rseFlag);
  }

  __$testContainerEnabled() {
    //return this.__$wuid < 0 && this.__$contId < 1;
    return RSEntityFlag_1.default.TestContainerEnabled(this.__$rseFlag);
  }

  __$testRendererEnabled() {
    //return this.__$wuid < 0 && this.__$weid < 0 && this.__$contId < 1;
    return RSEntityFlag_1.default.TestRendererEnabled(this.__$rseFlag);
  }

  getRendererUid() {
    return RSEntityFlag_1.default.GetRendererUid(this.__$rseFlag);
  }
  /**
   * @returns 自身是否未必任何渲染器相关的系统使用
   */


  isFree() {
    return this.__$rseFlag == RSEntityFlag_1.default.DEFAULT;
  }

  dispatchEvt(evt) {
    if (evt.getClassType() == MouseEvent_1.default.EventClassType) {
      if (this.m_mouseEvtDispatcher != null) {
        this.m_mouseEvtDispatcher.dispatchEvt(evt);
      }
    }
  }

  getEvtDispatcher(evtClassType) {
    return this.m_mouseEvtDispatcher;
  }

  setEvtDispatcher(evtDisptacher) {
    this.m_mouseEvtDispatcher = evtDisptacher;
  }

  getGlobalBounds() {
    return this.m_globalBounds;
  }

  getLocalBounds() {
    return this.m_mesh.bounds;
  }

  getGlobalBoundsVer() {
    if (this.m_globalBounds != null) {
      return this.m_globalBounds.version;
    }

    return -1;
  }

  __$setDrawEnabled(boo) {
    if (this.m_drawEnabled != boo) {
      this.m_drawEnabled = boo;

      if (this.m_display != null) {
        this.m_display.visible = this.m_visible && boo;

        if (this.m_display.__$$runit != null) {
          this.m_display.__$$runit.setVisible(this.m_display.visible);
        }
      }
    }
  }

  isDrawEnabled() {
    return this.m_drawEnabled;
  }
  /**
   * users need to call this function manually
   * 更新有两种形式, 1: 只是更改资源内部的数据, 2: 替换资源本身
   * 更新过程可以通过DisplayEntity对象来控制，也可以通过资源本身来控制
   */


  updateMeshToGpu(rc = null, deferred = true) {
    if (rc != null) this.m_renderProxy = rc;

    if (this.m_renderProxy != null && this.m_display != null && this.m_display.__$ruid > -1) {
      if (this.m_meshChanged) {
        this.m_meshChanged = false;
        this.m_renderProxy.VtxBufUpdater.updateDispVbuf(this.m_display, deferred);
      } else {
        this.m_renderProxy.VtxBufUpdater.updateVtxDataToGpuByUid(this.m_display.vbuf.getUid(), deferred);
      }
    }
  }
  /**
   * users need to call this function manually
   * 更新有两种形式, 1: 只是更改资源内部的数据, 2: 替换资源本身
   * 更新过程可以通过DisplayEntity对象来控制，也可以通过资源本身来控制
   */


  updateMaterialToGpu(rc = null, deferred = true) {
    if (rc != null) this.m_renderProxy = rc;

    if (this.m_renderProxy != null && this.m_display != null && this.m_display.__$ruid > -1) {
      if (this.m_texChanged) {
        this.m_texChanged = false;
        this.m_renderProxy.MaterialUpdater.updateDispTRO(this.m_display, deferred);
      }
    }
  }
  /**
   * set new textures list for the material of this instance.
   */


  setTextureList(texList) {
    if (this.m_display != null && this.m_display.__$ruid > -1) {
      if (this.m_display.getMaterial() != null) {
        this.m_display.getMaterial().setTextureList(texList);
        this.m_texChanged = true;
      }
    }
  }
  /**
   * set new texture by the index in the material textures list for the material of this instance.
   */


  setTextureAt(index, tex) {
    if (this.m_display != null && this.m_display.__$ruid > -1) {
      if (this.m_display.getMaterial() != null) {
        this.m_display.getMaterial().setTextureAt(index, tex);
        this.m_texChanged = true;
      }
    }
  }

  setSortValue(value) {
    if (this.m_display != null) {
      if (this.m_display.__$$runit != null) {
        this.m_display.__$$runit.value = value;
      }
    }
  }

  setVisible(boo) {
    if (this.m_visible != boo) {
      this.m_visible = boo;

      if (this.m_display != null) {
        this.m_display.visible = boo && this.m_drawEnabled;

        if (this.m_display.__$$runit != null) {
          this.m_display.__$$runit.setVisible(this.m_display.visible);
        }
      }
    }
  }

  getVisible() {
    return this.m_visible;
  }

  getTransform() {
    return this.m_transfrom;
  }

  copyPositionFrom(entity) {
    if (entity != null) {
      this.m_transfrom.copyPositionFrom(entity.getTransform());
    }
  }

  copyMeshFrom(entity) {
    if (entity != null) {
      this.setMesh(entity.getMesh());
    }
  }

  copyMaterialFrom(entity) {
    if (entity != null) {
      this.setMaterial(entity.getMaterial());
    }
  }

  copyTransformFrom(entity) {
    let pe = entity;

    if (pe != null) {
      this.m_transfrom.copyFrom(pe.m_transfrom);
    }
  }

  initDisplay(m) {
    this.m_display.vbuf = m.__$attachVBuf();
    this.m_display.ivsIndex = 0;
    this.m_display.ivsCount = m.vtCount;
    this.m_display.drawMode = m.drawMode;
    this.m_display.trisNumber = m.trisNumber;
    this.m_display.visible = this.m_visible && this.m_drawEnabled;
  }
  /**
   * 设置几何相关的数据,必须是构建完备的mesh才能被设置进来
   * 这个设置函数也可以动态运行时更新几何相关的顶点数据
   */


  setMesh(m) {
    if (this.m_mesh == null) {
      if (m != null) {
        if (!m.isEnabled()) {
          m.rebuild();
        }

        if (m.isEnabled()) {
          this.m_mesh = m;

          m.__$attachThis();

          if (this.m_display == null) {
            this.createDisplay();
          }

          if (this.m_display != null) {
            this.m_display.setTransform(this.m_transfrom.getMatrix());
            this.initDisplay(m);
          } //console.log("DisplayEntity::setMesh(), "+this.m_display.toString()+",m.drawMode: "+m.drawMode);


          if (this.m_globalBounds != null) {
            this.m_globalBounds.copyFrom(m.bounds);
          }

          this.updateMesh();
        }
      }
    } else if (this.m_display != null && this.m_display.__$ruid > -1) {
      if (this.m_mesh != m && m != null) {
        this.m_transfrom.updatedStatus |= 2;

        this.m_mesh.__$detachVBuf(this.m_display.vbuf);

        this.m_mesh.__$detachThis();

        m.__$attachThis();

        this.m_mesh = m;
        this.initDisplay(m);
        this.m_meshChanged = true;
        this.updateMesh();
      }
    }
  }

  updateMesh() {}

  getIvsIndex() {
    return this.m_display.ivsIndex;
  }

  getIvsCount() {
    return this.m_display.ivsCount;
  }

  setIvsParam(ivsIndex, ivsCount) {
    if (this.m_display != null) {
      this.m_display.ivsIndex = ivsIndex;
      this.m_display.ivsCount = ivsCount;

      if (this.m_display.__$ruid > -1) {
        this.m_display.__$$runit.setIvsParam(ivsIndex, ivsCount);
      }
    }
  }

  getMesh() {
    return this.m_mesh;
  }

  hasMesh() {
    return this.m_mesh != null;
  }
  /**
   * @return 返回true是则表示这是基于三角面的多面体, 返回false则是一个数学方程描述的几何体(例如球体),默认返回true
   */


  isPolyhedral() {
    return this.m_mesh == null || this.m_mesh.isPolyhedral();
  }
  /**
   * @boundsHit       表示是否包围盒体已经和射线相交了
   * @rlpv            表示物体坐标空间的射线起点
   * @rltv            表示物体坐标空间的射线朝向
   * @outV            如果检测相交存放物体坐标空间的交点
   * @return          返回值 -1 表示不会进行检测,1表示相交,0表示不相交
   */


  testRay(rlpv, rltv, outV, boundsHit) {
    return this.m_mesh.testRay(rlpv, rltv, outV, boundsHit);
  }
  /**
   * 只允许在加入渲染器之前设置 MaterialBase 实例
   */


  setMaterial(m) {
    if (m != null) {
      if (this.m_display == null) {
        this.m_display = RODisplay_1.default.Create();
        this.m_display.setTransform(this.m_transfrom.getMatrix());
        this.m_display.visible = this.m_visible && this.m_drawEnabled;
      } //if(this.m_display.getMaterial() != m && this.__$wuid == RSEntityFlag.RENDERER_UID_FLAT && this.m_display.__$ruid < 0)


      if (this.m_display.getMaterial() != m && (RSEntityFlag_1.default.RENDERER_UID_FLAT & this.__$rseFlag) == RSEntityFlag_1.default.RENDERER_UID_FLAT && this.m_display.__$ruid < 0) {
        this.m_display.renderState = this.m_renderState;
        this.m_display.rcolorMask = this.m_rcolorMask;
        this.m_display.setMaterial(m);
      }
    }
  }

  getMaterial() {
    if (this.m_display != null) {
      return this.m_display.getMaterial();
    }

    return null;
  }

  getDisplay() {
    return this.m_display;
  }

  getInvMatrix() {
    return this.m_transfrom.getInvMatrix();
  }

  getMatrix() {
    return this.m_transfrom.getMatrix();
  }

  getToParentMatrix() {
    return this.m_transfrom.getToParentMatrix();
  }

  setRenderColorMask(rt) {
    this.m_rcolorMask = rt;

    if (this.m_display != null) {
      this.m_display.rcolorMask = this.m_rcolorMask;

      if (this.m_display.__$$runit != null) {
        this.m_display.__$$runit.setDrawFlag(this.m_renderState, this.m_rcolorMask);
      }
    }
  }

  setRenderColorMaskByName(rt_name) {
    this.m_rcolorMask = RendererState_1.default.GetRenderColorMaskByName(rt_name);

    if (this.m_display != null) {
      this.m_display.rcolorMask = this.m_rcolorMask;

      if (this.m_display.__$$runit != null) {
        this.m_display.__$$runit.setDrawFlag(this.m_renderState, this.m_rcolorMask);
      }
    }
  }

  setRenderState(renderState) {
    this.m_renderState = renderState;

    if (this.m_display != null) {
      this.m_display.renderState = this.m_renderState;

      if (this.m_display.__$$runit != null) {
        this.m_display.__$$runit.setDrawFlag(this.m_renderState, this.m_rcolorMask);
      }
    }
  }

  setRenderStateByName(renderState_name) {
    this.m_renderState = RendererState_1.default.GetRenderStateByName(renderState_name);

    if (this.m_display != null) {
      this.m_display.renderState = this.m_renderState;

      if (this.m_display.__$$runit != null) {
        this.m_display.__$$runit.setDrawFlag(this.m_renderState, this.m_rcolorMask);
      }
    }
  }

  createDisplay() {
    this.m_display = RODisplay_1.default.Create();
  }

  activeDisplay() {
    if (this.m_display != null) {
      let material = this.m_display.getMaterial();

      if (material != null) {
        if (material.getShaderData() == null) {
          if (material.getCodeBuf() != null) {
            if (material.getShaderData() == null) {
              let texList = material.getTextureList();
              let texEnabled = texList != null && texList.length > 0;
              material.initializeByCodeBuf(texEnabled);
            }
          }
        }

        if (this.getMesh() == null) {
          this.__activeMesh(material); //  // for debug


          this.m_display.name = this.name; //  this.m_display.ivsIndex = 0;
          //  this.m_display.ivsCount = this.m_mesh.vtCount;
          //  this.m_display.drawMode = this.m_mesh.drawMode;
        }
      }
    }
  } // for sub class override


  __activeMesh(material) {}

  getUid() {
    return this.m_uid;
  }

  setXYZ(px, py, pz) {
    this.m_transfrom.setXYZ(px, py, pz);
  }

  offsetPosition(pv) {
    this.m_transfrom.offsetPosition(pv);
  }

  setPosition(pv) {
    this.m_transfrom.setPosition(pv);
  }

  getPosition(pv) {
    this.m_transfrom.getPosition(pv);
  }

  setRotationXYZ(rx, ry, rz) {
    this.m_transfrom.setRotationXYZ(rx, ry, rz);
  }

  setScaleXYZ(sx, sy, sz) {
    this.m_transfrom.setScaleXYZ(sx, sy, sz);
  }

  getRotationXYZ(pv) {
    this.m_transfrom.getRotationXYZ(pv);
  }

  getScaleXYZ(pv) {
    this.m_transfrom.getScaleXYZ(pv);
  }

  destroy() {
    // 当自身被完全移出RenderWorld之后才能执行自身的destroy
    //console.log("DisplayEntity::destroy(), renderer uid: "+this.getRendererUid()+", this.__$spaceId: "+this.__$spaceId);
    if (this.m_mouseEvtDispatcher != null) {
      this.m_mouseEvtDispatcher.destroy();
      this.m_mouseEvtDispatcher = null;
    }

    if (this.m_transfrom != null && this.isFree()) {
      // 这里要保证其在所有的process中都被移除
      if (this.m_display != null) {
        this.m_mesh.__$detachVBuf(this.m_display.vbuf);

        RODisplay_1.default.Restore(this.m_display);
        this.m_display = null;
      }

      ROTransform_1.default.Restore(this.m_transfrom);
      this.m_transfrom = null;

      if (this.m_mesh != null) {
        this.m_mesh.__$detachThis();

        this.m_mesh = null;
      }

      this.__$setParent(null);

      this.m_visible = true;
      this.m_drawEnabled = true;
      this.m_renderProxy = null;
      this.__$rseFlag = RSEntityFlag_1.default.DEFAULT;
    }
  }
  /**
   * @returns 是否已经加入渲染器中(但是可能还没有进入真正的渲染运行时)
   */


  isInRenderer() {
    return (this.__$rseFlag & RSEntityFlag_1.default.RENDERER_UID_FLAT) != RSEntityFlag_1.default.RENDERER_UID_FLAT;
  }
  /**
   * @returns 是否处在渲染运行时中
   */


  isRenderEnabled() {
    return this.m_display != null && this.m_display.__$ruid > -1;
  }

  updateBounds() {
    if (this.m_transfrom != null) {
      this.m_transStatus = ROTransform_1.default.UPDATE_TRANSFORM;
      this.update();
    }
  }

  update() {
    if (this.m_transfrom.updatedStatus > this.m_transStatus) this.m_transStatus = this.m_transfrom.updatedStatus;

    if (this.m_transStatus != ROTransform_1.default.UPDATE_NONE) {
      if (this.m_globalBounds != null && this.m_mesh != null) {
        this.m_transfrom.update(); // 这里的逻辑也有问题,需要再处理，为了支持摄像机等的拾取以及支持遮挡计算等空间管理计算

        if (this.m_transStatus > ROTransform_1.default.UPDATE_POSITION) {
          let pminV = this.m_mesh.bounds.min;
          let pmaxV = this.m_mesh.bounds.max;
          let pvs = DisplayEntity.s_boundsInVS;
          pvs[0] = pminV.x;
          pvs[1] = pminV.y;
          pvs[2] = pminV.z;
          pvs[3] = pmaxV.x;
          pvs[4] = pminV.y;
          pvs[5] = pminV.z;
          pvs[6] = pminV.x;
          pvs[7] = pminV.y;
          pvs[8] = pmaxV.z;
          pvs[9] = pmaxV.x;
          pvs[10] = pminV.y;
          pvs[11] = pmaxV.z;
          pvs[12] = pminV.x;
          pvs[13] = pmaxV.y;
          pvs[14] = pminV.z;
          pvs[15] = pmaxV.x;
          pvs[16] = pmaxV.y;
          pvs[17] = pminV.z;
          pvs[18] = pminV.x;
          pvs[19] = pmaxV.y;
          pvs[20] = pmaxV.z;
          pvs[21] = pmaxV.x;
          pvs[22] = pmaxV.y;
          pvs[23] = pmaxV.z;
          this.m_transfrom.getMatrix().transformVectors(pvs, 24, DisplayEntity.s_boundsOutVS);
          this.m_globalBounds.reset();
          this.m_globalBounds.addXYZFloat32Arr(DisplayEntity.s_boundsOutVS);
          this.m_globalBounds.update();
        } else {
          let matrix = this.m_transfrom.getMatrix();
          let bounds = this.m_mesh.bounds;
          let gbounds = this.m_globalBounds;
          matrix.transformOutVector3(bounds.min, gbounds.min);
          matrix.transformOutVector3(bounds.max, gbounds.max);
          gbounds.center.addVecsTo(gbounds.min, gbounds.max);
          gbounds.center.scaleBy(0.5);
          ++this.m_globalBounds.version;
        }
      } else {
        this.m_transfrom.update();
      }

      this.m_transStatus = ROTransform_1.default.UPDATE_NONE;
      this.m_transfrom.updatedStatus = this.m_transStatus;
    }

    if (this.m_display != null && this.m_display.__$$runit != null) {
      this.m_display.__$$runit.bounds = this.m_globalBounds;
      this.m_transfrom.getPosition(this.m_display.__$$runit.pos);
    }
  }

  toString() {
    return "DisplayEntity(name=" + this.name + ",uid = " + this.m_uid + ", rseFlag = " + this.__$rseFlag + ")";
  }

}

DisplayEntity.s_uid = 0;
DisplayEntity.s_boundsInVS = new Float32Array(24);
DisplayEntity.s_boundsOutVS = new Float32Array(24);
DisplayEntity.s_pos = new Vector3D_1.default();
exports.default = DisplayEntity;

/***/ }),

/***/ "4b6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2020 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const DashedLineMesh_1 = __importDefault(__webpack_require__("9c3c"));

const DisplayEntity_1 = __importDefault(__webpack_require__("402a"));

const Line3DMaterial_1 = __importDefault(__webpack_require__("32cc"));

const Color4_1 = __importDefault(__webpack_require__("3930"));

class DashedLine3DEntity extends DisplayEntity_1.default {
  constructor() {
    super();
    this.m_currMaterial = null;
    this.dynColorEnabled = true;
    this.m_posarr = null;
    this.m_colorarr = null;
  }

  setRGB3f(pr, pg, pb) {
    this.m_currMaterial.setRGB3f(pr, pg, pb);
  }

  createMaterial() {
    if (this.getMaterial() == null) {
      this.m_currMaterial = new Line3DMaterial_1.default(this.dynColorEnabled);
      this.setMaterial(this.m_currMaterial);
    }
  }

  __activeMesh(material) {
    if (this.getMesh() == null) {
      let mesh = new DashedLineMesh_1.default();
      mesh.vbWholeDataEnabled = false;
      mesh.setBufSortFormat(material.getBufSortFormat());
      mesh.initialize(this.m_posarr, this.m_colorarr);
      this.setMesh(mesh);
    }
  }

  initializeLS(va, vb) {
    this.m_posarr = [va.x, va.y, va.z, vb.x, vb.y, vb.z];
    this.createMaterial();
    this.activeDisplay();
  }

  initiazlizeFrustrum(camera) {
    let pvs = camera.getWordFrustumVtxArr();
    this.m_posarr = new Array(72);
    this.m_colorarr = new Array(72);
    let ids = [0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7];
    let farColor = new Color4_1.default(1.0, 0.0, 1.0, 1.0);
    let nearColor = new Color4_1.default(0.0, 0.5, 1.0);
    let sideColor = new Color4_1.default(0.0, 0.9, 0.0);
    let colors = [farColor, farColor, farColor, farColor, farColor, farColor, farColor, farColor, nearColor, nearColor, nearColor, nearColor, nearColor, nearColor, nearColor, nearColor, sideColor, sideColor, sideColor, sideColor, sideColor, sideColor, sideColor, sideColor];
    let pv;
    let color;
    let j = 0;

    for (let i = 0; i < ids.length; i++) {
      pv = pvs[ids[i]];
      color = colors[i];
      this.m_posarr[j] = pv.x;
      this.m_posarr[j + 1] = pv.y;
      this.m_posarr[j + 2] = pv.z;
      this.m_colorarr[j] = color.r;
      this.m_colorarr[j + 1] = color.g;
      this.m_colorarr[j + 2] = color.b;
      j += 3;
    }

    this.dynColorEnabled = false;
    this.createMaterial();
    this.activeDisplay();
  }

  initializeBySegmentLine(pvList, colors = null) {
    //this.m_posarr = [va.x,va.y,va.z, vb.x,vb.y,vb.z];
    this.m_posarr = [];
    let i = 0;
    let len = pvList.length;

    for (; i < len; i += 2) {
      this.m_posarr.push(pvList[i].x, pvList[i].y, pvList[i].z);
      this.m_posarr.push(pvList[i + 1].x, pvList[i + 1].y, pvList[i + 1].z);
    }

    if (colors != null) {
      this.dynColorEnabled = false;
    }

    if (!this.dynColorEnabled) {
      if (colors == null) {
        this.m_colorarr = this.m_posarr.slice();
        this.m_colorarr.fill(1.0);
      } else {
        this.m_colorarr = new Array(this.m_posarr.length);
        let j = 0;
        let color;

        for (i = 0; i < len; i++) {
          color = colors[i];
          this.m_colorarr[j] = color.r;
          this.m_colorarr[j + 1] = color.g;
          this.m_colorarr[j + 2] = color.b;
          j += 3;
        }
      }
    }

    this.createMaterial();
    this.activeDisplay();
  }

  initializeByPosition(pvList) {
    //this.m_posarr = [va.x,va.y,va.z, vb.x,vb.y,vb.z];
    this.m_posarr = [];
    let i = 1;
    let len = pvList.length;
    let pos0;
    let pos1;

    for (; i < len; i++) {
      pos0 = pvList[i - 1];
      this.m_posarr.push(pos0.x, pos0.y, pos0.z);
      pos1 = pvList[i];
      this.m_posarr.push(pos1.x, pos1.y, pos1.z);
    }

    this.createMaterial();
    this.activeDisplay();
  }

  toString() {
    return "DashedLine3DEntity(name=" + this.name + ",uid = " + this.getUid() + ", rseFlag = " + this.__$rseFlag + ")";
  }

}

exports.default = DashedLine3DEntity;

/***/ }),

/***/ "519e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const MeshBase_1 = __importDefault(__webpack_require__("cb29"));

const ROVertexBuffer_1 = __importDefault(__webpack_require__("e7d2"));

class DataMesh extends MeshBase_1.default {
  constructor(bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    super(bufDataUsage);
    this.vsStride = 3;
    this.vs = null;
    this.uvs = null;
    this.nvs = null;
    this.cvs = null;
    this.tvs = null;
    this.btvs = null;
    this.ivs = null;
  }

  initialize() {
    if (this.vs != null) {
      ROVertexBuffer_1.default.Reset();
      ROVertexBuffer_1.default.AddFloat32Data(this.vs, this.vsStride);

      if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_UVS_INDEX)) {
        ROVertexBuffer_1.default.AddFloat32Data(this.uvs, 2);
      }

      if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_NVS_INDEX)) {
        ROVertexBuffer_1.default.AddFloat32Data(this.nvs, 3);
      }

      if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_CVS_INDEX)) {
        ROVertexBuffer_1.default.AddFloat32Data(this.cvs, 3);
      }

      if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_TVS_INDEX)) {
        ROVertexBuffer_1.default.AddFloat32Data(this.tvs, 3);
        ROVertexBuffer_1.default.AddFloat32Data(this.btvs, 3);
      }

      ROVertexBuffer_1.default.vbWholeDataEnabled = this.vbWholeDataEnabled;
      this.vtCount = this.ivs.length;

      if (this.m_vbuf != null) {
        ROVertexBuffer_1.default.UpdateBufData(this.m_vbuf);
      } else {
        this.m_vbuf = ROVertexBuffer_1.default.CreateBySaveData(this.getBufDataUsage(), this.getBufSortFormat());
      }

      this.m_vbuf.setUintIVSData(this.ivs);
      this.buildEnd();
    }
  }
  /**
   * 射线和自身的相交检测(多面体或几何函数(例如球体))
   * @boundsHit       表示是否包围盒体已经和射线相交了
   * @rlpv            表示物体坐标空间的射线起点
   * @rltv            表示物体坐标空间的射线朝向
   * @outV            如果检测相交存放物体坐标空间的交点
   * @return          返回值 -1 表示不会进行检测,1表示相交,0表示不相交
   */


  testRay(rlpv, rltv, outV, boundsHit) {
    return -1;
  }

  toString() {
    return "[DataMesh()]";
  }

  __$destroy() {
    if (this.isResFree()) {
      this.bounds = null;
      this.vs = null;
      this.uvs = null;
      this.nvs = null;
      this.cvs = null;
      this.tvs = null;
      this.btvs = null;

      super.__$destroy();
    }
  }

}

exports.default = DataMesh;

/***/ }),

/***/ "5282":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class MeshVertex {
  //
  constructor(px = 0, py = 0, pz = 0, pindex = 0) {
    // pos
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0; // uv

    this.u = 0.0;
    this.v = 1.0; // normal

    this.nx = 0.0;
    this.ny = 0.0;
    this.nz = 0.0;
    this.index = 0; // pos

    this.x = px;
    this.y = py;
    this.z = pz;
    this.index = pindex;
  }

  cloneVertex() {
    let vtx = new MeshVertex(this.x, this.y, this.z, this.index);
    vtx.nx = this.nx;
    vtx.ny = this.ny;
    vtx.nz = this.nz;
    vtx.u = this.u;
    vtx.v = this.v;
    return vtx;
  }

  copyFrom(pv) {
    this.x = pv.x;
    this.y = pv.y;
    this.z = pv.z;
    this.u = pv.u;
    this.v = pv.v;
    this.nx = pv.nx;
    this.ny = pv.ny;
    this.nz = pv.nz;
    this.index = pv.index;
  }

}

exports.default = MeshVertex;

/***/ }),

/***/ "5e78":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const TextureConst_1 = __webpack_require__("8d98");

const ImgTexData_1 = __importDefault(__webpack_require__("7181"));

const TextureProxy_1 = __importDefault(__webpack_require__("0851"));

class ImageTextureProxy extends TextureProxy_1.default {
  constructor(texWidth, texHeight, powerof2Boo = false) {
    super(texWidth, texHeight, powerof2Boo);
    this.m_texData = null;
    this.m_texDatas = null;
    this.m_texDatasLen = 0;
    this.mipmapEnabled = true;
    this.minFilter = TextureConst_1.TextureConst.LINEAR_MIPMAP_LINEAR;
    this.m_type = TextureConst_1.TextureProxyType.Image;
  }

  getTexData() {
    return this.m_texData;
  }
  /**
   * 设置纹理原始数据，可以对纹理局部或者整体(rebuild = true)更新
   * @param img value from: ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap
   * @param miplevel mipmaps level
  */


  setDataFromImage(img, miplevel = 0, offsetx = 0, offsety = 0, rebuild = false) {
    if (img != null && img.width > 0 && img.height > 0) {
      this.m_haveRData = true;
      if (miplevel < 0) miplevel = 0;
      if (miplevel > 15) miplevel = 15;

      if (miplevel >= this.m_texDatasLen) {
        this.m_texDatasLen = miplevel + 1;
      }

      let td = this.m_texData;

      if (td != null) {
        if (this.m_texData.miplevel != miplevel) {
          if (this.m_texDatas == null) {
            this.m_texDatas = [this.m_texData, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
          }

          td = this.m_texDatas[miplevel];

          if (td == null) {
            td = ImgTexData_1.default.Create();
            td.miplevel = miplevel;
            rebuild = true;
            this.m_texDatas[miplevel] = td;
          }
        } else if (this.isGpuEnabled()) {
          td.status = 0;
        }
      } else {
        td = this.m_texData = ImgTexData_1.default.Create();
        td.miplevel = miplevel;
        rebuild = true;
        this.m_texWidth = img.width;
        this.m_texHeight = img.height;
      }

      if (td.data != img || td.offsetx != offsetx || td.offsety != offsety) {
        if (miplevel == 0) {
          this.m_texWidth = img.width;
          this.m_texHeight = img.height;
        }

        td.data = img;
        td.status = 0; // 0表示 更新纹理数据而不会重新开辟空间, 1表示需要重新开辟空间并更新纹理数据, -1表示不需要更新

        if (td.width < img.width || td.height < img.height || rebuild) {
          td.width = img.width;
          td.height = img.height;
          td.status = 1;
        }

        td.offsetx = offsetx;
        td.offsety = offsety;
      }

      this.version++;
    }
  }

  uploadData(texRes) {
    if (this.m_texData != null) {
      this.dataUploadToGpu(texRes.getRC(), this.m_texData, this.m_texDatas, true);
    }

    this.version = 0;
  }

  __$updateToGpu(texRes) {
    // 这里之所以用这种方式判断，是为了运行时支持多 gpu context
    if (this.version > 0 && texRes.hasResUid(this.getResUid())) {
      if (this.m_texData != null) {
        let gl = texRes.getRC();

        this.__$updateToGpuBegin(texRes);

        this.dataUploadToGpu(gl, this.m_texData, this.m_texDatas);

        this.__$buildParam(gl);

        this.m_generateMipmap = true;
      }
    }
  }

  __$destroy() {
    if (this.getAttachCount() < 1) {
      this.version = 0;

      if (this.m_texDatas != null) {
        for (let i = 0; i < this.m_texDatasLen; ++i) {
          ImgTexData_1.default.Restore(this.m_texDatas[i]);
        }

        this.m_texDatasLen = 0;
        this.m_texDatas = null;
        this.m_texData = null;
      }

      if (this.m_texData != null) {
        ImgTexData_1.default.Restore(this.m_texData);
        this.m_texData = null;
      }

      super.__$destroy();
    }
  }

  toString() {
    return "[ImageTextureProxy(name:" + this.name + ",uid=" + this.getUid() + ",width=" + this.getWidth() + ",height=" + this.getHeight() + ")]";
  }

}

exports.default = ImageTextureProxy;

/***/ }),

/***/ "6098":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const MathConst_1 = __importDefault(__webpack_require__("6e01"));

const ShaderCodeBuffer_1 = __importDefault(__webpack_require__("faa5"));

const ShaderUniformData_1 = __importDefault(__webpack_require__("b3bd"));

const MaterialBase_1 = __importDefault(__webpack_require__("0fc4"));

const BillboardFSBase_1 = __importDefault(__webpack_require__("c217"));

class BillboardShaderBuffer extends ShaderCodeBuffer_1.default {
  constructor() {
    super();
    this.billFS = new BillboardFSBase_1.default();
    this.m_uniqueName = "";
  }

  initialize(texEnabled) {
    this.m_uniqueName = "BillboardShader";
  }

  getFragShaderCode() {
    ///*
    let fragCode0 = `#version 300 es
precision mediump float;
uniform sampler2D u_sampler0;
in vec4 v_colorMult;
in vec4 v_colorOffset;
in vec2 v_texUV;
layout(location = 0) out vec4 FragColor;
void main()
{
vec4 color = texture(u_sampler0, v_texUV);
vec3 offsetColor = v_colorOffset.rgb;
vec4 fv4 = v_colorMult.wwww;
`;
    let fadeCode = this.billFS.getBrnAndAlphaCode("fv4");
    let fragCode2 = `
FragColor = color;
}
`;
    return fragCode0 + fadeCode + fragCode2; //*/
  }

  getVtxShaderCode() {
    let vtxCode = `#version 300 es
precision mediump float;
layout(location = 0) in vec2 a_vs;
layout(location = 1) in vec2 a_uvs;
uniform mat4 u_objMat;
uniform mat4 u_viewMat;
uniform mat4 u_projMat;
uniform vec4 u_billParam[3];
out vec4 v_colorMult;
out vec4 v_colorOffset;
out vec2 v_texUV;
void main()
{
vec4 temp = u_billParam[0];
float cosv = cos(temp.z);
float sinv = sin(temp.z);
vec2 vtx = a_vs.xy * temp.xy;
vec2 vtx_pos = vec2(vtx.x * cosv - vtx.y * sinv, vtx.x * sinv + vtx.y * cosv);
vec4 pos = u_viewMat * u_objMat * vec4(0.0,0.0,0.0,1.0);
pos.xy += vtx_pos.xy;
gl_Position =  u_projMat * pos;
v_texUV = a_uvs;
v_colorMult = u_billParam[1];
v_colorOffset = u_billParam[2];
}
`;
    return vtxCode;
  }

  getUniqueShaderName() {
    return this.m_uniqueName + "_" + this.billFS.getBrnAlphaStatus();
  }

  toString() {
    return "[BillboardShaderBuffer()]";
  }

  static GetInstance() {
    if (BillboardShaderBuffer.s_instance != null) {
      return BillboardShaderBuffer.s_instance;
    }

    BillboardShaderBuffer.s_instance = new BillboardShaderBuffer();
    return BillboardShaderBuffer.s_instance;
  }

}

BillboardShaderBuffer.s_instance = new BillboardShaderBuffer();

class BillboardMaterial extends MaterialBase_1.default {
  constructor(brightnessEnabled = true, alphaEnabled = false) {
    super();
    this.m_brightnessEnabled = true;
    this.m_alphaEnabled = false;
    this.m_rz = 0;
    this.m_uniformData = new Float32Array([1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0]);
    this.m_brightnessEnabled = brightnessEnabled;
    this.m_alphaEnabled = alphaEnabled;
  }

  getCodeBuf() {
    let buf = BillboardShaderBuffer.GetInstance();
    buf.billFS.setBrightnessAndAlpha(this.m_brightnessEnabled, this.m_alphaEnabled);
    return buf;
  }

  createSelfUniformData() {
    let oum = new ShaderUniformData_1.default();
    oum.uniformNameList = ["u_billParam"];
    oum.dataList = [this.m_uniformData];
    return oum;
  }

  setRGBA4f(pr, pg, pb, pa) {
    this.m_uniformData[4] = pr;
    this.m_uniformData[5] = pg;
    this.m_uniformData[6] = pb;
    this.m_uniformData[7] = pa;
  }

  setRGB3f(pr, pg, pb) {
    this.m_uniformData[4] = pr;
    this.m_uniformData[5] = pg;
    this.m_uniformData[6] = pb;
  }

  setFadeFactor(pa) {
    this.m_uniformData[7] = pa;
  }

  getFadeFactor() {
    return this.m_uniformData[7];
  }

  setRGBAOffset4f(pr, pg, pb, pa) {
    this.m_uniformData[8] = pr;
    this.m_uniformData[9] = pg;
    this.m_uniformData[10] = pb;
    this.m_uniformData[11] = pa;
  }

  setRGBOffset3f(pr, pg, pb) {
    this.m_uniformData[8] = pr;
    this.m_uniformData[9] = pg;
    this.m_uniformData[10] = pb;
  }

  getRotationZ() {
    return this.m_rz;
  }

  setRotationZ(degrees) {
    this.m_rz = degrees;
    this.m_uniformData[2] = degrees * MathConst_1.default.MATH_PI_OVER_180;
  }

  getScaleX() {
    return this.m_uniformData[0];
  }

  getScaleY() {
    return this.m_uniformData[1];
  }

  setScaleX(p) {
    this.m_uniformData[0] = p;
  }

  setScaleY(p) {
    this.m_uniformData[1] = p;
  }

  setScaleXY(sx, sy) {
    this.m_uniformData[0] = sx;
    this.m_uniformData[1] = sy;
  }

  getUniformData() {
    return this.m_uniformData;
  }

  destroy() {
    super.destroy();
    this.m_uniformData = null;
  }

}

exports.default = BillboardMaterial;

/***/ }),

/***/ "644c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class MaterialConst {
  constructor() {}

  static GetTypeByTypeNS(tns) {
    switch (tns) {
      case "mat4":
        return MaterialConst.SHADER_MAT4;
        break;

      case "mat3":
        return MaterialConst.SHADER_MAT3;
        break;

      case "mat2":
        return MaterialConst.SHADER_MAT2;
        break;

      case "float":
        return MaterialConst.SHADER_FLOAT;
        break;

      case "int":
        return MaterialConst.SHADER_INT;
        break;

      case "vec4":
        return MaterialConst.SHADER_VEC4;
        break;

      case "vec3":
        return MaterialConst.SHADER_VEC3;
        break;

      case "vec2":
        return MaterialConst.SHADER_VEC2;
        break;

      case "vec4[]":
        return MaterialConst.SHADER_VEC4FV;
        break;

      case "vec3[]":
        return MaterialConst.SHADER_VEC3FV;
        break;

      case "vec2[]":
        return MaterialConst.SHADER_VEC2FV;
        break;

      case "sampler2D":
        return MaterialConst.SHADER_SAMPLER2D;
        break;

      case "sampler3D":
        return MaterialConst.SHADER_SAMPLER3D;
        break;

      case "samplerCube":
        return MaterialConst.SHADER_SAMPLERCUBE;
        break;

      default:
        break;
    }

    return MaterialConst.SHADER_UNDEFINED;
  }

  static GetTypeNSByType(type) {
    switch (type) {
      case MaterialConst.SHADER_MAT4:
        return "mat4";
        break;

      case MaterialConst.SHADER_MAT3:
        return "mat3";
        break;

      case MaterialConst.SHADER_MAT2:
        return "mat2";
        break;

      case MaterialConst.SHADER_FLOAT:
        return "float";
        break;

      case MaterialConst.SHADER_VEC4:
        return "vec4";

      case MaterialConst.SHADER_VEC3:
        return "vec3";
        break;

      case MaterialConst.SHADER_VEC2:
        return "vec2";
        break;

      case MaterialConst.SHADER_SAMPLER2D:
        return "sampler2D";
        break;

      case MaterialConst.SHADER_SAMPLER3D:
        return "sampler3D";
        break;

      case MaterialConst.SHADER_SAMPLERCUBE:
        return "samplerCube";
        break;

      case MaterialConst.SHADER_UNDEFINED:
        return "undefined";
        break;

      default:
        break;
    }

    return "";
  }

} // for glsl shader auto build


MaterialConst.ATTRINS_VTX_VS = "a_vs";
MaterialConst.ATTRINS_VTX_UVS = "a_uvs";
MaterialConst.ATTRINS_VTX_NVS = "a_nvs";
MaterialConst.ATTRINS_VTX_CVS = "a_cvs"; //

MaterialConst.UNIFORMNS_OBJ_MAT_NS = "u_objMat";
MaterialConst.UNIFORMNS_VIEW_MAT_NS = "u_viewMat";
MaterialConst.UNIFORMNS_PROJ_MAT_NS = "u_projMat"; // 取值范围3001(包括3001) 到 3255(包括3255)

MaterialConst.SHADER_UNDEFINED = 3010;
MaterialConst.SHADER_VEC2 = 3011;
MaterialConst.SHADER_VEC3 = 3012;
MaterialConst.SHADER_VEC4 = 3013;
MaterialConst.SHADER_VEC2FV = 3014;
MaterialConst.SHADER_VEC3FV = 3015;
MaterialConst.SHADER_VEC4FV = 3016;
MaterialConst.SHADER_MAT2 = 3017;
MaterialConst.SHADER_MAT3 = 3018;
MaterialConst.SHADER_MAT4 = 3019;
MaterialConst.SHADER_FLOAT = 3020;
MaterialConst.SHADER_INT = 3021;
MaterialConst.SHADER_MAT2FV = 3022;
MaterialConst.SHADER_MAT3FV = 3023;
MaterialConst.SHADER_MAT4FV = 3024;
MaterialConst.SHADER_SAMPLER2D = 3031;
MaterialConst.SHADER_SAMPLERCUBE = 3032;
MaterialConst.SHADER_SAMPLER3D = 3033;
MaterialConst.SHADER_PRECISION_LOWP = 3101;
MaterialConst.SHADER_PRECISION_MEDIUMP = 3111;
MaterialConst.SHADER_PRECISION_HIGHP = 3121; // texture uniform name define

MaterialConst.UNIFORM_TEX_SAMPLER2D = "sampler2D";
MaterialConst.UNIFORM_TEX_SAMPLERCUBE = "samplerCube";
MaterialConst.UNIFORM_TEX_SAMPLER3D = "sampler3D"; //

MaterialConst.UNIFORMNS_TEX_SAMPLER_0 = "u_sampler0";
MaterialConst.UNIFORMNS_TEX_SAMPLER_1 = "u_sampler1";
MaterialConst.UNIFORMNS_TEX_SAMPLER_2 = "u_sampler2";
MaterialConst.UNIFORMNS_TEX_SAMPLER_3 = "u_sampler3";
MaterialConst.UNIFORMNS_TEX_SAMPLER_4 = "u_sampler4";
MaterialConst.UNIFORMNS_TEX_SAMPLER_5 = "u_sampler5";
MaterialConst.UNIFORMNS_TEX_SAMPLER_6 = "u_sampler6";
MaterialConst.UNIFORMNS_TEX_SAMPLER_7 = "u_sampler7";
MaterialConst.UNIFORMNS_TEX_SAMPLER_LIST = [MaterialConst.UNIFORMNS_TEX_SAMPLER_0, MaterialConst.UNIFORMNS_TEX_SAMPLER_1, MaterialConst.UNIFORMNS_TEX_SAMPLER_2, MaterialConst.UNIFORMNS_TEX_SAMPLER_3, MaterialConst.UNIFORMNS_TEX_SAMPLER_4, MaterialConst.UNIFORMNS_TEX_SAMPLER_5, MaterialConst.UNIFORMNS_TEX_SAMPLER_6, MaterialConst.UNIFORMNS_TEX_SAMPLER_7];
exports.default = MaterialConst;

/***/ }),

/***/ "6af0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pwindow = window;

if (pwindow["VoxCore"] == undefined) {
  pwindow["VoxCore"] = {};
}

var VoxCore = pwindow["VoxCore"];

const ROFunctions_1 = __webpack_require__("face");

VoxCore["ROFunctions"] = ROFunctions_1.ROFunctions;

/***/ }),

/***/ "6e01":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class MathConst {
  static Clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
  }

  static IsPowerOf2(value) {
    return (value & value - 1) == 0;
  }

  static CalcCeilPowerOfTwo(value) {
    return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
  }

  static CalcNearestCeilPow2(int_n) {
    return Math.pow(2, Math.round(Math.log(int_n) / Math.LN2));
  }

  static CalcFloorCeilPow2(int_n) {
    return Math.pow(2, Math.floor(Math.log(int_n) / Math.LN2));
  }

  static DegreeToRadian(degree) {
    return MathConst.MATH_PI_OVER_180 * degree;
  }

  static Log2(f) {
    return Math.log(f) / Math.LN2;
  }

  static GetMaxMipMapLevel(width, height) {
    return Math.round(MathConst.Log2(Math.max(width, height)) + 1);
  }

  static SafeACos(x) {
    if (x <= -1.0) {
      return MathConst.MATH_PI;
    }

    if (x >= 1.0) {
      return 0.0;
    }

    return Math.acos(x);
  }

  static GetNearestCeilPow2(int_n) {
    let x = 1;

    while (x < int_n) {
      x <<= 1;
    }

    return x;
  } // ccw is positive


  static GetMinRadian(a1, a0) {
    a0 %= MathConst.MATH_2PI;
    a1 %= MathConst.MATH_2PI;

    if (a0 < a1) {
      a0 = MathConst.MATH_2PI - a1 + a0;
      if (a0 > MathConst.MATH_PI) return a0 - MathConst.MATH_2PI;
      return a0;
    } else if (a0 > a1) {
      a1 = MathConst.MATH_2PI - a0 + a1;
      if (a1 > MathConst.MATH_PI) return MathConst.MATH_2PI - a1;
      return -a1;
    }

    return 0.0;
  }

  static GetMinDegree(a0, a1) {
    let angle = 0;

    if (a1 >= 270 && a0 < 90) {
      angle = (a1 - (a0 + 360)) % 180;
    } else if (a1 <= 90 && a0 >= 270) {
      angle = (a1 + 360 - a0) % 180;
    } else {
      angle = a1 - a0; //  if (Math.abs(angle) > 180) {
      //      angle -= 360;
      //  }

      if (angle > 180) {
        angle -= 360;
        angle %= 360;
      } else if (angle < -180) {
        angle += 360;
        angle %= 360;
      }
    }

    return angle;
  }

  static GetDegreeByXY(dx, dy) {
    if (Math.abs(dx) < 0.00001) {
      if (dy >= 0) return 270;else return 90;
    }

    let angle = Math.atan(dy / dx) * 180 / Math.PI;

    if (dy > 0 && dx > 0) {
      return angle;
    } else if (dy < 0 && dx >= 0) {
      return 360 + angle;
    } else {
      return 180 + angle;
    }

    return angle;
  }

  static GetRadianByXY(dx, dy) {
    if (Math.abs(dx) < MathConst.MATH_MIN_POSITIVE) {
      if (dy >= 0) return MathConst.MATH_1PER2PI;else return MathConst.MATH_3PER2PI;
    }

    let rad = Math.atan(dy / dx);

    if (dx >= 0) {
      return rad;
    } else {
      return MathConst.MATH_PI + rad;
    }
  }

  static GetRadianByCos(cosv, dx, dy) {
    var rad = Math.acos(cosv); //Math.atan(dy/dx);

    if (dx >= 0) {
      return rad;
    } else {
      return MathConst.MATH_PI + rad;
    }
  }

}

MathConst.MATH_MIN_POSITIVE = 1e-5;
MathConst.MATH_MAX_NEGATIVE = -1e-5;
MathConst.MATH_MAX_POSITIVE = 0xffffffe;
MathConst.MATH_MIN_NEGATIVE = -0xffffffe;
MathConst.MATH_1_OVER_255 = 1.0 / 255.0;
MathConst.MATH_PI = Math.PI;
MathConst.MATH_2PI = MathConst.MATH_PI * 2.0;
MathConst.MATH_3PER2PI = MathConst.MATH_PI * 1.5;
MathConst.MATH_1PER2PI = MathConst.MATH_PI * 0.5;
MathConst.MATH_1_OVER_PI = 1.0 / MathConst.MATH_PI;
MathConst.MATH_1_OVER_360 = 1.0 / 360.0;
MathConst.MATH_1_OVER_180 = 1.0 / 180.0;
MathConst.MATH_180_OVER_PI = 180.0 / MathConst.MATH_PI;
MathConst.MATH_PI_OVER_180 = MathConst.MATH_PI / 180.0;
MathConst.MATH_LN2 = 0.6931471805599453;
exports.default = MathConst;

/***/ }),

/***/ "710f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class ROVtxBufUidStore {
  constructor() {
    this.m_useidList = [];
    this.m_removeidList = [];

    if (ROVtxBufUidStore.s_ins != null) {
      throw Error("ROVtxBufUidStore is a singleton class!!");
    }

    ROVtxBufUidStore.s_ins = this;
  }

  static GetInstance() {
    return ROVtxBufUidStore.s_ins;
  }

  __$getRemovedListLen() {
    return this.m_removeidList.length;
  }

  __$getRemovedList() {
    return this.m_removeidList;
  }

  __$attachAt(index) {
    if (index < this.m_useidList.length) {
      ++this.m_useidList[index];
    } else {
      // 这里的内存管理需要优化
      let i = this.m_useidList.length;

      for (; i <= index; ++i) {
        this.m_useidList.push(0);
      }

      ++this.m_useidList[index];
    } //console.log("ROVtxBufUidStore::__$attachAt() list["+index+"]: "+this.m_useidList[index]);

  }

  __$detachAt(index) {
    --this.m_useidList[index]; //console.log("ROVtxBufUidStore::__$detachAt() list["+index+"]: "+this.m_useidList[index]);

    if (this.m_useidList[index] < 1) {
      this.m_useidList[index] = 0;
      console.log("ROVtxBufUidStore::__$detachAt(" + index + ") tex useCount value is 0.");
      this.m_removeidList.push(index);
    }
  }

  getAttachCountAt(uid) {
    if (uid < this.m_useidList.length) {
      return this.m_useidList[uid];
    }

    return 0;
  }

  getAttachAllCount() {
    let total = 0;
    let i = 0;
    let len = this.m_useidList.length;

    for (; i < len; ++i) {
      if (this.m_useidList[i] > 0) {
        total += this.m_useidList[i];
      }
    }

    return total;
  }

}

ROVtxBufUidStore.s_ins = null;
exports.default = ROVtxBufUidStore;

/***/ }),

/***/ "7181":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class ImgTexData {
  constructor() {
    this.width = 0;
    this.height = 0;
    this.data = null;
    this.miplevel = 0; // 0表示 更新纹理数据而不会重新开辟空间, 1表示需要重新开辟空间并更新纹理数据, -1表示不需要更新

    this.status = 1;
    this.offsetx = 0;
    this.offsety = 0;
  }

  updateToGpu(gl, samplerTarget, interType, format, type, force) {
    if (this.status == 1 || force) {
      gl.texImage2D(samplerTarget, this.miplevel, interType, format, type, this.data);
    } else if (this.status == 0) {
      gl.texSubImage2D(samplerTarget, this.miplevel, this.offsetx, this.offsety, format, type, this.data);
    }

    this.status = -1;
  }

  static Create() {
    if (ImgTexData.s_list.length > 0) {
      return ImgTexData.s_list.pop();
    }

    return new ImgTexData();
  }

  static Restore(tsd) {
    if (tsd != null) {
      tsd.data = null;
      ImgTexData.s_list.push(tsd);
    }
  }

}

ImgTexData.s_list = [];
exports.default = ImgTexData;

/***/ }),

/***/ "76b0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const PlaneCalc_1 = __importDefault(__webpack_require__("d1a0"));

const SurfaceNormalCalc_1 = __importDefault(__webpack_require__("35fa"));

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const AABB_1 = __importDefault(__webpack_require__("fecb"));

const MeshBase_1 = __importDefault(__webpack_require__("cb29"));

const ROVertexBuffer_1 = __importDefault(__webpack_require__("e7d2"));

const RenderConst_1 = __webpack_require__("e08e");

const Color4_1 = __importDefault(__webpack_require__("3930"));

class RectPlaneMesh extends MeshBase_1.default {
  constructor(bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    super(bufDataUsage);
    this.color0 = new Color4_1.default();
    this.color1 = new Color4_1.default();
    this.color2 = new Color4_1.default();
    this.color3 = new Color4_1.default();
    this.offsetU = 0.0;
    this.offsetV = 0.0;
    this.uScale = 1.0;
    this.vScale = 1.0;
    this.flipVerticalUV = false;
    this.axisFlag = 0; //

    this.m_polyhedralBoo = true;
    this.m_vs = null;
    this.m_uvs = null;
    this.m_nvs = null;
    this.m_cvs = null;
    this.m_tvs = null;
    this.m_btvs = null;
    this.vsFloat32 = null;
    this.dataStepList = null;
  } // vertex


  getVS() {
    return this.m_vs;
  } // base uv


  getUVS() {
    return this.m_uvs;
  }

  setUVS(uvsLen8) {
    if (uvsLen8 != null && uvsLen8.length == 8) {
      if (this.m_uvs == null) {
        this.m_uvs = uvsLen8.slice(0);
      } else {
        this.m_uvs.set(uvsLen8);
      }
    }
  } // base nv


  getNVS() {
    return this.m_nvs;
  } // base vtx color


  getCVS() {
    return this.m_cvs;
  }

  initialize(startX, startY, pwidth, pheight) {
    if (this.m_vs != null) {
      return;
    }

    let minX = startX;
    let minY = startY;
    let maxX = startX + pwidth;
    let maxY = startY + pheight;
    let pz = 0.0; //
    // ccw is positive, left-bottom pos(minX,minY) -> right-bottom pos(maxX,minY) -> right-top pos(maxX,maxY)  -> right-top pos(minX,maxY)

    this.m_ivs = new Uint16Array([0, 1, 2, 0, 2, 3]); //this.m_ivs = new Uint32Array([0,1,2,0,2,3]);

    switch (this.axisFlag) {
      case 0:
        this.m_vs = new Float32Array([minX, minY, pz, maxX, minY, pz, maxX, maxY, pz, minX, maxY, pz]);
        break;

      case 1:
        this.m_vs = new Float32Array([maxX, pz, minY, minX, pz, minY, minX, pz, maxY, maxX, pz, maxY]);
        break;

      case 2:
        this.m_vs = new Float32Array([pz, minX, minY, pz, maxX, minY, pz, maxX, maxY, pz, minX, maxY]);
        break;

      default:
        break;
    }

    if (this.bounds == null) this.bounds = new AABB_1.default();
    this.bounds.addXYZFloat32Arr(this.m_vs);
    this.bounds.updateFast();
    ROVertexBuffer_1.default.Reset();
    ROVertexBuffer_1.default.AddFloat32Data(this.m_vs, 3);

    if (this.m_uvs == null && this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_UVS_INDEX)) {
      if (this.flipVerticalUV) {
        this.m_uvs = new Float32Array([this.offsetU + 0.0 * this.uScale, this.offsetV + 1.0 * this.vScale, this.offsetU + 1.0 * this.uScale, this.offsetV + 1.0 * this.vScale, this.offsetU + 1.0 * this.uScale, this.offsetV + 0.0 * this.vScale, this.offsetU + 0.0 * this.uScale, this.offsetV + 0.0 * this.vScale]);
      } else {
        this.m_uvs = new Float32Array([this.offsetU + 0.0 * this.uScale, this.offsetV + 0.0 * this.vScale, this.offsetU + 1.0 * this.uScale, this.offsetV + 0.0 * this.vScale, this.offsetU + 1.0 * this.uScale, this.offsetV + 1.0 * this.vScale, this.offsetU + 0.0 * this.uScale, this.offsetV + 1.0 * this.vScale]);
      }
    }

    if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_NVS_INDEX)) {
      switch (this.axisFlag) {
        case 0:
          this.m_nvs = new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0]);
          break;

        case 1:
          this.m_nvs = new Float32Array([0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0]);
          break;

        case 2:
          this.m_nvs = new Float32Array([1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0]);
          break;

        default:
          break;
      }
    }

    if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_CVS_INDEX)) {
      this.m_cvs = new Float32Array([this.color0.r, this.color0.g, this.color0.b, this.color1.r, this.color1.g, this.color1.b, this.color2.r, this.color2.g, this.color2.b, this.color3.r, this.color3.g, this.color3.b]);
    }

    if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_TVS_INDEX)) {
      let numTriangles = 2;
      this.m_tvs = new Float32Array(12);
      this.m_btvs = new Float32Array(12);
      SurfaceNormalCalc_1.default.ClacTrisTangent(this.m_vs, this.m_vs.length, this.m_uvs, this.m_nvs, numTriangles, this.m_ivs, this.m_tvs, this.m_btvs);
    }

    this.buildVbuf();
    this.vtxTotal = 4;
    this.trisNumber = 2;
    this.drawMode = RenderConst_1.RenderDrawMode.ELEMENTS_TRIANGLES;
    /*
    // VtxBufData 使用样例, 要注释掉上面的构建调用
    let bufData:VtxBufData = new VtxBufData(2);
    bufData.addAttributeDataAt(0,this.m_vs, 3);
    bufData.addAttributeDataAt(1,this.m_uvs, 2);
      let vs2:Float32Array = this.m_vs = new Float32Array([
        100.0 + maxX,pz,100.0 + minY,
        100.0 + minX,pz,100.0 + minY,
        100.0 + minX,pz,100.0 + maxY,
        //100.0 + maxX,pz,100.0 + maxY
    ]);
    
    bufData.addAttributeDataAt(0,vs2, 3);
    bufData.addAttributeDataAt(1,this.m_uvs, 2);
    //this.m_ivs = new Uint16Array([0,1,2,0,2,3, 4+0,4+1,4+2,4+0,4+2,4+3]);
    //let p1ivs:Uint16Array = new Uint16Array([4+0,4+1,4+2,4+0,4+2,4+3]);
    let p1ivs:Uint16Array = new Uint16Array([4+0,4+1,4+2]);
      bufData.addIndexData(this.m_ivs);
    bufData.addIndexData(p1ivs);
      this.m_vbuf = ROVertexBuffer.CreateByBufDataSeparate(bufData,this.getBufDataUsage());
    this.vtCount = bufData.getIndexDataLengthTotal();
    this.vtxTotal = bufData.getVerticesTotal();
    this.trisNumber = bufData.getTrianglesTotal();
    //console.log("this.vtxTotal: "+this.vtxTotal);
    //console.log("this.trisNumber: "+this.trisNumber);
    //*/

    this.buildEnd();
  }

  reinitialize() {
    this.buildVbuf();
  }

  buildVbuf() {
    ROVertexBuffer_1.default.Reset();
    ROVertexBuffer_1.default.AddFloat32Data(this.m_vs, 3);

    if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_UVS_INDEX)) {
      ROVertexBuffer_1.default.AddFloat32Data(this.m_uvs, 2);
    }

    if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_NVS_INDEX)) {
      ROVertexBuffer_1.default.AddFloat32Data(this.m_nvs, 3);
    }

    if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_CVS_INDEX)) {
      ROVertexBuffer_1.default.AddFloat32Data(this.m_cvs, 3);
    }

    if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_TVS_INDEX)) {
      ROVertexBuffer_1.default.AddFloat32Data(this.m_tvs, 3);
      ROVertexBuffer_1.default.AddFloat32Data(this.m_btvs, 3);
    }

    ROVertexBuffer_1.default.vbWholeDataEnabled = this.vbWholeDataEnabled;
    this.vtCount = this.m_ivs.length;

    if (this.m_vbuf != null) {
      ROVertexBuffer_1.default.UpdateBufData(this.m_vbuf);
    } else {
      this.m_vbuf = ROVertexBuffer_1.default.CreateBySaveData(this.getBufDataUsage(), this.getBufSortFormat());
    }

    this.m_vbuf.setUintIVSData(this.m_ivs);
    this.buildEnd();
  } // 是否是多面体实体,如果是，则可以进行三角面的相关计算等操作, 如果不是则需要进行相关的几何算法计算


  isPolyhedral() {
    return this.m_polyhedralBoo;
  } // 设置自身是否是多面体实体，根据实际需要改变相关的状态值


  setPolyhedral(boo) {
    this.m_polyhedralBoo = boo;
  }
  /**
   * 射线和自身的相交检测(多面体或几何函数(例如球体))
   * @boundsHit       表示是否包围盒体已经和射线相交了
   * @rlpv            表示物体坐标空间的射线起点
   * @rltv            表示物体坐标空间的射线朝向
   * @outV            如果检测相交存放物体坐标空间的交点
   * @return          返回值 -1 表示不会进行检测,1表示相交,0表示不相交
   */


  testRay(rlpv, rltv, outV, boundsHit) {
    if (this.m_polyhedralBoo) return -1;

    if (boundsHit) {
      switch (this.axisFlag) {
        case 0:
          PlaneCalc_1.default.IntersectionSLV2(Vector3D_1.default.Z_AXIS, 0.0, rlpv, rltv, outV);
          break;

        case 1:
          PlaneCalc_1.default.IntersectionSLV2(Vector3D_1.default.Y_AXIS, 0.0, rlpv, rltv, outV);
          break;

        case 2:
          PlaneCalc_1.default.IntersectionSLV2(Vector3D_1.default.X_AXIS, 0.0, rlpv, rltv, outV);
          break;

        default:
          break;
      }

      return 1;
    }

    return -1;
  }

  toString() {
    return "[RectPlaneMesh()]";
  }

  __$destroy() {
    if (this.isResFree()) {
      this.bounds = null;
      this.m_vs = null;
      this.m_uvs = null;
      this.m_nvs = null;
      this.m_cvs = null;

      super.__$destroy();
    }
  }

}

exports.default = RectPlaneMesh;

/***/ }),

/***/ "78e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const MaterialConst_1 = __importDefault(__webpack_require__("644c"));

class UniformLine {
  constructor() {
    this.type = -1;
    this.typeName = "";
    this.name = "";
    this.isArray = false;
    this.arrLength = 0;
    this.isTex = false;
    this.location = null;
  }

  parseCode(codeStr) {
    const SEMICOLON = ";";
    let i = codeStr.indexOf(SEMICOLON);

    if (i < 0) {
      return false;
    }

    const SPACE = " ";
    codeStr = codeStr.replace(/^\s*|\s*$/g, "");
    if (i > 0) codeStr = codeStr.slice(0, i);
    let arr = codeStr.split(SPACE);
    this.typeName = arr[arr.length - 2];
    this.name = arr[arr.length - 1];
    i = this.name.indexOf("[");
    this.isArray = i > 0;
    this.arrLength = 0;

    if (this.isArray) {
      this.arrLength = parseInt(this.name.slice(i + 1, this.name.indexOf("]", i + 1)));
      this.name = this.name.slice(0, i);
      this.typeName += "[]";
    }

    this.type = MaterialConst_1.default.GetTypeByTypeNS(this.typeName); //console.log("#### this.type: ",this.type,", this.typeName: ",this.typeName);

    if (this.type < 0) {
      return false;
    }

    this.isTex = this.type == MaterialConst_1.default.SHADER_SAMPLER2D || this.type == MaterialConst_1.default.SHADER_SAMPLERCUBE || this.type == MaterialConst_1.default.SHADER_SAMPLER3D;
    return true;
  }

}

exports.default = UniformLine;

/***/ }),

/***/ "79d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2020 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const DashedLineMesh_1 = __importDefault(__webpack_require__("9c3c"));

const DisplayEntity_1 = __importDefault(__webpack_require__("402a"));

const Line3DMaterial_1 = __importDefault(__webpack_require__("32cc"));

const Color4_1 = __importDefault(__webpack_require__("3930"));

class FrustrumFrame3DEntity extends DisplayEntity_1.default {
  constructor() {
    super();
    this.m_currMaterial = null;
    this.m_posarr = null;
    this.m_colorarr = null;
    this.m_ids = [0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7];
    this.m_cameraVersion = -1;
  }

  setRGB3f(pr, pg, pb) {
    this.m_currMaterial.setRGB3f(pr, pg, pb);
  }

  createMaterial() {
    if (this.getMaterial() == null) {
      this.m_currMaterial = new Line3DMaterial_1.default(false);
      this.setMaterial(this.m_currMaterial);
    }
  }

  __activeMesh(material) {
    if (this.getMesh() == null) {
      let mesh = new DashedLineMesh_1.default();
      mesh.vbWholeDataEnabled = false;
      mesh.setBufSortFormat(material.getBufSortFormat());
      mesh.initialize(this.m_posarr, this.m_colorarr);
      this.setMesh(mesh);
    }
  }

  initiazlize(camera, farColor = null, nearColor = null, sideColor = null) {
    let pvs = camera.getWordFrustumVtxArr();
    if (this.m_posarr == null) this.m_posarr = new Array(72);
    if (this.m_colorarr == null) this.m_colorarr = new Array(72);
    let ids = this.m_ids;
    if (farColor == null) farColor = new Color4_1.default(1.0, 0.0, 1.0, 1.0);
    if (nearColor == null) nearColor = new Color4_1.default(0.0, 0.5, 1.0);
    if (sideColor == null) sideColor = new Color4_1.default(0.0, 0.9, 0.0);
    let colors = [farColor, farColor, farColor, farColor, farColor, farColor, farColor, farColor, nearColor, nearColor, nearColor, nearColor, nearColor, nearColor, nearColor, nearColor, sideColor, sideColor, sideColor, sideColor, sideColor, sideColor, sideColor, sideColor];
    let pv;
    let color;
    let j = 0;

    for (let i = 0; i < ids.length; i++) {
      pv = pvs[ids[i]];
      color = colors[i];
      this.m_posarr[j] = pv.x;
      this.m_posarr[j + 1] = pv.y;
      this.m_posarr[j + 2] = pv.z;
      this.m_colorarr[j] = color.r;
      this.m_colorarr[j + 1] = color.g;
      this.m_colorarr[j + 2] = color.b;
      j += 3;
    }

    this.createMaterial();
    this.activeDisplay();
  }

  updateFrame(camera) {
    if (this.m_cameraVersion != camera.version) {
      this.m_cameraVersion = camera.version;
      let mesh = this.getMesh();

      if (mesh != null) {
        let pvs = camera.getWordFrustumVtxArr();
        let ids = this.m_ids;
        let pv;

        for (let i = 0; i < ids.length; i++) {
          pv = pvs[ids[i]];
          mesh.setVSXYZAt(i, pv.x, pv.y, pv.z);
        }

        return true;
      }
    }

    return false;
  }

  toString() {
    return "FrustrumFrame3DEntity(name=" + this.name + ",uid = " + this.getUid() + ", rseFlag = " + this.__$rseFlag + ")";
  }

}

exports.default = FrustrumFrame3DEntity;

/***/ }),

/***/ "7a04":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const VtxBufID_1 = __importDefault(__webpack_require__("f044"));

class VtxSeparatedBuf {
  constructor() {
    this.m_uid = -1;
    this.m_total = 0;
    this.layoutBit = 0x0;
    this.m_fOffsetList = null; //private m_pOffsetList:number[] = null;

    this.m_f32List = null;
    this.m_f32SizeList = null;
    this.m_f32PreSizeList = null;
    this.m_f32ChangedList = null;
    this.m_f32Bufs = null;
    this.m_stepFloatsTotal = 0;
    this.m_uid = VtxBufID_1.default.CreateNewID();
  }

  getUid() {
    return this.m_uid;
  }

  getType() {
    return 1;
  }

  getBuffersTotal() {
    return this.m_f32List.length;
  }

  getF32DataAt(index) {
    return this.m_f32List[index];
  }

  setF32DataAt(index, float32Arr, stepFloatsTotal, setpOffsets) {
    if (this.m_f32List == null) {
      this.m_f32List = [null, null, null, null, null, null, null, null];
      this.m_f32ChangedList = [false, false, false, false, false, false, false, false];
      this.m_f32SizeList = [0, 0, 0, 0, 0, 0, 0, 0];
      this.m_f32PreSizeList = [0, 0, 0, 0, 0, 0, 0, 0];
    }

    this.m_f32List[index] = float32Arr;

    if (this.m_f32Bufs != null && float32Arr != null) {
      this.m_f32ChangedList[index] = true;
    }

    if (setpOffsets != null) this.m_fOffsetList = setpOffsets;
    this.m_stepFloatsTotal = stepFloatsTotal; //console.log("VtxSeparatedBuf::setF32DataAt(),"+this+" m_f32List.length: "+float32Arr.length+", this.m_f32PreSizeList: "+this.m_f32PreSizeList);

    if (float32Arr != null) {
      this.m_f32SizeList[index] = float32Arr.length;
    }
  }

  setData4fAt(vertexI, attribI, px, py, pz, pw) {
    vertexI *= this.m_fOffsetList[attribI];
    this.m_f32List[attribI][vertexI++] = px;
    this.m_f32List[attribI][vertexI++] = py;
    this.m_f32List[attribI][vertexI++] = pz;
    this.m_f32List[attribI][vertexI++] = pw;
  }

  setData3fAt(vertexI, attribI, px, py, pz) {
    vertexI *= this.m_fOffsetList[attribI];
    this.m_f32List[attribI][vertexI++] = px;
    this.m_f32List[attribI][vertexI++] = py;
    this.m_f32List[attribI][vertexI++] = pz;
  }

  setData2fAt(vertexI, attribI, px, py) {
    vertexI *= this.m_fOffsetList[attribI];
    this.m_f32List[attribI][vertexI++] = px;
    this.m_f32List[attribI][vertexI++] = py;
  }

  destroy() {
    this.m_f32List = null;
    this.m_f32ChangedList = null;
    this.m_f32SizeList = null;
    this.m_f32PreSizeList = null;
    console.log("VtxSeparatedBuf::__$destroy()... ", this);
    this.m_f32List = null;
  }

  toString() {
    return "VtxSeparatedBuf(uid = " + this.m_uid + ")";
  }

}

exports.default = VtxSeparatedBuf;

/***/ }),

/***/ "7c63":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

const RenderConst_1 = __webpack_require__("e08e");

class RenderColorMask {
  //private m_state: number = 0;
  constructor(rBoo, gBoo, bBoo, aBoo) {
    this.m_uid = -1;
    this.m_rBoo = true;
    this.m_gBoo = true;
    this.m_bBoo = true;
    this.m_aBoo = true;
    this.m_uid = RenderColorMask.s_uid++;
    this.m_rBoo = rBoo;
    this.m_gBoo = gBoo;
    this.m_bBoo = bBoo;
    this.m_aBoo = aBoo;
  }

  getUid() {
    return this.m_uid;
  }

  getR() {
    return this.m_rBoo;
  }

  getG() {
    return this.m_gBoo;
  }

  getB() {
    return this.m_bBoo;
  }

  getA() {
    return this.m_aBoo;
  }

  use() {
    if (RenderColorMask.s_state != this.m_uid) {
      RenderColorMask.Rstate.setColorMask(this.m_rBoo, this.m_gBoo, this.m_bBoo, this.m_aBoo);
      RenderColorMask.s_state = this.m_uid;
    }
  }

  static Create(objName, rBoo, gBoo, bBoo, aBoo) {
    if (RenderColorMask.s_stsNameMap.has(objName)) {
      let po = RenderColorMask.s_stsNameMap.get(objName);
      return po.getUid();
    }

    let key = (rBoo ? 1 << 6 : 1 << 5) | (gBoo ? 1 << 4 : 1 << 3) | (bBoo ? 1 << 2 : 1 << 1) | (aBoo ? 1 : 0);

    if (RenderColorMask.s_stsMap.has(key)) {
      let po = RenderColorMask.s_stsMap.get(key);
      key = po.getUid();
    } else {
      let po = new RenderColorMask(rBoo, gBoo, bBoo, aBoo);
      key = po.getUid();
      RenderColorMask.s_stsMap.set(key, po);
      RenderColorMask.s_stsNameMap.set(objName, po);
      RenderColorMask.s_states.push(po);
      ++RenderColorMask.s_statesLen;
    }

    return key;
  }

  static GetColorMaskByName(objName) {
    if (RenderColorMask.s_stsNameMap.has(objName)) {
      let po = RenderColorMask.s_stsNameMap.get(objName);
      return po.getUid();
    }

    return -1;
  } // @param           state come from RODisp::renderState


  static UseRenderState(state) {
    if (RenderColorMask.s_unlocked && RenderColorMask.Rstate.roColorMask != state) {
      if (state > -1 && state < RenderColorMask.s_statesLen) {
        RenderColorMask.s_states[state].use();
      }
    }
  }

  static UseColorMaskByName(stateName) {
    let state = RenderColorMask.GetColorMaskByName(stateName); //trace("state: "+state+", stateName: "+stateName);

    if (RenderColorMask.s_unlocked && RenderColorMask.Rstate.roColorMask != state) {
      if (state > -1 && state < RenderColorMask.s_statesLen) {
        RenderColorMask.s_states[state].use();
      }
    }
  }

  static Lock() {
    RenderColorMask.s_unlocked = false;
  }

  static Unlock() {
    RenderColorMask.s_unlocked = true;
  }

  static Reset() {
    RenderColorMask.s_state = -1;
  }

}

RenderColorMask.s_uid = 0;
RenderColorMask.s_state = -1;
RenderColorMask.s_states = [];
RenderColorMask.s_statesLen = 1;
RenderColorMask.s_stsMap = new Map();
RenderColorMask.s_stsNameMap = new Map();
RenderColorMask.s_unlocked = true;
RenderColorMask.ALL_TRUE_COLOR_MASK = 0;
RenderColorMask.ALL_FALSE_COLOR_MASK = 1;
RenderColorMask.Rstate = null;
exports.RenderColorMask = RenderColorMask;

class RenderStateObject {
  constructor(cullFaceMode, blendMode, depthTestMode) {
    this.m_uid = -1;
    this.m_cullFaceMode = 0; // blend mode

    this.m_blendMode = 0; // depth test type mode

    this.m_depthTestMode = 0; // shadow status Mode(receive | make | receive and make | none)

    this.m_shadowMode = 0;
    this.m_uid = RenderStateObject.s_uid++;
    this.m_cullFaceMode = cullFaceMode;
    this.m_blendMode = blendMode;
    this.m_depthTestMode = depthTestMode;
  }

  getUid() {
    return this.m_uid;
  }

  getCullFaceMode() {
    return this.m_cullFaceMode;
  }

  getDepthTestMode() {
    return this.m_depthTestMode;
  }

  getBlendMode() {
    return this.m_blendMode;
  }

  use() {
    if (RenderStateObject.s_state != this.m_uid) {
      //console.log("RenderStateObject this.m_uid: ",this.m_uid);
      RenderStateObject.Rstate.setCullFaceMode(this.m_cullFaceMode); //RenderStateObject.Rstate.setBlendMode(this.m_blendMode);

      let list = RenderStateObject.s_blendModes[RenderStateObject.m_blendMode];

      if (RenderStateObject.m_blendMode < 0) {
        RenderStateObject.Rstate.setBlendMode(this.m_blendMode, RenderStateObject.s_blendModes[this.m_blendMode]);
      } else {
        RenderStateObject.Rstate.setBlendMode(RenderStateObject.m_blendMode, RenderStateObject.s_blendModes[RenderStateObject.m_blendMode]);
      }

      if (RenderStateObject.s_depthTestMode < 0) {
        RenderStateObject.Rstate.setDepthTestMode(this.m_depthTestMode);
      } else {
        RenderStateObject.Rstate.setDepthTestMode(RenderStateObject.s_depthTestMode);
      } //


      RenderStateObject.s_state = this.m_uid;
    }
  }

  static CreateBlendModeSeparate(name, srcRGB, dstRGB, srcAlpha, dstAlpha, equationRGB = 0, equationAlpha = 0) {
    if (name != null && name != "") {
      let b;

      if (RenderStateObject.s_blendModeNameMap.has(name)) {
        b = RenderStateObject.s_blendModeNameMap.get(name);
        return RenderStateObject.s_blendModeIndexMap.get(b);
      }

      if (equationRGB < 1) {
        equationRGB = RenderConst_1.GLBlendEquation.FUNC_ADD;
      }

      if (equationAlpha < 1) {
        equationAlpha = RenderConst_1.GLBlendEquation.FUNC_ADD;
      }

      let type = 1;
      b = 31;
      b = b * 131 + srcRGB;
      b = b * 131 + dstRGB;

      if (srcAlpha > 0 && dstAlpha > 0) {
        b = b * 131 + srcAlpha;
        b = b * 131 + dstAlpha;
        type = 1;
      }

      if (RenderStateObject.s_blendModeIndexMap.has(b)) {
        console.warn("This blendmode value already exists, its name is " + name + ".");
        RenderStateObject.s_blendModeNameMap.set(name, b);
        return RenderStateObject.s_blendModeIndexMap.get(b);
      }

      let index = ++RenderStateObject.s_blendModeIndex;
      RenderStateObject.s_blendModeNameMap.set(name, b);
      RenderStateObject.s_blendModeIndexMap.set(b, index);
      let list = [type, equationRGB, equationAlpha, srcRGB, dstRGB, srcAlpha, dstAlpha];
      RenderStateObject.s_blendModes[index] = list;
      return index;
    }

    return 0;
  }

  static CreateBlendMode(name, srcColor, dstColor, blendEquation = 0) {
    if (name != null && name != "") {
      let b;

      if (RenderStateObject.s_blendModeNameMap.has(name)) {
        b = RenderStateObject.s_blendModeNameMap.get(name);
        return RenderStateObject.s_blendModeIndexMap.get(b);
      }

      if (blendEquation < 1) {
        blendEquation = RenderConst_1.GLBlendEquation.FUNC_ADD;
      }

      let type = 0;
      b = 31;
      b = b * 131 + srcColor;
      b = b * 131 + dstColor;

      if (RenderStateObject.s_blendModeIndexMap.has(b)) {
        return RenderStateObject.s_blendModeIndexMap.get(b);
      }

      let index = ++RenderStateObject.s_blendModeIndex;
      RenderStateObject.s_blendModeNameMap.set(name, b);
      RenderStateObject.s_blendModeIndexMap.set(b, index);
      let list = [type, blendEquation, 0, srcColor, dstColor, 0, 0]; //console.log("list: ",list);

      RenderStateObject.s_blendModes[index] = list;
      return index;
    }

    return 0;
  }

  static Create(objName, cullFaceMode, blendMode, depthTestMode) {
    if (RenderStateObject.s_stsNameMap.has(objName)) {
      let po = RenderStateObject.s_stsNameMap.get(objName);
      return po.getUid();
    } //let key: number = depthTestMode << 8 | blendMode << 4 | cullFaceMode;


    let key = 31;
    key = key * 131 + depthTestMode;
    key = key * 131 + blendMode;
    key = key * 131 + cullFaceMode;

    if (RenderStateObject.s_stsMap.has(key)) {
      let po = RenderStateObject.s_stsMap.get(key);
      key = po.getUid();
    } else {
      let po = new RenderStateObject(cullFaceMode, blendMode, depthTestMode);
      key = po.getUid();
      RenderStateObject.s_stsMap.set(key, po);
      RenderStateObject.s_stsNameMap.set(objName, po);
      RenderStateObject.s_states.push(po);
      ++RenderStateObject.s_statesLen;
    }

    return key;
  }

  static GetRenderStateByName(objName) {
    if (RenderStateObject.s_stsNameMap.has(objName)) {
      let po = RenderStateObject.s_stsNameMap.get(objName);
      return po.getUid();
    }

    return -1;
  } // @param           state come from RODisp::renderState


  static UseRenderState(state) {
    //if(RenderStateObject.s_unlocked && RenderStateObject.Rstate.roState != state)                
    if (RenderStateObject.s_unlocked && RenderStateObject.s_state != state) {
      if (state > -1 && state < RenderStateObject.s_statesLen) {
        RenderStateObject.s_states[state].use();
      }
    }
  }

  static UseRenderStateByName(stateName) {
    if (RenderStateObject.s_unlocked) {
      let state = RenderStateObject.GetRenderStateByName(stateName); //trace("state: "+state+", stateName: "+stateName);
      //if(RenderStateObject.Rstate.roState != state)

      if (RenderStateObject.s_state != state) {
        if (state > -1 && state < RenderStateObject.s_statesLen) {
          RenderStateObject.s_states[state].use();
        }
      }
    }
  }

  static UnlockBlendMode() {
    RenderStateObject.m_blendMode = RenderStateObject.s_preBlendMode;
  }

  static LockBlendMode(blendMode) {
    RenderStateObject.s_preBlendMode = RenderStateObject.m_blendMode;
    RenderStateObject.m_blendMode = blendMode;
  }

  static UnlockDepthTestMode() {
    RenderStateObject.s_depthTestMode = RenderStateObject.s_preDepthTestMode;
  }

  static LockDepthTestMode(depthTestMode) {
    RenderStateObject.s_preDepthTestMode = RenderStateObject.s_depthTestMode;
    RenderStateObject.s_depthTestMode = depthTestMode;
  }

  static Lock() {
    RenderStateObject.s_unlocked = false;
  }

  static Unlock() {
    RenderStateObject.s_unlocked = true;
  }

  static Reset() {
    RenderStateObject.s_state = -1;
  }

}

RenderStateObject.s_uid = 0;
RenderStateObject.s_state = -1;
RenderStateObject.s_states = [];
RenderStateObject.s_statesLen = 1;
RenderStateObject.m_blendMode = -1;
RenderStateObject.s_depthTestMode = -1;
RenderStateObject.s_stsMap = new Map();
RenderStateObject.s_stsNameMap = new Map();
RenderStateObject.s_blendModeNameMap = new Map();
RenderStateObject.s_blendModeIndexMap = new Map();
RenderStateObject.s_blendModeIndex = 0;
RenderStateObject.s_blendModes = new Array(256);
RenderStateObject.s_unlocked = true;
RenderStateObject.Rstate = null;
RenderStateObject.s_preBlendMode = -1;
RenderStateObject.s_preDepthTestMode = -1;
exports.RenderStateObject = RenderStateObject;

class ROStateUnit {
  constructor() {
    this.stencilMask = -1;
  }

}

class RODrawState {
  constructor() {
    this.m_units = new Array(128);
    this.m_unit = null;
    this.m_blendMode = RenderConst_1.RenderBlendMode.NORMAL;
    this.m_cullMode = RenderConst_1.CullFaceMode.NONE;
    this.m_depthTestType = RenderConst_1.DepthTestMode.DISABLE;
    this.m_cullDisabled = true;
    this.m_context = null;
    this.m_gl = null;
    this.roColorMask = -11;
  }

  reset() {
    this.roColorMask = -11;
  }

  setRenderContext(context) {
    this.m_context = context;
    this.m_gl = context.getRC();
    let rcui = this.m_gl.rcuid;
    this.m_unit = this.m_units[rcui];

    if (this.m_unit == null) {
      this.m_unit = this.m_units[rcui] = new ROStateUnit();
    }
  }

  setColorMask(mr, mg, mb, ma) {
    this.m_gl.colorMask(mr, mg, mb, ma);
  }

  setStencilFunc(func, ref, mask) {
    this.m_gl.stencilFunc(func, ref, mask);
  }

  setStencilMask(mask) {
    if (this.m_unit.stencilMask != mask && mask >= 0) {
      this.m_unit.stencilMask = mask;
      this.m_gl.stencilMask(mask);
    }
  }

  setStencilOp(fail, zfail, zpass) {
    this.m_gl.stencilOp(fail, zfail, zpass);
  }

  setDepthTestEnable(enable) {
    if (enable) {
      this.m_gl.enable(this.m_gl.DEPTH_TEST);
    } else {
      this.m_gl.disable(this.m_gl.DEPTH_TEST);
    }
  }

  setCullFaceEnable(enable) {
    if (enable) {
      this.m_gl.enable(this.m_gl.CULL_FACE);
    } else {
      this.m_gl.disable(this.m_gl.CULL_FACE);
    }
  }

  setBlendEnable(enable) {
    if (enable) {
      this.m_gl.enable(this.m_gl.BLEND);
    } else {
      this.m_gl.disable(this.m_gl.BLEND);
    }
  }

  setCullFaceMode(mode) {
    if (this.m_cullMode != mode) {
      this.m_cullMode = mode;

      if (mode != RenderConst_1.CullFaceMode.NONE) {
        if (this.m_cullDisabled) {
          this.m_cullDisabled = false;
          this.m_gl.enable(this.m_gl.CULL_FACE);
        }

        this.m_gl.cullFace(mode);
      } else if (!this.m_cullDisabled) {
        this.m_cullDisabled = true;
        this.m_gl.disable(this.m_gl.CULL_FACE);
      }
    }
  }

  setBlendMode(mode, params) {
    if (this.m_blendMode != mode) {
      //console.log("this.m_blendMode: "+this.m_blendMode + ",mode: "+mode, params);
      this.m_blendMode = mode;

      if (mode > 0) {
        if (params[0] < 1) {
          //FUNC_ADD
          this.m_gl.blendEquation(this.m_gl.FUNC_ADD);
          this.m_gl.blendFunc(this.m_gl.ONE, this.m_gl.ZERO);
          this.m_gl.blendEquation(params[1]);
          this.m_gl.blendFunc(params[3], params[4]);
        } else {
          this.m_gl.blendEquationSeparate(params[1], params[2]);
          this.m_gl.blendFuncSeparate(params[3], params[4], params[5], params[6]);
        }
      } else {
        this.m_gl.disable(this.m_gl.BLEND);
      }
    }
  }

  setDepthTestMode(type) {
    if (this.m_depthTestType != type) {
      this.m_depthTestType = type; //trace("RendererBase::setDepthTest(),type：",std::to_string(static_cast<int>(type)));

      switch (type) {
        case RenderConst_1.DepthTestMode.ALWAYS:
          //console.log("ALWAYS type: ", type,this.m_gl.ALWAYS);
          this.m_gl.depthMask(false);
          this.m_gl.depthFunc(this.m_gl.ALWAYS);
          break;

        case RenderConst_1.DepthTestMode.SKY:
          this.m_gl.depthMask(true);
          this.m_gl.depthFunc(this.m_gl.LEQUAL);
          break;

        case RenderConst_1.DepthTestMode.OPAQUE:
          //console.log("OPAQUE type: ", type,this.m_gl.LESS);
          this.m_gl.depthMask(true);
          this.m_gl.depthFunc(this.m_gl.LESS);
          break;

        case RenderConst_1.DepthTestMode.OPAQUE_OVERHEAD:
          this.m_gl.depthMask(false);
          this.m_gl.depthFunc(this.m_gl.EQUAL);
          break;

        case RenderConst_1.DepthTestMode.DECALS:
          this.m_gl.depthMask(false);
          this.m_gl.depthFunc(this.m_gl.LEQUAL);
          break;

        case RenderConst_1.DepthTestMode.BLEND:
          this.m_gl.depthMask(false);
          this.m_gl.depthFunc(this.m_gl.LESS);
          break;

        case RenderConst_1.DepthTestMode.WIRE_FRAME:
          this.m_gl.depthMask(true);
          this.m_gl.depthFunc(this.m_gl.LEQUAL);
          break;

        case RenderConst_1.DepthTestMode.NEXT_LAYER:
          this.m_gl.depthMask(false);
          this.m_gl.depthFunc(this.m_gl.ALWAYS);
          break;

        case RenderConst_1.DepthTestMode.TRUE_EQUAL:
          this.m_gl.depthMask(true);
          this.m_gl.depthFunc(this.m_gl.EQUAL);
          break;

        case RenderConst_1.DepthTestMode.TRUE_GREATER:
          this.m_gl.depthMask(true);
          this.m_gl.depthFunc(this.m_gl.GREATER);
          break;

        case RenderConst_1.DepthTestMode.TRUE_GEQUAL:
          this.m_gl.depthMask(true);
          this.m_gl.depthFunc(this.m_gl.GEQUAL);
          break;

        case RenderConst_1.DepthTestMode.WIRE_FRAME_NEXT:
          break;

        default:
          break;
      }
    }
  }

}

exports.RODrawState = RODrawState;

/***/ }),

/***/ "81ce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

class GLSLConverter {
  static Es2VtxShderToES3(glslStr) {
    let codeStr = glslStr; //attribute

    const ATTRIBUTE = "attribute"; //const POSY_OUTPUT = "out";
    //const POSY_INPUT = "in";

    const VARYING = "varying ";
    let i = codeStr.indexOf(ATTRIBUTE);
    let j = 0;

    while (i >= 0) {
      codeStr = codeStr.slice(0, i) + "layout(location=" + j + ") in" + codeStr.slice(i + 9);
      i = codeStr.indexOf(ATTRIBUTE);
      j++;
    }

    let regex = new RegExp(VARYING, "g");
    codeStr = codeStr.replace(regex, "out "); //i = codeStr.indexOf(ATTRIBUTE);

    return "#version 300 es\n" + codeStr;
  }

  static Es2FragShderToES3(glslStr) {
    let codeStr = glslStr; //attribute

    const GL1_OUTPUT = "gl_FragColor";
    const VARYING = "varying ";
    let i = codeStr.indexOf(GL1_OUTPUT);
    let j = 0;
    let outFragColor = "FragColorOut_" + j;
    if (i >= 0) codeStr = codeStr.slice(0, i) + outFragColor + codeStr.slice(i + 12);
    i = codeStr.indexOf("void ");
    codeStr = codeStr.slice(0, i) + "out vec4 " + outFragColor + ";\n" + codeStr.slice(i);
    let regex = new RegExp(VARYING, "g");
    codeStr = codeStr.replace(regex, "in ");
    regex = new RegExp(" texture2D", "g");
    codeStr = codeStr.replace(regex, " texture");
    regex = new RegExp(" textureCube", "g");
    codeStr = codeStr.replace(regex, " texture");
    return "#version 300 es\n" + codeStr;
  }

  static Es3VtxShaderToES2(codeStr) {
    const regExp0 = /^#.+(\bes|core\b)/;
    codeStr = codeStr.replace(regExp0, "");
    const regExp1 = /\blayout\b.+\bin\b/g;
    codeStr = codeStr.replace(regExp1, "attribute");
    const regExp2 = /\bout\b/g;
    codeStr = codeStr.replace(regExp2, "varying");
    const regExp3 = /\btexture\b/g;
    codeStr = codeStr.replace(regExp3, "texture2D");

    if (codeStr.indexOf("#version") >= 0) {
      codeStr = codeStr.replace("#version", "//#version");
    } //*


    let j = 0;
    let k = 0;
    let i = codeStr.indexOf("inverse(");

    if (i < 0) {
      i = codeStr.indexOf("inverse (");
    }

    let subStr = "";
    let invMat3Boo = false;
    let invMat4Boo = false;

    while (i > 3) {
      j = codeStr.indexOf(")", i + 2); //get var name

      subStr = codeStr.slice(i + 2, j);

      if (subStr.indexOf("mat3") > 0) {
        invMat3Boo = true;
      } else {
        // 去除空格,得到实际的变量名
        subStr = subStr.replace(/\s+/g, "");
        j = subStr.indexOf("(");
        subStr = subStr.slice(j + 1); // 查找第一次定义的地方

        j = codeStr.indexOf(subStr, 1); // 查找在这位置前面的最近的mat or vec字符                

        k = codeStr.lastIndexOf("mat", j);

        if (k > 0) {
          subStr = codeStr.slice(k, j);
          subStr = subStr.replace(/\s+/g, "");

          switch (subStr) {
            case "mat3":
              invMat3Boo = true;
              break;

            case "mat4":
              invMat4Boo = true;
              break;
          }
        }
      }

      i = codeStr.indexOf("inverse(", i + 5);

      if (i < 0) {
        i = codeStr.indexOf("inverse (", i + 5);
      }

      if (invMat3Boo && invMat4Boo) {
        break;
      }
    }

    j = 0;
    i = codeStr.indexOf("transpose(");

    if (i < 0) {
      i = codeStr.indexOf("transpose (");
    }

    subStr = "";
    let trsMat3Boo = false;
    let trsMat4Boo = false;

    while (i > 3) {
      j = codeStr.indexOf(")", i + 2);
      subStr = codeStr.slice(i + 2, j + 1);

      if (subStr.indexOf("mat3") > 0) {
        trsMat3Boo = true;
      } else {
        // 去除空格,得到实际的变量名
        subStr = subStr.replace(/\s+/g, "");
        j = subStr.indexOf("(");
        subStr = subStr.slice(j + 1); // 查找第一次定义的地方

        j = codeStr.indexOf(subStr, 1); // 查找在这位置前面的最近的mat or vec字符                

        k = codeStr.lastIndexOf("mat", j);

        if (k > 0) {
          subStr = codeStr.slice(k, j);
          subStr = subStr.replace(/\s+/g, ""); //trace("Var Name B: "+subStr);

          switch (subStr) {
            case "mat3":
              trsMat3Boo = true;
              break;

            case "mat4":
              trsMat4Boo = true;
              break;
          }
        }
      }

      i = codeStr.indexOf("transpose(", i + 5);

      if (i < 0) {
        i = codeStr.indexOf("transpose (", i + 5);
      }

      if (trsMat3Boo && trsMat4Boo) {
        //trsMat3Boo = trsMat4Boo = true;
        break;
      }
    }

    if (invMat3Boo || invMat4Boo) {
      i = codeStr.indexOf("void ");

      if (i > 10) {
        if (invMat3Boo && invMat4Boo) {
          codeStr = codeStr.slice(0, i) + GLSLConverter.__glslInverseMat3 + GLSLConverter.__glslInverseMat4 + codeStr.slice(i);
        } else if (invMat3Boo) {
          codeStr = codeStr.slice(0, i) + GLSLConverter.__glslInverseMat3 + codeStr.slice(i);
        } else if (invMat4Boo) {
          codeStr = codeStr.slice(0, i) + GLSLConverter.__glslInverseMat4 + codeStr.slice(i);
        }
      }
    }

    if (trsMat3Boo || trsMat4Boo) {
      i = codeStr.indexOf("void ");

      if (i > 10) {
        if (trsMat3Boo && trsMat4Boo) {
          codeStr = codeStr.slice(0, i) + GLSLConverter.__glslTransposeMat3 + GLSLConverter.__glslTransposeMat4 + codeStr.slice(i);
        } else if (trsMat3Boo) {
          codeStr = codeStr.slice(0, i) + GLSLConverter.__glslTransposeMat3 + codeStr.slice(i);
        } else if (trsMat4Boo) {
          codeStr = codeStr.slice(0, i) + GLSLConverter.__glslTransposeMat4 + codeStr.slice(i);
        }
      }
    }

    return codeStr;
  }

  static Es3FragShaderToES2(codeStr) {
    const regExp0 = /^#.+(\bes|core\b)/;
    codeStr = codeStr.replace(regExp0, ""); // 防止函数中的in 被替换
    //const regExpFuncIn:RegExp = /\b in \b/g;

    const regExpFuncIn = new RegExp(" in ", "g");
    codeStr = codeStr.replace(regExpFuncIn, "_fref_");
    const regExp1 = /\bin\b/g;
    codeStr = codeStr.replace(regExp1, "varying"); // 防止函数中的in 被替换

    const regExpToFuncIn = new RegExp("_fref_", "g");
    codeStr = codeStr.replace(regExpToFuncIn, " in "); //codeStr = codeStr.replace(regExp1, "varying");

    const regExp2 = /\btexture\b/g;
    codeStr = codeStr.replace(regExp2, "texture2D");
    const regExp3 = /" "/g;
    let shaderStr = codeStr; // 替换 frag (layout) out

    const semicolon = ";";
    const out_flag = "layout";
    let i = shaderStr.indexOf(out_flag);
    let j = 0;
    let t = 0;
    let subStr = "";
    let keyName = "";
    let keyIndex = 0;
    let tempReg = null;
    let keys = [];
    let indexList = [];

    while (i >= 0) {
      j = shaderStr.indexOf(semicolon, i + 1);
      subStr = shaderStr.slice(i + 1, j);
      keyName = subStr.slice(subStr.lastIndexOf(" ") + 1);
      keyIndex = subStr.indexOf(")");
      i = subStr.lastIndexOf("=", keyIndex) + 1;
      subStr = subStr.slice(i + 1, keyIndex);
      keyIndex = parseInt(subStr.replace(regExp3, ""));
      keys.push(keyName);
      indexList.push(keyIndex);
      i = shaderStr.indexOf(out_flag, j);
    }

    let len = keys.length;

    if (len > 0) {
      tempReg = /layout/g;
      codeStr = codeStr.replace(tempReg, "//layout");

      if (len > 1) {
        i = 0;

        while (i < len) {
          tempReg = new RegExp(keys[i], "g");
          codeStr = codeStr.replace(tempReg, "gl_FragData[" + indexList[i] + "]");
          ++i;
        }
      } else {
        tempReg = new RegExp(keyName, "g");
        codeStr = codeStr.replace(tempReg, "gl_FragColor");
      }
    } else {
      i = shaderStr.indexOf("out ");

      if (i > 0) {
        j = shaderStr.indexOf(semicolon, i + 1);
        subStr = shaderStr.slice(i + 1, j);
        keyName = subStr.slice(subStr.lastIndexOf(" ") + 1);
        tempReg = new RegExp(keyName, "g");
        codeStr = codeStr.replace(tempReg, "gl_FragColor");
        tempReg = /\bout\b/g;
        codeStr = codeStr.replace(tempReg, "//out");
      }
    }

    if (len > 1) {
      codeStr = "#extension GL_EXT_draw_buffers: require\n" + codeStr;
    }

    if (codeStr.indexOf("#version") >= 0) {
      codeStr = codeStr.replace("#version", "//#version");
    } // correct samplerCube sampler


    i = 0; ///*

    for (let k = 0; k < 16; ++k) {
      i = codeStr.indexOf("samplerCube ", i);

      if (i > 0) {
        j = codeStr.indexOf(";", i);
        subStr = shaderStr.slice(i + 12, j);
        keyName = "";
        let arr = subStr.split(" ");

        for (let t = 0; t < 16; ++t) {
          if (arr[t] != "") {
            // find samplerCube uniform name
            keyName = arr[t];
            break;
          }
        }

        for (len = 0; len < 16; ++len) {
          j = codeStr.indexOf(keyName, j + 1);

          if (j > 0) {
            t = codeStr.lastIndexOf("texture2D", j - 1);

            if (t < 0) {
              break;
            }

            subStr = codeStr.slice(t, j);
            codeStr = codeStr.slice(0, t) + "textureCube(" + codeStr.slice(j);
          } else {
            break;
          }

          j += 2;
        }
      } else {
        break;
      }

      i += 4;
    } //*/


    return codeStr;
  }

}

GLSLConverter.__glslTransposeMat3 = `
    mat3 transpose(mat3 m) {
        return mat3(m[0][0],m[1][0],m[2][0],
            m[0][1],m[1][1],m[2][1],
            m[0][2],m[1][2],m[2][2]);
    }
    `;
GLSLConverter.__glslTransposeMat4 = `
    mat4 transpose(mat4 m) {
        return mat4(m[0][0],m[1][0],m[2][0],m[3][0],
            m[0][1],m[1][1],m[2][1],m[3][1],
            m[0][2],m[1][2],m[2][2],m[3][2],
            m[0][3],m[1][3],m[2][3],m[3][3]);
    }
    `;
GLSLConverter.__glslInverseMat3 = `
    mat3 inverse(mat3 m) {
        float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];
        float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];
        float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];  
        float b01 = a22 * a11 - a12 * a21;
        float b11 = -a22 * a10 + a12 * a20;
        float b21 = a21 * a10 - a11 * a20;  
        float det = a00 * b01 + a01 * b11 + a02 * b21;  
        return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),
                    b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),
                    b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;
    }
    `;
GLSLConverter.__glslInverseMat4 = `
    mat4 inverse(mat4 m) {
        float
            a00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],
            a10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],
            a20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],
            a30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3],
            b00 = a00 * a11 - a01 * a10,
            b01 = a00 * a12 - a02 * a10,
            b02 = a00 * a13 - a03 * a10,
            b03 = a01 * a12 - a02 * a11,
            b04 = a01 * a13 - a03 * a11,
            b05 = a02 * a13 - a03 * a12,
            b06 = a20 * a31 - a21 * a30,
            b07 = a20 * a32 - a22 * a30,
            b08 = a20 * a33 - a23 * a30,
            b09 = a21 * a32 - a22 * a31,
            b10 = a21 * a33 - a23 * a31,
            b11 = a22 * a33 - a23 * a32,
            det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        return mat4(
            a11 * b11 - a12 * b10 + a13 * b09,
            a02 * b10 - a01 * b11 - a03 * b09,
            a31 * b05 - a32 * b04 + a33 * b03,
            a22 * b04 - a21 * b05 - a23 * b03,
            a12 * b08 - a10 * b11 - a13 * b07,
            a00 * b11 - a02 * b08 + a03 * b07,
            a32 * b02 - a30 * b05 - a33 * b01,
            a20 * b05 - a22 * b02 + a23 * b01,
            a10 * b10 - a11 * b08 + a13 * b06,
            a01 * b08 - a00 * b10 - a03 * b06,
            a30 * b04 - a31 * b02 + a33 * b00,
            a21 * b02 - a20 * b04 - a23 * b00,
            a11 * b07 - a10 * b09 - a12 * b06,
            a00 * b09 - a01 * b07 + a02 * b06,
            a31 * b01 - a30 * b03 - a32 * b00,
            a20 * b03 - a21 * b01 + a22 * b00) / det;
        }
    `;
exports.default = GLSLConverter;

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8a0a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const BitConst_1 = __importDefault(__webpack_require__("ca6c"));

class VtxBufConst {
  //
  static ToGL(gl, param) {
    switch (param) {
      case VtxBufConst.VTX_STATIC_DRAW:
        return gl.STATIC_DRAW;
        break;

      case VtxBufConst.VTX_DYNAMIC_DRAW:
        return gl.DYNAMIC_DRAW;
        break;

      case VtxBufConst.VTX_STREAM_DRAW:
        return gl.STREAM_DRAW;
        break;

      case VtxBufConst.VTX_STATIC_READ:
        return gl.STATIC_READ;
        break;

      case VtxBufConst.VTX_DYNAMIC_READ:
        return gl.DYNAMIC_READ;
        break;

      case VtxBufConst.VTX_STREAM_READ:
        return gl.STREAM_READ;
        break;

      case VtxBufConst.VTX_STATIC_COPY:
        return gl.STATIC_COPY;
        break;

      case VtxBufConst.VTX_DYNAMIC_COPY:
        return gl.DYNAMIC_COPY;
        break;

      case VtxBufConst.VTX_STREAM_COPY:
        return gl.STREAM_COPY;
        break;

      default:
        break;
    }

    return gl.STATIC_DRAW;
  }

  static GetVBufTypeByNS(pns) {
    switch (pns) {
      case VtxBufConst.VBUF_VS_NS:
        return VtxBufConst.VBUF_VS;
        break;

      case VtxBufConst.VBUF_UVS_NS:
        return VtxBufConst.VBUF_UVS;
        break;

      case VtxBufConst.VBUF_NVS_NS:
        return VtxBufConst.VBUF_NVS;
        break;

      case VtxBufConst.VBUF_CVS_NS:
        return VtxBufConst.VBUF_CVS;
        break;
      ///////////////////

      case VtxBufConst.VBUF_VS2_NS:
        return VtxBufConst.VBUF_VS2;
        break;

      case VtxBufConst.VBUF_UVS2_NS:
        return VtxBufConst.VBUF_UVS2;
        break;

      case VtxBufConst.VBUF_NVS2_NS:
        return VtxBufConst.VBUF_NVS2;
        break;

      case VtxBufConst.VBUF_CVS2_NS:
        return VtxBufConst.VBUF_CVS2;
        break;

      case VtxBufConst.VBUF_TVS_NS:
        return VtxBufConst.VBUF_TVS;
        break;

      case VtxBufConst.VBUF_TVS2_NS:
        return VtxBufConst.VBUF_TVS2;
        break;

      default:
    }

    return -1;
  }

  static GetVBufNSByType(type) {
    switch (type) {
      case VtxBufConst.VBUF_VS:
        return VtxBufConst.VBUF_VS_NS;
        break;

      case VtxBufConst.VBUF_UVS:
        return VtxBufConst.VBUF_UVS_NS;
        break;

      case VtxBufConst.VBUF_NVS:
        return VtxBufConst.VBUF_NVS_NS;
        break;

      case VtxBufConst.VBUF_CVS:
        return VtxBufConst.VBUF_CVS_NS;
        break;
      ///////////////////

      case VtxBufConst.VBUF_VS2:
        return VtxBufConst.VBUF_VS2_NS;
        break;

      case VtxBufConst.VBUF_UVS2:
        return VtxBufConst.VBUF_UVS2_NS;
        break;

      case VtxBufConst.VBUF_NVS2:
        return VtxBufConst.VBUF_NVS2_NS;
        break;

      case VtxBufConst.VBUF_CVS2:
        return VtxBufConst.VBUF_CVS2_NS;
        break;

      case VtxBufConst.VBUF_TVS:
        return VtxBufConst.VBUF_TVS_NS;
        break;

      case VtxBufConst.VBUF_TVS2:
        return VtxBufConst.VBUF_TVS2_NS;
        break;

      default:
    }

    return "";
  }

  static GetVBufAttributeTypeByNS(pns) {
    return VtxBufConst.GetVBufTypeByNS(pns) - 3000;
  }

}

VtxBufConst.VTXTYPE_GL_POINTS = 101;
VtxBufConst.VTXTYPE_GL_LINES = 102;
VtxBufConst.VTXTYPE_GL_LINE_STRIP = 103;
VtxBufConst.VTXTYPE_GL_TRIANGLES = 111;
VtxBufConst.VTX_STATIC_DRAW = 0;
VtxBufConst.VTX_DYNAMIC_DRAW = 1;
VtxBufConst.VTX_STREAM_DRAW = 2;
VtxBufConst.VTX_STATIC_READ = 3;
VtxBufConst.VTX_DYNAMIC_READ = 4;
VtxBufConst.VTX_STREAM_READ = 5;
VtxBufConst.VTX_STATIC_COPY = 6;
VtxBufConst.VTX_DYNAMIC_COPY = 7;
VtxBufConst.VTX_STREAM_COPY = 8;
VtxBufConst.VBUF_VS = 3001;
VtxBufConst.VBUF_UVS = 3002;
VtxBufConst.VBUF_NVS = 3003;
VtxBufConst.VBUF_CVS = 3004;
VtxBufConst.VBUF_TVS = 3005;
VtxBufConst.VBUF_VS2 = 3006;
VtxBufConst.VBUF_UVS2 = 3007;
VtxBufConst.VBUF_NVS2 = 3008;
VtxBufConst.VBUF_CVS2 = 3009;
VtxBufConst.VBUF_TVS2 = 3010;
VtxBufConst.VBUF_VS_INDEX = BitConst_1.default.BIT_ONE_0;
VtxBufConst.VBUF_UVS_INDEX = BitConst_1.default.BIT_ONE_1;
VtxBufConst.VBUF_NVS_INDEX = BitConst_1.default.BIT_ONE_2;
VtxBufConst.VBUF_CVS_INDEX = BitConst_1.default.BIT_ONE_3;
VtxBufConst.VBUF_TVS_INDEX = BitConst_1.default.BIT_ONE_4;
VtxBufConst.VBUF_VS2_INDEX = BitConst_1.default.BIT_ONE_5;
VtxBufConst.VBUF_UVS2_INDEX = BitConst_1.default.BIT_ONE_6;
VtxBufConst.VBUF_NVS2_INDEX = BitConst_1.default.BIT_ONE_7;
VtxBufConst.VBUF_CVS2_INDEX = BitConst_1.default.BIT_ONE_8;
VtxBufConst.VBUF_TVS2_INDEX = BitConst_1.default.BIT_ONE_9; // name

VtxBufConst.VBUF_VS_NS = "a_vs";
VtxBufConst.VBUF_VS2_NS = "a_vs2";
VtxBufConst.VBUF_UVS_NS = "a_uvs";
VtxBufConst.VBUF_UVS2_NS = "a_uvs2";
VtxBufConst.VBUF_NVS_NS = "a_nvs";
VtxBufConst.VBUF_NVS2_NS = "a_nvs2";
VtxBufConst.VBUF_CVS_NS = "a_cvs";
VtxBufConst.VBUF_CVS2_NS = "a_cvs2";
VtxBufConst.VBUF_TVS_NS = "a_tvs";
VtxBufConst.VBUF_TVS2_NS = "a_tvs2";

class VtxNormalType {}

VtxNormalType.FLAT = 210;
VtxNormalType.GOURAND = 310;
exports.VtxNormalType = VtxNormalType;
exports.default = VtxBufConst;

/***/ }),

/***/ "8d98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2020 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

const RCExtension_1 = __importDefault(__webpack_require__("030e"));

class TextureFormat {
  static ToGL(gl, format) {
    switch (format) {
      case TextureFormat.RGBA:
        break;

      case TextureFormat.R8:
        return gl.R8;
        break;

      case TextureFormat.RGB:
        return gl.RGB;
        break;

      case TextureFormat.RGB8:
        return gl.RGB8;
        break;

      case TextureFormat.RGBA8:
        return gl.RGBA8;
        break;

      case TextureFormat.ALPHA:
        return gl.ALPHA;
        break;

      case TextureFormat.RGB16F:
        if (RendererDevice_1.default.IsWebGL2()) {
          return gl.RGB16F;
        }

        return gl.RGB;
        break;

      case TextureFormat.RGBA16F:
        if (RendererDevice_1.default.IsWebGL2()) {
          return gl.RGBA16F;
        }

        return gl.RGBA;
        break;

      case TextureFormat.RGB32F:
        if (RendererDevice_1.default.IsWebGL2()) gl.RGB32F;
        return gl.RGB;
        break;

      case TextureFormat.RGBA32F:
        if (RendererDevice_1.default.IsWebGL2()) gl.RGBA32F;
        return gl.RGBA;
        break;

      case TextureFormat.RED:
        return gl.RED;
        break;

      case TextureFormat.DEPTH_COMPONENT:
        return gl.DEPTH_COMPONENT;
        break;

      case TextureFormat.DEPTH_STENCIL:
        return gl.DEPTH_STENCIL;
        break;

      default:
        break;
    }

    return gl.RGBA;
  }

}

TextureFormat.R8 = 101;
TextureFormat.RGB = 110;
TextureFormat.RED = 111;
TextureFormat.RGBA = 121;
TextureFormat.RGB8 = 122;
TextureFormat.RGBA8 = 123;
TextureFormat.ALPHA = 132;
TextureFormat.RGB16F = 331;
TextureFormat.RGBA16F = 332;
TextureFormat.RGB32F = 341;
TextureFormat.RGBA32F = 342;
TextureFormat.DEPTH_COMPONENT = 351;
TextureFormat.DEPTH_STENCIL = 352;
exports.TextureFormat = TextureFormat;

class TextureDataType {
  static ToGL(gl, type) {
    switch (type) {
      case TextureDataType.UNSIGNED_BYTE:
        return gl.UNSIGNED_BYTE;
        break;

      case TextureDataType.BYTE:
        return gl.BYTE;
        break;

      case TextureDataType.FLOAT:
        return gl.FLOAT;
        break;

      case TextureDataType.HALF_FLOAT:
        return gl.HALF_FLOAT;
        break;

      case TextureDataType.HALF_FLOAT_OES:
        if (RCExtension_1.default.OES_texture_half_float != null) return RCExtension_1.default.OES_texture_half_float.HALF_FLOAT_OES;
        return gl.FLOAT;
        break;

      case TextureDataType.UNSIGNED_SHORT:
        return gl.UNSIGNED_SHORT;
        break;

      case TextureDataType.UNSIGNED_INT:
        return gl.UNSIGNED_INT;
        break;

      case TextureDataType.UNSIGNED_SHORT_5_6_5:
        return gl.UNSIGNED_SHORT_5_6_5;
        break;

      case TextureDataType.UNSIGNED_SHORT_4_4_4_4:
        return gl.UNSIGNED_SHORT_4_4_4_4;
        break;

      case TextureDataType.UNSIGNED_SHORT_5_5_5_1:
        return gl.UNSIGNED_SHORT_5_5_5_1;
        break;

      case TextureDataType.UNSIGNED_INT_24_8_WEBGL:
        return RCExtension_1.default.WEBGL_depth_texture.UNSIGNED_INT_24_8_WEBGL;
        break;

      default:
        break;
    }

    return gl.UNSIGNED_BYTE;
  }

}

TextureDataType.UNSIGNED_BYTE = 1108;
TextureDataType.UNSIGNED_SHORT = 1109;
TextureDataType.UNSIGNED_INT = 1110;
TextureDataType.BYTE = 1111;
TextureDataType.FLOAT = 1211;
TextureDataType.HALF_FLOAT = 1212;
TextureDataType.HALF_FLOAT_OES = 1213;
TextureDataType.UNSIGNED_SHORT_5_6_5 = 1214;
TextureDataType.UNSIGNED_SHORT_4_4_4_4 = 1215;
TextureDataType.UNSIGNED_SHORT_5_5_5_1 = 1216;
TextureDataType.UNSIGNED_INT_24_8_WEBGL = 1217;
exports.TextureDataType = TextureDataType;

class TextureTarget {
  static GetValue(rc, param) {
    switch (param) {
      case TextureTarget.TEXTURE_2D:
        return rc.TEXTURE_2D;
        break;

      case TextureTarget.TEXTURE_2D_ARRAY:
        return rc.TEXTURE_2D_ARRAY;
        break;

      case TextureTarget.TEXTURE_CUBE:
        return rc.TEXTURE_CUBE_MAP;
        break;

      case TextureTarget.TEXTURE_3D:
        return rc.TEXTURE_3D;
        break;

      default:
        break;
    }

    return rc.TEXTURE_2D;
  }

}

TextureTarget.TEXTURE_2D = 20;
TextureTarget.TEXTURE_2D_ARRAY = 22;
TextureTarget.TEXTURE_SHADOW_2D = 23;
TextureTarget.TEXTURE_CUBE = 25;
TextureTarget.TEXTURE_3D = 30;
exports.TextureTarget = TextureTarget;
var TextureProxyType;

(function (TextureProxyType) {
  TextureProxyType[TextureProxyType["Default"] = 0] = "Default";
  /**
   * for DepthTextureProxy class
   */

  TextureProxyType[TextureProxyType["Depth"] = 1] = "Depth";
  /**
   * for WrapperTextureProxy class
   */

  TextureProxyType[TextureProxyType["Wrapper"] = 2] = "Wrapper";
  /**
   * for RTTTextureProxy class
   */

  TextureProxyType[TextureProxyType["RTT"] = 3] = "RTT";
  /**
   * for ImageTextureProxy class
   */

  TextureProxyType[TextureProxyType["Image"] = 4] = "Image";
  /**
   * for FloatTextureProxy class
   */

  TextureProxyType[TextureProxyType["Float"] = 5] = "Float";
  /**
   * for Uint16TextureProxy class
   */

  TextureProxyType[TextureProxyType["Uint16"] = 6] = "Uint16";
  /**
   * for FloatCubeTextureProxy class
   */

  TextureProxyType[TextureProxyType["FloatCube"] = 7] = "FloatCube";
  /**
   * for BytesTextureProxy class
   */

  TextureProxyType[TextureProxyType["Bytes"] = 8] = "Bytes";
  /**
   * for BytesCubeTextureProxy class
   */

  TextureProxyType[TextureProxyType["BytesCube"] = 9] = "BytesCube";
  /**
   * for ImageCubeTextureProxy class
   */

  TextureProxyType[TextureProxyType["ImageCube"] = 10] = "ImageCube";
  /**
   * for Texture3DProxy class
   */

  TextureProxyType[TextureProxyType["Texture3D"] = 11] = "Texture3D";
})(TextureProxyType = exports.TextureProxyType || (exports.TextureProxyType = {}));

class TextureConst {
  static GetConst(gl, param) {
    switch (param) {
      case TextureConst.NEAREST:
        return gl.NEAREST;
        break;

      case TextureConst.LINEAR:
        return gl.LINEAR;
        break;

      case TextureConst.LINEAR_MIPMAP_LINEAR:
        return gl.LINEAR_MIPMAP_LINEAR;
        break;

      case TextureConst.NEAREST_MIPMAP_NEAREST:
        return gl.NEAREST_MIPMAP_NEAREST;
        break;

      case TextureConst.LINEAR_MIPMAP_NEAREST:
        return gl.LINEAR_MIPMAP_NEAREST;
        break;

      case TextureConst.NEAREST_MIPMAP_LINEAR:
        return gl.NEAREST_MIPMAP_LINEAR;
        break;

      case TextureConst.WRAP_REPEAT:
        return gl.REPEAT;
        break;

      case TextureConst.WRAP_CLAMP_TO_EDGE:
        return gl.CLAMP_TO_EDGE;
        break;

      case TextureConst.WRAP_MIRRORED_REPEAT:
        return gl.MIRRORED_REPEAT;
        break;

      default:
        break;
    }

    return -1;
  }

}

TextureConst.WRAP_REPEAT = 3001;
TextureConst.WRAP_CLAMP_TO_EDGE = 3002;
TextureConst.WRAP_MIRRORED_REPEAT = 3003;
TextureConst.NEAREST = 4001;
TextureConst.LINEAR = 4002;
TextureConst.LINEAR_MIPMAP_LINEAR = 4003;
TextureConst.NEAREST_MIPMAP_NEAREST = 4004;
TextureConst.LINEAR_MIPMAP_NEAREST = 4005;
TextureConst.NEAREST_MIPMAP_LINEAR = 4006;
exports.TextureConst = TextureConst;

/***/ }),

/***/ "8e17":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const MathConst_1 = __importDefault(__webpack_require__("6e01"));

class Vector3D {
  constructor(px = 0.0, py = 0.0, pz = 0.0, pw = 1.0) {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    this.w = 0.0;
    this.x = px;
    this.y = py;
    this.z = pz;
    this.w = pw;
  }

  setTo(px, py, pz, pw = 1.0) {
    this.x = px;
    this.y = py;
    this.z = pz;
    this.w = pw;
  }

  setXYZ(px, py, pz) {
    this.x = px;
    this.y = py;
    this.z = pz;
  }

  copyFrom(v3) {
    this.x = v3.x;
    this.y = v3.y;
    this.z = v3.z;
  }

  dot(a) {
    return this.x * a.x + this.y * a.y + this.z * a.z;
  }

  multBy(a) {
    this.x *= a.x;
    this.y *= a.y;
    this.z *= a.z;
  }

  normalize() {
    let d = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

    if (d > MathConst_1.default.MATH_MIN_POSITIVE) {
      this.x /= d;
      this.y /= d;
      this.z /= d;
    }
  }

  normalizeTo(a) {
    let d = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

    if (d > MathConst_1.default.MATH_MIN_POSITIVE) {
      a.x = this.x / d;
      a.y = this.y / d;
      a.z = this.z / d;
    } else {
      a.x = this.x;
      a.y = this.y;
      a.z = this.z;
    }
  }

  scaleVector(s) {
    this.x *= s.x;
    this.y *= s.y;
    this.z *= s.z;
  }

  scaleBy(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
  }

  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
  }

  equalsXYZ(a) {
    return Math.abs(this.x - a.x) < MathConst_1.default.MATH_MIN_POSITIVE && Math.abs(this.y - a.y) < MathConst_1.default.MATH_MIN_POSITIVE && Math.abs(this.z - a.z) < MathConst_1.default.MATH_MIN_POSITIVE;
  }

  equalsAll(a) {
    return Math.abs(this.x - a.x) < MathConst_1.default.MATH_MIN_POSITIVE && Math.abs(this.y - a.y) < MathConst_1.default.MATH_MIN_POSITIVE && Math.abs(this.z - a.z) < MathConst_1.default.MATH_MIN_POSITIVE && Math.abs(this.w - a.w) < MathConst_1.default.MATH_MIN_POSITIVE;
  }

  project() {
    let t = 1.0 / this.w;
    this.x *= t;
    this.y *= t;
    this.z *= t;
  }

  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  getLengthSquared() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  addBy(a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
  }

  subtractBy(a) {
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
  }

  subtract(a) {
    return new Vector3D(this.x - a.x, this.y - a.y, this.z - a.z);
  }

  add(a) {
    return new Vector3D(this.x + a.x, this.y + a.y, this.z + a.z);
  }

  crossProduct(a) {
    return new Vector3D(this.y * a.z - this.z * a.y, this.z * a.x - this.x * a.z, this.x * a.y - this.y * a.x);
  }

  crossBy(a) {
    let px = this.y * a.z - this.z * a.y;
    let py = this.z * a.x - this.x * a.z;
    let pz = this.x * a.y - this.y * a.x;
    this.x = px;
    this.y = py;
    this.z = pz;
  }

  reflectBy(nv) {
    let idotn2 = (this.x * nv.x + this.y * nv.y + this.z * nv.z) * 2.0;
    this.x = this.x - idotn2 * nv.x;
    this.y = this.y - idotn2 * nv.y;
    this.z = this.z - idotn2 * nv.z;
  }

  scaleVecTo(va, scale) {
    this.x = va.x * scale;
    this.y = va.y * scale;
    this.z = va.z * scale;
  }

  subVecsTo(va, vb) {
    this.x = va.x - vb.x;
    this.y = va.y - vb.y;
    this.z = va.z - vb.z;
  }

  addVecsTo(va, vb) {
    this.x = va.x + vb.x;
    this.y = va.y + vb.y;
    this.z = va.z + vb.z;
  }

  crossVecsTo(va, vb) {
    this.x = va.y * vb.z - va.z * vb.y;
    this.y = va.z * vb.x - va.x * vb.z;
    this.z = va.x * vb.y - va.y * vb.x;
  }

  toString() {
    return "[Vector3D(x=" + this.x + ", y=" + this.y + ",z=" + this.z + ",w=" + this.w + ")]";
  } // 右手法则(为正)


  static Cross(a, b, result) {
    result.x = a.y * b.z - a.z * b.y;
    result.y = a.z * b.x - a.x * b.z;
    result.z = a.x * b.y - a.y * b.x;
  } // (va1 - va0) 叉乘 (vb1 - vb0), 右手法则(为正)


  static CrossSubtract(va0, va1, vb0, vb1, result) {
    Vector3D.__vtor3Stv0.x = va1.x - va0.x;
    Vector3D.__vtor3Stv0.y = va1.y - va0.y;
    Vector3D.__vtor3Stv0.z = va1.z - va0.z;
    Vector3D.__vtor3Stv1.x = vb1.x - vb0.x;
    Vector3D.__vtor3Stv1.y = vb1.y - vb0.y;
    Vector3D.__vtor3Stv1.z = vb1.z - vb0.z;
    va0 = Vector3D.__vtor3Stv0;
    vb0 = Vector3D.__vtor3Stv1;
    result.x = va0.y * vb0.z - va0.z * vb0.y;
    result.y = va0.z * vb0.x - va0.x * vb0.z;
    result.z = va0.x * vb0.y - va0.y * vb0.x;
  }

  static Subtract(a, b, result) {
    result.x = a.x - b.x;
    result.y = a.y - b.y;
    result.z = a.z - b.z;
  }

  static DistanceSquared(a, b) {
    Vector3D.__vtor3Stv0.x = a.x - b.x;
    Vector3D.__vtor3Stv0.y = a.y - b.y;
    Vector3D.__vtor3Stv0.z = a.z - b.z;
    return Vector3D.__vtor3Stv0.getLengthSquared();
  }

  static DistanceXYZ(x0, y0, z0, x1, y1, z1) {
    Vector3D.__vtor3Stv0.x = x0 - x1;
    Vector3D.__vtor3Stv0.y = y0 - y1;
    Vector3D.__vtor3Stv0.z = z0 - z1;
    return Vector3D.__vtor3Stv0.getLength();
  }

  static Distance(v0, v1) {
    Vector3D.__vtor3Stv0.x = v0.x - v1.x;
    Vector3D.__vtor3Stv0.y = v0.y - v1.y;
    Vector3D.__vtor3Stv0.z = v0.z - v1.z;
    return Vector3D.__vtor3Stv0.getLength();
  } // calc Vector3D v0 and v1


  static AngleBetween(v0, v1) {
    v0.normalizeTo(Vector3D.__vtor3Stv0);
    v1.normalizeTo(Vector3D.__vtor3Stv1);
    return Math.acos(Vector3D.__vtor3Stv0.dot(Vector3D.__vtor3Stv1)) * MathConst_1.default.MATH_180_OVER_PI;
  }

  static RadianBetween(v0, v1) {
    v0.normalizeTo(Vector3D.__vtor3Stv0);
    v1.normalizeTo(Vector3D.__vtor3Stv1);
    return Math.acos(Vector3D.__vtor3Stv0.dot(Vector3D.__vtor3Stv1));
  }

  static RadianBetween2(v0, v1) {
    //  // c^2 = a^2 + b^2 - 2*a*b * cos(x)
    //  // cos(x) = (a^2 + b^2 - c^2) / 2*a*b
    let pa = v0.getLengthSquared();
    let pb = v1.getLengthSquared();
    Vector3D.__vtor3Stv0.x = v0.x - v1.x;
    Vector3D.__vtor3Stv0.y = v0.y - v1.y;
    Vector3D.__vtor3Stv0.z = v0.z - v1.z;
    return Math.acos((pa + pb - Vector3D.__vtor3Stv0.getLengthSquared()) / (2.0 * Math.sqrt(pa) * Math.sqrt(pb)));
  }

  static Reflect(iv, nv, rv) {
    let idotn2 = (iv.x * nv.x + iv.y * nv.y + iv.z * nv.z) * 2.0;
    rv.x = iv.x - idotn2 * nv.x;
    rv.y = iv.y - idotn2 * nv.y;
    rv.z = iv.z - idotn2 * nv.z;
  }

}

Vector3D.X_AXIS = new Vector3D(1, 0, 0);
Vector3D.Y_AXIS = new Vector3D(0, 1, 0);
Vector3D.Z_AXIS = new Vector3D(0, 0, 1);
Vector3D.__vtor3Stv0 = new Vector3D();
Vector3D.__vtor3Stv1 = new Vector3D();
Vector3D.ZERO = new Vector3D();
exports.default = Vector3D;

/***/ }),

/***/ "9156":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class ROTransPool {
  static SetTransUniform(mat, uniform) {
    ROTransPool.s_transMap.set(mat.getUid(), uniform);
  }

  static GetTransUniform(mat) {
    if (mat.getUid() < 0) {
      throw Error("mat.getUid() < 0");
    }

    if (ROTransPool.s_transMap.has(mat.getUid())) return ROTransPool.s_transMap.get(mat.getUid());
    return null;
  }

  static HasTransUniform(mat) {
    return ROTransPool.s_transMap.has(mat.getUid());
  }

  static RemoveTransUniform(mat) {
    ROTransPool.s_transMap.delete(mat.getUid());
  }

}

ROTransPool.s_transMap = new Map();
exports.default = ROTransPool;

/***/ }),

/***/ "91e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const RendererState_1 = __importDefault(__webpack_require__("29ef"));

const DisplayEntity_1 = __importDefault(__webpack_require__("402a"));

const Default3DMaterial_1 = __importDefault(__webpack_require__("f63e"));

const VtxBufConst_1 = __webpack_require__("8a0a");

const Box3DMesh_1 = __importDefault(__webpack_require__("3bfb"));

class Box3DEntity extends DisplayEntity_1.default {
  constructor(transform = null) {
    super(transform);
    this.normalScale = 1.0;
    this.m_normalType = VtxBufConst_1.VtxNormalType.FLAT;
    this.m_minV = null;
    this.m_maxV = null;
    this.m_transMatrix = null;
    this.m_currMesh = null; // uvPartsNumber value is 4 or 6

    this.uvPartsNumber = 0;
  }

  setVtxTransformMatrix(matrix) {
    this.m_transMatrix = matrix;
  }

  useFlatNormal() {
    this.m_normalType = VtxBufConst_1.VtxNormalType.FLAT;
  }

  useGourandNormal() {
    this.m_normalType = VtxBufConst_1.VtxNormalType.GOURAND;
  }

  createMaterial(texList) {
    if (this.getMaterial() == null) {
      let cm = new Default3DMaterial_1.default();
      cm.setTextureList(texList);
      this.setMaterial(cm);
    } else {
      this.getMaterial().setTextureList(texList);
    }
  }

  showBackFace() {
    this.setRenderState(RendererState_1.default.BACK_CULLFACE_NORMAL_STATE);
  }

  showFrontFace() {
    this.setRenderState(RendererState_1.default.FRONT_CULLFACE_NORMAL_STATE);
  }

  showAllFace() {
    this.setRenderState(RendererState_1.default.NONE_CULLFACE_NORMAL_STATE);
  }

  scaleUVFaceAt(faceI, u, v, du, dv) {
    let mesh = this.getMesh();

    if (mesh != null) {
      mesh.scaleUVFaceAt(faceI, u, v, du, dv);
    }
  }

  scaleUVSFaceAt(faceI, uvsLen8) {
    let mesh = this.getMesh();

    if (mesh != null) {
      mesh.setFaceUVSAt(faceI, uvsLen8);
    }
  }

  reinitializeMesh() {
    if (this.m_currMesh != null) {
      this.m_currMesh.reinitialize();
    }
  }
  /**
   * initialize a box geometry data and texture data
   * @param minV the min position of the box
   * @param maxV the max position of the box
   * @param texList  TextureProxy instance list
   */


  initialize(minV, maxV, texList = null) {
    this.m_minV = minV;
    this.m_maxV = maxV;
    this.createMaterial(texList);
    this.activeDisplay();
  }
  /**
   * initialize a box(geometry data and texture data) to a cube with the cube size value
   * @param cubeSize  cube size value
   * @param texList  TextureProxy instance list
   */


  initializeCube(cubeSize, texList = null) {
    cubeSize *= 0.5;
    this.m_minV = new Vector3D_1.default(-cubeSize, -cubeSize, -cubeSize);
    this.m_maxV = new Vector3D_1.default(cubeSize, cubeSize, cubeSize);
    this.createMaterial(texList);
    this.activeDisplay();
  }

  initializeSizeXYZ(widthSize, heightSize, longSize, texList = null) {
    this.m_minV = new Vector3D_1.default(-widthSize * 0.5, -heightSize * 0.5, -longSize * 0.5);
    this.m_maxV = new Vector3D_1.default(widthSize * 0.5, heightSize * 0.5, longSize * 0.5);
    this.createMaterial(texList);
    this.activeDisplay();
  }

  __activeMesh(material) {
    this.m_currMesh = this.getMesh();

    if (this.m_currMesh == null) {
      this.m_currMesh = new Box3DMesh_1.default();
    }

    if (this.m_currMesh != null) {
      let mesh = this.m_currMesh;

      if (this.m_transMatrix != null) {
        mesh.setTransformMatrix(this.m_transMatrix);
      }

      mesh.normalType = this.m_normalType;
      mesh.normalScale = this.normalScale;
      mesh.vbWholeDataEnabled = this.vbWholeDataEnabled;
      mesh.uvPartsNumber = this.uvPartsNumber;
      mesh.setBufSortFormat(material.getBufSortFormat());
      mesh.initialize(this.m_minV, this.m_maxV);
      this.m_minV = null;
      this.m_maxV = null;
      this.setMesh(mesh);
      mesh.setTransformMatrix(null);
    }

    this.m_transMatrix = null;
  }

  updateMesh() {
    this.m_currMesh = this.getMesh();
  }

  setFaceUVSAt(i, uvslen8, offset = 0) {
    if (this.m_currMesh != null) {
      this.m_currMesh.setFaceUVSAt(i, uvslen8, offset);
    }
  }

  transformFaceAt(i, mat4) {
    if (this.m_currMesh != null) {
      this.m_currMesh.transformFaceAt(i, mat4);
    }
  }

  getFaceCenterAt(i, outV) {
    if (this.m_currMesh != null) {
      this.m_currMesh.getFaceCenterAt(i, outV);
    }
  }

  toString() {
    return "[Box3DEntity(uid = " + this.getUid() + ", rseFlag = " + this.__$rseFlag + ")";
  }

}

exports.default = Box3DEntity;

/***/ }),

/***/ "9266":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const ROVertexBuffer_1 = __importDefault(__webpack_require__("e7d2"));

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const AABB_1 = __importDefault(__webpack_require__("fecb"));

const MeshBase_1 = __importDefault(__webpack_require__("cb29"));

const RenderConst_1 = __webpack_require__("e08e");

class BillboardPlaneMesh extends MeshBase_1.default {
  constructor(bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    super(bufDataUsage);
    this.m_vs = null;
    this.m_uvs = null;
    this.flipVerticalUV = false;
    this.vtxUVEnabled = true;
  }

  setUVSFloatArr(uvsFloatArr8) {
    if (this.m_uvs == null) {
      this.m_uvs = new Float32Array(8);
    }

    this.m_uvs.set(uvsFloatArr8, 0);
  }

  setUVSArr(uvsArr8) {
    if (this.m_uvs == null) {
      this.m_uvs = new Float32Array(8);
    }

    this.m_uvs.set(uvsArr8, 0);
  }

  initialize(pwidth, pheight) {
    if (this.m_vs != null) {
      return;
    } //console.log("RectPlaneMesh::initialize()...");


    let maxX = 0.5 * pwidth;
    let maxY = 0.5 * pheight;
    let minX = -maxX;
    let minY = -maxY;
    this.bounds = new AABB_1.default();
    this.bounds.min.setXYZ(minX, minY, minX);
    this.bounds.max.setXYZ(maxX, maxY, maxX);
    this.bounds.updateFast(); // ccw is positive, left-bottom pos(minX,minY) -> right-bottom pos(maxX,minY) -> right-top pos(maxX,maxY)  -> right-top pos(minX,maxY)
    //this.m_ivs = new Uint16Array([0,3,1,2]);

    this.m_ivs = new Uint16Array([1, 2, 0, 3]);
    this.m_vs = new Float32Array([minX, minY, maxX, minY, maxX, maxY, minX, maxY]);
    ROVertexBuffer_1.default.Reset();
    ROVertexBuffer_1.default.AddFloat32Data(this.m_vs, 2);

    if (this.vtxUVEnabled) {
      if (this.m_uvs == null) {
        if (this.flipVerticalUV) {
          this.m_uvs = new Float32Array([0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0]);
        } else {
          this.m_uvs = new Float32Array([0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0]);
        }
      }

      ROVertexBuffer_1.default.AddFloat32Data(this.m_uvs, 2);
    }

    ROVertexBuffer_1.default.vbWholeDataEnabled = this.vbWholeDataEnabled;
    this.m_vbuf = ROVertexBuffer_1.default.CreateBySaveData(this.getBufDataUsage());
    this.m_vbuf.setUint16IVSData(this.m_ivs);
    this.vtCount = this.m_ivs.length;
    this.vtxTotal = 4;
    this.trisNumber = 2;
    this.drawMode = RenderConst_1.RenderDrawMode.ELEMENTS_TRIANGLE_STRIP;
    this.buildEnd();
  }

  setUV(pu, pv, du, dv) {
    if (this.m_vbuf != null) {
      this.m_vbuf.setData2fAt(0, 1, pu, pv + dv);
      this.m_vbuf.setData2fAt(1, 1, pu + du, pv + dv);
      this.m_vbuf.setData2fAt(2, 1, pu + du, pv);
      this.m_vbuf.setData2fAt(3, 1, pu, pv);
    }
  }

}

exports.default = BillboardPlaneMesh;

/***/ }),

/***/ "9666":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

const ShaderData_1 = __importDefault(__webpack_require__("acfe"));

class MaterialResource {
  static CreateShdData(unique_name_str, vshdsrc, fshdSrc, adaptationShaderVersion, preCompileInfo) {
    //console.log("MaterialResource.CreateShdData() begin...");
    if (MaterialResource.s_shdDataDict.has(unique_name_str)) {
      return MaterialResource.s_shdDataDict.get(unique_name_str);
    }

    let p = new ShaderData_1.default();
    p.adaptationShaderVersion = adaptationShaderVersion;
    p.preCompileInfo = preCompileInfo;
    p.initialize(unique_name_str, vshdsrc, fshdSrc);
    MaterialResource.s_shdDataList[p.getUid()] = p;
    ++MaterialResource.s_shdDataListLen;
    MaterialResource.s_shdDataDict.set(unique_name_str, p);

    if (RendererDevice_1.default.SHADERCODE_TRACE_ENABLED) {
      console.log("MaterialResource.Create() a new ShaderProgram: ", p.toString());
    }

    return p;
  }

  static FindData(unique_name_str) {
    if (MaterialResource.s_shdDataDict.has(unique_name_str)) {
      return MaterialResource.s_shdDataDict.get(unique_name_str);
    }

    return null;
  }

}

MaterialResource.s_shdDataDict = new Map();
MaterialResource.s_shdDataList = [];
MaterialResource.s_shdDataListLen = 0;
exports.default = MaterialResource;

/***/ }),

/***/ "99cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2020 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const DashedLineMesh_1 = __importDefault(__webpack_require__("9c3c"));

const DisplayEntity_1 = __importDefault(__webpack_require__("402a"));

const Color4_1 = __importDefault(__webpack_require__("3930"));

const Line3DMaterial_1 = __importDefault(__webpack_require__("32cc"));

class Line3DEntity extends DisplayEntity_1.default {
  constructor() {
    super();
    this.m_posarr = null; //[100.0,0.0,0.0, 0.0,0,0];

    this.m_colorarr = null; //[100.0,0.0,0.0, 0.0,0,0];

    this.color = new Color4_1.default(1.0, 0.0, 0.0, 1.0);
    this.dynColorEnabled = false;
  }

  setRGB3f(pr, pg, pb) {
    this.color.setRGB3f(pr, pg, pb);
  }

  createMaterial() {
    if (this.getMaterial() == null) {
      let cm = new Line3DMaterial_1.default(this.dynColorEnabled);
      this.setMaterial(cm);
    }
  }

  __activeMesh(material) {
    if (this.getMesh() == null) {
      let mesh = new DashedLineMesh_1.default();
      mesh.vbWholeDataEnabled = false;
      mesh.setBufSortFormat(material.getBufSortFormat());
      mesh.initialize(this.m_posarr, this.m_colorarr);
      this.setMesh(mesh);
    }
  }

  initialize(begin, end = null) {
    if (this.m_posarr == null) {
      this.m_posarr = [100.0, 0.0, 0.0, 0.0, 0, 0];
    }

    this.m_posarr[0] = begin.x;
    this.m_posarr[1] = begin.y;
    this.m_posarr[2] = begin.z;

    if (end == null) {
      this.m_posarr[3] = 0;
      this.m_posarr[4] = 0;
      this.m_posarr[5] = 0;
    } else {
      this.m_posarr[3] = end.x;
      this.m_posarr[4] = end.y;
      this.m_posarr[5] = end.z;
    }

    this.m_colorarr = [this.color.r, this.color.g, this.color.b, this.color.r, this.color.g, this.color.b];
    this.createMaterial();
    this.activeDisplay();
  }

  initializeRectXOY(px, py, pw, ph) {
    pw += px;
    ph += py;

    if (!this.dynColorEnabled) {
      this.m_colorarr = [this.color.r, this.color.g, this.color.b, this.color.r, this.color.g, this.color.b, this.color.r, this.color.g, this.color.b, this.color.r, this.color.g, this.color.b, this.color.r, this.color.g, this.color.b, this.color.r, this.color.g, this.color.b, this.color.r, this.color.g, this.color.b, this.color.r, this.color.g, this.color.b];
    }

    this.m_posarr = [px, py, 0.0, pw, py, 0.0, pw, py, 0.0, pw, ph, 0.0, pw, ph, 0.0, px, ph, 0.0, px, ph, 0.0, px, py, 0.0];
    this.createMaterial();
    this.activeDisplay();
  }

  toString() {
    return "[Line3DEntity]";
  }

}

exports.default = Line3DEntity;

/***/ }),

/***/ "9c3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2020 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const RadialLine_1 = __importDefault(__webpack_require__("38de"));

const AABB_1 = __importDefault(__webpack_require__("fecb"));

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const MeshBase_1 = __importDefault(__webpack_require__("cb29"));

const ROVertexBuffer_1 = __importDefault(__webpack_require__("e7d2"));

const RenderConst_1 = __webpack_require__("e08e");

class DashedLineMesh extends MeshBase_1.default {
  constructor(bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    super(bufDataUsage);
    this.m_vs = null;
    this.m_cvs = null;
    this.m_lsTotal = 0; // 用于射线检测

    this.rayTestRadius = 2.0;
  }

  getVS() {
    return this.m_vs;
  }

  getCVS() {
    return this.m_vs;
  }

  initialize(posarr, colors) {
    if (posarr.length >= 6) {
      this.vtCount = Math.floor(posarr.length / 3);
      this.m_lsTotal = Math.floor(this.vtCount / 2);
      this.m_vs = new Float32Array(posarr);
      this.bounds = new AABB_1.default();
      this.bounds.addXYZFloat32Arr(this.m_vs);
      this.bounds.updateFast();
      ROVertexBuffer_1.default.Reset();
      ROVertexBuffer_1.default.AddFloat32Data(this.m_vs, 3);

      if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_CVS_INDEX)) {
        this.m_cvs = new Float32Array(colors);
        ROVertexBuffer_1.default.AddFloat32Data(this.m_cvs, 3);
      }

      ROVertexBuffer_1.default.vbWholeDataEnabled = this.vbWholeDataEnabled;
      this.m_vbuf = ROVertexBuffer_1.default.CreateBySaveData(this.getBufDataUsage());
      this.drawMode = RenderConst_1.RenderDrawMode.ARRAYS_LINES;
      this.buildEnd();
    }
  }

  setVSXYZAt(i, px, py, pz) {
    if (this.m_vbuf != null) {
      this.m_vbuf.setData3fAt(i, 0, px, py, pz);
    }
  }

  toString() {
    return "DashedLineMesh()";
  }

  isPolyhedral() {
    return false;
  } // @boundsHit       表示是否包围盒体已经和射线相交了
  // @rlpv            表示物体坐标空间的射线起点
  // @rltv            表示物体坐标空间的射线朝向
  // @outV            如果检测相交存放物体坐标空间的交点
  // @return          返回值 -1 表示不会进行检测,1表示相交,0表示不相交
  //


  testRay(rlpv, rltv, outV, boundsHit) {
    let j = 0;
    let vs = this.m_vs;
    let flag = 0;
    let radius = this.rayTestRadius;

    for (let i = 0; i < this.m_lsTotal; ++i) {
      DashedLineMesh.s_pv0.setXYZ(vs[j], vs[j + 1], vs[j + 2]);
      DashedLineMesh.s_pv1.setXYZ(vs[j + 3], vs[j + 4], vs[j + 5]);
      flag = RadialLine_1.default.IntersectionLS(rlpv, rltv, DashedLineMesh.s_pv0, DashedLineMesh.s_pv1, outV, radius);

      if (flag > 0) {
        return 1;
      }

      j += 6;
    }

    return 0;
  }

  __$destroy() {
    if (this.isResFree()) {
      this.bounds = null;
      this.m_vs = null;
      this.m_cvs = null;

      super.__$destroy();
    }
  }

}

DashedLineMesh.s_pv0 = new Vector3D_1.default();
DashedLineMesh.s_pv1 = new Vector3D_1.default();
exports.default = DashedLineMesh;

/***/ }),

/***/ "a254":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const ShaderCodeBuffer_1 = __importDefault(__webpack_require__("faa5"));

const ShaderUniformData_1 = __importDefault(__webpack_require__("b3bd"));

const MaterialBase_1 = __importDefault(__webpack_require__("0fc4"));

const ShaderCodeBuilder2_1 = __importDefault(__webpack_require__("250c"));

class ScreenPlaneShaderBuffer extends ShaderCodeBuffer_1.default {
  constructor() {
    super();
    this.m_codeBuilder = new ShaderCodeBuilder2_1.default();
    this.m_uniqueName = "";
    this.m_hasTex = false;
    this.mapLodEnabled = false;
  }

  initialize(texEnabled) {
    this.m_uniqueName = "ScreenPlaneShd";
    this.m_hasTex = texEnabled;

    if (texEnabled) {
      this.m_uniqueName += "_tex";
      if (this.mapLodEnabled) this.m_uniqueName += "Lod";
    }
  }

  buildThisCode() {
    let coder = this.m_codeBuilder;
    coder.reset();
    coder.addVertLayout("vec3", "a_vs");

    if (this.m_hasTex) {
      coder.mapLodEnabled = this.mapLodEnabled;
      coder.addVertLayout("vec2", "a_uvs");
      coder.addTextureSample2D();
      coder.addVarying("vec2", "v_uv");
    } else {
      coder.mapLodEnabled = false;
    }

    coder.addFragOutput("vec4", "FragColor0");
    coder.addFragUniform("vec4", "u_param", 3);
    coder.useVertSpaceMats(true, false, false);
    coder.addFragFunction("");
  }

  getFragShaderCode() {
    this.buildThisCode();

    if (this.m_hasTex) {
      this.m_codeBuilder.addFragMainCode(`
void main() {
    #ifdef VOX_Texture2DLod
    vec4 color4 = VOX_Texture2DLod(u_sampler0, v_uv, u_param[2].w);
    #else
    vec4 color4 = VOX_Texture2D(u_sampler0, v_uv);
    #endif
    color4 *= u_param[0];
    color4 += u_param[1];
    FragColor0 = color4;
}
`);
    } else {
      this.m_codeBuilder.addFragMainCode(`
void main() {
    FragColor0 = u_param[0] + u_param[1];
}
`);
    }

    return this.m_codeBuilder.buildFragCode();
  }

  getVtxShaderCode() {
    if (this.m_hasTex) {
      this.m_codeBuilder.addVertMainCode(`
void main() {
    gl_Position = u_objMat * vec4(a_vs,1.0);
    v_uv = a_uvs.xy;
}
`);
    } else {
      this.m_codeBuilder.addVertMainCode(`
void main() {
    gl_Position = u_objMat * vec4(a_vs,1.0);
}
`);
    }

    return this.m_codeBuilder.buildVertCode();
  }

  getUniqueShaderName() {
    //console.log("H ########################### this.m_uniqueName: "+this.m_uniqueName);
    return this.m_uniqueName;
  }

  toString() {
    return "[ScreenPlaneShaderBuffer()]";
  }

  static GetInstance() {
    if (ScreenPlaneShaderBuffer.s_instance != null) {
      return ScreenPlaneShaderBuffer.s_instance;
    }

    ScreenPlaneShaderBuffer.s_instance = new ScreenPlaneShaderBuffer();
    return ScreenPlaneShaderBuffer.s_instance;
  }

}

ScreenPlaneShaderBuffer.s_instance = null;

class ScreenPlaneMaterial extends MaterialBase_1.default {
  constructor() {
    super();
    this.mapLodEnabled = false;
    this.m_param = new Float32Array([1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]);
  }

  getCodeBuf() {
    let buf = ScreenPlaneShaderBuffer.GetInstance();
    buf.mapLodEnabled = this.mapLodEnabled;
    return buf;
  }

  setRGB3f(pr, pg, pb) {
    this.m_param[0] = pr;
    this.m_param[1] = pg;
    this.m_param[2] = pb;
  }

  setRGBA4f(pr, pg, pb, pa) {
    this.m_param[0] = pr;
    this.m_param[1] = pg;
    this.m_param[2] = pb;
    this.m_param[3] = pa;
  }

  setOffsetRGB3f(pr, pg, pb) {
    this.m_param[0] = pr;
    this.m_param[1] = pg;
    this.m_param[2] = pb;
  }

  setOffsetRGBA4f(pr, pg, pb, pa) {
    this.m_param[0] = pr;
    this.m_param[1] = pg;
    this.m_param[2] = pb;
    this.m_param[3] = pa;
  }

  setTextureLodLevel(lodLv) {
    this.m_param[11] = lodLv;
  }

  createSelfUniformData() {
    let oum = new ShaderUniformData_1.default();
    oum.uniformNameList = ["u_param"];
    oum.dataList = [this.m_param];
    return oum;
  }

}

exports.default = ScreenPlaneMaterial;

/***/ }),

/***/ "a2f2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const DashedLineMesh_1 = __importDefault(__webpack_require__("9c3c"));

const DisplayEntity_1 = __importDefault(__webpack_require__("402a"));

const Color4_1 = __importDefault(__webpack_require__("3930"));

const Line3DMaterial_1 = __importDefault(__webpack_require__("32cc"));

class BoxFrame3D extends DisplayEntity_1.default {
  constructor(dynColorBoo = false) {
    super();
    this.m_dynColorBoo = false;
    this.m_minV = new Vector3D_1.default(-100.0, -100.0, -100.0);
    this.m_maxV = new Vector3D_1.default(100.0, 100.0, 100.0);
    this.m_posarr = null;
    this.m_selfMesh = null;
    this.m_currMaterial = null; // 用于射线检测

    this.rayTestRadius = 8.0;
    this.color = new Color4_1.default(1.0, 1.0, 1.0, 1.0);
    this.m_abVersion = -1;
    this.m_dynColorBoo = dynColorBoo;
  }

  setLineWidth(lineW) {//if(this.getMesh())
    //{
    //    //this.getMesh().vbuf.lineWidth = lineW;
    //}
  }

  setRGB3f(pr, pg, pb) {
    if (this.m_dynColorBoo) {
      this.m_currMaterial.setRGB3f(pr, pg, pb);
    }
  }

  createMaterial() {
    if (this.getMaterial() == null) {
      this.m_currMaterial = new Line3DMaterial_1.default(this.m_dynColorBoo);
      this.setMaterial(this.m_currMaterial);
    }
  }

  __activeMesh(material) {
    if (this.getMesh() == null) {
      let colorarr = null;

      if (!this.m_dynColorBoo) {
        colorarr = [];
        let i = 0;

        for (; i < 24; ++i) {
          colorarr.push(this.color.r, this.color.g, this.color.b);
        }
      }

      this.m_selfMesh = new DashedLineMesh_1.default(VtxBufConst_1.default.VTX_DYNAMIC_DRAW);
      this.m_selfMesh.rayTestRadius = this.rayTestRadius;
      this.m_selfMesh.vbWholeDataEnabled = false;
      this.m_selfMesh.setBufSortFormat(material.getBufSortFormat());

      if (this.m_dynColorBoo) {
        this.m_selfMesh.initialize(this.m_posarr, null);
      } else {
        this.m_selfMesh.initialize(this.m_posarr, colorarr);
      }

      this.setMesh(this.m_selfMesh);
    }
  }

  initialize(minV, maxV) {
    this.m_minV.copyFrom(minV);
    this.m_maxV.copyFrom(maxV);
    this.m_posarr = [// bottom frame plane: -y, first pos: (+x,-y,+z), plane positions wrap mode: CCW
    this.m_minV.x, this.m_minV.y, this.m_minV.z, this.m_minV.x, this.m_minV.y, this.m_maxV.z, this.m_minV.x, this.m_minV.y, this.m_minV.z, this.m_maxV.x, this.m_minV.y, this.m_minV.z, this.m_minV.x, this.m_minV.y, this.m_maxV.z, this.m_maxV.x, this.m_minV.y, this.m_maxV.z, this.m_maxV.x, this.m_minV.y, this.m_minV.z, this.m_maxV.x, this.m_minV.y, this.m_maxV.z, // wall frame
    this.m_minV.x, this.m_minV.y, this.m_minV.z, this.m_minV.x, this.m_maxV.y, this.m_minV.z, this.m_minV.x, this.m_minV.y, this.m_maxV.z, this.m_minV.x, this.m_maxV.y, this.m_maxV.z, this.m_maxV.x, this.m_minV.y, this.m_minV.z, this.m_maxV.x, this.m_maxV.y, this.m_minV.z, this.m_maxV.x, this.m_minV.y, this.m_maxV.z, this.m_maxV.x, this.m_maxV.y, this.m_maxV.z, // top frame plane: +y
    this.m_minV.x, this.m_maxV.y, this.m_minV.z, this.m_minV.x, this.m_maxV.y, this.m_maxV.z, this.m_minV.x, this.m_maxV.y, this.m_minV.z, this.m_maxV.x, this.m_maxV.y, this.m_minV.z, this.m_minV.x, this.m_maxV.y, this.m_maxV.z, this.m_maxV.x, this.m_maxV.y, this.m_maxV.z, this.m_maxV.x, this.m_maxV.y, this.m_minV.z, this.m_maxV.x, this.m_maxV.y, this.m_maxV.z];
    this.createMaterial();
    this.activeDisplay();
    if (this.m_selfMesh == null) this.m_selfMesh = this.getMesh();
  }

  initializeByPosList8(posList8) {
    this.m_posarr = [// bottom frame
    posList8[0].x, posList8[0].y, posList8[0].z, posList8[1].x, posList8[1].y, posList8[1].z, posList8[1].x, posList8[1].y, posList8[1].z, posList8[2].x, posList8[2].y, posList8[2].z, posList8[2].x, posList8[2].y, posList8[2].z, posList8[3].x, posList8[3].y, posList8[3].z, posList8[3].x, posList8[3].y, posList8[3].z, posList8[0].x, posList8[0].y, posList8[0].z, // wall frame
    posList8[0].x, posList8[0].y, posList8[0].z, posList8[4].x, posList8[4].y, posList8[4].z, posList8[1].x, posList8[1].y, posList8[1].z, posList8[5].x, posList8[5].y, posList8[5].z, posList8[2].x, posList8[2].y, posList8[2].z, posList8[6].x, posList8[6].y, posList8[6].z, posList8[3].x, posList8[3].y, posList8[3].z, posList8[7].x, posList8[7].y, posList8[7].z, // top frame
    posList8[4].x, posList8[4].y, posList8[4].z, posList8[5].x, posList8[5].y, posList8[5].z, posList8[5].x, posList8[5].y, posList8[5].z, posList8[6].x, posList8[6].y, posList8[6].z, posList8[6].x, posList8[6].y, posList8[6].z, posList8[7].x, posList8[7].y, posList8[7].z, posList8[7].x, posList8[7].y, posList8[7].z, posList8[4].x, posList8[4].y, posList8[4].z];
    this.createMaterial();
    this.activeDisplay();
    if (this.m_selfMesh == null) this.m_selfMesh = this.getMesh();
  }

  getVertexAt(vtxIndex, outPos) {
    if (this.m_selfMesh != null) {
      let k = 0;

      switch (vtxIndex) {
        case 0:
          outPos.setXYZ(this.m_posarr[k], this.m_posarr[++k], this.m_posarr[++k]);
          break;

        case 1:
          k = 3;
          outPos.setXYZ(this.m_posarr[k], this.m_posarr[++k], this.m_posarr[++k]);
          break;

        case 2:
          k = 15; // 3 * 5

          outPos.setXYZ(this.m_posarr[k], this.m_posarr[++k], this.m_posarr[++k]);
          break;

        case 3:
          k = 9; // 3 * 3

          outPos.setXYZ(this.m_posarr[k], this.m_posarr[++k], this.m_posarr[++k]);
          break;

        case 4:
          k = 27; // 3 * 9

          outPos.setXYZ(this.m_posarr[k], this.m_posarr[++k], this.m_posarr[++k]);
          break;

        case 5:
          k = 33; // 3 * 11

          outPos.setXYZ(this.m_posarr[k], this.m_posarr[++k], this.m_posarr[++k]);
          break;

        case 6:
          k = 45; // 3 * 15

          outPos.setXYZ(this.m_posarr[k], this.m_posarr[++k], this.m_posarr[++k]);
          break;

        case 7:
          k = 39; // 3 * 13

          outPos.setXYZ(this.m_posarr[k], this.m_posarr[++k], this.m_posarr[++k]);
          break;

        default:
          break;
      }
    }
  }

  setVertexAt(vtxIndex, pos) {
    if (this.m_selfMesh != null) {
      let k = 0;

      switch (vtxIndex) {
        case 0:
          this.m_posarr[k] = pos.x;
          this.m_posarr[++k] = pos.y;
          this.m_posarr[++k] = pos.z;
          this.m_selfMesh.setVSXYZAt(0, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(2, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(8, pos.x, pos.y, pos.z);
          break;

        case 1:
          k = 3;
          this.m_posarr[k] = pos.x;
          this.m_posarr[++k] = pos.y;
          this.m_posarr[++k] = pos.z;
          this.m_selfMesh.setVSXYZAt(1, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(4, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(10, pos.x, pos.y, pos.z);
          break;

        case 2:
          k = 15;
          this.m_posarr[k] = pos.x;
          this.m_posarr[++k] = pos.y;
          this.m_posarr[++k] = pos.z;
          this.m_selfMesh.setVSXYZAt(5, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(7, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(14, pos.x, pos.y, pos.z);
          break;

        case 3:
          k = 9;
          this.m_posarr[k] = pos.x;
          this.m_posarr[++k] = pos.y;
          this.m_posarr[++k] = pos.z;
          this.m_selfMesh.setVSXYZAt(3, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(6, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(12, pos.x, pos.y, pos.z);
          break;

        case 4:
          k = 27;
          this.m_posarr[k] = pos.x;
          this.m_posarr[++k] = pos.y;
          this.m_posarr[++k] = pos.z;
          this.m_selfMesh.setVSXYZAt(9, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(16, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(18, pos.x, pos.y, pos.z);
          break;

        case 5:
          k = 33;
          this.m_posarr[k] = pos.x;
          this.m_posarr[++k] = pos.y;
          this.m_posarr[++k] = pos.z;
          this.m_selfMesh.setVSXYZAt(11, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(17, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(20, pos.x, pos.y, pos.z);
          break;

        case 6:
          k = 45;
          this.m_posarr[k] = pos.x;
          this.m_posarr[++k] = pos.y;
          this.m_posarr[++k] = pos.z;
          this.m_selfMesh.setVSXYZAt(15, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(21, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(23, pos.x, pos.y, pos.z);
          break;

        case 7:
          k = 39;
          this.m_posarr[k] = pos.x;
          this.m_posarr[++k] = pos.y;
          this.m_posarr[++k] = pos.z;
          this.m_selfMesh.setVSXYZAt(13, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(19, pos.x, pos.y, pos.z);
          this.m_selfMesh.setVSXYZAt(22, pos.x, pos.y, pos.z);
          break;

        default:
          break;
      }
    }
  }

  updateFrame(minV, maxV) {
    if (this.m_selfMesh != null) {
      this.m_minV.copyFrom(minV);
      this.m_maxV.copyFrom(maxV);
      let m = this.m_selfMesh; // bottom frame

      m.setVSXYZAt(0, minV.x, minV.y, minV.z);
      m.setVSXYZAt(1, minV.x, minV.y, maxV.z);
      m.setVSXYZAt(2, minV.x, minV.y, minV.z);
      m.setVSXYZAt(3, maxV.x, minV.y, minV.z);
      m.setVSXYZAt(4, minV.x, minV.y, maxV.z);
      m.setVSXYZAt(5, maxV.x, minV.y, maxV.z);
      m.setVSXYZAt(6, maxV.x, minV.y, minV.z);
      m.setVSXYZAt(7, maxV.x, minV.y, maxV.z); // wall frame

      m.setVSXYZAt(8, minV.x, minV.y, minV.z);
      m.setVSXYZAt(9, minV.x, maxV.y, minV.z);
      m.setVSXYZAt(10, minV.x, minV.y, maxV.z);
      m.setVSXYZAt(11, minV.x, maxV.y, maxV.z);
      m.setVSXYZAt(12, maxV.x, minV.y, minV.z);
      m.setVSXYZAt(13, maxV.x, maxV.y, minV.z);
      m.setVSXYZAt(14, maxV.x, minV.y, maxV.z);
      m.setVSXYZAt(15, maxV.x, maxV.y, maxV.z); // top frame

      m.setVSXYZAt(16, minV.x, maxV.y, minV.z);
      m.setVSXYZAt(17, minV.x, maxV.y, maxV.z);
      m.setVSXYZAt(18, minV.x, maxV.y, minV.z);
      m.setVSXYZAt(19, maxV.x, maxV.y, minV.z);
      m.setVSXYZAt(20, minV.x, maxV.y, maxV.z);
      m.setVSXYZAt(21, maxV.x, maxV.y, maxV.z);
      m.setVSXYZAt(22, maxV.x, maxV.y, minV.z);
      m.setVSXYZAt(23, maxV.x, maxV.y, maxV.z);
    }
  }

  updateFrameByAABB(ab) {
    if (this.m_abVersion != ab.version) {
      this.m_abVersion = ab.version;
      this.updateFrame(ab.min, ab.max);
    }
  }

}

exports.default = BoxFrame3D;

/***/ }),

/***/ "a996":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/
// 基本事件类

Object.defineProperty(exports, "__esModule", {
  value: true
});

class EventBase {
  constructor() {
    this.uuid = ""; // phase is event flow phase: 0(none phase),1(capture phase),2(bubble phase)

    this.phase = 0; // 事件类型

    this.type = EventBase.RESIZE; // 事件发送者

    this.target = null;
    this.data = null;
    this.__$preventBoo = false;
  } //classType:number = 1001;


  getClassType() {
    return EventBase.EventClassType;
  }

  preventDefault() {
    this.__$preventBoo = true;
  }

  reset() {
    this.__$preventBoo = false;
  }

  toString() {
    return "[EventBase]";
  }

}

EventBase.EventClassType = 1001;
EventBase.RESIZE = 3001;
EventBase.ENTER_FRAME = 3002;
exports.default = EventBase;

/***/ }),

/***/ "abdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class OrientationType {}

OrientationType.AXIS_ANGLE = 0;
OrientationType.QUATERNION = 1;
OrientationType.EULER_ANGLES = 2;
exports.default = OrientationType;

/***/ }),

/***/ "acfe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const BitConst_1 = __importDefault(__webpack_require__("ca6c"));

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

const GLSLConverter_1 = __importDefault(__webpack_require__("81ce"));

const ShaderCodeParser_1 = __importDefault(__webpack_require__("fc07"));

class ShaderData {
  constructor() {
    this.m_uid = -1;
    this.adaptationShaderVersion = true;
    this.preCompileInfo = null;
    this.m_vshdCode = "";
    this.m_fshdCode = "";
    this.m_shdUniqueName = "";
    this.m_texTotal = 0;
    this.m_uniforms = null; // identify use texture

    this.m_useTex = false; // web gl 1.0, attribute namestring list

    this.m_attriNSList = null;
    this.m_attriSizeList = null;
    this.m_aLocationTypes = null;
    this.m_uniformDict = new Map();
    this.m_haveCommonUniform = false;
    this.m_layoutBit = 0x0;
    this.m_mid = 0x0;
    this.m_fragOutputTotal = 1;
    this.m_texUniformNames = null; // recode shader uniform including status

    this.dataUniformEnabled = false;
    this.m_uid = ShaderData.s_uid++;
  }

  getVSCodeStr() {
    return this.m_vshdCode;
  }

  getFSCodeStr() {
    return this.m_fshdCode;
  }

  getLayoutBit() {
    return this.m_layoutBit;
  }

  getMid() {
    return this.m_mid;
  }

  getFragOutputTotal() {
    return this.m_fragOutputTotal;
  }

  parseCode(vshdsrc, fshdSrc) {
    ShaderData.s_codeParser.reset();
    ShaderData.s_codeParser.parseVShaderCode(vshdsrc);
    ShaderData.s_codeParser.parseFShaderCode(fshdSrc);
    this.m_fragOutputTotal = ShaderData.s_codeParser.fragOutputTotal;
    this.m_uniforms = ShaderData.s_codeParser.m_uniforms;
  }

  initialize(unique_ns, vshdsrc, fshdSrc) {
    this.m_shdUniqueName = unique_ns;

    if (this.adaptationShaderVersion && this.preCompileInfo == null) {
      if (RendererDevice_1.default.IsWebGL1()) {
        vshdsrc = GLSLConverter_1.default.Es3VtxShaderToES2(vshdsrc);
        fshdSrc = GLSLConverter_1.default.Es3FragShaderToES2(fshdSrc);
      }
    } // 直接使用 preCompileInfo 中的 uniform / attribute 等等关键信息


    if (this.preCompileInfo != null) {}

    this.parseCode(vshdsrc, fshdSrc);
    let pattributes = ShaderData.s_codeParser.attributes;
    let i = 0;
    let len = pattributes.length;
    let attri = null;
    this.m_attriNSList = [];
    this.m_attriSizeList = [];
    this.m_layoutBit = 0x0;
    let mid = 31;

    while (i < len) {
      attri = pattributes[i];

      if (attri != null) {
        this.m_attriNSList.push(attri.name);
        this.m_attriSizeList.push(attri.typeSize);

        switch (VtxBufConst_1.default.GetVBufTypeByNS(attri.name)) {
          case VtxBufConst_1.default.VBUF_VS:
            mid += mid * 131 + 1;
            this.m_layoutBit |= BitConst_1.default.BIT_ONE_0;
            break;

          case VtxBufConst_1.default.VBUF_UVS:
            mid += mid * 131 + 2;
            this.m_layoutBit |= BitConst_1.default.BIT_ONE_1;
            break;

          case VtxBufConst_1.default.VBUF_NVS:
            mid += mid * 131 + 3;
            this.m_layoutBit |= BitConst_1.default.BIT_ONE_2;
            break;

          case VtxBufConst_1.default.VBUF_CVS:
            mid += mid * 131 + 4;
            this.m_layoutBit |= BitConst_1.default.BIT_ONE_3;
            break;

          case VtxBufConst_1.default.VBUF_TVS:
            mid += mid * 131 + 5;
            this.m_layoutBit |= BitConst_1.default.BIT_ONE_4;
            break;

          case VtxBufConst_1.default.VBUF_VS2:
            mid += mid * 131 + 6;
            this.m_layoutBit |= BitConst_1.default.BIT_ONE_5;
            break;

          case VtxBufConst_1.default.VBUF_UVS2:
            mid += mid * 131 + 7;
            this.m_layoutBit |= BitConst_1.default.BIT_ONE_6;
            break;

          case VtxBufConst_1.default.VBUF_NVS2:
            mid += mid * 131 + 8;
            this.m_layoutBit |= BitConst_1.default.BIT_ONE_7;
            break;

          case VtxBufConst_1.default.VBUF_CVS2:
            mid += mid * 131 + 9;
            this.m_layoutBit |= BitConst_1.default.BIT_ONE_8;
            break;

          case VtxBufConst_1.default.VBUF_TVS2:
            mid += mid * 131 + 11;
            this.m_layoutBit |= BitConst_1.default.BIT_ONE_9;
            break;

          default:
            break;
        }
      }

      ++i;
    }

    this.m_mid = mid;
    this.m_texTotal = ShaderData.s_codeParser.texTotal;
    this.m_useTex = this.m_texTotal > 0;

    if (this.m_useTex) {
      this.m_texUniformNames = ShaderData.s_codeParser.texUniformNameListStr.split(",");
    }

    this.m_haveCommonUniform = this.m_texTotal < this.m_uniforms.length;
    this.m_vshdCode = vshdsrc;
    this.m_fshdCode = fshdSrc;
    this.m_shdUniqueName = unique_ns;
  }

  getAttriSizeList() {
    return this.m_attriSizeList;
  }

  getTexUniformNames() {
    return this.m_texUniformNames;
  }

  getUniforms() {
    return this.m_uniforms;
  }

  haveCommonUniform() {
    return this.m_haveCommonUniform;
  }

  getAttriNSList() {
    return this.m_attriNSList;
  }

  getUid() {
    return this.m_uid;
  }

  getTexTotal() {
    return this.m_texTotal;
  } // use texture true or false


  haveTexture() {
    return this.m_useTex;
  }

  getLocationsTotal() {
    return this.m_aLocationTypes.length;
  }

  getUniformTypeNameByNS(ns) {
    let uniform = this.m_uniformDict.get(ns);

    if (uniform != null) {
      return uniform.typeName;
    }

    return "";
  }

  getUniformTypeByNS(ns) {
    let uniform = this.m_uniformDict.get(ns);

    if (uniform != null) {
      return uniform.type;
    }

    return 0;
  }

  hasUniformByName(ns) {
    return this.m_uniformDict.has(ns);
  }

  getUniformLengthByNS(ns) {
    if (this.m_uniformDict.has(ns)) {
      this.m_uniformDict.get(ns).arrLength;
    }

    return 0;
  }

  getUniqueShaderName() {
    return this.m_shdUniqueName;
  }

  destroy() {
    this.m_texTotal = 0;
  }

}

ShaderData.s_uid = 0;
ShaderData.s_codeParser = new ShaderCodeParser_1.default();
exports.default = ShaderData;

/***/ }),

/***/ "b3bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class ShaderUniformData {
  constructor() {
    this.uns = "";
    this.types = null;
    this.uniformSize = 0;
    this.uniformNameList = null;
    this.locations = null;
    this.dataList = null;
    this.calcModels = null;
    this.always = true;
    this.next = null;
  } // for fast data's operation


  getDataRefFromUniformName(ns) {
    if (this.uniformNameList != null) {
      let list = this.uniformNameList;
      let len = list.length;

      for (let i = 0; i < len; ++i) {
        if (ns == list[i]) {
          return this.dataList[i];
        }
      }
    }

    return null;
  } // for fast data's operation


  setDataRefFromUniformName(ns, dataRef) {
    if (this.uniformNameList != null) {
      let list = this.uniformNameList;
      let len = list.length;

      for (let i = 0; i < len; ++i) {
        if (ns == list[i]) {
          this.dataList[i] = dataRef;
          break;
        }
      }
    }
  } //


  copyDataFromProbe(probe) {
    this.types = [];

    for (let i = 0; i < probe.uniformsTotal; ++i) {
      this.types.push(probe.uniformTypes[i]);
    }

    this.uniformSize = probe.uniformsTotal;
  }

  destroy() {
    let i = 0;
    let len = this.dataList.length;

    for (; i < len; ++i) {
      this.dataList[i] = null;
    }

    if (this.calcModels != null) {
      len = this.calcModels.length;

      for (i = 0; i < len; ++i) {
        this.calcModels[i].destroy();
        this.calcModels[i] = null;
      }
    }

    this.dataList = null;
    this.types = null;
    this.locations = null;
    this.calcModels = null;
  }

}

exports.default = ShaderUniformData;

/***/ }),

/***/ "b8ff":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const DisplayEntity_1 = __importDefault(__webpack_require__("402a"));

const Default3DMaterial_1 = __importDefault(__webpack_require__("f63e"));

const Sphere3DMesh_1 = __importDefault(__webpack_require__("f152"));

const RendererState_1 = __importDefault(__webpack_require__("29ef"));

class Sphere3DEntity extends DisplayEntity_1.default {
  constructor(transform = null) {
    super(transform);
    this.doubleTriFaceEnabled = false;
    this.m_radius = 50.0;
    this.m_longitudeNumSegments = 10;
    this.m_latitudeNumSegments = 10;
  }

  showBackFace() {
    this.setRenderState(RendererState_1.default.NORMAL_STATE);
  }

  showFrontFace() {
    this.setRenderState(RendererState_1.default.FRONT_CULLFACE_NORMAL_STATE);
  }

  showDoubleFace(always = false, doubleFace = true) {
    if (always) {
      if (doubleFace) this.setRenderState(RendererState_1.default.NONE_CULLFACE_NORMAL_ALWAYS_STATE);else this.setRenderState(RendererState_1.default.BACK_NORMAL_ALWAYS_STATE);
    } else {
      if (doubleFace) this.setRenderState(RendererState_1.default.NONE_CULLFACE_NORMAL_STATE);else this.setRenderState(RendererState_1.default.NORMAL_STATE);
    }
  }

  toTransparentBlend(always = false, doubleFace = false) {
    if (always) {
      if (doubleFace) this.setRenderState(RendererState_1.default.NONE_TRANSPARENT_ALWAYS_STATE);else this.setRenderState(RendererState_1.default.BACK_TRANSPARENT_ALWAYS_STATE);
    } else {
      if (doubleFace) this.setRenderState(RendererState_1.default.NONE_TRANSPARENT_STATE);else this.setRenderState(RendererState_1.default.BACK_TRANSPARENT_STATE);
    }
  }

  toBrightnessBlend(always = false, doubleFace = false) {
    if (always) {
      if (doubleFace) this.setRenderState(RendererState_1.default.NONE_ADD_ALWAYS_STATE);else this.setRenderState(RendererState_1.default.BACK_ADD_ALWAYS_STATE);
    } else {
      if (doubleFace) this.setRenderState(RendererState_1.default.NONE_ADD_BLENDSORT_STATE);else this.setRenderState(RendererState_1.default.BACK_ADD_BLENDSORT_STATE);
    }
  }

  createMaterial(texList) {
    if (this.getMaterial() == null) {
      let cm = new Default3DMaterial_1.default();
      cm.setTextureList(texList);
      this.setMaterial(cm);
    } else if (texList != null) {
      this.getMaterial().setTextureList(texList);
    }
  }

  initializeFrom(entity, texList = null) {
    this.copyMeshFrom(entity);
    this.copyMaterialFrom(entity);
    this.createMaterial(texList);
    this.activeDisplay();
  }

  initialize(radius, longitudeNumSegments, latitudeNumSegments, texList = null) {
    this.m_radius = radius;
    this.m_longitudeNumSegments = longitudeNumSegments;
    this.m_latitudeNumSegments = latitudeNumSegments;
    this.createMaterial(texList);
    this.activeDisplay();
  }

  __activeMesh(material) {
    if (this.getMesh() == null) {
      let mesh = new Sphere3DMesh_1.default();
      mesh.vbWholeDataEnabled = this.vbWholeDataEnabled;
      mesh.setBufSortFormat(material.getBufSortFormat());
      mesh.initialize(this.m_radius, this.m_longitudeNumSegments, this.m_latitudeNumSegments, this.doubleTriFaceEnabled);
      this.setMesh(mesh);
    }
  }

  toString() {
    return "[Sphere3DEntity(uid = " + this.getUid() + ", rseFlag = " + this.__$rseFlag + ")]";
  }

}

exports.default = Sphere3DEntity;

/***/ }),

/***/ "b9b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2020 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const DashedLineMesh_1 = __importDefault(__webpack_require__("9c3c"));

const DisplayEntity_1 = __importDefault(__webpack_require__("402a"));

const Color4_1 = __importDefault(__webpack_require__("3930"));

const Line3DMaterial_1 = __importDefault(__webpack_require__("32cc"));

class Axis3DEntity extends DisplayEntity_1.default {
  constructor() {
    super(); // 用于射线检测

    this.rayTestRadius = 8.0;
    this.colorX = new Color4_1.default(1.0, 0.0, 0.0, 1.0);
    this.colorY = new Color4_1.default(0.0, 1.0, 0.0, 1.0);
    this.colorZ = new Color4_1.default(0.0, 0.0, 1.0, 1.0);
    this.m_posarr = [0, 0, 0, 100.0, 0, 0, 0, 0, 0, 0, 100.0, 0, 0, 0, 0, 0, 0, 100.0];
  }

  setLineWidth(lineW) {//if(this.getMesh())
    //{
    //    //this.getMesh().vbuf.lineWidth = lineW;
    //}
  }

  createMaterial() {
    if (this.getMaterial() == null) {
      let cm = new Line3DMaterial_1.default();
      this.setMaterial(cm);
    }
  }

  __activeMesh(material) {
    if (this.getMesh() == null) {
      let colorarr = [this.colorX.r, this.colorX.g, this.colorX.b, this.colorX.r, this.colorX.g, this.colorX.b, this.colorY.r, this.colorY.g, this.colorY.b, this.colorY.r, this.colorY.g, this.colorY.b, this.colorZ.r, this.colorZ.g, this.colorZ.b, this.colorZ.r, this.colorZ.g, this.colorZ.b];
      let mesh = new DashedLineMesh_1.default();
      mesh.rayTestRadius = this.rayTestRadius;
      mesh.vbWholeDataEnabled = false;
      mesh.setBufSortFormat(material.getBufSortFormat());
      mesh.initialize(this.m_posarr, colorarr);
      this.setMesh(mesh);
    }
  }
  /**
   * initialize the axis entity mesh and geometry data
   * @param axisSize the X/Y/Z axis length
   */


  initialize(axisSize = 100.0) {
    if (axisSize < 2) {
      axisSize = 2;
    }

    this.m_posarr[3] = axisSize;
    this.m_posarr[10] = axisSize;
    this.m_posarr[17] = axisSize;
    this.createMaterial();
    this.activeDisplay();
  }
  /**
   * initialize the axis entity mesh and geometry data
   * @param sizeX the X axis length
   * @param sizeY the Y axis length
   * @param sizeZ the Z axis length
   */


  initializeSizeXYZ(sizeX, sizeY, sizeZ) {
    this.m_posarr[3] = sizeX;
    this.m_posarr[10] = sizeY;
    this.m_posarr[17] = sizeZ;
    this.createMaterial();
    this.activeDisplay();
  }

  initializeCorssSizeXYZ(sizeX, sizeY, sizeZ) {
    //  this.m_posarr[3] = sizeX;
    //  this.m_posarr[10] = sizeY;
    //  this.m_posarr[17] = sizeZ;
    sizeX *= 0.5;
    sizeY *= 0.5;
    sizeZ *= 0.5;
    this.m_posarr[0] = -sizeX;
    this.m_posarr[7] = -sizeY;
    this.m_posarr[14] = -sizeZ;
    this.m_posarr[3] = sizeX;
    this.m_posarr[10] = sizeY;
    this.m_posarr[17] = sizeZ;
    this.createMaterial();
    this.activeDisplay();
  }
  /**
   * initialize the cross axis entity mesh and geometry data
   * @param axisSize the X/Y/Z axis length
   */


  initializeCross(axisSize = 100.0) {
    if (axisSize < 2) {
      axisSize = 2;
    }

    axisSize *= 0.5;
    this.m_posarr[0] = -axisSize;
    this.m_posarr[7] = -axisSize;
    this.m_posarr[14] = -axisSize;
    this.m_posarr[3] = axisSize;
    this.m_posarr[10] = axisSize;
    this.m_posarr[17] = axisSize;
    this.createMaterial();
    this.activeDisplay();
  }

  toString() {
    return "Axis3DEntity(name=" + this.name + ",uid = " + this.getUid() + ", rseFlag = " + this.__$rseFlag + ")";
  }

}

exports.default = Axis3DEntity;

/***/ }),

/***/ "bbd2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const RendererState_1 = __importDefault(__webpack_require__("29ef"));

const DisplayEntity_1 = __importDefault(__webpack_require__("402a"));

const BillboardMaterial_1 = __importDefault(__webpack_require__("6098"));

const BillboardPlaneMesh_1 = __importDefault(__webpack_require__("9266"));

class Billboard3DEntity extends DisplayEntity_1.default {
  constructor(transform = null) {
    super(transform);
    this.m_brightnessEnabled = true;
    this.m_alphaEnabled = false;
    this.flipVerticalUV = false;
    this.m_bw = 0;
    this.m_bh = 0;
    this.m_currMaterial = null;
    this.m_billMesh = null;
    this.setRenderState(RendererState_1.default.BACK_ADD_BLENDSORT_STATE);
  }

  setRGB3f(pr, pg, pb) {
    if (this.m_currMaterial != null) {
      this.m_currMaterial.setRGB3f(pr, pg, pb);
    }
  }

  setRGBOffset3f(pr, pg, pb) {
    if (this.m_currMaterial != null) {
      this.m_currMaterial.setRGBOffset3f(pr, pg, pb);
    }
  }

  setFadeFactor(pa) {
    if (this.m_currMaterial != null) {
      this.m_currMaterial.setFadeFactor(pa);
    }
  }

  getFadeFactor() {
    return this.m_currMaterial.getFadeFactor();
  }

  getRotationZ() {
    return this.m_currMaterial.getRotationZ();
  }

  setRotationZ(degrees) {
    this.m_currMaterial.setRotationZ(degrees);
  }

  getScaleX() {
    return this.m_currMaterial.getScaleX();
  }

  getScaleY() {
    return this.m_currMaterial.getScaleY();
  }

  setScaleX(p) {
    this.m_currMaterial.setScaleX(p);
  }

  setScaleY(p) {
    this.m_currMaterial.setScaleY(p);
  }

  setScaleXY(sx, sy) {
    this.m_currMaterial.setScaleXY(sx, sy);
  }

  createMaterial(texList) {
    if (this.getMaterial() == null) {
      this.m_currMaterial = new BillboardMaterial_1.default(this.m_brightnessEnabled, this.m_alphaEnabled);
      this.m_currMaterial.setTextureList(texList);
      this.setMaterial(this.m_currMaterial);
    } else {
      this.m_currMaterial = this.getMaterial();
      this.m_currMaterial.setTextureList(texList);
    }
  }

  toTransparentBlend(always = false) {
    this.m_brightnessEnabled = false;
    this.m_alphaEnabled = true;

    if (always) {
      this.setRenderState(RendererState_1.default.BACK_TRANSPARENT_STATE);
    } else {
      this.setRenderState(RendererState_1.default.BACK_TRANSPARENT_ALWAYS_STATE);
    }
  }

  toBrightnessBlend(always = false) {
    this.m_brightnessEnabled = true;
    this.m_alphaEnabled = false;

    if (always) {
      this.setRenderState(RendererState_1.default.BACK_ADD_BLENDSORT_STATE);
    } else {
      this.setRenderState(RendererState_1.default.BACK_ADD_BLENDSORT_STATE);
    }
  }

  initializeSquare(size, texList) {
    this.m_bw = size;
    this.m_bh = size;
    this.createMaterial(texList);
    this.activeDisplay();
  }

  initialize(bw, bh, texList) {
    this.m_bw = bw;
    this.m_bh = bh;
    this.createMaterial(texList);
    this.activeDisplay();
  }

  createBounds() {}

  __activeMesh(material) {
    if (this.getMesh() == null) {
      let mesh = new BillboardPlaneMesh_1.default();
      mesh.vbWholeDataEnabled = this.vbWholeDataEnabled;
      mesh.flipVerticalUV = this.flipVerticalUV;
      mesh.setBufSortFormat(material.getBufSortFormat());
      mesh.initialize(this.m_bw, this.m_bh);
      this.setMesh(mesh);
      this.m_billMesh = mesh;
    }
  }

  setUV(pu, pv, du, dv) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setUV(pu, pv, du, dv);
    }
  }

  update() {
    this.m_transfrom.update();
  }

  destroy() {
    this.m_currMaterial = null;
    this.m_billMesh = null;
    super.destroy();
  }

  toString() {
    return "Billboard3DEntity(uid = " + this.getUid() + ", rseFlag = " + this.__$rseFlag + ")";
  }

}

exports.default = Billboard3DEntity;

/***/ }),

/***/ "bd6f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const RendererState_1 = __importDefault(__webpack_require__("29ef"));

const DisplayEntity_1 = __importDefault(__webpack_require__("402a"));

const Default3DMaterial_1 = __importDefault(__webpack_require__("f63e"));

const ScreenPlaneMaterial_1 = __importDefault(__webpack_require__("a254"));

const RectPlaneMesh_1 = __importDefault(__webpack_require__("76b0"));

const Color4_1 = __importDefault(__webpack_require__("3930"));

class Plane3DEntity extends DisplayEntity_1.default {
  constructor(transform = null) {
    super(transform);
    this.m_startX = 0;
    this.m_startZ = 0;
    this.m_pwidth = 0;
    this.m_plong = 0;
    this.m_flag = 0;
    this.m_screenAlignEnabled = false;
    this.color0 = new Color4_1.default();
    this.color1 = new Color4_1.default();
    this.color2 = new Color4_1.default();
    this.color3 = new Color4_1.default();
    this.offsetU = 0.0;
    this.offsetV = 0.0;
    this.uScale = 1.0;
    this.vScale = 1.0;
    this.uvs = null;
    this.flipVerticalUV = false;
    this.vtxColorEnabled = false;
    this.premultiplyAlpha = false;
  } // 是否是平铺在屏幕上


  setScreenAlignEnable(enable) {
    this.m_screenAlignEnabled = enable;
  }

  createMaterial(texList) {
    if (this.getMaterial() == null) {
      //ScreenPlaneMaterial
      if (this.m_screenAlignEnabled) {
        let cm = new ScreenPlaneMaterial_1.default();
        cm.setTextureList(texList);
        this.setMaterial(cm);
      } else {
        let cm = new Default3DMaterial_1.default();
        cm.vtxColorEnabled = this.vtxColorEnabled;
        cm.premultiplyAlpha = this.premultiplyAlpha;
        cm.setTextureList(texList);
        this.setMaterial(cm);
      }
    } else if (texList != null && this.getMaterial().getTextureTotal() < 1) {
      this.getMaterial().setTextureList(texList);
    }
  }

  showDoubleFace(always = false, doubleFace = true) {
    if (always) {
      if (doubleFace) {
        this.setRenderState(RendererState_1.default.NONE_CULLFACE_NORMAL_ALWAYS_STATE);
      } else this.setRenderState(RendererState_1.default.BACK_NORMAL_ALWAYS_STATE);
    } else {
      if (doubleFace) {
        this.setRenderState(RendererState_1.default.NONE_CULLFACE_NORMAL_STATE);
      } else this.setRenderState(RendererState_1.default.NORMAL_STATE);
    }
  }

  toTransparentBlend(always = false, doubleFace = false) {
    if (always) {
      if (doubleFace) this.setRenderState(RendererState_1.default.NONE_TRANSPARENT_ALWAYS_STATE);else this.setRenderState(RendererState_1.default.BACK_TRANSPARENT_ALWAYS_STATE);
    } else {
      if (doubleFace) this.setRenderState(RendererState_1.default.NONE_TRANSPARENT_STATE);else this.setRenderState(RendererState_1.default.BACK_TRANSPARENT_STATE);
    }
  }

  toBrightnessBlend(always = false, doubleFace = false) {
    if (always) {
      if (doubleFace) this.setRenderState(RendererState_1.default.NONE_ADD_ALWAYS_STATE);else this.setRenderState(RendererState_1.default.BACK_ADD_ALWAYS_STATE);
    } else {
      if (doubleFace) this.setRenderState(RendererState_1.default.NONE_ADD_BLENDSORT_STATE);else this.setRenderState(RendererState_1.default.BACK_ADD_BLENDSORT_STATE);
    }
  }
  /**
   * initialize a rectangle fix screen size plane ,and it parallel the 3d space XOY plane
   * @param texList textures list, default value is null.
   */


  initializeFixScreen(texList = null) {
    this.initializeXOY(-1.0, -1.0, 2.0, 2.0, texList);
  }
  /**
   * initialize a rectangle plane ,and it parallel the 3d space XOY plane
   * @param minX the min x axis position of the rectangle plane.
   * @param minZ the min y axis position of the rectangle plane.
   * @param pwidth the width of the rectangle plane.
   * @param height the height of the rectangle plane.
   * @param texList textures list, default value is null.
   */


  initializeXOY(minX, minY, pwidth, pheight, texList = null) {
    this.m_startX = minX;
    this.m_startZ = minY;
    this.m_pwidth = pwidth;
    this.m_plong = pheight;
    this.m_flag = 0;
    this.createMaterial(texList);
    this.activeDisplay();
  }
  /**
   * initialize a square plane ,and it parallel the 3d space XOY plane
   * @param size the width and height of the rectangle plane.
   * @param texList textures list, default value is null.
   */


  initializeXOYSquare(size, texList = null) {
    this.m_startX = -0.5 * size;
    this.m_startZ = -0.5 * size;
    this.m_pwidth = size;
    this.m_plong = size;
    this.m_flag = 0;
    this.createMaterial(texList);
    this.activeDisplay();
  }
  /**
   * initialize a rectangle plane ,and it parallel the 3d space XOZ plane
   * @param minX the min x axis position of the rectangle plane.
   * @param minZ the min z axis position of the rectangle plane.
   * @param pwidth the width of the rectangle plane.
   * @param plong the long of the rectangle plane.
   * @param texList textures list, default value is null.
   */


  initializeXOZ(minX, minZ, pwidth, plong, texList = null) {
    this.m_flag = 1;
    this.m_startX = minX;
    this.m_startZ = minZ;
    this.m_pwidth = pwidth;
    this.m_plong = plong;
    this.createMaterial(texList);
    this.activeDisplay();
  }
  /**
   * initialize a rectangle plane ,and it parallel the 3d space YOZ plane
   * @param minX the min x axis position of the rectangle plane.
   * @param minZ the min z axis position of the rectangle plane.
   * @param pwidth the width of the rectangle plane.
   * @param plong the long of the rectangle plane.
   * @param texList textures list, default value is null.
   */


  initializeYOZ(minY, minZ, pwidth, plong, texList = null) {
    this.m_flag = 2;
    this.m_startX = minY;
    this.m_startZ = minZ;
    this.m_pwidth = pwidth;
    this.m_plong = plong;
    this.createMaterial(texList);
    this.activeDisplay();
  }
  /**
   * initialize a square plane ,and it parallel the 3d space XOZ plane
   * @param size the width and long of the rectangle plane.
   * @param texList textures list, default value is null.
   */


  initializeXOZSquare(size, texList = null) {
    this.m_flag = 1;
    this.m_startX = -0.5 * size;
    this.m_startZ = -0.5 * size;
    this.m_pwidth = size;
    this.m_plong = size;
    this.createMaterial(texList);
    this.activeDisplay();
  }

  __activeMesh(material) {
    if (this.getMesh() == null) {
      let mesh = new RectPlaneMesh_1.default();
      mesh.color0.copyFrom(this.color0);
      mesh.color1.copyFrom(this.color1);
      mesh.color2.copyFrom(this.color2);
      mesh.color3.copyFrom(this.color3);
      mesh.setUVS(this.uvs);
      this.uvs = null;
      mesh.uScale = this.uScale;
      mesh.vScale = this.vScale;
      mesh.offsetU = this.offsetU;
      mesh.offsetV = this.offsetV;
      mesh.flipVerticalUV = this.flipVerticalUV;
      mesh.vbWholeDataEnabled = this.vbWholeDataEnabled;
      mesh.axisFlag = this.m_flag;
      mesh.setBufSortFormat(material.getBufSortFormat());
      mesh.initialize(this.m_startX, this.m_startZ, this.m_pwidth, this.m_plong);
      this.setMesh(mesh);
    }
  }

  setUVS(uvsLen8) {
    let mesh = this.getMesh();

    if (mesh != null) {
      mesh.setUVS(uvsLen8);
    }
  }

  reinitializeMesh() {
    let mesh = this.getMesh();

    if (mesh != null) {
      mesh.reinitialize();
    }
  }

  toString() {
    return "[Plane3DEntity]";
  }

}

exports.default = Plane3DEntity;

/***/ }),

/***/ "c217":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class BillboardFSBase {
  constructor() {
    this.m_brnAStatus = 0;
  }

  getBrnAlphaStatus() {
    return this.m_brnAStatus;
  }

  setBrightnessAndAlpha(brightnessEnabled, alphaEnabled) {
    this.m_brnAStatus = Number(brightnessEnabled) * 10 + Number(alphaEnabled);
  }

  getBrnAndAlphaCode(factorNS = "v_texUV") {
    let fadeCode;

    if (this.m_brnAStatus == 11) {
      fadeCode = `
color.rgb = color.rgb * v_colorMult.xyz + color.aaa * offsetColor;
color *= ` + factorNS + `.zzzz;
`;
    } else if (this.m_brnAStatus == 10) {
      fadeCode = `
color.rgb = min(color.rgb * v_colorMult.xyz + color.rgb * offsetColor, vec3(1.0));
color.rgb *= ` + factorNS + `.zzz;
`;
    } else if (this.m_brnAStatus == 1) {
      fadeCode = `
color.rgb = color.rgb * v_colorMult.xyz + color.aaa * offsetColor;
color.a *= ` + factorNS + `.z;
`;
    } else {
      fadeCode = `
color.rgb = color.rgb * v_colorMult.xyz + offsetColor;
color.a *= ` + factorNS + `.z;
`;
    }

    return fadeCode;
  }

  getMixThreeColorsCode() {
    let codeStr = `
vec4 mixThreeColors(vec4 color0,vec4 color1,vec4 color2,float t)
{
float k0 = max(1.0 - 2.0 * t, 0.0);
float k = max(t - 0.5, 0.0);
float k1 = (1.0 - (2.0 * k)) * step(-0.00001,k);
k = step(0.00001,k0);
return mix(mix(color2,color1,k1), mix(color1,color0,k0), k);
}
`;
    return codeStr;
  }

  getOffsetColorCode(sampleIndex, OffsetColorTexEnabled, useRawUVEnabled = false) {
    let fragCode2;

    if (OffsetColorTexEnabled) {
      if (useRawUVEnabled) {
        fragCode2 = `
vec3 offsetColor = clamp(v_colorOffset.xyz + texture(u_sampler` + sampleIndex + `, v_uv.xy).xyz,vec3(0.0),vec3(1.0));
`;
      } else {
        fragCode2 = `
vec3 offsetColor = clamp(v_colorOffset.xyz + texture(u_sampler` + sampleIndex + `, v_texUV.xy).xyz,vec3(0.0),vec3(1.0));
`;
      }
    } else {
      fragCode2 = `
vec3 offsetColor = v_colorOffset.xyz;
`;
    }

    return fragCode2;
  }

}

exports.default = BillboardFSBase;

/***/ }),

/***/ "ca6c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

class BitConst {
  static PushThreeBitValueToInt(target, value) {
    return (target << 3) + value;
  }

  static PopThreeBitValueFromInt(target) {
    BitConst.value = 7 & target;
    return target >> 3;
  }

  static ContainsBit(target, bit) {
    return (bit & target) > 0;
  }

  static RemoveBit(target, bit) {
    return ~bit & target;
  }

  static AddBit(target, bit) {
    return bit | target;
  } //


  static AssembleFromIntArray(intArray) {
    let i = 0;
    let bit = 0x0;
    let len = intArray.length;

    for (; i < len; ++i) {
      if (intArray[i] > 0) {
        bit |= 1 << i;
      }
    }

    return bit;
  }

}

BitConst.BIT_ZERO = 0;
BitConst.BIT_ONE_0 = 1; //0b1

BitConst.BIT_ONE_1 = 1 << 1; //0b10

BitConst.BIT_ONE_2 = 1 << 2; //0b100

BitConst.BIT_ONE_3 = 1 << 3; //0b1000

BitConst.BIT_ONE_4 = 1 << 4; //0b10000

BitConst.BIT_ONE_5 = 1 << 5; //0b100000

BitConst.BIT_ONE_6 = 1 << 6; //0b1000000

BitConst.BIT_ONE_7 = 1 << 7; //0b10000000

BitConst.BIT_ONE_8 = 1 << 8; //0b100000000

BitConst.BIT_ONE_9 = 1 << 9; //0b1000000000

BitConst.BIT_ONE_10 = 1 << 10; //0b10000000000

BitConst.BIT_ONE_11 = 1 << 11; //0b100000000000

BitConst.value = 0;
exports.default = BitConst;

/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const VtxBufConst_2 = __webpack_require__("8a0a");

const ROVertexBuffer_1 = __importDefault(__webpack_require__("e7d2"));

const RenderConst_1 = __webpack_require__("e08e"); //import ROVertexBuffer = ROVertexBufferT.vox.mesh.ROVertexBuffer;

/**
 * mesh(Polygon face convex mesh or Parametric geometry Objecct:):
 *      1.基于面(例如三角面)描述的多面体实体(Polygon face geometry mesh,for example: triangle mesh)
 *      2.基于空间几何方程描述的空间几何体(Parametric geometry Objecct,for example: Sphere(px,py,pz,radius))
*/


class MeshBase {
  constructor(bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    this.m_bufDataUsage = 0; //private m_isDyn:boolean = false;

    this.m_layoutBit = 0x0; // very important!!!

    this.m_transMatrix = null;
    this.m_vbuf = null;
    this.m_ivs = null;
    this.m_bufDataList = null;
    this.m_bufDataStepList = null;
    this.m_bufStatusList = null;
    this.bounds = null;
    this.normalType = VtxBufConst_2.VtxNormalType.GOURAND;
    this.normalScale = 1.0;
    this.vtxTotal = 0;
    this.trisNumber = 0; //RenderDrawMode

    this.drawMode = RenderConst_1.RenderDrawMode.ELEMENTS_TRIANGLES; //  // vtx postion in data stream used count

    this.vtCount = 0;
    this.vbWholeDataEnabled = false;
    this.drawInsBeginIndex = 0;
    this.drawInsStride = 0;
    this.drawInsTotal = 0;
    this.m_attachCount = 0;
    this.m_bufDataUsage = bufDataUsage; //this.m_isDyn = bufDataUsage == VtxBufConst.VTX_DYNAMIC_DRAW;
  }

  buildEnd() {
    this.m_bufDataList = ROVertexBuffer_1.default.BufDataList;
    this.m_bufDataStepList = ROVertexBuffer_1.default.BufDataStepList;
    this.m_bufStatusList = ROVertexBuffer_1.default.BufStatusList;
  }

  setTransformMatrix(matrix) {
    this.m_transMatrix = matrix;
  }

  getTransformMatrix() {
    return this.m_transMatrix;
  }
  /**
   * @return 返回true是则表示这是基于三角面的可渲染多面体, 返回false则是一个数学方程描述的几何体(例如球体).
   *         如果是多面体实体,则可以进行三角面的相关计算等操作, 如果不是则需要进行相关的几何算法计算.
   */


  isPolyhedral() {
    return true;
  } // 设置自身是否是多面体实体，根据实际需要改变相关的状态值


  setPolyhedral(boo) {}
  /**
   * 射线和自身的相交检测(多面体或几何函数(例如球体))
   * @boundsHit       表示是否包围盒体已经和射线相交了
   * @rlpv            表示物体坐标空间的射线起点
   * @rltv            表示物体坐标空间的射线朝向
   * @outV            如果检测相交存放物体坐标空间的交点
   * @return          返回值 -1 表示不会进行检测,1表示相交,0表示不相交
   */


  testRay(rlpv, rltv, outV, boundsHit) {
    return -1;
  }

  rebuild() {
    if (this.m_vbuf == null) {
      if (this.m_bufDataList != null) {
        console.log("MeshBase::rebuild()...");
        ROVertexBuffer_1.default.Reset();
        let i = 0;
        let len = this.m_bufDataList.length;

        for (; i < len; ++i) {
          ROVertexBuffer_1.default.AddFloat32Data(this.m_bufDataList[i], this.m_bufDataStepList[i], this.m_bufStatusList[i]);
        }

        this.m_vbuf = ROVertexBuffer_1.default.CreateBySaveData(this.getBufDataUsage());

        if (this.m_ivs != null) {
          this.m_vbuf.setUint16IVSData(this.m_ivs);
          this.vtCount = this.m_ivs.length;
        }
      }
    }
  }

  __$attachVBuf() {
    if (this.m_vbuf == null) {
      // rebuild vbuf;
      this.rebuild();
    }

    ROVertexBuffer_1.default.__$$AttachAt(this.m_vbuf.getUid());

    return this.m_vbuf;
  }

  __$detachVBuf(vbuf) {
    if (this.m_vbuf != vbuf) {
      throw Error("Fatal Error!");
    }

    ROVertexBuffer_1.default.__$$DetachAt(this.m_vbuf.getUid());
  }

  isGeomDynamic() {
    return this.m_bufDataUsage;
  }

  getBufDataUsage() {
    return this.m_bufDataUsage;
  } // vertex


  getVS() {
    return null;
  } // index bufer


  getIVS() {
    return this.m_ivs;
  }
  /**
   * @param layoutBit vertex shader vertex attributes layout bit status.
   *                  the value of layoutBit comes from the material shdder program.
   */


  setBufSortFormat(layoutBit) {
    this.m_layoutBit = layoutBit;
  }

  getBufSortFormat() {
    return this.m_layoutBit;
  }

  isVBufEnabledAt(i) {
    return (i & this.m_layoutBit) > 0;
  }

  __$attachThis() {
    ++this.m_attachCount; //console.log("MeshBase::__$attachThis() this.m_attachCount: "+this.m_attachCount);
  }

  __$detachThis() {
    if (this.m_attachCount == 1) {
      --this.m_attachCount; //console.log("MeshBase::__$detachThis() this.m_attachCount: "+this.m_attachCount);

      this.__$dispose();
    } else {
      --this.m_attachCount; //console.log("MeshBase::__$detachThis() this.m_attachCount: "+this.m_attachCount);
    }

    if (this.m_attachCount < 1) {
      this.m_attachCount = 0;
    }
  }

  getAttachCount() {
    return this.m_attachCount;
  } // 释放被外部对象持有的资源


  __$dispose() {
    if (this.getAttachCount() < 1 && this.m_vbuf != null) {
      //console.log("MeshBase::__$dispose()... this.m_attachCount: "+this.m_attachCount);
      ROVertexBuffer_1.default.__$$DetachAt(this.m_vbuf.getUid());

      this.m_vbuf = null;
    }
  }

  isEnabled() {
    return this.m_vbuf != null;
  }

  isResFree() {
    return this.getAttachCount() < 1 && this.m_vbuf == null;
  }
  /**
   * really destroy this instance all data
   */


  __$destroy() {
    if (this.isResFree()) {
      //console.log("MeshBase::__$destroy()... this.m_attachCount: "+this.m_attachCount);
      this.m_ivs = null;
      this.m_bufDataList = null;
      this.m_bufDataStepList = null;
      this.m_bufStatusList = null;
      this.trisNumber = 0;
      this.m_transMatrix = null;
    }
  }

  toString() {
    return "[MeshBase()]";
  }

}

exports.default = MeshBase;

/***/ }),

/***/ "cc48":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SpaceCullingMask;

(function (SpaceCullingMask) {
  SpaceCullingMask[SpaceCullingMask["NONE"] = 0] = "NONE"; // 需要做摄像机的可见剔除

  SpaceCullingMask[SpaceCullingMask["CAMERA"] = 1] = "CAMERA"; // project occlusion volume

  SpaceCullingMask[SpaceCullingMask["POV"] = 2] = "POV"; // 包含在遮挡体内部的不会进行遮挡剔除计算

  SpaceCullingMask[SpaceCullingMask["INNER_POV_PASS"] = 3] = "INNER_POV_PASS"; // 摄像机和POV都要做遮挡剔除

  SpaceCullingMask[SpaceCullingMask["CAMERA_AND_POV"] = 4] = "CAMERA_AND_POV";
})(SpaceCullingMask || (SpaceCullingMask = {}));

exports.default = SpaceCullingMask;

/***/ }),

/***/ "d1a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const MathConst_1 = __importDefault(__webpack_require__("6e01"));

class PlaneCalc {
  static PlaneCalcIntersectSphere(pnv, pdis, cv, radius) {
    PlaneCalc.IntersectBoo = false;
    PlaneCalc.IntersectSatus = 0;
    pdis = pnv.dot(cv) - pdis;

    if (pdis > MathConst_1.default.MATH_MIN_POSITIVE) {
      PlaneCalc.IntersectBoo = pdis <= radius;
      PlaneCalc.IntersectSatus = 1;
    } else if (pdis < MathConst_1.default.MATH_MAX_NEGATIVE) {
      PlaneCalc.IntersectBoo = -pdis <= radius;
      PlaneCalc.IntersectSatus = -1;
    }
  }

  static CalcPVCloseV(planeNV, planeDis, posV, outV) {
    let value = planeDis - posV.dot(planeNV);
    outV.setTo(value * planeNV.x, value * planeNV.y, value * planeNV.z);
    outV.addBy(posV);
  }

  static CalcPVCloseV2(pnv, pd, posV, outV) {
    let value = pd - posV.dot(pnv);
    outV.setTo(value * pnv.x, value * pnv.y, value * pnv.z); //outV.scaleBy(value);

    outV.addBy(posV);
  }

  static IntersectionSLV2(planeNV, planeDis, sl_pos, sl_tv, outV) {
    // intersection or parallel
    let td = planeNV.dot(sl_tv);

    if (td > MathConst_1.default.MATH_MIN_POSITIVE || td < MathConst_1.default.MATH_MAX_NEGATIVE) {
      // intersection
      let dis = planeNV.dot(sl_pos) - planeDis;
      outV.x = sl_tv.x * 100000.0 + sl_pos.x;
      outV.y = sl_tv.y * 100000.0 + sl_pos.y;
      outV.z = sl_tv.z * 100000.0 + sl_pos.z; //

      td = planeNV.dot(outV) - planeDis;
      td = dis / (dis - td);
      outV.subtractBy(sl_pos);
      outV.scaleBy(td);
      outV.addBy(sl_pos);
      return 1;
    }

    td = planeNV.dot(sl_pos) - planeDis;

    if (td <= MathConst_1.default.MATH_MIN_POSITIVE || td >= MathConst_1.default.MATH_MAX_NEGATIVE) {
      // plane contains line
      outV.copyFrom(sl_pos);
      return 2;
    }

    return 0;
  }

}

PlaneCalc.IntersectBoo = false;
PlaneCalc.IntersectSatus = 0;
exports.default = PlaneCalc;

/***/ }),

/***/ "da6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class TextureResSlot {
  constructor() {
    this.m_texResource = null;
    this.m_bufferUpdater = null;
    this.m_textureTotal = 0;
    this.m_textureMap = new Map();
    this.m_freeMap = new Map();
    this.m_texUid = 0;
    this.m_freeUids = [];

    if (TextureResSlot.s_ins != null) {
      throw Error("This Class is a singleton class!!!");
    }

    TextureResSlot.s_ins = null;
  }

  static GetInstance() {
    if (TextureResSlot.s_ins != null) {
      return TextureResSlot.s_ins;
    }

    TextureResSlot.s_ins = new TextureResSlot();
    return TextureResSlot.s_ins;
  }

  getFreeUid() {
    if (this.m_freeUids.length > 0) {
      return this.m_freeUids.pop();
    }

    let uid = this.m_texUid++;
    return uid;
  }
  /**
   * 将texture实例添加到统一管理的 TextureResSlot中
   * 这个函数不允许其他地方调用
   */


  __$$addTexture(texture) {
    if (texture != null && !this.m_textureMap.has(texture.getUid())) {
      this.m_textureMap.set(texture.getUid(), texture);
      this.m_textureTotal++;
    }
  }

  getTextureByUid(uid) {
    return this.m_textureMap.get(uid);
  }

  hasTextureByUid(uid) {
    return this.m_textureMap.has(uid);
  }

  removeTextureByUid(uid) {
    if (this.m_textureMap.has(uid)) {
      let tex = this.m_textureMap.get(uid);

      if (tex.getAttachCount() < 1) {
        if (this.m_freeMap.has(uid)) {
          this.m_freeMap.delete(uid);
        }

        tex.__$destroy();

        tex.__$$removeFromSlot();

        this.m_textureMap.delete(uid);
        this.m_freeUids.push(uid);
        this.m_textureTotal--;
        return tex;
      }
    }

    return null;
  }
  /**
   * @returns get runtime all textures amount
   */


  getTextureTotal() {
    return this.m_textureTotal;
  }

  setRenderProxy(renderProxy) {
    this.m_texResource = renderProxy.Texture;
  }

  setBufferUpdater(bufferUpdater) {
    this.m_bufferUpdater = bufferUpdater;
  }

  getFreeResUidMap() {
    return this.m_freeMap;
  }

  isGpuEnabledByResUid(resUid) {
    return this.m_texResource.hasResUid(resUid);
  } // 先使用map hash拦截的方式,来决定buf和renderer context避免重复的单次关联


  addRenderBuffer(buf, bufResUid) {
    if (this.m_bufferUpdater != null) {
      this.m_bufferUpdater.__$addBuf(buf, bufResUid);
    }
  }

  addFreeUid(uid) {
    this.m_freeMap.set(uid, 0);
  }

  removeFreeUid(uid) {
    if (this.m_freeMap.has(uid)) {
      this.m_freeMap.delete(uid);
    }
  }

}

TextureResSlot.s_ins = null;
exports.default = TextureResSlot;

/***/ }),

/***/ "dc2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/
// 只是用于视觉表现上的渲染控制, 而和transform或者非渲染的逻辑无关
// 一个 RODisplay 和一个 IRPODisplay一一对应, 一个RODisplay也只会和一个renderer相关联

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const RenderConst_1 = __webpack_require__("e08e");

const RendererState_1 = __importDefault(__webpack_require__("29ef"));

class RODisplay {
  constructor() {
    this.m_uid = 0;
    this.m_material = null; // 只是持有引用不做任何管理操作

    this.m_matFS32 = null;
    this.name = "RODisplay"; // render yes or no

    this.visible = true;
    this.ivsIndex = 0;
    this.ivsCount = 0; // only use in drawElementsInstanced()...

    this.trisNumber = 0;
    this.insCount = 0;
    this.drawMode = RenderConst_1.RenderDrawMode.ELEMENTS_TRIANGLES;
    this.vbuf = null; // record render state: shadowMode(one byte) + depthTestMode(one byte) + blendMode(one byte) + cullFaceMode(one byte)
    // its value come from: RendererState.CreateRenderState("default", CullFaceMode.BACK,RenderBlendMode.NORMAL,DepthTestMode.OPAQUE);

    this.renderState = RendererState_1.default.NORMAL_STATE;
    this.rcolorMask = RendererState_1.default.COLOR_MASK_ALL_TRUE; // mouse interaction enabled flag

    this.mouseEnabled = false;
    this.m_partGroup = null;
    this.m_trans = null; // 只能由渲染系统内部调用

    this.__$ruid = -1; // 用于关联IRPODisplay对象

    this.__$rpuid = -1; // 用于关联RPONode对象

    this.__$$rsign = RenderConst_1.DisplayRenderSign.NOT_IN_WORLD;
    this.__$$runit = null;
    this.m_uid = RODisplay.s_uid++;
  } // draw parts group: [ivsCount0,ivsIndex0, ivsCount1,ivsIndex1, ivsCount2,ivsIndex2, ...]


  getPartGroup() {
    return this.m_partGroup;
  }

  createPartGroup(partsTotal) {
    if (partsTotal < 1) {
      partsTotal = 1;
    }

    this.m_partGroup = new Uint16Array(partsTotal * 2);
  }

  setDrawPartAt(index, ivsIndex, ivsCount) {
    index *= 2;
    this.m_partGroup[index] = ivsCount;
    this.m_partGroup[++index] = ivsIndex;
  }

  getUid() {
    return this.m_uid;
  }

  setTransform(trans) {
    this.m_trans = trans;
    this.m_matFS32 = trans.getLocalFS32();
  }

  getTransform() {
    return this.m_trans;
  }

  getMatrixFS32() {
    return this.m_matFS32;
  }

  enableDrawInstanced(offset, instanceCount) {
    this.drawMode = RenderConst_1.RenderDrawMode.ELEMENTS_INSTANCED_TRIANGLES;
    this.ivsIndex = offset;
    this.insCount = instanceCount;
  }

  disableDrawInstanced() {
    this.drawMode = RenderConst_1.RenderDrawMode.ELEMENTS_TRIANGLES;
  }

  getMaterial() {
    return this.m_material;
  }

  setMaterial(m) {
    if (this.m_material != null) {
      if (this.m_material != m) {
        this.m_material.__$detachThis();

        if (m != null) {
          m.__$attachThis();
        }
      }
    }

    this.m_material = m;
  }

  copyFrom(display) {
    this.vbuf = display.vbuf;
    this.ivsIndex = display.ivsIndex;
    this.ivsCount = display.ivsCount;
    this.setMaterial(display.getMaterial());
  }

  toString() {
    return "RODisplay(name=" + this.name + ",uid=" + this.getUid() + ", __$ruid=" + this.__$ruid + ")";
  }

  destroy() {
    // 如果只有自己持有 this.m_material, 则destroy this.m_material
    // 这里还需要优化
    if (this.m_material != null) {
      this.m_material.__$detachThis();

      this.m_material.destroy();
      this.m_material = null;
    }

    this.m_matFS32 = null;
    this.vbuf = null;
    this.__$ruid = -1;
    this.__$rpuid = -1;
    this.__$$rsign = RenderConst_1.DisplayRenderSign.NOT_IN_WORLD;
    this.ivsIndex = 0;
    this.ivsCount = 0;
    this.m_partGroup = null;
    this.__$$runit = null;
  }

  static GetFreeId() {
    if (RODisplay.m_freeIdList.length > 0) {
      return RODisplay.m_freeIdList.pop();
    }

    return -1;
  }

  static GetByUid(uid) {
    return RODisplay.m_unitList[uid];
  }

  static IsEnabledByUid(uid) {
    return RODisplay.m_unitFlagList[uid] == RODisplay.S_FLAG_BUSY;
  }

  static Create() {
    let unit = null;
    let index = RODisplay.GetFreeId(); //console.log("RODisplay::Create(), RODisplay.m_unitList.length: "+RODisplay.m_unitList.length);

    if (index >= 0) {
      unit = RODisplay.m_unitList[index];
      RODisplay.m_unitFlagList[index] = RODisplay.S_FLAG_BUSY;
    } else {
      unit = new RODisplay();
      RODisplay.m_unitList.push(unit);
      RODisplay.m_unitFlagList.push(RODisplay.S_FLAG_BUSY);
      RODisplay.m_unitListLen++;
    }

    return unit;
  }

  static Restore(pdisp) {
    if (pdisp != null && RODisplay.m_unitFlagList[pdisp.getUid()] == RODisplay.S_FLAG_BUSY) {
      let uid = pdisp.getUid();
      RODisplay.m_freeIdList.push(uid);
      RODisplay.m_unitFlagList[uid] = RODisplay.S_FLAG_FREE;
      pdisp.destroy();
    }
  }

}

RODisplay.s_uid = 0;
RODisplay.S_FLAG_BUSY = 1;
RODisplay.S_FLAG_FREE = 0;
RODisplay.m_unitFlagList = [];
RODisplay.m_unitListLen = 0;
RODisplay.m_unitList = [];
RODisplay.m_freeIdList = [];
exports.default = RODisplay;

/***/ }),

/***/ "dc6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const SurfaceNormalCalc_1 = __importDefault(__webpack_require__("35fa"));

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const ROVertexBuffer_1 = __importDefault(__webpack_require__("e7d2"));

const AABB_1 = __importDefault(__webpack_require__("fecb"));

const MeshVertex_1 = __importDefault(__webpack_require__("5282"));

const MeshBase_1 = __importDefault(__webpack_require__("cb29"));

class Cylinder3DMesh extends MeshBase_1.default {
  constructor(bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    super(bufDataUsage);
    this.m_vs = null;
    this.m_uvs = null;
    this.m_nvs = null;
    this.m_cvs = null;
    this.inverseUV = false;
    this.uScale = 1.0;
    this.vScale = 1.0;
  }

  getVS() {
    return this.m_vs;
  }

  getUVS() {
    return this.m_uvs;
  }

  getNVS() {
    return this.m_nvs;
  }

  getCVS() {
    return this.m_cvs;
  }

  getIVS() {
    return this.m_ivs;
  }

  initialize(radius, height, longitudeNumSegments, latitudeNumSegments, uvType = 1, alignYRatio = -0.5) {
    if (this.vtxTotal < 1) {
      if (radius < 0.01) return;
      if (longitudeNumSegments < 2) longitudeNumSegments = 2;
      latitudeNumSegments = 3; //

      let m_radius = Math.abs(radius);
      let m_height = Math.abs(height); //

      let plongitudeNumSegments = longitudeNumSegments;
      let platitudeNumSegments = latitudeNumSegments; //

      let i = 1;
      let j = 0;
      let trisTot = 0;
      let yRad = 0;
      let px = 0;
      let py = 0;
      let minY = alignYRatio * m_height;
      this.bounds = new AABB_1.default();
      this.bounds.min.setXYZ(-radius, minY, -radius);
      this.bounds.max.setXYZ(radius, minY + m_height, radius);
      this.bounds.updateFast(); //

      let vtx = new MeshVertex_1.default();
      vtx.y = minY; // two independent circles and a cylinder wall

      let vtxVec = [];
      let vtxRows = [];
      vtxRows.push([]);
      let vtxRow = vtxRows[0];
      vtx.u = 0.5;
      vtx.v = 0.5;
      vtx.nx = 0.0;
      vtx.ny = -1.0;
      vtx.nz = 0.0;
      vtxRow.push(vtx.cloneVertex());
      vtxVec.push(vtxRow[0]); //

      for (; i < platitudeNumSegments; ++i) {
        //
        vtx.y = minY + m_height * (i - 1);
        vtxRows.push([]);
        let row = vtxRows[i];

        for (j = 0; j < plongitudeNumSegments; ++j) {
          yRad = Math.PI * 2 * j / plongitudeNumSegments;
          ++trisTot; //Math::sinCos(&px, &py, yRad);

          px = Math.sin(yRad);
          py = Math.cos(yRad); //

          vtx.x = px * m_radius;
          vtx.z = py * m_radius;
          vtx.index = trisTot; // calc uv

          px *= 0.495;
          py *= 0.495;
          vtx.u = 0.5 + px;
          vtx.v = 0.5 + py; //

          if (i < 2) {
            vtx.nx = 0.0;
            vtx.ny = -1.0;
            vtx.nz = 0.0;
          } else {
            vtx.nx = 0.0;
            vtx.ny = 1.0;
            vtx.nz = 0.0;
          } //


          row.push(vtx.cloneVertex());
          vtxVec.push(row[j]);
        }

        row.push(row[0]);
      }

      ++trisTot;
      vtx.index = trisTot;
      vtx.x = 0;
      vtx.y = minY + m_height;
      vtx.z = 0.0;
      vtx.u = 0.5;
      vtx.v = 0.5;
      vtx.nx = 0.0;
      vtx.ny = 1.0;
      vtx.nz = 0.0;
      vtxRows.push([]);
      let lastRow = vtxRows[3];
      lastRow.push(vtx.cloneVertex());
      vtxVec.push(lastRow[0]); // two circles's vertexes calc end;
      // calc cylinder wall vertexes

      let f = 1.0 / m_radius;

      for (i = 0; i < 2; ++i) {
        let preRow = vtxRows[i + 1];
        vtxRows.push([]);
        let row = vtxRows[vtxRows.length - 1];

        for (j = 0; j <= plongitudeNumSegments; ++j) {
          ++trisTot;
          vtx.copyFrom(preRow[j]);
          vtx.index = trisTot;

          if (uvType < 1) {
            if (i < 1) {
              vtx.v = 0.0;
            } else {
              vtx.v = this.vScale; //1.0
            }

            vtx.u = this.uScale * (j / plongitudeNumSegments);
          } else {
            if (i < 1) {
              vtx.u = 0.0;
            } else {
              vtx.u = this.uScale; //1.0;
            }

            vtx.v = this.vScale * (j / plongitudeNumSegments);
          } //


          vtx.ny = 0.0;
          vtx.nx = vtx.x * f;
          vtx.nz = vtx.z * f; //

          row.push(vtx.cloneVertex());
          vtxVec.push(row[j]);
        }
      }

      let pvtx = null;
      let pivs = [];
      i = 1;
      let rowa = null;
      let rowb = null;

      for (; i <= platitudeNumSegments; ++i) {
        rowa = vtxRows[i - 1];
        rowb = vtxRows[i];

        for (j = 1; j <= plongitudeNumSegments; ++j) {
          if (i == 1) {
            pivs.push(rowa[0].index);
            pivs.push(rowb[j].index);
            pivs.push(rowb[j - 1].index); //pivs.push(rowa[0].index); pivs.push(rowb[j-1].index); pivs.push(rowb[j].index);
            //vtxIndexTriVec.push(vox::kernel::mesh::VertexIndexTriangle(rowa[0].index, rowb[j].index, rowb[j - 1].index));
          } else if (i == platitudeNumSegments) {
            pivs.push(rowa[j].index);
            pivs.push(rowb[0].index);
            pivs.push(rowa[j - 1].index); //pivs.push(rowa[j].index); pivs.push(rowa[j - 1].index); pivs.push(rowb[0].index);
            //vtxIndexTriVec.push(vox::kernel::mesh::VertexIndexTriangle(rowa[j].index, rowb[0].index, rowa[j - 1].index));
          }
        }
      } // create cylinder wall triangles


      rowa = vtxRows[vtxRows.length - 2];
      rowb = vtxRows[vtxRows.length - 1];

      for (j = 1; j <= plongitudeNumSegments; ++j) {
        //vtxIndexTriVec.push(vox::kernel::mesh::VertexIndexTriangle(rowa[j].index, rowb[j - 1].index, rowa[j - 1].index));
        //vtxIndexTriVec.push(vox::kernel::mesh::VertexIndexTriangle(rowa[j].index, rowb[j].index, rowb[j - 1].index));
        pivs.push(rowa[j].index);
        pivs.push(rowb[j - 1].index);
        pivs.push(rowa[j - 1].index);
        pivs.push(rowa[j].index);
        pivs.push(rowb[j].index);
        pivs.push(rowb[j - 1].index);
      } //


      this.vtxTotal = vtxVec.length; //

      this.m_vs = new Float32Array(this.vtxTotal * 3);
      i = 0;

      for (j = 0; j < this.vtxTotal; ++j) {
        pvtx = vtxVec[j];
        this.m_vs[i] = pvtx.x;
        this.m_vs[i + 1] = pvtx.y;
        this.m_vs[i + 2] = pvtx.z; //trace(pvtx.x+","+pvtx.y+","+pvtx.z);

        i += 3;
      }

      if (this.m_transMatrix != null) {
        this.m_transMatrix.transformVectorsSelf(this.m_vs, this.m_vs.length);
        this.bounds.addXYZFloat32Arr(this.m_vs);
        this.bounds.updateFast();
      }

      ROVertexBuffer_1.default.Reset();
      ROVertexBuffer_1.default.AddFloat32Data(this.m_vs, 3);
      this.m_ivs = new Uint16Array(pivs);

      if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_UVS_INDEX)) {
        // uv
        this.m_uvs = new Float32Array(this.vtxTotal * 2); //

        i = 0;

        for (j = 0; j < this.vtxTotal; ++j) {
          pvtx = vtxVec[j];
          this.m_uvs[i] = pvtx.u;
          this.m_uvs[i + 1] = pvtx.v;
          i += 2;
        }

        ROVertexBuffer_1.default.AddFloat32Data(this.m_uvs, 2);
      }

      if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_NVS_INDEX)) {
        this.m_nvs = new Float32Array(this.vtxTotal * 3); //

        i = 0;

        for (j = 0; j < this.vtxTotal; ++j) {
          pvtx = vtxVec[j];
          this.m_nvs[i] = pvtx.nx;
          this.m_nvs[i + 1] = pvtx.ny;
          this.m_nvs[i + 2] = pvtx.nz;
          i += 3;
        }

        ROVertexBuffer_1.default.AddFloat32Data(this.m_nvs, 3);
      } //


      if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_TVS_INDEX)) {
        let numTriangles = this.m_ivs.length / 3;
        let tvs = new Float32Array(this.m_vs.length);
        let btvs = new Float32Array(this.m_vs.length);
        SurfaceNormalCalc_1.default.ClacTrisTangent(this.m_vs, this.m_vs.length, this.m_uvs, this.m_nvs, numTriangles, this.m_ivs, tvs, btvs);
        ROVertexBuffer_1.default.AddFloat32Data(tvs, 3);
        ROVertexBuffer_1.default.AddFloat32Data(btvs, 3);
      }

      ROVertexBuffer_1.default.vbWholeDataEnabled = this.vbWholeDataEnabled;
      this.m_vbuf = ROVertexBuffer_1.default.CreateBySaveData(this.getBufDataUsage());
      this.m_vbuf.setUint16IVSData(this.m_ivs);
      this.vtCount = this.m_ivs.length;
      this.trisNumber = this.vtCount / 3;
      this.buildEnd();
    }
  }

  __$destroy() {
    if (this.isResFree()) {
      this.bounds = null;
      this.m_vs = null;
      this.m_uvs = null;
      this.m_nvs = null;
      this.m_cvs = null;

      super.__$destroy();
    }
  }

  toString() {
    return "Cylinder3DMesh()";
  }

}

exports.default = Cylinder3DMesh;

/***/ }),

/***/ "dc7a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const ShaderCodeBuffer_1 = __importDefault(__webpack_require__("faa5"));

const MaterialBase_1 = __importDefault(__webpack_require__("0fc4"));

class ShaderCodeShaderBuffer extends ShaderCodeBuffer_1.default {
  constructor() {
    super();
    this.codeWrapper = null;
  }

  initialize(texEnabled) {
    this.adaptationShaderVersion = false;
    this.codeWrapper.initialize();
  }

  getFragShaderCode() {
    return this.codeWrapper.getFragShaderCode(this.getShaderCodeBuilder());
  }

  getVtxShaderCode() {
    return this.codeWrapper.getVtxShaderCode(this.getShaderCodeBuilder());
  }

  getUniqueShaderName() {
    return this.codeWrapper.getUniqueShaderName();
  }

  toString() {
    return "[ShaderCodeShaderBuffer()]";
  }

  static GetInstance() {
    return ShaderCodeShaderBuffer.s_instance;
  }

}

ShaderCodeShaderBuffer.s_instance = new ShaderCodeShaderBuffer();
/**
 * 作为用户直接使用创建 shader coce 的 material 类
 *
 * 只能由渲染器对外提供, 不允许别的模块分离打包
 */

class ShaderCodeMaterial extends MaterialBase_1.default {
  constructor() {
    super();
    this.m_codeWrapper = null;
    this.m_uniformData = null;
    this.m_sharedUniformsDataList = null;
  }

  setShaderCodeWrapper(codeWrapper) {
    this.m_codeWrapper = codeWrapper;
  }

  getCodeBuf() {
    let buf = ShaderCodeShaderBuffer.GetInstance();
    buf.codeWrapper = this.m_codeWrapper;
    return buf;
  }

  setSelfUniformData(data) {
    this.m_uniformData = data;
  }

  createSharedUniforms() {
    return this.m_codeWrapper.createSharedUniforms();
  }

  setSharedUniformsData(dataList) {
    this.m_sharedUniformsDataList = dataList;
  }

  createSharedUniformsData() {
    return this.m_sharedUniformsDataList;
  }

  createSelfUniformData() {
    return this.m_uniformData;
  }

  destroy() {
    super.destroy();
    this.m_codeWrapper = null;
    this.m_uniformData = null;
    this.m_sharedUniformsDataList = null;
  }

}

exports.default = ShaderCodeMaterial;

/***/ }),

/***/ "e08e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

class RenderDrawMode {}

RenderDrawMode.ELEMENTS_TRIANGLES = 1;
RenderDrawMode.ELEMENTS_TRIANGLE_STRIP = 2;
RenderDrawMode.ELEMENTS_TRIANGLE_FAN = 3;
RenderDrawMode.ELEMENTS_INSTANCED_TRIANGLES = 4;
RenderDrawMode.ARRAYS_LINES = 5;
RenderDrawMode.ARRAYS_LINE_STRIP = 6;
RenderDrawMode.ARRAYS_POINTS = 7;
RenderDrawMode.DISABLE = 0;
exports.RenderDrawMode = RenderDrawMode; // blend mode

class RenderBlendMode {}

RenderBlendMode.NORMAL = 1;
RenderBlendMode.OPAQUE = 1;
RenderBlendMode.TRANSPARENT = 2;
RenderBlendMode.ALPHA_ADD = 3;
RenderBlendMode.ADD = 4;
RenderBlendMode.ADD_LINEAR = 5;
RenderBlendMode.INVERSE_ALPHA = 6;
RenderBlendMode.BLAZE = 7;
RenderBlendMode.OVERLAY = 8;
RenderBlendMode.OVERLAY2 = 8;
RenderBlendMode.DISABLE = 0;
exports.RenderBlendMode = RenderBlendMode;
/**
 * gl.NEVER:           Never pass.
 * gl.LESS:            Pass if (ref & mask) <  (stencil & mask).
 * gl.EQUAL:           Pass if (ref & mask) =  (stencil & mask).
 * gl.LEQUAL:          Pass if (ref & mask) <= (stencil & mask).
 * gl.GREATER:         Pass if (ref & mask) >  (stencil & mask).
 * gl.NOTEQUAL:        Pass if (ref & mask) != (stencil & mask).
 * gl.GEQUAL:          Pass if (ref & mask) >= (stencil & mask).
 * gl.ALWAYS:          Always pass.
 */

class GLStencilFunc {}

GLStencilFunc.NEVER = 1;
GLStencilFunc.LESS = 1;
GLStencilFunc.EQUAL = 1;
GLStencilFunc.GREATER = 1;
GLStencilFunc.NOTEQUAL = 1;
GLStencilFunc.GEQUAL = 1;
GLStencilFunc.ALWAYS = 1;
exports.GLStencilFunc = GLStencilFunc;
/**
 * gl.KEEP              Keeps the current value.
 * gl.ZERO              Sets the stencil buffer value to 0.
 * gl.REPLACE           Sets the stencil buffer value to the reference value as specified by WebGLRenderingContext.stencilFunc().
 * gl.INCR              Increments the current stencil buffer value. Clamps to the maximum representable unsigned value.
 * gl.INCR_WRAP         Increments the current stencil buffer value. Wraps stencil buffer value to zero when incrementing the maximum representable unsigned value.
 * gl.DECR              Decrements the current stencil buffer value. Clamps to 0.
 * gl.DECR_WRAP         Decrements the current stencil buffer value. Wraps stencil buffer value to the maximum representable unsigned value when decrementing a stencil buffer value of 0.
 * gl.INVERT            Inverts the current stencil buffer value bitwise.
 */

class GLStencilOp {}

GLStencilOp.KEEP = 1;
GLStencilOp.ZERO = 1;
GLStencilOp.REPLACE = 1;
GLStencilOp.INCR = 1;
GLStencilOp.INCR_WRAP = 1;
GLStencilOp.DECR = 1;
GLStencilOp.DECR_WRAP = 1;
GLStencilOp.INVERT = 1;
exports.GLStencilOp = GLStencilOp;

class GLBlendMode {}

GLBlendMode.ZERO = 1;
GLBlendMode.ONE = 1;
GLBlendMode.SRC_COLOR = 1;
GLBlendMode.DST_COLOR = 1;
GLBlendMode.SRC_ALPHA = 1;
GLBlendMode.DST_ALPHA = 1;
GLBlendMode.ONE_MINUS_SRC_ALPHA = 1;
exports.GLBlendMode = GLBlendMode;

class GLBlendEquation {}

GLBlendEquation.FUNC_ADD = 1;
GLBlendEquation.FUNC_SUBTRACT = 1;
GLBlendEquation.FUNC_REVERSE_SUBTRACT = 1;
GLBlendEquation.MIN_EXT = 1;
GLBlendEquation.MAX_EXT = 1;
GLBlendEquation.MIN = 1;
GLBlendEquation.MAX = 1;
exports.GLBlendEquation = GLBlendEquation;

class CullFaceMode {}

CullFaceMode.BACK = 1;
CullFaceMode.FRONT = 2;
CullFaceMode.FRONT_AND_BACK = 3;
CullFaceMode.NONE = 0;
CullFaceMode.DISABLE = 0;
exports.CullFaceMode = CullFaceMode;

class DepthTestMode {}

DepthTestMode.NEVER = 1; //glDepthMask(false); glDepthFunc(GL_ALWAYS);

DepthTestMode.ALWAYS = 2; //glDepthMask(true); glDepthFunc(GL_LEQUAL);

DepthTestMode.SKY = 3;
DepthTestMode.TRUE_LESS_EQUAL = 3; //glDepthMask(true); glDepthFunc(GL_LESS);

DepthTestMode.OPAQUE = 4;
DepthTestMode.TRUE_LESS = 4; //glDepthMask(false); glDepthFunc(GL_EQUAL);

DepthTestMode.OPAQUE_OVERHEAD = 5;
DepthTestMode.FALSE_EQUAL = 5; //glDepthMask(false); glDepthFunc(GL_LESS);

DepthTestMode.FALSE_LESS = 6;
DepthTestMode.BLEND = 6;
DepthTestMode.BLEND_SORT = 6;
DepthTestMode.TRANSPARENT_SORT = 6; //glDepthMask(TRUE); glDepthFunc(GL_LEQUAL);

DepthTestMode.TRUE_LEQUAL = 7;
DepthTestMode.WIRE_FRAME = 7; //
//glDepthMask(false); glDepthFunc(GL_LEQUAL);

DepthTestMode.FALSE_LEQUAL = 8;
DepthTestMode.DECALS = 8; //glDepthMask(false); glDepthFunc(GL_ALWAYS);

DepthTestMode.NEXT_LAYER = 11;
DepthTestMode.WIRE_FRAME_NEXT = 12; //glDepthMask(true); glDepthFunc(GL_EQUAL);

DepthTestMode.TRUE_EQUAL = 13; //glDepthMask(true); glDepthFunc(GL_GREATER);

DepthTestMode.TRUE_GREATER = 14; //glDepthMask(true); glDepthFunc(GL_GEQUAL);

DepthTestMode.TRUE_GEQUAL = 15;
DepthTestMode.DISABLE = 0;
exports.DepthTestMode = DepthTestMode;

class RenderConst {} // 32bit psign: 8bit->pageIndex,8bit->block uid,16bit->RenderDispRenderID


RenderConst.SCENE_RO_FILTER_BEGIN = 1 << 19;
RenderConst.SCENE_RO_FILTER_FINISH = 2 << 19;
RenderConst.SCENE_RO_ERASE = 0;
exports.RenderConst = RenderConst;
var DisplayRenderSign;

(function (DisplayRenderSign) {
  // 还没有加入 world
  DisplayRenderSign[DisplayRenderSign["NOT_IN_WORLD"] = -1] = "NOT_IN_WORLD"; // 正在进入 world

  DisplayRenderSign[DisplayRenderSign["GO_TO_WORLD"] = 1] = "GO_TO_WORLD"; // 真正存在于 world, 也就是直接可以在 process 中使用了

  DisplayRenderSign[DisplayRenderSign["LIVE_IN_WORLD"] = 2] = "LIVE_IN_WORLD";
})(DisplayRenderSign = exports.DisplayRenderSign || (exports.DisplayRenderSign = {})); //export {RenderBlendMode, DisplayRenderSign};

/***/ }),

/***/ "e2fe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2020 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class AABB2D {
  constructor(px = 0.0, py = 0.0, pwidth = 100.0, pheight = 100.0) {
    this.m_right = 100;
    this.m_top = 100;
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 100;
    this.x = px;
    this.y = py;
    this.width = pwidth;
    this.height = pheight;
    this.update();
  }

  copyFrom(dst) {
    this.x = dst.x;
    this.y = dst.y;
    this.m_right = dst.m_right;
    this.m_top = dst.m_top;
    this.width = dst.width;
    this.height = dst.height;
  }

  clone() {
    return new AABB2D(this.x, this.y, this.width, this.height);
  }
  /**
   * 当前矩形是否包含某一点(同一坐标空间的点)
   * @param x坐标
   * @param y坐标
   * @returns 返回当前矩形是否包含这个坐标位置
   */


  containsXY(vx, vy) {
    if (vx < this.x || vx > this.m_right) return false;
    if (vy < this.y || vy > this.m_top) return false;
    return true;
  }
  /**
   * 当前矩形是否包含目标矩形
   * @param dst 目标矩形
   * @returns 返回当前矩形是否包含目标矩形
   */


  contains(dst) {
    if (dst.x >= this.x && dst.m_right <= this.m_right) {
      if (dst.y >= this.y && dst.m_top <= this.m_top) {
        return true;
      }
    }

    return true;
  }
  /**
   * 当前矩形是否和目标矩形相交
   * @param dst 目标矩形
   * @returns 返回当前矩形是否和目标矩形相交
   */


  intersect(dst) {
    if (dst.x > this.m_right) return false;
    if (dst.m_right < this.x) return false;
    if (dst.y > this.m_top) return false;
    if (dst.m_top < this.y) return false;
    return true;
  }

  update() {
    this.m_right = this.width + this.x;
    this.m_top = this.height + this.y;
  }

  flipY(height) {
    this.y = height = this.y;
    this.m_right = this.width + this.x;
    this.m_top = this.height + this.y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getRight() {
    return this.m_right;
  }

  getTop() {
    return this.m_top;
  }

}

exports.default = AABB2D;

/***/ }),

/***/ "e7d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const ROVtxBufUidStore_1 = __importDefault(__webpack_require__("710f"));

const VtxCombinedBuf_1 = __importDefault(__webpack_require__("f0f0"));

const VtxSeparatedBuf_1 = __importDefault(__webpack_require__("7a04"));

const RenderConst_1 = __webpack_require__("e08e");

class ROVertexBuffer {
  constructor(bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    this.m_uid = 0;
    this.m_vtxBuf = null;
    this.m_ivs = null;
    this.m_bufDataUsage = 0;
    this.m_ibufStep = 2; // 2 or 4

    this.layoutBit = 0x0;
    this.vertexVer = 0;
    this.indicesVer = 0;
    this.version = 0;
    this.drawMode = RenderConst_1.RenderDrawMode.ELEMENTS_TRIANGLES;
    this.bufData = null;
    this.m_uid = ROVertexBuffer.s_uid++;
    this.m_bufDataUsage = bufDataUsage;
  }

  setVtxBuf(vtxBuf) {
    if (vtxBuf != this) {
      this.m_vtxBuf = vtxBuf;

      if (vtxBuf != null) {
        vtxBuf.layoutBit = this.layoutBit;
      }
    }
  }

  getUid() {
    return this.m_uid;
  }

  getType() {
    return this.m_vtxBuf.getType();
  }

  getIBufStep() {
    return this.m_ibufStep;
  }

  getBufDataUsage() {
    return this.m_bufDataUsage;
  }

  setBufDataUsage(bufDataUsage) {
    this.m_bufDataUsage = bufDataUsage;
  }

  getBuffersTotal() {
    return this.m_vtxBuf.getBuffersTotal();
  }

  getF32DataAt(index) {
    return this.m_vtxBuf.getF32DataAt(index);
  }

  getIvsData() {
    return this.m_ivs;
  }

  setF32DataAt(index, float32Arr, stepFloatsTotal, setpOffsets) {
    this.m_vtxBuf.setF32DataAt(index, float32Arr, stepFloatsTotal, setpOffsets);
    this.vertexVer++;
  }

  setUintIVSData(uint16Or32Arr, status = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    if (uint16Or32Arr instanceof Uint16Array) {
      this.m_ibufStep = 2;
    } else if (uint16Or32Arr instanceof Uint32Array) {
      this.m_ibufStep = 4;
    } else {
      console.error("Error: uint16Or32Arr is not an Uint32Array or an Uint16Array bufferArray instance !!!!");
      return;
    }

    this.m_ivs = uint16Or32Arr;

    if (uint16Or32Arr != null) {
      this.indicesVer++;
    }
  }

  setUint16IVSData(uint16Arr, status = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    if (uint16Arr instanceof Uint16Array) {
      this.m_ivs = uint16Arr;
      this.indicesVer++;
      this.m_ibufStep = 2;
    } else {
      console.error("Error: uint16Arr is not an Uint16Array bufferArray instance !!!!");
    }
  }

  setUint32IVSData(uint32Arr, status = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    if (uint32Arr instanceof Uint32Array) {
      this.m_ivs = uint32Arr;
      this.indicesVer++;
      this.m_ibufStep = 4;
    } else {
      console.error("Error: uint32Arr is not an Uint32Array bufferArray instance !!!!");
    }
  }

  setData4fAt(vertexI, attribI, px, py, pz, pw) {
    if (this.m_vtxBuf != null) {
      this.m_vtxBuf.setData4fAt(vertexI, attribI, px, py, pz, pw);
      this.vertexVer++;
    }
  }

  setData3fAt(vertexI, attribI, px, py, pz) {
    if (this.m_vtxBuf != null) {
      this.m_vtxBuf.setData3fAt(vertexI, attribI, px, py, pz);
      this.vertexVer++;
    }
  }

  setData2fAt(vertexI, attribI, px, py) {
    if (this.m_vtxBuf != null) {
      this.m_vtxBuf.setData2fAt(vertexI, attribI, px, py);
      this.vertexVer++;
    }
  }
  /**
   * this function is only an empty function.
   */


  destroy() {}

  __$destroy() {
    console.log("ROVertexBuffer::__$destroy()... " + this);
    this.m_vtxBuf.destroy();

    if (this.m_vtxBuf.getType() < 1) {
      ROVertexBuffer.s_combinedBufs.push(this.m_vtxBuf);
    } else {
      ROVertexBuffer.s_separatedBufs.push(this.m_vtxBuf);
    }

    this.m_vtxBuf = null;
    this.m_ivs = null;
    this.bufData = null;
  }

  toString() {
    return "ROVertexBuffer(uid = " + this.m_uid + ")";
  }

  static GetFreeId() {
    if (ROVertexBuffer.s_freeIdList.length > 0) {
      return ROVertexBuffer.s_freeIdList.pop();
    }

    return -1;
  }

  static GetVtxByUid(uid) {
    return ROVertexBuffer.s_unitList[uid];
  }

  static Create(bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    let unit = null;
    let index = ROVertexBuffer.GetFreeId();

    if (index >= 0) {
      unit = ROVertexBuffer.s_unitList[index];
      unit.setBufDataUsage(bufDataUsage);
      ROVertexBuffer.s_unitFlagList[index] = ROVertexBuffer.S_FLAG_BUSY;
    } else {
      unit = new ROVertexBuffer(bufDataUsage);
      ROVertexBuffer.s_unitList.push(unit);
      ROVertexBuffer.s_unitFlagList.push(ROVertexBuffer.S_FLAG_BUSY);
      ROVertexBuffer.s_unitListLen++;
    }

    unit.vertexVer = 0;
    unit.indicesVer = 0;
    unit.version++; //console.log("ROVertexBuffer::Create(), ROVertexBuffer.s_unitList.length: "+ROVertexBuffer.s_unitList.length+", new buf: "+unit);

    ROVertexBuffer.s_vtxStore.__$attachAt(unit.getUid());

    return unit;
  }

  static __$Restore(pobj) {
    if (pobj != null && ROVertexBuffer.s_unitFlagList[pobj.getUid()] == ROVertexBuffer.S_FLAG_BUSY) {
      //console.log("ROVertexBuffer::__$Restore, pobj: "+pobj);
      let uid = pobj.getUid();
      ROVertexBuffer.s_freeIdList.push(uid);
      ROVertexBuffer.s_unitFlagList[uid] = ROVertexBuffer.S_FLAG_FREE;

      pobj.__$destroy();
    }
  }

  static __$$AttachAt(uid) {
    ROVertexBuffer.s_vtxStore.__$attachAt(uid);
  }

  static __$$DetachAt(uid) {
    ROVertexBuffer.s_vtxStore.__$detachAt(uid);
  }

  static Reset() {
    ROVertexBuffer.BufDataList = [];
    ROVertexBuffer.s_stride = 0;
    ROVertexBuffer.BufStatusList = [];
    ROVertexBuffer.BufDataStepList = [];
    ROVertexBuffer.vtxFS32 = null;
    ROVertexBuffer.vbWholeDataEnabled = false;
    ROVertexBuffer.dynBufSegEnabled = false;
    ROVertexBuffer.useBufByIndexEnabled = false;
  }

  static AddFloat32Data(float32Arr, step, status = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    ROVertexBuffer.BufDataList.push(float32Arr);
    ROVertexBuffer.BufDataStepList.push(step);
    ROVertexBuffer.BufStatusList.push(status);
    ROVertexBuffer.s_stride += step;
  }

  static CreateBySaveData(bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW, layoutBit = 0x0) {
    let i = 0;
    let k = 0;
    let stride = 0;
    let bufTot = ROVertexBuffer.BufDataStepList.length;
    let offsetList = [];

    for (; i < bufTot; i++) {
      offsetList.push(stride);
      stride += ROVertexBuffer.BufDataStepList[i];
    }

    let tot = ROVertexBuffer.BufDataList[0].length / ROVertexBuffer.BufDataStepList[0];
    let vtxfs32 = new Float32Array(stride * tot);
    let j = 0;
    let segLen = 0;
    let parrf32 = null;
    let subArr = null;

    for (i = 0; i < tot; ++i) {
      k = i * stride;

      for (j = 0; j < bufTot; ++j) {
        segLen = ROVertexBuffer.BufDataStepList[j];
        parrf32 = ROVertexBuffer.BufDataList[j];
        subArr = parrf32.subarray(i * segLen, (i + 1) * segLen);
        vtxfs32.set(subArr, k);
        k += segLen;
      }
    }

    let vb = ROVertexBuffer.Create(bufDataUsage);
    vb.layoutBit = layoutBit;

    if (ROVertexBuffer.s_combinedBufs.length > 0) {
      let vtx = ROVertexBuffer.s_combinedBufs.pop();
      vb.setVtxBuf(vtx);
    } else {
      vb.setVtxBuf(new VtxCombinedBuf_1.default(vb.getBufDataUsage()));
    }

    vb.setF32DataAt(0, vtxfs32, stride, offsetList);
    return vb;
  }

  static UpdateBufData(vb) {
    let i = 0;
    let k = 0;
    let stride = 0;
    let bufTot = ROVertexBuffer.BufDataStepList.length;
    let tot = ROVertexBuffer.BufDataList[0].length / ROVertexBuffer.BufDataStepList[0];
    let vtxfs32 = vb.getF32DataAt(0);
    let newBoo = ROVertexBuffer.s_stride * tot != vtxfs32.length;
    let offsetList = null;

    if (newBoo) {
      offsetList = [];
      vtxfs32 = new Float32Array(ROVertexBuffer.s_stride * tot);

      for (; i < bufTot; i++) {
        offsetList.push(stride);
        stride += ROVertexBuffer.BufDataStepList[i];
      }
    } else {
      stride = ROVertexBuffer.s_stride;
    }

    let j = 0;
    let segLen = 0;
    let parrf32 = null;
    let subArr = null;

    for (i = 0; i < tot; ++i) {
      k = i * stride;

      for (j = 0; j < bufTot; ++j) {
        segLen = ROVertexBuffer.BufDataStepList[j];
        parrf32 = ROVertexBuffer.BufDataList[j];
        subArr = parrf32.subarray(i * segLen, (i + 1) * segLen);
        vtxfs32.set(subArr, k);
        k += segLen;
      }
    }

    if (newBoo) {
      vb.setF32DataAt(0, vtxfs32, stride, offsetList);
    } else {
      vb.setF32DataAt(0, vtxfs32, stride, null);
    }
  }

  static CreateByBufDataSeparate(bufData, bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW, layoutBit = 0x0) {
    let i = 0;
    let stride = 0;
    let bufTot = bufData.getAttributesTotal();
    let offsetList = new Array(bufTot);
    offsetList.fill(0);
    let vb = ROVertexBuffer.Create(bufDataUsage);
    vb.layoutBit = layoutBit;

    if (ROVertexBuffer.s_separatedBufs.length > 0) {
      let vtx = ROVertexBuffer.s_separatedBufs.pop();
      vb.setVtxBuf(vtx);
    } else {
      vb.setVtxBuf(new VtxSeparatedBuf_1.default());
    }

    for (i = 0; i < bufTot; i++) {
      vb.setF32DataAt(i, bufData.getAttributeDataAt(i, 0), stride, offsetList);
    }

    vb.setUintIVSData(bufData.getIndexDataAt(0));
    vb.bufData = bufData;
    return vb;
  }

  static CreateBySaveDataSeparate(bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    let i = 0;
    let stride = 0;
    let bufTot = ROVertexBuffer.BufDataStepList.length;
    let offsetList = new Array(bufTot);
    offsetList.fill(0);
    let vb = ROVertexBuffer.Create(bufDataUsage);

    if (ROVertexBuffer.s_separatedBufs.length > 0) {
      let vtx = ROVertexBuffer.s_separatedBufs.pop();
      vb.setVtxBuf(vtx);
    } else {
      vb.setVtxBuf(new VtxSeparatedBuf_1.default());
    }

    for (i = 0; i < bufTot; i++) {
      vb.setF32DataAt(i, ROVertexBuffer.BufDataList[i], stride, offsetList);
    }

    return vb;
  }

  static GetVtxAttachCountAt(vtxUid) {
    return ROVertexBuffer.s_vtxStore.getAttachCountAt(vtxUid);
  }

  static GetVtxAttachAllCount() {
    return ROVertexBuffer.s_vtxStore.getAttachAllCount();
  }
  /**
   * 放在帧循环中自动定时清理资源 system memory vertex data
   */


  static ClearTest() {
    --ROVertexBuffer.s_timeDelay;

    if (ROVertexBuffer.s_timeDelay < 1) {
      ROVertexBuffer.s_timeDelay = 128; // 管理作为数据

      let store = ROVertexBuffer.s_vtxStore;

      if (store.__$getRemovedListLen() > 0) {
        let list = store.__$getRemovedList();

        let len = list.length;
        let i = 0;
        let vtxUid = 0;
        let vb = null;
        let maxSteps = 32;
        len = len > maxSteps ? maxSteps : len;

        for (; i < len; ++i) {
          vtxUid = list.shift();

          if (store.getAttachCountAt(vtxUid) < 1) {
            console.log("ROVertexBuffer remove a instance, vtxUid: " + vtxUid);
            vb = ROVertexBuffer.GetVtxByUid(vtxUid);

            ROVertexBuffer.__$Restore(vb);
          }
        }
      }
    }
  }

}

ROVertexBuffer.s_uid = 0;
ROVertexBuffer.s_combinedBufs = [];
ROVertexBuffer.s_separatedBufs = [];
ROVertexBuffer.S_FLAG_BUSY = 1;
ROVertexBuffer.S_FLAG_FREE = 0;
ROVertexBuffer.s_unitFlagList = [];
ROVertexBuffer.s_unitListLen = 0;
ROVertexBuffer.s_unitList = [];
ROVertexBuffer.s_freeIdList = [];
ROVertexBuffer.s_vtxStore = new ROVtxBufUidStore_1.default();
ROVertexBuffer.s_stride = 0;
ROVertexBuffer.BufDataList = null;
ROVertexBuffer.BufDataStepList = null;
ROVertexBuffer.BufStatusList = null;
ROVertexBuffer.vtxDataFS32 = null;
ROVertexBuffer.vbWholeDataEnabled = false;
ROVertexBuffer.dynBufSegEnabled = false;
ROVertexBuffer.useBufByIndexEnabled = false;
ROVertexBuffer.vtxFS32 = null;
ROVertexBuffer.s_timeDelay = 128;
exports.default = ROVertexBuffer;

/***/ }),

/***/ "f044":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

class VtxBufID {
  static CreateNewID() {
    return VtxBufID.__s_uid++;
  }

}

VtxBufID.__s_uid = 0;
exports.default = VtxBufID;

/***/ }),

/***/ "f0f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const VtxBufID_1 = __importDefault(__webpack_require__("f044"));

class VtxCombinedBuf {
  constructor(bufDataUsage) {
    this.m_uid = -1;
    this.m_total = 0;
    this.layoutBit = 0x0;
    this.m_offsetList = null;
    this.m_f32 = null;
    this.m_f32Stride = 0;
    this.m_uid = VtxBufID_1.default.CreateNewID();
  }

  getUid() {
    return this.m_uid;
  }

  getType() {
    return 0;
  }

  getBuffersTotal() {
    return 1;
  }

  getF32DataAt(index) {
    return this.m_f32;
  }

  setF32DataAt(index, float32Arr, stepFloatsTotal, setpOffsets) {
    if (setpOffsets != null) this.m_offsetList = setpOffsets;
    this.m_f32Stride = stepFloatsTotal; //console.log("VtxCombinedBuf::setF32DataAt(),"+this+" m_f32.length: "+float32Arr.length+", this.m_f32PreSize: "+this.m_f32PreSize);

    this.m_f32 = float32Arr;
  }

  setData4fAt(vertexI, attribI, px, py, pz, pw) {
    vertexI = this.m_f32Stride * vertexI + this.m_offsetList[attribI];
    this.m_f32[vertexI++] = px;
    this.m_f32[vertexI++] = py;
    this.m_f32[vertexI++] = pz;
    this.m_f32[vertexI++] = pw;
  }

  setData3fAt(vertexI, attribI, px, py, pz) {
    vertexI = this.m_f32Stride * vertexI + this.m_offsetList[attribI]; //console.log("VtxCombinedBuf::setData3fAt(), vertexI: "+vertexI+",this.m_f32Stride: "+this.m_f32Stride);

    this.m_f32[vertexI++] = px;
    this.m_f32[vertexI++] = py;
    this.m_f32[vertexI++] = pz;
  }

  setData2fAt(vertexI, attribI, px, py) {
    vertexI = this.m_f32Stride * vertexI + this.m_offsetList[attribI]; //console.log("VtxCombinedBuf::setData2fAt(), vertexI: "+vertexI+",this.m_f32Stride: "+this.m_f32Stride);

    this.m_f32[vertexI++] = px;
    this.m_f32[vertexI++] = py;
  }

  destroy() {
    console.log("VtxCombinedBuf::__$destroy()... ", this);
    this.m_offsetList = null;
    this.m_f32 = null;
  }

  toString() {
    return "VtxCombinedBuf(uid = " + this.m_uid + ")";
  }

}

exports.default = VtxCombinedBuf;

/***/ }),

/***/ "f152":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const RadialLine_1 = __importDefault(__webpack_require__("38de"));

const AABB_1 = __importDefault(__webpack_require__("fecb"));

const SurfaceNormalCalc_1 = __importDefault(__webpack_require__("35fa"));

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const ROVertexBuffer_1 = __importDefault(__webpack_require__("e7d2"));

const MeshVertex_1 = __importDefault(__webpack_require__("5282"));

const MeshBase_1 = __importDefault(__webpack_require__("cb29"));

class Sphere3DMesh extends MeshBase_1.default {
  constructor(bufDataUsage = VtxBufConst_1.default.VTX_STATIC_DRAW) {
    super(bufDataUsage);
    this.m_longitudeNumSegments = 10;
    this.m_latitudeNumSegments = 10;
    this.m_radius = 50;
    this.m_vs = null;
    this.m_uvs = null;
    this.m_nvs = null;
    this.m_cvs = null;
    this.inverseUV = false;
  }

  getVS() {
    return this.m_vs;
  }

  getUVS() {
    return this.m_uvs;
  }

  getNVS() {
    return this.m_nvs;
  }

  getCVS() {
    return this.m_cvs;
  }

  getIVS() {
    return this.m_ivs;
  } //


  initialize(radius, longitudeNumSegments, latitudeNumSegments, doubleTriFaceEnabled) {
    if (this.vtxTotal < 1) {
      if (radius < 0.01) return;
      this.bounds = new AABB_1.default();
      this.bounds.min.setXYZ(-radius, -radius, -radius);
      this.bounds.max.setXYZ(radius, radius, radius);
      this.bounds.updateFast();
      if (longitudeNumSegments < 2) longitudeNumSegments = 2;
      if (latitudeNumSegments < 2) latitudeNumSegments = 2;
      this.m_radius = Math.abs(radius);
      this.m_longitudeNumSegments = longitudeNumSegments;
      this.m_latitudeNumSegments = latitudeNumSegments;

      if ((this.m_latitudeNumSegments + 1) % 2 == 0) {
        this.m_latitudeNumSegments += 1;
      }

      if (this.m_longitudeNumSegments = this.m_latitudeNumSegments) {
        this.m_longitudeNumSegments += 1;
      }

      let i = 1,
          j = 0,
          trisTot = 0;
      let yRad = 0.0,
          px = 0.0,
          py = 0.0;
      let vtx = new MeshVertex_1.default(0, -this.m_radius, 0, trisTot); // 计算绕 y轴 的纬度线上的点

      let vtxVec = [];
      let vtxRows = [];
      vtxRows.push([]);
      let vtxRow = vtxRows[0];
      vtx.u = 0.5;
      vtx.v = 0.5;
      vtx.nx = 0.0;
      vtx.ny = -1.0;
      vtx.nz = 0.0;
      vtxRow.push(vtx.cloneVertex());
      vtxVec.push(vtxRow[0]); //

      let pr = 0.0;
      let pr2 = this.m_radius * 2.01;
      let py2 = 0.0;
      let f = 1.0 / this.m_radius; //float pz;

      for (; i < this.m_latitudeNumSegments; ++i) {
        yRad = Math.PI * i / this.m_latitudeNumSegments;
        px = Math.sin(yRad);
        py = Math.cos(yRad);
        vtx.y = -this.m_radius * py;
        pr = this.m_radius * px; //

        py2 = vtx.y;
        if (py2 < 0) py2 = -py2; // uv inverse yes or no

        if (!this.inverseUV) py2 = this.m_radius - py2;
        py2 /= pr2; //

        vtxRows.push([]);
        let row = vtxRows[i];

        for (j = 0; j < this.m_longitudeNumSegments; ++j) {
          yRad = Math.PI * 2 * j / this.m_longitudeNumSegments;
          ++trisTot;
          px = Math.sin(yRad);
          py = Math.cos(yRad);
          vtx.x = px * pr;
          vtx.z = py * pr;
          vtx.index = trisTot; // calc uv

          px *= py2;
          py *= py2;
          vtx.u = 0.5 + px;
          vtx.v = 0.5 + py; //

          vtx.nx = vtx.x * f;
          vtx.ny = vtx.y * f;
          vtx.nz = vtx.z * f; //

          row.push(vtx.cloneVertex());
          vtxVec.push(row[j]);
        }

        row.push(row[0]);
      }

      ++trisTot;
      vtx.index = trisTot;
      vtx.x = 0;
      vtx.y = this.m_radius;
      vtx.z = 0;
      vtx.u = 0.5;
      vtx.v = 0.5;
      vtx.nx = 0.0;
      vtx.ny = 1.0;
      vtx.nz = 0.0;
      vtxRows.push([]);
      let lastRow = vtxRows[this.m_latitudeNumSegments];
      lastRow.push(vtx.cloneVertex());
      vtxVec.push(lastRow[0]);
      let pvtx = null; ///////////////////////////   ///////////////////////////    ////////////////

      let pivs = [];
      let rowa = null;
      let rowb = null;
      i = 1;

      for (; i <= this.m_latitudeNumSegments; ++i) {
        rowa = vtxRows[i - 1];
        rowb = vtxRows[i];

        for (j = 1; j <= this.m_longitudeNumSegments; ++j) {
          if (i == 1) {
            pivs.push(rowa[0].index);
            pivs.push(rowb[j].index);
            pivs.push(rowb[j - 1].index);
          } else if (i == this.m_latitudeNumSegments) {
            pivs.push(rowa[j].index);
            pivs.push(rowb[0].index);
            pivs.push(rowa[j - 1].index);
          } else {
            pivs.push(rowa[j].index);
            pivs.push(rowb[j - 1].index);
            pivs.push(rowa[j - 1].index);
            pivs.push(rowa[j].index);
            pivs.push(rowb[j].index);
            pivs.push(rowb[j - 1].index);
          }
        }
      }

      this.vtxTotal = vtxVec.length;

      if (doubleTriFaceEnabled) {
        this.m_ivs = new Uint16Array(pivs.length * 2);
        this.m_ivs.set(pivs, 0);
        pivs.reverse();
        this.m_ivs.set(pivs, pivs.length);
      } else {
        this.m_ivs = new Uint16Array(pivs);
      }

      this.m_vs = new Float32Array(this.vtxTotal * 3);
      i = 0;

      for (j = 0; j < this.vtxTotal; ++j) {
        pvtx = vtxVec[j];
        this.m_vs[i] = pvtx.x;
        this.m_vs[i + 1] = pvtx.y;
        this.m_vs[i + 2] = pvtx.z;
        i += 3;
      }

      ROVertexBuffer_1.default.Reset();
      ROVertexBuffer_1.default.AddFloat32Data(this.m_vs, 3); //

      if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_UVS_INDEX)) {
        // uv
        this.m_uvs = new Float32Array(this.vtxTotal * 2); //

        i = 0;

        for (j = 0; j < this.vtxTotal; ++j) {
          pvtx = vtxVec[j]; //trace(tri.index0, ",", tri.index1, ",", tri.index2);

          this.m_uvs[i] = pvtx.u;
          this.m_uvs[i + 1] = pvtx.v;
          i += 2;
        }

        ROVertexBuffer_1.default.AddFloat32Data(this.m_uvs, 2);
      }

      if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_NVS_INDEX)) {
        this.m_nvs = new Float32Array(this.vtxTotal * 3); //

        i = 0;

        for (j = 0; j < this.vtxTotal; ++j) {
          pvtx = vtxVec[j];
          this.m_nvs[i] = pvtx.nx;
          this.m_nvs[i + 1] = pvtx.ny;
          this.m_nvs[i + 2] = pvtx.nz;
          i += 3;
        }

        ROVertexBuffer_1.default.AddFloat32Data(this.m_nvs, 3);
      }

      if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_CVS_INDEX)) {
        this.m_cvs = new Float32Array(this.vtxTotal * 3); //

        i = 0;

        for (j = 0; j < this.vtxTotal; ++j) {
          this.m_cvs[i] = 1.0;
          this.m_cvs[i + 1] = 1.0;
          this.m_cvs[i + 2] = 1.0;
          i += 3;
        }

        ROVertexBuffer_1.default.AddFloat32Data(this.m_cvs, 3);
      }

      if (this.isVBufEnabledAt(VtxBufConst_1.default.VBUF_TVS_INDEX)) {
        let numTriangles = this.m_ivs.length / 3;
        let tvs = new Float32Array(this.m_vs.length);
        let btvs = new Float32Array(this.m_vs.length);
        SurfaceNormalCalc_1.default.ClacTrisTangent(this.m_vs, this.m_vs.length, this.m_uvs, this.m_nvs, numTriangles, this.m_ivs, tvs, btvs);
        ROVertexBuffer_1.default.AddFloat32Data(tvs, 3);
        ROVertexBuffer_1.default.AddFloat32Data(btvs, 3);
      }

      ROVertexBuffer_1.default.vbWholeDataEnabled = this.vbWholeDataEnabled;
      this.m_vbuf = ROVertexBuffer_1.default.CreateBySaveData(this.getBufDataUsage());
      this.m_vbuf.setUint16IVSData(this.m_ivs);
      this.vtCount = this.m_ivs.length;
      this.trisNumber = this.vtCount / 3;
    }
  }

  __$destroy() {
    if (this.isResFree()) {
      this.bounds = null;
      this.m_vs = null;
      this.m_uvs = null;
      this.m_nvs = null;
      this.m_cvs = null;

      super.__$destroy();
    }
  } // @boundsHit       表示是否包围盒体已经和射线相交了
  // @rlpv            表示物体坐标空间的射线起点
  // @rltv            表示物体坐标空间的射线朝向
  // @outV            如果检测相交存放物体坐标空间的交点
  // @return          返回值 -1 表示不会进行检测,1表示相交,0表示不相交
  //


  testRay(rlpv, rltv, outV, boundsHit) {
    return RadialLine_1.default.IntersectioNearSphere2(rlpv, rltv, Vector3D_1.default.ZERO, this.m_radius, outV);
  }

  toString() {
    return "Sphere3DMesh()";
  }

}

exports.default = Sphere3DMesh;

/***/ }),

/***/ "f208":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class ShaderCompileInfo {
  constructor() {
    this.info = "";
  }

}

exports.default = ShaderCompileInfo;

/***/ }),

/***/ "f240":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const DisplayEntity_1 = __importDefault(__webpack_require__("402a"));

const Default3DMaterial_1 = __importDefault(__webpack_require__("f63e"));

const Cylinder3DMesh_1 = __importDefault(__webpack_require__("dc6d"));

class Cylinder3DEntity extends DisplayEntity_1.default {
  constructor(transform = null) {
    super(transform);
    this.m_plongitudeNumSegments = 10.0;
    this.m_uvType = 1;
    this.m_alignYRatio = -0.5;
    this.m_transMatrix = null;
    this.uScale = 1.0;
    this.vScale = 1.0;
    this.m_radius = 50.0;
    this.m_height = 100.0;
  }

  setVtxTransformMatrix(matrix) {
    this.m_transMatrix = matrix;
  }

  createMaterial(texList) {
    if (this.getMaterial() == null) {
      let cm = new Default3DMaterial_1.default();
      cm.setTextureList(texList);
      this.setMaterial(cm);
    } else {
      this.getMaterial().setTextureList(texList);
    }
  }

  initialize(radius, height, longitudeNumSegments, texList = null, uvType = 1, alignYRatio = -0.5) {
    this.m_radius = radius;
    this.m_height = height;
    this.m_plongitudeNumSegments = longitudeNumSegments;
    this.m_uvType = uvType;
    this.m_alignYRatio = alignYRatio;
    this.createMaterial(texList);
    this.activeDisplay();
  }

  __activeMesh(material) {
    if (this.getMesh() == null) {
      let mesh = new Cylinder3DMesh_1.default();

      if (this.m_transMatrix != null) {
        mesh.setTransformMatrix(this.m_transMatrix);
      }

      mesh.uScale = this.uScale;
      mesh.vScale = this.vScale;
      mesh.vbWholeDataEnabled = this.vbWholeDataEnabled;
      mesh.setBufSortFormat(material.getBufSortFormat());
      mesh.initialize(this.m_radius, this.m_height, this.m_plongitudeNumSegments, 2, this.m_uvType, this.m_alignYRatio);
      this.setMesh(mesh);
      mesh.setTransformMatrix(null);
    }

    this.m_transMatrix = null;
  }

  toString() {
    return "[Cylinder3DEntity(uid = " + this.getUid() + ", rseFlag = " + this.__$rseFlag + ")]";
  }

}

exports.default = Cylinder3DEntity;

/***/ }),

/***/ "f48d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

class AbsGeomBase {
  constructor() {
    // unique id
    this.id = -1;
    this.position = new Vector3D_1.default();
  }

  update() {}

  updateFast() {}

}

AbsGeomBase.__tV0 = new Vector3D_1.default();
AbsGeomBase.__tV1 = new Vector3D_1.default();
AbsGeomBase.__tV2 = new Vector3D_1.default();
exports.AbsGeomBase = AbsGeomBase;
exports.default = AbsGeomBase;

/***/ }),

/***/ "f63e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const ShaderUniformData_1 = __importDefault(__webpack_require__("b3bd"));

const MaterialBase_1 = __importDefault(__webpack_require__("0fc4"));

class Default3DMaterial extends MaterialBase_1.default {
  constructor() {
    super();
    this.m_colorArray = new Float32Array([1.0, 1.0, 1.0, 1.0]);
    this.vtxColorEnabled = false;
    this.premultiplyAlpha = false;
  }
  /**
   * get a shader code buf instance, for sub class override
   * @returns a ShaderCodeBuffer class instance
   */


  getCodeBuf() {
    let buf = super.getCodeBuf();
    buf.vtxColorEnabled = this.vtxColorEnabled;
    buf.premultiplyAlpha = this.premultiplyAlpha;
    return buf;
  }

  setRGB3f(pr, pg, pb) {
    this.m_colorArray[0] = pr;
    this.m_colorArray[1] = pg;
    this.m_colorArray[2] = pb;
  }

  getRGB3f(color) {
    let ds = this.m_colorArray;
    color.setRGB3f(ds[0], ds[1], ds[2]);
  }

  setRGBA4f(pr, pg, pb, pa) {
    this.m_colorArray[0] = pr;
    this.m_colorArray[1] = pg;
    this.m_colorArray[2] = pb;
    this.m_colorArray[3] = pa;
  }

  getRGBA4f(color) {
    let ds = this.m_colorArray;
    color.setRGBA4f(ds[0], ds[1], ds[2], ds[3]);
  }

  setAlpha(pa) {
    this.m_colorArray[3] = pa;
  }

  createSelfUniformData() {
    let oum = new ShaderUniformData_1.default();
    oum.uniformNameList = ["u_color"];
    oum.dataList = [this.m_colorArray];
    return oum;
  }

}

exports.default = Default3DMaterial;

/***/ }),

/***/ "faa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const ShaderCodeBuilder2_1 = __importDefault(__webpack_require__("250c"));

class ShaderCodeBuffer {
  constructor() {
    this.m_texList = null;
    this.m_texEnabled = true;
    this.vtxColorEnabled = false;
    this.premultiplyAlpha = false;
    /**
     * 是否自适应转换shader版本
     */

    this.adaptationShaderVersion = true;
  }

  getShaderCodeBuilder() {
    return ShaderCodeBuffer.s_coder;
  }

  static GetPreCompileInfo() {
    return ShaderCodeBuffer.s_coder.getPreCompileInfo();
  }

  initialize(texEnabled) {
    if (ShaderCodeBuffer.___s_csBuf != null) {
      if (ShaderCodeBuffer.___s_csBuf != this) {
        ShaderCodeBuffer.___s_csBuf.initialize(texEnabled);
      }
    }

    this.m_texEnabled = texEnabled;
  }

  isTexEanbled() {
    return this.m_texEnabled;
  }

  setIRenderTextureList(texList) {
    this.m_texList = texList;
  }

  getIRenderTextureList() {
    return this.m_texList;
  }

  buildShader() {}

  getFragShaderCode() {
    if (ShaderCodeBuffer.___s_csBuf != this) return ShaderCodeBuffer.___s_csBuf.getFragShaderCode();
    this.adaptationShaderVersion = false;
    let coder = ShaderCodeBuffer.s_coder;
    coder.reset();
    coder.addVertLayout("vec3", "a_vs");
    coder.addFragOutput("vec4", "FragColor0");
    coder.addFragUniform("vec4", "u_color");
    coder.useVertSpaceMats(true, true, true);
    if (this.premultiplyAlpha) coder.addDefine("VOX_PREMULTIPLY_ALPHA", "1");

    if (this.m_texEnabled) {
      coder.addTextureSample2D();
      coder.addVertLayout("vec2", "a_uvs");
      coder.addVarying("vec2", "v_uv");
    }

    if (this.vtxColorEnabled) {
      coder.addDefine("VOX_USE_VTX_COLOR", "1");
      coder.addVertLayout("vec3", "a_cvs");
      coder.addVarying("vec3", "v_cv");
    }

    coder.addFragMainCode(`
void main(){

    FragColor0 = vec4(1.0);
    #ifdef VOX_USE_2D_MAP
        //  FragColor0 *= VOX_Texture2D(u_sampler0, vec2(v_uv[0],v_uv[1]));
        FragColor0 *= VOX_Texture2D(u_sampler0, v_uv.xy);
    #endif
    #ifdef VOX_USE_VTX_COLOR
        FragColor0 *= vec4(v_cv.xyz,1.0);
    #endif
    #ifdef VOX_PREMULTIPLY_ALPHA
        FragColor0.rgb *= u_color.xyz;
        FragColor0.a *= u_color.w;
        FragColor0.rgb *= u_color.aaa;
    #else
        FragColor0 *= u_color;
    #endif
}
`);
    return coder.buildFragCode();
  }

  getVtxShaderCode() {
    if (ShaderCodeBuffer.___s_csBuf != this) return ShaderCodeBuffer.___s_csBuf.getVtxShaderCode();
    let coder = ShaderCodeBuffer.s_coder;
    coder.addVertMainCode(`
void main(){
    
    gl_Position = u_projMat * u_viewMat * u_objMat * vec4(a_vs.xyz,1.0);

    #ifdef VOX_USE_2D_MAP
        v_uv = a_uvs.xy;
    #endif
    #ifdef VOX_USE_VTX_COLOR
        v_cv = a_cvs.xyz;
    #endif
}
`);
    return coder.buildVertCode();
  }

  getUniqueShaderName() {
    if (ShaderCodeBuffer.___s_csBuf != this) return ShaderCodeBuffer.___s_csBuf.getUniqueShaderName();
    let ns = "vox_default_shd";
    if (this.m_texEnabled) ns += "_tex";
    if (this.vtxColorEnabled) ns += "_vtxColor";
    if (this.premultiplyAlpha) ns += "_preMulAlpha";
    return ns;
  }

  toString() {
    return "[ShaderCodeBuffer()]";
  }

  static UseShaderBuffer(buf) {
    ShaderCodeBuffer.___s_csBuf = buf;
  }

}

ShaderCodeBuffer.___s_csBuf = null;
ShaderCodeBuffer.s_coder = new ShaderCodeBuilder2_1.default();
exports.default = ShaderCodeBuffer;

/***/ }),

/***/ "face":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Matrix4Pool_1 = __importDefault(__webpack_require__("2139"));

const TextureProxy_1 = __importDefault(__webpack_require__("0851"));

const ImageTextureProxy_1 = __importDefault(__webpack_require__("5e78"));

const ShaderUniformData_1 = __importDefault(__webpack_require__("b3bd"));

const MaterialBase_1 = __importDefault(__webpack_require__("0fc4"));

const ShaderCodeMaterial_1 = __importDefault(__webpack_require__("dc7a"));

const DataMesh_1 = __importDefault(__webpack_require__("519e"));

const ROTransform_1 = __importDefault(__webpack_require__("0929"));

const DisplayEntity_1 = __importDefault(__webpack_require__("402a"));

const Plane3DEntity_1 = __importDefault(__webpack_require__("bd6f"));

const Billboard3DEntity_1 = __importDefault(__webpack_require__("bbd2"));

const AABB2D_1 = __importDefault(__webpack_require__("e2fe"));

const Box3DEntity_1 = __importDefault(__webpack_require__("91e2"));

const Sphere3DEntity_1 = __importDefault(__webpack_require__("b8ff"));

const Axis3DEntity_1 = __importDefault(__webpack_require__("b9b5"));

const Cylinder3DEntity_1 = __importDefault(__webpack_require__("f240"));

const Line3DEntity_1 = __importDefault(__webpack_require__("99cf"));

const DashedLine3DEntity_1 = __importDefault(__webpack_require__("4b6d"));

const BoxFrame3D_1 = __importDefault(__webpack_require__("a2f2"));

const FrustrumFrame3DEntity_1 = __importDefault(__webpack_require__("79d6"));

var pwindow = window;

if (pwindow["VoxCore"] == undefined) {
  pwindow["VoxCore"] = {};
}

var VoxCore = pwindow["VoxCore"];
VoxCore["AABB2D"] = AABB2D_1.default;
VoxCore["Matrix4Pool"] = Matrix4Pool_1.default;
VoxCore["TextureProxy"] = TextureProxy_1.default;
VoxCore["ImageTextureProxy"] = ImageTextureProxy_1.default;
VoxCore["ShaderUniformData"] = ShaderUniformData_1.default;
VoxCore["MaterialBase"] = MaterialBase_1.default;
VoxCore["ShaderCodeMaterial"] = ShaderCodeMaterial_1.default;
VoxCore["DataMesh"] = DataMesh_1.default;
VoxCore["ROTransform"] = ROTransform_1.default;
VoxCore["DisplayEntity"] = DisplayEntity_1.default;
VoxCore["Plane3DEntity"] = Plane3DEntity_1.default;
VoxCore["Billboard3DEntity"] = Billboard3DEntity_1.default;
VoxCore["Box3DEntity"] = Box3DEntity_1.default;
VoxCore["Sphere3DEntity"] = Sphere3DEntity_1.default;
VoxCore["Axis3DEntity"] = Axis3DEntity_1.default;
VoxCore["Cylinder3DEntity"] = Cylinder3DEntity_1.default;
VoxCore["Line3DEntity"] = Line3DEntity_1.default;
VoxCore["DashedLine3DEntity"] = DashedLine3DEntity_1.default;
VoxCore["BoxFrame3D"] = BoxFrame3D_1.default;
VoxCore["FrustrumFrame3DEntity"] = FrustrumFrame3DEntity_1.default;

class ROFunctions {
  constructor() {
    //private m_camera: CameraBase = new CameraBase(0);
    this.m_imgTexture = new ImageTextureProxy_1.default(32, 32);
    this.m_dataMesh = new DataMesh_1.default();
    this.m_entity = new DisplayEntity_1.default();
    this.m_plane = new Plane3DEntity_1.default();
    this.m_billboard = new Billboard3DEntity_1.default();
    this.m_box = new Box3DEntity_1.default();
    this.m_sph = new Sphere3DEntity_1.default();
    this.m_axis = new Axis3DEntity_1.default();
    this.m_cyl = new Cylinder3DEntity_1.default();
    this.m_line = new Line3DEntity_1.default();
    this.m_dashedLine = new DashedLine3DEntity_1.default();
    this.m_boxFrame = new BoxFrame3D_1.default();
    this.m_frustumFrame = new FrustrumFrame3DEntity_1.default();
    this.m_uniformData = new ShaderUniformData_1.default();
    this.m_shaderCodeMaterial = new ShaderCodeMaterial_1.default();
  }

  initialize(pmodule) {
    let flag = false;

    if (flag) {
      this.m_dataMesh.initialize();
      this.m_plane.initializeXOZSquare(100.0);
      this.m_billboard.initialize(100.0, 100.0, [this.m_imgTexture]);
      this.m_box.initializeCube(300.0, [this.m_imgTexture]);
      this.m_sph.initialize(300.0, 30, 30, [this.m_imgTexture]);
      this.m_axis.initialize(300.0);
      this.m_cyl.initialize(300.0, 100, 10);
      this.m_line.initialize(null, null);
      this.m_dashedLine.initializeLS(null, null);
      this.m_boxFrame.initialize(null, null);
      this.m_frustumFrame.initiazlize(null);
    }

    console.log("ROFunctions::initialize()......");
  }

  run() {}

}

exports.ROFunctions = ROFunctions;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6af0");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "fc07":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

const AttributeLine_1 = __importDefault(__webpack_require__("2e8a"));

const UniformLine_1 = __importDefault(__webpack_require__("78e9"));

class ShaderCodeParser {
  constructor() {
    // identify use texture
    this.m_useTex = false; // web gl 1.0, this.attributes

    this.m_attriNSList = null;
    this.m_attriSizeList = null; // m_uniform name list
    //uniformNameList:string[] = null;

    this.uniformNameListStr = "";
    this.texUniformNameListStr = "";
    this.attributes = [null, null, null, null, null, null, null, null, null, null, null, null];
    this.m_uniforms = null;
    this.texTotal = 0;
    this.fragOutputTotal = 0;
  }

  reset() {
    this.m_useTex = false;
    this.m_attriNSList = null;
    this.uniformNameListStr = "";
    this.texUniformNameListStr = "";
    let i = 0;

    for (; i < 12; ++i) {
      this.attributes[i] = null;
    }

    this.m_uniforms = null;
    this.texTotal = 0;
  }

  parseVShaderCode(vshdsrc) {
    let semicolonReg = new RegExp(";", "g");
    vshdsrc = vshdsrc.replace(semicolonReg, ";\n");
    vshdsrc = vshdsrc.replace("{", "{\n");
    vshdsrc = vshdsrc.replace("}", "\n}"); //

    let ENTER = "\n";
    let i = vshdsrc.indexOf(ENTER);
    let j = 0; //

    let codeList = [];
    let str = "";
    let subStr = ""; //trace("-----------------parseVShaderCode begin----------------------");

    let regSpace = new RegExp(" ", "g");

    while (i >= 0) {
      str = vshdsrc.slice(j, i);

      if (str.length > 0) {
        subStr = str.replace(regSpace, "");

        if (subStr.indexOf("//") != 0) {
          codeList.push(str);
        }
      }

      j = i + 1;
      i = vshdsrc.indexOf(ENTER, j);
    }

    str = vshdsrc.slice(j, vshdsrc.length);

    if (str.length > 0) {
      subStr = str.replace(regSpace, "");

      if (subStr.indexOf("//") != 0) {
        codeList.push(str);
      }
    }

    let UNIFORM = "uniform ";
    let len = codeList.length;
    let attri = null;
    i = 0;

    for (; i < 12; ++i) {
      this.attributes[i] = null;
    }

    this.m_attriNSList = [];
    this.m_attriSizeList = []; //

    let uniform = null;
    if (this.m_uniforms == null) this.m_uniforms = []; //if(this.uniformNameList == null)this.uniformNameList = [];
    //

    i = 0;
    let flagLayout = false;
    let flagAttri = false;

    while (i < len) {
      str = codeList[i];
      flagLayout = str.indexOf("layout") >= 0;
      flagAttri = str.indexOf("attribute ") >= 0;

      if (flagLayout && str.indexOf("location") > 0 || flagAttri) {
        attri = new AttributeLine_1.default();
        attri.layoutEnabled = flagLayout;
        attri.parseCode(str); //this.attributes.push( attri );

        this.attributes[attri.attriType] = attri;
        this.m_attriNSList.push(attri.name);
        this.m_attriSizeList.push(attri.typeSize);
      } else if (str.indexOf(UNIFORM) >= 0) {
        uniform = new UniformLine_1.default();

        if (uniform.parseCode(str)) {
          this.m_uniforms.push(uniform); //this.uniformNameList.push( uniform.name );

          this.uniformNameListStr += uniform.name + ",";

          if (uniform.isTex) {
            console.log("use vtx texture !!!");
            this.texUniformNameListStr += uniform.name + ",";
            this.texTotal++;
          }
        }
      }

      ++i;
    } //trace("-----------------parseVShaderCode end----------------------");

  }

  parseFShaderCode(fshdsrc) {
    let semicolonReg = new RegExp(";", "g");
    fshdsrc = fshdsrc.replace(semicolonReg, ";\n");
    fshdsrc = fshdsrc.replace("{", "{\n");
    fshdsrc = fshdsrc.replace("}", "\n}"); //

    let ENTER = "\n";
    let i = fshdsrc.indexOf(ENTER);
    let j = 0; //

    let codeList = [];
    let str = "";
    let subStr = ""; //console.log("-----------------parseFShaderCode begin----------------------");

    let regSpace = new RegExp(" ", "g");

    while (i >= 0) {
      str = fshdsrc.slice(j, i);

      if (str.length > 0) {
        subStr = str.replace(regSpace, "");

        if (subStr.indexOf("//") != 0) {
          codeList.push(str);
        }
      }

      j = i + 1;
      i = fshdsrc.indexOf(ENTER, j);
    }

    str = fshdsrc.slice(j, fshdsrc.length);

    if (str.length > 0) {
      subStr = subStr.replace(regSpace, "");

      if (subStr.indexOf("//") != 0) {
        codeList.push(str); //trace(str);
      }
    }

    let UNIFORM = "uniform ";
    let len = codeList.length;
    let uniform = null;
    if (this.m_uniforms == null) this.m_uniforms = [];
    i = 0;

    while (i < len) {
      str = codeList[i];

      if (str.indexOf(UNIFORM) >= 0 && this.uniformNameListStr.indexOf(UNIFORM) < 0) {
        uniform = new UniformLine_1.default();

        if (uniform.parseCode(str)) {
          this.m_uniforms.push(uniform);
          this.uniformNameListStr += uniform.name + ",";

          if (uniform.isTex) {
            this.texUniformNameListStr += uniform.name + ",";
            this.texTotal++;
          } else {//this.uniformNameList.push( uniform.name );
          }
        }
      }

      ++i;
    }

    let outputKey = "layout";

    if (RendererDevice_1.default.IsWebGL1()) {
      outputKey = "gl_FragData";
    }

    i = fshdsrc.indexOf(outputKey);
    this.fragOutputTotal = 0;

    while (i > 0) {
      this.fragOutputTotal++;
      i = fshdsrc.indexOf(outputKey, i + 2);
    }

    if (this.fragOutputTotal < 1) {
      this.fragOutputTotal = 1;
    } //trace("-----------------parseFShaderCode end----------------------,texTotal: "+texTotal);

  }

}

exports.default = ShaderCodeParser;

/***/ }),

/***/ "fecb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2020 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const MathConst_1 = __importDefault(__webpack_require__("6e01"));

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

class AABB {
  constructor() {
    this.min = new Vector3D_1.default(MathConst_1.default.MATH_MAX_POSITIVE, MathConst_1.default.MATH_MAX_POSITIVE, MathConst_1.default.MATH_MAX_POSITIVE);
    this.max = new Vector3D_1.default(MathConst_1.default.MATH_MIN_NEGATIVE, MathConst_1.default.MATH_MIN_NEGATIVE, MathConst_1.default.MATH_MIN_NEGATIVE);
    this.version = -1;
    this.radius = 50;
    this.radius2 = 2500;
    this.center = new Vector3D_1.default(0.0, 0.0, 0.0);
    this.m_long = 100.0;
    this.m_width = 100.0;
    this.m_height = 100.0;
    this.m_halfLong = 50.0;
    this.m_halfWidth = 50.0;
    this.m_halfHeight = 50.0;
    this.m_tempV = new Vector3D_1.default();
  }

  getLong() {
    return this.m_long;
  }

  getWidth() {
    return this.m_width;
  }

  getHeight() {
    return this.m_height;
  }

  reset() {
    this.min.setXYZ(MathConst_1.default.MATH_MAX_POSITIVE, MathConst_1.default.MATH_MAX_POSITIVE, MathConst_1.default.MATH_MAX_POSITIVE);
    this.max.setXYZ(MathConst_1.default.MATH_MIN_NEGATIVE, MathConst_1.default.MATH_MIN_NEGATIVE, MathConst_1.default.MATH_MIN_NEGATIVE);
  }

  equals(ab) {
    return this.min.equalsXYZ(ab.min) && this.max.equalsXYZ(ab.max);
  }

  setVolume(width, height, long) {
    this.m_width = width;
    this.m_height = height;
    this.m_long = long; //

    this.m_halfLong = 0.5 * this.m_long;
    this.m_halfWidth = 0.5 * this.m_width;
    this.m_halfHeight = 0.5 * this.m_height; //

    this.max.x = this.center.x + this.m_halfWidth;
    this.max.y = this.center.y + this.m_halfHeight;
    this.max.z = this.center.z + this.m_halfLong; //

    this.min.x = this.center.x - this.m_halfWidth;
    this.min.y = this.center.y - this.m_halfHeight;
    this.min.z = this.center.z - this.m_halfLong;
    this.radius2 = this.m_halfWidth * this.m_halfWidth + this.m_halfHeight * this.m_halfHeight + this.m_halfLong * this.m_halfLong;
    this.radius = Math.sqrt(this.radius2);
  }

  union(ab) {
    this.addPosition(ab.min);
    this.addPosition(ab.max);
  }

  addPosition(pv) {
    if (this.min.x > pv.x) this.min.x = pv.x;
    if (this.min.y > pv.y) this.min.y = pv.y;
    if (this.min.z > pv.z) this.min.z = pv.z;
    if (this.max.x < pv.x) this.max.x = pv.x;
    if (this.max.y < pv.y) this.max.y = pv.y;
    if (this.max.z < pv.z) this.max.z = pv.z;
  }

  addXYZ(pvx, pvy, pvz) {
    if (this.min.x > pvx) this.min.x = pvx;
    if (this.min.y > pvy) this.min.y = pvy;
    if (this.min.z > pvz) this.min.z = pvz;
    if (this.max.x < pvx) this.max.x = pvx;
    if (this.max.y < pvy) this.max.y = pvy;
    if (this.max.z < pvz) this.max.z = pvz;
  }

  addXYZFloat32Arr(vs) {
    let len = vs.length;
    let pvx = 0.0;
    let pvy = 0.0;
    let pvz = 0.0;

    for (let i = 0; i < len;) {
      pvx = vs[i];
      ++i;
      pvy = vs[i];
      ++i;
      pvz = vs[i];
      ++i;
      if (this.min.x > pvx) this.min.x = pvx;
      if (this.min.y > pvy) this.min.y = pvy;
      if (this.min.z > pvz) this.min.z = pvz;
      if (this.max.x < pvx) this.max.x = pvx;
      if (this.max.y < pvy) this.max.y = pvy;
      if (this.max.z < pvz) this.max.z = pvz;
    }
  } // @param	v	Vector3D instance


  containsV(v) {
    if (v.x < this.max.x || v.x > this.max.x) return false;
    if (v.y < this.max.y || v.y > this.max.y) return false;
    if (v.z < this.max.z || v.z > this.max.z) return false;
    return true;
  } // 是否包含某一点(同一坐标空间的点)


  containsXY(vx, vy) {
    if (vx < this.min.x || vx > this.max.x) return false;
    if (vy < this.min.y || vy > this.max.y) return false;
    return true;
  } // 是否包含某一点(同一坐标空间的点)


  containsXZ(vx, vz) {
    if (vx < this.min.x || vx > this.max.x) return false;
    if (vz < this.min.z || vz > this.max.z) return false;
    return true;
  } // 是否包含某一点(同一坐标空间的点)


  containsYZ(vy, vz) {
    if (vy < this.min.y || vy > this.max.y) return false;
    if (vz < this.min.z || vz > this.max.z) return false;
    return true;
  }

  update() {
    // x
    this.m_width = this.max.x;

    if (this.min.x > this.max.x) {
      this.max.x = this.min.x;
      this.min.x = this.m_width;
    }

    this.m_width = this.max.x - this.min.x; // y

    this.m_height = this.max.y;

    if (this.min.y > this.max.y) {
      this.max.y = this.min.y;
      this.min.y = this.m_height;
    }

    this.m_height = this.max.y - this.min.y; // z

    this.m_long = this.max.z;

    if (this.min.z > this.max.z) {
      this.max.z = this.min.z;
      this.min.z = this.m_long;
    }

    this.m_long = this.max.z - this.min.z; //

    this.center.x = 0.5 * this.m_width;
    this.center.y = 0.5 * this.m_height;
    this.center.z = 0.5 * this.m_long; //

    this.m_halfLong = this.center.z;
    this.m_halfWidth = this.center.x;
    this.m_halfHeight = this.center.y; //

    this.radius2 = this.m_halfWidth * this.m_halfWidth + this.m_halfHeight * this.m_halfHeight + this.m_halfLong * this.m_halfLong;
    this.radius = Math.sqrt(this.radius2); //

    this.center.x += this.min.x;
    this.center.y += this.min.y;
    this.center.z += this.min.z; //
    //this.m_ocenter.copyFrom(this.center);

    ++this.version;
  }

  updateVolume() {
    this.m_width = this.max.x - this.min.x;
    this.m_height = this.max.y - this.min.y;
    this.m_long = this.max.z - this.min.z; //

    this.m_halfLong = 0.5 * this.m_long;
    this.m_halfWidth = 0.5 * this.m_width;
    this.m_halfHeight = 0.5 * this.m_height;
  }

  copyFrom(ab) {
    //this.setRadius(ab.getRadius());
    this.radius = ab.radius;
    this.radius2 = ab.radius2; //this.setRadiusSquared(ab.getRadiusSquared());

    this.min.copyFrom(ab.min);
    this.max.copyFrom(ab.max); //this.getOCenter().copyFrom(ab.getOCenter());

    this.center.copyFrom(ab.center);
    this.updateVolume();
  }

  updateFast() {
    this.m_width = this.max.x - this.min.x;
    this.m_height = this.max.y - this.min.y;
    this.m_long = this.max.z - this.min.z; //

    this.center.x = 0.5 * this.m_width;
    this.center.y = 0.5 * this.m_height;
    this.center.z = 0.5 * this.m_long; //

    this.m_halfLong = this.center.z;
    this.m_halfWidth = this.center.x;
    this.m_halfHeight = this.center.y; //

    this.radius2 = this.m_halfWidth * this.m_halfWidth + this.m_halfHeight * this.m_halfHeight + this.m_halfLong * this.m_halfLong;
    this.radius = Math.sqrt(this.radius2); //

    this.center.x += this.min.x;
    this.center.y += this.min.y;
    this.center.z += this.min.z;
    ++this.version;
  }

  toString() {
    return "[AABB(min->" + this.min + ",size(" + this.m_width + "," + this.m_height + "," + this.m_long + "))]";
  } // max vecs sphere range intersect calc


  sphereIntersect(centerV, radius) {
    this.m_tempV.x = this.center.x - centerV.x;
    this.m_tempV.y = this.center.y - centerV.y;
    this.m_tempV.z = this.center.z - centerV.z;
    let dis = this.m_tempV.getLengthSquared();

    if (dis < this.radius2) {
      return true;
    }

    radius += this.radius;
    radius *= radius;
    return radius >= dis;
  }

  intersectRL(ltv, lpv) {
    let f = 0;
    let tmin = (this.min.x - lpv.x) / ltv.x;
    let tmax = (this.max.x - lpv.x) / ltv.x; //console.log("AABB::IntersectRL uses...");

    if (tmin > tmax) {
      f = tmax;
      tmax = tmin;
      tmin = f;
    } //	console.log("\n");
    //	console.log("tmin: "+tmin+",tmax: "+tmax);


    let tymin = (this.min.y - lpv.y) / ltv.y;
    let tymax = (this.max.y - lpv.y) / ltv.y; //	console.log("tymin: "+tymin+",tymax: "+tymax);

    if (tymin > tymax) {
      f = tymax;
      tymax = tymin;
      tymin = f;
    }

    if (tmin > tymax || tymin > tmax) return false;
    if (tymin > tmin) tmin = tymin;
    if (tymax < tmax) tmax = tymax;
    let tzmin = (this.min.z - lpv.z) / ltv.z;
    let tzmax = (this.max.z - lpv.z) / ltv.z; //	console.log("tzmin: "+tzmin+",tzmax: "+tzmax);
    //	console.log("\n");

    if (tzmin > tzmax) {
      f = tzmax;
      tzmax = tzmin;
      tzmin = f;
    }

    if (tmin > tzmax || tzmin > tmax) return false;
    if (tzmin > tmin) tmin = tzmin;
    if (tzmax < tmax) tmax = tzmax;
    return true;
  }
  /*
  static IntersectionRL3(vecs:Vector3D[],rsigns:Uint8Array,ltInvtv:Vector3D, ltv:Vector3D, lpv:Vector3D,outV:Vector3D):boolean
  {
      let tmin:number, tmax:number, tymin:number, tymax:number;//, tzmin:number, tzmax:number;
      
      tmin = (vecs[rsigns[0]].x - lpv.x) * ltInvtv.x;
      tmax = (vecs[1-rsigns[0]].x - lpv.x) * ltInvtv.x;
      tymin = (vecs[rsigns[1]].y - lpv.y) * ltInvtv.y;
      tymax = (vecs[1-rsigns[1]].y - lpv.y) * ltInvtv.y;
      if ((tmin > tymax) || (tymin > tmax))
          return false;
      if (tymin > tmin)
          tmin = tymin;
      if (tymax < tmax)
          tmax = tymax;
      
      tymin = (vecs[rsigns[2]].z - lpv.z) * ltInvtv.z;
      tymax = (vecs[1-rsigns[2]].z - lpv.z) * ltInvtv.z;
      if ((tmin > tymax) || (tymin > tmax))
          return false;
      if (tymin > tmin)
          tmin = tymin;
      if (tymax < tmax)
          tmax = tymax;
          
      outV.copyFrom(ltv);
      outV.scaleBy(tmin);
      outV.addBy(lpv);
      console.log("T Hit outV: "+outV.toString());
      return true;
  }
  //*/


  static IntersectionRL3(vecs, rsigns, ltInvtv, ltv, lpv, outV) {
    ltInvtv.w = (vecs[rsigns[0]].x - lpv.x) * ltInvtv.x;
    ltv.w = (vecs[1 - rsigns[0]].x - lpv.x) * ltInvtv.x;
    outV.x = (vecs[rsigns[1]].y - lpv.y) * ltInvtv.y;
    outV.y = (vecs[1 - rsigns[1]].y - lpv.y) * ltInvtv.y;
    if (ltInvtv.w > outV.y || outV.x > ltv.w) return false;
    if (outV.x > ltInvtv.w) ltInvtv.w = outV.x;
    if (outV.y < ltv.w) ltv.w = outV.y;
    outV.x = (vecs[rsigns[2]].z - lpv.z) * ltInvtv.z;
    outV.y = (vecs[1 - rsigns[2]].z - lpv.z) * ltInvtv.z;
    if (ltInvtv.w > outV.y || outV.x > ltv.w) return false;
    if (outV.x > ltInvtv.w) ltInvtv.w = outV.x;
    if (outV.y < ltv.w) ltv.w = outV.y;
    outV.copyFrom(ltv);
    outV.scaleBy(ltInvtv.w);
    outV.addBy(lpv);
    ltv.w = 1.0; //console.log("T Hit outV: "+outV.toString());

    return true;
  }

  static IntersectionRL1(ltv, lpv, ab, outV) {
    let f = 0;
    let tmin = (ab.min.x - lpv.x) / ltv.x;
    let tmax = (ab.max.x - lpv.x) / ltv.x; //console.log("AABB::IntersectRL uses...");

    if (tmin > tmax) {
      f = tmax;
      tmax = tmin;
      tmin = f;
    } //	console.log("\n");
    //	console.log("tmin: "+tmin+",tmax: "+tmax);


    let tymin = (ab.min.y - lpv.y) / ltv.y;
    let tymax = (ab.max.y - lpv.y) / ltv.y; //	console.log("tymin: "+tymin+",tymax: "+tymax);

    if (tymin > tymax) {
      f = tymax;
      tymax = tymin;
      tymin = f;
    }

    if (tmin > tymax || tymin > tmax) return false;
    if (tymin > tmin) tmin = tymin;
    if (tymax < tmax) tmax = tymax;
    let tzmin = (ab.min.z - lpv.z) / ltv.z;
    let tzmax = (ab.max.z - lpv.z) / ltv.z; //	console.log("tzmin: "+tzmin+",tzmax: "+tzmax);
    //	console.log("\n");

    if (tzmin > tzmax) {
      f = tzmax;
      tzmax = tzmin;
      tzmin = f;
    }

    if (tmin > tzmax || tzmin > tmax) return false;
    if (tzmin > tmin) tmin = tzmin;
    if (tzmax < tmax) tmax = tzmax; //	console.log("XXXXXXXXX tmin: "+tmin+",tmax: "+tmax);

    outV.copyFrom(ltv);
    outV.scaleBy(tmin);
    outV.addBy(lpv);
    console.log("L Hit outV: " + outV.toString()); //outV.copyFrom(ltv);
    //outV.scaleBy(tmax);
    //outV.addBy(lpv);
    //console.log("tmax outV: "+outV.toString());

    return true;
  } //
  // 检测射线和AABB是否相交,如果相交计算出交点存放于 outV 中, 这个检测计算是精准高效的
  // @param				ltv		射线的切向
  // @param				lpv		射线上的一点
  // @param				ab		updateFast() 过的 AABB 实例
  // @param				outV	存放交点的 Vector3D实例
  //


  static IntersectionRL2(ltv, lpv, ab, outV) {
    // 计算包围球
    //let dis:number = StraightLine.CalcPVSquaredDis2(ltv, lpv, ab.center);
    outV.x = ab.center.x - lpv.x;
    outV.y = ab.center.y - lpv.y;
    outV.z = ab.center.z - lpv.z; //

    let dis = outV.dot(ltv);
    outV.x -= dis * ltv.x;
    outV.y -= dis * ltv.y;
    outV.z -= dis * ltv.z;

    if (outV.getLengthSquared() > ab.radius2) {
      console.log("Hit shp failure.");
      return false;
    } // 包含起点，则一定相交


    if (ab.containsV(lpv)) {
      outV.copyFrom(lpv);
      return true;
    } // 确定 x 轴线


    if (lpv.x < ab.min.x) {
      // 说明 起点在 ab 的 -x 侧
      if (ltv.x > 0.0) {
        // 有可能和min x面相交
        dis = (ab.min.x - lpv.x) / ltv.x;
        outV.copyFrom(ltv);
        outV.scaleBy(dis);
        outV.addBy(lpv);

        if (ab.containsYZ(outV.y, outV.z)) {
          return true;
        }
      }
    } else if (lpv.x > ab.max.x) {
      // 说明 起点在 ab 的 +x 侧
      if (ltv.x < 0.0) {
        // 有可能和max x面相交
        dis = (ab.max.x - lpv.x) / ltv.x;
        outV.copyFrom(ltv);
        outV.scaleBy(dis);
        outV.addBy(lpv);

        if (ab.containsYZ(outV.y, outV.z)) {
          return true;
        }
      }
    } // 确定 y 轴线


    if (lpv.y < ab.min.y) {
      // 说明 起点在 ab 的 -y 侧
      if (ltv.y > 0.0) {
        // 有可能和min y面相交
        dis = (ab.min.y - lpv.y) / ltv.y;
        outV.copyFrom(ltv);
        outV.scaleBy(dis);
        outV.addBy(lpv);

        if (ab.containsXZ(outV.x, outV.z)) {
          return true;
        }
      }
    } else if (lpv.y > ab.max.y) {
      // 说明 起点在 ab 的 +y 侧
      if (ltv.y < 0.0) {
        // 有可能和max y面相交
        dis = ab.max.y;
        dis = (ab.max.y - lpv.y) / ltv.y;
        outV.copyFrom(ltv);
        outV.scaleBy(dis);
        outV.addBy(lpv);

        if (ab.containsXZ(outV.x, outV.z)) {
          return true;
        }
      }
    } // 确定 z 轴线


    if (lpv.z < ab.min.z) {
      // 说明 起点在 ab 的 -z 侧
      if (ltv.z > 0.0) {
        // 有可能和min y面相交
        dis = (ab.min.z - lpv.z) / ltv.z;
        outV.copyFrom(ltv);
        outV.scaleBy(dis);
        outV.addBy(lpv);

        if (ab.containsXY(outV.x, outV.y)) {
          return true;
        }
      }
    } else if (lpv.z > ab.max.z) {
      // 说明 起点在 ab 的 +z 侧
      if (ltv.z < 0.0) {
        // 有可能和max z面相交
        dis = (ab.max.z - lpv.z) / ltv.z;
        outV.copyFrom(ltv);
        outV.scaleBy(dis);
        outV.addBy(lpv);

        if (ab.containsXY(outV.x, outV.y)) {
          return true;
        }
      }
    }

    return false;
  }

}

AABB.___pnV = new Vector3D_1.default();
exports.default = AABB;

/***/ })

/******/ });
});