(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue'), require('prismjs')) :
  typeof define === 'function' && define.amd ? define(['vue', 'prismjs'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.PrismComponent = factory(global.vue, global.Prism));
})(this, (function (vue, Prism) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Prism__default = /*#__PURE__*/_interopDefaultLegacy(Prism);

  var index = vue.defineComponent({
    props: {
      code: {
        type: String
      },
      inline: {
        type: Boolean,
        "default": false
      },
      language: {
        type: String,
        "default": 'markup'
      }
    },
    setup: function setup(props, _ref) {
      var slots = _ref.slots,
        attrs = _ref.attrs;
      return function () {
        var defaultSlot = slots && slots["default"] && slots["default"]() || [];
        var code = props.code || (defaultSlot.length ? defaultSlot[0].children : '') || '';
        var inline = props.inline;
        var language = props.language;
        var prismLanguage = Prism__default["default"].languages[language];
        var className = "language-".concat(language);
        if (inline) {
          return vue.h('code', {
            "class": [className],
            innerHTML: Prism__default["default"].highlight(code, prismLanguage)
          });
        }
        return vue.h('pre', Object.assign({}, attrs, {
          "class": [attrs["class"], className]
        }), [vue.h('code', Object.assign({}, attrs, {
          "class": [attrs["class"], className],
          innerHTML: Prism__default["default"].highlight(code, prismLanguage)
        }))]);
      };
    }
  });

  return index;

}));
