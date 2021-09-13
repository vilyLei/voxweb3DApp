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

/***/ "2ddb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class ThreadTask {
  constructor() {
    this.m_uid = -1;
    this.m_parseIndex = 0;
    this.m_parseTotal = 0;

    if (ThreadTask.s_freeList == null) {
      ThreadTask.s_taskList = new Array(ThreadTask.s_maxTasksTotal);
      ThreadTask.s_freeList = new Array(ThreadTask.s_maxTasksTotal);

      for (let i = 0, len = ThreadTask.s_freeList.length; i < len; ++i) {
        ThreadTask.s_freeList[i] = i;
      }
    }

    if (ThreadTask.s_freeList.length > 0) {
      this.m_uid = ThreadTask.s_freeList.pop();
      ThreadTask.s_taskList[this.m_uid] = this;
    } else {
      throw Error("Create ThreadTask too much !!!");
    }
  }

  static GetTaskByUid(uid) {
    if (uid < ThreadTask.s_maxTasksTotal && uid >= 0) {
      return ThreadTask.s_taskList[uid];
    }

    return null;
  } // 重新关联一个 DetachTask 操作之后的 task


  static AttachTask(task) {
    if (task.m_uid < 0) {
      if (ThreadTask.s_freeList.length > 0) {
        task.m_uid = ThreadTask.s_freeList.pop();
        ThreadTask.s_taskList[task.m_uid] = task;
        return true;
      }
    }

    return false;
  } // detach a task, 使之不会再被多任务系统调用


  static DetachTask(task) {
    if (task.m_uid >= 0) {
      ThreadTask.s_taskList[task.m_uid] = null;
      ThreadTask.s_freeList.push(task.m_uid);
      task.m_uid = -1;
    }
  } // 被子类覆盖后便能实现更细节的相关功能


  reset() {
    this.m_parseIndex = 0;
  }

  setParseTotal(total) {
    this.m_parseTotal = total;
  }

  isFinished() {
    return this.m_parseIndex >= this.m_parseTotal;
  }

  getParsedTotal() {
    return this.m_parseIndex >= this.m_parseTotal ? this.m_parseTotal : this.m_parseIndex + 1;
  }

  getParseTotal() {
    return this.m_parseTotal;
  }

  getParsedIndex() {
    return this.m_parseIndex;
  }

  getUid() {
    return this.m_uid;
  } // 必须被覆盖, return true, task finish; return false, task continue...


  parseDone(data, flag) {
    throw Error("function parseDone(), Need Override !");
    return true;
  }

  nomalizeData(data) {
    if (this.m_uid >= 0) {
      data.srcuid = this.m_uid;
      data.taskclass = this.getTaskClass();
    } else {
      throw Error("Need attach this task !");
    }
  }

  addData(data) {
    if (this.m_uid >= 0) {
      data.srcuid = this.m_uid;
      data.taskclass = this.getTaskClass(); //ThrDataPool.AddData(data);
    } else {
      throw Error("Need attach this task !");
    }
  }

  getWorkerSendDataAt(i) {
    throw Error("function getWorkerSendDataAt(), Need Override !");
    return null;
  } // 必须被覆盖


  getTaskClass() {
    throw Error("function getTaskClass(), Need Override !");
    return -1;
  }

  destroy() {
    ThreadTask.DetachTask(this);
  }

} // 同时处在运行时状态的最大任务数量: 512个


ThreadTask.s_maxTasksTotal = 512;
ThreadTask.s_taskList = null;
ThreadTask.s_freeList = null;
exports.default = ThreadTask;

/***/ }),

/***/ "32ff":
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

const ThreadFuncs_1 = __webpack_require__("9b34");

VoxCore["threadFuncs"] = ThreadFuncs_1.ThreadFuncs;

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

/***/ "51f0":
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

const ThreadCMD_1 = __importDefault(__webpack_require__("5fee"));

const ThreadTask_1 = __importDefault(__webpack_require__("2ddb"));

class ThreadBase {
  constructor() {
    this.m_uid = -1;
    this.m_worker = null;
    this.m_initTasks = [];
    this.m_taskfs = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
    this.m_free = false;
    this.m_enabled = false;
    this.m_initBoo = true;
    this.autoSendData = false;
    this.pool = null;
    this.unlock = true;
    this.m_uid = ThreadBase.s_uid++;
  }

  getUid() {
    return this.m_uid;
  }

  isEnabled() {
    return this.m_enabled;
  }

  isFree() {
    return this.m_free && this.unlock;
  }

  thisSendDataTo() {
    this.pool.sendDataTo(this);
  } // send parse data to thread


  sendDataTo(thrData) {
    if (this.m_free && this.m_taskfs[thrData.taskclass] > 0) {
      //console.log("sendDataTo...,this.m_free: "+this.m_free,thrData+",uid: "+this.getUid());
      thrData.buildThis(true);
      thrData.sendData.cmd = ThreadCMD_1.default.DATA_PARSE;

      if (thrData.transfers != null) {
        this.m_worker.postMessage(thrData.sendData, thrData.transfers);
      } else {
        this.m_worker.postMessage(thrData.sendData);
      }

      thrData.sendStatus = 1;
      this.m_free = false;
    }
  }

  initTaskByURL(ns, taskclass, moduleName) {
    //console.log("initTask, this.m_initTasks.length: "+this.m_initTasks.length);
    if (taskclass >= 0 && taskclass < this.m_taskfs.length) {
      if (this.m_taskfs[taskclass] < 0) {
        this.m_taskfs[taskclass] = 0;
        let task = {
          taskName: ns,
          taskclass: taskclass,
          inited: false,
          type: 0,
          moduleName: moduleName
        };
        this.m_initTasks.push(task);
      }
    }
  }

  initTaskByCodeStr(codeStr, taskclass, moduleName) {
    //console.log("initTask, this.m_initTasks.length: "+this.m_initTasks.length);
    if (taskclass >= 0 && taskclass < this.m_taskfs.length) {
      if (this.m_taskfs[taskclass] < 0) {
        this.m_taskfs[taskclass] = 0;
        let task = {
          srccode: codeStr,
          taskclass: taskclass,
          inited: false,
          type: 2,
          moduleName: moduleName
        };
        this.m_initTasks.push(task);
      }
    }
  }

  updateInitTask() {
    //console.log("###>>>> this.m_initTasks.length: "+this.m_initTasks.length);
    if (this.m_initTasks.length > 0) {
      this.m_free = false;
      let task = this.m_initTasks.pop(); // type 为0 表示task js 文件是外部加载的, 如果为 1 则表示是由运行时字符串构建的任务可执行代码

      this.m_worker.postMessage({
        cmd: ThreadCMD_1.default.INIT_TASK,
        threadIndex: this.getUid(),
        param: task
      });
    }
  }

  receiveData(data) {
    //let receiveBoo:boolean = true;
    this.m_free = true;
    let task = ThreadTask_1.default.GetTaskByUid(data.srcuid); //console.log("task != null: "+(task != null)+", data.srcuid: "+data.srcuid,", thread uid: "+this.m_uid);

    let finished = true;

    if (task != null) {
      finished = task.parseDone(data, -1);
    } //  if(finished)
    //  {
    //  }


    this.updateInitTask(); // 下面这个逻辑要慎用，用了可能会对时间同步(例如帧同步)造成影响

    if (this.autoSendData) {
      this.thisSendDataTo();
    }
  }

  initialize(blob) {
    if (this.m_initBoo && blob != null && this.m_worker == null) {
      this.m_initBoo = false;
      let worker = new Worker(URL.createObjectURL(blob));
      this.m_worker = worker;
      let selfT = this;

      this.m_worker.onmessage = function (evt) {
        //console.log("Main worker recieve data, event.data: ",evt.data,",uid: "+selfT.m_uid);
        let data = evt.data; //console.log("Main Worker received worker cmd: "+data.cmd);

        switch (data.cmd) {
          case ThreadCMD_1.default.DATA_PARSE:
            selfT.receiveData(data);
            break;

          case ThreadCMD_1.default.THREAD_INIT:
            worker.postMessage({
              cmd: ThreadCMD_1.default.INIT_PARAM,
              threadIndex: selfT.getUid()
            });
            break;

          case ThreadCMD_1.default.INIT_TASK:
            selfT.m_taskfs[data.taskclass] = 1;
            selfT.m_free = true; //console.log("Main Worker INIT_TASK selfT.m_taskfs: ",selfT.m_taskfs);

            selfT.updateInitTask();
            break;

          case ThreadCMD_1.default.INIT_PARAM:
            selfT.m_free = true;
            selfT.m_enabled = true; //console.log("Main worker INIT_PARAM.");

            selfT.updateInitTask();
            break;

          default:
            break;
        }
      };
    }
  }

}

ThreadBase.s_uid = 0;
exports.default = ThreadBase;

/***/ }),

/***/ "5fee":
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

class ThreadCMD {}

ThreadCMD.DATA_PARSE = 3501;
ThreadCMD.THREAD_INIT = 3601;
ThreadCMD.INIT_TASK = 3701;
ThreadCMD.INIT_PARAM = 3801;
exports.default = ThreadCMD;

/***/ }),

/***/ "6ee0":
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
}); //import IThreadBase = IThreadBaseT.thread.base.IThreadBase;

class ThrDataPool {
  constructor() {
    this.m_dataList = []; // wait calc data queue

    this.m_waitList = [];
    this.m_dataTotal = 0;
    this.m_dataHaveTotal = 0;
    this.m_startupFlag = 0;
  }

  sendDataTo(thread) {
    if (this.m_dataTotal > 0) {
      let data = null; // 等待队列有数据，就优先发送这个队列里面的数据

      let len = this.m_waitList.length;

      if (len > 0) {
        data = this.m_waitList[0];
        thread.sendDataTo(data);

        if (data.sendStatus == 1) {
          this.m_dataTotal--;
          len--;
          this.m_waitList.shift();
          return true;
        }
      }

      len = this.m_dataTotal - len;

      if (len > 0) {
        data = this.m_dataList.shift();
        thread.sendDataTo(data);

        if (data.sendStatus == 1) {
          this.m_dataTotal--;
          return true;
        } else {
          // 因为相关计算模块还没准备好,需先加入等待队列
          this.m_waitList.push(data);
        }
      }
    }

    return false;
  }

  addData(thrData) {
    if (thrData.sendStatus < 0) {
      thrData.sendStatus = 0;
      this.m_dataTotal++;
      this.m_dataHaveTotal++;
      this.m_startupFlag = 1;
      this.m_dataList.push(thrData);
    } else {
      console.error("thrData.sendStatus value is " + thrData.sendStatus);
    }
  }

  getDataTotal() {
    return this.m_dataTotal;
  }

  isEnabled() {
    //console.log(this.m_dataHaveTotal,this.m_dataTotal,this.m_startupFlag);
    return this.m_dataTotal * this.m_startupFlag > 0;
  }

  isStartup() {
    return this.m_startupFlag > 0;
  }

}

exports.default = ThrDataPool;

/***/ }),

/***/ "845e":
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

const Thrcode_1 = __importDefault(__webpack_require__("ecf9"));

const ThrDataPool_1 = __importDefault(__webpack_require__("6ee0"));

const ThreadBase_1 = __importDefault(__webpack_require__("51f0")); //import RendererDevice = RendererDeviceT.vox.render.RendererDevice;


class ThreadSystem {
  static SendDataToWorkerAt(i, sendData) {
    if (i >= 0 && i < ThreadSystem.s_maxThreadsTotal) {
      if (i >= ThreadSystem.s_threadsTotal) {
        ThreadSystem.CreateThread();
      }

      if (sendData != null && sendData.sendStatus < 0) {
        sendData.sendStatus = 0;

        if (ThreadSystem.s_threads[i].isFree()) {
          ThreadSystem.s_threads[i].sendDataTo(sendData);
        } else {
          ThreadSystem.s_specList.push(sendData);
          ThreadSystem.s_specIndices.push(i);
        }
      }
    }
  }

  static Run() {
    if (ThreadSystem.GetThreadEnabled()) {
      let specList = ThreadSystem.s_specList;
      let tot = specList.length;
      let thrTot = ThreadSystem.s_threadsTotal;
      let i = 0;

      for (; i < tot; ++i) {
        let j = ThreadSystem.s_specIndices[i];

        if (ThreadSystem.s_threads[j].isFree()) {
          ThreadSystem.s_threads[j].sendDataTo(specList[i]);
          specList.splice(i, 1);
          ThreadSystem.s_specIndices.splice(i, 1);
          i--;
          tot--;
          thrTot--;
        }

        if (thrTot < 1) {
          break;
        }
      }

      if (ThreadSystem.s_pool.isEnabled()) {
        tot = 0;

        for (i = 0; i < ThreadSystem.s_threadsTotal; ++i) {
          //console.log("ThreadSystem.s_threads["+i+"].isFree(): ",ThreadSystem.s_threads[i].isFree(),ThreadSystem.s_pool.isEnabled());
          if (ThreadSystem.s_pool.isEnabled()) {
            if (ThreadSystem.s_threads[i].isFree()) {
              ThreadSystem.s_pool.sendDataTo(ThreadSystem.s_threads[i]);
            }

            if (ThreadSystem.s_threads[i].isFree()) {
              ++tot;
            }
          }
        }

        if (tot < 1 && ThreadSystem.s_pool.isEnabled()) {
          ThreadSystem.CreateThread();
        }
      }
    }
  }

  static AddData(thrData) {
    if (thrData != null && thrData.srcuid >= 0) {
      ThreadSystem.s_pool.addData(thrData);
    }
  }

  static LockThreadAt(i) {
    ThreadSystem.s_threads[i].unlock = false;
  }

  static UnlockThreadAt(i) {
    ThreadSystem.s_threads[i].unlock = true;
  }

  static GetAFreeThread() {
    for (let i = 0; i < ThreadSystem.s_threadsTotal; ++i) {
      if (ThreadSystem.s_threads[i].isFree()) {
        return ThreadSystem.s_threads[i];
      }
    }

    return null;
  }

  static GetMaxThreadsTotal() {
    return ThreadSystem.s_maxThreadsTotal;
  } // 当前系统是否开启 worker multi threads


  static SetThreadEnabled(boo) {
    if (ThreadSystem.s_thrSupportFlag > 0) ThreadSystem.s_thrSupportFlag = boo ? 2 : 1;
    RendererDevice_1.default.SetThreadEnabled(boo);
  }

  static GetThreadEnabled() {
    return RendererDevice_1.default.GetThreadEnabled();
  } // runtime support worker multi thrads yes or no


  static IsSupported() {
    if (ThreadSystem.s_thrSupportFlag > 0) {
      return ThreadSystem.s_thrSupportFlag == 2;
    }

    let boo = typeof Worker !== "undefined" && typeof Blob !== "undefined";
    ThreadSystem.s_thrSupportFlag = boo ? 2 : 1;
    RendererDevice_1.default.SetThreadEnabled(boo);
    return boo;
  }

  static CreateThread() {
    if (ThreadSystem.s_threadsTotal < ThreadSystem.s_maxThreadsTotal) {
      let thread = new ThreadBase_1.default();
      thread.pool = ThreadSystem.s_pool;
      thread.initialize(ThreadSystem.s_codeBlob);
      ThreadSystem.s_threads[ThreadSystem.s_threadsTotal] = thread;
      console.log("Create Thread(" + ThreadSystem.s_threadsTotal + ")");
      ThreadSystem.s_threadsTotal++;
      let task;

      for (let i = 0, len = ThreadSystem.s_tasks.length; i < len; ++i) {
        task = ThreadSystem.s_tasks[i];

        if (task != null) {
          switch (task.type) {
            case 0:
              thread.initTaskByURL(task.taskName, task.taskclass, task.moduleName);
              break;

            case 2:
              thread.initTaskByCodeStr(task.srccode, task.taskclass, task.moduleName);
              break;

            default:
              break;
          }
        }
      }
    }
  }

  static InitTaskByURL(ns, taskclass, moduleName = "") {
    if (ns != "" && taskclass >= 0 && taskclass < ThreadSystem.s_tasks.length) {
      let task = ThreadSystem.s_tasks[taskclass];

      if (task == null) {
        task = {
          taskName: ns,
          taskclass: taskclass,
          type: 0,
          threads: [],
          moduleName: moduleName
        };
        ThreadSystem.s_tasks[taskclass] = task;

        for (let i = 0; i < ThreadSystem.s_threadsTotal; ++i) {
          ThreadSystem.s_threads[i].initTaskByURL(ns, taskclass, moduleName);
        }
      }
    }
  }

  static InitTaskByCodeStr(codestr, taskclass, moduleName = "") {
    if (codestr != "" && taskclass >= 0 && taskclass < ThreadSystem.s_tasks.length) {
      let task = ThreadSystem.s_tasks[taskclass];

      if (task == null) {
        task = {
          srccode: codestr,
          type: 2,
          taskclass: taskclass,
          threads: [],
          moduleName: moduleName
        };
        ThreadSystem.s_tasks[taskclass] = task; //s_threadsTotal

        for (let i = 0; i < ThreadSystem.s_threadsTotal; ++i) {
          ThreadSystem.s_threads[i].initTaskByCodeStr(codestr, taskclass, moduleName);
        }
      }
    }
  }
  /**
   * @param maxThreadsTotal 最大子线程数量
   */


  static Initialize(maxThreadsTotal, codeStr = "") {
    if (ThreadSystem.s_initBoo) {
      if (ThreadSystem.GetThreadEnabled() && ThreadSystem.IsSupported()) {
        //console.log("ThreadCore.CodeStr: \n",ThreadCore.CodeStr);
        let bolb = new Blob([codeStr + Thrcode_1.default.CodeStr]);
        if (maxThreadsTotal < 1) maxThreadsTotal = 1;
        ThreadSystem.s_codeBlob = bolb;
        ThreadSystem.s_maxThreadsTotal = maxThreadsTotal;
        ThreadSystem.CreateThread();
      }

      ThreadSystem.s_initBoo = false;
    }
  }

} // allow ThreadSystem initialize yes or no


ThreadSystem.s_initBoo = true;
ThreadSystem.s_maxThreadsTotal = 0;
ThreadSystem.s_thrSupportFlag = -1;
ThreadSystem.s_codeBlob = null;
ThreadSystem.s_tasks = [null, null, null, null, null, null, null, null];
ThreadSystem.s_threads = [null, null, null, null, null, null, null, null];
ThreadSystem.s_threadsTotal = 0;
ThreadSystem.s_pool = new ThrDataPool_1.default();
ThreadSystem.s_specList = [];
ThreadSystem.s_specIndices = [];
exports.default = ThreadSystem;

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

/***/ "9b34":
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

const ThreadSystem_1 = __importDefault(__webpack_require__("845e"));

var pwindow = window;

if (pwindow["VoxCore"] == undefined) {
  pwindow["VoxCore"] = {};
}

var VoxCore = pwindow["VoxCore"];
VoxCore["ThreadSystem"] = ThreadSystem_1.default;

class ThreadFuncs {
  constructor() {}

  initialize(pmodule) {
    let flag = false;

    if (flag) {}

    console.log("ThreadFuncs::initialize(),initializeThread......");
  }

  initializeThread(threadsTotal) {
    if (threadsTotal < 1) threadsTotal = 1;else if (threadsTotal > 6) threadsTotal = 6;
    ThreadSystem_1.default.Initialize(threadsTotal);
  }

  initTaskByURL(url, classId) {
    ThreadSystem_1.default.InitTaskByURL(url, classId);
  }

  addTaskData(url, classId) {
    ThreadSystem_1.default.InitTaskByURL(url, classId);
  }

  run() {
    ThreadSystem_1.default.Run();
  }

  getModuleName() {
    return "threadFuncs";
  }

  getModuleClassName() {
    return "threadFuncs";
  }

  getRuntimeType() {
    return "default";
  }

}

exports.ThreadFuncs = ThreadFuncs;

/***/ }),

/***/ "ecf9":
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

class ThreadCore {} // worker task manage code


ThreadCore.CodeStr = `
let scriptDir = "";
let ENV_IS_WORKER = typeof importScripts === 'function';
if (ENV_IS_WORKER) {
    scriptDir = self.location.href;
}
var baseUrl = scriptDir.slice(0, scriptDir.lastIndexOf("/") + 1);
var k = baseUrl.indexOf("http://");
if (k < 0) {
    k = baseUrl.indexOf("https://");
}
if (k < 0) k = 0;
baseUrl = baseUrl.slice(k);
self.__$TaskSlot = new Array(512);
self.__$TaskSlot.fill(null);
self.TaskSTList = new Array(512);
self.TaskSTList.fill(0);
let taskSlot = self.__$TaskSlot;
let taskSTList = self.TaskSTList;

function initializeExternModule(ext_module) {
    if(ext_module != null && ext_module.getTaskClass != undefined) {
        self.__$TaskSlot[ext_module.getTaskClass()] = ext_module;
        const INIT_TASK = 3701;
        postMessage({cmd:INIT_TASK,taskclass:ext_module.getTaskClass()});
    }
}

function ThreadCore() {
    let m_initBoo = true;
    let m_threadIndex = 0;
    this.isWorker = typeof (postMessage) !== "undefined";

    let selfT = this;

    const DATA_PARSE = 3501;
    const THREAD_INIT = 3601;
    const INIT_TASK = 3701;
    const INIT_PARAM = 3801;
    this.receiveData = function (evt) {
        /////////////////////////////////////////////////// receive data from Main Worker ///////////////////////////////////
        //console.log("receive main data in worker,data: ",evt.data);
        let data = evt.data;
        switch (data.cmd) {
            case DATA_PARSE:
                // taskclass
                data.threadIndex = m_threadIndex;
                let ins = taskSlot[data.taskclass];
                if (ins) {
                    ins.receiveData(data);
                }
                break;
            case INIT_TASK:
                let param = data.param;
                //console.log("worker INIT_TASK param.type: ", param.type);
                switch (param.type) {
                    case 0:
                        if (taskSTList[param.taskclass] < 1) {
                            taskSTList[param.taskclass] = 1;
                            let js_url = param.taskName;
                            let urlEnabled = param.moduleName != undefined && param.moduleName != "";
                            if(!urlEnabled) {
                                let si = param.taskName.lastIndexOf(".");
                                if(si > 0) {
                                    param.taskName = param.taskName.slice(0,si);
                                }
                                js_url = baseUrl + param.taskName + ".js";
                            }
                            //console.log("importScripts worker js_url: " + js_url);
                            importScripts(js_url);
                        }
                        break;
                    case 1:
                        if (taskSTList[param.taskclass] < 1) {
                            taskSTList[param.taskclass] = 1;
                            // 代码直接在worker构造的blob中了,直接需要构建相关算法实例
                        }
                        break;
                    case 2:
                        if (taskSTList[param.taskclass] < 1) {
                            taskSTList[param.taskclass] = 1;
                            // 代码直接在字符串中, 并且是后续追加的
                            eval(param.srccode);
                            if (param.moduleName != undefined && param.moduleName != "") {
                                var mins = "workerIns_" + param.moduleName;
                                var tmcodeStr = "var " + mins + " = new " + param.moduleName + "();";
                                tmcodeStr += "\\ninitializeExternModule(" + mins + ");";
                                eval(tmcodeStr);
                                //  let blob = new Blob([tmcodeStr]);
                                //  importScripts(URL.createObjectURL(blob));
                            }
                        }
                        break;
                    default:
                        break;
                }
                if (data.type < 1) {
                    if (taskSTList[param.taskclass] < 1) {
                        taskSTList[param.taskclass] = 1;
                        let js_url = baseUrl + param.taskName + ".js";
                        console.log("worker js_url: " + js_url);
                        importScripts(js_url);
                    }
                }
                else {
                    if (taskSTList[param.taskclass] < 1) {
                        taskSTList[param.taskclass] = 1;
                    }
                }
                break;
            case INIT_PARAM:
                if (m_initBoo) {
                    m_threadIndex = data.threadIndex;

                    console.log("thread init data.threadIndex: " + m_threadIndex);
                    m_initBoo = false;
                    postMessage({ cmd: INIT_PARAM, threadIndex: m_threadIndex });
                }
                break;
            default:
                break;
        }
    }
    this.initialize = function () {
        console.log("###worker ThreadCore::initialize()...");
        //console.log("self.__$TaskSlot: ",self.__$TaskSlot);
        if (typeof (postMessage) !== "undefined") {
            self.addEventListener(
                "message",
                selfT.receiveData,
                false
            );
            const THREAD_INIT = 3601;
            postMessage({ cmd: THREAD_INIT });
        }
    }
}
//  console.log("worker run begin ...");
//  console.log("scriptDir: " + scriptDir);
//  console.log("baseUrl: " + baseUrl);
let thrCore = new ThreadCore();
thrCore.initialize();
`;
exports.default = ThreadCore;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("32ff");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ })

/******/ });
});