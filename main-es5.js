function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_components_info_hotbar_info_hotbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/components/info-hotbar/info-hotbar.component */
    "./src/app/components/info-hotbar/info-hotbar.component.ts");
    /* harmony import */


    var src_app_components_skill_tree_skill_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/skill-tree/skill-tree.component */
    "./src/app/components/skill-tree/skill-tree.component.ts");
    /* harmony import */


    var _components_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/contracts/contracts.component */
    "./src/app/components/contracts/contracts.component.ts");
    /* harmony import */


    var _components_attacks_attacks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/attacks/attacks.component */
    "./src/app/components/attacks/attacks.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.short_title = 'httys';
      this.long_title = 'How To Train Your Skynet';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "info-hotbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "skill-tree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "contracts-pane");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "attack-pane");
        }
      },
      directives: [src_app_components_info_hotbar_info_hotbar_component__WEBPACK_IMPORTED_MODULE_1__["InfoHotbarComponent"], src_app_components_skill_tree_skill_tree_component__WEBPACK_IMPORTED_MODULE_2__["SkillTreeComponent"], _components_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_3__["ContractsComponent"], _components_attacks_attacks_component__WEBPACK_IMPORTED_MODULE_4__["AttackPane"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var src_app_components_skill_tree_skill_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/skill-tree/skill-tree.component */
    "./src/app/components/skill-tree/skill-tree.component.ts");
    /* harmony import */


    var src_app_components_info_hotbar_info_hotbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/info-hotbar/info-hotbar.component */
    "./src/app/components/info-hotbar/info-hotbar.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_attacks_attacks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/attacks/attacks.component */
    "./src/app/components/attacks/attacks.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/contracts/contracts.component */
    "./src/app/components/contracts/contracts.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], src_app_components_skill_tree_skill_tree_component__WEBPACK_IMPORTED_MODULE_3__["SkillTreeComponent"], src_app_components_info_hotbar_info_hotbar_component__WEBPACK_IMPORTED_MODULE_4__["InfoHotbarComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], src_app_components_skill_tree_skill_tree_component__WEBPACK_IMPORTED_MODULE_3__["SkillTreeComponent"], src_app_components_info_hotbar_info_hotbar_component__WEBPACK_IMPORTED_MODULE_4__["InfoHotbarComponent"], _components_attacks_attacks_component__WEBPACK_IMPORTED_MODULE_6__["AttackPane"], _components_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_8__["ContractsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], src_app_components_skill_tree_skill_tree_component__WEBPACK_IMPORTED_MODULE_3__["SkillTreeComponent"], src_app_components_info_hotbar_info_hotbar_component__WEBPACK_IMPORTED_MODULE_4__["InfoHotbarComponent"], _components_attacks_attacks_component__WEBPACK_IMPORTED_MODULE_6__["AttackPane"], _components_contracts_contracts_component__WEBPACK_IMPORTED_MODULE_8__["ContractsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], src_app_components_skill_tree_skill_tree_component__WEBPACK_IMPORTED_MODULE_3__["SkillTreeComponent"], src_app_components_info_hotbar_info_hotbar_component__WEBPACK_IMPORTED_MODULE_4__["InfoHotbarComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/attacks/attacks.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/attacks/attacks.component.ts ***!
    \*********************************************************/

  /*! exports provided: AttackPane */

  /***/
  function srcAppComponentsAttacksAttacksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttackPane", function () {
      return AttackPane;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_assets_attacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/assets/attacks */
    "./src/assets/attacks.ts");
    /* harmony import */


    var src_assets_tooltips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/assets/tooltips */
    "./src/assets/tooltips.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AttackPane_div_2_div_1_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var attack_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attack_r4);
      }
    }

    function AttackPane_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AttackPane_div_2_div_1_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.initiate_attack();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Choose your attack:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AttackPane_div_2_div_1_option_5_Template, 2, 1, "option", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.attack_select_form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.attack_options);
      }
    }

    function AttackPane_div_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.current_attack.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.current_attack.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.current_attack.percentage, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, ctx_r2.current_attack.start_time, "short"));
      }
    }

    function AttackPane_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttackPane_div_2_div_1_Template, 7, 2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AttackPane_div_2_div_2_Template, 11, 7, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.attack_active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.attack_active);
      }
    }

    var AttackPane = /*#__PURE__*/function () {
      function AttackPane(data_store) {
        var _this = this;

        _classCallCheck(this, AttackPane);

        this.data_store = data_store;
        this.tick_time = 100;
        this.current_attack = null;
        this.show_attacks = false;
        this.attack_active = false;
        this.attack_options = Object.keys(src_assets_attacks__WEBPACK_IMPORTED_MODULE_1__["attacks"]);
        this.attack_select_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          attack: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.event_timer = setInterval(function () {
          data_store.store_bits(data_store.fetch_bits() + 1); //data_store.store_attack_percentage(data_store.fetch_percentage();

          if (_this.current_attack != null) {
            _this.attack_percentage();
          }
        }, this.tick_time);
      }

      _createClass(AttackPane, [{
        key: "toggle_attacks",
        value: function toggle_attacks() {
          this.show_attacks = !this.show_attacks;
        }
      }, {
        key: "initiate_attack",
        value: function initiate_attack() {
          var selection = this.attack_select_form.get('attack').value;
          console.log("Starting ".concat(selection, "..."));
          this.current_attack = {
            name: selection,
            description: this.genearte_random_tooltip(),
            percentage: 0,
            start_time: new Date(),
            end_time: this.get_final_time()
          };
          this.attack_active = true;
        }
      }, {
        key: "attack_percentage",
        value: function attack_percentage() {
          var current = new Date().getTime(); //get current time in seconds.

          if (this.current_attack.percentage < 100) {
            var completed = current - this.current_attack.start_time.getTime(); //get time since start time.

            this.current_attack.percentage = Math.floor(completed / 1000 / this.current_attack.end_time); //compare start time against end time.

            this.data_store.store_attack_percentage(this.data_store.fetch_percentage());

            if (this.current_attack.percentage >= 100) {
              this.data_store.store_bits(this.data_store.fetch_bits() + this.reward());
              this.current_attack.percentage == 0;
              this.current_attack == null;
              this.attack_active = false;
            }
          }
        }
      }, {
        key: "cycle",
        value: function cycle() {}
      }, {
        key: "get_final_time",
        value: function get_final_time() {
          var random = Math.floor(Math.random() * 500) + 1000;
          var time = new Date(random); //conert milliseconds to seconds.

          return time.getTime() / 1000; //convert milliseconds to seconds.
        }
        /**Check if contract is up. Return duration so we can set percetage bar in main page.*/
        // check_time(currency: currencies, attacking: attacks): number {
        //     let current_time = new Date().getTime();
        //     attacking.completed = (current_time - attacking.start_time) * 1000;   //gives us time in milliseconds.
        //
        //     if(attacking.completed > attacking.total){   //we are done attacking. reset everything.
        //         currency.bits += this.reward();
        //         attacking.attack_name = null; //stop attacks from continuing infinetly.
        //         attacking.completed = 0;
        //         return;
        //     }
        //     else{
        //         return attacking.completed;   //return the remaining amount of time.
        //     }
        // }

      }, {
        key: "reward",
        value: function reward() {
          var reward = Math.floor(Math.random() * 500) + 1; //genearte a random number between 1 and 100.

          return reward;
        }
        /**Give random attack info per attack. */

      }, {
        key: "genearte_random_tooltip",
        value: function genearte_random_tooltip() {
          //source: https://www.safetydetectives.com/blog/malware-statistics/
          var index = Math.floor(Math.random() * (9 - 1) + 1);
          return src_assets_tooltips__WEBPACK_IMPORTED_MODULE_2__["tooltips"][index];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AttackPane;
    }();

    AttackPane.ɵfac = function AttackPane_Factory(t) {
      return new (t || AttackPane)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataStoreService"]));
    };

    AttackPane.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AttackPane,
      selectors: [["attack-pane"]],
      decls: 3,
      vars: 1,
      consts: [[3, "click"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], ["formControlName", "attack"], [4, "ngFor", "ngForOf"], ["type", "submit", "value", "Initiate", 1, "btn", "btn-success"]],
      template: function AttackPane_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttackPane_Template_button_click_0_listener() {
            return ctx.toggle_attacks();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Attacks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AttackPane_div_2_Template, 3, 2, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_attacks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXR0YWNrcy9hdHRhY2tzLmNvbXBvbmVudC5zYXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttackPane, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'attack-pane',
          templateUrl: './attacks.component.html',
          styleUrls: ['./attacks.component.sass']
        }]
      }], function () {
        return [{
          type: src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_4__["DataStoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contracts/contracts.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/contracts/contracts.component.ts ***!
    \*************************************************************/

  /*! exports provided: ContractsComponent */

  /***/
  function srcAppComponentsContractsContractsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContractsComponent", function () {
      return ContractsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContractsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contracts!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ContractsComponent = /*#__PURE__*/function () {
      function ContractsComponent(data_store) {
        var _this2 = this;

        _classCallCheck(this, ContractsComponent);

        this.data_store = data_store;
        this.tick_time = 1000;
        this.show_contracts = false;
        this.contract_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          accepted: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.event_timer = setInterval(function () {
          _this2.cycle();
        }, this.tick_time);
      }

      _createClass(ContractsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggle_contracts",
        value: function toggle_contracts() {
          this.show_contracts = !this.show_contracts;
        }
      }, {
        key: "cycle",
        value: function cycle() {
          console.log('A cycle!');
        }
      }]);

      return ContractsComponent;
    }();

    ContractsComponent.ɵfac = function ContractsComponent_Factory(t) {
      return new (t || ContractsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_2__["DataStoreService"]));
    };

    ContractsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContractsComponent,
      selectors: [["contracts-pane"]],
      decls: 3,
      vars: 1,
      consts: [[3, "click"], [4, "ngIf"]],
      template: function ContractsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContractsComponent_Template_button_click_0_listener() {
            return ctx.toggle_contracts();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contracts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContractsComponent_div_2_Template, 3, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_contracts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJhY3RzL2NvbnRyYWN0cy5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'contracts-pane',
          templateUrl: './contracts.component.html',
          styleUrls: ['./contracts.component.sass']
        }]
      }], function () {
        return [{
          type: src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_2__["DataStoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/info-hotbar/info-hotbar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/info-hotbar/info-hotbar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: InfoHotbarComponent */

  /***/
  function srcAppComponentsInfoHotbarInfoHotbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoHotbarComponent", function () {
      return InfoHotbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var InfoHotbarComponent = /*#__PURE__*/function () {
      function InfoHotbarComponent(data_store) {
        var _this3 = this;

        _classCallCheck(this, InfoHotbarComponent);

        this.data_store = data_store;
        this.total_money = data_store.fetch_money();
        this.total_bits = data_store.fetch_bits();
        this.total_detection = data_store.fetch_detection();
        this.total_detection_max = data_store.fetch_detection_max();
        this.total_detection_percentage = (this.total_detection / this.total_detection_max * 100).toFixed(1);
        this.event_timer = setInterval(function () {
          _this3.total_money = data_store.fetch_money();
          _this3.total_bits = data_store.fetch_bits();
          _this3.total_detection = data_store.fetch_detection();
          _this3.total_detection_max = data_store.fetch_detection_max();
          _this3.total_detection_percentage = (_this3.total_detection / _this3.total_detection_max * 100).toFixed(1);
        }, 1000);
      }

      _createClass(InfoHotbarComponent, [{
        key: "grind_bits",
        value: function grind_bits() {
          this.total_bits += 1;
          this.data_store.store_bits(this.total_bits);
        } // grind_money(): void {
        //   this.total_money += 1;
        //   this.data_store.store_money(this.total_money);
        // }
        // grind_detection(): void {
        //   this.total_detection += 1;
        //   this.data_store.store_detection(this.total_detection);
        // }

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoHotbarComponent;
    }();

    InfoHotbarComponent.ɵfac = function InfoHotbarComponent_Factory(t) {
      return new (t || InfoHotbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_1__["DataStoreService"]));
    };

    InfoHotbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoHotbarComponent,
      selectors: [["info-hotbar"]],
      decls: 11,
      vars: 5,
      consts: [["id", "hotbar"], ["id", "bit-grinder"], [3, "click"]],
      template: function InfoHotbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoHotbarComponent_Template_button_click_7_listener() {
            return ctx.grind_bits();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "bits4clicks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.total_money), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.total_bits, " bits");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.total_detection, " detection");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
      styles: ["#hotbar[_ngcontent-%COMP%] {\n  color: #dcdcdc;\n  height: 10%;\n  width: 100vw;\n  background-color: #282c34;\n}\n\n#hotbar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.4em;\n  display: inline;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  top: -0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2h0dHlzL2h0dHlzL3NyYy9hcHAvY29tcG9uZW50cy9pbmZvLWhvdGJhci9pbmZvLWhvdGJhci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmZvLWhvdGJhci9pbmZvLWhvdGJhci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby1ob3RiYXIvaW5mby1ob3RiYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG90YmFyXG4gIGNvbG9yOiAjZGNkY2RjXG4gIGhlaWdodDogMTAlXG4gIHdpZHRoOiAxMDB2d1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0XG5cbiNob3RiYXIgKlxuICBtYXJnaW46IDBcbiAgcGFkZGluZzogMCAwLjRlbVxuICBkaXNwbGF5OiBpbmxpbmVcblxuYnV0dG9uXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxuICB0b3A6IC0wLjI1ZW1cbiIsIiNob3RiYXIge1xuICBjb2xvcjogI2RjZGNkYztcbiAgaGVpZ2h0OiAxMCU7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcbn1cblxuI2hvdGJhciAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAuNGVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMC4yNWVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoHotbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'info-hotbar',
          templateUrl: './info-hotbar.component.html',
          styleUrls: ['./info-hotbar.component.sass']
        }]
      }], function () {
        return [{
          type: src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_1__["DataStoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/skill-tree/skill-tree.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/skill-tree/skill-tree.component.ts ***!
    \***************************************************************/

  /*! exports provided: SkillTreeComponent */

  /***/
  function srcAppComponentsSkillTreeSkillTreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillTreeComponent", function () {
      return SkillTreeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data-store.service */
    "./src/app/services/data-store.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // ng-bootstrap modal from https://ng-bootstrap.github.io/#/components/modal/examples


    function SkillTreeComponent_ng_template_37_button_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Purchase ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SkillTreeComponent_ng_template_37_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_ng_template_37_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.purchaseSkill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Purchase ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SkillTreeComponent_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h4", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_ng_template_37_Template_button_click_2_listener() {
          var modal_r2 = ctx.$implicit;
          return modal_r2.dismiss();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_ng_template_37_Template_button_click_10_listener() {
          var modal_r2 = ctx.$implicit;
          return modal_r2.dismiss();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SkillTreeComponent_ng_template_37_button_12_Template, 2, 0, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SkillTreeComponent_ng_template_37_button_13_Template, 2, 0, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.canPurchase);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.canPurchase);
      }
    }

    var EffectType;

    (function (EffectType) {
      EffectType["TODO"] = "TODO";
      EffectType["lump"] = "lump";
      EffectType["add"] = "add";
      EffectType["mult"] = "mult";
      EffectType["exp"] = "exp";
    })(EffectType || (EffectType = {})); // interface PathMod {
    //   infection: SkillMod;
    //   wealth: SkillMod;
    //   stealth: SkillMod;
    // }


    var SkillTreeComponent = /*#__PURE__*/function () {
      //
      function SkillTreeComponent(modalService, data_store) {
        var _this4 = this;

        _classCallCheck(this, SkillTreeComponent);

        this.modalService = modalService;
        this.data_store = data_store;
        this.canPurchase = false; // if user's # skill points >= skill cost, canPurchase = true

        this.showTree = false; // toggle displaying the skill tree
        // pathMod: PathMod = {
        // };
        // modifiers for each of the three skill trees (Infection, Wealth, and Stealth)

        this.infectionMod = {
          addMod: 0,
          multMod: 1,
          expMod: 1
        };
        this.wealthMod = {
          addMod: 0,
          multMod: 1,
          expMod: 1
        };
        this.stealthMod = {
          addMod: 0,
          multMod: 1,
          expMod: 1
        };
        this.pathMods = [this.infectionMod, this.wealthMod, this.stealthMod]; // a Record of all skills in the skill tree

        this.allSkills = {
          'infection-1': {
            name: 'Bit Accumulator',
            desc: '+50 bits per second',
            cost: 1,
            purchased: false,
            effect: EffectType.add,
            modifier: 50,
            tree: 0
          },
          'infection-2': {
            name: 'Bit Bundle',
            desc: '+20,000 bits (one-time)',
            cost: 1,
            purchased: false,
            effect: EffectType.lump,
            modifier: 20000,
            tree: 0
          },
          'infection-3': {
            name: 'Bit Miner',
            desc: '+150 bits per second',
            cost: 2,
            purchased: false,
            effect: EffectType.add,
            modifier: 150,
            tree: 0
          },
          'infection-4': {
            name: 'Bit Bonanza',
            desc: '+75,000 bits (one-time)',
            cost: 2,
            purchased: false,
            effect: EffectType.lump,
            modifier: 75000,
            tree: 0
          },
          'infection-5': {
            name: 'Bit Frenzy',
            desc: '+100% bit gain',
            cost: 3,
            purchased: false,
            effect: EffectType.mult,
            modifier: 1,
            tree: 0
          },
          'infection-6': {
            name: 'Bit Emperor',
            desc: '+5% of your total bits per second',
            cost: 5,
            purchased: false,
            effect: EffectType.exp,
            modifier: 0.05,
            tree: 0
          },
          'wealth-1': {
            name: 'Coin Collector',
            desc: '+$5 per sec',
            cost: 1,
            purchased: false,
            effect: EffectType.add,
            modifier: 5,
            tree: 1
          },
          'wealth-2': {
            name: 'Piggy Bank',
            desc: '+1% of your total dollars per second',
            cost: 1,
            purchased: false,
            effect: EffectType.exp,
            modifier: 0.01,
            tree: 1
          },
          'wealth-3': {
            name: 'Personal Loan',
            desc: '+$18,000 (one-time)',
            cost: 2,
            purchased: false,
            effect: EffectType.lump,
            modifier: 18000,
            tree: 1
          },
          'wealth-4': {
            name: 'Pure Profit',
            desc: '+100% dollar gain',
            cost: 2,
            purchased: false,
            effect: EffectType.mult,
            modifier: 1,
            tree: 1
          },
          'wealth-5': {
            name: 'Benjamins',
            desc: '+$100 per second',
            cost: 3,
            purchased: false,
            effect: EffectType.add,
            modifier: 100,
            tree: 1
          },
          'wealth-6': {
            name: 'Venture Capitalist',
            desc: '+8% of your total dollars per second',
            cost: 5,
            purchased: false,
            effect: EffectType.exp,
            modifier: 0.08,
            tree: 1
          },
          'stealth-1': {
            name: 'Cloak',
            desc: '-25% detection',
            cost: 1,
            purchased: false,
            effect: EffectType.mult,
            modifier: 0.25,
            tree: 2
          },
          'stealth-2': {
            name: 'Shroud',
            desc: '+6 hours to detection buffer (permanently)',
            cost: 1,
            purchased: false,
            effect: EffectType.add,
            modifier: 0,
            tree: 2
          },
          'stealth-3': {
            name: 'Disappear',
            desc: 'Reset detection level to 0 (one-time)',
            cost: 2,
            purchased: false,
            effect: EffectType.lump,
            modifier: -9999,
            tree: 2
          },
          'stealth-4': {
            name: 'Cover Your Tracks',
            desc: '+12 hours to detection buffer (permanently)',
            cost: 2,
            purchased: false,
            effect: EffectType.add,
            modifier: 12,
            tree: 2
          },
          'stealth-5': {
            name: 'Watchdog',
            desc: '+24 hours to detection buffer (permanently)',
            cost: 3,
            purchased: false,
            effect: EffectType.add,
            modifier: 24,
            tree: 2
          },
          'stealth-6': {
            name: 'Ghost',
            desc: '-100% detection',
            cost: 5,
            purchased: false,
            effect: EffectType.mult,
            modifier: 1,
            tree: 2
          }
        };
        this.tick_time = 1000;
        this.points_tick_time = 30000;

        if (data_store.fetch_skills() != '') {
          this.allSkills = JSON.parse(data_store.fetch_skills());
        }

        if (data_store.fetch_mods() != '') {
          this.pathMods = JSON.parse(data_store.fetch_mods());
        }

        this.skillPoints = data_store.fetch_points();
        this.event_timer = setInterval(function () {
          var bits = (data_store.fetch_bits() + 1 + _this4.pathMods[0].addMod) * _this4.pathMods[0].multMod;

          bits *= _this4.pathMods[0].expMod;
          data_store.store_bits(bits);

          var money = (data_store.fetch_money() + 1 + _this4.pathMods[1].addMod) * _this4.pathMods[1].multMod;

          money *= _this4.pathMods[1].expMod;
          data_store.store_money(money);

          var detection = (data_store.fetch_detection() + 1 + _this4.pathMods[2].addMod) * _this4.pathMods[2].multMod;

          detection *= _this4.pathMods[2].expMod;
          data_store.store_detection(detection); //data_store.store_attack_percentage(data_store.fetch_percentage();
        }, this.tick_time);
        this.points_event_timer = setInterval(function () {
          data_store.store_points(data_store.fetch_points() + 1);
        }, this.points_tick_time);
      }

      _createClass(SkillTreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setTooltips();
          this.setSkillColors();
        }
      }, {
        key: "setSkillColors",
        value: function setSkillColors() {
          for (var key in this.allSkills) {
            var skill = this.allSkills[key];
            var div = document.getElementById(key);

            if (skill.purchased) {
              if (skill.tree === 0) {
                div.style.backgroundColor = 'maroon';
              } else if (skill.tree === 1) {
                div.style.backgroundColor = 'green';
              } else {
                div.style.backgroundColor = 'blue';
              }
            }
          }
        } // set each skill'1 tooltip to include name and description

      }, {
        key: "setTooltips",
        value: function setTooltips() {
          var skills = document.getElementsByClassName('skill');

          for (var i = 0; i < skills.length; i++) {
            skills[i].setAttribute('title', this.allSkills[skills[i].id].name + ": " + this.allSkills[skills[i].id].desc);
          }
        } // set user's modifiers based upon skills known

      }, {
        key: "setModifiers",
        value: function setModifiers(skill) {
          if (skill.effect === 'add') {
            this.pathMods[skill.tree].addMod += skill.modifier;
          } else if (skill.effect === 'mult') {
            this.pathMods[skill.tree].multMod += skill.modifier;
          } else {
            this.pathMods[skill.tree].expMod += skill.modifier;
          }

          this.data_store.store_mods(JSON.stringify(this.pathMods));
        } // payout lump sum skill effect (such as 'gain 20,000 bits (one-time)')

      }, {
        key: "setLumpSum",
        value: function setLumpSum(skill) {
          if (skill.tree === 0) {
            // infection
            this.data_store.store_bits(this.data_store.fetch_bits() + skill.modifier);
          } else if (skill.tree === 1) {
            // wealth
            this.data_store.store_money(this.data_store.fetch_money() + skill.modifier);
          } else {
            // stealth
            this.data_store.store_detection(this.data_store.fetch_detection() + skill.modifier);
          }
        } // From: https://www.encodedna.com/angular/how-to-show-hide-or-toggle-elements-in-angular-4.htm

      }, {
        key: "toggleDisplay",
        value: function toggleDisplay() {
          this.showTree = !this.showTree;

          if (this.showTree) {
            document.querySelector('#skill-tree-btn').innerHTML = 'Hide';
            document.getElementById('skill-points').innerText = this.skillPoints.toString();
          } else {
            document.querySelector('#skill-tree-btn').innerHTML = 'Skill Tree';
          }
        }
      }, {
        key: "purchaseSkill",
        value: function purchaseSkill() {
          this.allSkills[this.skillId].purchased = true;
          this.skillPoints -= this.allSkills[this.skillId].cost;
          this.data_store.store_points(this.data_store.fetch_points());
          document.getElementById('footer-skill-points').innerText = 'Skill points available: ' + this.skillPoints.toString();
          document.getElementById('skill-points').innerText = this.skillPoints.toString();
          var currSkill = document.getElementById(this.skillId);

          if (this.skillId.search('infect') > -1) {
            currSkill.style.backgroundColor = 'maroon';
          } else if (this.skillId.search('wealth') > -1) {
            currSkill.style.backgroundColor = 'green';
          } else {
            currSkill.style.backgroundColor = 'blue';
          }

          this.modalService.dismissAll();

          if (this.allSkills[this.skillId].effect != 'lump') {
            this.setModifiers(this.allSkills[this.skillId]);
          } else {
            this.setLumpSum(this.allSkills[this.skillId]);
          }

          this.data_store.store_skills(JSON.stringify(this.allSkills));
        }
      }, {
        key: "resetMods",
        value: function resetMods() {
          this.pathMods[0].addMod = 0;
          this.pathMods[0].multMod = 1;
          this.pathMods[0].expMod = 1;
          this.pathMods[1].addMod = 0;
          this.pathMods[1].multMod = 1;
          this.pathMods[1].addMod = 1;
          this.pathMods[2].addMod = 0;
          this.pathMods[2].multMod = 1;
          this.pathMods[2].expMod = 1;
          this.data_store.store_mods(JSON.stringify(this.pathMods));
        }
      }, {
        key: "resetSkills",
        value: function resetSkills() {
          var refundedPoints = 0;

          for (var key in this.allSkills) {
            var currSkill = this.allSkills[key];

            if (currSkill.purchased === true) {
              currSkill.purchased = false;
              refundedPoints += currSkill.cost;
              document.getElementById(key).style.backgroundColor = 'transparent';
            }
          }

          this.skillPoints += refundedPoints;
          this.data_store.store_points(this.skillPoints);
          document.getElementById('skill-points').innerText = this.skillPoints.toString();
          this.resetMods();
          this.data_store.store_skills(JSON.stringify(this.allSkills));
        } // ng-bootstrap modal from https://ng-bootstrap.github.io/#/components/modal/examples

      }, {
        key: "open",
        value: function open(content, event) {
          var selectedSkill = this.allSkills[event.target.id];
          this.skillId = event.target.id;
          this.modalService.open(content, {
            ariaLabelledBy: 'skill-name'
          });
          document.getElementById('footer-skill-points').innerText = 'Skill points available: ' + this.skillPoints.toString();
          document.getElementById('skill-name').innerText = selectedSkill.name;
          document.getElementById('skill-desc').innerText = selectedSkill.desc;

          if (selectedSkill.cost === 1) {
            document.getElementById('skill-cost').innerText = selectedSkill.cost.toString() + ' skill point';
          } else {
            document.getElementById('skill-cost').innerText = selectedSkill.cost.toString() + ' skill points';
          }

          if (this.skillPoints >= selectedSkill.cost && !selectedSkill.purchased) {
            this.canPurchase = true;
            document.getElementById('footer-skill-points').style.color = 'black';
          } else {
            this.canPurchase = false;
            document.getElementById('footer-skill-points').style.color = 'red';
          }
        }
      }]);

      return SkillTreeComponent;
    }();

    SkillTreeComponent.ɵfac = function SkillTreeComponent_Factory(t) {
      return new (t || SkillTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_2__["DataStoreService"]));
    };

    SkillTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillTreeComponent,
      selectors: [["skill-tree"]],
      decls: 39,
      vars: 1,
      consts: [["type", "button", "id", "skill-tree-btn", 1, "btn", "btn-primary", 3, "click"], ["id", "skill-tree-grid", 3, "hidden"], [1, "skill-points", 2, "color", "black"], ["id", "skill-points"], ["id", "resetBtn", 1, "btn", "btn-secondary", "btn-lg", "float-right", 3, "click"], ["id", "path-infection", 1, "grid-container"], [1, "grid-item", "path-title"], ["id", "infection-1", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-1", 3, "click"], ["id", "infection-2", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-2", 3, "click"], ["id", "infection-3", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-3", 3, "click"], ["id", "infection-4", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-4", 3, "click"], ["id", "infection-5", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-5", 3, "click"], ["id", "infection-6", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-6", 3, "click"], ["id", "path-wealth", 1, "grid-container"], ["id", "wealth-1", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-1", 3, "click"], ["id", "wealth-2", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-2", 3, "click"], ["id", "wealth-3", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-3", 3, "click"], ["id", "wealth-4", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-4", 3, "click"], ["id", "wealth-5", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-5", 3, "click"], ["id", "wealth-6", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-6", 3, "click"], ["id", "path-stealth", 1, "grid-container"], ["id", "stealth-1", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-1", 3, "click"], ["id", "stealth-2", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-2", 3, "click"], ["id", "stealth-3", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-3", 3, "click"], ["id", "stealth-4", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-4", 3, "click"], ["id", "stealth-5", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-5", 3, "click"], ["id", "stealth-6", "data-toggle", "tooltip", "title", "", 1, "grid-item", "skill", "skill-6", 3, "click"], ["content", ""], [1, "modal-header"], ["id", "skill-name", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "skill-desc"], ["id", "skill-cost"], [1, "modal-footer"], ["id", "footer-skill-points", 1, "mr-auto"], ["id", "cancelBtn", 1, "btn", "btn-outline-danger", 3, "click"], ["disabled", "", "class", "btn btn-outline-secondary", "id", "purchaseBtn", "tooltip", "Insufficient skill points", 4, "ngIf"], ["class", "btn btn-outline-primary", "id", "purchaseBtn", 3, "click", 4, "ngIf"], ["disabled", "", "id", "purchaseBtn", "tooltip", "Insufficient skill points", 1, "btn", "btn-outline-secondary"], ["id", "purchaseBtn", 1, "btn", "btn-outline-primary", 3, "click"]],
      template: function SkillTreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_button_click_0_listener() {
            return ctx.toggleDisplay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Skill Tree\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Skill points available: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_button_click_6_listener() {
            return ctx.resetSkills();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Infection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Wealth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Stealth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillTreeComponent_Template_div_click_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.open(_r0, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SkillTreeComponent_ng_template_37_Template, 14, 2, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showTree);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".button-block[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n}\n\n#skill-tree-btn[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  margin: 25px 10px 25px 10px;\n  width: 200px;\n}\n\n#path-infection[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: maroon;\n}\n\n#path-wealth[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: green;\n}\n\n#path-stealth[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n#skill-tree-grid[_ngcontent-%COMP%] {\n  border: 1px solid;\n  color: white;\n  width: 610px;\n  margin: 0 auto;\n  background-color: white;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: inline-grid;\n  grid-template-columns: repeat(3, 60px);\n  grid-template-rows: repeat(5, 60px);\n  grid-template-areas: \"skill-1 . skill-2\" \"skill-3 . skill-4\" \". skill-5 .\" \". skill-6 .\" \"path-title path-title path-title\";\n  margin: 10px 10px 10px 10px;\n  background-color: white;\n}\n\n.grid-item[_ngcontent-%COMP%] {\n  margin: 2px 2px 2px 2px;\n  border: 3px solid;\n  border-radius: 10%;\n  padding: 5px;\n  font-size: 30px;\n  text-align: center;\n}\n\n.grid-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 0 0 0 6px;\n}\n\n.grid-item[_ngcontent-%COMP%]:active {\n  color: green;\n}\n\n.path-title[_ngcontent-%COMP%] {\n  grid-area: path-title;\n  border: none;\n  text-align: center;\n  margin-top: 10px;\n  font-size: 40px;\n}\n\n.path-title[_ngcontent-%COMP%]:hover {\n  cursor: auto;\n  box-shadow: none;\n}\n\n.skill-points[_ngcontent-%COMP%] {\n  margin: 10px 10px 10px 10px;\n  font-size: 30px;\n}\n\n#resetBtn[_ngcontent-%COMP%] {\n  align-self: right;\n}\n\n.skill-1[_ngcontent-%COMP%] {\n  grid-area: skill-1;\n}\n\n.skill-2[_ngcontent-%COMP%] {\n  grid-area: skill-2;\n}\n\n.skill-3[_ngcontent-%COMP%] {\n  grid-area: skill-3;\n}\n\n.skill-4[_ngcontent-%COMP%] {\n  grid-area: skill-4;\n}\n\n.skill-5[_ngcontent-%COMP%] {\n  grid-area: skill-5;\n}\n\n.skill-6[_ngcontent-%COMP%] {\n  grid-area: skill-6;\n}\n\n.skill-7[_ngcontent-%COMP%] {\n  grid-area: skill-7;\n}\n\n.skill-8[_ngcontent-%COMP%] {\n  grid-area: skill-8;\n}\n\n.skill-9[_ngcontent-%COMP%] {\n  grid-area: skill-9;\n}\n\n.skill-10[_ngcontent-%COMP%] {\n  grid-area: skill-10;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2h0dHlzL2h0dHlzL3NyYy9hcHAvY29tcG9uZW50cy9za2lsbC10cmVlL3NraWxsLXRyZWUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGwtdHJlZS9za2lsbC10cmVlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREZBO0VBQ0UsV0FBQTtBQ0tGOztBREhBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ01GOztBREpBO0VBQ0Usb0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkhBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDT0Y7O0FETEE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUUY7O0FETkE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUNTRjs7QURQQTtFQUNFLFlBQUE7QUNVRjs7QURSQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDV0Y7O0FEVEE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNZRjs7QURWQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBQ2FGOztBRFhBO0VBQ0UsaUJBQUE7QUNjRjs7QURaQTtFQUNFLGtCQUFBO0FDZUY7O0FEYkE7RUFDRSxrQkFBQTtBQ2dCRjs7QURkQTtFQUNFLGtCQUFBO0FDaUJGOztBRGZBO0VBQ0Usa0JBQUE7QUNrQkY7O0FEaEJBO0VBQ0Usa0JBQUE7QUNtQkY7O0FEakJBO0VBQ0Usa0JBQUE7QUNvQkY7O0FEbEJBO0VBQ0Usa0JBQUE7QUNxQkY7O0FEbkJBO0VBQ0Usa0JBQUE7QUNzQkY7O0FEcEJBO0VBQ0Usa0JBQUE7QUN1QkY7O0FEckJBO0VBQ0UsbUJBQUE7QUN3QkY7O0FEdEJBO0VBQ0UsZUFBQTtBQ3lCRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGwtdHJlZS9za2lsbC10cmVlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1ibG9ja1xuICBtYXJnaW46IDAgYXV0b1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuI3NraWxsLXRyZWUtYnRuXG4gIHBhZGRpbmc6IDEwcHggMTBweFxuICBtYXJnaW46IDI1cHggMTBweCAyNXB4IDEwcHhcbiAgd2lkdGg6IDIwMHB4XG5cbiNwYXRoLWluZmVjdGlvbiA+ICpcbiAgY29sb3I6IG1hcm9vblxuXG4jcGF0aC13ZWFsdGggPiAqXG4gIGNvbG9yOiBncmVlblxuXG4jcGF0aC1zdGVhbHRoID4gKlxuICBjb2xvcjogYmx1ZVxuXG4jc2tpbGwtdHJlZS1ncmlkXG4gIGJvcmRlcjogMXB4IHNvbGlkXG4gIGNvbG9yOiB3aGl0ZVxuICB3aWR0aDogNjEwcHhcbiAgbWFyZ2luOiAwIGF1dG9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcblxuLmdyaWQtY29udGFpbmVyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDYwcHgpXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDYwcHgpXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2tpbGwtMSAuIHNraWxsLTJcIiBcInNraWxsLTMgLiBza2lsbC00XCIgXCIuIHNraWxsLTUgLlwiIFwiLiBza2lsbC02IC5cIiBcInBhdGgtdGl0bGUgcGF0aC10aXRsZSBwYXRoLXRpdGxlXCJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG5cbi5ncmlkLWl0ZW1cbiAgbWFyZ2luOiAycHggMnB4IDJweCAycHhcbiAgYm9yZGVyOiAzcHggc29saWRcbiAgYm9yZGVyLXJhZGl1czogMTAlXG4gIHBhZGRpbmc6IDVweFxuICBmb250LXNpemU6IDMwcHhcbiAgdGV4dC1hbGlnbjogY2VudGVyXG5cbi5ncmlkLWl0ZW06aG92ZXJcbiAgY3Vyc29yOiBwb2ludGVyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDZweFxuXG4uZ3JpZC1pdGVtOmFjdGl2ZVxuICBjb2xvcjogZ3JlZW5cblxuLnBhdGgtdGl0bGVcbiAgZ3JpZC1hcmVhOiBwYXRoLXRpdGxlXG4gIGJvcmRlcjogbm9uZVxuICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgbWFyZ2luLXRvcDogMTBweFxuICBmb250LXNpemU6IDQwcHhcblxuLnBhdGgtdGl0bGU6aG92ZXJcbiAgY3Vyc29yOiBhdXRvXG4gIGJveC1zaGFkb3c6IG5vbmVcblxuLnNraWxsLXBvaW50c1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHhcbiAgZm9udC1zaXplOiAzMHB4XG5cbiNyZXNldEJ0blxuICBhbGlnbi1zZWxmOiByaWdodFxuXG4uc2tpbGwtMVxuICBncmlkLWFyZWE6IHNraWxsLTFcblxuLnNraWxsLTJcbiAgZ3JpZC1hcmVhOiBza2lsbC0yXG5cbi5za2lsbC0zXG4gIGdyaWQtYXJlYTogc2tpbGwtM1xuXG4uc2tpbGwtNFxuICBncmlkLWFyZWE6IHNraWxsLTRcblxuLnNraWxsLTVcbiAgZ3JpZC1hcmVhOiBza2lsbC01XG5cbi5za2lsbC02XG4gIGdyaWQtYXJlYTogc2tpbGwtNlxuXG4uc2tpbGwtN1xuICBncmlkLWFyZWE6IHNraWxsLTdcblxuLnNraWxsLThcbiAgZ3JpZC1hcmVhOiBza2lsbC04XG5cbi5za2lsbC05XG4gIGdyaWQtYXJlYTogc2tpbGwtOVxuXG4uc2tpbGwtMTBcbiAgZ3JpZC1hcmVhOiBza2lsbC0xMFxuXG4ubW9kYWwtYm9keVxuICBmb250LXNpemU6IDIwcHhcbiIsIi5idXR0b24tYmxvY2sge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jc2tpbGwtdHJlZS1idG4ge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIG1hcmdpbjogMjVweCAxMHB4IDI1cHggMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4jcGF0aC1pbmZlY3Rpb24gPiAqIHtcbiAgY29sb3I6IG1hcm9vbjtcbn1cblxuI3BhdGgtd2VhbHRoID4gKiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuI3BhdGgtc3RlYWx0aCA+ICoge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuI3NraWxsLXRyZWUtZ3JpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA2MTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNjBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDYwcHgpO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInNraWxsLTEgLiBza2lsbC0yXCIgXCJza2lsbC0zIC4gc2tpbGwtNFwiIFwiLiBza2lsbC01IC5cIiBcIi4gc2tpbGwtNiAuXCIgXCJwYXRoLXRpdGxlIHBhdGgtdGl0bGUgcGF0aC10aXRsZVwiO1xuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZ3JpZC1pdGVtIHtcbiAgbWFyZ2luOiAycHggMnB4IDJweCAycHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmlkLWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDZweDtcbn1cblxuLmdyaWQtaXRlbTphY3RpdmUge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5wYXRoLXRpdGxlIHtcbiAgZ3JpZC1hcmVhOiBwYXRoLXRpdGxlO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4ucGF0aC10aXRsZTpob3ZlciB7XG4gIGN1cnNvcjogYXV0bztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNraWxsLXBvaW50cyB7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4jcmVzZXRCdG4ge1xuICBhbGlnbi1zZWxmOiByaWdodDtcbn1cblxuLnNraWxsLTEge1xuICBncmlkLWFyZWE6IHNraWxsLTE7XG59XG5cbi5za2lsbC0yIHtcbiAgZ3JpZC1hcmVhOiBza2lsbC0yO1xufVxuXG4uc2tpbGwtMyB7XG4gIGdyaWQtYXJlYTogc2tpbGwtMztcbn1cblxuLnNraWxsLTQge1xuICBncmlkLWFyZWE6IHNraWxsLTQ7XG59XG5cbi5za2lsbC01IHtcbiAgZ3JpZC1hcmVhOiBza2lsbC01O1xufVxuXG4uc2tpbGwtNiB7XG4gIGdyaWQtYXJlYTogc2tpbGwtNjtcbn1cblxuLnNraWxsLTcge1xuICBncmlkLWFyZWE6IHNraWxsLTc7XG59XG5cbi5za2lsbC04IHtcbiAgZ3JpZC1hcmVhOiBza2lsbC04O1xufVxuXG4uc2tpbGwtOSB7XG4gIGdyaWQtYXJlYTogc2tpbGwtOTtcbn1cblxuLnNraWxsLTEwIHtcbiAgZ3JpZC1hcmVhOiBza2lsbC0xMDtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'skill-tree',
          templateUrl: './skill-tree.component.html',
          styleUrls: ['./skill-tree.component.sass']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }, {
          type: src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_2__["DataStoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data-store.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/data-store.service.ts ***!
    \************************************************/

  /*! exports provided: DataStoreService */

  /***/
  function srcAppServicesDataStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataStoreService", function () {
      return DataStoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var DataStoreService = /*#__PURE__*/function () {
      function DataStoreService(cookie_service) {
        _classCallCheck(this, DataStoreService);

        this.cookie_service = cookie_service; // this.cookie_service.set('global_bits', '0', 99999);
        // this.cookie_service.set('global_money', '0', 99999);
        // this.cookie_service.set('global_detection', '0', 99999);
        // this.cookie_service.set('global_detection_max', '86400', 99999);
        // this.cookie_service.set('global_skills', '', 99999);
        // this.cookie_service.set('global_mods', '', 99999);
        // this.cookie_service.set('attack_percentage', '0', 99999);
      }

      _createClass(DataStoreService, [{
        key: "store_bits",
        value: function store_bits(bits) {
          this.cookie_service.set('global_bits', bits.toString(), 99999);
        }
      }, {
        key: "fetch_bits",
        value: function fetch_bits() {
          var global_bits = this.cookie_service.get('global_bits');

          if (global_bits === '') {
            return 0;
          } else {
            return parseInt(global_bits);
          }
        }
      }, {
        key: "store_attack_percentage",
        value: function store_attack_percentage(percentage) {
          this.cookie_service.set('attack_percentage', percentage.toString(), 99999);
        }
      }, {
        key: "store_money",
        value: function store_money(money) {
          this.cookie_service.set('global_money', money.toString(), 99999);
        }
      }, {
        key: "fetch_money",
        value: function fetch_money() {
          var global_money = this.cookie_service.get('global_money');

          if (global_money === '') {
            return 0;
          } else {
            return parseInt(global_money);
          }
        }
      }, {
        key: "store_detection",
        value: function store_detection(detection) {
          this.cookie_service.set('global_detection', detection.toString(), 99999);
        }
      }, {
        key: "fetch_detection",
        value: function fetch_detection() {
          var global_detection = this.cookie_service.get('global_detection');

          if (global_detection === '') {
            return 0;
          } else {
            return parseInt(global_detection);
          }
        }
      }, {
        key: "store_detection_max",
        value: function store_detection_max(detection_max) {
          this.cookie_service.set('global_detection_max', detection_max.toString(), 99999);
        }
      }, {
        key: "fetch_detection_max",
        value: function fetch_detection_max() {
          var global_detection_max = this.cookie_service.get('global_detection_max');

          if (global_detection_max === '') {
            return 0;
          } else {
            return parseInt(global_detection_max);
          }
        }
      }, {
        key: "store_skills",
        value: function store_skills(skillsJSON) {
          this.cookie_service.set('global_skills', skillsJSON, 99999);
        }
      }, {
        key: "fetch_skills",
        value: function fetch_skills() {
          return this.cookie_service.get('global_skills');
        }
      }, {
        key: "store_mods",
        value: function store_mods(modsJSON) {
          this.cookie_service.set('global_mods', modsJSON, 99999);
        }
      }, {
        key: "fetch_mods",
        value: function fetch_mods() {
          return this.cookie_service.get('global_mods');
        }
      }, {
        key: "fetch_percentage",
        value: function fetch_percentage() {
          var global_percengae = this.cookie_service.get('attack_percentage');

          if (global_percengae === '') {
            return 0;
          } else {
            return parseInt(global_percengae);
          }
        }
      }, {
        key: "store_points",
        value: function store_points(points) {
          this.cookie_service.set('global_points', points.toString());
        }
      }, {
        key: "fetch_points",
        value: function fetch_points() {
          var global_points = this.cookie_service.get('global_points');

          if (global_points === '') {
            return 2;
          } else {
            return parseInt(global_points);
          }
        }
      }]);

      return DataStoreService;
    }();

    DataStoreService.ɵfac = function DataStoreService_Factory(t) {
      return new (t || DataStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]));
    };

    DataStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataStoreService,
      factory: DataStoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/attacks.ts":
  /*!*******************************!*\
    !*** ./src/assets/attacks.ts ***!
    \*******************************/

  /*! exports provided: attacks */

  /***/
  function srcAssetsAttacksTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "attacks", function () {
      return attacks;
    });

    var attacks = {
      "Artemis attack": "1",
      "BAT.Drop attack": "2",
      "Coll.CozyBear attack": "3",
      "Dyre attack": "4",
      "EquationGroup.EquationLaser": "5",
      "Friday_the_13th.408": "6",
      "Green_Caterpillar.1575.A": "7",
      "Test_attack_1_min": "8",
      "Test_attack_3_min": "9"
    };
    /***/
  },

  /***/
  "./src/assets/tooltips.ts":
  /*!********************************!*\
    !*** ./src/assets/tooltips.ts ***!
    \********************************/

  /*! exports provided: tooltips */

  /***/
  function srcAssetsTooltipsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tooltips", function () {
      return tooltips;
    });

    var tooltips = ["Over 70% of US Americans are worried about having their personal data stolen from their computers and online networks.", "January 2019 saw the release of nearly two billion hacked records 1,769,185,063 to be precise.", "As much as 38% of malware is now being disguised as a Word document.", "In 2018, the cost of the average data breach increased by 6.4% to $3.86 million dollars per breach.", "In 2020, it is estimated that organizations and individuals collectively will pay $11.5 billion, either as a cost of remediating ransomware damage or simply as a cost or paying a ransom.", "Since 2015, the ecenomic toll of cybercrime has grown fourfold to $2 trillion USD.", "Cryptojacking malware steals your CPU cycles to mine cryptocurrency, and it's some of the fastest growing malware out there, with 8 million attempts per month at the beginning of 2018.", "About 24,000 malicious apps are blocked every day - a volume that virutally guarantees at least a few malicious apps are getting through.", "A survey of over 4,000 organizations shows that over 70% are unprepared to face down even the most basic attempt at a security breach."];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/httys/httys/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map