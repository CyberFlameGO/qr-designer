(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4,10,12,21,28,95],{369:function(t,e,n){"use strict";function r(t,e,n,r){var o,c=!1,l=0;function d(){o&&clearTimeout(o)}function f(){for(var f=arguments.length,m=new Array(f),v=0;v<f;v++)m[v]=arguments[v];var h=this,w=Date.now()-l;function x(){l=Date.now(),n.apply(h,m)}function k(){o=void 0}c||(r&&!o&&x(),d(),void 0===r&&w>t?x():!0!==e&&(o=setTimeout(r?k:x,void 0===r?t-w:t)))}return"boolean"!=typeof e&&(r=n,n=e,e=void 0),f.cancel=function(){d(),c=!0},f}function o(t,e,n){return void 0===n?r(t,e,!1):r(t,n,!1!==e)}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}))},374:function(t,e,n){"use strict";n.r(e);var r={name:"DefaultTransition"},o=n(75),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{"enter-active-class":"transition-all transition-fastest ease-out-quad","leave-active-class":"transition-all transition-faster ease-in-quad","enter-class":"opacity-0 scale-70","enter-to-class":"opacity-100 scale-100","leave-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-70"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,n){"use strict";n.r(e);var r=n(12),o=(n(66),n(20),n(69),n(50),n(30),n(408)),c=n(409),l=n(493),d=n(2),f=n(83),m=d.default.extend({components:{AppCard:c.default,CreateAppButton:l.default,AddById:o.default},data:function(){return{apps:[],ourApps:[],intersection:[],creatingApp:!1,filter:"recommended"}},computed:Object(f.c)({swinkId:function(t){return t.swink.swink.metadata.id}}),watch:{filter:function(t,e){this.queryForApps()}},mounted:function(){var t=this;t.queryForApps(),t.$fire.firestore.collection("tags/".concat(this.swinkId,"/swinkApps")).onSnapshot((function(e){e.docChanges().forEach((function(e){var n=e.doc.id;if("added"===e.type)t.ourApps.push(n),t.$emit("app-added");else if("removed"===e.type){var r=t.ourApps.indexOf(n);r>-1&&(t.ourApps.splice(r,1),t.$emit("app-removed"))}})),t.$emit("app-ids",t.ourApps),t.checkOwnership()}),(function(t){console.log("Can't get our apps",t)}))},methods:{queryForApps:function(){var t=this;t.getQueryForCurrentFilter().get().then((function(e){t.apps=e.docs,t.checkOwnership()})).catch((function(t){console.log("Can't get published apps",t)}))},getQueryForCurrentFilter:function(){var t,e=this,n=e.$fire.firestore.collection("apps").limit(20);if("recommended"===e.filter)return n.where("author","==","Q2RNaJK0LqfwlHLKUeMK0rQxp653").where("status","==","published");if("mine"===e.filter)return n.where("author","==",null===(t=e.$fire.auth.currentUser)||void 0===t?void 0:t.uid);if("all"===e.filter)return n.where("status","==","published");throw new Error("Unknown filter "+e.filter)},checkOwnership:function(){var t=this;t.intersection=t.apps.map((function(t){return t.id})).filter((function(e){return-1!==t.ourApps.indexOf(e)}))},addRemove:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$emit("editting");case 2:case"end":return t.stop()}}),t)})))()},appState:function(t){return-1===this.intersection.indexOf(t)?"unadded":"added"}}}),v=n(75),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-2"},[n("div",{staticClass:"\n      flex\n      items-center\n      appsHeader\n      mb-2\n      col-12\n      sticky\n      top-0\n      border-b\n      bg-gray-50\n      py-2\n      px-4\n    "},[n("add-by-id"),t._v(" "),n("div",{staticClass:"ml-auto flex items-center"},[n("div",{staticClass:"text-sm"},[n("div",{},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"\n              transition\n              hover:bg-white\n              focus:bg-white\n              border-none\n              text-sm\n              py-1\n              bg-transparent\n              text-gray-500\n            ",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.filter=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"mine"}},[t._v("Mine")]),t._v(" "),n("option",{attrs:{value:"all"}},[t._v("All")]),t._v(" "),n("option",{attrs:{value:"recommended"}},[t._v("Recommended")])])])])])],1),t._v(" "),0===t.apps.length?n("div",{staticClass:"flex flex-col items-center"},[n("h6",{staticClass:"text-gray-400"},[t._v("No apps found")]),t._v(" "),n("create-app-button",{staticClass:"my-4"})],1):n("div",t._l(t.apps,(function(e){return n("app-card",{key:e.id,attrs:{id:e.id,app:e.data(),state:t.appState(e.id)},on:{"add-remove":t.addRemove}})})),1)])}),[],!1,null,"10bacad4",null);e.default=component.exports;installComponents(component,{AddById:n(408).default,AppCard:n(409).default})},395:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("16c28c25",content,!0,{sourceMap:!1})},408:function(t,e,n){"use strict";n.r(e);n(55),n(35),n(50),n(67),n(20),n(76);var r=n(12),o=n(10),c=(n(66),n(374)),l=n(2),d=n(83);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m=l.default.extend({components:{DefaultTransition:c.default},data:function(){return{id:"",focused:!1,state:"editting"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.c)({swinkId:function(t){return t.swink.swink.metadata.id},isData:function(t){return!t.swink.swink.tag.redirect}})),methods:{addById:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isData){e.next=2;break}return e.abrupt("return");case 2:t.adding();case 4:case"end":return e.stop()}}),e)})))()},adding:function(){this.state="adding"},unable:function(){this.state="unable"},added:function(){this.state="added"},editting:function(){"adding"!==this.state&&(this.state="editting")}}}),v=n(75),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"flex flex-row mr-2 min-w-0",on:{submit:function(e){return e.preventDefault(),t.addById(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"\n      min-w-0\n      border-none\n      text-sm\n      py-1\n      pl-2\n      hidden\n      md:block\n      transition\n      hover:bg-white\n      focus:bg-white\n      bg-transparent\n      disabled:bg-gray-200\n    ",attrs:{disabled:!t.isData,type:"text",placeholder:"Add app by id..."},domProps:{value:t.id},on:{focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},input:[function(e){e.target.composing||(t.id=e.target.value)},t.editting]}}),t._v(" "),n("default-transition",[t.focused||"editting"!==t.state?n("button",{staticClass:"h-full p-1 ml-1 rounded",class:{"hover:bg-blue-100":"editting"===t.state}},[n("default-transition",["editting"===t.state?n("svg",{staticClass:"h-4 w-4 text-blue-800",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"data-v-20fc78c6":"","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}})]):t._e(),t._v(" "),"adding"===t.state?n("svg",{staticClass:"animate-spin h-4 w-4 text-gray-600",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),n("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):t._e(),t._v(" "),"added"===t.state?n("svg",{staticClass:"h-4 w-4 text-green-600",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]):t._e(),t._v(" "),"unable"===t.state?n("svg",{staticClass:"h-4 w-4 text-red-600",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})]):t._e()])],1):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DefaultTransition:n(374).default})},409:function(t,e,n){"use strict";n.r(e);n(55),n(50),n(67),n(20),n(76);var r=n(12),o=n(10),c=(n(66),n(21),n(56),n(35),n(43),n(39),n(51),n(369)),l=n(431),d=n(2),f=n(83);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=d.default.extend({props:["app","state","id"],components:{ExplanatoryCheckbox:l.default},data:function(){return{appAuthorName:"",gettingLink:!1,appDescription:"",showOptions:!1,loadImmediately:!1,adding:!1,removing:!1,debouncedUpdateAppDescription:function(){},debouncedUpdateLoadImmediately:function(){}}},mounted:function(){var t=this;t.$fire.firestore.doc("users/".concat(t.app.author,"/apps/author")).get().then((function(e){t.appAuthorName=e.exists?e.data().name:""}))},watch:{state:function(t,e){var n=this;n.adding=!1,n.removing=!1,"added"===t&&n.$fire.firestore.doc("tags/".concat(n.swinkId,"/apps/").concat(n.id)).get().then((function(t){if(t.exists){var data=t.data();n.appDescription=data.description||"",n.loadImmediately=!!data.loadImmediately}}))},appDescription:function(t,e){null!=t&&this.debouncedUpdateAppDescription()},loadImmediately:function(t,e){null!=t&&this.debouncedUpdateLoadImmediately()}},computed:v(v({},Object(f.c)({swinkId:function(t){return t.swink.swink.metadata.id},isData:function(t){return!t.swink.swink.tag.redirect}})),{},{appAuthorNameHtml:function(){return"swink"===this.appAuthorName?'<span style="color: mediumvioletred">sw</span><span style="color: darkorchid">ink</span>':this.appAuthorName},addButtonText:function(){return this.adding?"Adding...":"Add to Swink"},removeButtonText:function(){return this.removing?"Removing...":"Remove"},buttonText:function(){return this.adding?"Adding...":this.removing?"Removing...":"added"===this.state?"Remove":(this.state,"Add to Swink")},link:function(){return this.app.setupLink.replace("${swinkId}",this.swinkId)}}),created:function(){var t=this;t.debouncedUpdateAppDescription=Object(c.a)(1e3,(function(){t.$fire.firestore.doc("tags/".concat(t.swinkId,"/swinkApps/").concat(t.id)).update({description:t.appDescription})}))},methods:{add:function(){this.adding=!0,this.$emit("add-remove",this.id)},remove:function(){this.removing=!0,this.$emit("add-remove",this.id)},setup:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,data,link;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t).gettingLink=!0,r=n.$fire.functions.httpsCallable("generateAppSetupLink"),e.next=5,r({qrId:n.swinkId,appId:n.id});case 5:o=e.sent,data=o.data,n.gettingLink=!1,(link=document.createElement("a")).href=data,link.target="_blank",link.click();case 12:case"end":return e.stop()}}),e)})))()}}}),w=(n(464),n(75)),component=Object(w.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transition transition-all p-4 mb-2 rounded border hover:bg-gray-100",class:"added"===t.state?"bg-blue-50 bg-opacity-50 border-blue-100":"border-transparent appCard"},[n("div",{staticClass:"flex items-baseline"},[n("div",{staticStyle:{overflow:"hidden"}},[n("h6",{staticClass:"appTitle font-medium"},[t._v(t._s(t.app.name))])]),t._v(" "),n("div",{staticClass:"flex ml-auto items-center"},["unadded"===t.state?n("button",{staticClass:"\n          flex flex-row\n          rounded\n          p-1\n          text-blue-800\n          transition transition-all\n          hover:bg-blue-100\n          text-xs\n          disabled:text-gray-500\n          items-center\n          disabled:bg-gray-100\n        ",attrs:{disabled:t.adding||t.removing||!t.isData},on:{click:t.add}},[t.adding||t.removing?n("svg",{staticClass:"animate-spin h-3 w-3 ml-1 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),n("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):n("svg",{staticClass:"h-4 w-4 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}})]),t._v(" "),n("span",{staticClass:"hidden md:block"},[t._v(t._s(t.addButtonText))])]):n("button",{staticClass:"\n          rounded\n          p-1\n          text-red-800\n          transition transition-all\n          hover:text-red-600\n          text-xs\n          disabled:text-gray-500 disabled:bg-gray-100\n          flex flex-row\n          items-center\n          mr-1\n        ",attrs:{disabled:t.adding||t.removing||!t.isData},on:{click:t.remove}},[t.adding||t.removing?n("svg",{staticClass:"animate-spin h-3 w-3 ml-1 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),n("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):n("svg",{staticClass:"h-4 w-4 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18 12H6"}})]),t._v(" "),n("span",{staticClass:"hidden md:block"},[t._v(t._s(t.removeButtonText))])]),t._v(" "),"added"===t.state&&t.app.setupLink&&-1!==t.app.setupLink.indexOf("${token}")?n("button",{staticClass:"flex items-center ml-2",attrs:{disabled:t.gettingLink},on:{click:t.setup}},[t._v("\n        "+t._s(t.gettingLink?"Getting link...":"Setup / Manage")+"\n        "),n("i",{staticClass:"fas fa-external-link-alt ml-1",staticStyle:{"font-size":"85%"}})]):t._e()])]),t._v(" "),t.appAuthorName?n("small",[t._v("By: "),n("span",{domProps:{innerHTML:t._s(t.appAuthorNameHtml)}})]):t._e(),t._v(" "),n("p",{staticClass:"mb-0 text-sm"},[t._v(t._s(t.app.description))])])}),[],!1,null,"9dc4f3a8",null);e.default=component.exports},431:function(t,e,n){"use strict";n.r(e);var r={model:{prop:"checked",event:"change"},props:["checked"],data:function(){return{id:""}},mounted:function(){this.id=this._uid}},o=n(75),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    flex\n    items-center\n    p-2\n    alert\n    mt-0\n    mb-0\n    w-full\n    transition transition-all\n    rounded\n  ",class:t.checked?"bg-blue-100 border border-blue-200":"bg-white border border-transparent"},[n("input",{staticClass:"pl-2 pr-3",attrs:{type:"checkbox",id:t.id},domProps:{checked:t.checked},on:{change:function(e){return t.$emit("change",e.target.checked)}}}),t._v(" "),n("label",{staticClass:"cursor-pointer ml-2",attrs:{for:t.id}},[n("div",{staticClass:"flex items-center"},[t._t("title")],2),t._v(" "),t._t("description")],2),t._v(" "),t._t("belowLabel")],2)}),[],!1,null,null,null);e.default=component.exports},464:function(t,e,n){"use strict";n(395)},465:function(t,e,n){var r=n(64)((function(i){return i[1]}));r.push([t.i,".btn-sm[data-v-9dc4f3a8]{\n  padding:.05rem .5rem\n}\n.appTitle[data-v-9dc4f3a8]{\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  overflow:hidden;\n  margin-bottom:0\n}\n.added[data-v-9dc4f3a8]{\n  background-color:rgb(247 251 255);\n  border:1px solid rgb(151 201 255);\n  box-shadow:none\n}",""]),r.locals={},t.exports=r},493:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{creatingApp:!1}},methods:{createApp:function(){this.creatingApp=!0}}},o=n(75),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"\n    text-pink-800\n    :disabled:text-gray-800\n    transition\n    hover:text-pink-700\n    bg-white\n    p-1\n    hidden\n    md:flex\n    flex-row\n    border-gray-100 border\n    items-center\n  ",attrs:{disabled:t.creatingApp},on:{click:t.createApp}},[n("svg",{staticClass:"h-4 w-4 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z","clip-rule":"evenodd"}})]),t._v("\n  "+t._s(t.creatingApp?"Creating...":"Create App")+"\n")])}),[],!1,null,null,null);e.default=component.exports}}]);