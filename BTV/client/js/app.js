(function(t){function e(e){for(var n,c,o=e[0],l=e[1],s=e[2],b=0,p=[];b<o.length;b++)c=o[b],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},i=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-full",on:{keydown:function(e){return t.keyDown(e)}}},[r("el-container",{staticClass:"h-full"},[r("el-header",[r("nav-con")],1),r("el-main",[r("block")],1)],1),r("video-drawer")],1)},i=[],c=(r("99af"),r("a630"),r("3ca3"),r("6b7b")),o=r("d4ec"),l=r("bee2"),s=r("257e"),u=r("262e"),b=r("2caf"),p=r("ade3"),d=r("63ae"),f=(r("f890"),r("60a3")),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-drawer",{attrs:{visible:t.showVideo,"with-header":!1,label:"btt","show-close":!1,"append-to-body":!0,size:"100%"},on:{"update:visible":function(e){t.showVideo=e}}},[r("div",{staticClass:"video_contrl"},[r("el-button",{staticClass:"chooseAble",attrs:{type:"primary",tabindex:"0"}},[t._v("全 屏")]),r("el-button",{staticClass:"chooseAble",attrs:{type:"primary",tabindex:"0"}},[t._v("返 回")])],1),r("iframe",{staticClass:"bvideo",attrs:{src:"//player.bilibili.com/player.html?bvid="+t.videInf.bvid+"&high_quality=1&autoPlay=true",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}})])],1)},y=[],O=(r("e439"),r("6fc5")),j=r("4bb5"),v=r("2f62");n["default"].use(v["b"]);var g,A,m,k,w,C,_,R,x,V,B,S,I=new v["a"]({}),P=I,z="videoControl",W=(g=Object(O["b"])({dynamic:!0,store:P,namespaced:!0,name:z}),g((k=function(t){Object(u["a"])(r,t);var e=Object(b["a"])(r);function r(){var t;Object(o["a"])(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a)),Object(p["a"])(Object(s["a"])(t),"showVideo",!1),Object(p["a"])(Object(s["a"])(t),"videoInf",{}),t}return Object(l["a"])(r,[{key:"setShowVideo",value:function(t){this.showVideo=t}},{key:"openVideo",value:function(){this.setShowVideo(!0)}},{key:"closeVideo",value:function(){this.setShowVideo(!1)}},{key:"setVideoInf",value:function(t){this.videoInf=t}},{key:"changeVideoInf",value:function(t){this.setVideoInf(t)}},{key:"getShowVideo",get:function(){return this.showVideo}},{key:"getVideoInf",get:function(){return this.videoInf}}]),r}(O["d"]),m=k,Object(d["a"])(m.prototype,"setShowVideo",[O["c"]],Object.getOwnPropertyDescriptor(m.prototype,"setShowVideo"),m.prototype),Object(d["a"])(m.prototype,"openVideo",[O["a"]],Object.getOwnPropertyDescriptor(m.prototype,"openVideo"),m.prototype),Object(d["a"])(m.prototype,"closeVideo",[O["a"]],Object.getOwnPropertyDescriptor(m.prototype,"closeVideo"),m.prototype),Object(d["a"])(m.prototype,"setVideoInf",[O["c"]],Object.getOwnPropertyDescriptor(m.prototype,"setVideoInf"),m.prototype),Object(d["a"])(m.prototype,"changeVideoInf",[O["a"]],Object.getOwnPropertyDescriptor(m.prototype,"changeVideoInf"),m.prototype),A=m)),Object(j["a"])(z)),D=(w=Object(f["a"])({name:"videoDrawer",components:{}}),C=W.Getter("getShowVideo"),_=W.Getter("getVideoInf"),w((S=function(t){Object(u["a"])(r,t);var e=Object(b["a"])(r);function r(){var t;Object(o["a"])(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a)),Object(c["a"])(Object(s["a"])(t),"getShowVideo",V,Object(s["a"])(t)),Object(c["a"])(Object(s["a"])(t),"getVideoInf",B,Object(s["a"])(t)),t}return Object(l["a"])(r,[{key:"mounted",value:function(){}},{key:"showVideo",get:function(){return this.getShowVideo}},{key:"videInf",get:function(){return this.getVideoInf}}]),r}(f["c"]),x=S,V=Object(d["a"])(x.prototype,"getShowVideo",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=Object(d["a"])(x.prototype,"getVideoInf",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=x))||R),T=D,E=(r("6fdc"),r("2877")),$=Object(E["a"])(T,h,y,!1,null,null,null),J=$.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"video_con"},[r("div",{staticClass:"video_carousel"},[r("transition-group",{on:{enter:t.enter,leave:t.leave}},t._l(t.randomArr,(function(e){return r("div",{key:JSON.stringify(e),staticClass:"flex_con sub_pad_con"},t._l(e,(function(e){return r("div",{key:e.name,staticClass:"box-card chooseAble",attrs:{tabindex:"0"},on:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.openVideoInf(e)}}},[r("videCard",{attrs:{inf:e}})],1)})),0)})),0)],1)])},L=[],N=(r("fb6a"),r("96cf"),r("1da1")),M=(r("d3b7"),r("bc3a")),q=r.n(M);function X(t){var e={main_ver:"v3",search_type:"video",view_type:"hot_rank",order:"click",copy_right:-1,cate_id:20,page:2,pagesize:20,time_from:20201015,time_to:20201022},r=Object.assign(e,t);return q.a.get("https://s.search.bilibili.com/cate/search",{params:r}).then((function(t){return 200===t.status?t.data:Promise.reject(t)}))}var H,F,K,Q,U,Y,Z,tt,et,rt,nt,at,it,ct,ot,lt,st,ut,bt,pt,dt,ft,ht,yt,Ot,jt,vt,gt,At,mt,kt,wt,Ct,_t,Rt,xt,Vt,Bt,St,It,Pt,zt,Wt,Dt,Tt,Et,$t,Jt,Gt,Lt,Nt,Mt={getHotList:X},qt=r("db90"),Xt="elControl",Ht=(H=Object(O["b"])({dynamic:!0,store:P,namespaced:!0,name:Xt}),F=Object(O["a"])({rawError:!0}),H((U=function(t){Object(u["a"])(r,t);var e=Object(b["a"])(r);function r(){var t;Object(o["a"])(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a)),Object(p["a"])(Object(s["a"])(t),"padArr",qt.padArr),Object(p["a"])(Object(s["a"])(t),"navArr",qt.navArr.slice(0,2)),Object(p["a"])(Object(s["a"])(t),"cat1Rid",""),Object(p["a"])(Object(s["a"])(t),"cat2Rid",""),Object(p["a"])(Object(s["a"])(t),"cat2Arr",[]),Object(p["a"])(Object(s["a"])(t),"watchBlockArr",[]),t}return Object(l["a"])(r,[{key:"setWatchBlockArr",value:function(t){this.watchBlockArr=t}},{key:"setCat1Rid",value:function(t){this.cat1Rid=t}},{key:"setCat2Rid",value:function(t){this.cat2Rid=t}},{key:"setCat2Arr",value:function(t){this.cat2Arr=t}},{key:"getWatchBlockArrByRid",value:function(){var t=Object(N["a"])(regeneratorRuntime.mark((function t(){var e,r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.cat2Rid){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Mt.getHotList({cate_id:this.cat2Rid});case 4:e=t.sent,r=e.result,n=0,a=[];while(n<r.length)a.push(r.slice(n,n+=4));this.setWatchBlockArr(a);case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"setCat1RidAction",value:function(){var t=Object(N["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.setCat1Rid(e);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"setCat2RidAction",value:function(){var t=Object(N["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.setCat2Rid(e);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"setCat2ArrAction",value:function(){var t=Object(N["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.setCat2Arr(e);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"allArr",get:function(){return[this.padArr].concat([this.navArr]).concat(this.cat2Arr&&[this.cat2Arr]).concat(this.watchBlockArr)}},{key:"getWatchBlockArr",get:function(){return this.watchBlockArr}},{key:"getCat1Rid",get:function(){return this.cat1Rid}},{key:"getCat2Rid",get:function(){return this.cat2Rid}},{key:"getCat2Arr",get:function(){return this.cat2Arr}}]),r}(O["d"]),Q=U,Object(d["a"])(Q.prototype,"setWatchBlockArr",[O["c"]],Object.getOwnPropertyDescriptor(Q.prototype,"setWatchBlockArr"),Q.prototype),Object(d["a"])(Q.prototype,"setCat1Rid",[O["c"]],Object.getOwnPropertyDescriptor(Q.prototype,"setCat1Rid"),Q.prototype),Object(d["a"])(Q.prototype,"setCat2Rid",[O["c"]],Object.getOwnPropertyDescriptor(Q.prototype,"setCat2Rid"),Q.prototype),Object(d["a"])(Q.prototype,"setCat2Arr",[O["c"]],Object.getOwnPropertyDescriptor(Q.prototype,"setCat2Arr"),Q.prototype),Object(d["a"])(Q.prototype,"getWatchBlockArrByRid",[F],Object.getOwnPropertyDescriptor(Q.prototype,"getWatchBlockArrByRid"),Q.prototype),Object(d["a"])(Q.prototype,"setCat1RidAction",[O["a"]],Object.getOwnPropertyDescriptor(Q.prototype,"setCat1RidAction"),Q.prototype),Object(d["a"])(Q.prototype,"setCat2RidAction",[O["a"]],Object.getOwnPropertyDescriptor(Q.prototype,"setCat2RidAction"),Q.prototype),Object(d["a"])(Q.prototype,"setCat2ArrAction",[O["a"]],Object.getOwnPropertyDescriptor(Q.prototype,"setCat2ArrAction"),Q.prototype),K=Q)),Object(j["a"])(Xt)),Ft=r("589d"),Kt=r.n(Ft),Qt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",[r("el-row",{staticClass:"img_con"},[r("img",{attrs:{src:t.inf.pic}})]),r("el-row",[r("h3",{staticClass:"title text-left"},[t._v(t._s(t.inf.title))])]),r("el-row",{staticClass:"play-inf"},[r("el-col",{attrs:{span:12}},[r("span",[r("i",{staticClass:"el-icon-video-play"}),t._v(" "+t._s(t.inf.play)+" ")])]),r("el-col",{attrs:{span:12}},[r("span",[r("i",{staticClass:"el-icon-chat-dot-round"}),t._v(" "+t._s(t.inf.video_review)+" ")])])],1),r("p",{staticClass:"description"},[t._v(t._s(t.inf.description))])],1)},Ut=[],Yt=(Y=Object(f["a"])({name:"videCard",components:{}}),Z=Object(f["b"])(),Y((nt=function(t){Object(u["a"])(r,t);var e=Object(b["a"])(r);function r(){var t;Object(o["a"])(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a)),Object(c["a"])(Object(s["a"])(t),"inf",rt,Object(s["a"])(t)),t}return Object(l["a"])(r,[{key:"mounted",value:function(){console.log(this.inf)}}]),r}(f["c"]),et=nt,rt=Object(d["a"])(et.prototype,"inf",[Z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),tt=et))||tt),Zt=Yt,te=(r("6fbf"),Object(E["a"])(Zt,Qt,Ut,!1,null,null,null)),ee=te.exports,re=(at=Object(f["a"])({name:"block",components:{videCard:ee}}),it=Ht.Getter("getWatchBlockArr"),ct=Ht.Action("setCat2RidAction"),ot=Ht.Getter("getCat2Arr"),lt=Ht.Action("getWatchBlockArrByRid"),st=W.Action("openVideo"),ut=W.Action("changeVideoInf"),at((vt=function(t){Object(u["a"])(r,t);var e=Object(b["a"])(r);function r(){var t;Object(o["a"])(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a)),Object(c["a"])(Object(s["a"])(t),"randomArr",dt,Object(s["a"])(t)),Object(c["a"])(Object(s["a"])(t),"setCat2RidAction",ft,Object(s["a"])(t)),Object(c["a"])(Object(s["a"])(t),"getCat2Arr",ht,Object(s["a"])(t)),Object(c["a"])(Object(s["a"])(t),"getWatchBlockArrByRid",yt,Object(s["a"])(t)),Object(c["a"])(Object(s["a"])(t),"openVideo",Ot,Object(s["a"])(t)),Object(c["a"])(Object(s["a"])(t),"changeVideoInf",jt,Object(s["a"])(t)),Object(p["a"])(Object(s["a"])(t),"messageList",[{text:"第一条1",id:1},{text:"第二条2",id:2},{text:"第三条3",id:3}]),Object(p["a"])(Object(s["a"])(t),"index",0),Object(p["a"])(Object(s["a"])(t),"direction",1),t}return Object(l["a"])(r,[{key:"left",value:function(){this.direction=-1,this.index-1>=0?this.index--:this.index=this.messageList.length-1}},{key:"right",value:function(){this.direction=1,this.index+1>=this.messageList.length?this.index=0:this.index+=1}},{key:"mounted",value:function(){}},{key:"changeSubTab",value:function(t){console.log(t),this.$refs.subCarousel.setActiveItem(t.rid),this.setCat2RidAction(t.rid),this.getWatchBlockArrByRid()}},{key:"openVideoInf",value:function(t){var e=this;console.log(t),this.changeVideoInf(t),setTimeout((function(){e.openVideo()}),300)}},{key:"enter",value:function(t,e){Kt()(t,{opacity:0,translateX:50*this.direction+"px"},{duration:0,complete:e}),Kt()(t,{translateX:"0px",opacity:1,scale:1},{duration:300,complete:e})}},{key:"leave",value:function(t,e){Kt()(t,{opacity:0,scale:.8,translateX:50*this.direction*-1+"px"},{duration:300,complete:e})}},{key:"showItem",get:function(){return this.messageList[this.index]}},{key:"cat2Arr",get:function(){return this.getCat2Arr}}]),r}(f["c"]),pt=vt,dt=Object(d["a"])(pt.prototype,"randomArr",[it],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ft=Object(d["a"])(pt.prototype,"setCat2RidAction",[ct],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ht=Object(d["a"])(pt.prototype,"getCat2Arr",[ot],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),yt=Object(d["a"])(pt.prototype,"getWatchBlockArrByRid",[lt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ot=Object(d["a"])(pt.prototype,"openVideo",[st],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),jt=Object(d["a"])(pt.prototype,"changeVideoInf",[ut],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),bt=pt))||bt),ne=re,ae=(r("8c2d"),Object(E["a"])(ne,G,L,!1,null,null,null)),ie=ae.exports,ce=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l([t.padArr],(function(e){return r("div",{key:JSON.stringify(e),staticClass:"flex_con pad_con"},t._l(e,(function(e){return r("el-card",{key:e.name,staticClass:"box-card chooseAble",attrs:{tabindex:"0"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.changePad(e)}}},[t._v(" "+t._s(e.name)+" ")])})),1)})),t._l([t.navArr],(function(e){return r("div",{key:JSON.stringify(e),staticClass:"flex_con nan_con"},t._l(e,(function(e){return r("el-card",{key:e.name,staticClass:"box-card chooseAble",attrs:{tabindex:"0"},nativeOn:{focus:function(r){return t.changeTab(e)}}},[t._v(" "+t._s(e.name)+" ")])})),1)})),t._l([t.cat2Arr],(function(e){return r("div",{key:JSON.stringify(e),staticClass:"flex_con subNan_con"},t._l(e,(function(e){return r("el-card",{key:e.name,staticClass:"box-card chooseAble chooseAble_sub",attrs:{tabindex:"0"},nativeOn:{focus:function(r){return t.changeSubTab(e)}}},[t._v(" "+t._s(e.name)+" ")])})),1)}))],2)},oe=[],le=(r("4c53"),gt=Object(f["a"])({name:"navCon",components:{}}),At=Ht.State("padArr"),mt=Ht.State("navArr"),kt=Ht.Action("setCat1RidAction"),wt=Ht.Action("setCat2RidAction"),Ct=Ht.Action("setCat2ArrAction"),_t=Ht.Getter("getCat2Arr"),Rt=Ht.Action("getWatchBlockArrByRid"),gt((Tt=function(t){Object(u["a"])(r,t);var e=Object(b["a"])(r);function r(){var t;Object(o["a"])(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a)),Object(c["a"])(Object(s["a"])(t),"padArr",Bt,Object(s["a"])(t)),Object(c["a"])(Object(s["a"])(t),"navArr",St,Object(s["a"])(t)),Object(c["a"])(Object(s["a"])(t),"setCat1RidAction",It,Object(s["a"])(t)),Object(c["a"])(Object(s["a"])(t),"setCat2RidAction",Pt,Object(s["a"])(t)),Object(c["a"])(Object(s["a"])(t),"setCat2ArrAction",zt,Object(s["a"])(t)),Object(c["a"])(Object(s["a"])(t),"getCat2Arr",Wt,Object(s["a"])(t)),Object(c["a"])(Object(s["a"])(t),"getWatchBlockArrByRid",Dt,Object(s["a"])(t)),t}return Object(l["a"])(r,[{key:"mounted",value:function(){this.changeTab(this.navArr[0])}},{key:"changeTab",value:function(t){this.setCat1RidAction(t.rid);var e=t.sub||[];e[0]&&this.setCat2RidAction(e[0].rid),this.setCat2ArrAction(t.sub||[]),this.getWatchBlockArrByRid()}},{key:"changeSubTab",value:function(t){this.setCat2RidAction(t.rid),this.getWatchBlockArrByRid()}},{key:"changePad",value:function(t){}},{key:"cat2Arr",get:function(){return this.getCat2Arr}}]),r}(f["c"]),Vt=Tt,Bt=Object(d["a"])(Vt.prototype,"padArr",[At],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),St=Object(d["a"])(Vt.prototype,"navArr",[mt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),It=Object(d["a"])(Vt.prototype,"setCat1RidAction",[kt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Pt=Object(d["a"])(Vt.prototype,"setCat2RidAction",[wt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),zt=Object(d["a"])(Vt.prototype,"setCat2ArrAction",[Ct],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Wt=Object(d["a"])(Vt.prototype,"getCat2Arr",[_t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Dt=Object(d["a"])(Vt.prototype,"getWatchBlockArrByRid",[Rt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),xt=Vt))||xt),se=le,ue=Object(E["a"])(se,ce,oe,!1,null,null,null),be=ue.exports,pe=(Et=Object(f["a"])({name:"App",components:{videoDrawer:J,block:ie,navCon:be}}),$t=Ht.Getter("allArr"),Et((Nt=function(t){Object(u["a"])(r,t);var e=Object(b["a"])(r);function r(){var t;Object(o["a"])(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a)),Object(c["a"])(Object(s["a"])(t),"getAllArr",Lt,Object(s["a"])(t)),t}return Object(l["a"])(r,[{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.getChooseAble(),t.inputs[0].focus()}))}},{key:"getChooseAble",value:function(){var t=Array.from(document.querySelectorAll(".el-header .chooseAble")),e=Array.from(document.querySelectorAll(".video_carousel .chooseAble"));this.inputs=t.concat(e)}},{key:"keyDown",value:function(t){var e=this;this.$nextTick((function(){e.getChooseAble();var r=document.activeElement;t=window.event||t;for(var n=t.keyCode,a=0;a<e.inputs.length;a++)if(e.inputs[a]===r)break;var i=a,c=0;while(i>=e.allArr[c].length)if(i-=e.allArr[c++].length,!e.allArr[c])break;var o=e.allArr[c].length;switch(n){case 37:a>0&&e.inputs[a-1].focus();break;case 38:a-o>=0?e.inputs[a-o].focus():e.inputs[0].focus();break;case 39:a<e.inputs.length-1&&e.inputs[a+1].focus();break;case 40:a+o<e.inputs.length&&e.inputs[a+o].focus();break}}))}},{key:"allArr",get:function(){return this.getAllArr}}]),r}(f["c"]),Gt=Nt,Lt=Object(d["a"])(Gt.prototype,"getAllArr",[$t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Jt=Gt))||Jt),de=pe,fe=(r("5c0b"),Object(E["a"])(de,a,i,!1,null,null,null)),he=fe.exports,ye=r("5c96"),Oe=r.n(ye);r("0fae");n["default"].use(Oe.a),n["default"].config.productionTip=!1,new n["default"]({store:P,render:function(t){return t(he)}}).$mount("#app")},5732:function(t,e,r){},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"6cff":function(t,e,r){},"6fbf":function(t,e,r){"use strict";var n=r("5732"),a=r.n(n);a.a},"6fdc":function(t,e,r){"use strict";var n=r("8bd7"),a=r.n(n);a.a},"8bd7":function(t,e,r){},"8c2d":function(t,e,r){"use strict";var n=r("6cff"),a=r.n(n);a.a},"9c0c":function(t,e,r){},db90:function(t){t.exports=JSON.parse('{"padArr":[{"name":"历史记录"},{"name":"关注动态"},{"name":"我的收藏"},{"name":"个人信息"}],"navArr":[{"name":"舞蹈","rid":"129","sub":[{"name":"宅舞","rid":"20"},{"name":"街舞","rid":"198"}]},{"name":"游戏","rid":"4","sub":[{"name":"单击","rid":"33"},{"name":"网友","rid":"44"}]},{"name":"知识","rid":"36"},{"name":"数码","rid":"188"},{"name":"生活","rid":"160"},{"name":"鬼畜","rid":"119"},{"name":"时尚","rid":"5"}]}')}});