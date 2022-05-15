'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$3 = {
  name: "FieldElt",
  props: {
    model: {
      prop: "value",
      event: "update"
    },
    list: {
      type: Array,
      default: null
    },
    id: {
      type: String,
      required: true
    },
    info: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    cols: {
      type: Number,
      default: 20
    },
    max: {
      type: Number,
      default: 50
    },
    min: {
      type: Number,
      default: 2
    },
    rows: {
      type: Number,
      default: 5
    },
    step: {
      type: Number,
      default: 1
    }
  },
  methods: {
    hasSlot: function hasSlot(name) {
      return this.$slots[name] !== undefined;
    },
    onInput: function onInput(event) {
      this.$emit("update:value", event.target.value);
    },
    getFieldType: function getFieldType() {
      var fieldType = "";

      switch (this.type) {
        case "date":
        case "number":
        case "range":
        case "time":
          fieldType = "number";
          break;

        case "check":
        case "checkbox":
        case "color":
        case "radio":
          fieldType = "special";
          break;

        case "list":
        case "option":
        case "select":
          fieldType = "list";
          break;

        case "area":
        case "textarea":
          fieldType = "area";
          break;

        default:
          fieldType = "text";
      }

      return fieldType;
    }
  }
};var _hoisted_1$3 = ["title"];
var _hoisted_2$2 = {
  key: 0
};
var _hoisted_3$2 = ["id", "max", "min", "name", "step", "type", "value"];
var _hoisted_4$1 = ["id", "name", "type", "value"];
var _hoisted_5 = ["id", "name", "placeholder"];
var _hoisted_6 = ["value"];
var _hoisted_7 = {
  key: 1
};
var _hoisted_8 = ["value"];
var _hoisted_9 = ["id", "name", "cols", "maxlength", "minlength", "placeholder", "rows", "value"];
var _hoisted_10 = ["id", "maxlength", "minlength", "name", "placeholder", "type", "value"];
var _hoisted_11 = ["for"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("fieldset", {
    title: $props.info
  }, [$options.hasSlot('legend') ? (vue.openBlock(), vue.createElementBlock("legend", _hoisted_2$2, [vue.renderSlot(_ctx.$slots, "legend")])) : vue.createCommentVNode("", true), $options.getFieldType() === 'number' ? (vue.openBlock(), vue.createElementBlock("input", {
    key: 1,
    id: $props.id,
    max: $props.max,
    min: $props.min,
    name: $props.id,
    step: $props.step,
    type: $props.type,
    value: $props.value,
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, null, 40, _hoisted_3$2)) : $options.getFieldType() === 'special' ? (vue.openBlock(), vue.createElementBlock("input", {
    key: 2,
    id: $props.id,
    name: $props.name,
    type: $props.type,
    value: $props.value,
    onInput: _cache[1] || (_cache[1] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, null, 40, _hoisted_4$1)) : $options.getFieldType() === 'list' ? (vue.openBlock(), vue.createElementBlock("select", {
    key: 3,
    id: $props.id,
    name: $props.id,
    placeholder: $props.info,
    onInput: _cache[2] || (_cache[2] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, [$props.value ? (vue.openBlock(), vue.createElementBlock("option", {
    key: 0,
    value: $props.value
  }, vue.toDisplayString($props.value), 9, _hoisted_6)) : (vue.openBlock(), vue.createElementBlock("option", _hoisted_7, vue.toDisplayString($props.info), 1)), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.list, function (value, index) {
    return vue.openBlock(), vue.createElementBlock("option", {
      key: index,
      value: value
    }, vue.toDisplayString(value), 9, _hoisted_8);
  }), 128))], 40, _hoisted_5)) : $options.getFieldType() === 'area' ? (vue.openBlock(), vue.createElementBlock("textarea", {
    key: 4,
    id: $props.id,
    name: $props.id,
    cols: $props.cols,
    maxlength: $props.max,
    minlength: $props.min,
    placeholder: $props.info,
    rows: $props.rows,
    value: $props.value,
    onInput: _cache[3] || (_cache[3] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, null, 40, _hoisted_9)) : (vue.openBlock(), vue.createElementBlock("input", {
    key: 5,
    id: $props.id,
    maxlength: $props.max,
    minlength: $props.min,
    name: $props.id,
    placeholder: $props.info,
    type: $props.type,
    value: $props.value,
    onInput: _cache[4] || (_cache[4] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, null, 40, _hoisted_10)), $options.hasSlot('label') ? (vue.openBlock(), vue.createElementBlock("label", {
    key: 6,
    for: $props.id
  }, [vue.renderSlot(_ctx.$slots, "label")], 8, _hoisted_11)) : vue.createCommentVNode("", true)], 8, _hoisted_1$3);
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$3 = "\nfieldset[data-v-111fff1c] {\n  display: flex;\n  flex-wrap: wrap;\n  place-items: center;\n  margin: auto;\n  border: none;\n  padding: 0;\n  width: 100%;\n  transition: width 2s;\n  text-align: center;\n}\nfieldset > *[data-v-111fff1c] {\n  box-sizing: border-box;\n  margin: 0 10px;\n  padding: 5px;\n}\nlegend[data-v-111fff1c] {\n  width: 93%;\n  font-size: 1.2rem;\n  color: var(--gray);\n}\nlabel[data-v-111fff1c] {\n  width: 90%;\n  visibility: hidden;\n  font-size: 0.8rem;\n  font-style: italic;\n  color: var(--cyan);\n}\ninput[data-v-111fff1c],\nselect[data-v-111fff1c],\ntextarea[data-v-111fff1c] {\n  border: medium outset var(--blue);\n  border-radius: 10px;\n  outline: none;\n  width: 100%;\n  line-height: 1.8;\n  background-color: var(--white);\n}\nfieldset:hover legend[data-v-111fff1c] {\n  color: var(--black);\n}\nfieldset:hover > input[data-v-111fff1c],\nfieldset:hover > select[data-v-111fff1c],\nfieldset:hover > textarea[data-v-111fff1c],\ninput[data-v-111fff1c]:focus,\nselect[data-v-111fff1c]:focus,\ntextarea[data-v-111fff1c]:focus {\n  border: medium inset var(--green);\n  border-radius: 0;\n  background-color: var(--grey);\n  transition: all 1s;\n}\nfieldset:hover > label[data-v-111fff1c],\ninput:focus + label[data-v-111fff1c],\nselect:focus + label[data-v-111fff1c],\ntextarea:focus + label[data-v-111fff1c] {\n  visibility: visible;\n  transform: scale(1.1);\n  transition: all 1s;\n}\n";
styleInject(css_248z$3);script$3.render = render$3;
script$3.__scopeId = "data-v-111fff1c";var script$2 = {
  name: "FootElt",
  props: {
    title1: {
      type: String,
      default: "Tools"
    },
    title2: {
      type: String,
      default: "Sites"
    },
    title3: {
      type: String,
      default: "Apps"
    }
  },
  methods: {
    hasSlot: function hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
};var _hoisted_1$2 = {
  key: 0
};
var _hoisted_2$1 = {
  key: 1
};
var _hoisted_3$1 = {
  key: 2
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("footer", null, [vue.createElementVNode("ol", null, [$options.hasSlot('one') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_1$2, [vue.createElementVNode("h3", null, vue.toDisplayString($props.title1), 1), vue.renderSlot(_ctx.$slots, "one")])) : vue.createCommentVNode("", true), $options.hasSlot('two') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_2$1, [vue.createElementVNode("h3", null, vue.toDisplayString($props.title2), 1), vue.renderSlot(_ctx.$slots, "two")])) : vue.createCommentVNode("", true), $options.hasSlot('three') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_3$1, [vue.createElementVNode("h3", null, vue.toDisplayString($props.title3), 1), vue.renderSlot(_ctx.$slots, "three")])) : vue.createCommentVNode("", true)]), vue.renderSlot(_ctx.$slots, "main")]);
}var css_248z$2 = "\nfooter[data-v-4416ea0f] {\n  text-align: center;\n}\nol[data-v-4416ea0f] {\n  display: flex;\n  flex-direction: column;\n  place-content: space-evenly;\n  padding: 10px 0;\n  background-color: var(--primary);\n}\nol li[data-v-4416ea0f] {\n  list-style-type: none;\n}\nol a[data-v-4416ea0f-s] {\n  font-size: 1.5rem;\n  color: var(--white);\n}\nol a[data-v-4416ea0f-s]:hover,\nol a[data-v-4416ea0f-s]:focus {\n  color: var(--secondary);\n}\nh3[data-v-4416ea0f] {\n  margin: 0;\n  font-size: 2rem;\n  color: var(--grey);\n}\nfooter[data-v-4416ea0f] >  ul {\n  display: flex;\n  flex-direction: row;\n  place-content: center;\n}\n@media screen and (min-width: 768px) {\nol[data-v-4416ea0f] {\n    flex-direction: row;\n}\n}\n";
styleInject(css_248z$2);script$2.render = render$2;
script$2.__scopeId = "data-v-4416ea0f";var script$1 = {
  name: "ListElt",
  props: {
    items: {
      type: Array,
      required: true
    },
    display: {
      type: String,
      default: "col"
    }
  },
  methods: {
    isNested: function isNested() {
      return this.$slots["nested"] !== undefined;
    }
  }
};var _hoisted_1$1 = {
  key: 0
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("ul", null, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, function (item, index) {
    return vue.openBlock(), vue.createElementBlock("li", {
      key: index
    }, [vue.renderSlot(_ctx.$slots, "items", {
      index: index,
      item: item
    }), $options.isNested() ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$1, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, function (value, key) {
      return vue.openBlock(), vue.createElementBlock("li", {
        key: key
      }, [vue.renderSlot(_ctx.$slots, "nested", {
        index: index,
        item: item,
        key: key,
        value: value
      })]);
    }), 128))])) : vue.createCommentVNode("", true)]);
  }), 128))]);
}var css_248z$1 = "\nul[data-v-7ff257c1] {\n  margin: 5vh 5vw 10vh;\n  padding: 0;\n  list-style: none;\n}\nli > ul[data-v-7ff257c1] {\n  display: flex;\n  flex-wrap: wrap;\n  place-content: center;\n}\n";
styleInject(css_248z$1);script$1.render = render$1;
script$1.__scopeId = "data-v-7ff257c1";var script = {
  name: "TableElt",
  props: {
    title: {
      type: String
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    hasSlot: function hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
};var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("table", null, [$options.hasSlot('title') ? (vue.openBlock(), vue.createElementBlock("caption", _hoisted_1, [vue.renderSlot(_ctx.$slots, "title")])) : vue.createCommentVNode("", true), vue.createElementVNode("thead", null, [vue.createElementVNode("tr", null, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items[0], function (value, key) {
    return vue.openBlock(), vue.createElementBlock("th", {
      key: key
    }, vue.toDisplayString(key === "_id" ? key = "id" : key), 1);
  }), 128)), $options.hasSlot('head') ? (vue.openBlock(), vue.createElementBlock("th", _hoisted_2, [vue.renderSlot(_ctx.$slots, "head")])) : vue.createCommentVNode("", true)])]), vue.createElementVNode("tbody", null, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, function (item, index) {
    return vue.openBlock(), vue.createElementBlock("tr", {
      key: index
    }, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, function (value, key) {
      return vue.openBlock(), vue.createElementBlock("td", {
        key: key
      }, [vue.renderSlot(_ctx.$slots, "cell-".concat(key), {
        index: index,
        item: item,
        key: key,
        value: value
      })]);
    }), 128)), $options.hasSlot('body') ? (vue.openBlock(), vue.createElementBlock("td", _hoisted_3, [vue.renderSlot(_ctx.$slots, "body", {
      index: index,
      item: item
    })])) : vue.createCommentVNode("", true)]);
  }), 128))]), $options.hasSlot('foot') ? (vue.openBlock(), vue.createElementBlock("tfoot", _hoisted_4, [vue.renderSlot(_ctx.$slots, "foot")])) : vue.createCommentVNode("", true)]);
}var css_248z = "\ntable[data-v-1848f47c] {\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 10px;\n  margin: 50px auto;\n  width: auto;\n  max-width: 100%;\n  font-size: calc(var(--body-font-size) * 110 / 100);\n  box-shadow: 5px 5px 10px 5px var(--grey);\n}\ncaption[data-v-1848f47c] {\n  caption-side: top;\n  margin: 10px;\n  font-size: 3rem;\n  font-weight: bold;\n  color: var(--black);\n  text-shadow: 1px 1px 2px;\n}\nth[data-v-1848f47c] {\n  display: table-column;\n  font-size: calc(var(--body-font-size) * 120 / 100);\n  font-style: italic;\n  background-color: var(--primary);\n  color: var(--white);\n}\nth[data-v-1848f47c],\ntd[data-v-1848f47c] {\n  padding: 2px;\n  text-align: center;\n  vertical-align: middle;\n}\ntd[data-v-1848f47c] {\n  display: table-row;\n  word-break: normal;\n  cursor: cell;\n}\ntbody tr[data-v-1848f47c]:nth-child(even) {\n  background-color: var(--grey);\n  color: var(--black);\n}\ntbody tr[data-v-1848f47c]:nth-child(odd) {\n  background-color: var(--white);\n  color: var(--gray);\n}\ntbody tr[data-v-1848f47c]:hover,\ntbody tr[data-v-1848f47c]:focus {\n  background-color: var(--primary);\n  color: var(--secondary);\n}\n@media (min-width: 576px) {\ntable[data-v-1848f47c] {\n    max-width: 95%;\n}\n}\n@media (min-width: 768px) {\ntable[data-v-1848f47c] {\n    max-width: 90%;\n}\n}\n@media (min-width: 992px) {\ntable[data-v-1848f47c] {\n    max-width: 85%;\n}\nth[data-v-1848f47c],\n  td[data-v-1848f47c] {\n    display: table-cell;\n}\n}\n@media (min-width: 1200px) {\ntable[data-v-1848f47c] {\n    max-width: 80%;\n}\n}\n@media (min-width: 1600px) {\ntable[data-v-1848f47c] {\n    max-width: 75%;\n}\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-1848f47c";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,FieldElt:script$3,FootElt:script$2,ListElt:script$1,TableElt:script});var install = function installVueElt(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
};var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,FieldElt:script$3,FootElt:script$2,ListElt:script$1,TableElt:script});Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;