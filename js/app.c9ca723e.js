(function(e){function t(t){for(var c,o,l=t[0],r=t[1],i=t[2],p=0,d=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);b&&b(t);while(d.length)d.shift()();return n.push.apply(n,i||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,l=1;l<a.length;l++){var r=a[l];0!==s[r]&&(c=!1)}c&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var c={},s={app:0},n=[];function o(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=c,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(a,c,function(t){return e[t]}.bind(null,c));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/test-pm-domain-logins/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var b=r;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0d01":function(e,t,a){},"20a3":function(e,t,a){},"3d2f":function(e,t,a){},4084:function(e,t,a){},"49c4":function(e,t,a){"use strict";a("5781")},5781:function(e,t,a){},"9cdc":function(e,t,a){"use strict";a("c701")},a8c1:function(e,t,a){"use strict";a("4084")},abd0:function(e,t,a){"use strict";a("3d2f")},b0ef:function(e,t,a){},b259:function(e,t,a){"use strict";a("0d01")},ba85:function(e,t,a){"use strict";a("b0ef")},c701:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const s={class:"nav"},n=Object(c["g"])("div",{class:"nav-logo"}," Dm ",-1),o=Object(c["f"])("Home"),l={class:"nav-links"};function r(e,t,a,r,i,b){const p=Object(c["w"])("router-link"),d=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["e"])(c["a"],null,[Object(c["g"])("div",s,[n,Object(c["g"])(p,{to:"/"},{default:Object(c["F"])(()=>[o]),_:1}),Object(c["g"])("div",l,[Object(c["g"])(p,{to:{name:"LoginA"}},{default:Object(c["F"])(()=>[Object(c["f"])("Login "+Object(c["z"])(e.logins.a.disp),1)]),_:1}),Object(c["g"])(p,{to:{name:"LoginB"}},{default:Object(c["F"])(()=>[Object(c["f"])("Login "+Object(c["z"])(e.logins.b.disp),1)]),_:1}),Object(c["g"])(p,{to:{name:"ChangeA"}},{default:Object(c["F"])(()=>[Object(c["f"])("Change "+Object(c["z"])(e.logins.a.disp),1)]),_:1}),Object(c["g"])(p,{to:{name:"ChangeB"}},{default:Object(c["F"])(()=>[Object(c["f"])("Change "+Object(c["z"])(e.logins.b.disp),1)]),_:1})])]),Object(c["g"])(d,null,{default:Object(c["F"])(({Component:e,route:t})=>[Object(c["g"])(c["b"],{name:t.meta&&t.meta.transition},{default:Object(c["F"])(()=>[(Object(c["p"])(),Object(c["e"])(Object(c["x"])(e)))]),_:2},1032,["name"])]),_:1})],64)}var i=a("9ab4"),b=a("5502"),p=Object(c["h"])({computed:Object(i["a"])({},Object(b["b"])(["logins"]))});a("9cdc");p.render=r;var d=p,g=a("6c02");const u=Object(c["I"])("data-v-5ef1afbe");Object(c["s"])("data-v-5ef1afbe");const O={class:"page-home"},j={class:"form-title"},f={class:"fields"},v=Object(c["g"])("div",{class:"lbl"},"Username",-1),m=Object(c["g"])("div",{class:"lbl"},"Password",-1);Object(c["q"])();const h=u((function(e,t,a,s,n,o){return Object(c["p"])(),Object(c["e"])("div",O,[(Object(c["p"])(!0),Object(c["e"])(c["a"],null,Object(c["v"])(e.logins,(t,a)=>(Object(c["p"])(),Object(c["e"])("div",{key:a,class:["website",{loggedin:t.logged}]},[Object(c["g"])("div",j," Website login "+Object(c["z"])(t.disp),1),Object(c["g"])("div",{class:["log-state",{"logged-state":t.logged}]},Object(c["z"])(t.logged?"Logged in.":"Not logged in."),3),Object(c["g"])("div",f,[v,Object(c["G"])(Object(c["g"])("input",{class:"inp",type:"text","onUpdate:modelValue":e=>t.user=e},null,8,["onUpdate:modelValue"]),[[c["D"],t.user]]),m,Object(c["G"])(Object(c["g"])("input",{class:"inp",type:"text","onUpdate:modelValue":e=>t.pass=e},null,8,["onUpdate:modelValue"]),[[c["D"],t.pass]])]),Object(c["g"])("button",{class:"g-btn btn-logout",onClick:t=>e.onLogout(a),dissabled:!t.logged},Object(c["z"])(t.logged?"Log out":"Log in"),9,["onClick","dissabled"])],2))),128))])}));var w=Object(c["h"])({setup:function(){var e=Object(b["c"])(),t=Object(c["c"])((function(){return e.state.logins})),a=function(a){e.dispatch("loggedIn",{form:a,val:!t.value[a].logged})};return{logins:t,onLogout:a}}});a("b259");w.render=h,w.__scopeId="data-v-5ef1afbe";var y=w;const z=Object(c["I"])("data-v-137dc404");Object(c["s"])("data-v-137dc404");const C={class:"page-a top-container"};Object(c["q"])();const M=z((function(e,t,a,s,n,o){const l=Object(c["w"])("LoginView");return Object(c["p"])(),Object(c["e"])("div",C,[Object(c["g"])(l,{"form-name":"a"})])})),_=Object(c["I"])("data-v-1cac1477");Object(c["s"])("data-v-1cac1477");const L={class:"login-view"},x=Object(c["g"])("div",{class:"overlay"},null,-1),V={key:0},I={class:"svg-bkg"},P={class:"fields"},S=Object(c["g"])("input",{"area-hidden":"true",type:"email",name:"username",autocomplete:"username",value:"maxzz",style:{display:"none"}},null,-1),k=Object(c["g"])("label",{for:"pass"},"Current password",-1),U=Object(c["g"])("label",{for:"pass"},"New password",-1),F=Object(c["g"])("label",{for:"pass"},"Confirm new password",-1),N={class:"reveal"},B=Object(c["f"])("  Reveal passwords"),G={key:1},D={class:"svg-bkg"},q={class:"fields"},A=Object(c["g"])("label",{for:"user"},"Username",-1),T=Object(c["g"])("label",{for:"pass"},"Password",-1),H={class:"reveal"},E=Object(c["f"])("  Reveal password");Object(c["q"])();const J=_((function(e,t,a,s,n,o){const l=Object(c["w"])("SvgChange"),r=Object(c["w"])("SvgLogin");return Object(c["p"])(),Object(c["e"])("div",L,[x,e.isClogin?(Object(c["p"])(),Object(c["e"])("div",V,[Object(c["g"])("form",{class:["form",e.formClass()]},[Object(c["g"])("div",I,[Object(c["g"])(l),Object(c["g"])("div",{class:["page-title",{"login-a":"a"===e.formName,"login-b":"b"===e.formName}]},[Object(c["g"])("span",null,Object(c["z"])(e.currentForm.disp),1)],2)]),Object(c["g"])("div",P,[S,k,Object(c["G"])(Object(c["g"])("input",{id:"cpass1",type:e.passwordType,"onUpdate:modelValue":t[1]||(t[1]=t=>e.passwords.p1=t),placeholder:"Current password",autocomplete:"old-password"},null,8,["type"]),[[c["C"],e.passwords.p1]]),U,Object(c["G"])(Object(c["g"])("input",{id:"cpass2",type:e.passwordType,"onUpdate:modelValue":t[2]||(t[2]=t=>e.passwords.p2=t),placeholder:"New password",autocomplete:"current-password"},null,8,["type"]),[[c["C"],e.passwords.p2]]),F,Object(c["G"])(Object(c["g"])("input",{id:"cpass3",type:e.passwordType,"onUpdate:modelValue":t[3]||(t[3]=t=>e.passwords.p3=t),placeholder:"Confirm new password",autocomplete:"confirm-password"},null,8,["type"]),[[c["C"],e.passwords.p3]]),Object(c["g"])("label",N,[Object(c["G"])(Object(c["g"])("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=t=>e.revealPasswords=t)},null,512),[[c["B"],e.revealPasswords]]),B]),Object(c["g"])("button",{onClick:t[5]||(t[5]=Object(c["H"])((...t)=>e.onSubmit(...t),["prevent"])),class:"g-btn"},"Change")])],2)])):(Object(c["p"])(),Object(c["e"])("div",G,[Object(c["g"])("form",{class:["form",e.formClass()]},[Object(c["g"])("div",D,[Object(c["g"])(r),Object(c["g"])("div",{class:["page-title",{"login-a":"a"===e.formName,"login-b":"b"===e.formName}]},[Object(c["g"])("span",null,Object(c["z"])(e.currentForm.disp),1)],2)]),Object(c["g"])("div",q,[A,Object(c["G"])(Object(c["g"])("input",{id:"user",type:"text","onUpdate:modelValue":t[6]||(t[6]=t=>e.thisUser=t),placeholder:"Username",autocomplete:"username"},null,512),[[c["D"],e.thisUser]]),T,Object(c["G"])(Object(c["g"])("input",{id:"pass",type:e.passwordType,"onUpdate:modelValue":t[7]||(t[7]=t=>e.thisPass=t),placeholder:"Password",autocomplete:"current-password"},null,8,["type"]),[[c["C"],e.thisPass]]),Object(c["g"])("label",H,[Object(c["G"])(Object(c["g"])("input",{type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=t=>e.revealPasswords=t)},null,512),[[c["B"],e.revealPasswords]]),E]),Object(c["g"])("button",{onClick:t[9]||(t[9]=Object(c["H"])((...t)=>e.onSubmit(...t),["prevent"])),class:"g-btn"},"Login")])],2)]))])})),R={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0",y:"0",viewBox:"0 0 144.8 144.8","xml:space":"preserve"},W=Object(c["g"])("defs",null,[Object(c["g"])("circle",{id:"SVGID_1_",cx:"72.4",cy:"72.4",r:"72.4"})],-1),$=Object(c["g"])("clipPath",{id:"SVGID_2_"},[Object(c["g"])("use",{"xlink:href":"#SVGID_1_",overflow:"visible"})],-1),K=Object(c["g"])("circle",{cx:"72.4",cy:"72.4",r:"72.4",fill:"#F5C002"},null,-1),Q=Object(c["g"])("g",{"clip-path":"url(#SVGID_2_)"},[Object(c["g"])("path",{d:"M72.4 40.6v104.2h-41s2.9-15.6 6.3-27.8c3.1-5.9 17.3-10.3 26.5-12.6v-7.7c-5.6-2.5-10-8-11.9-17.7-6.8-1.6-7.9-15-.7-16.5 1.7-14.1 10.3-21.9 20.8-21.9z",fill:"#F1C9A5"}),Object(c["g"])("path",{d:"M113.4 144.8h-41V40.6c11.8-.3 19.9 10.9 20.7 21.8 7.5 1.4 6.3 15.2-.8 16.6-1.6 7.7-4.9 14.2-11.8 17.5v7.9c33.9 7.6 28.2 18.4 32.9 40.4z",fill:"#E4B692"}),Object(c["g"])("path",{d:"M91.3 81.7c-1.1 3.2-3 7-6.5 7-4.3 0-7.4-3.5-12.4-3.5-4.9 0-8 3.5-12.4 3.5-3.5 0-5.4-3.8-6.5-7l-1-6.1v7.3s1.6 8.6 4.8 10.7c2.6 2.3 10.9 6.2 15 6.2s12.5-3.9 15-6.2c3.1-2.1 4.8-10.7 4.8-10.7v-7.3l-.8 6.1zM62.2 43.8s3.9 15.8 25.6 23.8c-2-3.5-2.4-7.8-2.4-7.8s3.5 3.7 9.3 6.7c3.2-6.3 6.9-15.8-1.5-21-8.3-5.2-28.2-14.5-31-1.7z",fill:"#303030"}),Object(c["g"])("path",{d:"M55 66.3s2-18.7 8.7-22.7c-5.2-2.9-14.9 5.8-13.9 10.4.9 4.7 5.2 12.3 5.2 12.3z",fill:"#303030"}),Object(c["g"])("path",{d:"M113.4 144.8h-82s3.3-19.7 6.3-27.8c2.7-5.2 14.1-9.2 23.1-11.7a11.63 11.63 0 0023.2 0c9.2 1.8 20.3 6.5 23.1 11.7 5.1 9.2 6.3 27.8 6.3 27.8z",fill:"#FB621E"}),Object(c["g"])("path",{d:"M60.1 108.3c.4 6.1 5.7 11 12.3 11 6.6 0 11.9-4.8 12.3-11 8.2 2.1 18.3 5.4 22.8 9.7-.1-.3-.3-.7-.4-1-2.7-5.2-14.1-9.2-23.1-11.7-.4 6.1-5.4 11-11.6 11-6.2 0-11.2-4.8-11.6-11-9 2.5-20.3 6.5-23.1 11.7-.1.3-.2.6-.2.9 4.5-4.2 14.5-7.5 22.6-9.6z",opacity:".2",fill:"#E53D0C"}),Object(c["g"])("path",{d:"M57.4 106.3a15.18 15.18 0 0030 0c-1.2-.4-2.3-.7-3.4-1-.4 6.1-5.4 11-11.6 11-6.2 0-11.2-4.8-11.6-11-1.1.3-2.3.6-3.4 1z",fill:"#E53D0C"}),Object(c["g"])("path",{d:"M75.8 90.7s-.5-2.2-3.4-2.2c-2.7 0-3.4 2.2-3.4 2.2h6.8z",fill:"#FFF"})],-1);function X(e,t,a,s,n,o){return Object(c["p"])(),Object(c["e"])("svg",R,[W,$,K,Q])}const Y={};Y.render=X;var Z=Y;const ee=Object(c["I"])("data-v-7ab54cb4");Object(c["s"])("data-v-7ab54cb4");const te={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 148 148"},ae=Object(c["g"])("g",{class:"psw-chg-svg"},[Object(c["g"])("circle",{cx:"74",cy:"74",r:"74",fill:"#3581ff"}),Object(c["g"])("g",null,[Object(c["g"])("path",{d:"M76 38a18 18 0 00-18 18v9a25 25 0 016-4v-5a11 11 0 1123 0v5a25 25 0 016 4v-9a18 18 0 00-17-18z",fill:"#3268c0"}),Object(c["g"])("path",{d:"M100 83a26 26 0 11-45-18l1-1a25 25 0 017-4 26 26 0 0122 0 25 25 0 017 4l1 1a26 26 0 017 18z",fill:"#fad553"}),Object(c["g"])("path",{d:"M98 73a26 26 0 00-5-8l-1-1a26 26 0 01-38 36 26 26 0 0044-27z",fill:"#fab941"}),Object(c["g"])("path",{d:"M76 85a1 1 0 000 1l1 5a1 1 0 01-1 0h-4a1 1 0 01-1 0l1-5a1 1 0 000-1c-5-2-2-7 2-7s6 5 2 7z",fill:"#2f4867"}),Object(c["g"])("path",{class:"cls-6",d:"M76 85a1 1 0 00-1 0l1 5a1 1 0 010 1h-5a1 1 0 010-1l1-5a1 1 0 00-1 0c-4-2-2-8 3-8s6 6 2 8zM74 35a18 18 0 00-18 18v10a25 25 0 017-5v-5a11 11 0 1122 0v5a25 25 0 017 5V53a18 18 0 00-18-18z"}),Object(c["g"])("path",{d:"M84 38a18 18 0 016 14v9l2 2V53a18 18 0 00-8-15z",fill:"#2f5079"}),Object(c["g"])("path",{class:"cls-8",d:"M68 39a20 20 0 017-2M59 49a17 17 0 017-9"})]),Object(c["g"])("g",null,[Object(c["g"])("path",{class:"cls-9",d:"M125 43l-10-22a2 2 0 00-4-1l-3 5a55 55 0 00-34-11c-32 0-57 27-57 60a63 63 0 002 18c1 2 7-11 7-18 1-28 22-50 48-50a45 45 0 0128 9l-5 7a2 2 0 002 4l14 2 10 1a2 2 0 002-1 2 2 0 000-3z"}),Object(c["g"])("path",{d:"M21 90a36 36 0 004-8 40 40 0 002-13c1-13 7-22 8-24a48 48 0 0118-16 44 44 0 0123-5 52 52 0 0115 3l-3-2c-11-6-24-2-26-1s-12 4-17 8-12 13-14 17a103 103 0 00-5 17c-1 8 0 11-2 17a41 41 0 01-3 7z",fill:"#ccc"}),Object(c["g"])("path",{class:"cls-11",d:"M34 32a54 54 0 017-7 57 57 0 0116-8 68 68 0 019-2l-1 3a59 59 0 00-11 3 62 62 0 00-8 3 78 78 0 00-12 8zM68 14a29 29 0 0111 1l-1 2a58 58 0 00-10 0zM19 62a85 85 0 012-9 84 84 0 016-12v2a62 62 0 00-7 19zM102 33l-6 8a2 2 0 001 1c2 0 5-4 7-8a4 4 0 01-2-1zM112 20l-3 3-1 2 1 1c0-1 2-6 4-6a1 1 0 011 1v-1a2 2 0 000-1 3 3 0 00-2 1z"}),Object(c["g"])("path",{class:"cls-12",d:"M98 44l23 3c4 1 6-2 3-6 1 6-1 4-10 3l-15-1z"}),Object(c["g"])("path",{class:"cls-13",d:"M21 90c-1-7-2-21 5-36 8-17 27-35 50-33 13 1 22 9 26 12-3-2-17-10-35-6-19 4-30 19-33 27a84 84 0 00-4 13l-2 11a32 32 0 01-7 12z"})]),Object(c["g"])("g",null,[Object(c["g"])("path",{class:"cls-9",d:"M132 73c0 34-26 61-57 61a55 55 0 01-34-12l-4 5a2 2 0 01-4 0l-10-23a2 2 0 011-3 2 2 0 012 0l9 1 15 1a2 2 0 012 4l-5 7c4 4 13 11 26 12 22 3 42-16 50-33 7-14 6-28 5-36l2-2a63 63 0 012 18z"}),Object(c["g"])("path",{class:"cls-13",d:"M47 126a59 59 0 0045 5c18-6 28-20 31-24a63 63 0 008-49c7 20 1 46-16 63a56 56 0 01-19 12 51 51 0 01-31 2 49 49 0 01-18-9z"}),Object(c["g"])("path",{class:"cls-11",d:"M65 125c9 3 20 2 28-1 7-3 8-5 13-8a10 10 0 001 2 65 65 0 01-13 8c-5 2-11 3-17 3a29 29 0 01-12-4zM108 114a64 64 0 008-9 71 71 0 009-17c1 3 0 6-1 9a37 37 0 01-5 8l-10 10-1-1z"}),Object(c["g"])("path",{class:"cls-12",d:"M47 114l2-3a48 48 0 003-4l1-1a1 1 0 00-1-1l-1 1a70 70 0 00-6 7 13 13 0 012 1zM37 127l3-3 1-2-1-1c0 1-2 6-4 6a1 1 0 01-1-1v2a3 3 0 002-1z"}),Object(c["g"])("path",{class:"cls-11",d:"M51 103l-15-2-8-1c-1-1-3 0-4 1a2 2 0 00-1 1l1 2 1 2v-3c2-2 7-1 9-1l16 2a2 2 0 001-1zM129 56a8 8 0 00-1 1 1 1 0 000 1 7 7 0 011-2l1-1a5 5 0 00-1 1z"})])],-1);Object(c["q"])();const ce=ee((function(e,t,a,s,n,o){return Object(c["p"])(),Object(c["e"])("svg",te,[ae])}));a("d586");const se={};se.render=ce,se.__scopeId="data-v-7ab54cb4";var ne=se,oe=Object(c["h"])({props:{formName:{type:String,required:!0},isClogin:{type:Boolean,default:!1}},components:{SvgLogin:Z,SvgChange:ne},methods:{onSubmit:function(e){if(this.isClogin){var t=this.passwords.p1===this.thisPass;if(!t)return void alert("Current password is incorrect");var a=this.passwords.p2===this.passwords.p3&&this.passwords.p2.trim();if(!a)return void alert("New password not confirmed");this.setLoginCredentials(this.formName,this.thisUser,this.passwords.p2)}else this.setLoginCredentials(this.formName,this.thisUser,this.thisPass),this.setLogged(this.formName,!0);this.$router.push({name:"Home"})}},setup:function(e){var t=Object(b["c"])(),a=Object(c["c"])((function(){return t.state.logins[e.formName]})),s=function(){return"a"===e.formName?"login-a":"login-b"},n=Object(c["u"])(a.value.user),o=Object(c["u"])(a.value.pass),l=Object(c["t"])({p1:a.value.pass,p2:a.value.pass+"1",p3:a.value.pass+"1"}),r=Object(c["u"])(!1),i=Object(c["c"])((function(){return r.value?"text":"password"})),p=function(e,a){return t.dispatch("loggedIn",{form:e,val:a})},d=function(e,a,c){return t.dispatch("loginCredentials",{form:e,user:a,pass:c})};return{currentForm:a,formClass:s,thisUser:n,thisPass:o,passwords:l,revealPasswords:r,passwordType:i,setLogged:p,setLoginCredentials:d}}});a("ba85");oe.render=J,oe.__scopeId="data-v-1cac1477";var le=oe,re=Object(c["h"])({components:{LoginView:le}});a("abd0");re.render=M,re.__scopeId="data-v-137dc404";var ie=re;const be=Object(c["I"])("data-v-3a987843");Object(c["s"])("data-v-3a987843");const pe={class:"page-b top-container"};Object(c["q"])();const de=be((function(e,t,a,s,n,o){const l=Object(c["w"])("LoginView");return Object(c["p"])(),Object(c["e"])("div",pe,[Object(c["g"])(l,{"form-name":"b"})])}));var ge=Object(c["h"])({components:{LoginView:le}});a("a8c1");ge.render=de,ge.__scopeId="data-v-3a987843";var ue=ge;const Oe=Object(c["I"])("data-v-15730b4f");Object(c["s"])("data-v-15730b4f");const je={class:"page-a top-container"};Object(c["q"])();const fe=Oe((function(e,t,a,s,n,o){const l=Object(c["w"])("LoginView");return Object(c["p"])(),Object(c["e"])("div",je,[Object(c["g"])(l,{"form-name":"a","is-clogin":""})])}));var ve=Object(c["h"])({components:{LoginView:le}});a("e74f");ve.render=fe,ve.__scopeId="data-v-15730b4f";var me=ve;const he=Object(c["I"])("data-v-49fa804a");Object(c["s"])("data-v-49fa804a");const we={class:"page-a top-container"};Object(c["q"])();const ye=he((function(e,t,a,s,n,o){const l=Object(c["w"])("LoginView");return Object(c["p"])(),Object(c["e"])("div",we,[Object(c["g"])(l,{"form-name":"b","is-clogin":""})])}));var ze=Object(c["h"])({components:{LoginView:le}});a("49c4");ze.render=ye,ze.__scopeId="data-v-49fa804a";var Ce=ze,Me=[{path:"/",name:"Home",component:y},{path:"/apage",name:"LoginA",component:ie,meta:{transition:"route"}},{path:"/bpage",name:"LoginB",component:ue,meta:{transition:"route"}},{path:"/apage/changeA",name:"ChangeA",component:me,meta:{transition:"route"}},{path:"/apage/changeB",name:"ChangeB",component:Ce,meta:{transition:"route"}}],_e=Object(g["a"])({history:Object(g["b"])("/test-pm-domain-logins/"),routes:Me}),Le=_e,xe="test-domain-logins.vue";function Ve(){return{logins:{a:{user:"username 1",pass:"password 1",disp:"A",logged:!1},b:{user:"username 2",pass:"password 2",disp:"B",logged:!1}},settings:{reveal:!1}}}function Ie(){var e,t=localStorage.getItem(xe);try{e=t&&JSON.parse(t)}catch(a){}return!e&&(e=Ve()),e}function Pe(e){e.subscribe((function(e,t){window.localStorage.setItem(xe,JSON.stringify(t))}))}var Se=Object(b["a"])({state:Ie(),mutations:{setLoggedIn:function(e,t){e.logins[t.form].logged=t.val},setLoginCredentials:function(e,t){var a=e.logins[t.form];a.user=t.user,a.pass=t.pass}},actions:{loggedIn:function(e,t){var a=e.commit;a("setLoggedIn",t)},loginCredentials:function(e,t){var a=e.commit;a("setLoginCredentials",t)}},modules:{},plugins:[Pe]}),ke=Object(c["d"])(d);ke.use(Se).use(Le).mount("#app")},d586:function(e,t,a){"use strict";a("20a3")},e369:function(e,t,a){},e74f:function(e,t,a){"use strict";a("e369")}});