import{a as de}from"./chunk-CKG3SJW7.js";import{a as P,b as re,c as se,d as ae,e as k,f as le}from"./chunk-MU3GARA2.js";import{a as I,b as h,c as S,d as _,e as B,f as b,h as R,j as A,k as M,m as F}from"./chunk-AWMKQJZU.js";import{A as w,E as O,F as c,H as a,I as s,J as m,Ka as ee,L as u,La as x,M as z,Na as te,Oa as oe,P as l,Pa as ie,Qa as ne,W as C,ca as $,da as v,fa as Q,g as K,h as U,ha as Z,i as y,ia as J,j as G,ja as D,k as g,la as X,n as f,o as W,q,z as p,za as Y}from"./chunk-CQN66RWN.js";import{d as N}from"./chunk-X6YOYRVK.js";var j=N(de());var T=new y("@sweetalert2/ngx-sweetalert2#swalProvider"),ce=new y("@sweetalert2/ngx-sweetalert2#fireOnInit"),ue=new y("@sweetalert2/ngx-sweetalert2#dismissOnDestroy"),pe=(()=>{class e{swalProvider;swalPromiseCache;constructor(r){this.swalProvider=r}get swal(){return this.swalPromiseCache||this.preloadSweetAlertLibrary(),this.swalPromiseCache}preloadSweetAlertLibrary(){if(this.swalPromiseCache)return;let r=t(this.swalProvider)?this.swalProvider():Promise.resolve(this.swalProvider);this.swalPromiseCache=r.then(i=>o(i)?i:i.default);function t(i){return typeof i=="function"&&i.version===void 0}function o(i){return typeof i=="function"}}static \u0275fac=function(t){return new(t||e)(G(T))};static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})();function Ce(){return import("./chunk-HORLTUDF.js")}var L=(()=>{class e{static forRoot(r={}){return{ngModule:e,providers:[pe,{provide:T,useValue:r.provideSwal||Ce},{provide:ce,useValue:r.fireOnInit||!1},{provide:ue,useValue:r.dismissOnDestroy||!0}]}}static forChild(r={}){return{ngModule:e,providers:[...r.provideSwal?[pe,{provide:T,useValue:r.provideSwal}]:[],...r.fireOnInit!==void 0?[{provide:ce,useValue:r.fireOnInit}]:[],...r.dismissOnDestroy!==void 0?[{provide:ue,useValue:r.dismissOnDestroy}]:[]]}}static \u0275fac=function(t){return new(t||e)};static \u0275mod=W({type:e});static \u0275inj=U({imports:[v]})}return e})();var V=(()=>{let n=class n{constructor(t,o){this.router=t,this.alert=o,this.firestore=g(P),this.subscriptions=[],this.auth=g(x),this.userFormulario=new B({email:new b("",h.required),password:new b("",h.required)})}ngOnInit(){}login(){ne(this.auth,this.userFormulario.get("email")?.value??"",this.userFormulario.get("password")?.value??"").then(t=>{let o=t.user;this.router.navigate(["/home"]),j.default.fire({toast:!0,icon:"success",title:`Bienvenido ${o?.email}`,position:"top-end"})}).catch(t=>{let o=this.firebaseErrors(t.code);j.default.fire({icon:"error",title:o})})}registro(){this.router.navigate(["/registro"])}getData(){let t=se(k(this.firestore,"users")).subscribe(o=>{console.log(o)});this.subscriptions.push(t)}firebaseErrors(t){switch(t){case"auth/email-already-in-use":return"Direcci\xF3n de correo electr\xF3nico en uso.";case"auth/weak-password":return"contrase\xF1a debil ingrese una mas segura.";case"auth/user-not-found":return"Usuario no encontrado.";case"auth/invalid-credential":return"Credenciales invalidas.";default:return"Ocurri\xF3 un error. Por favor, int\xE9ntelo nuevamente m\xE1s tarde."}}loginRapidoUno(){this.userFormulario.setValue({email:"cristianromano2@gmail.com",password:"asdasd123"})}loginRapidoDos(){this.userFormulario.setValue({email:"chatgpt@gmail.com",password:"asdasd123"})}loginRapidoTres(){this.userFormulario.setValue({email:"anonimo@anonimo.com",password:"444444"})}};n.\u0275fac=function(o){return new(o||n)(w(D),w(L))},n.\u0275cmp=f({type:n,selectors:[["app-login"]],standalone:!0,features:[C],decls:24,vars:2,consts:[[1,"full-background"],[1,"position-relative","position-absolute","top-50","start-50","translate-middle",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","email","id","email","aria-describedby","emailHelp","formControlName","email",1,"form-control"],["id","emailHelp",1,"form-text"],["for","exampleInputPassword1",1,"form-label"],["type","password","id","password","formControlName","password",1,"form-control"],[1,"d-flex","justify-content-evenly","p-5"],["type","submit",1,"btn","btn-primary","rounded-pill",3,"disabled"],["type","button",1,"btn","btn-danger","rounded-pill",3,"click"],[1,"d-flex","justify-content-between"],["type","button",1,"btn","btn","btn-warning","rounded-pill",3,"click"]],template:function(o,i){o&1&&(a(0,"div",0)(1,"form",1),u("ngSubmit",function(){return i.login()}),a(2,"div",2)(3,"label",3),l(4,"Email"),s(),m(5,"input",4),a(6,"div",5),l(7," Nunca compartiremos tu correo electr\xF3nico con nadie m\xE1s. "),s()(),a(8,"div",2)(9,"label",6),l(10,"Contrase\xF1a"),s(),m(11,"input",7),s(),a(12,"div",8)(13,"button",9),l(14," Login "),s(),a(15,"button",10),u("click",function(){return i.registro()}),l(16," Registro "),s()(),a(17,"div",11)(18,"button",12),u("click",function(){return i.loginRapidoUno()}),l(19," Login rapido "),s(),a(20,"button",12),u("click",function(){return i.loginRapidoDos()}),l(21," Login rapido "),s(),a(22,"button",12),u("click",function(){return i.loginRapidoTres()}),l(23," Login rapido "),s()()()()),o&2&&(p(),c("formGroup",i.userFormulario),p(12),c("disabled",!i.userFormulario.valid))},dependencies:[F,R,I,S,_,A,M],styles:["[_nghost-%COMP%]{background-color:#000}.position-relative[_ngcontent-%COMP%]{width:600px;height:400px;background-image:url(/assets/mario.jpg);background-color:#fff;padding:20px;border-radius:10px;box-shadow:0 0 10px #0000001a}.full-background[_ngcontent-%COMP%]{width:100vw;height:100vh}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}[_nghost-%COMP%]{display:block;background-image:url(/assets/castillo.gif);background-size:cover;background-repeat:no-repeat;background-position:center}@media (max-width: 768px){.full-background[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:90%;margin:0 auto}.position-relative[_ngcontent-%COMP%]{position:static}.d-flex[_ngcontent-%COMP%]{flex-direction:column}.btn[_ngcontent-%COMP%]{margin-bottom:10px;width:100%}}@media (max-width: 480px){.full-background[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:95%}}"]});let e=n;return e})();var H=N(de());function Oe(e,n){e&1&&(a(0,"p"),l(1," El email es requerido. "),s())}function De(e,n){e&1&&(a(0,"p"),l(1," Por favor, introduce una direcci\xF3n de email v\xE1lida. "),s())}function xe(e,n){if(e&1&&(a(0,"div"),O(1,Oe,2,0,"p",5)(2,De,2,0,"p",5),s()),e&2){let r,t,o=z();p(),c("ngIf",(r=o.userRegistro.get("email"))==null||r.errors==null?null:r.errors.required),p(),c("ngIf",(t=o.userRegistro.get("email"))==null||t.errors==null?null:t.errors.email)}}var me=(()=>{let n=class n{constructor(t){this.router=t,this.firestore=g(P),this.auth=g(x),this.userRegistro=new B({email:new b("",[h.required,h.email]),password:new b("",h.required)})}ngOnInit(){}registro(){let t=this.userRegistro.get("email")?.value||"",o=this.userRegistro.get("password")?.value||"";oe(this.auth,t,o).then(i=>{ae(k(this.firestore,"users"),{email:this.userRegistro.get("email")?.value,fecha:new Date}).then(d=>{H.default.fire({icon:"success",title:`Usuario:${this.userRegistro.get("email")?.value} creado con exito! `}),this.router.navigate(["/home"])})}).catch(i=>{let d=this.firebaseErrors(i.code);H.default.fire({icon:"error",title:d})})}volverLogin(){this.router.navigate(["/"])}firebaseErrors(t){switch(t){case"auth/email-already-in-use":return"Direcci\xF3n de correo electr\xF3nico en uso.";case"auth/weak-password":return"contrase\xF1a debil ingrese una mas segura.";case"auth/user-not-found":return"Usuario no encontrado.";case"auth/invalid-credential":return"Credencialers incorrectas.";default:return"Ocurri\xF3 un error. Por favor, int\xE9ntelo nuevamente m\xE1s tarde."}}};n.\u0275fac=function(o){return new(o||n)(w(D))},n.\u0275cmp=f({type:n,selectors:[["app-registro"]],standalone:!0,features:[C],decls:16,vars:3,consts:[[1,"full-background"],[1,"position-relative","position-absolute","top-50","start-50","translate-middle",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","email","id","exampleInputEmail1","aria-describedby","emailHelp","formControlName","email",1,"form-control"],[4,"ngIf"],["for","exampleInputPassword1",1,"form-label"],["type","password","id","exampleInputPassword1","formControlName","password",1,"form-control"],[1,"d-flex","justify-content-evenly","p-5"],["type","button",1,"btn","btn-primary","rounded-pill",3,"click"],["type","submit",1,"btn","btn-danger","rounded-pill",3,"disabled"]],template:function(o,i){if(o&1&&(a(0,"div",0)(1,"form",1),u("ngSubmit",function(){return i.registro()}),a(2,"div",2)(3,"label",3),l(4,"Email"),s(),m(5,"input",4),O(6,xe,3,2,"div",5),s(),a(7,"div",2)(8,"label",6),l(9,"Contrase\xF1a"),s(),m(10,"input",7),s(),a(11,"div",8)(12,"button",9),u("click",function(){return i.volverLogin()}),l(13," Volver a Login "),s(),a(14,"button",10),l(15," Registrarse "),s()()()()),o&2){let d;p(),c("formGroup",i.userRegistro),p(5),c("ngIf",((d=i.userRegistro.get("email"))==null?null:d.touched)&&((d=i.userRegistro.get("email"))==null?null:d.errors)),p(8),c("disabled",!i.userRegistro.valid)}},dependencies:[F,R,I,S,_,A,M,v,$],styles:["[_nghost-%COMP%]{background-color:#000}.position-relative[_ngcontent-%COMP%]{width:600px;height:400px;background-image:url(/assets/mario.jpg);background-color:#fff;padding:20px;border-radius:10px;box-shadow:0 0 10px #0000001a}.full-background[_ngcontent-%COMP%]{width:100vw;height:100vh}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}[_nghost-%COMP%]{display:block;background-image:url(/assets/castillo.gif);background-size:cover;background-repeat:no-repeat;background-position:center}@media (max-width: 768px){.full-background[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:90%;margin:0 auto}.position-relative[_ngcontent-%COMP%]{position:static}.d-flex[_ngcontent-%COMP%]{flex-direction:column}.btn[_ngcontent-%COMP%]{margin-bottom:10px;width:100%}}@media (max-width: 480px){.full-background[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:95%}}.form-control.is-invalid[_ngcontent-%COMP%]{border-color:red!important;box-shadow:0 0 0 .2rem #ff000040}"]});let e=n;return e})();var fe=[{path:"",component:V},{path:"login",component:V},{path:"registro",component:me},{path:"bio",loadComponent:()=>import("./chunk-FE6ZFFI7.js").then(e=>e.BioComponent)},{path:"home",loadComponent:()=>import("./chunk-QMYLNT3O.js").then(e=>e.HomeComponent)},{path:"cartas",loadComponent:()=>import("./chunk-2ANPT37Q.js").then(e=>e.CartasComponent)},{path:"ahorcado",loadComponent:()=>import("./chunk-MDKP2DLD.js").then(e=>e.AhorcadoComponent)},{path:"preguntados",loadComponent:()=>import("./chunk-KXSD5VE3.js").then(e=>e.PreguntadosComponent)},{path:"cuadrados",loadComponent:()=>import("./chunk-BK3YMVSR.js").then(e=>e.CuadradosComponent)}];var he={providers:[X(fe)]};var ge=(()=>{let n=class n{constructor(){this.title="juegos-app",this.active=1}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=f({type:n,selectors:[["app-root"]],standalone:!0,features:[C],decls:1,vars:0,template:function(o,i){o&1&&m(0,"router-outlet")},dependencies:[J]});let e=n;return e})();var we={firebaseConfig:{apiKey:"AIzaSyB60P4mZx5xQV4z0o8FSAli4P1KMWxP1m0",authDomain:"laboratorio-dc3cc.firebaseapp.com",databaseURL:"https://laboratorio-dc3cc-default-rtdb.firebaseio.com",projectId:"laboratorio-dc3cc",storageBucket:"laboratorio-dc3cc.appspot.com",messagingSenderId:"268246777259",appId:"1:268246777259:web:cee1895d55d0de0c6ca6ee"}};Z(ge,{providers:[v,Q(),he.providers,q(ee(()=>Y(we.firebaseConfig)),re(()=>le()),te(()=>ie()),L.forRoot())]}).catch(e=>console.error(e));