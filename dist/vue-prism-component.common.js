'use strict';

var vue = require('vue');
var Prism = require('prismjs');

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
      if (process.env.NODE_ENV === 'development' && !prismLanguage) {
        throw new Error("Prism component for language \"".concat(language, "\" was not found, did you forget to register it? See all available ones: https://cdn.jsdelivr.net/npm/prismjs/components/"));
      }
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

module.exports = index;
