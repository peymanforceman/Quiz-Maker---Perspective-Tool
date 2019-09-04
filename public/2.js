(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/main/components/quiz.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/main/components/quiz.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _src_questionBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/questionBox */ "./resources/js/Components/main/components/src/questionBox.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "quiz",
  components: {
    QuestionBox: _src_questionBox__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      id: null,
      quiz: null,
      email: '',
      data: {}
    };
  },
  created: function created() {
    this.id = this.$route.params.id;
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    getQuiz: 'getQuiz',
    sendQuiz: 'sendQuiz'
  }), {
    updateQuiz: function () {
      var _updateQuiz = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getQuiz(this.id);

              case 2:
                this.quiz = this.$store.getters.getQuizById(this.id);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateQuiz() {
        return _updateQuiz.apply(this, arguments);
      }

      return updateQuiz;
    }(),
    send: function () {
      var _send = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var answers, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                answers = [];
                this.quiz.questions.forEach(function (question) {
                  answers.push({
                    id: question.id,
                    value: question.value
                  });
                });
                _context2.next = 4;
                return this.sendQuiz({
                  email: this.email,
                  quiz_id: this.quiz.id,
                  answers: answers
                });

              case 4:
                result = _context2.sent;
                this.$router.push({
                  name: 'result',
                  params: {
                    id: result.id
                  }
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function send() {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }),
  mounted: function mounted() {
    this.quiz = this.$store.getters.getQuizById(this.id);
    this.updateQuiz();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/main/components/src/questionBox.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/main/components/src/questionBox.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "questionBox",
  props: {
    question: {
      required: true,
      type: Object
    },
    quiz_id: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      value: ''
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setQuestionAnswer: 'setQuestionAnswer'
  })),
  watch: {
    value: function value(_value) {
      var data = {
        quiz_id: this.quiz_id,
        question_id: this.question.id,
        value: parseInt(_value)
      };
      this.setQuestionAnswer(data);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/main/components/quiz.vue?vue&type=template&id=0b1b8603&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/main/components/quiz.vue?vue&type=template&id=0b1b8603& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _vm.quiz
        ? [
            _c("div", { staticClass: "row justify-content-left" }, [
              _c("p", [
                _c("strong", [_vm._v(_vm._s(_vm.quiz.title))]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("span", { staticClass: "text-muted" }, [
                  _vm._v(_vm._s(_vm.quiz.description))
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.quiz.hasOwnProperty("questions")
              ? [
                  _c(
                    "form",
                    {
                      staticStyle: { "margin-bottom": "50px" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.send($event)
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "test-questions comp" },
                        _vm._l(_vm.quiz.questions, function(question) {
                          return _c("question-box", {
                            key: question.id,
                            attrs: { question: question, quiz_id: _vm.quiz.id }
                          })
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "test-questions comp" }, [
                        _c("div", { staticClass: "question" }, [
                          _c("div", { staticClass: "statement" }, [
                            _vm._v(
                              "\n                            Your Email\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "decision" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.email,
                                  expression: "email"
                                }
                              ],
                              staticClass: "form-control form-control-lg",
                              attrs: {
                                type: "email",
                                required: "required",
                                autocomplete: "email",
                                name: "email",
                                placeholder: "you@example.com"
                              },
                              domProps: { value: _vm.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.email = $event.target.value
                                }
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(0)
                    ]
                  )
                ]
              : _vm._e()
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "test-questions comp" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-lg btn-block",
          attrs: { type: "submit" }
        },
        [
          _vm._v(
            "\n                        Save & Continue\n                        "
          ),
          _c("span", { staticClass: "fas fa-arrow-right" })
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/main/components/src/questionBox.vue?vue&type=template&id=114bf49c&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/main/components/src/questionBox.vue?vue&type=template&id=114bf49c& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "question" }, [
    _c("div", { staticClass: "statement" }, [
      _vm._v("\n        " + _vm._s(_vm.question.question) + "\n    ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "decision" }, [
      _c("div", { staticClass: "caption disagree" }, [_vm._v("Disagree")]),
      _vm._v(" "),
      _c("div", { staticClass: "options" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          attrs: {
            name: "question[" + _vm.quiz_id + "][" + _vm.question.id + "]",
            value: "1",
            required: "required",
            type: "radio"
          },
          domProps: { checked: _vm._q(_vm.value, "1") },
          on: {
            change: function($event) {
              _vm.value = "1"
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          attrs: {
            name: "question[" + _vm.quiz_id + "][" + _vm.question.id + "]",
            value: "2",
            required: "required",
            type: "radio"
          },
          domProps: { checked: _vm._q(_vm.value, "2") },
          on: {
            change: function($event) {
              _vm.value = "2"
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          attrs: {
            name: "question[" + _vm.quiz_id + "][" + _vm.question.id + "]",
            value: "3",
            required: "required",
            type: "radio"
          },
          domProps: { checked: _vm._q(_vm.value, "3") },
          on: {
            change: function($event) {
              _vm.value = "3"
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          attrs: {
            name: "question[" + _vm.quiz_id + "][" + _vm.question.id + "]",
            value: "4",
            required: "required",
            type: "radio"
          },
          domProps: { checked: _vm._q(_vm.value, "4") },
          on: {
            change: function($event) {
              _vm.value = "4"
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          attrs: {
            name: "question[" + _vm.quiz_id + "][" + _vm.question.id + "]",
            value: "5",
            required: "required",
            type: "radio"
          },
          domProps: { checked: _vm._q(_vm.value, "5") },
          on: {
            change: function($event) {
              _vm.value = "5"
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          attrs: {
            name: "question[" + _vm.quiz_id + "][" + _vm.question.id + "]",
            value: "6",
            required: "required",
            type: "radio"
          },
          domProps: { checked: _vm._q(_vm.value, "6") },
          on: {
            change: function($event) {
              _vm.value = "6"
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          attrs: {
            name: "question[" + _vm.quiz_id + "][" + _vm.question.id + "]",
            value: "7",
            required: "required",
            type: "radio"
          },
          domProps: { checked: _vm._q(_vm.value, "7") },
          on: {
            change: function($event) {
              _vm.value = "7"
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "caption agree" }, [_vm._v("Agree")])
    ]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "decision mobile" }, [
      _c("div", { staticClass: "caption disagree" }, [_vm._v("Disagree")]),
      _vm._v(" "),
      _c("div", { staticClass: "caption agree" }, [_vm._v("Agree")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/main/components/quiz.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Components/main/components/quiz.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quiz_vue_vue_type_template_id_0b1b8603___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz.vue?vue&type=template&id=0b1b8603& */ "./resources/js/Components/main/components/quiz.vue?vue&type=template&id=0b1b8603&");
/* harmony import */ var _quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.vue?vue&type=script&lang=js& */ "./resources/js/Components/main/components/quiz.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _quiz_vue_vue_type_template_id_0b1b8603___WEBPACK_IMPORTED_MODULE_0__["render"],
  _quiz_vue_vue_type_template_id_0b1b8603___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/main/components/quiz.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/main/components/quiz.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/main/components/quiz.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./quiz.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/main/components/quiz.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/main/components/quiz.vue?vue&type=template&id=0b1b8603&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/main/components/quiz.vue?vue&type=template&id=0b1b8603& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quiz_vue_vue_type_template_id_0b1b8603___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./quiz.vue?vue&type=template&id=0b1b8603& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/main/components/quiz.vue?vue&type=template&id=0b1b8603&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quiz_vue_vue_type_template_id_0b1b8603___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quiz_vue_vue_type_template_id_0b1b8603___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/main/components/src/questionBox.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/main/components/src/questionBox.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _questionBox_vue_vue_type_template_id_114bf49c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionBox.vue?vue&type=template&id=114bf49c& */ "./resources/js/Components/main/components/src/questionBox.vue?vue&type=template&id=114bf49c&");
/* harmony import */ var _questionBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionBox.vue?vue&type=script&lang=js& */ "./resources/js/Components/main/components/src/questionBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _questionBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _questionBox_vue_vue_type_template_id_114bf49c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _questionBox_vue_vue_type_template_id_114bf49c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/main/components/src/questionBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/main/components/src/questionBox.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/main/components/src/questionBox.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_questionBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./questionBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/main/components/src/questionBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_questionBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/main/components/src/questionBox.vue?vue&type=template&id=114bf49c&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/main/components/src/questionBox.vue?vue&type=template&id=114bf49c& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_questionBox_vue_vue_type_template_id_114bf49c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./questionBox.vue?vue&type=template&id=114bf49c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/main/components/src/questionBox.vue?vue&type=template&id=114bf49c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_questionBox_vue_vue_type_template_id_114bf49c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_questionBox_vue_vue_type_template_id_114bf49c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);