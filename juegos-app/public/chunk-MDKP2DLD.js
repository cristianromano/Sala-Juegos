import{a as G}from"./chunk-EBA5JQBT.js";import{E as p,F as l,H as s,I as o,J as y,K as v,L as u,M as m,P as d,Q as A,R as b,W as _,ba as C,ca as w,da as x,n as g,s as h,t as f,x as E,y as S,z as r}from"./chunk-CQN66RWN.js";import"./chunk-X6YOYRVK.js";function T(t,e){if(t&1){let c=v();s(0,"button",2),u("click",function(){let n=h(c).$implicit,a=m();return f(a.selectLetter(n))}),d(1),o()}if(t&2){let c=e.$implicit,i=m();l("disabled",!i.juegoActivo||i.isLetterDisabled(c)),r(),b(" ",c," ")}}var I=(()=>{let e=class e{constructor(){this.juegoActivo=!1,this.letterSelected=new E,this.letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}selectLetter(i){this.letterSelected.emit(i)}isLetterDisabled(i){return this.letraEquivocada.includes(i)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-teclado"]],inputs:{juegoActivo:"juegoActivo",letraEquivocada:"letraEquivocada"},outputs:{letterSelected:"letterSelected"},standalone:!0,features:[_],decls:2,vars:1,consts:[[1,"keyboard"],[3,"disabled","click",4,"ngFor","ngForOf"],[3,"click","disabled"]],template:function(n,a){n&1&&(s(0,"div",0),p(1,T,2,2,"button",1),o()),n&2&&(r(),l("ngForOf",a.letters))},dependencies:[x,C],styles:[".keyboard[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.keyboard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px;padding:10px 15px;font-size:1em;cursor:pointer}"]});let t=e;return t})();function W(t,e){if(t&1&&(s(0,"span"),d(1),o()),t&2){let c=e.$implicit;r(),A(c)}}function k(t,e){if(t&1){let c=v();s(0,"div")(1,"button",8),u("click",function(){h(c);let n=m();return f(n.startGame())}),d(2," Empezar juego "),o()()}if(t&2){let c=m();r(),l("disabled",c.gameActive)}}var R=(()=>{let e=class e{constructor(){this.letraEquivocada=[],this.words=["ANGULAR","JAVASCRIPT","HANGMAN","DEVELOPER"],this.selectedWord="",this.displayedWord=[],this.incorrectGuesses=0,this.maxIncorrectGuesses=6,this.currentImage="",this.message="",this.gameActive=!0}ngOnInit(){this.startNewGame()}startNewGame(){this.selectedWord=this.words[Math.floor(Math.random()*this.words.length)],this.displayedWord=Array(this.selectedWord.length).fill("_"),this.incorrectGuesses=0,this.updateHangmanImage(),this.message=""}onLetterSelected(i){let n=!1;for(let a=0;a<this.selectedWord.length;a++)this.selectedWord[a]===i&&(this.displayedWord[a]=i,n=!0);n||(this.letraEquivocada.push(i),this.incorrectGuesses++,this.updateHangmanImage()),this.checkGameStatus()}updateHangmanImage(){this.currentImage=`assets/hangman${this.incorrectGuesses}.png`}checkGameStatus(){this.displayedWord.join("")===this.selectedWord?(this.message="Ganaste!",this.gameActive=!1):this.incorrectGuesses>=this.maxIncorrectGuesses&&(this.message=`Perdiste! la palabra era ${this.selectedWord}`,this.gameActive=!1)}startGame(){this.startNewGame(),this.letraEquivocada=[],this.gameActive=!0}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-ahorcado"]],standalone:!0,features:[_],decls:12,vars:6,consts:[[1,"hangman-game"],[1,"word"],[4,"ngFor","ngForOf"],[1,"hangman-image"],["alt","Hangman",3,"src"],[3,"letterSelected","letraEquivocada","juegoActivo"],[1,"message"],[4,"ngIf"],[1,"btn","btn-primary",3,"click","disabled"]],template:function(n,a){n&1&&(y(0,"app-navbar"),s(1,"div",0)(2,"h1"),d(3,"Ahorcado"),o(),s(4,"div",1),p(5,W,2,1,"span",2),o(),s(6,"div",3),y(7,"img",4),o(),s(8,"app-teclado",5),u("letterSelected",function(M){return a.onLetterSelected(M)}),o(),s(9,"div",6),d(10),o(),p(11,k,3,1,"div",7),o()),n&2&&(r(5),l("ngForOf",a.displayedWord),r(2),l("src",a.currentImage,S),r(),l("letraEquivocada",a.letraEquivocada)("juegoActivo",a.gameActive),r(2),A(a.message),r(),l("ngIf",a.gameActive==!1))},dependencies:[G,I,x,C,w],styles:[".hangman-game[_ngcontent-%COMP%]{text-align:center}.word[_ngcontent-%COMP%]{font-size:2em;margin:20px}.hangman-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px}.message[_ngcontent-%COMP%]{font-size:1.5em;margin-top:20px}"]});let t=e;return t})();export{R as AhorcadoComponent};