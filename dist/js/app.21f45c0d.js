(function(e){function t(t){for(var r,i,u=t[0],c=t[1],a=t[2],d=0,f=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=n("5f5b"),o=n("b1e0"),i=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{numCorrect:e.numCorrect,numTotal:e.numTotal}}),n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",{attrs:{sm:"6",offset:"3"}},[e.questions.length?n("QuestionBox",{attrs:{currQuestion:e.questions[e.indexQuestion],next:e.next,increment:e.increment,allowNext:e.allowNext,score:[e.numCorrect,e.numTotal]}}):e._e()],1)],1)],1)],1)}),u=[],c=(n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-nav",{attrs:{tabs:""}},[n("b-nav-item",{attrs:{disabled:""}},[n("b",[e._v("Simple Quiz App")])]),n("b-nav-item",{attrs:{disabled:""}},[e._v("Counter : "+e._s(e.numCorrect)+"/"+e._s(e.numTotal))])],1)],1)}),a=[],l={props:["numCorrect","numTotal"]},d=l,f=n("2877"),h=Object(f["a"])(d,c,a,!1,null,null,null),p=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{scopedSlots:e._u([{key:"lead",fn:function(){return[e._v(" "+e._s(e.currQuestion.question)+" ")]},proxy:!0}])},[n("hr",{staticClass:"my-4"}),n("b-list-group",e._l(e.answers,(function(t,r){return n("b-list-group-item",{key:r,class:e.answerClass(r),on:{click:function(t){return e.selectAnswer(r)}}},[e._v(" "+e._s(t)+" ")])})),1),n("b-button",{attrs:{variant:"primary",disabled:null===e.selected||e.answered},on:{click:e.submitAnswer}},[e._v(" Submit ")]),e.allowNext?n("b-button",{attrs:{variant:"success",disabled:null===e.selected||!e.answered},on:{click:e.next}},[e._v(" Next ")]):n("b-button",{attrs:{variant:"success",disabled:null===e.selected||!e.answered},on:{click:function(t){return e.$bvModal.show("bv-modal-example")}}},[e._v(" Finish ")]),n("b-modal",{attrs:{id:"bv-modal-example","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[e._v(" You have finish the quiz! ")]},proxy:!0}])},[n("div",{staticClass:"d-block text-center"},[n("h3",[e._v("Score : "+e._s(e.score[0])+"/"+e._s(e.score[1]))])]),n("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(t){return e.$bvModal.hide("bv-modal-example")}}},[e._v("Close")])],1)],1)],1)},m=[],v=(n("99af"),n("c975"),n("2909")),w=n("2ef0"),x=n.n(w),_={props:{currQuestion:Object,next:Function,increment:Function,allowNext:Boolean,score:Array},data:function(){return{selected:null,shuffledAnswers:[],correctIndex:null,answered:null,text:null}},computed:{answers:function(){var e=Object(v["a"])(this.currQuestion.incorrect_answers);return e.push(this.currQuestion.correct_answer),e}},watch:{currQuestion:{immediate:!0,handler:function(){this.selected=null,this.answered=!1,this.nextButton(this.allowNext),this.shuffleAnswer()}}},methods:{selectAnswer:function(e){this.selected=e},shuffleAnswer:function(){var e=[].concat(Object(v["a"])(this.currQuestion.incorrect_answers),[this.currQuestion.correct_answer]);this.shuffledAnswers=x.a.shuffle(e),this.correctIndex=this.shuffledAnswers.indexOf(this.currQuestion.correct_answer)},submitAnswer:function(){var e=!1;this.selected===this.correctIndex&&(e=!0),this.answered=!0,this.increment(e)},answerClass:function(e){var t="";return this.answered||this.selected!==e?this.answered&&this.correctIndex===e?t="correct":this.answered&&this.selected===e&&this.correctIndex!==e&&(t="incorrect"):t="selected",t},nextButton:function(e){this.text=e?"Next":"Finish"}}},y=_,O=(n("7ce8"),Object(f["a"])(y,b,m,!1,null,"1adf87f4",null)),Q=O.exports,g={name:"App",components:{Header:p,QuestionBox:Q},data:function(){return{questions:[],indexQuestion:0,numCorrect:0,numTotal:0,allowNext:!0}},methods:{next:function(){this.indexQuestion<9?(this.indexQuestion++,this.indexQuestion>8&&(this.allowNext=!1)):this.indexQuestion=0},increment:function(e){e&&this.numCorrect++,this.numTotal++}},mounted:function(){var e=this;fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple",{method:"get"}).then((function(e){return e.json()})).then((function(t){e.questions=t.results}))}},j=g,C=(n("034f"),Object(f["a"])(j,i,u,!1,null,null,null)),k=C.exports;r["default"].use(s["a"]),r["default"].use(o["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(k)}}).$mount("#app")},"7ce8":function(e,t,n){"use strict";var r=n("ae15"),s=n.n(r);s.a},"85ec":function(e,t,n){},ae15:function(e,t,n){}});
//# sourceMappingURL=app.21f45c0d.js.map