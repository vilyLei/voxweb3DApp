(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["VoxApp"]=e():t["VoxApp"]=e()})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fae3")}({"1eb2":function(t,e,n){"use strict";if("undefined"!==typeof window){var i=window.document.currentScript,r=n("8875");i=r(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:r});var s=i&&i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);s&&(n.p=s[1])}},7260:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=window;void 0==i["VoxCore"]&&(i["VoxCore"]={});var r=i["VoxCore"];const s=n("a471");r["fpsApp"]=s.App},8875:function(t,e,n){var i,r,s;(function(n,o){r=[],i=o,s="function"===typeof i?i.apply(e,r):i,void 0===s||(t.exports=s)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(f){var n,i,r,s=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,a=s.exec(f.stack)||o.exec(f.stack),c=a&&a[1]||!1,u=a&&a[2]||!1,l=document.location.href.replace(document.location.hash,""),m=document.getElementsByTagName("script");c===l&&(n=document.documentElement.outerHTML,i=new RegExp("(?:[^\\n]+?\\n){0,"+(u-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),r=n.replace(i,"$1").trim());for(var d=0;d<m.length;d++){if("interactive"===m[d].readyState)return m[d];if(m[d].src===c)return m[d];if(c===l&&m[d].innerHTML&&m[d].innerHTML.trim()===r)return m[d]}return null}}return t}))},a471:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class i{constructor(){this.m_lastTime=0,this.m_fps=60,this.m_canvas2D=null,this.m_ctx2D=null,this.m_delayTime=10,this.delayTime=40,this.statusInfo="",this.statusEnbled=!0}initialize(){var t=null;try{void 0!=document&&(t=document)}catch(e){}if(null!=t){let t=window.innerWidth-20;this.createCanvas(t)}}createCanvas(t){null!=this.m_canvas2D&&(document.body.removeChild(this.m_canvas2D),this.m_canvas2D=null),null==this.m_canvas2D&&(this.m_canvas2D=document.createElement("canvas"),document.body.appendChild(this.m_canvas2D),this.m_canvas2D.width=t<10?300:t,this.m_canvas2D.height=70,this.m_canvas2D.style.display="bolck",this.m_canvas2D.style.left="0px",this.m_canvas2D.style.top="0px",this.m_canvas2D.style.position="absolute",this.m_canvas2D.style.backgroundColor="transparent",this.m_canvas2D.style.pointerEvents="none"),this.m_ctx2D=this.m_canvas2D.getContext("2d"),this.m_ctx2D.font="50px Verdana",this.m_ctx2D.fillStyle="red",this.m_ctx2D.textAlign="left"}getFPS(){return this.m_fps}getFPSStr(){return this.m_fps>60?"FPS: 60":this.m_fps<10?"FPS: 0"+this.m_fps:"FPS: "+this.m_fps}render(){this.statusEnbled&&(this.m_ctx2D.clearRect(0,0,600,70),this.m_ctx2D.fillText("FPS:"+this.m_fps+this.statusInfo,5,50))}update(t=!0){if(this.m_canvas2D.width>window.innerWidth){let t=window.innerWidth-20;this.createCanvas(t)}if(this.m_delayTime>0)--this.m_delayTime,this.m_lastTime=Date.now();else{if(null!=this.m_ctx2D){let e=Date.now();this.m_lastTime>0&&(this.m_lastTime=e-this.m_lastTime,this.m_fps=Math.round(1e3/this.m_lastTime),t&&this.render()),this.m_lastTime=e}this.m_delayTime=this.delayTime}}}class r{constructor(){this.m_initFlag=!0,this.m_fpsViewer=new i}initialize(t){this.m_initFlag&&(this.m_initFlag=!1,this.m_fpsViewer.initialize())}run(){null!=this.m_fpsViewer&&this.m_fpsViewer.update(!0)}getModuleName(){return"fps"}getModuleClassName(){return"fpsApp"}getRuntimeType(){return"default"}}e.App=r},fae3:function(t,e,n){"use strict";n.r(e);n("1eb2");var i=n("7260");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r)}})}));