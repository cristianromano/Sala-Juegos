import{A as b,F as p,O as v,P as f,g as c,i as d,o as u,oa as h,p as g,t as n,u as a,v as m,w as s,y as o}from"./chunk-KEGUUP3A.js";var T=(()=>{let e=class e{constructor(t){this.route=t,this.auth=c(h)}ngOnInit(){this.auth.onAuthStateChanged(t=>{t?(this.nombre=t.email,console.log("aca esta el nombre",this.nombre)):console.log("No hay usuario")})}irBio(){this.route.navigate(["/bio"])}logOut(){this.auth.signOut(),this.route.navigate(["/login"])}};e.\u0275fac=function(i){return new(i||e)(g(v))},e.\u0275cmp=d({type:e,selectors:[["app-navbar"]],standalone:!0,features:[p],decls:18,vars:1,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["routerLink","/home",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarText","aria-controls","navbarText","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarText",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page",1,"nav-link","active",3,"click"],[1,"dropdown"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary","dropdown-toggle"],[1,"dropdown-menu"],["type","button",1,"dropdown-item","desloguear",3,"click"]],template:function(i,l){i&1&&(n(0,"nav",0)(1,"div",1)(2,"a",2),o(3,"Sala de juegos"),a(),n(4,"button",3),m(5,"span",4),a(),n(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),s("click",function(){return l.irBio()}),o(10,"Quien Soy?"),a()()(),n(11,"div",9)(12,"button",10),o(13),a(),n(14,"ul",11)(15,"li")(16,"button",12),s("click",function(){return l.logOut()}),o(17," Desloguearse "),a()()()()()()()),i&2&&(u(13),b(" ",l.nombre," "))},dependencies:[f],styles:[".navbar[_ngcontent-%COMP%]{background-image:url(/assets/mario.jpg);background-size:cover}.nav-link[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer}.desloguear[_ngcontent-%COMP%]{cursor:pointer}.desloguear[_ngcontent-%COMP%]:hover{background-color:#e74c3c;color:#fff}"]});let r=e;return r})();export{T as a};
