(function(t){function e(e){for(var a,i,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"324021f0"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,r[1](c)}n[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-router-md-transition/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("8a23"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("nav-drawer"),r("md-transition",{staticClass:"md-dark",attrs:{reverse:t.routeBack,disabled:t.transitionDisabled}},[r("keep-alive",[r("router-view")],1)],1)],1)},o=[],i=(r("b0c0"),r("ac1f"),r("1276"),r("e211")),s=r.n(i),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{app:"",dark:"",tag:"aside"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[r("v-list-item",{attrs:{to:{name:"home"},exact:""}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-home")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Home")])],1)],1),r("v-list-item",{attrs:{to:{name:"about"},exact:""}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-information")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("About")])],1)],1)],1)],1)},c=[],l={name:"NavDrawer",computed:{drawer:{get:function(){return this.$store.state.drawer},set:function(t){this.$store.dispatch("toggleDrawer",{drawer:t})}}}},p=l,d=r("2877"),f=r("6544"),v=r.n(f),m=r("132d"),h=r("8860"),b=r("da13"),g=r("1800"),w=r("5d23"),y=r("f774"),_=Object(d["a"])(p,u,c,!1,null,"1117aeb6",null),k=_.exports;v()(_,{VIcon:m["a"],VList:h["a"],VListItem:b["a"],VListItemAction:g["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VNavigationDrawer:y["a"]});var V={name:"App",components:{"nav-drawer":k,"md-transition":s.a},data:function(){return{routeBack:!1,transitionDisabled:!1}},watch:{$route:function(t,e){if(this.transitionDisabled=!e.name,"/"!==t.path)if("/"!==e.path){var r=t.path.split("/").length,a=e.path.split("/").length;this.routeBack=r<a}else this.routeBack=!1;else this.routeBack=!0}}},O=V,x=(r("034f"),r("7496")),j=Object(d["a"])(O,n,o,!1,null,null,null),C=j.exports;v()(j,{VApp:x["a"]});r("d3b7");var D=r("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-app-bar",{attrs:{app:"",dark:"",tag:"section"}},[a("v-app-bar-nav-icon",{staticClass:"d-lg-none",on:{click:function(e){return t.$store.dispatch("toggleDrawer")}}}),a("v-toolbar-title",[t._v("Home")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",href:"https://github.com/1isten/vue-router-md-transition/tree/demo",target:"_blank"}},[a("v-icon",[t._v("mdi-github-circle")])],1)],1),a("v-container",{staticClass:"fill-height",attrs:{tag:"section"}},[a("v-layout",{attrs:{column:"","justify-center":"","align-center":"","text-center":""}},[a("v-flex",{attrs:{shrink:""}},[a("v-img",{attrs:{src:r("9b19"),height:"200",contain:""}})],1),a("v-flex",{attrs:{shrink:""}},[a("h1",{staticClass:"display-1 font-weight-black"},[t._v(" I ♥️ Vuetify ")]),a("p",{staticClass:"body-1"},[a("br"),a("a",{attrs:{href:"https://github.com/1isten/vue-router-md-transition",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue-router-md-transition")])]),a("p",{staticClass:"body-2"},[t._v(" Material Design"),a("br"),t._v(" navigation transition effect ")])])],1)],1)],1)},I=[],L={name:"Home"},P=L,T=r("40dc"),A=r("5bc1"),B=r("8336"),$=r("a523"),M=r("a75b"),S=r("0e8f"),R=r("adda"),G=r("a722"),H=r("2fa4"),N=r("2a7f"),J=Object(d["a"])(P,E,I,!1,null,"848825e0",null),W=J.exports;v()(J,{VAppBar:T["a"],VAppBarNavIcon:A["a"],VBtn:B["a"],VContainer:$["a"],VContent:M["a"],VFlex:S["a"],VIcon:m["a"],VImg:R["a"],VLayout:G["a"],VSpacer:H["a"],VToolbarTitle:N["a"]}),a["a"].use(D["a"]);var q=new D["a"]({routes:[{path:"/",name:"home",components:{default:W}},{path:"/about",name:"about",components:{default:function(){return r.e("about").then(r.bind(null,"f820"))}}}]}),F=r("2f62");a["a"].use(F["a"]);var z=new F["a"].Store({state:{drawer:null},getters:{drawerOpened:function(t){return!!t.drawer}},mutations:{TOGGLE_DRAWER:function(t,e){var r=e.drawer;t.drawer=r}},actions:{toggleDrawer:function(t,e){var r=t.commit,a=t.getters;r("TOGGLE_DRAWER",e||{drawer:!a.drawerOpened})}},modules:{}}),K=r("f309"),Q=(r("d5e8"),r("5363"),r("27d6")),U=r.n(Q);a["a"].use(K["a"]);var X=new K["a"]({theme:{dark:!0,themes:{light:{primary:"#ee44aa"},dark:{primary:"#ee44aa"}},options:{customProperties:!0}}});U.a.load({google:{families:["Roboto Mono","Material+Icons"]}}),a["a"].config.productionTip=!1,new a["a"]({router:q,store:z,vuetify:X,render:function(t){return t(C)}}).$mount("#app")},"8a23":function(t,e,r){},"9b19":function(t,e,r){t.exports=r.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.7f5c5396.js.map