(function(e){function n(n){for(var o,i,u=n[0],s=n[1],c=n[2],l=0,d=[];l<u.length;l++)i=u[l],r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,i=1;i<t.length;i++){var s=t[i];0!==r[s]&&(o=!1)}o&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={index:0},a=[];function i(e){return u.p+"static/js/"+({"pages-index-index":"pages-index-index","pages-soft-soft":"pages-soft-soft","pages-version-version":"pages-version-version"}[e]||e)+"."+{"pages-index-index":"01c7f04d","pages-soft-soft":"aa398468","pages-version-version":"9d578bca"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e),a=function(n){s.onerror=s.onload=null,clearTimeout(c);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,t[1](i)}r[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/h5/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var f=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("c23e")},2302:function(e,n,t){"use strict";t.r(n);var o=t("309a"),r=t("5208");for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);t("99ac");var i,u=t("f0c5"),s=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=s.exports},"309a":function(e,n,t){"use strict";var o,r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},a=[];t.d(n,"b",function(){return r}),t.d(n,"c",function(){return a}),t.d(n,"a",function(){return o})},"3e22":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={appid:"__UNI__C04C901"};n.default=o},5208:function(e,n,t){"use strict";t.r(n);var o=t("8a1b"),r=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=r.a},5689:function(e,n,t){var o=t("c427");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=t("4f06").default;r("513dec01",o,!0,{sourceMap:!1,shadowMode:!1})},"6a57":function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.softType=n.banner=n.test=void 0;var r=o(t("e4cd")),a=function(e){return r.default.interceptor.response=function(e){return console.log("个性化response...."),e},r.default.request({baseUrl:"https://unidemo.dcloud.net.cn/",url:"ajax/echo/text?name=uni-app",dataType:"json",data:e})};n.test=a;var i=function(e){return r.default.request({url:"/banner/36kr",method:"GET",data:e})};n.banner=i;var u=function(e){return r.default.request({baseUrl:"https://douban.uieee.com/",url:"v2/movie/coming_soon",method:"GET",data:e})};n.softType=u;var s={test:a,banner:i,softType:u};n.default=s},7327:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={pages:{"pages/index/index":{},"pages/soft/soft":{},"pages/version/version":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"米橙",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8",titleNView:!1}};n.default=o},"8a1b":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={globalData:{httpUrl:"test.mc.cn"},onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},"99ac":function(e,n,t){"use strict";var o=t("5689"),r=t.n(o);r.a},c23e:function(e,n,t){"use strict";var o=t("288e"),r=o(t("cebc"));t("cadf"),t("551c"),t("097d"),t("f664"),t("1c31"),t("921b");var a=o(t("e143")),i=o(t("2302")),u=o(t("6a57"));a.default.prototype.$api=u.default,a.default.config.productionTip=!1,i.default.mpType="app";var s=new a.default((0,r.default)({},i.default));s.$mount()},c427:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */*{font-family:SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif}uni-page-body{background-color:#eee;padding-top:%?88?%}.top{display:block;text-align:center;width:100%;font-size:%?28?%;font-weight:400;color:#333;height:%?88?%;line-height:%?88?%;background-color:#fff;position:fixed;top:0;left:0;right:0;z-index:99;box-shadow:0 4px 10px rgba(0,0,0,.08)}body.?%PAGE?%{background-color:#eee}",""])},e4cd:function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("5176")),a=(o(t("f499")),o(t("795b"))),i={config:{baseUrl:"https://test.mc.cn/",header:{"Content-Type":"application/json;charset=UTF-8"},data:{},method:"GET",dataType:"json",responseType:"text",success:function(){},fail:function(){},complete:function(){}},interceptor:{request:null,response:null},request:function(e){var n=this;return e||(e={}),e.baseUrl=e.baseUrl||this.config.baseUrl,e.dataType=e.dataType||this.config.dataType,e.url=e.baseUrl+e.url,e.data=e.data||{},e.method=e.method||this.config.method,new a.default(function(t,o){var a=null;e.complete=function(e){var r=e.statusCode;if(e.config=a,n.interceptor.response){var i=n.interceptor.response(e);i&&(e=i)}s(e),200===r?t(e):o(e)},a=(0,r.default)({},n.config,e),a.requestId=(new Date).getTime(),n.interceptor.request&&n.interceptor.request(a),u(a),uni.request(a)})},get:function(e,n,t){return t||(t={}),t.url=e,t.data=n,t.method="GET",this.request(t)},post:function(e,n,t){return t||(t={}),t.url=e,t.data=n,t.method="POST",this.request(t)},put:function(e,n,t){return t||(t={}),t.url=e,t.data=n,t.method="PUT",this.request(t)},delete:function(e,n,t){return t||(t={}),t.url=e,t.data=n,t.method="DELETE",this.request(t)}};function u(e){0}function s(e){var n=e.statusCode;switch(n){case 200:break;case 401:break;case 404:break;default:break}}n.default=i},f664:function(e,n,t){"use strict";(function(e){var n=t("288e"),o=n(t("5176")),r=n(t("e143"));e["____C04C901____"]=!0,delete e["____C04C901____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"米橙",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8",titleNView:!1}},e.__uniConfig.router={mode:"hash",base:"/h5/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},r.default.component("pages-index-index",function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("413c"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),r.default.component("pages-soft-soft",function(e){var n={component:t.e("pages-soft-soft").then(function(){return e(t("6743"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),r.default.component("pages-version-version",function(e){var n={component:t.e("pages-version-version").then(function(){return e(t("1465"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n}),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:(0,o.default)({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/soft/soft",component:{render:function(e){return e("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{})},[e("pages-soft-soft",{slot:"page"})])}},meta:{name:"pages-soft-soft",isNVue:!1,pagePath:"pages/soft/soft",windowTop:44}},{path:"/pages/version/version",component:{render:function(e){return e("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{})},[e("pages-version-version",{slot:"page"})])}},meta:{name:"pages-version-version",isNVue:!1,pagePath:"pages/version/version",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,t("c8ba"))}});