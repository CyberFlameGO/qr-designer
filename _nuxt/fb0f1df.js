(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{768:function(e,t,r){"use strict";r.r(t);var l={props:["interpretedPixels","qrSize","pixelsPerBlock"],methods:{interpretedPixelConfigForIndex:function(e){var t=Math.floor(e/this.qrSize)*this.pixelsPerBlock;return{name:"_interpretedPixel",x:e%this.qrSize*this.pixelsPerBlock,y:t,width:this.pixelsPerBlock,height:this.pixelsPerBlock,fill:this.interpretedPixels[e]?"blue":"white"}}}},n=r(75),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layer",[e._l(e.interpretedPixels,(function(t,l){return[t?r("v-rect",{key:l,attrs:{config:e.interpretedPixelConfigForIndex(l)}}):e._e()]}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);