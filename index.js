(function() {
  "use strict";
  var render = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("k-field", { staticClass: "k-form-field", attrs: { "help": _vm.help, "label": _vm.label, "disabled": _vm.disabled, "required": _vm.required } }, [_c("div", { staticClass: "k-grid-field" }, [_c("div", { staticClass: "k-grid-container" }, _vm._l(_vm.options.columns, function(column, index) {
      return _c("button", { key: column, staticClass: "k-grid-item", class: {
        "k-grid-active": _vm.in_range(column)
      }, attrs: { "type": "button" }, on: { "click": function($event) {
        return _vm.in_selection(column);
      } } }, [_vm._v(" " + _vm._s(column) + " ")]);
    }), 0)])]);
  };
  var staticRenderFns = [];
  render._withStripped = true;
  var index_vue_vue_type_style_index_0_scoped_true_lang = "";
  function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render2) {
      options.render = render2;
      options.staticRenderFns = staticRenderFns2;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles) {
          injectStyles.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles) {
      hook = shadowMode ? function() {
        injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
      } : injectStyles;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const __vue2_script = {
    name: "k-grid-field",
    props: {
      help: {
        type: String,
        required: false
      },
      value: {
        type: [String, Number],
        required: false
      },
      label: {
        type: String,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      required: {
        type: Boolean,
        required: false
      },
      options: {
        type: Object,
        required: false,
        default: () => ({
          limit: 0,
          columns: 12
        })
      },
      offset: {
        type: Object,
        required: false,
        default: () => ({
          start: 0,
          end: 0
        })
      },
      prefix: {
        type: Object,
        required: false,
        default: () => ({
          start: "",
          end: "",
          span: ""
        })
      },
      suffix: {
        type: Object,
        required: false,
        default: () => ({
          start: "",
          end: "",
          span: ""
        })
      }
    },
    data() {
      return {
        grid: {
          span: 0,
          start: null,
          end: null
        }
      };
    },
    watch: {
      grid: {
        handler() {
          this.$emit("input", {
            class: {
              start: this.prefix.start + (this.grid.start + this.offset.start) + this.suffix.start,
              end: this.prefix.end + (this.grid.end + this.offset.end) + this.suffix.end,
              span: this.prefix.span + this.grid.span + this.suffix.span
            },
            value: {
              start: this.grid.start + this.offset.start,
              end: this.grid.end + this.offset.end,
              span: this.grid.span
            }
          });
        },
        deep: true
      }
    },
    methods: {
      in_selection(data) {
        if (data > this.options.columns / 2)
          data = this.options.columns - data + 1;
        if (!this.in_limit(data))
          return;
        this.grid.start = data;
        this.grid.end = this.options.columns - (data - 1);
        this.grid.span = this.options.columns - (this.grid.start - 1) * 2;
      },
      in_limit(data) {
        return data <= this.options.limit;
      },
      in_range(data) {
        return (data - this.grid.start) * (data - this.grid.end) <= 0;
      }
    },
    mounted() {
      if (Object.keys(this.value).length > 0) {
        this.grid = {
          span: this.value.value.span,
          start: this.value.value.start - this.offset.start,
          end: this.value.value.end - this.offset.end
        };
      }
    }
  };
  const __cssModules = {};
  var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, "2964abc9", null, null);
  function __vue2_injectStyles(context) {
    for (let o in __cssModules) {
      this[o] = __cssModules[o];
    }
  }
  __component__.options.__file = "src/index.vue";
  var field = /* @__PURE__ */ function() {
    return __component__.exports;
  }();
  panel.plugin("beluga/belugakit", {
    fields: {
      grid: field
    }
  });
})();
