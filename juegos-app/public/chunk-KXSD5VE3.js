import{a as T,c as F,g as R,i as j,l as O}from"./chunk-AWMKQJZU.js";import{a as N}from"./chunk-EBA5JQBT.js";import{A as C,E as g,F as c,H as o,I as a,J as b,K as f,L as _,M as d,O as I,P as l,Q as y,R as x,S as k,T as A,U as S,W as P,ba as M,ca as Q,da as V,ea as E,g as h,j as v,n as w,s as p,t as m,z as s}from"./chunk-CQN66RWN.js";import"./chunk-X6YOYRVK.js";var D=(()=>{let n=class n{constructor(i){this.http=i}getPreguntas(){return this.http.get("assets/preguntas.json")}};n.\u0275fac=function(r){return new(r||n)(v(E))},n.\u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();function q(t,n){if(t&1){let e=f();o(0,"div",10)(1,"input",11),S("ngModelChange",function(r){p(e);let u=d(2);return A(u.selectedAnswer,r)||(u.selectedAnswer=r),m(r)}),a(),o(2,"label",12),l(3),a()()}if(t&2){let e=n.$implicit,i=d(2);s(),I("id","answer",e,""),k("ngModel",i.selectedAnswer),c("value",e)("disabled",i.isAnswered),s(),c("for","answer"+e),s(),y(e)}}function z(t,n){if(t&1){let e=f();o(0,"div")(1,"h2",5),l(2),a(),o(3,"div",6),g(4,q,4,7,"div",7),a(),o(5,"div",8)(6,"button",9),_("click",function(){p(e);let r=d();return m(r.checkAnswer())}),l(7," Verificar respuesta "),a()()()}if(t&2){let e=d();s(2),x(" ",e.preguntas[e.currentQuestionIndex].question," "),s(2),c("ngForOf",e.preguntas[e.currentQuestionIndex].answers),s(2),c("disabled",e.isAnswered)}}function B(t,n){t&1&&(o(0,"p",17),l(1," \xA1Respuesta correcta! "),a())}function H(t,n){if(t&1&&(o(0,"p",18),l(1),a()),t&2){let e=d(2);s(),x(" Respuesta incorrecta. La correcta era ",e.preguntas[e.currentQuestionIndex].correct_answer,". ")}}function G(t,n){if(t&1){let e=f();o(0,"div",13),g(1,B,2,0,"p",14)(2,H,2,1,"p",15),o(3,"button",16),_("click",function(){p(e);let r=d();return m(r.nextQuestion())}),l(4," Siguiente pregunta "),a()()}if(t&2){let e=d();s(),c("ngIf",e.selectedAnswer===e.preguntas[e.currentQuestionIndex].correct_answer),s(),c("ngIf",e.selectedAnswer!==e.preguntas[e.currentQuestionIndex].correct_answer)}}var $=(()=>{let n=class n{constructor(i){this.preguntasService=i,this.currentQuestionIndex=0,this.selectedAnswer=null,this.isAnswered=!1,this.showResult=!1}ngOnInit(){this.preguntasService.getPreguntas().subscribe(i=>{this.preguntas=i.preguntas})}nextQuestion(){this.currentQuestionIndex++,this.selectedAnswer=null,this.showResult=!1,this.isAnswered=!1}checkAnswer(){this.isAnswered=!0;let i=this.preguntas[this.currentQuestionIndex];this.selectedAnswer===i.correct_answer?this.showResult=!0:this.showResult=!0}};n.\u0275fac=function(r){return new(r||n)(C(D))},n.\u0275cmp=w({type:n,selectors:[["app-preguntados"]],standalone:!0,features:[P],decls:6,vars:2,consts:[[1,"full-background"],[1,"d-flex","justify-content-center","align-items-center","mt-5"],[1,"card","p-4",2,"width","30rem"],[4,"ngIf"],["class","text-center mt-3",4,"ngIf"],[1,"card-title"],[1,"card-body"],["class","form-check",4,"ngFor","ngForOf"],[1,"card-footer","text-center"],[1,"btn","btn-primary",3,"click","disabled"],[1,"form-check"],["type","radio","name","answer",1,"form-check-input",3,"ngModelChange","ngModel","value","disabled","id"],[1,"form-check-label",3,"for"],[1,"text-center","mt-3"],["class","text-success",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"btn","btn-secondary",3,"click"],[1,"text-success"],[1,"text-danger"]],template:function(r,u){r&1&&(o(0,"div",0),b(1,"app-navbar"),o(2,"div",1)(3,"div",2),g(4,z,8,3,"div",3)(5,G,5,2,"div",4),a()()()),r&2&&(s(4),c("ngIf",u.currentQuestionIndex<u.preguntas.length),s(),c("ngIf",u.showResult))},dependencies:[V,M,Q,O,T,j,F,R,N],styles:["[_nghost-%COMP%]{display:block;background-image:url(/assets/triviafondo.jpg);background-size:cover;background-repeat:no-repeat;background-position:center}.full-background[_ngcontent-%COMP%]{width:100vw;height:100vh}"]});let t=n;return t})();export{$ as PreguntadosComponent};
