var J=Object.defineProperty;var T=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var U=(e,s,a)=>s in e?J(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,N=(e,s)=>{for(var a in s||(s={}))K.call(s,a)&&U(e,a,s[a]);if(T)for(var a of T(s))W.call(s,a)&&U(e,a,s[a]);return e};import{d as v,c as p,o as l,a as P,p as S,b as V,e as t,m as Y,r as h,f as c,w as f,F as O,g as b,t as g,T as D,h as Q,i as X,u as E,j as I,k as Z,n as A,l as m,v as x,P as ee,q as se,s as B,x as te,y as ae,z,A as F,B as H,C as oe,D as ne,E as de,G as ie,H as re}from"./vendor.d5e1c0cc.js";const le=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}};le();var _=(e,s)=>{const a=e.__vccOpts||e;for(const[r,n]of s)a[r]=n;return a};const ce=v({}),pe=e=>(S("data-v-5f91bd85"),e=e(),V(),e),_e={style:{"margin-left":"1rem",display:"flex","align-items":"center"}},ue=P('<div style="display:flex;align-items:center;text-shadow:none;" data-v-5f91bd85><a class="cross-link" href="https://maxzz.github.io/test-pm" data-v-5f91bd85><div class="boxed-link" title="Open test-pm" data-v-5f91bd85>1</div></a><a class="cross-link" href="https://maxzz.github.io/test-pm-second" data-v-5f91bd85><div class="boxed-link" title="Open pm-test-second" data-v-5f91bd85>2</div></a><a class="cross-link" href="https://maxzz.github.io/test-pm-domain-logins" data-v-5f91bd85><div class="boxed-link" title="Reload this page" data-v-5f91bd85>3</div></a></div>',1),he=pe(()=>t("a",{class:"cross-link",href:"https://github.com/maxzz/test-pm-domain-logins/#other-test-pages",target:"_blank",title:"Open GitHub source code"},[t("svg",{class:"boxed-link boxed-github",width:"24",hieght:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},[t("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})])],-1)),ge=[ue,he];function me(e,s,a,r,n,i){return l(),p("div",_e,ge)}var ve=_(ce,[["render",me],["__scopeId","data-v-5f91bd85"]]);const fe=v({components:{CrossLinks:ve},computed:N({},Y(["logins"])),methods:{reloadPage:function(){window.open("","_self")},print(e,s){console.log(e?{file:e.type.__file,props:e.type.__props,type:e.type,comp:e}:"undefined component"),console.log(s)}}}),be={class:"nav"},we=b("Home"),ye={class:"nav-links"};function $e(e,s,a,r,n,i){const o=h("router-link"),u=h("CrossLinks"),d=h("router-view");return l(),p(O,null,[t("div",be,[t("div",{class:"nav-logo",onClick:s[0]||(s[0]=(...$)=>e.reloadPage&&e.reloadPage(...$)),title:"Go back to Home by reloading the page"}," Dm "),c(o,{to:"/",title:"Home"},{default:f(()=>[we]),_:1}),t("div",ye,[c(o,{to:{name:"LoginA",query:{from:"homeToLoginA"}}},{default:f(()=>[b("Login "+g(e.logins.a.disp),1)]),_:1}),c(o,{to:{name:"LoginB",query:{from:"homeToLoginB"}}},{default:f(()=>[b("Login "+g(e.logins.b.disp),1)]),_:1}),c(o,{to:{name:"ChangeA",query:{from:"homeToChangeA"}}},{default:f(()=>[b("Change "+g(e.logins.a.disp),1)]),_:1}),c(o,{to:{name:"ChangeB",query:{from:"homeToChangeB"}}},{default:f(()=>[b("Change "+g(e.logins.b.disp),1)]),_:1})]),c(u)]),c(d,null,{default:f(({Component:$,route:C})=>{var L,y;return[c(D,{name:(L=C.meta)==null?void 0:L.transition,mode:(y=C.meta)==null?void 0:y.mode},{default:f(()=>[(l(),Q(X($),{key:C.path}))]),_:2},1032,["name","mode"])]}),_:1})],64)}var Ce=_(fe,[["render",$e]]);const Le=v({setup(){let e=E(),s=I(()=>e.state.logins);return{logins:s,onLogout:r=>{e.dispatch("loggedIn",{form:r,val:!s.value[r].logged})}}}}),G=e=>(S("data-v-60d038dc"),e=e(),V(),e),ze={class:"page-home"},Me={class:"form-title"},ke={class:"fields"},Pe=G(()=>t("div",{class:"lbl"},"Username",-1)),Se=["onUpdate:modelValue"],Ve=G(()=>t("div",{class:"lbl"},"Password",-1)),Ie=["onUpdate:modelValue"],Ae=["onClick","dissabled"];function xe(e,s,a,r,n,i){return l(),p("div",ze,[(l(!0),p(O,null,Z(e.logins,(o,u)=>(l(),p("div",{key:u,class:A(["website",{loggedin:o.logged}])},[t("div",Me," Website login "+g(o.disp),1),t("div",{class:A(["log-state",{"logged-state":o.logged}])},g(o.logged?"Logged in.":"Not logged in."),3),t("div",ke,[Pe,m(t("input",{class:"inp",type:"text","onUpdate:modelValue":d=>o.user=d},null,8,Se),[[x,o.user]]),Ve,m(t("input",{class:"inp",type:"text","onUpdate:modelValue":d=>o.pass=d},null,8,Ie),[[x,o.pass]])]),t("button",{class:"g-btn btn-logout",onClick:d=>e.onLogout(u),dissabled:!o.logged},g(o.logged?"Log out":"Log in"),9,Ae)],2))),128))])}var Be=_(Le,[["render",xe],["__scopeId","data-v-60d038dc"]]);const Te={},Ue={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0",y:"0",viewBox:"0 0 144.8 144.8","xml:space":"preserve"},Ne=P('<defs><circle id="SVGID_1_" cx="72.4" cy="72.4" r="72.4"></circle></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"></use></clipPath><circle cx="72.4" cy="72.4" r="72.4" fill="#F5C002"></circle><g clip-path="url(#SVGID_2_)"><path d="M72.4 40.6v104.2h-41s2.9-15.6 6.3-27.8c3.1-5.9 17.3-10.3 26.5-12.6v-7.7c-5.6-2.5-10-8-11.9-17.7-6.8-1.6-7.9-15-.7-16.5 1.7-14.1 10.3-21.9 20.8-21.9z" fill="#F1C9A5"></path><path d="M113.4 144.8h-41V40.6c11.8-.3 19.9 10.9 20.7 21.8 7.5 1.4 6.3 15.2-.8 16.6-1.6 7.7-4.9 14.2-11.8 17.5v7.9c33.9 7.6 28.2 18.4 32.9 40.4z" fill="#E4B692"></path><path d="M91.3 81.7c-1.1 3.2-3 7-6.5 7-4.3 0-7.4-3.5-12.4-3.5-4.9 0-8 3.5-12.4 3.5-3.5 0-5.4-3.8-6.5-7l-1-6.1v7.3s1.6 8.6 4.8 10.7c2.6 2.3 10.9 6.2 15 6.2s12.5-3.9 15-6.2c3.1-2.1 4.8-10.7 4.8-10.7v-7.3l-.8 6.1zM62.2 43.8s3.9 15.8 25.6 23.8c-2-3.5-2.4-7.8-2.4-7.8s3.5 3.7 9.3 6.7c3.2-6.3 6.9-15.8-1.5-21-8.3-5.2-28.2-14.5-31-1.7z" fill="#303030"></path><path d="M55 66.3s2-18.7 8.7-22.7c-5.2-2.9-14.9 5.8-13.9 10.4.9 4.7 5.2 12.3 5.2 12.3z" fill="#303030"></path><path d="M113.4 144.8h-82s3.3-19.7 6.3-27.8c2.7-5.2 14.1-9.2 23.1-11.7a11.63 11.63 0 0023.2 0c9.2 1.8 20.3 6.5 23.1 11.7 5.1 9.2 6.3 27.8 6.3 27.8z" fill="#FB621E"></path><path d="M60.1 108.3c.4 6.1 5.7 11 12.3 11 6.6 0 11.9-4.8 12.3-11 8.2 2.1 18.3 5.4 22.8 9.7-.1-.3-.3-.7-.4-1-2.7-5.2-14.1-9.2-23.1-11.7-.4 6.1-5.4 11-11.6 11-6.2 0-11.2-4.8-11.6-11-9 2.5-20.3 6.5-23.1 11.7-.1.3-.2.6-.2.9 4.5-4.2 14.5-7.5 22.6-9.6z" opacity=".2" fill="#E53D0C"></path><path d="M57.4 106.3a15.18 15.18 0 0030 0c-1.2-.4-2.3-.7-3.4-1-.4 6.1-5.4 11-11.6 11-6.2 0-11.2-4.8-11.6-11-1.1.3-2.3.6-3.4 1z" fill="#E53D0C"></path><path d="M75.8 90.7s-.5-2.2-3.4-2.2c-2.7 0-3.4 2.2-3.4 2.2h6.8z" fill="#FFF"></path></g>',4),Oe=[Ne];function De(e,s){return l(),p("svg",Ue,Oe)}var Ee=_(Te,[["render",De]]);const Fe={},He={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 148 148"},Ge=P('<g class="psw-chg-svg" data-v-07bd7b2d><circle cx="74" cy="74" r="74" fill="#3581ff" data-v-07bd7b2d></circle><g data-v-07bd7b2d><path d="M76 38a18 18 0 00-18 18v9a25 25 0 016-4v-5a11 11 0 1123 0v5a25 25 0 016 4v-9a18 18 0 00-17-18z" fill="#3268c0" data-v-07bd7b2d></path><path d="M100 83a26 26 0 11-45-18l1-1a25 25 0 017-4 26 26 0 0122 0 25 25 0 017 4l1 1a26 26 0 017 18z" fill="#fad553" data-v-07bd7b2d></path><path d="M98 73a26 26 0 00-5-8l-1-1a26 26 0 01-38 36 26 26 0 0044-27z" fill="#fab941" data-v-07bd7b2d></path><path d="M76 85a1 1 0 000 1l1 5a1 1 0 01-1 0h-4a1 1 0 01-1 0l1-5a1 1 0 000-1c-5-2-2-7 2-7s6 5 2 7z" fill="#2f4867" data-v-07bd7b2d></path><path class="cls-6" d="M76 85a1 1 0 00-1 0l1 5a1 1 0 010 1h-5a1 1 0 010-1l1-5a1 1 0 00-1 0c-4-2-2-8 3-8s6 6 2 8zM74 35a18 18 0 00-18 18v10a25 25 0 017-5v-5a11 11 0 1122 0v5a25 25 0 017 5V53a18 18 0 00-18-18z" data-v-07bd7b2d></path><path d="M84 38a18 18 0 016 14v9l2 2V53a18 18 0 00-8-15z" fill="#2f5079" data-v-07bd7b2d></path><path class="cls-8" d="M68 39a20 20 0 017-2M59 49a17 17 0 017-9" data-v-07bd7b2d></path></g><g data-v-07bd7b2d><path class="cls-9" d="M125 43l-10-22a2 2 0 00-4-1l-3 5a55 55 0 00-34-11c-32 0-57 27-57 60a63 63 0 002 18c1 2 7-11 7-18 1-28 22-50 48-50a45 45 0 0128 9l-5 7a2 2 0 002 4l14 2 10 1a2 2 0 002-1 2 2 0 000-3z" data-v-07bd7b2d></path><path d="M21 90a36 36 0 004-8 40 40 0 002-13c1-13 7-22 8-24a48 48 0 0118-16 44 44 0 0123-5 52 52 0 0115 3l-3-2c-11-6-24-2-26-1s-12 4-17 8-12 13-14 17a103 103 0 00-5 17c-1 8 0 11-2 17a41 41 0 01-3 7z" fill="#ccc" data-v-07bd7b2d></path><path class="cls-11" d="M34 32a54 54 0 017-7 57 57 0 0116-8 68 68 0 019-2l-1 3a59 59 0 00-11 3 62 62 0 00-8 3 78 78 0 00-12 8zM68 14a29 29 0 0111 1l-1 2a58 58 0 00-10 0zM19 62a85 85 0 012-9 84 84 0 016-12v2a62 62 0 00-7 19zM102 33l-6 8a2 2 0 001 1c2 0 5-4 7-8a4 4 0 01-2-1zM112 20l-3 3-1 2 1 1c0-1 2-6 4-6a1 1 0 011 1v-1a2 2 0 000-1 3 3 0 00-2 1z" data-v-07bd7b2d></path><path class="cls-12" d="M98 44l23 3c4 1 6-2 3-6 1 6-1 4-10 3l-15-1z" data-v-07bd7b2d></path><path class="cls-13" d="M21 90c-1-7-2-21 5-36 8-17 27-35 50-33 13 1 22 9 26 12-3-2-17-10-35-6-19 4-30 19-33 27a84 84 0 00-4 13l-2 11a32 32 0 01-7 12z" data-v-07bd7b2d></path></g><g data-v-07bd7b2d><path class="cls-9" d="M132 73c0 34-26 61-57 61a55 55 0 01-34-12l-4 5a2 2 0 01-4 0l-10-23a2 2 0 011-3 2 2 0 012 0l9 1 15 1a2 2 0 012 4l-5 7c4 4 13 11 26 12 22 3 42-16 50-33 7-14 6-28 5-36l2-2a63 63 0 012 18z" data-v-07bd7b2d></path><path class="cls-13" d="M47 126a59 59 0 0045 5c18-6 28-20 31-24a63 63 0 008-49c7 20 1 46-16 63a56 56 0 01-19 12 51 51 0 01-31 2 49 49 0 01-18-9z" data-v-07bd7b2d></path><path class="cls-11" d="M65 125c9 3 20 2 28-1 7-3 8-5 13-8a10 10 0 001 2 65 65 0 01-13 8c-5 2-11 3-17 3a29 29 0 01-12-4zM108 114a64 64 0 008-9 71 71 0 009-17c1 3 0 6-1 9a37 37 0 01-5 8l-10 10-1-1z" data-v-07bd7b2d></path><path class="cls-12" d="M47 114l2-3a48 48 0 003-4l1-1a1 1 0 00-1-1l-1 1a70 70 0 00-6 7 13 13 0 012 1zM37 127l3-3 1-2-1-1c0 1-2 6-4 6a1 1 0 01-1-1v2a3 3 0 002-1z" data-v-07bd7b2d></path><path class="cls-11" d="M51 103l-15-2-8-1c-1-1-3 0-4 1a2 2 0 00-1 1l1 2 1 2v-3c2-2 7-1 9-1l16 2a2 2 0 001-1zM129 56a8 8 0 00-1 1 1 1 0 000 1 7 7 0 011-2l1-1a5 5 0 00-1 1z" data-v-07bd7b2d></path></g></g>',1),Re=[Ge];function qe(e,s){return l(),p("svg",He,Re)}var je=_(Fe,[["render",qe],["__scopeId","data-v-07bd7b2d"]]);const R={position:ee.BOTTOM_RIGHT,type:se.ERROR},Je=v({props:{formName:{type:String,required:!0},isClogin:{type:Boolean,default:!1}},components:{SvgLogin:Ee,SvgChange:je},methods:{onSubmit(e,s,a){if(this.isClogin){if(!(this.passwords.p1===this.thisPass)){this.toast("Current password is incorrect",R);return}if(!(this.passwords.p2===this.passwords.p3&&this.passwords.p2.trim())){this.toast("New password not confirmed",R);return}this.setLoginCredentials(this.formName,this.thisUser,this.passwords.p2)}else this.setLoginCredentials(this.formName,this.thisUser,this.thisPass),this.setLogged(this.formName,!0);this.$router.push({name:"Home",query:{from:s,form:a?"passwordchange":"login"}})}},setup(e){const s=E(),a=I(()=>s.state.logins[e.formName]),r=()=>e.formName==="a"?"website-a":"website-b",n=B(a.value.user),i=B(a.value.pass),o=te({p1:a.value.pass,p2:a.value.pass+"1",p3:a.value.pass+"1"}),u=B(!1),d=I(()=>u.value?"text":"password"),$=(y,k)=>s.dispatch("loggedIn",{form:y,val:k}),C=(y,k,j)=>s.dispatch("loginCredentials",{form:y,user:k,pass:j}),L=ae();return{currentForm:a,formClass:r,thisUser:n,thisPass:i,passwords:o,revealPasswords:u,passwordType:d,setLogged:$,setLoginCredentials:C,toast:L}}}),w=e=>(S("data-v-efd18c74"),e=e(),V(),e),Ke=w(()=>t("div",{class:"overlay"},null,-1)),We={key:0},Ye={class:"form"},Qe={class:"form-name"},Xe={class:"form-logo"},Ze={class:"fields"},es=w(()=>t("input",{"area-hidden":"true",type:"email",name:"username",autocomplete:"username",value:"maxzz",style:{display:"none"}},null,-1)),ss=w(()=>t("label",{for:"pass"},"Current password",-1)),ts=["type"],as=w(()=>t("label",{for:"pass"},"New password",-1)),os=["type"],ns=w(()=>t("label",{for:"pass"},"Confirm new password",-1)),ds=["type"],is={class:"reveal"},rs=b("\xA0\xA0Reveal passwords"),ls={key:1},cs={class:"form"},ps={class:"form-name"},_s={class:"form-logo"},us={class:"fields"},hs=w(()=>t("label",{for:"user"},"Username",-1)),gs=w(()=>t("label",{for:"pass"},"Password",-1)),ms=["type"],vs={class:"reveal"},fs=b("\xA0\xA0Reveal password");function bs(e,s,a,r,n,i){const o=h("SvgChange"),u=h("SvgLogin");return l(),p("div",{class:A(["login-view",e.formClass()])},[Ke,c(D,{name:"transitionview"},{default:f(()=>[e.isClogin?(l(),p("div",We,[t("form",Ye,[t("div",Qe,g(e.currentForm.disp),1),t("div",Xe,[c(o)]),t("div",Ze,[es,ss,t("div",null,[m(t("input",{id:"cpass1",type:e.passwordType,"onUpdate:modelValue":s[0]||(s[0]=d=>e.passwords.p1=d),placeholder:"Current password",autocomplete:"old-password"},null,8,ts),[[z,e.passwords.p1]])]),as,t("div",null,[m(t("input",{id:"cpass2",type:e.passwordType,"onUpdate:modelValue":s[1]||(s[1]=d=>e.passwords.p2=d),placeholder:"New password",autocomplete:"current-password"},null,8,os),[[z,e.passwords.p2]])]),ns,t("div",null,[m(t("input",{id:"cpass3",type:e.passwordType,"onUpdate:modelValue":s[2]||(s[2]=d=>e.passwords.p3=d),placeholder:"Confirm new password",autocomplete:"confirm-password"},null,8,ds),[[z,e.passwords.p3]])]),t("label",is,[m(t("input",{type:"checkbox","onUpdate:modelValue":s[3]||(s[3]=d=>e.revealPasswords=d)},null,512),[[F,e.revealPasswords]]),rs]),t("button",{onClick:s[4]||(s[4]=H(d=>e.onSubmit(d,e.formClass(),e.isClogin),["prevent"])),class:"g-btn"},"Change")])])])):(l(),p("div",ls,[t("form",cs,[t("div",ps,g(e.currentForm.disp),1),t("div",_s,[c(u)]),t("div",us,[hs,t("div",null,[m(t("input",{id:"user",type:"text","onUpdate:modelValue":s[5]||(s[5]=d=>e.thisUser=d),placeholder:"Username",autocomplete:"username"},null,512),[[x,e.thisUser]])]),gs,t("div",null,[m(t("input",{id:"pass",type:e.passwordType,"onUpdate:modelValue":s[6]||(s[6]=d=>e.thisPass=d),placeholder:"Password",autocomplete:"current-password"},null,8,ms),[[z,e.thisPass]])]),t("label",vs,[m(t("input",{type:"checkbox","onUpdate:modelValue":s[7]||(s[7]=d=>e.revealPasswords=d)},null,512),[[F,e.revealPasswords]]),fs]),t("button",{onClick:s[8]||(s[8]=H(d=>e.onSubmit(d,e.formClass(),e.isClogin),["prevent"])),class:"g-btn"},"Login")])])]))]),_:1})],2)}var M=_(Je,[["render",bs],["__scopeId","data-v-efd18c74"]]);const ws=v({components:{LoginView:M}}),ys={class:"page-a top-container"};function $s(e,s,a,r,n,i){const o=h("LoginView");return l(),p("div",ys,[c(o,{"form-name":"a"})])}var Cs=_(ws,[["render",$s],["__scopeId","data-v-d07dd6e8"]]);const Ls=v({components:{LoginView:M}}),zs={class:"page-b top-container"};function Ms(e,s,a,r,n,i){const o=h("LoginView");return l(),p("div",zs,[c(o,{"form-name":"b"})])}var ks=_(Ls,[["render",Ms],["__scopeId","data-v-66abd9b9"]]);const Ps=v({components:{LoginView:M}}),Ss={class:"page-a top-container"};function Vs(e,s,a,r,n,i){const o=h("LoginView");return l(),p("div",Ss,[c(o,{"form-name":"a","is-clogin":""})])}var Is=_(Ps,[["render",Vs],["__scopeId","data-v-24f2308f"]]);const As=v({components:{LoginView:M}}),xs={class:"page-a top-container"};function Bs(e,s,a,r,n,i){const o=h("LoginView");return l(),p("div",xs,[c(o,{"form-name":"b","is-clogin":""})])}var Ts=_(As,[["render",Bs],["__scopeId","data-v-6fc7aae5"]]);const Us=[{path:"/",name:"Home",component:Be,meta:{transition:"transithome"}},{path:"/apage",name:"LoginA",component:Cs,meta:{transition:"route",mode:"out-in"}},{path:"/bpage",name:"LoginB",component:ks,meta:{transition:"route",mode:"out-in"}},{path:"/apage/changeA",name:"ChangeA",component:Is,meta:{transition:"route",mode:"out-in"}},{path:"/apage/changeB",name:"ChangeB",component:Ts,meta:{transition:"route",mode:"out-in"}}],Ns=oe({history:ne(""),routes:Us}),q="test-domain-logins.vue";function Os(){return{logins:{a:{user:"username 1",pass:"password 1",disp:"A",logged:!1},b:{user:"username 2",pass:"password 2",disp:"B",logged:!1}},settings:{reveal:!1}}}function Ds(){let e=localStorage.getItem(q),s;try{s=e&&JSON.parse(e)}catch{}return!s&&(s=Os()),s}function Es(e){e.subscribe((s,a)=>{window.localStorage.setItem(q,JSON.stringify(a))})}var Fs=de({state:Ds(),mutations:{setLoggedIn(e,s){e.logins[s.form].logged=s.val},setLoginCredentials(e,s){let a=e.logins[s.form];a.user=s.user,a.pass=s.pass}},actions:{loggedIn({commit:e},s){e("setLoggedIn",s)},loginCredentials({commit:e},s){e("setLoginCredentials",s)}},modules:{},plugins:[Es]});const Hs={},Gs=ie(Ce);Gs.use(Fs).use(Ns).use(re,Hs).mount("#app");
