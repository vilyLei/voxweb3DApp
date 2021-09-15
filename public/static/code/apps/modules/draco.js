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

/***/ "18fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class DracoWasmLoader {
  constructor() {
    this.wapperStr = null;
    this.wasmBin = null;
    this.m_loaded_callback = null;
    this.m_loaded_callback_target = null;
  }

  load(loaded_callback, loaded_callback_target) {
    this.m_loaded_callback = loaded_callback;
    this.m_loaded_callback_target = loaded_callback_target;
    let wapperUrl = "static/extern/draco/w.md";
    let wasmUrl = "static/extern/draco/d.md";
    let wapperXHR = new XMLHttpRequest();
    wapperXHR.open("GET", wapperUrl, true);
    wapperXHR.responseType = "text";

    wapperXHR.onload = () => {
      this.wapperStr = wapperXHR.response;
      console.log("loaded wasm wapper js.");
      this.loadedRes();
    };

    wapperXHR.send(null);
    let wasmXHR = new XMLHttpRequest();
    wasmXHR.open("GET", wasmUrl, true);
    wasmXHR.responseType = "arraybuffer";

    wasmXHR.onload = () => {
      this.wasmBin = wasmXHR.response;
      console.log("loaded wasm binary.");
      this.loadedRes();
    };

    wasmXHR.send(null);
  }

  loadedRes() {
    if (this.wasmBin != null && this.wapperStr != null) {
      console.log("loaded wasm binary.");
      this.m_loaded_callback.call(this.m_loaded_callback_target, {
        wapper: this.wapperStr,
        wasm: this.wasmBin
      });
    }
  }

}

exports.DracoWasmLoader = DracoWasmLoader;

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

/***/ "52e5":
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

const DracoWasmLoader_1 = __webpack_require__("18fc");

const DracoTask_1 = __webpack_require__("56e1");

const DracoBufferLoader_1 = __webpack_require__("da4e");

class DracoMeshRawBuilder {
  constructor() {
    this.m_listener = null;
    this.m_wasmLoader = null;
    this.m_dracoTask = null;
    this.m_threadsTotal = 1;
    this.multiBuffers = true;
    this.threadTask = null;
    this.threadSystem = null;
    this.m_meshBuffer = null;
    this.m_segs = [];
    this.m_param = "";
    this.m_dracoParserStr = `
function DracoParser() {

    this.parser = null;

    this.verbosity = 1;
    this.drawMode = 0;
    this.vsScale = 1.0;
    
    this.attNSMap = {
        position: "POSITION",
        normal: "NORMAL",
        color: "COLOR",
        uv: "TEX_COORD",
        generic: "GENERIC"
    };
    this.attMap = null;
    this.attOpts = null;
    
    let selfT = this;
    this.getAttributeOptions = function (ns) {
        if (typeof selfT.attOpts[ns] === "undefined") selfT.attOpts[ns] = {};
        return selfT.attOpts[ns];
    }
    const PARSER_TriangleStripDrawMode = 1;
    const PARSER_TriangleFanDrawMode = 21;
    this.addAttributeToGeometry = function (dracoDecoder, decoder, dracoGeometry, ns, attribute, geometryBuffer) {
        if (attribute.ptr === 0) {
            let errorMsg = "DracoParser: No attribute " + ns;
            console.error(errorMsg);
            throw new Error(errorMsg);
        }
        let numComponents = attribute.num_components();
        let attributeData = new dracoDecoder.DracoFloat32Array();
        decoder.GetAttributeFloatForAllPoints(dracoGeometry, attribute, attributeData);
        let numPoints = dracoGeometry.num_points();
        let numValues = numPoints * numComponents;
        let fs32 = new Float32Array(numValues + 1);
        fs32[0] = numComponents;
        
        for (let i = 0; i < numValues; i++) {
            fs32[i + 1] = attributeData.GetValue(i);
        }
        geometryBuffer[ns] = fs32;
        dracoDecoder.destroy(attributeData);
    }
    this.decodeGeomData = function (dracoDecoder, decoder, geometryType, buffer) {
        if (selfT.getAttributeOptions("position").skipDequantization === true) {
            decoder.SkipAttributeTransform(dracoDecoder.POSITION);
        }
        let dracoGeometry;
        let decodingStatus;

        if (geometryType === dracoDecoder.TRIANGULAR_MESH) {
            dracoGeometry = new dracoDecoder.Mesh();
            decodingStatus = decoder.DecodeBufferToMesh(buffer, dracoGeometry);
        }
        else {
            dracoGeometry = new dracoDecoder.PointCloud();
            decodingStatus = decoder.DecodeBufferToPointCloud(buffer, dracoGeometry);
        }
        if (!decodingStatus.ok() || dracoGeometry.ptr == 0) {
            let errorMsg = "DracoParser: Decoding failed: ";
            errorMsg += decodingStatus.error_msg();
            console.error(errorMsg);
            dracoDecoder.destroy(decoder);
            dracoDecoder.destroy(dracoGeometry);
            throw new Error(errorMsg);
        }
        dracoDecoder.destroy(buffer);
        let numFaces;
        if (geometryType == dracoDecoder.TRIANGULAR_MESH) {
            numFaces = dracoGeometry.num_faces();
        }
        else {
            numFaces = 0;
        }
        let posAttId = decoder.GetAttributeId(dracoGeometry, dracoDecoder.POSITION);
        if (posAttId == -1) {
            let errorMsg = "DracoParser: No position attribute found.";
            console.error(errorMsg);
            dracoDecoder.destroy(decoder);
            dracoDecoder.destroy(dracoGeometry);
            throw new Error(errorMsg);
        }
        let geometryBuffer = {};
        for (let ns in selfT.attNSMap) {
            if (selfT.attMap[ns] === undefined) {
                let attId = decoder.GetAttributeId(dracoGeometry, dracoDecoder[selfT.attNSMap[ns]]);
                if (attId !== -1) {
                    if (selfT.verbosity > 0) {
                        // console.log('Loaded ' + ns + ' attribute.');
                    }
                    let attribute = decoder.GetAttribute(dracoGeometry, attId);
                    selfT.addAttributeToGeometry(dracoDecoder, decoder, dracoGeometry, ns, attribute, geometryBuffer);
                }
            }
        }
        for (let ns in selfT.attMap) {
            let attributeId = selfT.attMap[ns];
            let attribute = decoder.GetAttributeByUniqueId(dracoGeometry, attributeId);
            selfT.addAttributeToGeometry(dracoDecoder, decoder, dracoGeometry, ns, attribute, geometryBuffer);
        }
        if (geometryType == dracoDecoder.TRIANGULAR_MESH) {
            if (selfT.drawMode === PARSER_TriangleStripDrawMode) {
                let stripsArray = new dracoDecoder.DracoInt32Array();
                geometryBuffer.indices = new Uint32Array(stripsArray.size());
                for (let i = 0; i < stripsArray.size(); ++i) {
                    geometryBuffer.indices[i] = stripsArray.GetValue(i);
                }
                dracoDecoder.destroy(stripsArray);
            } else {
                let numIndices = numFaces * 3;
                geometryBuffer.indices = new Uint32Array(numIndices);
                let ia = new dracoDecoder.DracoInt32Array();
                for (let i = 0; i < numFaces; ++i) {
                    decoder.GetFaceFromMesh(dracoGeometry, i, ia);
                    let index = i * 3;
                    geometryBuffer.indices[index] = ia.GetValue(0);
                    geometryBuffer.indices[index + 1] = ia.GetValue(1);
                    geometryBuffer.indices[index + 2] = ia.GetValue(2);
                }
                dracoDecoder.destroy(ia);
            }
        }
        if (geometryType != dracoDecoder.TRIANGULAR_MESH) {
            geometryBuffer.indices = null;
        }
        dracoDecoder.destroy(decoder);
        dracoDecoder.destroy(dracoGeometry);
        return geometryBuffer;
    }
    this.parseData = function (bufData, beginI, endI, status) {
        let dracoDecoder = selfT.parser;
        let buffer = new dracoDecoder.DecoderBuffer();
        let bufLen = endI - beginI;
        if (status < 1) {
            buffer.Init(new Int8Array(bufData.buffer).subarray(0, bufLen), bufLen);
        }
        else {
            buffer.Init(new Int8Array(bufData.buffer).subarray(beginI, endI), bufLen);
        }
        let decoder = new dracoDecoder.Decoder();
        /*
            * Determine what type is this file: mesh or point cloud.
            */
        let geometryType = decoder.GetEncodedGeometryType(buffer);
        if (geometryType == dracoDecoder.TRIANGULAR_MESH) {
            if (selfT.verbosity > 0) {
                // console.log("Loaded a mesh segment.");
            }
        } else if (geometryType == dracoDecoder.POINT_CLOUD) {
            if (selfT.verbosity > 0) {
                // console.log("Loaded a point cloud.");
            }
        } else {
            let errorMsg = "DracoParser: Unknown geometry type.";
            console.error(errorMsg);
            throw new Error(errorMsg);
        }

        //console.log("worker parseData, geometryType: "+geometryType);
        return this.decodeGeomData(dracoDecoder, decoder, geometryType, buffer);
    }

    this.transformVS = function (vsScale, matfs, f32vs, vinLength) {
        let i = 0;
        let x = y = z = 0.0;
        let matX = vsScale * matfs[12];
        let matY = vsScale * matfs[13];
        let matZ = vsScale * matfs[14];
        while ((i + 3) <= vinLength) {
            x = f32vs[i];
            y = f32vs[i + 1];
            z = f32vs[i + 2];
            f32vs[i] = x * matfs[0] + y * matfs[4] + z * matfs[8] + matX;
            f32vs[i + 1] = x * matfs[1] + y * matfs[5] + z * matfs[9] + matY;
            f32vs[i + 2] = x * matfs[2] + y * matfs[6] + z * matfs[10] + matZ;
            i += 3;
        }
    }
    this.getParseData = function (bufData, errorFlag) {
        let tarr = null;
        if (bufData != null) {
            tarr = [];
            let fvs32 = null;
            for (let key in bufData) {
                if (bufData[key] != null) {
                    tarr.push(bufData[key].buffer);
                }
            }
            if (fvs32 != null) {
                let atrribSize = fvs32[0];
                let min_x = fvs32[1];
                let min_y = fvs32[2];
                let min_z = fvs32[3];
                let max_x = min_x;
                let max_y = min_y;
                let max_z = min_z;
                let px;
                let py;
                let pz;
                for (let i = 1, len = fvs32.length; i < len; i += atrribSize) {
                    px = fvs32[i];
                    py = fvs32[i + 1];
                    pz = fvs32[i + 2];
                    if (px < min_x) min_x = px;
                    else if (px > max_x) max_x = px;
                    if (py < min_y) min_y = py;
                    else if (py > max_y) max_y = py;
                    if (pz < min_z) min_z = pz;
                    else if (pz > max_z) max_z = pz;
                }
                bufData.min = { x: min_x, y: min_y, z: min_z };
                bufData.max = { x: max_x, y: max_y, z: max_z };
            }
        }
        return { data: bufData, transfers: tarr, errorFlag: errorFlag };
    }
    this.receiveCall = function (data) {
        
        let pdata = data.data;
        selfT.drawMode = 0;
        selfT.vsScale = 1.0;

        selfT.attMap = {};
        selfT.attOpts = { position: {} };
        let errorFlag = 0;
        let dataObj = null;
        if (pdata != null) {
            if (data.endI > data.beginI) {
                let u8arr = new Uint8Array(pdata);
                try {
                    dataObj = selfT.parseData(u8arr, data.beginI, data.endI, data.status);
                } catch (err) {
                    errorFlag = -1;
                    dataObj = null;
                    console.error(err);
                }
            }
        }
        else {
            errorFlag = -2;
            console.error("pdata is null.");
        }
        return selfT.getParseData(dataObj, errorFlag);
    }
}
`;
    this.m_dracoThreadStr = `
function ThreadDraco() {
    console.log("ThreadDraco instance init run ... from code str");

    let m_dataIndex = 0;
    let m_srcuid = 0;
    this.threadIndex = 0;
    let selfT = this;

    this.parser = null;
    this.decoder = { wasmBinary: null };
    let dracoParser = new DracoParser();
    function postDataMessage(data, transfers) {
        let sendData =
        {
            cmd: data.cmd,
            taskCmd: data.taskCmd,
            threadIndex: selfT.threadIndex,
            taskclass: selfT.getTaskClass(),
            srcuid: m_srcuid,
            dataIndex: m_dataIndex,
            data: [101, 0],
            data: data.data
        };
        postMessage(sendData, transfers);
    }
    function initDecoder(data) {
        selfT.decoder["wasmBinary"] = data.data;
        selfT.decoder["onModuleLoaded"] = function (module) {
            selfT.parser = module;
            dracoParser.parser = module;
            console.log("draco init finish...");
            postDataMessage(data, [data.data]);
        };
        DracoDecoderModule(selfT.decoder);
    }
    this.receiveData = function (data) {
        m_srcuid = data.srcuid;
        m_dataIndex = data.dataIndex;
        //console.log("ThreadDraco::receiveData(), data: ", data);

        //console.log("data.taskCmd: ", data.taskCmd);
        switch (data.taskCmd) {
            case "DRACO_PARSE":
                let parseData = dracoParser.receiveCall(data);
                //console.log("XXXXXXXXXXXXXXXX parseData: ", parseData);
                data.data = {module: parseData.data, errorFlag: parseData.errorFlag};
                postDataMessage(data, parseData.transfers);
                break;
            case "DRACO_INIT":
                //console.log("XXXXXXXXXXXXXXXX DRACO_INIT");
                initDecoder(data);
                break;
            default:
                //postDataMessage(data);
                break;
        }
    }
    this.getTaskClass = function () {
        return 1;
    }
}
`;
  }

  getTaskClassId() {
    return 1;
  }

  setListener(l) {
    this.m_listener = l;

    if (this.m_dracoTask != null) {
      this.m_dracoTask.setListener(l);
    }
  }

  initialize(threadTotal = 1) {
    if (this.m_wasmLoader == null) {
      this.m_threadsTotal = threadTotal > 0 ? threadTotal : 1;
      this.m_wasmLoader = new DracoWasmLoader_1.DracoWasmLoader();
      this.m_wasmLoader.load(this.onWasmLoaded, this);
    }
  }

  load(module_url) {
    if (this.m_dracoTask != null) {
      this.m_dracoTask.reset();
    }

    this.loadMeshFile(module_url);
  }

  loadMeshFile(furl) {
    console.log("DracoMeshRawBuilder::loadMeshFile(), url: ", furl);
    let loader = new DracoBufferLoader_1.DracoBufferLoader();
    loader.multiBuffers = this.multiBuffers;
    loader.load(furl, (buffer, param) => {
      this.m_meshBuffer = buffer;
      console.log("loaded a file, buffer: ", buffer);
      console.log("loaded a file, param: ", param);
      this.loadSegments(param);
    });
  }

  loadSegments(param) {
    this.m_param = param;

    if (this.m_dracoTask != null && this.m_param != "") {
      this.m_param = "";
      let s = param.split(',');
      let len = Math.floor(s.length / 2);
      this.m_segs = [];

      for (let i = 0; i < len; ++i) {
        this.m_segs.push(parseInt(s[i * 2]), parseInt(s[i * 2 + 1]));
      }

      this.m_dracoTask.parseSrcData(this.m_meshBuffer, this.m_segs);
    }
  }

  onWasmLoaded(data) {
    console.log("onWasmLoaded exec....");
    this.m_dracoTask = new DracoTask_1.DracoTask(this.threadSystem, this.threadTask, this.m_threadsTotal);
    this.threadSystem.initializeThread(this.m_threadsTotal, data.wapper);
    this.threadSystem.initTaskByCodeStr(this.m_dracoParserStr + this.m_dracoThreadStr, 1, "ThreadDraco"); //  ThreadSystem.Initialize(taskTotal);
    //  ThreadSystem.InitTaskByCodeStr(data.wapper + this.m_dracoParserStr + this.m_dracoThreadStr, 0, "ThreadDraco");

    this.m_dracoTask.setListener(this.m_listener);
    this.m_dracoTask.initTask(this.m_wasmLoader.wasmBin);
    this.loadSegments(this.m_param);
  }

}

exports.DracoMeshRawBuilder = DracoMeshRawBuilder;

/***/ }),

/***/ "56e1":
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

class DracoSendData {
  constructor() {
    this.data = null;
    this.beginI = 0;
    this.endI = 0; // 多线程任务分类id

    this.taskclass = -1; // 多线程任务实例id

    this.srcuid = -1; // IThreadSendData数据对象在自身队列中的序号

    this.dataIndex = -1; // 发送给thread处理的数据对象

    this.sendData = null; //

    this.transfers = null; // sendStatus 值为 -1 表示没有加入数据池等待处理
    //            值为 0 表示已经加入数据池正等待处理
    //            值为 1 表示已经发送给worker

    this.sendStatus = -1;
  } // 按照实际需求构建自己的数据(sendData和transfers等)


  buildThis(transferEnabled) {
    if (this.sendData != null) {
      this.sendData.taskCmd = this.taskCmd;
      this.sendData.taskclass = this.taskclass;
      this.sendData.srcuid = this.srcuid;
      this.sendData.dataIndex = this.dataIndex;
      this.sendData.data = this.data;
      this.sendData.beginI = this.beginI;
      this.sendData.endI = this.endI;
    } else {
      this.sendData = {
        taskCmd: this.taskCmd,
        taskclass: this.taskclass,
        srcuid: this.srcuid,
        dataIndex: this.dataIndex,
        data: this.data,
        beginI: this.beginI,
        endI: this.endI
      };
    } //console.log("transferEnabled: "+transferEnabled);


    if (transferEnabled) {
      if (this.data != null) {
        this.transfers = [this.data];
      } //console.log("DracoSendData::buildSendData(), this.sendData: ", this.sendData);

    }
  }

  reset() {
    this.transfers = null;

    if (this.sendData != null) {
      this.sendData.data = null;
    }

    this.data = null;
    this.sendStatus = -1;
  }

  static GetFreeId() {
    if (DracoSendData.m_freeIdList.length > 0) {
      return DracoSendData.m_freeIdList.pop();
    }

    return -1;
  }

  static Create() {
    let sd = null;
    let index = DracoSendData.GetFreeId(); //console.log("DracoSendData::Create(), DracoSendData.m_unitList.length: "+DracoSendData.m_unitList.length);

    if (index >= 0) {
      sd = DracoSendData.m_unitList[index];
      sd.dataIndex = index;
      DracoSendData.m_unitFlagList[index] = DracoSendData.S_FLAG_BUSY;
    } else {
      sd = new DracoSendData();
      DracoSendData.m_unitList.push(sd);
      DracoSendData.m_unitFlagList.push(DracoSendData.S_FLAG_BUSY);
      sd.dataIndex = DracoSendData.m_unitListLen;
      DracoSendData.m_unitListLen++;
    }

    return sd;
  }

  static Restore(psd) {
    if (psd != null && DracoSendData.m_unitFlagList[psd.dataIndex] == DracoSendData.S_FLAG_BUSY) {
      let uid = psd.dataIndex;
      DracoSendData.m_freeIdList.push(uid);
      DracoSendData.m_unitFlagList[uid] = DracoSendData.S_FLAG_FREE;
      psd.reset();
    }
  }

  static RestoreByUid(uid) {
    if (uid >= 0 && DracoSendData.m_unitFlagList[uid] == DracoSendData.S_FLAG_BUSY) {
      DracoSendData.m_freeIdList.push(uid);
      DracoSendData.m_unitFlagList[uid] = DracoSendData.S_FLAG_FREE;
      DracoSendData.m_unitList[uid].reset();
    }
  }

} //


DracoSendData.S_FLAG_BUSY = 1;
DracoSendData.S_FLAG_FREE = 0;
DracoSendData.m_unitFlagList = [];
DracoSendData.m_unitListLen = 0;
DracoSendData.m_unitList = [];
DracoSendData.m_freeIdList = [];
exports.DracoSendData = DracoSendData;

class DracoTask {
  constructor(threadSystem, threadTask, taskTotal) {
    this.m_threadTask = null;
    this.m_threadSystem = null;
    this.m_enabled = true;
    this.m_listener = null;
    this.m_modules = [];
    this.m_srcBuf = null;
    this.m_segs = null;
    this.m_segIndex = 0;
    threadTask.setListener(this);
    this.m_threadSystem = threadSystem;
    this.m_threadTask = threadTask;
    DracoTask.s_taskTotal = taskTotal;
  }

  reset() {
    this.m_threadTask.reset();
    this.m_modules = [];
    this.m_segIndex = 0;
  }

  setListener(l) {
    this.m_listener = l;
  }

  initCurrTask(wasmBin, index = 0) {
    console.log("initCurrTask, DRACO_INIT.");
    let sd = DracoSendData.Create();
    sd.taskCmd = "DRACO_INIT";
    sd.data = wasmBin;
    this.m_threadTask.nomalizeData(sd);
    this.m_enabled = false;
    this.m_threadSystem.sendDataToWorkerAt(index, sd);
  }

  initTask(wasmBin) {
    if (wasmBin != null && !DracoTask.s_inited && this.m_enabled) {
      this.initCurrTask(wasmBin);
    }
  }

  parseData(bufData, beginI, endI) {
    if (bufData != null && DracoTask.s_inited) {
      console.log("parseData, DRACO_PARSE.");
      let sd = DracoSendData.Create();
      sd.taskCmd = "DRACO_PARSE";
      sd.data = bufData;
      sd.beginI = beginI;
      sd.endI = endI;
      this.m_threadTask.addTaskData(sd);
      this.m_threadSystem.addTaskData(sd);
    }
  }

  parseNextSeg() {
    if (DracoTask.s_inited && this.m_enabled && this.m_segs != null && this.m_segIndex < this.m_segs.length) {
      for (let i = 0; i < DracoTask.s_taskTotal; i++) {
        if (this.m_segIndex < this.m_segs.length) {
          let buf = this.m_srcBuf.slice(this.m_segs[this.m_segIndex], this.m_segs[this.m_segIndex + 1]);
          console.log("parseNextSeg send.");
          this.parseData(buf, 0, buf.byteLength);
          this.m_segIndex += 2;
        } else {
          break;
        }
      }
    }
  }

  parseSrcData(bufData, segs) {
    if (bufData != null && segs != null) {
      this.m_segIndex = 0;
      this.m_srcBuf = bufData;
      this.m_segs = segs;
      this.m_threadTask.setParseTotal(segs.length / 2);
      this.parseNextSeg();
    }
  } // return true, task finish; return false, task continue...


  parseDone(data, flag) {
    //console.log("DracoTask::parseDone(), data.taskCmd: ", data.taskCmd);
    console.log("DracoTask::parseDone(), data: ", data);
    DracoSendData.RestoreByUid(data.dataIndex);

    switch (data.taskCmd) {
      case "DRACO_INIT":
        this.m_enabled = true;
        DracoTask.s_inited = true;

        if (DracoTask.s_initedTaskTotal >= DracoTask.s_taskTotal) {
          this.m_wasmBin = data.data;

          if (this.m_segIndex == 0 && this.m_segs != null && this.m_segs.length > 0) {
            this.parseNextSeg();
          }
        } else {
          this.initCurrTask(data.data, DracoTask.s_initedTaskTotal);
        }

        DracoTask.s_initedTaskTotal++;
        break;

      case "DRACO_PARSE":
        this.m_enabled = true;
        this.m_threadTask.increaseParseIndex();
        this.m_modules.push(data.data.module);

        if (this.m_listener != null) {
          console.log("this.m_threadTask.isFinished(): ", this.m_threadTask.isFinished());

          if (this.m_threadTask.isFinished()) {
            this.m_listener.dracoParseFinish(this.m_modules, this.m_threadTask.getParseTotal());
          } else {
            this.parseNextSeg();
            this.m_listener.dracoParse(data.data.module, this.m_threadTask.getParsedIndex(), this.m_threadTask.getParseTotal());
          }
        }

        break;

      default:
        break;
    }

    return true;
  }

  getWorkerSendDataAt(i) {
    return null;
  }

  destroy() {
    if (this.m_threadTask.getUid() > 0) {
      this.m_threadTask.destroy();
    }

    this.m_threadSystem = null;
    this.m_threadTask = null;
  }

  getTaskClass() {
    return 0;
  }

}

DracoTask.s_inited = false;
DracoTask.s_taskTotal = 1;
DracoTask.s_initedTaskTotal = 1;
exports.DracoTask = DracoTask;

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

/***/ "8da0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A 3D APP Box view Demo
 */

class AppBase {
  constructor() {}

  getSystemModuleInstance(moduleNS, loadedFunc = null) {
    let pwindow = window;
    var VoxCore = pwindow["VoxCore"];
    let loader = VoxCore["voxAppModuleLoader"];
    return loader.getSystemModuleInstance(moduleNS, () => {
      let ins = VoxCore[moduleNS + "Ins"];

      if (loadedFunc != null) {
        loadedFunc(ins);
      }
    });
  }

  getModuleInstance(moduleNS, loadedFunc = null, param = null) {
    let pwindow = window;
    var VoxCore = pwindow["VoxCore"];
    let loader = VoxCore["voxAppModuleLoader"];
    return loader.getModuleInstance(moduleNS, () => {
      let ins;

      if (param != null) {
        ins = new VoxCore[moduleNS + "App"](param);
      } else {
        ins = new VoxCore[moduleNS + "App"]();
      }

      ins.initialize(VoxCore);

      if (loadedFunc != null) {
        loadedFunc(ins);
      }
    });
  }

}

exports.AppBase = AppBase;

/***/ }),

/***/ "8f5b":
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

const App_1 = __webpack_require__("ec02");

VoxCore["dracoApp"] = App_1.App;

/***/ }),

/***/ "da4e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class DracoBufferLoader {
  constructor() {
    this.m_info = "";
    this.m_buffer = null;
    this.m_loadStatus = 0;
    this.paramSuffix = ".pmd";
    this.multiBuffers = true;
  }

  load(purl, callback) {
    let selfT = this;

    if (this.multiBuffers) {
      let si = purl.lastIndexOf(".");
      let infoUrl = purl.slice(0, si) + this.paramSuffix;
      this.loadParam(infoUrl, callback);
    } else {
      ++selfT.m_loadStatus;
    }

    const reader = new FileReader();

    reader.onload = e => {
      ++selfT.m_loadStatus;
      selfT.m_buffer = reader.result;

      if (selfT.m_loadStatus > 1) {
        if (!this.multiBuffers) {
          selfT.m_info = "0," + selfT.m_buffer.byteLength;
        }

        callback(selfT.m_buffer, selfT.m_info);
      }
    };

    const request = new XMLHttpRequest();
    request.open("GET", purl, true);
    request.responseType = "blob";

    request.onload = () => {
      //console.log("request.readyState: ",request.readyState,"request.response: ",request.response);
      reader.readAsArrayBuffer(request.response);
    };

    request.send();
  }

  loadParam(purl, callback) {
    let selfT = this;
    let pr = new XMLHttpRequest();
    pr.open('GET', purl);

    pr.onload = function (p) {
      ++selfT.m_loadStatus;
      selfT.m_info = pr.responseText;

      if (selfT.m_loadStatus > 1) {
        callback(selfT.m_buffer, selfT.m_info);
      }
    };

    pr.send();
  }

}

exports.DracoBufferLoader = DracoBufferLoader;

/***/ }),

/***/ "ec02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const AppBase_1 = __webpack_require__("8da0");

const DracoMeshRawBuilder_1 = __webpack_require__("52e5"); //  import { DeomScene } from "./DeomScene";

/**
 * draco module
 */


class App extends AppBase_1.AppBase {
  //private m_demoScene: DeomScene = new DeomScene();
  constructor() {
    super();
    this.m_initFlag = true;
    this.m_threadModule = null;
    this.m_threadModuleLoadFlag = true;
    this.m_dracoRawTask = null;
    this.m_dracoMeshBuilder = new DracoMeshRawBuilder_1.DracoMeshRawBuilder();
    this.m_dracoLoaderListener = null;
    this.m_url = "";
  }

  load(url) {
    this.m_url = url;

    if (this.m_dracoMeshBuilder != null && this.m_url != null && this.m_url != "") {
      this.m_dracoMeshBuilder.load(this.m_url);
    }
  }

  setListener(l) {
    this.m_dracoLoaderListener = l;

    if (this.m_dracoMeshBuilder != null) {
      this.m_dracoMeshBuilder.setListener(l);
    }
  }

  initThread() {
    if (this.m_threadModuleLoadFlag) {
      this.m_threadModuleLoadFlag = false;
      let moduleNS = "threadFuncs";
      this.getSystemModuleInstance(moduleNS, ins => {
        this.m_threadModule = ins;

        if (this.m_dracoRawTask == null) {
          console.log("create thread system task classId " + this.m_dracoMeshBuilder.getTaskClassId());
          this.m_dracoRawTask = this.m_threadModule.createThreadSystemTask(this.m_dracoMeshBuilder.getTaskClassId());
          this.m_dracoMeshBuilder.threadSystem = this.m_threadModule;
          this.m_dracoMeshBuilder.threadTask = this.m_dracoRawTask;
          this.m_dracoMeshBuilder.initialize(2);
          this.m_dracoMeshBuilder.setListener(this.m_dracoLoaderListener);

          if (this.m_dracoLoaderListener != null && this.m_url != null && this.m_url != "") {
            this.m_dracoMeshBuilder.load(this.m_url);
          }
        }
      });
    }
  }

  initialize(module) {
    if (this.m_initFlag) {
      console.log("initialize draco module...");
      this.m_initFlag = false;
      this.initThread();
      /*
      // fot test
      this.m_demoScene.initialize(module, false);
      this.setListener(this.m_demoScene);
      let url: string = "static/assets/modules/loveass.rawmd";
      this.load(url);
      //*/
    }
  }

  getTaskClassId() {
    return this.m_dracoMeshBuilder.getTaskClassId();
  }
  /**
   * running per frame
   */


  run() {//this.m_demoScene.run();
  }

  getModuleName() {
    return "draco";
  }

  getModuleClassName() {
    return "dracoApp";
  }

  getRuntimeType() {
    return "default";
  }

}

exports.App = App;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8f5b");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ })

/******/ });
});