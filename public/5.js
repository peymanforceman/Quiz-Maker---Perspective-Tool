(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{48:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i.n(n),s=i(3);function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o={name:"questionBox",props:{question:{required:!0,type:Object},quiz_id:{type:Number,required:!0}},data:function(){return{value:""}},methods:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(i,!0).forEach(function(t){u(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({},Object(s.b)({setQuestionAnswer:"setQuestionAnswer"})),watch:{value:function(e){var t={quiz_id:this.quiz_id,question_id:this.question.id,value:parseInt(e)};this.setQuestionAnswer(t)}}},c=i(2);function l(e,t,i,n,r,s,a){try{var u=e[s](a),o=u.value}catch(e){return void i(e)}u.done?t(o):Promise.resolve(o).then(n,r)}function d(e){return function(){var t=this,i=arguments;return new Promise(function(n,r){var s=e.apply(t,i);function a(e){l(s,n,r,a,u,"next",e)}function u(e){l(s,n,r,a,u,"throw",e)}a(void 0)})}}function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var m,f,q={name:"quiz",components:{QuestionBox:Object(c.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"question"},[i("div",{staticClass:"statement"},[e._v("\n        "+e._s(e.question.question)+"\n    ")]),e._v(" "),i("div",{staticClass:"decision"},[i("div",{staticClass:"caption disagree"},[e._v("Disagree")]),e._v(" "),i("div",{staticClass:"options"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"question["+e.quiz_id+"]["+e.question.id+"]",value:"1",required:"required",type:"radio"},domProps:{checked:e._q(e.value,"1")},on:{change:function(t){e.value="1"}}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"question["+e.quiz_id+"]["+e.question.id+"]",value:"2",required:"required",type:"radio"},domProps:{checked:e._q(e.value,"2")},on:{change:function(t){e.value="2"}}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"question["+e.quiz_id+"]["+e.question.id+"]",value:"3",required:"required",type:"radio"},domProps:{checked:e._q(e.value,"3")},on:{change:function(t){e.value="3"}}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"question["+e.quiz_id+"]["+e.question.id+"]",value:"4",required:"required",type:"radio"},domProps:{checked:e._q(e.value,"4")},on:{change:function(t){e.value="4"}}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"question["+e.quiz_id+"]["+e.question.id+"]",value:"5",required:"required",type:"radio"},domProps:{checked:e._q(e.value,"5")},on:{change:function(t){e.value="5"}}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"question["+e.quiz_id+"]["+e.question.id+"]",value:"6",required:"required",type:"radio"},domProps:{checked:e._q(e.value,"6")},on:{change:function(t){e.value="6"}}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:"question["+e.quiz_id+"]["+e.question.id+"]",value:"7",required:"required",type:"radio"},domProps:{checked:e._q(e.value,"7")},on:{change:function(t){e.value="7"}}})]),e._v(" "),i("div",{staticClass:"caption agree"},[e._v("Agree")])]),e._v(" "),e._m(0)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"decision mobile"},[t("div",{staticClass:"caption disagree"},[this._v("Disagree")]),this._v(" "),t("div",{staticClass:"caption agree"},[this._v("Agree")])])}],!1,null,null,null).exports},data:function(){return{id:null,quiz:null,email:"",data:{}}},created:function(){this.id=this.$route.params.id},methods:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(i,!0).forEach(function(t){p(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({},Object(s.b)({getQuiz:"getQuiz",sendQuiz:"sendQuiz"}),{updateQuiz:(f=d(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getQuiz(this.id);case 2:this.quiz=this.$store.getters.getQuizById(this.id);case 3:case"end":return e.stop()}},e,this)})),function(){return f.apply(this,arguments)}),send:(m=d(r.a.mark(function e(){var t,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],this.quiz.questions.forEach(function(e){t.push({id:e.id,value:e.value})}),e.next=4,this.sendQuiz({email:this.email,quiz_id:this.quiz.id,answers:t});case 4:i=e.sent,this.$router.push({name:"result",params:{id:i.id}});case 6:case"end":return e.stop()}},e,this)})),function(){return m.apply(this,arguments)})}),mounted:function(){this.quiz=this.$store.getters.getQuizById(this.id),this.updateQuiz()}},h=Object(c.a)(q,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[e.quiz?[i("div",{staticClass:"row justify-content-left"},[i("p",[i("strong",[e._v(e._s(e.quiz.title))]),e._v(" "),i("br"),e._v(" "),i("span",{staticClass:"text-muted"},[e._v(e._s(e.quiz.description))])])]),e._v(" "),e.quiz.hasOwnProperty("questions")?[i("form",{staticStyle:{"margin-bottom":"50px"},on:{submit:function(t){return t.preventDefault(),e.send(t)}}},[i("div",{staticClass:"test-questions comp"},e._l(e.quiz.questions,function(t){return i("question-box",{key:t.id,attrs:{question:t,quiz_id:e.quiz.id}})}),1),e._v(" "),i("div",{staticClass:"test-questions comp"},[i("div",{staticClass:"question"},[i("div",{staticClass:"statement"},[e._v("\n                            Your Email\n                        ")]),e._v(" "),i("div",{staticClass:"decision"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",required:"required",autocomplete:"email",name:"email",placeholder:"you@example.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])])]),e._v(" "),e._m(0)])]:e._e()]:e._e()],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"test-questions comp"},[t("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"}},[this._v("\n                        Save & Continue\n                        "),t("span",{staticClass:"fas fa-arrow-right"})])])}],!1,null,null,null);t.default=h.exports}}]);