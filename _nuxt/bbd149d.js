(window.webpackJsonp=window.webpackJsonp||[]).push([[58,57,106],{365:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("5d7752ce",content,!0,{sourceMap:!1})},367:function(t,e,n){"use strict";n.r(e);var o=n(12);n(66),n(30);function r(t){if("undefined"!=typeof ResizeObserver)return new ResizeObserver((function(e){return e.map(t)}))}var l={name:"ScrollShadow",data:function(){return{width:void 0,height:void 0,shadow:{top:!1,right:!1,bottom:!1,left:!1}}},mounted:function(){var t=r(this.toggleShadow);t&&(t.observe(this.$refs.scrollContainer),this.$once("hook:destroyed",(function(){return t.disconnect()})));var e=r(this.calcDimensions);e&&(e.observe(this.$el),this.$once("hook:destroyed",(function(){return e.disconnect()})))},methods:{calcDimensions:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.width=void 0,t.height=void 0,e.next=4,t.$nextTick();case 4:t.width="".concat(t.$el.clientWidth,"px"),t.height="".concat(t.$el.clientHeight,"px");case 6:case"end":return e.stop()}}),e)})))()},toggleShadow:function(){var t=this.$refs.scrollContainer.clientWidth<this.$refs.scrollContainer.scrollWidth,e=this.$refs.scrollContainer.clientHeight<this.$refs.scrollContainer.scrollHeight,n=this.$refs.scrollContainer.offsetWidth+this.$refs.scrollContainer.scrollLeft,o=this.$refs.scrollContainer.offsetHeight+this.$refs.scrollContainer.scrollTop,r=0===this.$refs.scrollContainer.scrollTop,l=n>=this.$refs.scrollContainer.scrollWidth,c=o>=this.$refs.scrollContainer.scrollHeight,h=0===this.$refs.scrollContainer.scrollLeft;this.shadow.top=e&&!r,this.shadow.right=t&&!l,this.shadow.bottom=e&&!c,this.shadow.left=t&&!h}}},c=n(387),h=n(75);var component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.wrap},[n("div",{ref:"scrollContainer",class:t.$style["scroll-container"],style:{width:t.width,height:t.height},on:{"&scroll":function(e){return t.toggleShadow(e)}}},[t._t("default"),t._v(" "),n("span",{class:[t.$style["shadow-top"],t.shadow.top&&t.$style["is-active"]]}),t._v(" "),n("span",{class:[t.$style["shadow-right"],t.shadow.right&&t.$style["is-active"]]}),t._v(" "),n("span",{class:[t.$style["shadow-bottom"],t.shadow.bottom&&t.$style["is-active"]]}),t._v(" "),n("span",{class:[t.$style["shadow-left"],t.shadow.left&&t.$style["is-active"]]})],2)])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},387:function(t,e,n){"use strict";var o=n(365),r=n.n(o);n.d(e,"default",(function(){return r.a}))},388:function(t,e,n){var o=n(64)((function(i){return i[1]}));o.push([t.i,".wrap_2Uv_z{\n  overflow:hidden;\n  position:relative\n}\n.scroll-container_1Jkja{\n  overflow:auto\n}\n.scroll-container_1Jkja::-webkit-scrollbar{\n  display:none\n}\n.shadow-bottom_3UMg3,.shadow-left_1DAVm,.shadow-right_1mwbi,.shadow-top_36mCx{\n  position:absolute;\n  border-radius:6em;\n  opacity:0;\n  transition:opacity .2s;\n  pointer-events:none;\n  z-index:11\n}\n.shadow-bottom_3UMg3,.shadow-top_36mCx{\n  right:0;\n  left:0;\n  height:.8em;\n  border-top-right-radius:0;\n  border-top-left-radius:0;\n  background-image:linear-gradient(rgba(110,102,218,.05),hsla(0,0%,100%,0));\n  z-index:11\n}\n.shadow-top_36mCx{\n  top:0\n}\n.shadow-bottom_3UMg3{\n  bottom:0;\n  transform:rotate(180deg)\n}\n.shadow-left_1DAVm,.shadow-right_1mwbi{\n  top:0;\n  bottom:0;\n  width:.2em;\n  border-top-left-radius:0;\n  border-bottom-left-radius:0;\n  background-image:linear-gradient(90deg,rgba(110,102,218,.1),hsla(0,0%,100%,0));\n  z-index:11\n}\n.shadow-right_1mwbi{\n  right:0;\n  transform:rotate(180deg)\n}\n.shadow-left_1DAVm{\n  left:0\n}\n.is-active_38TI7{\n  opacity:1\n}",""]),o.locals={wrap:"wrap_2Uv_z","scroll-container":"scroll-container_1Jkja","shadow-bottom":"shadow-bottom_3UMg3","shadow-left":"shadow-left_1DAVm","shadow-right":"shadow-right_1mwbi","shadow-top":"shadow-top_36mCx","is-active":"is-active_38TI7"},t.exports=o},393:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("360742d0",content,!0,{sourceMap:!1})},428:function(t,e,n){"use strict";n.r(e);var o=n(2).default.extend({props:["title","link","icon"]}),r=n(75),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"\n    p-3\n    rounded-lg\n    text-sm\n    flex-shrink-0\n    bg-white\n    text-gray-600\n    hover:text-gray-100\n    hover:bg-purple-700\n    hover:border-purple-900\n    border border-purple-100\n    transition\n    duration-300\n    mr-2\n    shadow-sm\n    font-medium\n    hover:shadow\n    cursor-pointer\n    flex flex-row\n    items-center\n  ",staticStyle:{"font-family":"Poppins"},attrs:{href:t.link}},[n("div",{domProps:{innerHTML:t._s(t.icon)}}),t._v(" "),n("span",[t._v(t._s(t.title))])])}),[],!1,null,null,null);e.default=component.exports},460:function(t,e,n){"use strict";n(393)},461:function(t,e,n){var o=n(64)((function(i){return i[1]}));o.push([t.i,".linkCards::-webkit-scrollbar{\n  display:none\n}",""]),o.locals={},t.exports=o},486:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(367),l=n(428),c=o.default.extend({data:function(){return{links:[{link:"#how",title:"How the designer works",icon:'<svg class="w-4 h-4 mr-2" fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path><path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></svg>'},{link:"#examples",title:"Examples",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />\n</svg>'},{link:"#goodDesign",title:"What makes a good design",icon:'<svg class="w-4 h-4 mr-2" fill="currentColor" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path><path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></svg>'},{link:"#faq",title:"FAQ",icon:'<svg class="w-4 h-4 mr-2" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></svg>'}]}},components:{LinkCard:l.default,ScrollShadow:r.default}}),h=(n(460),n(75)),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-shadow",{staticClass:"mb-2"},[n("div",{staticClass:"flex flex-row items-center linkCards my-1 mr-2"},[n("div",{staticClass:"w-2 flex-shrink-0"}),t._v(" "),t._l(t.links,(function(link){return n("link-card",{key:link.link,attrs:{link:link.link,title:link.title,icon:link.icon}})})),t._v(" "),n("div",{staticClass:"w-2 flex-shrink-0"})],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ScrollShadow:n(367).default})}}]);