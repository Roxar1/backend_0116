(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-253dac74":"696b55e2","chunk-50a90ca6":"e28d8ab2","chunk-6a79be0f":"a1d44b80"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-253dac74":1,"chunk-50a90ca6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-253dac74":"ca8ce388","chunk-50a90ca6":"ed686384","chunk-6a79be0f":"31d6cfe0"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},u=[],c=(n("034f"),n("2877")),i={},s=Object(c["a"])(i,o,u,!1,null,null,null),l=s.exports,p=(n("b0c0"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),f=n("8c4f"),m=(n("d3b7"),[{path:"/home",name:"Home",component:function(){return Promise.all([n.e("chunk-253dac74"),n.e("chunk-6a79be0f")]).then(n.bind(null,"bb51"))},meta:{actionbar:{header:{title:"Map Home"}}}},{path:"/register",name:"Register",component:function(){return Promise.all([n.e("chunk-253dac74"),n.e("chunk-50a90ca6")]).then(n.bind(null,"73cf"))},meta:{actionbar:{header:{title:"Registration"}}}},{path:"/*",redirect:"/home"}]),d=n("2f62"),h=n("ade3"),g="SET_REVERSE_OPENED",v="HEADER_SET_TITLE",b="AUTH_SET_TOKEN",w="SIGNUP_SUCCESS",y="SET_LOCALSTORAGE",O="SET_ERROR_MESSAGE",k="AUTH_LOGOUT",E={openedFlag:!1},S={opened:function(e){return e.openedFlag}},_={setOpened:function(e,t){e.commit(g,t)}},j=Object(h["a"])({},g,(function(e,t){e.openedFlag=t})),P={namespaced:!0,state:E,getters:S,actions:_,mutations:j},R=n("53ca"),T=n("7424"),x=n("d4ec"),I=n("bee2"),L=function(){function e(){Object(x["a"])(this,e)}return Object(I["a"])(e,[{key:"setItem",value:function(e,t){return"string"===typeof t||"number"===typeof t?window.localStorage.setItem(e,t):window.localStorage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"removeItem",value:function(e){return window.localStorage.removeItem(e),Promise.resolve()}},{key:"getItem",value:function(e){var t=window.localStorage.getItem(e);if(!t||"undefined"===t)return Promise.reject();try{return t=JSON.parse(t),Promise.resolve(t)}catch(n){return Promise.resolve(t)}}},{key:"clear",value:function(){return window.localStorage.clear(),Promise.resolve()}}]),e}(),A=new L,N=A,U={TOKEN_KEY:"TOKEN",USER_KEY:"USER",DEVICE_KEY:"CURRENT_DEVICE",SIGNUP_KEY:"SIGNUP_DATA"},C=n("1232"),K={auth:!1,user:null,signup_text:"",login_err_message:"",token:null},D={checkLogin:function(e){return e.auth},getuser:function(e){return e.user},getLocalStorage:function(e){return e.token},getErrMsg:function(e){return e.login_err_message}},G={login:function(e,t){return T["a"].login(t).then((function(e){q.dispatch("auth/confirmActive",e)}),(function(e){var t=e.data;return Promise.reject(t)}))},register:function(e,t){return T["a"].register(t).then((function(t){return e.commit(w,t.text),Promise.resolve()}),(function(e){var t=e.data;return Promise.reject(t)}))},autoLogin:function(e,t){return T["a"].autoLogin(t).then((function(t){var n=Object(C["a"])(t.token);return N.setItem(U.TOKEN_KEY,t.token),e.commit(b,n.user),Promise.resolve()}),(function(e){var t=e.data;return Promise.reject(t)}))},getLocalStorage:function(e){var t=N.getItem(U.TOKEN_KEY);t.then((function(t){var n=Object(C["a"])(t);e.commit(b,n.user)})).catch((function(e){return console.log("err",e)}))},confirmActive:function(e,t){var n=Object(R["a"])(t);if("string"===n)e.commit(O,t);else{var r=Object(C["a"])(t.token);r.user.active?(N.setItem(U.TOKEN_KEY,t.token),e.commit(b,r.user)):e.commit(O,"Your account does not verify. Please verify your account")}},logout:function(e){e.commit(k),Q.replace({name:"Home"})},updatePhoto:function(e,t){return T["a"].updatePhoto(t).then((function(t){return console.log(e),console.log("updatePhoto",t),Promise.resolve()}),(function(e){var t=e.data;return Promise.reject(t)}))}},H=(r={},Object(h["a"])(r,b,(function(e,t){e.user=t,e.auth=!0})),Object(h["a"])(r,w,(function(e,t){e.signup_text=t})),Object(h["a"])(r,y,(function(e,t){e.token=t})),Object(h["a"])(r,O,(function(e,t){e.login_err_message=t})),Object(h["a"])(r,k,(function(e){e.user=null,e.auth=null,e.token=null,N.clear()})),r),M={namespaced:!0,state:K,getters:D,actions:G,mutations:H},Y={title:"US Government"},J={checkLogin:function(e){return e.auth}},F={setTitle:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"US Government";e.commit(v,t),document&&(document.title=t+("US Government"!==t?" - US Government":""))}},V=Object(h["a"])({},v,(function(e,t){e.title=t})),B={namespaced:!0,state:Y,getters:J,actions:F,mutations:V};a["a"].use(d["a"]);var q=new d["a"].Store({state:{appVersion:3},modules:{reverse:P,auth:M,actionbar:B}});a["a"].use(f["a"]);var z=new f["a"]({mode:"history",base:"/",routes:m});z.beforeEach(function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.meta.actionbar||{},e.next=3,q.dispatch("auth/getLocalStorage");case 3:o=e.sent,u=q.getters["auth/checkLogin"],console.log("data",o),"Register"===t.name&&u?(z.replace({name:"Home"}),q.dispatch("actionbar/setTitle","Map Home")):(r(),q.dispatch("actionbar/setTitle",a.header.title));case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),z.stack=[],z._push=z.push,z._replace=z.replace,z.push=function(e,t,n){z._push(e,t,n)},z.replace=function(e){"search"!==e.name?(z.stack.pop(),z.stack.push(e)):z.stack=[],z._push(e)};var Q=z,$=n("755e"),W=(n("f0bb"),n("27e3")),Z=n.n(W),X=n("ecee"),ee=n("c074"),te=n("ad3d"),ne=(n("4989"),n("ab8b"),n("3c76"),n("8f68")),re=n.n(ne),ae=n("f273"),oe=n.n(ae),ue=n("59ca"),ce=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyD3L0J7TyO67mUysv6pyUWQF3SypLqwI_k",authDomain:"us--map.firebaseapp.com",databaseURL:"https://us--map.firebaseio.com",projectId:"us--map",storageBucket:"us--map.appspot.com",messagingSenderId:"1048878076507",appId:"1:1048878076507:web:dfc4cc520faa270a34657e",measurementId:"G-DZ69LJVQE2"});ue["initializeApp"](ce);var ie,se=ue["auth"]();X["c"].add(ee["a"]),a["a"].component("v-icon",te["a"]),a["a"].use(Z.a,re.a,oe.a),a["a"].use($,{load:{key:"AIzaSyDoi0kDoetjxsvsctCrRb99I5lu1GJMj_8",libraries:"places,drawing,geometry",installComponents:!0}}),a["a"].config.productionTip=!1,se.onAuthStateChanged((function(e){console.log("user",e),ie||(ie=new a["a"]({router:Q,store:q,render:function(e){return e(l)}}).$mount("#app"))}))},7424:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n("99af"),n("96cf");var r=n("1da1"),a=n("bc3a"),o=n.n(a),u=n("2b0e"),c=n("d00d"),i=n.n(c);n("f59c");u["a"].use(i.a,{messageOptions:{timeout:3e3,pauseOnInteract:!0}});var s=new u["a"],l="http://localhost:4000/earth",p="http://localhost:4000/user",f=function(e){return function(){return e.apply(void 0,arguments).catch((function(e){s.flash("".concat(e.response.status,": ").concat(e.response.statusText),"error")}))}},m={getAllData:f(Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(l+"/all");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),searchPolygon:f(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(l+"/search",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),saveData:f(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(l+"/save",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),login:f(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(p+"/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),register:f(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(p+"/register",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),autoLogin:f(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(p+"/autologin",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),updatePhoto:f(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.put(p+"/updatePhoto",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"85ec":function(e,t,n){},f0bb:function(e,t,n){}});
//# sourceMappingURL=app.947c3501.js.map