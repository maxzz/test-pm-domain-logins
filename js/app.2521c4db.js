(function(e){function t(t){for(var c,s,r=t[0],i=t[1],b=t[2],d=0,u=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(t);while(u.length)u.shift()();return o.push.apply(o,b||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],c=!0,r=1;r<a.length;r++){var i=a[r];0!==n[i]&&(c=!1)}c&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var c={},n={app:0},o=[];function s(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=c,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(a,c,function(t){return e[t]}.bind(null,c));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/test-pm-domain-logins/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var b=0;b<r.length;b++)t(r[b]);var l=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"3d2f":function(e,t,a){},4084:function(e,t,a){},"49c4":function(e,t,a){"use strict";a("5781")},5781:function(e,t,a){},"9cdc":function(e,t,a){"use strict";a("c701")},a23d:function(e,t,a){},a8c1:function(e,t,a){"use strict";a("4084")},abd0:function(e,t,a){"use strict";a("3d2f")},acd1:function(e,t,a){"use strict";a("fc03")},c701:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n={id:"nav"},o=Object(c["g"])("Home");function s(e,t,a,s,r,i){const b=Object(c["x"])("router-link"),l=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["h"])("div",n,[Object(c["h"])(b,{to:"/"},{default:Object(c["E"])(()=>[o]),_:1}),Object(c["h"])(b,{to:{name:"LoginA"}},{default:Object(c["E"])(()=>[Object(c["g"])("Login "+Object(c["A"])(e.logins.a.disp),1)]),_:1}),Object(c["h"])(b,{to:{name:"LoginB"}},{default:Object(c["E"])(()=>[Object(c["g"])("Login "+Object(c["A"])(e.logins.b.disp),1)]),_:1}),Object(c["h"])(b,{to:{name:"ChangeA"}},{default:Object(c["E"])(()=>[Object(c["g"])("Change "+Object(c["A"])(e.logins.a.disp),1)]),_:1}),Object(c["h"])(b,{to:{name:"ChangeB"}},{default:Object(c["E"])(()=>[Object(c["g"])("Change "+Object(c["A"])(e.logins.b.disp),1)]),_:1})]),Object(c["h"])(l,null,{default:Object(c["E"])(({Component:e,route:t})=>[Object(c["h"])(c["b"],{name:t.meta&&t.meta.transition},{default:Object(c["E"])(()=>[(Object(c["q"])(),Object(c["e"])(Object(c["y"])(e)))]),_:2},1032,["name"])]),_:1})],64)}var r=a("9ab4"),i=a("5502"),b=Object(c["i"])({computed:Object(r["a"])({},Object(i["b"])(["logins"]))});a("9cdc");b.render=s;var l=b,d=a("6c02");const u=Object(c["G"])("data-v-d4f02894");Object(c["t"])("data-v-d4f02894");const p={class:"page-home top-container"},O={class:"form-title"},j=Object(c["h"])("div",{class:"status"}," Not logged in. ",-1),f={class:"fields"},g=Object(c["h"])("div",{class:"lbl"},"Username",-1),h=Object(c["h"])("div",{class:"lbl"},"Password",-1),m=Object(c["h"])("button",{class:"btn-logout"},"Logout",-1);Object(c["r"])();const v=u((function(e,t,a,n,o,s){return Object(c["q"])(),Object(c["e"])("div",p,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(e.logins,(e,t)=>(Object(c["q"])(),Object(c["e"])("div",{key:t,class:["website",{loggedin:e.logged}]},[Object(c["h"])("div",O," Login website "+Object(c["A"])(e.disp),1),j,Object(c["h"])("div",f,[g,Object(c["F"])(Object(c["h"])("input",{class:"inp",type:"text","onUpdate:modelValue":t=>e.user=t},null,8,["onUpdate:modelValue"]),[[c["C"],e.user]]),h,Object(c["F"])(Object(c["h"])("input",{class:"inp",type:"text","onUpdate:modelValue":t=>e.pass=t},null,8,["onUpdate:modelValue"]),[[c["C"],e.pass]])]),m],2))),128))])}));var w=Object(c["i"])({computed:Object(r["a"])({},Object(i["b"])(["logins"]))});a("acd1");w.render=v,w.__scopeId="data-v-d4f02894";var y=w;const x=Object(c["G"])("data-v-137dc404");Object(c["t"])("data-v-137dc404");const _={class:"page-a top-container"};Object(c["r"])();const L=x((function(e,t,a,n,o,s){const r=Object(c["x"])("LoginView");return Object(c["q"])(),Object(c["e"])("div",_,[Object(c["h"])(r,{"form-name":"a"})])})),C=Object(c["G"])("data-v-24294b81");Object(c["t"])("data-v-24294b81");const A={class:"login-view"},V={key:0},q=Object(c["h"])("div",{class:"svg-bkg"},[Object(c["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[Object(c["h"])("path",{class:"b",d:"M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16z"}),Object(c["h"])("path",{class:"b",d:"M19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z"})])],-1),k={class:"fields"},P=Object(c["h"])("input",{"area-hidden":"true",type:"email",name:"username",autocomplete:"username",value:"maxzz",style:{display:"none"}},null,-1),B=Object(c["f"])('<label for="pass" data-v-24294b81>Current</label><input id="cpass1" type="password" placeholder="Current password" autocomplete="old-password" data-v-24294b81><label for="pass" data-v-24294b81>New</label><input id="cpass2" type="password" placeholder="New password" autocomplete="current-password" data-v-24294b81><label for="pass" data-v-24294b81>Confirm</label><input id="cpass3" type="password" placeholder="Confirm new password" autocomplete="confirm-password" data-v-24294b81>',6),M=Object(c["g"])("Change"),N={key:1},E=Object(c["h"])("div",{class:"svg-bkg"},[Object(c["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14"},[Object(c["h"])("path",{class:"a",d:"M9.543,5.728h3.392a.565.565,0,0,1,.565.565V9.12A1.979,1.979,0,0,1,10.469,10.8"}),Object(c["h"])("path",{class:"a",d:"M5.966,3.468a1.7,1.7,0,1,1,1.32,1.107"}),Object(c["h"])("path",{class:"a",d:"M4.508,10.25a3.109,3.109,0,0,0,6.166-.565V6.293a.565.565,0,0,0-.565-.565H7.283"}),Object(c["h"])("rect",{class:"a",x:"0.5",y:"3.467",width:"6.783",height:"6.783",rx:"1"}),Object(c["h"])("line",{class:"a",x1:"2.196",y1:"5.163",x2:"5.587",y2:"5.163"}),Object(c["h"])("line",{class:"a",x1:"3.891",y1:"5.163",x2:"3.891",y2:"8.554"}),Object(c["h"])("circle",{class:"a",cx:"11.522",cy:"3.467",r:"1.13"})])],-1),U={class:"fields"},G=Object(c["h"])("label",{for:"user"},"Username",-1),I=Object(c["h"])("input",{id:"user",type:"text",placeholder:"Username",autocomplete:"username"},null,-1),S=Object(c["h"])("label",{for:"pass"},"Password",-1),z=Object(c["h"])("input",{id:"pass",type:"password",placeholder:"Password",autocomplete:"current-password"},null,-1),H=Object(c["g"])("Login");Object(c["r"])();const F=C((function(e,t,a,n,o,s){const r=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["e"])("div",A,[Object(c["h"])("div",{class:["page-title",{"login-a":"a"===e.formName,"login-b":"b"===e.formName}]},[Object(c["h"])("span",null,Object(c["A"])(e.login.disp),1)],2),e.isClogin?(Object(c["q"])(),Object(c["e"])("div",V,[Object(c["h"])("form",{class:["form",["a"===e.formName?"login-a":"login-b"]]},[q,Object(c["h"])("div",k,[P,B,Object(c["h"])(r,{to:"/"},{default:C(()=>[M]),_:1})])],2)])):(Object(c["q"])(),Object(c["e"])("div",N,[Object(c["h"])("form",{class:["form",["a"===e.formName?"login-a":"login-b"]]},[E,Object(c["h"])("div",U,[G,I,S,z,Object(c["h"])(r,{to:"/"},{default:C(()=>[H]),_:1})])],2)]))])}));var J=Object(c["i"])({props:{formName:{type:String,required:!0},isClogin:{type:Boolean,default:!1}},computed:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["logins"])),{login:function(){return this.logins[this.formName]}})});a("efae");J.render=F,J.__scopeId="data-v-24294b81";var T=J,D=Object(c["i"])({components:{LoginView:T}});a("abd0");D.render=L,D.__scopeId="data-v-137dc404";var K=D;const Q=Object(c["G"])("data-v-3a987843");Object(c["t"])("data-v-3a987843");const R={class:"page-b top-container"};Object(c["r"])();const W=Q((function(e,t,a,n,o,s){const r=Object(c["x"])("LoginView");return Object(c["q"])(),Object(c["e"])("div",R,[Object(c["h"])(r,{"form-name":"b"})])}));var X=Object(c["i"])({components:{LoginView:T}});a("a8c1");X.render=W,X.__scopeId="data-v-3a987843";var Y=X;const Z=Object(c["G"])("data-v-15730b4f");Object(c["t"])("data-v-15730b4f");const $={class:"page-a top-container"};Object(c["r"])();const ee=Z((function(e,t,a,n,o,s){const r=Object(c["x"])("LoginView");return Object(c["q"])(),Object(c["e"])("div",$,[Object(c["h"])(r,{"form-name":"a","is-clogin":""})])}));var te=Object(c["i"])({components:{LoginView:T}});a("e74f");te.render=ee,te.__scopeId="data-v-15730b4f";var ae=te;const ce=Object(c["G"])("data-v-49fa804a");Object(c["t"])("data-v-49fa804a");const ne={class:"page-a top-container"};Object(c["r"])();const oe=ce((function(e,t,a,n,o,s){const r=Object(c["x"])("LoginView");return Object(c["q"])(),Object(c["e"])("div",ne,[Object(c["h"])(r,{"form-name":"b","is-clogin":""})])}));var se=Object(c["i"])({components:{LoginView:T}});a("49c4");se.render=oe,se.__scopeId="data-v-49fa804a";var re=se,ie=[{path:"/",name:"Home",component:y},{path:"/apage",name:"LoginA",component:K,meta:{transition:"route"}},{path:"/bpage",name:"LoginB",component:Y,meta:{transition:"route"}},{path:"/apage/changeA",name:"ChangeA",component:ae,meta:{transition:"route"}},{path:"/apage/changeB",name:"ChangeB",component:re,meta:{transition:"route"}}],be=Object(d["a"])({history:Object(d["b"])("/test-pm-domain-logins/"),routes:ie}),le=be,de=Object(i["a"])({state:{logins:{a:{user:"username 1",pass:"password 1",disp:"A",logged:!1},b:{user:"username 2",pass:"password 2",disp:"B",logged:!1}}},mutations:{},actions:{},modules:{}});Object(c["d"])(l).use(de).use(le).mount("#app")},e369:function(e,t,a){},e74f:function(e,t,a){"use strict";a("e369")},efae:function(e,t,a){"use strict";a("a23d")},fc03:function(e,t,a){}});