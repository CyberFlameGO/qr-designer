(window.webpackJsonp=window.webpackJsonp||[]).push([[88,48,80],{389:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Symbol=void 0;const n=r(507);class o{constructor(t,e){this.ptr=t,this.ptr32=t>>2,this.buf=e,this.HEAP8=new Int8Array(e),this.HEAPU32=new Uint32Array(e),this.HEAP32=new Int32Array(e)}}class c extends o{get type(){return this.HEAPU32[this.ptr32]}get data(){const t=this.HEAPU32[this.ptr32+2],e=this.HEAPU32[this.ptr32+3];return Int8Array.from(this.HEAP8.subarray(e,e+t))}get points(){const t=this.HEAPU32[this.ptr32+5],e=this.HEAPU32[this.ptr32+6]>>2,r=[];for(let i=0;i<t;++i){const t=this.HEAP32[e+2*i],n=this.HEAP32[e+2*i+1];r.push({x:t,y:n})}return r}get next(){const t=this.HEAPU32[this.ptr32+8];return t?new c(t,this.buf):null}get time(){return this.HEAPU32[this.ptr32+10]}get cacheCount(){return this.HEAP32[this.ptr32+11]}get quality(){return this.HEAP32[this.ptr32+12]}}class l extends o{get head(){const t=this.HEAPU32[this.ptr32+2];return t?new c(t,this.buf):null}}class f{constructor(t){this.type=t.type,this.typeName=n.ZBarSymbolType[this.type],this.data=t.data,this.points=t.points,this.time=t.time,this.cacheCount=t.cacheCount,this.quality=t.quality}static createSymbolsFromPtr(t,e){if(0==t)return[];let symbol=new l(t,e).head;const r=[];for(;null!==symbol;)r.push(new f(symbol)),symbol=symbol.next;return r}decode(t){return new TextDecoder(t).decode(this.data)}}e.Symbol=f},414:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Image=void 0;const n=r(415),o=r(389),c=r(416);class l extends n.CppObject{static async createFromGrayBuffer(t,e,r,n=0){const o=await c.getInstance(),l=new Uint8Array(o.memory.buffer),data=new Uint8Array(r),f=t*e;if(f!==data.byteLength)throw Error("dataBuf does not match width and height");const h=o.malloc(f);l.set(data,h);return new this(o.Image_create(t,e,808466521,h,f,n),o)}static async createFromRGBABuffer(t,e,r,n=0){const o=await c.getInstance(),l=new Uint8Array(o.memory.buffer),data=new Uint8Array(r),f=t*e;if(4*f!==data.byteLength)throw Error("dataBuf does not match width and height");const h=o.malloc(f);for(let i=0;i<f;++i){const t=data[4*i],g=data[4*i+1],b=data[4*i+2];l[h+i]=19595*t+38469*g+7472*b>>16}return new this(o.Image_create(t,e,808466521,h,f,n),o)}destroy(){this.checkAlive(),this.inst.Image_destory(this.ptr),this.ptr=0}getSymbols(){this.checkAlive();const t=this.inst.Image_get_symbols(this.ptr);return o.Symbol.createSymbolsFromPtr(t,this.inst.memory.buffer)}}e.Image=l},415:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CppObject=void 0;e.CppObject=class{constructor(t,e){this.ptr=t,this.inst=e}checkAlive(){if(!this.ptr)throw Error("Call after destroyed")}getPointer(){return this.checkAlive(),this.ptr}}},416:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getMemoryGrowTimestamp=e.getInstance=void 0;const n=r(508);let o=null,c=new Int32Array;let l=0;const f=t=>{l&&console.info("zbar.wasm: Memory Grow: ",o.memory.buffer.byteLength),l=Date.now(),c=new Int32Array(o.memory.buffer)},h={env:{clock_gettime:(t,e)=>{const r=Date.now();return c[e>>2]=r/1e3|0,c[e+4>>2]=r%1e3*1e3*1e3|0,0},emscripten_notify_memory_growth:f}};let d=(async()=>{const t=await n.loadWasmInstance(h);if(!t)throw Error("WASM was not loaded");return o=t.exports,f(),o})();e.getInstance=async()=>await d,e.getMemoryGrowTimestamp=()=>l},417:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ImageScanner=void 0;const n=r(415),o=r(416),c=r(389);class l extends n.CppObject{static async create(){const t=await o.getInstance();return new this(t.ImageScanner_create(),t)}destroy(){this.checkAlive(),this.inst.ImageScanner_destory(this.ptr),this.ptr=0}setConfig(t,e,r){return this.checkAlive(),this.inst.ImageScanner_set_config(this.ptr,t,e,r)}enableCache(t=!0){this.checkAlive(),this.inst.ImageScanner_enable_cache(this.ptr,t)}recycleImage(image){this.checkAlive(),this.inst.ImageScanner_recycle_image(this.ptr,image.getPointer())}getResults(){this.checkAlive();const t=this.inst.ImageScanner_get_results(this.ptr);return c.Symbol.createSymbolsFromPtr(t,this.inst.memory.buffer)}scan(image){return this.checkAlive(),this.inst.ImageScanner_scan(this.ptr,image.getPointer())}}e.ImageScanner=l},477:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));r(122),r(16),r(22),r(123),r(124),r(125),r(126),r(127),r(128),r(129),r(130),r(131),r(132),r(133),r(134),r(135),r(28);var n=r(534);function o(){var t=new Map,e=[n.BarcodeFormat.QR_CODE];t.set(n.DecodeHintType.POSSIBLE_FORMATS,e);var r=new n.BrowserMultiFormatReader;return r.hints=t,r}},495:function(t,e,r){"use strict";r.r(e);r(39),r(51),r(433),r(16),r(434),r(435),r(436),r(437),r(438),r(439),r(440),r(441),r(442),r(443),r(444),r(445),r(446),r(447),r(448),r(449),r(450),r(451),r(452),r(453),r(454),r(455),r(456),r(457),r(22),r(28),r(244);var n=r(2).default.extend({props:["result"],computed:{passed:function(){return"passed"===this.result.result}},methods:{open:function(t){this.showDocument(t.replace(/^data:image\/(png|jpeg|jpg);base64,/,""),"image/jpeg")},base64ToArrayBuffer:function(t){for(var e=window.atob(t),r=e.length,n=new Uint8Array(r),i=0;i<r;i++){var o=e.charCodeAt(i);n[i]=o}return n},showDocument:function(t,e){var r=this.base64ToArrayBuffer(t),n=new Blob([r],{type:e});window.open(URL.createObjectURL(n),"_blank")}}}),o=r(75),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative w-20 h-20 flex items-center justify-center",class:{"text-green-700":t.passed,"text-gray-700":!t.passed}},[r("img",{staticClass:"w-16 h-16",attrs:{src:t.result.imageData}}),t._v(" "),r("div",{staticClass:"\n      flex flex-row\n      items-center\n      justify-center\n      absolute\n      top-0\n      left-0\n      right-0\n      bottom-0\n      bg-opacity-50\n      transition\n      hover:bg-opacity-0\n      cursor-pointer\n      group\n    ",class:{"bg-gray-200":!t.passed,"bg-green-100":t.passed},attrs:{role:"button"},on:{click:function(e){return t.open(t.result.imageData)}}},[t.passed?r("svg",{staticClass:"h-8 w-8 group-hover:opacity-0 transition",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"}})]):r("svg",{staticClass:"h-8 w-8 group-hover:opacity-0 transition",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"}})])])])}),[],!1,null,null,null);e.default=component.exports},506:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var p in t)"default"===p||e.hasOwnProperty(p)||n(e,t,p)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(414),e),o(r(417),e),o(r(510),e),o(r(389),e)},507:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ZBarConfigType=e.ZBarSymbolType=void 0,function(t){t[t.ZBAR_NONE=0]="ZBAR_NONE",t[t.ZBAR_PARTIAL=1]="ZBAR_PARTIAL",t[t.ZBAR_EAN8=8]="ZBAR_EAN8",t[t.ZBAR_UPCE=9]="ZBAR_UPCE",t[t.ZBAR_ISBN10=10]="ZBAR_ISBN10",t[t.ZBAR_UPCA=12]="ZBAR_UPCA",t[t.ZBAR_EAN13=13]="ZBAR_EAN13",t[t.ZBAR_ISBN13=14]="ZBAR_ISBN13",t[t.ZBAR_I25=25]="ZBAR_I25",t[t.ZBAR_CODE39=39]="ZBAR_CODE39",t[t.ZBAR_PDF417=57]="ZBAR_PDF417",t[t.ZBAR_QRCODE=64]="ZBAR_QRCODE",t[t.ZBAR_CODE128=128]="ZBAR_CODE128",t[t.ZBAR_SYMBOL=255]="ZBAR_SYMBOL",t[t.ZBAR_ADDON2=512]="ZBAR_ADDON2",t[t.ZBAR_ADDON5=1280]="ZBAR_ADDON5",t[t.ZBAR_ADDON=1792]="ZBAR_ADDON"}(e.ZBarSymbolType||(e.ZBarSymbolType={})),function(t){t[t.ZBAR_CFG_ENABLE=0]="ZBAR_CFG_ENABLE",t[t.ZBAR_CFG_ADD_CHECK=1]="ZBAR_CFG_ADD_CHECK",t[t.ZBAR_CFG_EMIT_CHECK=2]="ZBAR_CFG_EMIT_CHECK",t[t.ZBAR_CFG_ASCII=3]="ZBAR_CFG_ASCII",t[t.ZBAR_CFG_NUM=4]="ZBAR_CFG_NUM",t[t.ZBAR_CFG_MIN_LEN=32]="ZBAR_CFG_MIN_LEN",t[t.ZBAR_CFG_MAX_LEN=33]="ZBAR_CFG_MAX_LEN",t[t.ZBAR_CFG_UNCERTAINTY=64]="ZBAR_CFG_UNCERTAINTY",t[t.ZBAR_CFG_POSITION=128]="ZBAR_CFG_POSITION",t[t.ZBAR_CFG_X_DENSITY=256]="ZBAR_CFG_X_DENSITY",t[t.ZBAR_CFG_Y_DENSITY=257]="ZBAR_CFG_Y_DENSITY"}(e.ZBarConfigType||(e.ZBarConfigType={}))},508:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.loadWasmInstance=void 0;const o=n(r(509));e.loadWasmInstance=async t=>{const e=await fetch(o.default);if(!e.ok)return console.error("Failed to load wasm binary file at "+o.default),null;const r=await e.arrayBuffer();return(await WebAssembly.instantiate(r,t)).instance}},509:function(t,e,r){"use strict";r.r(e),e.default=r.p+"919afea9035a50020a842aba55b2024a.bin"},510:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.scanImageData=e.scanRGBABuffer=e.scanGrayBuffer=e.getDefaultScanner=void 0;const n=r(414),o=r(417).ImageScanner.create();e.getDefaultScanner=async()=>await o;const c=async(image,t)=>{void 0===t&&(t=await o);const e=t.scan(image);if(e<0)throw Error("Scan Failed");return 0===e?[]:image.getSymbols()};e.scanGrayBuffer=async(t,e,r,o)=>{const image=await n.Image.createFromGrayBuffer(e,r,t),l=await c(image,o);return image.destroy(),l},e.scanRGBABuffer=async(t,e,r,o)=>{const image=await n.Image.createFromRGBABuffer(e,r,t),l=await c(image,o);return image.destroy(),l},e.scanImageData=async(image,t)=>await e.scanRGBABuffer(image.data.buffer,image.width,image.height,t)},531:function(t,e,r){"use strict";r.r(e);r(55),r(35),r(50),r(67),r(20),r(76);var n=r(12),o=r(10),c=(r(66),r(16),r(2)),l=r(83),f=r(506),h=r(477),d=r(495);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=c.default.extend({components:{TestResultVue:d.default},props:["testConfig","stageConfig"],data:function(){return{useZbar:!0,result:null,reader:Object(h.default)()}},computed:m(m({},Object(l.c)({testImage:function(t){return t.designMeta.testImage}})),{},{testImageConfig:function(){return m(m({},this.testConfig),{},{image:this.testImage})}}),methods:{runTest:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,h,d,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(r=t).$refs.stage.getNode(),o=n.getLayers()[0].canvas.getContext().getImageData(0,0,n.width(),n.height()),e.next=5,new Promise((function(t,e){n.toDataURL({callback:t})}));case 5:if(c=e.sent,h=!1,d={index:t.testConfig.id,imageData:c,result:"failed"},!r.useZbar){e.next=14;break}return e.next=11,f.scanImageData(o);case 11:_=e.sent,h=_&&!!_.length,d.result=h?"passed":"failed";case 14:if("failed"!==d.result){e.next=24;break}return e.prev=15,e.next=18,t.reader.decodeFromImageUrl(c);case 18:l=e.sent,e.next=23;break;case 21:e.prev=21,e.t0=e.catch(15);case 23:d.result=l&&l.getText()?"passed":"failed";case 24:t.result=d,t.$store.commit("designMeta/addTestResult",d);case 26:case"end":return e.stop()}}),e,null,[[15,21]])})))()}},watch:{testImage:function(t){var e=this;this.result=null,c.default.nextTick((function(){return e.runTest()}))}}}),y=r(75),component=Object(y.a)(A,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.testImage,expression:"testImage"}]},[t.result?r("test-result-vue",{attrs:{result:t.result}}):r("div",{staticClass:"w-20 h-20 flex items-center justify-center text-gray-500"},[r("svg",{staticClass:"animate-spin h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),r("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})])]),t._v(" "),r("v-stage",{ref:"stage",staticClass:"hidden",attrs:{config:t.stageConfig}},[r("v-layer",[r("v-image",{attrs:{__useStrictMode:"",config:t.testImageConfig}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);