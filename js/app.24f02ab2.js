(function(e){function t(t){for(var s,c,r=t[0],i=t[1],l=t[2],b=0,d=[];b<r.length;b++)c=r[b],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,r=1;r<a.length;r++){var i=a[r];0!==n[i]&&(s=!1)}s&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},n={app:0},o=[];function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/test-pm-domain-logins/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var p=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"09b8":function(e,t,a){},"38d1":function(e,t,a){"use strict";a("b0e3")},"3d2f":function(e,t,a){},4084:function(e,t,a){},4639:function(e,t,a){"use strict";a("09b8")},"49c4":function(e,t,a){"use strict";a("5781")},5781:function(e,t,a){},"9cdc":function(e,t,a){"use strict";a("c701")},a8c1:function(e,t,a){"use strict";a("4084")},abd0:function(e,t,a){"use strict";a("3d2f")},b0e3:function(e,t,a){},c701:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);var s=a("7a23");const n={id:"nav"},o=Object(s["f"])("Home");function c(e,t,a,c,r,i){const l=Object(s["w"])("router-link"),p=Object(s["w"])("router-view");return Object(s["p"])(),Object(s["e"])(s["a"],null,[Object(s["g"])("div",n,[Object(s["g"])(l,{to:"/"},{default:Object(s["F"])(()=>[o]),_:1}),Object(s["g"])(l,{to:{name:"LoginA"}},{default:Object(s["F"])(()=>[Object(s["f"])("Login "+Object(s["z"])(e.logins.a.disp),1)]),_:1}),Object(s["g"])(l,{to:{name:"LoginB"}},{default:Object(s["F"])(()=>[Object(s["f"])("Login "+Object(s["z"])(e.logins.b.disp),1)]),_:1}),Object(s["g"])(l,{to:{name:"ChangeA"}},{default:Object(s["F"])(()=>[Object(s["f"])("Change "+Object(s["z"])(e.logins.a.disp),1)]),_:1}),Object(s["g"])(l,{to:{name:"ChangeB"}},{default:Object(s["F"])(()=>[Object(s["f"])("Change "+Object(s["z"])(e.logins.b.disp),1)]),_:1})]),Object(s["g"])(p,null,{default:Object(s["F"])(({Component:e,route:t})=>[Object(s["g"])(s["b"],{name:t.meta&&t.meta.transition},{default:Object(s["F"])(()=>[(Object(s["p"])(),Object(s["e"])(Object(s["x"])(e)))]),_:2},1032,["name"])]),_:1})],64)}var r=a("9ab4"),i=a("5502"),l=Object(s["h"])({computed:Object(r["a"])({},Object(i["b"])(["logins"]))});a("9cdc");l.render=c;var p=l,b=a("6c02");const d=Object(s["I"])("data-v-eec2a23c");Object(s["s"])("data-v-eec2a23c");const u={class:"page-home top-container"},g={class:"form-title"},O={class:"fields"},j=Object(s["g"])("div",{class:"lbl"},"Username",-1),f=Object(s["g"])("div",{class:"lbl"},"Password",-1);Object(s["q"])();const m=d((function(e,t,a,n,o,c){return Object(s["p"])(),Object(s["e"])("div",u,[(Object(s["p"])(!0),Object(s["e"])(s["a"],null,Object(s["v"])(e.logins,(t,a)=>(Object(s["p"])(),Object(s["e"])("div",{key:a,class:["website",{loggedin:t.logged}]},[Object(s["g"])("div",g," Login website "+Object(s["z"])(t.disp),1),Object(s["g"])("div",{class:["log-state",{"logged-state":t.logged}]},Object(s["z"])(t.logged?"Logged in.":"Not logged in."),3),Object(s["g"])("div",O,[j,Object(s["G"])(Object(s["g"])("input",{class:"inp",type:"text","onUpdate:modelValue":e=>t.user=e},null,8,["onUpdate:modelValue"]),[[s["D"],t.user]]),f,Object(s["G"])(Object(s["g"])("input",{class:"inp",type:"text","onUpdate:modelValue":e=>t.pass=e},null,8,["onUpdate:modelValue"]),[[s["D"],t.pass]])]),Object(s["g"])("button",{class:"btn-logout",onClick:t=>e.onLogout(a),dissabled:!t.logged},Object(s["z"])(t.logged?"Log out":"Log in"),9,["onClick","dissabled"])],2))),128))])}));var v=Object(s["h"])({setup:function(){var e=Object(i["c"])(),t=Object(s["c"])((function(){return e.state.logins})),a=function(a){e.dispatch("loggedIn",{form:a,val:!t.value[a].logged})};return{logins:t,onLogout:a}}});a("4639");v.render=m,v.__scopeId="data-v-eec2a23c";var h=v;const w=Object(s["I"])("data-v-137dc404");Object(s["s"])("data-v-137dc404");const y={class:"page-a top-container"};Object(s["q"])();const C=w((function(e,t,a,n,o,c){const r=Object(s["w"])("LoginView");return Object(s["p"])(),Object(s["e"])("div",y,[Object(s["g"])(r,{"form-name":"a"})])})),L=Object(s["I"])("data-v-1fea4883");Object(s["s"])("data-v-1fea4883");const x={class:"login-view"},_={key:0},V=Object(s["g"])("div",{class:"svg-bkg"},[Object(s["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[Object(s["g"])("path",{class:"b",d:"M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16z"}),Object(s["g"])("path",{class:"b",d:"M19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z"})])],-1),P={class:"fields"},U=Object(s["g"])("input",{"area-hidden":"true",type:"email",name:"username",autocomplete:"username",value:"maxzz",style:{display:"none"}},null,-1),I=Object(s["g"])("label",{for:"pass"},"Current",-1),k=Object(s["g"])("label",{for:"pass"},"New",-1),z=Object(s["g"])("label",{for:"pass"},"Confirm",-1),N={class:"reveal"},B=Object(s["f"])(" Reveal"),F={key:1},A=Object(s["g"])("div",{class:"svg-bkg"},[Object(s["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14"},[Object(s["g"])("path",{class:"a",d:"M9.543,5.728h3.392a.565.565,0,0,1,.565.565V9.12A1.979,1.979,0,0,1,10.469,10.8"}),Object(s["g"])("path",{class:"a",d:"M5.966,3.468a1.7,1.7,0,1,1,1.32,1.107"}),Object(s["g"])("path",{class:"a",d:"M4.508,10.25a3.109,3.109,0,0,0,6.166-.565V6.293a.565.565,0,0,0-.565-.565H7.283"}),Object(s["g"])("rect",{class:"a",x:"0.5",y:"3.467",width:"6.783",height:"6.783",rx:"1"}),Object(s["g"])("line",{class:"a",x1:"2.196",y1:"5.163",x2:"5.587",y2:"5.163"}),Object(s["g"])("line",{class:"a",x1:"3.891",y1:"5.163",x2:"3.891",y2:"8.554"}),Object(s["g"])("circle",{class:"a",cx:"11.522",cy:"3.467",r:"1.13"})])],-1),G={class:"fields"},M=Object(s["g"])("label",{for:"user"},"Username",-1),S=Object(s["g"])("label",{for:"pass"},"Password",-1),q={class:"reveal"},H=Object(s["f"])(" Reveal"),T=Object(s["g"])("br",null,null,-1);Object(s["q"])();const D=L((function(e,t,a,n,o,c){return Object(s["p"])(),Object(s["e"])("div",x,[Object(s["g"])("div",{class:["page-title",{"login-a":"a"===e.formName,"login-b":"b"===e.formName}]},[Object(s["g"])("span",null,Object(s["z"])(e.currentForm.disp),1)],2),e.isClogin?(Object(s["p"])(),Object(s["e"])("div",_,[Object(s["g"])("form",{class:["form",e.formClass()]},[V,Object(s["g"])("div",P,[U,I,Object(s["G"])(Object(s["g"])("input",{id:"cpass1",type:e.passwordType,"onUpdate:modelValue":t[1]||(t[1]=t=>e.passwords.p1=t),placeholder:"Current password",autocomplete:"old-password"},null,8,["type"]),[[s["C"],e.passwords.p1]]),k,Object(s["G"])(Object(s["g"])("input",{id:"cpass2",type:e.passwordType,"onUpdate:modelValue":t[2]||(t[2]=t=>e.passwords.p2=t),placeholder:"New password",autocomplete:"current-password"},null,8,["type"]),[[s["C"],e.passwords.p2]]),z,Object(s["G"])(Object(s["g"])("input",{id:"cpass3",type:e.passwordType,"onUpdate:modelValue":t[3]||(t[3]=t=>e.passwords.p3=t),placeholder:"Confirm new password",autocomplete:"confirm-password"},null,8,["type"]),[[s["C"],e.passwords.p3]]),Object(s["g"])("label",N,[Object(s["G"])(Object(s["g"])("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=t=>e.revealPasswords=t)},null,512),[[s["B"],e.revealPasswords]]),B]),Object(s["g"])("button",{onClick:t[5]||(t[5]=Object(s["H"])((...t)=>e.onSubmit(...t),["prevent"]))},"Change")])],2)])):(Object(s["p"])(),Object(s["e"])("div",F,[Object(s["g"])("form",{class:["form",e.formClass()]},[A,Object(s["g"])("div",G,[M,Object(s["G"])(Object(s["g"])("input",{id:"user",type:"text","onUpdate:modelValue":t[6]||(t[6]=t=>e.thisUser=t),placeholder:"Username",autocomplete:"username"},null,512),[[s["D"],e.thisUser]]),S,Object(s["G"])(Object(s["g"])("input",{id:"pass",type:e.passwordType,"onUpdate:modelValue":t[7]||(t[7]=t=>e.thisPass=t),placeholder:"Password",autocomplete:"current-password"},null,8,["type"]),[[s["C"],e.thisPass]]),Object(s["g"])("label",q,[Object(s["G"])(Object(s["g"])("input",{type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=t=>e.revealPasswords=t)},null,512),[[s["B"],e.revealPasswords]]),H]),Object(s["g"])("button",{onClick:t[9]||(t[9]=Object(s["H"])((...t)=>e.onSubmit(...t),["prevent"]))},"Login")])],2)])),T,Object(s["f"])(" "+Object(s["z"])(e.currentForm),1)])}));var J=Object(s["h"])({props:{formName:{type:String,required:!0},isClogin:{type:Boolean,default:!1}},methods:{onSubmit:function(e){if(this.isClogin){var t=this.passwords.p1===this.thisPass;if(!t)return void alert("Current password is incorrect");var a=this.passwords.p2===this.passwords.p3&&this.passwords.p2.trim();if(!a)return void alert("New password not confirmed");this.setLoginCredentials(this.formName,this.thisUser,this.passwords.p2)}else this.setLoginCredentials(this.formName,this.thisUser,this.thisPass),this.setLogged(this.formName,!0);this.$router.push({name:"Home"})}},setup:function(e){var t=Object(i["c"])(),a=Object(s["c"])((function(){return t.state.logins[e.formName]})),n=function(){return"a"===e.formName?"login-a":"login-b"},o=Object(s["u"])(a.value.user),c=Object(s["u"])(a.value.pass),r=Object(s["t"])({p1:a.value.pass,p2:a.value.pass+"1",p3:a.value.pass+"1"}),l=Object(s["u"])(!1),p=Object(s["c"])((function(){return l.value?"text":"password"})),b=function(e,a){return t.dispatch("loggedIn",{form:e,val:a})},d=function(e,a,s){return t.dispatch("loginCredentials",{form:e,user:a,pass:s})};return{currentForm:a,formClass:n,thisUser:o,thisPass:c,passwords:r,revealPasswords:l,passwordType:p,setLogged:b,setLoginCredentials:d}}});a("38d1");J.render=D,J.__scopeId="data-v-1fea4883";var R=J,$=Object(s["h"])({components:{LoginView:R}});a("abd0");$.render=C,$.__scopeId="data-v-137dc404";var E=$;const K=Object(s["I"])("data-v-3a987843");Object(s["s"])("data-v-3a987843");const Q={class:"page-b top-container"};Object(s["q"])();const W=K((function(e,t,a,n,o,c){const r=Object(s["w"])("LoginView");return Object(s["p"])(),Object(s["e"])("div",Q,[Object(s["g"])(r,{"form-name":"b"})])}));var X=Object(s["h"])({components:{LoginView:R}});a("a8c1");X.render=W,X.__scopeId="data-v-3a987843";var Y=X;const Z=Object(s["I"])("data-v-15730b4f");Object(s["s"])("data-v-15730b4f");const ee={class:"page-a top-container"};Object(s["q"])();const te=Z((function(e,t,a,n,o,c){const r=Object(s["w"])("LoginView");return Object(s["p"])(),Object(s["e"])("div",ee,[Object(s["g"])(r,{"form-name":"a","is-clogin":""})])}));var ae=Object(s["h"])({components:{LoginView:R}});a("e74f");ae.render=te,ae.__scopeId="data-v-15730b4f";var se=ae;const ne=Object(s["I"])("data-v-49fa804a");Object(s["s"])("data-v-49fa804a");const oe={class:"page-a top-container"};Object(s["q"])();const ce=ne((function(e,t,a,n,o,c){const r=Object(s["w"])("LoginView");return Object(s["p"])(),Object(s["e"])("div",oe,[Object(s["g"])(r,{"form-name":"b","is-clogin":""})])}));var re=Object(s["h"])({components:{LoginView:R}});a("49c4");re.render=ce,re.__scopeId="data-v-49fa804a";var ie=re,le=[{path:"/",name:"Home",component:h},{path:"/apage",name:"LoginA",component:E,meta:{transition:"route"}},{path:"/bpage",name:"LoginB",component:Y,meta:{transition:"route"}},{path:"/apage/changeA",name:"ChangeA",component:se,meta:{transition:"route"}},{path:"/apage/changeB",name:"ChangeB",component:ie,meta:{transition:"route"}}],pe=Object(b["a"])({history:Object(b["b"])("/test-pm-domain-logins/"),routes:le}),be=pe,de=Object(i["a"])({state:{logins:{a:{user:"username 1",pass:"password 1",disp:"A",logged:!1},b:{user:"username 2",pass:"password 2",disp:"B",logged:!1}}},mutations:{setLoggedIn:function(e,t){e.logins[t.form].logged=t.val},setLoginCredentials:function(e,t){var a=e.logins[t.form];a.user=t.user,a.pass=t.pass}},actions:{loggedIn:function(e,t){var a=e.commit;a("setLoggedIn",t)},loginCredentials:function(e,t){var a=e.commit;a("setLoginCredentials",t)}},modules:{},plugins:[]});Object(s["d"])(p).use(de).use(be).mount("#app")},e369:function(e,t,a){},e74f:function(e,t,a){"use strict";a("e369")}});