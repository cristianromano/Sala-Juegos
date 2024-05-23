import{m as y}from"./chunk-AWMKQJZU.js";import{a as D}from"./chunk-EBA5JQBT.js";import{A as b,F as p,H as i,I as s,J as c,L as m,P as d,R as v,W as g,da as C,ea as k,g as h,ga as w,j as u,n as f,y as l,z as o}from"./chunk-CQN66RWN.js";import"./chunk-X6YOYRVK.js";var U=(()=>{let e=class e{constructor(t){this.http=t,this.apiUrl="https://www.deckofcardsapi.com/api/deck"}getDeck(){return this.http.get(`${this.apiUrl}/new/shuffle/ `)}drawCard(t){return this.http.get(`${this.apiUrl}/${t}/draw/?count=1`)}};e.\u0275fac=function(a){return new(a||e)(u(k))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var T=(()=>{let e=class e{constructor(t){this.cardService=t,this.puntos=0,this.cartaDos={image:"https://www.deckofcardsapi.com/static/img/back.png"}}ngOnInit(){this.cardService.getDeck().subscribe(t=>{this.baraja=t,this.cardService.drawCard(this.baraja.deck_id).subscribe(a=>{this.cartasArray=a,this.cartaUno=this.cartasArray.cards[0],console.log(this.cartaUno)})})}drawCardMayor(){this.cardService.drawCard(this.baraja.deck_id).subscribe(t=>{this.cartaDos=t.cards[0],this.valorCarta(this.cartaDos)>this.valorCarta(this.cartaUno)?(this.cartaUno=this.cartaDos,this.puntos++,this.cartaDos={image:"https://www.deckofcardsapi.com/static/img/back.png"}):this.puntos=0})}drawCardMenor(){this.cardService.drawCard(this.baraja.deck_id).subscribe(t=>{this.cartaDos=t.cards[0],this.valorCarta(this.cartaDos)<this.valorCarta(this.cartaUno)?(this.cartaUno=this.cartaDos,this.puntos++,this.cartaDos={image:"https://www.deckofcardsapi.com/static/img/back.png"}):this.puntos=0})}valorCarta(t){switch(t.value){case"ACE":return 14;case"KING":return 13;case"QUEEN":return 12;case"JACK":return 11;default:return t.value}}};e.\u0275fac=function(a){return new(a||e)(b(U))},e.\u0275cmp=f({type:e,selectors:[["app-cartas"]],standalone:!0,features:[g],decls:15,vars:3,consts:[[1,"full-background"],[1,"container","d-flex","justify-content-center"],[1,"card","mt-5",2,"width","18rem"],["alt","","srcset","",3,"src"],["type","button",1,"btn","btn-primary","mt-3","ms-3",3,"click"],[1,"container","d-flex","justify-content-center","mt-5"]],template:function(a,n){a&1&&(i(0,"div",0),c(1,"app-navbar"),i(2,"div",1)(3,"div",2),c(4,"img",3),s(),i(5,"div",2),c(6,"img",3),s()(),i(7,"div",1)(8,"button",4),m("click",function(){return n.drawCardMayor()}),d(9," CARTA MAYOR "),s(),i(10,"button",4),m("click",function(){return n.drawCardMenor()}),d(11," CARTA MENOR "),s()(),i(12,"div",5)(13,"b"),d(14),s()()()),a&2&&(o(4),p("src",n.cartaUno.image,l),o(2),p("src",n.cartaDos.image,l),o(8),v("PUNTOS ",n.puntos,""))},dependencies:[w,C,y,D],styles:[".full-background[_ngcontent-%COMP%]{height:100vh}[_nghost-%COMP%]{display:block;background-image:url(/assets/cartas.jpg);background-size:cover;background-repeat:no-repeat;background-position:center}"]});let r=e;return r})();export{T as CartasComponent};
