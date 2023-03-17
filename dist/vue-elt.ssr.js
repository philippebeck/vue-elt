'use strict';var vue=require('vue');function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
}var script$8 = {
  name: "BtnElt",
  props: {
    type: {
      type: String,
      default: "link"
    },
    value: String,
    href: String,
    content: String,
    title: String
  },
  methods: {
    getBtnType: function getBtnType() {
      if (this.type === "button" || this.type === "submit" || this.type === "reset") {
        return "button";
      }
      return "link";
    }
  }
};var _hoisted_1$8 = ["type", "value", "title"];
var _hoisted_2$8 = ["href", "title"];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.getBtnType() === 'button' ? (vue.openBlock(), vue.createElementBlock("button", {
    key: 0,
    type: $props.type,
    value: $props.value,
    title: $props.title
  }, [vue.renderSlot(_ctx.$slots, "btn"), vue.createTextVNode(" " + vue.toDisplayString($props.content), 1)], 8, _hoisted_1$8)) : (vue.openBlock(), vue.createElementBlock("a", {
    key: 1,
    href: $props.href,
    title: $props.title
  }, [vue.renderSlot(_ctx.$slots, "btn"), vue.createTextVNode(" " + vue.toDisplayString($props.content), 1)], 8, _hoisted_2$8));
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
}var css_248z$i = "\n/********** BTN ELT **********/\na,\nbutton {\n  --ve-btn-display: inline-block;\n  --ve-btn-margin: 10px;\n  --ve-btn-border: none;\n  --ve-btn-border-radius: 10px;\n  --ve-btn-padding: 10px 15px;\n  --ve-btn-font-family: var(--ani-monospace);\n  --ve-btn-font-size: 1.5rem;\n  --ve-btn-font-weight: bold;\n  --ve-btn-text-align: center;\n  --ve-btn-text-decoration: none;\n  --ve-btn-background-color: transparent;\n  --ve-btn-color: var(--ani-white);\n  --ve-btn-cursor: pointer;\n  --ve-btn-hover-border-radius: 5px;\n  --ve-btn-hover-background-color: transparent;\n  --ve-btn-hover-color: var(--ani-white);\n  --ve-btn-hover-box-shadow: inset 0 0 5px 2px;\n  --ve-btn-hover-transition: all 200ms;\n  --ve-btn-child-display: block;\n  --ve-btn-child-margin: auto;\n  --ve-label-border: solid 2px var(--ani-slate);\n  --ve-label-border-radius: 20px;\n  --ve-label-background-color: var(--ani-white);\n  --ve-label-border-color: var(--ani-slate);\n  --ve-label-color: var(--ani-slate);\n  --ve-label-hover-border-radius: 20px;\n}\n\n";
styleInject(css_248z$i);var css_248z$h = "\na[data-v-3bc5737f],\nbutton[data-v-3bc5737f] {\n  display: var(--ve-btn-display);\n  margin: var(--ve-btn-margin);\n  border: var(--ve-btn-border);\n  border-radius: var(--ve-btn-border-radius);\n  padding: var(--ve-btn-padding);\n  font-family: var(--ve-btn-font-family);\n  font-size: var(--ve-btn-font-size);\n  font-weight: var(--ve-btn-font-weight);\n  text-align: var(--ve-btn-text-align);\n  text-decoration: var(--ve-btn-text-decoration);\n  background-color: var(--ve-btn-background-color);\n  color: var(--ve-btn-color);\n  cursor: var(--ve-btn-cursor);\n}\n[class*=\"label-\"][data-v-3bc5737f] {\n  border: var(--ve-label-border);\n  border-radius: var(--ve-label-border-radius);\n}\na[data-v-3bc5737f]:hover,\na[data-v-3bc5737f]:focus,\nbutton[data-v-3bc5737f]:hover,\nbutton[data-v-3bc5737f]:focus {\n  border-radius: var(--ve-btn-hover-border-radius);\n  background-color: var(--ve-btn-hover-background-color);\n  color: var(--ve-btn-hover-color);\n  transition: var(--ve-btn-hover-transition);\n}\n[class*=\"label-\"][data-v-3bc5737f]:hover,\n[class*=\"label-\"][data-v-3bc5737f]:focus {\n  border-color: var(--ve-label-border-color);\n  border-radius: var(--ve-label-hover-border-radius);\n  color: var(--ve-label-color);\n}\na > *[data-v-3bc5737f],\nbutton > *[data-v-3bc5737f] {\n  display: var(--ve-btn-child-display);\n  margin: var(--ve-btn-child-margin);\n}\n\n/* RED */\n.btn-red[data-v-3bc5737f] {\n  background-color: var(--ani-red-dark);\n}\n.btn-red[data-v-3bc5737f]:hover,\n.btn-red[data-v-3bc5737f]:focus {\n  background-color: var(--ani-red);\n}\n.label-red[data-v-3bc5737f] {\n  border-color: var(--ani-red-dark);\n  color: var(--ani-red-dark);\n}\n.label-red[data-v-3bc5737f]:hover,\n.label-red[data-v-3bc5737f]:focus {\n  border-color: var(--ani-red);\n  color: var(--ani-red);\n}\n\n/* ORANGE */\n.btn-orange[data-v-3bc5737f] {\n  background-color: var(--ani-orange-dark);\n}\n.btn-orange[data-v-3bc5737f]:hover,\n.btn-orange[data-v-3bc5737f]:focus {\n  background-color: var(--ani-orange);\n}\n.label-orange[data-v-3bc5737f] {\n  border-color: var(--ani-orange-dark);\n  color: var(--ani-orange-dark);\n}\n.label-orange[data-v-3bc5737f]:hover,\n.label-orange[data-v-3bc5737f]:focus {\n  border-color: var(--ani-orange);\n  color: var(--ani-orange);\n}\n\n/* YELLOW */\n.btn-yellow[data-v-3bc5737f] {\n  background-color: var(--ani-yellow-dark);\n}\n.btn-yellow[data-v-3bc5737f]:hover,\n.btn-yellow[data-v-3bc5737f]:focus {\n  background-color: var(--ani-yellow);\n  color: var(--ani-black);\n}\n.label-yellow[data-v-3bc5737f] {\n  border-color: var(--ani-yellow-dark);\n  color: var(--ani-yellow-dark);\n}\n.label-yellow[data-v-3bc5737f]:hover,\n.label-yellow[data-v-3bc5737f]:focus {\n  border-color: var(--ani-yellow);\n  color: var(--ani-yellow);\n}\n\n/* LIME */\n.btn-lime[data-v-3bc5737f] {\n  background-color: var(--ani-lime-dark);\n}\n.btn-lime[data-v-3bc5737f]:hover,\n.btn-lime[data-v-3bc5737f]:focus {\n  background-color: var(--ani-lime);\n  color: var(--ani-black);\n}\n.label-lime[data-v-3bc5737f] {\n  border-color: var(--ani-lime-dark);\n  color: var(--ani-lime-dark);\n}\n.label-lime[data-v-3bc5737f]:hover,\n.label-lime[data-v-3bc5737f]:focus {\n  border-color: var(--ani-lime);\n  color: var(--ani-lime);\n}\n\n/* GREEN */\n.btn-green[data-v-3bc5737f] {\n  background-color: var(--ani-green-dark);\n}\n.btn-green[data-v-3bc5737f]:hover,\n.btn-green[data-v-3bc5737f]:focus {\n  background-color: var(--ani-green);\n  color: var(--ani-black);\n}\n.label-green[data-v-3bc5737f] {\n  border-color: var(--ani-green-dark);\n  color: var(--ani-green-dark);\n}\n.label-green[data-v-3bc5737f]:hover,\n.label-green[data-v-3bc5737f]:focus {\n  border-color: var(--ani-green);\n  color: var(--ani-green);\n}\n\n/* AQUA */\n.btn-aqua[data-v-3bc5737f] {\n  background-color: var(--ani-aqua-dark);\n}\n.btn-aqua[data-v-3bc5737f]:hover,\n.btn-aqua[data-v-3bc5737f]:focus {\n  background-color: var(--ani-aqua);\n  color: var(--ani-black);\n}\n.label-aqua[data-v-3bc5737f] {\n  border-color: var(--ani-aqua-dark);\n  color: var(--ani-aqua-dark);\n}\n.label-aqua[data-v-3bc5737f]:hover,\n.label-aqua[data-v-3bc5737f]:focus {\n  border-color: var(--ani-aqua);\n  color: var(--ani-aqua);\n}\n\n/* CYAN */\n.btn-cyan[data-v-3bc5737f] {\n  background-color: var(--ani-cyan-dark);\n}\n.btn-cyan[data-v-3bc5737f]:hover,\n.btn-cyan[data-v-3bc5737f]:focus {\n  background-color: var(--ani-cyan);\n  color: var(--ani-black);\n}\n.label-cyan[data-v-3bc5737f] {\n  border-color: var(--ani-cyan-dark);\n  color: var(--ani-cyan-dark);\n}\n.label-cyan[data-v-3bc5737f]:hover,\n.label-cyan[data-v-3bc5737f]:focus {\n  border-color: var(--ani-cyan);\n  color: var(--ani-cyan);\n}\n\n/* SKY */\n.btn-sky[data-v-3bc5737f] {\n  background-color: var(--ani-sky-dark);\n}\n.btn-sky[data-v-3bc5737f]:hover,\n.btn-sky[data-v-3bc5737f]:focus {\n  background-color: var(--ani-sky);\n}\n.label-sky[data-v-3bc5737f] {\n  border-color: var(--ani-sky-dark);\n  color: var(--ani-sky-dark);\n}\n.label-sky[data-v-3bc5737f]:hover,\n.label-sky[data-v-3bc5737f]:focus {\n  border-color: var(--ani-sky);\n  color: var(--ani-sky);\n}\n\n/* BLUE */\n.btn-blue[data-v-3bc5737f] {\n  background-color: var(--ani-blue-dark);\n}\n.btn-blue[data-v-3bc5737f]:hover,\n.btn-blue[data-v-3bc5737f]:focus {\n  background-color: var(--ani-blue);\n}\n.label-blue[data-v-3bc5737f] {\n  border-color: var(--ani-blue-dark);\n  color: var(--ani-blue-dark);\n}\n.label-blue[data-v-3bc5737f]:hover,\n.label-blue[data-v-3bc5737f]:focus {\n  border-color: var(--ani-blue);\n  color: var(--ani-blue);\n}\n\n/* VIOLET */\n.btn-violet[data-v-3bc5737f] {\n  background-color: var(--ani-violet-dark);\n}\n.btn-violet[data-v-3bc5737f]:hover,\n.btn-violet[data-v-3bc5737f]:focus {\n  background-color: var(--ani-violet);\n}\n.label-violet[data-v-3bc5737f] {\n  border-color: var(--ani-violet-dark);\n  color: var(--ani-violet-dark);\n}\n.label-violet[data-v-3bc5737f]:hover,\n.label-violet[data-v-3bc5737f]:focus {\n  border-color: var(--ani-violet);\n  color: var(--ani-violet);\n}\n\n/* MAGENTA */\n.btn-magenta[data-v-3bc5737f] {\n  background-color: var(--ani-magenta-dark);\n}\n.btn-magenta[data-v-3bc5737f]:hover,\n.btn-magenta[data-v-3bc5737f]:focus {\n  background-color: var(--ani-magenta);\n}\n.label-magenta[data-v-3bc5737f] {\n  border-color: var(--ani-magenta-dark);\n  color: var(--ani-magenta-dark);\n}\n.label-magenta[data-v-3bc5737f]:hover,\n.label-magenta[data-v-3bc5737f]:focus {\n  border-color: var(--ani-magenta);\n  color: var(--ani-magenta);\n}\n\n/* PINK */\n.btn-pink[data-v-3bc5737f] {\n  background-color: var(--ani-pink-dark);\n}\n.btn-pink[data-v-3bc5737f]:hover,\n.btn-pink[data-v-3bc5737f]:focus {\n  background-color: var(--ani-pink);\n}\n.label-pink[data-v-3bc5737f] {\n  border-color: var(--ani-pink-dark);\n  color: var(--ani-pink-dark);\n}\n.label-pink[data-v-3bc5737f]:hover,\n.label-pink[data-v-3bc5737f]:focus {\n  border-color: var(--ani-pink);\n  color: var(--ani-pink);\n}\n";
styleInject(css_248z$h);script$8.render = render$8;
script$8.__scopeId = "data-v-3bc5737f";var script$7 = {
  name: "FieldElt",
  props: {
    model: {
      prop: "value",
      event: "update"
    },
    type: {
      type: String,
      default: "text"
    },
    value: [String, Number, Array],
    id: String,
    name: String,
    list: Array,
    info: String,
    min: {
      type: Number,
      default: 2
    },
    max: {
      type: Number,
      default: 50
    },
    cols: {
      type: Number,
      default: 20
    },
    rows: {
      type: Number,
      default: 5
    },
    required: {
      type: String,
      default: "required"
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
        case "number":
        case "date":
        case "time":
        case "range":
          fieldType = "number";
          break;
        case "checkbox":
        case "radio":
        case "color":
          fieldType = "special";
          break;
        case "option":
        case "select":
          fieldType = "list";
          break;
        case "textarea":
          fieldType = "area";
          break;
        default:
          fieldType = "text";
      }
      return fieldType;
    }
  }
};var _hoisted_1$7 = ["title"];
var _hoisted_2$7 = {
  key: 0
};
var _hoisted_3$7 = ["type", "id", "name", "value", "min", "max", "required"];
var _hoisted_4$7 = ["type", "id", "name", "value", "required"];
var _hoisted_5$5 = ["id", "name", "placeholder", "required"];
var _hoisted_6$4 = ["value"];
var _hoisted_7$3 = {
  key: 1
};
var _hoisted_8$3 = ["value"];
var _hoisted_9$3 = ["id", "name", "value", "placeholder", "minlength", "maxlength", "cols", "rows", "required"];
var _hoisted_10$2 = ["type", "id", "name", "value", "placeholder", "minlength", "maxlength", "required"];
var _hoisted_11$2 = ["for"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("fieldset", {
    title: $props.info
  }, [$options.hasSlot('legend') ? (vue.openBlock(), vue.createElementBlock("legend", _hoisted_2$7, [vue.renderSlot(_ctx.$slots, "legend")])) : vue.createCommentVNode("", true), $options.getFieldType() === 'number' ? (vue.openBlock(), vue.createElementBlock("input", {
    key: 1,
    type: $props.type,
    id: $props.id,
    name: $props.name,
    value: $props.value,
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    min: $props.min,
    max: $props.max,
    required: $props.required
  }, null, 40, _hoisted_3$7)) : $options.getFieldType() === 'special' ? (vue.openBlock(), vue.createElementBlock("input", {
    key: 2,
    type: $props.type,
    id: $props.id,
    name: $props.name,
    value: $props.value,
    onInput: _cache[1] || (_cache[1] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    required: $props.required
  }, null, 40, _hoisted_4$7)) : $options.getFieldType() === 'list' ? (vue.openBlock(), vue.createElementBlock("select", {
    key: 3,
    id: $props.id,
    name: $props.name,
    onInput: _cache[2] || (_cache[2] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    placeholder: $props.info,
    required: $props.required
  }, [$props.value ? (vue.openBlock(), vue.createElementBlock("option", {
    key: 0,
    value: $props.value
  }, vue.toDisplayString($props.value), 9, _hoisted_6$4)) : (vue.openBlock(), vue.createElementBlock("option", _hoisted_7$3, vue.toDisplayString($props.info), 1)), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.list, function (value, key) {
    return vue.openBlock(), vue.createElementBlock("option", {
      key: key,
      value: value
    }, vue.toDisplayString(value), 9, _hoisted_8$3);
  }), 128))], 40, _hoisted_5$5)) : $options.getFieldType() === 'area' ? (vue.openBlock(), vue.createElementBlock("textarea", {
    key: 4,
    id: $props.id,
    name: $props.name,
    value: $props.value,
    onInput: _cache[3] || (_cache[3] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    placeholder: $props.info,
    minlength: $props.min,
    maxlength: $props.max,
    cols: $props.cols,
    rows: $props.rows,
    required: $props.required
  }, null, 40, _hoisted_9$3)) : (vue.openBlock(), vue.createElementBlock("input", {
    key: 5,
    type: $props.type,
    id: $props.id,
    name: $props.name,
    value: $props.value,
    onInput: _cache[4] || (_cache[4] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    placeholder: $props.info,
    minlength: $props.min,
    maxlength: $props.max,
    required: $props.required
  }, null, 40, _hoisted_10$2)), $options.hasSlot('label') ? (vue.openBlock(), vue.createElementBlock("label", {
    key: 6,
    for: $props.id
  }, [vue.renderSlot(_ctx.$slots, "label")], 8, _hoisted_11$2)) : vue.createCommentVNode("", true)], 8, _hoisted_1$7);
}var css_248z$g = "\n/********** FIELD ELT **********/\nfieldset {\n  --ve-field-display: flex;\n  --ve-field-flex-flow: row wrap;\n  --ve-field-place-items: center;\n  --ve-field-margin: auto;\n  --ve-field-border: none;\n  --ve-field-padding: 0;\n  --ve-field-max-width: 500px;\n  --ve-field-text-align: center;\n  --ve-field-transition: max-width 1s;\n  --ve-field-child-box-sizing: border-box;\n  --ve-field-child-margin: 5px;\n  --ve-field-child-padding: 5px;\n}\nlegend {\n  --ve-field-legend-width: 93%;\n  --ve-field-legend-font-size: 2rem;\n  --ve-field-legend-color: var(--ani-slate);\n  --ve-field-hover-legend-color: var(--ani-black);\n}\nlabel {\n  --ve-field-label-width: 90%;\n  --ve-field-label-visibility: hidden;\n  --ve-field-label-font-size: 1.5rem;\n  --ve-field-label-font-style: italic;\n  --ve-field-label-color: var(--ani-blue-dark);\n  --ve-field-hover-label-visibility: visible;\n  --ve-field-hover-label-transform: scale(1.1);\n  --ve-field-hover-label-transition: all 1s;\n}\ninput,\nselect,\ntextarea {\n  --ve-field-input-border: 1px solid var(--ani-sky-light);\n  --ve-field-input-border-radius: 10px;\n  --ve-field-input-outline: none;\n  --ve-field-input-width: 100%;\n  --ve-field-input-line-height: 1.8;\n  --ve-field-input-background-color: var(--ani-white);\n  --ve-field-hover-input-border: 1px solid var(--ani-sky);\n  --ve-field-hover-input-border-radius: 0;\n  --ve-field-hover-input-background-color: var(--ani-white);\n  --ve-field-hover-input-transition: all 500ms;\n}\n\n";
styleInject(css_248z$g);var css_248z$f = "\nfieldset[data-v-13280177] {\n  display: var(--ve-field-display);\n  flex-flow: var(--ve-field-flex-flow);\n  place-items: var(--ve-field-place-items);;\n  margin: var(--ve-field-margin);\n  border: var(--ve-field-border);\n  padding: var(--ve-field-padding);\n  max-width: var(--ve-field-max-width);\n  text-align: var(--ve-field-text-align);\n  transition: var(--ve-field-transition);\n}\nfieldset > *[data-v-13280177] {\n  box-sizing: var(--ve-field-child-box-sizing);\n  margin: var(--ve-field-child-margin);\n  padding: var(--ve-field-child-padding);\n}\nlegend[data-v-13280177] {\n  width: var(--ve-field-legend-width);\n  font-size: var(--ve-field-legend-font-size);\n  color: var(--ve-field-legend-color);\n}\nfieldset:hover legend[data-v-13280177] {\n  color: var(--ve-field-hover-legend-color);\n}\nlabel[data-v-13280177] {\n  width: var(--ve-field-label-width);\n  visibility: var(--ve-field-label-visibility);\n  font-size: var(--ve-field-label-font-size);\n  font-style: var(--ve-field-label-font-style);\n  color: var(--ve-field-label-color);\n}\nfieldset:hover > label[data-v-13280177],\ninput:focus + label[data-v-13280177],\nselect:focus + label[data-v-13280177],\ntextarea:focus + label[data-v-13280177] {\n  visibility: var(--ve-field-hover-label-visibility);\n  transform: var(--ve-field-hover-label-transform);\n  transition: var(--ve-field-hover-label-transition);\n}\ninput[data-v-13280177],\nselect[data-v-13280177],\ntextarea[data-v-13280177] {\n  border: var(--ve-field-input-border);\n  border-radius: var(--ve-field-input-border-radius);\n  outline: var(--ve-field-input-outline);\n  width: var(--ve-field-input-width);\n  line-height: var(--ve-field-input-line-height);\n  background-color: var(--ve-field-input-background-color);\n}\nfieldset:hover > input[data-v-13280177],\nfieldset:hover > select[data-v-13280177],\nfieldset:hover > textarea[data-v-13280177],\ninput[data-v-13280177]:focus,\nselect[data-v-13280177]:focus,\ntextarea[data-v-13280177]:focus {\n  border: var(--ve-field-hover-input-border);\n  border-radius: var(--ve-field-hover-input-border-radius);\n  background-color: var(--ve-field-hover-input-background-color);\n  transition: var(--ve-field-hover-input-transition);\n}\n";
styleInject(css_248z$f);script$7.render = render$7;
script$7.__scopeId = "data-v-13280177";var script$6 = {
  name: "MediaElt",
  props: {
    type: {
      type: String,
      default: "img"
    },
    src: {
      type: String,
      required: true
    },
    medias: Array,
    alt: String,
    title: String,
    height: Number,
    width: {
      type: Number,
      default: 300
    },
    loop: {
      type: Boolean,
      default: false
    },
    itemprop: String
  },
  methods: {
    hasSlot: function hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
};var _hoisted_1$6 = ["title"];
var _hoisted_2$6 = ["src", "loop", "itemprop"];
var _hoisted_3$6 = ["src", "loop", "height", "width", "itemprop"];
var _hoisted_4$6 = ["src", "type"];
var _hoisted_5$4 = {
  key: 2
};
var _hoisted_6$3 = ["type", "srcset", "media"];
var _hoisted_7$2 = ["src", "alt", "itemprop"];
var _hoisted_8$2 = ["src", "alt", "itemprop"];
var _hoisted_9$2 = {
  key: 4
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("figure", {
    title: $props.title
  }, [$props.type === 'audio' ? (vue.openBlock(), vue.createElementBlock("audio", {
    key: 0,
    controls: "",
    src: $props.src,
    loop: $props.loop,
    itemprop: $props.itemprop
  }, [vue.renderSlot(_ctx.$slots, "audio")], 8, _hoisted_2$6)) : $props.type === 'video' ? (vue.openBlock(), vue.createElementBlock("video", {
    key: 1,
    controls: "",
    src: $props.src,
    loop: $props.loop,
    height: $props.height,
    width: $props.width,
    itemprop: $props.itemprop
  }, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.medias, function (video, index) {
    return vue.openBlock(), vue.createElementBlock("source", {
      key: index,
      src: video.src,
      type: video.type
    }, null, 8, _hoisted_4$6);
  }), 128)), vue.renderSlot(_ctx.$slots, "video")], 8, _hoisted_3$6)) : $props.type === 'picture' ? (vue.openBlock(), vue.createElementBlock("picture", _hoisted_5$4, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.medias, function (picture, index) {
    return vue.openBlock(), vue.createElementBlock("source", {
      key: index,
      type: picture.type,
      srcset: picture.src,
      media: picture.media
    }, null, 8, _hoisted_6$3);
  }), 128)), vue.createElementVNode("img", {
    src: $props.src,
    alt: $props.alt,
    itemprop: $props.itemprop
  }, null, 8, _hoisted_7$2)])) : (vue.openBlock(), vue.createElementBlock("img", {
    key: 3,
    src: $props.src,
    alt: $props.alt,
    itemprop: $props.itemprop
  }, null, 8, _hoisted_8$2)), $options.hasSlot('figcaption') ? (vue.openBlock(), vue.createElementBlock("figcaption", _hoisted_9$2, [vue.renderSlot(_ctx.$slots, "figcaption")])) : vue.createCommentVNode("", true)], 8, _hoisted_1$6);
}var css_248z$e = "\n/********** MEDIA ELT **********/\nfigure {\n  --ve-media-figure-border: 1px solid transparent;\n  --ve-media-figure-border-radius: 20px;\n  --ve-media-figure-padding: 0;\n  --ve-media-figure-background-color: transparent;\n}\nimg {\n  --ve-media-img-border: 2px solid var(--ani-slate);\n  --ve-media-img-border-radius: 20px;\n  --ve-media-img-padding: 1px;\n  --ve-media-img-max-width: 100%;\n  --ve-media-img-height: auto;\n  --ve-media-img-object-fit: contain;\n  --ve-media-img-object-position: 50% 50%;\n}\naudio {\n  --ve-media-audio-border: 2px solid var(--ani-slate);\n  --ve-media-audio-border-radius: 10px;\n}\nvideo {\n  --ve-media-video-border: 2px solid var(--ani-black);\n  --ve-media-video-border-radius: 20px;\n}\nfigcaption {\n  --ve-media-figcaption-display: flex;\n  --ve-media-figcaption-flex-flow: column nowrap;\n  --ve-media-figcaption-place-content: center center;\n  --ve-media-figcaption-color: var(--ani-black);\n}\n\n";
styleInject(css_248z$e);var css_248z$d = "\nfigure[data-v-7b987b26] {\n  border: var(--ve-media-figure-border);\n  border-radius: var(--ve-media-figure-border-radius);\n  padding: var(--ve-media-figure-padding);\n  background-color: var(--ve-media-figure-background-color);\n}\nimg[data-v-7b987b26] {\n  border: var(--ve-media-img-border);\n  border-radius: var(--ve-media-img-border-radius);\n  padding: var(--ve-media-img-padding);\n  max-width: var(--ve-media-img-max-width);\n  height: var(--ve-media-img-height);\n  object-fit: var(--ve-media-img-object-fit);\n  object-position: var(--ve-media-img-object-position);\n}\naudio[data-v-7b987b26] {\n  border: var(--ve-media-audio-border);\n  border-radius: var(--ve-media-audio-border-radius);\n}\nvideo[data-v-7b987b26] {\n  border: var(--ve-media-video-border);\n  border-radius: var(--ve-media-video-border-radius);\n}\nfigcaption[data-v-7b987b26] {\n  display: var(--ve-media-figcaption-display);\n  flex-flow: var(--ve-media-figcaption-flex-flow);\n  place-content: var(--ve-media-figcaption-place-content);\n  color: var(--ve-media-figcaption-color);\n}\n";
styleInject(css_248z$d);script$6.render = render$6;
script$6.__scopeId = "data-v-7b987b26";var script$5 = {
  name: "ListElt",
  props: {
    items: {
      type: Object,
      required: true
    },
    dynamic: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasSlot: function hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
};var _hoisted_1$5 = {
  key: 0
};
var _hoisted_2$5 = {
  key: 0
};
var _hoisted_3$5 = {
  key: 1
};
var _hoisted_4$5 = {
  key: 0
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.dynamic === true ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$5, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, function (item, index) {
    return vue.openBlock(), vue.createElementBlock("li", {
      key: index
    }, [vue.renderSlot(_ctx.$slots, "items", {
      index: index,
      item: item
    }, function () {
      return [vue.createTextVNode(vue.toDisplayString(item), 1)];
    }), $options.hasSlot('nested') ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_2$5, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, function (value, key) {
      return vue.openBlock(), vue.createElementBlock("li", {
        key: key
      }, [vue.renderSlot(_ctx.$slots, "nested", {
        index: index,
        item: item,
        key: key,
        value: value
      }, function () {
        return [vue.createTextVNode(vue.toDisplayString(value), 1)];
      })]);
    }), 128))])) : vue.createCommentVNode("", true)]);
  }), 128))])) : (vue.openBlock(), vue.createElementBlock("ul", _hoisted_3$5, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, function (item, index) {
    return vue.openBlock(), vue.createElementBlock("li", {
      key: index
    }, [vue.renderSlot(_ctx.$slots, "item-".concat(index + 1), {
      index: index,
      item: item
    }, function () {
      return [vue.createTextVNode(vue.toDisplayString(item), 1)];
    }), $options.hasSlot('nested') ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_4$5, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, function (value, key) {
      return vue.openBlock(), vue.createElementBlock("li", {
        key: key
      }, [vue.renderSlot(_ctx.$slots, "nested-".concat(key + 1), {
        index: index,
        item: item,
        key: key,
        value: value
      }, function () {
        return [vue.createTextVNode(vue.toDisplayString(value), 1)];
      })]);
    }), 128))])) : vue.createCommentVNode("", true)]);
  }), 128))]));
}var css_248z$c = "\n/********** LIST ELT **********/\nul {\n  --ve-list-margin: 20px 0;\n  --ve-list-padding: 0;\n  --ve-list-list-style: none;\n  --ve-list-text-align: center;\n  --ve-list-li-ul-display: flex;\n  --ve-list-li-ul-flex-flow: wrap;\n  --ve-list-li-ul-gap: 20px;\n  --ve-list-li-ul-place-content: center;\n  --ve-list-li-ul-place-items: end;\n  --ve-list-li-li-max-width: 300px;\n}\n\n";
styleInject(css_248z$c);var css_248z$b = "\nul[data-v-ed6e4588] {\n  margin: var(--ve-list-margin);\n  padding: var(--ve-list-padding);\n  list-style: var(--ve-list-list-style);\n  text-align: var(--ve-list-text-align);\n}\nli > ul[data-v-ed6e4588] {\n  display: var(--ve-list-li-ul-display);\n  flex-flow: var(--ve-list-li-ul-flex-flow);\n  gap: var(--ve-list-li-ul-gap);\n  place-content: var(--ve-list-li-ul-place-content);\n  place-items: var(--ve-list-li-ul-place-items);\n}\nli li[data-v-ed6e4588] {\n  max-width: var(--ve-list-li-li-max-width);\n}\n";
styleInject(css_248z$b);script$5.render = render$5;
script$5.__scopeId = "data-v-ed6e4588";var script$4 = {
  name: "SliderElt",
  props: {
    slides: {
      type: Array
    },
    delay: {
      type: Number,
      default: 5000
    },
    auto: {
      type: Boolean,
      default: true
    },
    random: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      index: -1,
      intervalId: 0,
      autoElt: null,
      randomElt: null,
      autoState: this.auto,
      randomState: this.random
    };
  },
  beforeCreate: function beforeCreate() {
    for (var i = 0; i < 1000; i++) {
      clearTimeout(i);
    }
  },
  mounted: function mounted() {
    this.autoElt = document.getElementById("slider-auto");
    this.randomElt = document.getElementById("slider-random");
    document.addEventListener("keydown", this.setKeyboard);
    document.getElementById("slide-1").classList.add("show");
    this.runSlider();
  },
  methods: {
    /******************** SETTERS ********************/
    /**
     * SET ICON
     * @param {object} icon
     * @param {string} add
     * @param {string} remove
     */
    setIcon: function setIcon(icon, add, remove) {
      icon.classList.add(add);
      icon.classList.remove(remove);
    },
    /**
     * SET AUTO
     * @param {boolean} state
     * @param {string} title
     * @param {string} add
     * @param {string} remove
     */
    setAuto: function setAuto(state, title, add, remove) {
      this.autoState = state;
      this.autoElt.title = title;
      this.setIcon(this.autoElt.querySelector("i"), add, remove);
    },
    /**
     * SET RANDOM
     * @param {boolean} state
     * @param {string} title
     * @param {string} add
     * @param {string} remove
     */
    setRandom: function setRandom(state, title, add, remove) {
      this.randomState = state;
      this.randomElt.title = title;
      this.setIcon(this.randomElt.querySelector("i"), add, remove);
    },
    /**
     * SET SLIDE
     * @param {Number} index 
     */
    setSlide: function setSlide(index) {
      this.index = index;
      this.refreshSlide();
    },
    /**
     * SET KEYBOARD
     * @param {Object} event
     */
    setKeyboard: function setKeyboard(event) {
      switch (event.code) {
        case "ArrowLeft":
          this.goPrevious();
          break;
        case "ArrowUp":
          this.checkRandom();
          break;
        case "ArrowDown":
          this.checkAuto();
          break;
        case "ArrowRight":
          this.goNext();
          break;
      }
    },
    /******************** GETTERS ********************/
    /**
     * GET RANDOM INTEGER
     * @param {number} min
     * @param {number} max
     * @return
     */
    getRandomInteger: function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    /******************** CHECKERS ********************/
    /**
     * HAS SLOT
     * @param {string} name 
     */
    hasSlot: function hasSlot(name) {
      return this.$slots[name] !== undefined;
    },
    /**
     * CHECK AUTO
     */
    checkAuto: function checkAuto() {
      if (this.autoState) {
        this.setAuto(false, "Play", "fa-play", "fa-pause");
        window.clearInterval(this.intervalId);
      } else {
        this.setAuto(true, "Pause", "fa-pause", "fa-play");
        this.intervalId = window.setInterval(this.goNext, this.delay);
      }
      this.refreshSlide();
    },
    /**
     * CHECK RANDOM
     */
    checkRandom: function checkRandom() {
      if (this.randomState) {
        this.setRandom(false, "Random", "fa-random", "fa-long-arrow-alt-right");
      } else {
        this.setRandom(true, "Normal", "fa-long-arrow-alt-right", "fa-random");
      }
      this.refreshSlide();
    },
    /******************** MAIN ********************/
    /**
     * RUN SLIDER
     */
    runSlider: function runSlider() {
      if (this.autoState) {
        this.intervalId = window.setInterval(this.goNext, this.delay);
      } else {
        this.goNext();
      }
    },
    /**
     * REFRESH SLIDE
     */
    refreshSlide: function refreshSlide() {
      for (var i = 1; i <= this.slides.length; i++) {
        document.getElementById("slide-".concat(i)).classList.remove("show");
      }
      document.getElementById("slide-".concat(this.index + 1)).classList.add("show");
    },
    /**
     * GO NEXT SLIDE
     */
    goNext: function goNext() {
      if (this.randomState) {
        this.index = this.getRandomInteger(0, this.slides.length - 1);
      } else {
        this.index++;
        if (this.index >= this.slides.length) {
          this.index = 0;
        }
      }
      this.refreshSlide();
    },
    /**
     * GO PREVIOUS SLIDE
     */
    goPrevious: function goPrevious() {
      if (this.randomState) {
        this.index = this.getRandomInteger(0, this.slides.length - 1);
      } else {
        this.index--;
        if (this.index < 0) {
          this.index = this.slides.length - 1;
        }
      }
      this.refreshSlide();
    }
  }
};var _withScopeId$1 = function _withScopeId(n) {
  return vue.pushScopeId("data-v-531dc370"), n = n(), vue.popScopeId(), n;
};
var _hoisted_1$4 = {
  class: "slider"
};
var _hoisted_2$4 = {
  class: "controls"
};
var _hoisted_3$4 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("i", {
    class: "fas fa-step-backward fa-2x"
  }, null, -1);
});
var _hoisted_4$4 = [_hoisted_3$4];
var _hoisted_5$3 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("i", {
    class: "fas fa-long-arrow-alt-right fa-2x"
  }, null, -1);
});
var _hoisted_6$2 = [_hoisted_5$3];
var _hoisted_7$1 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("i", {
    class: "fas fa-random fa-2x"
  }, null, -1);
});
var _hoisted_8$1 = [_hoisted_7$1];
var _hoisted_9$1 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("i", {
    class: "fas fa-pause fa-2x"
  }, null, -1);
});
var _hoisted_10$1 = [_hoisted_9$1];
var _hoisted_11$1 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("i", {
    class: "fas fa-play fa-2x"
  }, null, -1);
});
var _hoisted_12$1 = [_hoisted_11$1];
var _hoisted_13$1 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("i", {
    class: "fas fa-step-forward fa-2x"
  }, null, -1);
});
var _hoisted_14 = [_hoisted_13$1];
var _hoisted_15 = {
  class: "slides"
};
var _hoisted_16 = ["id"];
var _hoisted_17 = {
  key: 0
};
var _hoisted_18 = {
  class: "gallery"
};
var _hoisted_19 = ["onClick"];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("figure", _hoisted_1$4, [vue.createElementVNode("ul", _hoisted_2$4, [vue.createElementVNode("li", null, [vue.createElementVNode("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.goPrevious();
    }),
    title: "Previous (←)"
  }, _hoisted_4$4)]), vue.createElementVNode("li", null, [$props.random === true ? (vue.openBlock(), vue.createElementBlock("button", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.checkRandom();
    }),
    id: "slider-random",
    title: "Normal"
  }, _hoisted_6$2)) : (vue.openBlock(), vue.createElementBlock("button", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.checkRandom();
    }),
    id: "slider-random",
    title: "Random"
  }, _hoisted_8$1))]), vue.createElementVNode("li", null, [$props.auto === true ? (vue.openBlock(), vue.createElementBlock("button", {
    key: 0,
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.checkAuto();
    }),
    id: "slider-auto",
    title: "Pause"
  }, _hoisted_10$1)) : (vue.openBlock(), vue.createElementBlock("button", {
    key: 1,
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.checkAuto();
    }),
    id: "slider-auto",
    title: "Play"
  }, _hoisted_12$1))]), vue.createElementVNode("li", null, [vue.createElementVNode("button", {
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.goNext();
    }),
    title: "Next"
  }, _hoisted_14)])]), vue.createElementVNode("ul", _hoisted_15, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.slides, function (slide, index) {
    return vue.openBlock(), vue.createElementBlock("li", {
      key: index,
      id: 'slide-' + (index + 1)
    }, [vue.createElementVNode("figure", null, [vue.renderSlot(_ctx.$slots, "slide", {
      slide: slide,
      index: index
    }), $options.hasSlot('info') ? (vue.openBlock(), vue.createElementBlock("figcaption", _hoisted_17, [vue.renderSlot(_ctx.$slots, "info", {
      slide: slide,
      index: index
    })])) : vue.createCommentVNode("", true)])], 8, _hoisted_16);
  }), 128))]), vue.createElementVNode("ul", _hoisted_18, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.slides, function (slide, index) {
    return vue.openBlock(), vue.createElementBlock("li", {
      key: index,
      onClick: function onClick($event) {
        return $options.setSlide(index);
      }
    }, [vue.renderSlot(_ctx.$slots, "gallery", {
      slide: slide,
      index: index
    })], 8, _hoisted_19);
  }), 128))])]);
}var css_248z$a = "\n/********** SLIDER ELT **********/\n.slider {\n  --ve-slider-margin: var(--ve-slider-figcaption-height) auto -20px;\n  --ve-slider-border: none;\n  --ve-slider-padding: 0;\n  --ve-slider-width: 100%;\n  --ve-slider-text-align: center;\n}\n[id*=\"slide-\"] {\n  --ve-slider-slide-display: none;\n}\nfigcaption {\n  --ve-slider-figcaption-padding: 5px 20px;\n  --ve-slider-figcaption-width: 100%;\n  --ve-slider-figcaption-height: 20%;\n  --ve-slider-figcaption-font-weight: bold;\n  --ve-slider-figcaption-color: var(--ani-sky);\n}\n.controls {\n  --ve-slider-controls-display: flex;\n  --ve-slider-controls-gap: 10px;\n  --ve-slider-controls-place-content: center;\n  --ve-slider-controls-opacity: 0.5;\n  --ve-slider-controls-color: var(--ani-silver);\n  --ve-slider-controls-hover-opacity: 1;\n  --ve-slider-controls-hover-color: var(--ani-sky);\n}\nbutton {\n  --ve-slider-button-border: none;\n  --ve-slider-button-font-size: 60%;\n  --ve-slider-button-background-color: none;\n  --ve-slider-button-color: var(--ani-grey-dark);\n}\n.gallery {\n  --ve-slider-gallery-display: flex;\n  --ve-slider-gallery-gap: 10px;\n  --ve-slider-gallery-place-content: center;\n  --ve-slider-gallery-opacity: 0.5;\n  --ve-slider-gallery-color: var(--ani-silver);\n  --ve-slider-hover-gallery-opacity: 1;\n  --ve-slider-gallery-child-hover-color: var(--ani-sky);\n  --ve-slider-gallery-child-hover-cursor: pointer;\n}\n.show {\n  --ve-slider-show-display: list-item;\n}\n@media (min-width: 1200px) {\n.controls {\n  --ve-slider-controls-opacity: 0;\n}\n.gallery {\n    --ve-slider-gallery-opacity: 0;\n}\n}\n\n";
styleInject(css_248z$a);var css_248z$9 = "\nul[data-v-531dc370] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.slider[data-v-531dc370] {\n  margin: var(--ve-slider-margin);\n  border: var(--ve-slider-border);\n  padding: var(--ve-slider-padding);\n  width: var(--ve-slider-width);\n  text-align: var(--ve-slider-text-align);\n}\n[id*=\"slide-\"][data-v-531dc370] {\n  display: var(--ve-slider-slide-display);\n}\nfigcaption[data-v-531dc370] {\n  padding: var(--ve-slider-figcaption-padding);\n  width: var(--ve-slider-figcaption-width);\n  height: var(--ve-slider-figcaption-height);\n  font-weight: var(--ve-slider-figcaption-font-weight);\n  color: var(--ve-slider-figcaption-color);\n}\n.controls[data-v-531dc370] {\n  display: var(--ve-slider-controls-display);\n  gap: var(--ve-slider-controls-gap);\n  place-content: var(--ve-slider-controls-place-content);\n  opacity: var(--ve-slider-controls-opacity);\n  color: var(--ve-slider-controls-color);\n}\n.slider:hover .controls[data-v-531dc370],\n.slider:focus .controls[data-v-531dc370] {\n  opacity: var(--ve-slider-controls-hover-opacity);\n}\n.controls > *[data-v-531dc370]:hover,\n.controls > *[data-v-531dc370]:focus {\n  color: var(--ve-slider-controls-hover-color);\n}\nbutton[data-v-531dc370] {\n  border: var(--ve-slider-button-border);\n  font-size: var(--ve-slider-button-font-size);\n  background-color: var(--ve-slider-button-background-color);\n  color: var(--ve-slider-button-color);\n}\n.gallery[data-v-531dc370] {\n  display: var(--ve-slider-gallery-display);\n  gap: var(--ve-slider-gallery-gap);\n  place-content: var(--ve-slider-gallery-place-content);\n  opacity: var(--ve-slider-gallery-opacity);\n  color: var(--ve-slider-gallery-color);\n}\n.slider:hover .gallery[data-v-531dc370],\n.slider:focus .gallery[data-v-531dc370] {\n  opacity: var(--ve-slider-hover-gallery-opacity);\n}\n.gallery > *[data-v-531dc370]:hover,\n.gallery > *[data-v-531dc370]:focus {\n  color: var(--ve-slider-gallery-child-hover-color);\n  cursor: var(--ve-slider-gallery-child-hover-cursor);\n}\n.show[data-v-531dc370] {\n  display: var(--ve-slider-show-display);\n}\n";
styleInject(css_248z$9);script$4.render = render$4;
script$4.__scopeId = "data-v-531dc370";var script$3 = {
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
};var _hoisted_1$3 = {
  key: 0
};
var _hoisted_2$3 = {
  key: 0
};
var _hoisted_3$3 = {
  key: 0
};
var _hoisted_4$3 = {
  key: 1
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("table", null, [$options.hasSlot('title') ? (vue.openBlock(), vue.createElementBlock("caption", _hoisted_1$3, [vue.renderSlot(_ctx.$slots, "title", {}, function () {
    return [vue.createTextVNode(vue.toDisplayString($props.title), 1)];
  })])) : vue.createCommentVNode("", true), vue.createElementVNode("thead", null, [vue.createElementVNode("tr", null, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items[0], function (value, key) {
    return vue.openBlock(), vue.createElementBlock("th", {
      key: key
    }, vue.toDisplayString(key === "_id" ? key = "id" : key), 1);
  }), 128)), $options.hasSlot('head') ? (vue.openBlock(), vue.createElementBlock("th", _hoisted_2$3, [vue.renderSlot(_ctx.$slots, "head")])) : vue.createCommentVNode("", true)])]), vue.createElementVNode("tbody", null, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, function (item, index) {
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
      }, function () {
        return [vue.createTextVNode(vue.toDisplayString(value), 1)];
      })]);
    }), 128)), $options.hasSlot('body') ? (vue.openBlock(), vue.createElementBlock("td", _hoisted_3$3, [vue.renderSlot(_ctx.$slots, "body", {
      index: index,
      item: item
    })])) : vue.createCommentVNode("", true)]);
  }), 128))]), $options.hasSlot('foot') ? (vue.openBlock(), vue.createElementBlock("tfoot", _hoisted_4$3, [vue.renderSlot(_ctx.$slots, "foot")])) : vue.createCommentVNode("", true)]);
}var css_248z$8 = "\n/********** TABLE ELT **********/\ntable {\n  --ve-table-display: table;\n  --ve-table-overflow: hidden;\n  --ve-table-table-layout: fixed;\n  --ve-table-margin: 50px auto;\n  --ve-table-border-collapse: separate;\n  --ve-table-border-spacing: 1px;\n  --ve-table-border-radius: 10px;\n  --ve-table-width: 100%;\n  --ve-table-max-width: 100%;\n  --ve-table-font-size: 1.5rem;\n}\ncaption {\n  --ve-table-caption-caption-side: top;\n  --ve-table-caption-margin-bottom: 20px;\n  --ve-table-caption-font-size: 1.5rem;\n  --ve-table-caption-font-weight: bold;\n  --ve-table-caption-color: var(--ani-gray);\n  --ve-table-caption-text-shadow: 1px 1px 2px;\n}\nthead {\n  --ve-table-thead-border-radius: 10px;\n}\ntr {\n  --ve-table-tr-display: flex;\n  --ve-table-tr-flex-flow: column;\n  --ve-table-tr-padding: 20px;\n  --ve-table-tbody-tr-even-background-color: var(--ani-silver);\n  --ve-table-tbody-tr-even-color: var(--ani-black);\n  --ve-table-tbody-tr-odd-background-color: var(--ani-white);\n  --ve-table-tbody-tr-odd-color: var(--ani-slate);\n  --ve-table-tbody-tr-hover-background-color: var(--ani-gray);\n  --ve-table-tbody-tr-hover-color: var(--ani-black);\n}\nth {\n  --ve-table-th-display: none;\n  --ve-table-th-padding: 5px;\n  --ve-table-th-font-size: 1.5rem;\n  --ve-table-th-font-style: italic;\n  --ve-table-th-text-align: center;\n  --ve-table-th-text-transform: uppercase;\n  --ve-table-th-vertical-align: middle;\n  --ve-table-th-background-color: var(--ani-sky);\n  --ve-table-th-color: var(--ani-white);\n}\ntd {\n  --ve-table-td-display: table;\n  --ve-table-td-padding: 5px;\n  --ve-table-td-text-align: center;\n  --ve-table-td-vertical-align: middle;\n  --ve-table-td-word-break: normal;\n  --ve-table-td-cursor: cell;\n}\n@media (min-width: 576px) {\ntable {\n    --ve-table-max-width: 99%;\n}\n}\n@media (min-width: 768px) {\ntable {\n    --ve-table-max-width: 98%;\n}\n}\n@media (min-width: 992px) {\ntable {\n    --ve-table-max-width: 97%;\n}\n}\n@media (min-width: 1200px) {\ntable {\n    --ve-table-max-width: 96%;\n}\ntr {\n    --ve-table-tr-display: table-row;\n}\nth {\n    --ve-table-th-display: table-cell;\n}\ntd {\n    --ve-table-td-display: table-cell;\n}\n}\n@media (min-width: 1600px) {\ntable {\n    --ve-table-max-width: 95%;\n}\n}\n\n";
styleInject(css_248z$8);var css_248z$7 = "\ntable[data-v-743b96ce] {\n  display: var(--ve-table-display);\n  overflow: var(--ve-table-overflow);\n  table-layout: var(--ve-table-table-layout);\n  margin: var(--ve-table-margin);\n  border-collapse: var(--ve-table-border-collapse);\n  border-spacing: var(--ve-table-border-spacing);\n  border-radius: var(--ve-table-border-radius);\n  width: var(--ve-table-width);\n  max-width: var(--ve-table-max-width);\n  font-size: var(--ve-table-font-size);\n}\ncaption[data-v-743b96ce] {\n  caption-side: var(--ve-table-caption-caption-side);\n  margin-bottom: var(--ve-table-caption-margin-bottom);\n  font-size: var(--ve-table-caption-font-size);\n  font-weight: var(--ve-table-caption-font-weight);\n  color: var(--ve-table-caption-color);\n  text-shadow: var(--ve-table-caption-text-shadow);\n}\nthead[data-v-743b96ce] {\n  border-radius: var(--ve-table-thead-border-radius);\n}\ntr[data-v-743b96ce] {\n  display: var(--ve-table-tr-display);\n  flex-flow: var(--ve-table-tr-flex-flow);\n  padding: var(--ve-table-tr-padding);\n}\ntbody tr[data-v-743b96ce]:nth-child(even) {\n  background-color: var(--ve-table-tbody-tr-even-background-color);\n  color: var(--ve-table-tbody-tr-even-color);\n}\ntbody tr[data-v-743b96ce]:nth-child(odd) {\n  background-color: var(--ve-table-tbody-tr-odd-background-color);\n  color: var(--ve-table-tbody-tr-odd-color);\n}\ntbody tr[data-v-743b96ce]:hover,\ntbody tr[data-v-743b96ce]:focus {\n  background-color: var(--ve-table-tbody-tr-hover-background-color);\n  color: var(--ve-table-tbody-tr-hover-color);\n}\nth[data-v-743b96ce] {\n  display: var(--ve-table-th-display);\n  padding: var(--ve-table-th-padding);\n  font-size: var(--ve-table-th-font-size);\n  font-style: var(--ve-table-th-font-style);\n  text-align: var(--ve-table-th-text-align);\n  text-transform: var(--ve-table-th-text-transform);\n  vertical-align: var(--ve-table-th-vertical-align);\n  background-color: var(--ve-table-th-background-color);\n  color: var(--ve-table-th-color);\n}\ntd[data-v-743b96ce] {\n  display: var(--ve-table-td-display);\n  padding: var(--ve-table-td-padding);\n  text-align: var(--ve-table-td-text-align);\n  vertical-align: var(--ve-table-td-vertical-align);\n  word-break: var(--ve-table-td-word-break);;\n  cursor: var(--ve-table-td-cursor);\n}\n\n";
styleInject(css_248z$7);script$3.render = render$3;
script$3.__scopeId = "data-v-743b96ce";var script$2 = {
  name: "CardElt",
  props: {
    isArticle: {
      type: Boolean,
      default: false
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
var _hoisted_2$2 = {
  key: 0
};
var _hoisted_3$2 = {
  key: 1
};
var _hoisted_4$2 = {
  key: 1
};
var _hoisted_5$2 = {
  key: 0
};
var _hoisted_6$1 = {
  key: 1
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.isArticle === true ? (vue.openBlock(), vue.createElementBlock("article", _hoisted_1$2, [vue.createElementVNode("header", null, [vue.renderSlot(_ctx.$slots, "header")]), vue.renderSlot(_ctx.$slots, "body"), $options.hasSlot('aside') ? (vue.openBlock(), vue.createElementBlock("aside", _hoisted_2$2, [vue.renderSlot(_ctx.$slots, "aside")])) : vue.createCommentVNode("", true), $options.hasSlot('footer') ? (vue.openBlock(), vue.createElementBlock("footer", _hoisted_3$2, [vue.renderSlot(_ctx.$slots, "footer")])) : vue.createCommentVNode("", true)])) : (vue.openBlock(), vue.createElementBlock("section", _hoisted_4$2, [vue.createElementVNode("header", null, [vue.renderSlot(_ctx.$slots, "header")]), vue.renderSlot(_ctx.$slots, "body"), $options.hasSlot('aside') ? (vue.openBlock(), vue.createElementBlock("aside", _hoisted_5$2, [vue.renderSlot(_ctx.$slots, "aside")])) : vue.createCommentVNode("", true), $options.hasSlot('footer') ? (vue.openBlock(), vue.createElementBlock("footer", _hoisted_6$1, [vue.renderSlot(_ctx.$slots, "footer")])) : vue.createCommentVNode("", true)]));
}var css_248z$6 = "\n/********** CARD ELT **********/\narticle,\nsection {\n  --ve-card-box-sizing: border-box;\n  --ve-card-margin: auto;\n  --ve-card-border: 1px solid transparent;\n  --ve-card-border-radius: 10px;\n  --ve-card-padding: 10px;\n  --ve-card-width: 95%;\n  --ve-card-background-color: transparent;\n  --ve-card-color: var(--ani-slate);\n}\n\n";
styleInject(css_248z$6);var css_248z$5 = "\narticle[data-v-b5647cd2],\nsection[data-v-b5647cd2] {\n  box-sizing: var(--ve-card-box-sizing);\n  margin: var(--ve-card-margin);\n  border: var(--ve-card-border);\n  border-radius: var(--ve-card-border-radius);\n  padding: var(--ve-card-padding);\n  width: var(--ve-card-width);\n  background-color: var(--ve-card-background-color);\n  color: var(--ve-card-color);\n}\n";
styleInject(css_248z$5);script$2.render = render$2;
script$2.__scopeId = "data-v-b5647cd2";var script$1 = {
  name: "FootElt",
  props: {
    title1: {
      type: String,
      default: "Sites"
    },
    title2: {
      type: String,
      default: "Tools"
    },
    title3: {
      type: String,
      default: "Links"
    }
  },
  methods: {
    hasSlot: function hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
};var _hoisted_1$1 = {
  key: 0
};
var _hoisted_2$1 = {
  key: 0
};
var _hoisted_3$1 = {
  key: 1
};
var _hoisted_4$1 = {
  key: 2
};
var _hoisted_5$1 = {
  key: 1
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("footer", null, [$options.hasSlot('foot1') || $options.hasSlot('foot2') || $options.hasSlot('foot3') ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$1, [$options.hasSlot('foot1') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_2$1, [vue.createElementVNode("section", null, [vue.createElementVNode("h3", null, vue.toDisplayString($props.title1), 1), vue.renderSlot(_ctx.$slots, "foot1")])])) : vue.createCommentVNode("", true), $options.hasSlot('foot2') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_3$1, [vue.createElementVNode("section", null, [vue.createElementVNode("h3", null, vue.toDisplayString($props.title2), 1), vue.renderSlot(_ctx.$slots, "foot2")])])) : vue.createCommentVNode("", true), $options.hasSlot('foot3') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_4$1, [vue.createElementVNode("section", null, [vue.createElementVNode("h3", null, vue.toDisplayString($props.title3), 1), vue.renderSlot(_ctx.$slots, "foot3")])])) : vue.createCommentVNode("", true)])) : vue.createCommentVNode("", true), $options.hasSlot('foot') ? (vue.openBlock(), vue.createElementBlock("aside", _hoisted_5$1, [vue.renderSlot(_ctx.$slots, "foot")])) : vue.createCommentVNode("", true)]);
}var css_248z$4 = "\n/********** FOOT ELT **********/\nfooter {\n  --ve-foot-text-align: center;\n  --ve-foot-child-margin: 0;\n  --ve-foot-child-padding: 0;\n  --ve-foot-li-list-style: none;\n  --ve-foot-a-text-decoration: none;\n  --ve-foot-a-cursor: pointer;\n  --ve-foot-ul-display: flex;\n  --ve-foot-ul-flex-flow: column;\n  --ve-foot-ul-gap: 20px;\n  --ve-foot-ul-place-content: center;\n  --ve-foot-ul-place-items: center;\n  --ve-foot-ul-padding: 20px;\n  --ve-foot-ul-background-color: var(--ani-sky-dark);\n  --ve-foot-title-margin-bottom: 5px;\n  --ve-foot-title-font-size: 2rem;\n  --ve-foot-title-font-family: var(--ani-monospace);\n  --ve-foot-title-color: var(--ani-yellow-light);\n  --ve-foot-section-a-color: var(--ani-white);\n  --ve-foot-section-a-hover-color: var(--ani-yellow-light);\n}\naside {\n  --ve-foot-aside-ul-display: flex;\n  --ve-foot-aside-ul-flex-flow: row;\n  --ve-foot-aside-ul-gap: 10px;\n  --ve-foot-aside-ul-place-content: center;\n  --ve-foot-aside-ul-place-items: center;\n  --ve-foot-aside-ul-padding: 10px;\n  --ve-foot-aside-ul-background-color: var(--ani-white);\n  --ve-foot-aside-a-color: var(--ani-blue);\n  --ve-foot-aside-i-hover-transform: scale(1.2);\n  --ve-foot-aside-i-hover-transition: transform 200ms;\n}\n@media (min-width: 576px) {\nfooter {\n    --ve-foot-ul-flex-flow: row;\n    --ve-foot-ul-place-content: space-around;\n}\n}\n@media (min-width: 768px) {\nfooter {\n    --ve-foot-ul-place-content: space-evenly;\n}\n}\n@media (min-width: 992px) {\nfooter {\n    --ve-foot-ul-place-content: center;\n    --ve-foot-ul-gap: 10%;\n}\n}\n\n";
styleInject(css_248z$4);var css_248z$3 = "\nfooter[data-v-05c2a73e] {\n  text-align: var(--ve-foot-text-align);\n}\nh3[data-v-05c2a73e],\nh4[data-v-05c2a73e],[data-v-05c2a73e] ul {\n  margin: var(--ve-foot-child-margin);\n  padding: var(--ve-foot-child-padding);\n}\n[data-v-05c2a73e] li {\n  list-style: var(--ve-foot-li-list-style);\n}\n[data-v-05c2a73e] a {\n  text-decoration: var(--ve-foot-a-text-decoration);\n  cursor: var(--ve-foot-a-cursor);\n}\n\n/********************* MAIN PART *********************/\nfooter > ul[data-v-05c2a73e] { \n  display: var(--ve-foot-ul-display);\n  flex-flow: var(--ve-foot-ul-flex-flow);\n  gap: var(--ve-foot-ul-gap);\n  place-content: var(--ve-foot-ul-place-content);\n  place-items: var(--ve-foot-ul-place-items);\n  padding: var(--ve-foot-ul-padding);\n  background-color: var(--ve-foot-ul-background-color);\n}\nh3[data-v-05c2a73e],\nh4[data-v-05c2a73e] {\n  margin-bottom: var(--ve-foot-title-margin-bottom);\n  font-size: var(--ve-foot-title-font-size);\n  font-family: var(--ve-foot-title-font-family);\n  color: var(--ve-foot-title-color);\n}\nsection[data-v-05c2a73e] a {\n  color: var(--ve-foot-section-a-color);\n}\nsection[data-v-05c2a73e] a:hover,\nsection[data-v-05c2a73e] a:focus {\n  color: var(--ve-foot-section-a-hover-color);\n}\n\n/********************* SECOND PART *********************/\naside[data-v-05c2a73e] ul {\n  display: var(--ve-foot-aside-ul-display);\n  flex-flow: var(--ve-foot-aside-ul-flex-flow);\n  gap: var(--ve-foot-aside-ul-gap);\n  place-content: var(--ve-foot-aside-ul-place-content);\n  place-items: var(--ve-foot-aside-ul-place-items);\n  padding: var(--ve-foot-aside-ul-padding);\n  background-color: var(--ve-foot-aside-ul-background-color);\n}\naside[data-v-05c2a73e] a {\n  color: var(--ve-foot-aside-a-color);\n}\naside[data-v-05c2a73e] i:hover,\naside[data-v-05c2a73e] i:focus {\n  transform: var(--ve-foot-aside-i-hover-transform);\n  transition: var(--ve-foot-aside-i-hover-transition);\n}\n";
styleInject(css_248z$3);script$1.render = render$1;
script$1.__scopeId = "data-v-05c2a73e";var script = {
  name: "NavElt",
  props: {
    class: {
      type: String,
      default: "navbar"
    },
    items: {
      type: Array
    }
  },
  methods: {
    getNavClass: function getNavClass() {
      if (this.class === "sidebar") {
        return "sidebar";
      }
      return "navbar";
    },
    hasSlot: function hasSlot(name) {
      return this.$slots[name] !== undefined;
    },
    toggleNav: function toggleNav() {
      var nav = document.getElementById("nav");
      var admin = document.getElementById("admin");
      nav.classList.toggle("nav");
      nav.classList.toggle("admin");
      admin.classList.toggle("nav");
      admin.classList.toggle("admin");
    },
    toggleSide: function toggleSide() {
      var side = document.getElementById("side");
      side.classList.toggle("show");
      side.classList.toggle("hide");
    }
  }
};var _withScopeId = function _withScopeId(n) {
  return vue.pushScopeId("data-v-6fe5f294"), n = n(), vue.popScopeId(), n;
};
var _hoisted_1 = {
  key: 0,
  class: "sidebar"
};
var _hoisted_2 = {
  id: "side",
  class: "show"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = ["href", "title"];
var _hoisted_5 = {
  key: 1
};
var _hoisted_6 = {
  key: 0,
  href: "#top"
};
var _hoisted_7 = {
  key: 1,
  class: "navbar"
};
var _hoisted_8 = {
  key: 0,
  href: "/",
  title: "Home"
};
var _hoisted_9 = {
  id: "nav",
  class: "nav"
};
var _hoisted_10 = ["href", "title"];
var _hoisted_11 = {
  key: 1,
  id: "admin",
  class: "admin"
};
var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/vue.createElementVNode("i", {
    class: "fa-solid fa-bars"
  }, null, -1);
});
var _hoisted_13 = [_hoisted_12];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.getNavClass() === 'sidebar' ? (vue.openBlock(), vue.createElementBlock("nav", _hoisted_1, [$options.hasSlot('hide') ? (vue.openBlock(), vue.createElementBlock("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.toggleSide();
    })
  }, [vue.renderSlot(_ctx.$slots, "hide")])) : vue.createCommentVNode("", true), vue.createElementVNode("ul", _hoisted_2, [$options.hasSlot('first') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_3, [vue.renderSlot(_ctx.$slots, "first")])) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, function (item, index) {
    return vue.openBlock(), vue.createElementBlock("li", {
      key: index
    }, [vue.createElementVNode("a", {
      href: "#".concat(item),
      title: item
    }, [vue.renderSlot(_ctx.$slots, "items", {
      item: item,
      index: index
    }, function () {
      return [vue.createTextVNode(vue.toDisplayString(item), 1)];
    })], 8, _hoisted_4)]);
  }), 128)), $options.hasSlot('last') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_5, [vue.renderSlot(_ctx.$slots, "last")])) : vue.createCommentVNode("", true), vue.createElementVNode("li", null, [$options.hasSlot('top') ? (vue.openBlock(), vue.createElementBlock("a", _hoisted_6, [vue.renderSlot(_ctx.$slots, "top")])) : vue.createCommentVNode("", true)])])])) : (vue.openBlock(), vue.createElementBlock("nav", _hoisted_7, [$options.hasSlot('brand') ? (vue.openBlock(), vue.createElementBlock("a", _hoisted_8, [vue.renderSlot(_ctx.$slots, "brand")])) : vue.createCommentVNode("", true), vue.createElementVNode("ul", _hoisted_9, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, function (item, index) {
    return vue.openBlock(), vue.createElementBlock("li", {
      key: index
    }, [vue.createElementVNode("a", {
      href: item.href,
      title: item.name
    }, [vue.renderSlot(_ctx.$slots, "items", {
      item: item,
      index: index
    }, function () {
      return [vue.createElementVNode("i", {
        class: vue.normalizeClass("fa-".concat(item.type, " fa-").concat(item.icon, " fa-fw"))
      }, null, 2)];
    }), vue.createElementVNode("b", null, vue.toDisplayString(item.name), 1)], 8, _hoisted_10)]);
  }), 128))]), $options.hasSlot('admin') ? (vue.openBlock(), vue.createElementBlock("aside", _hoisted_11, [vue.renderSlot(_ctx.$slots, "admin")])) : vue.createCommentVNode("", true), vue.createElementVNode("button", {
    type: "button",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.toggleNav();
    }),
    title: "Menu"
  }, _hoisted_13)]));
}var css_248z$2 = "\n/********** NAV ELT **********/\n:root {\n  --ve-nav-margin: 20px;\n  --ve-nav-height: 50px;\n}\n.navbar {\n  --ve-nav-display: flex;\n  --ve-nav-place-content: space-between;\n  --ve-nav-place-items: center;\n  --ve-nav-position: fixed;\n  --ve-nav-top: 0;\n  --ve-nav-right: 0;\n  --ve-nav-bottom: unset;\n  --ve-nav-left: 0;\n  --ve-nav-z-index: 1000;\n  --ve-nav-background-color: var(--ani-sky-dark);\n  --ve-nav-color: var(--ani-white);\n  --ve-nav-a-padding: 10px;\n  --ve-nav-a-color: var(--ani-white);\n  --ve-nav-a-cursor: pointer;\n  --ve-nav-ul-display: flex;\n  --ve-nav-ul-place-items: center;\n  --ve-nav-ul-margin: 0;\n  --ve-nav-ul-padding: 0;\n  --ve-nav-ul-list-style: none;\n  --ve-nav-ul-a-display: flex;\n  --ve-nav-ul-a-not-i-display: none;\n  --ve-nav-ul-a-flex-direction: column;\n  --ve-nav-ul-a-hover-color: var(--ani-yellow-light);\n  --ve-nav-ul-a-hover-transform: scale(0.9);\n  --ve-nav-last-ul-a-hover-color: var(--ani-red-light);\n  --ve-nav-button-background-color: transparent;\n  --ve-nav-button-border: none;\n  --ve-nav-button-cursor: pointer;\n  --ve-nav-i-place-self: center;\n}\n.admin {\n  --ve-nav-hide-display: none;\n}\n.nav {\n  --ve-nav-show-display: flex;\n}\n.sidebar {\n  --ve-side-display: flex;\n  --ve-side-flex-flow: column;\n  --ve-side-position: fixed;\n  --ve-side-top: calc(var(--ve-nav-height) + 10px);\n  --ve-side-left: 2px;\n  --ve-side-z-index: 10;\n  --ve-side-width: auto;\n  --ve-side-ul-display: flex;\n  --ve-side-ul-flex-flow: column;\n  --ve-side-a-display: flex;\n  --ve-side-a-place-content: center;\n  --ve-side-a-place-items: center;\n  --ve-side-a-margin: 5px;\n  --ve-side-a-border: none;\n  --ve-side-a-border-radius: 20px;\n  --ve-side-a-outline: none;\n  --ve-side-a-padding: 5px;\n  --ve-side-a-width: 100%;\n  --ve-side-a-background-color: var(--ani-white-lighter);\n  --ve-side-a-color: var(--ani-sky);\n  --ve-side-a-cursor: crosshair;\n  --ve-side-a-hover-border-radius: 10px;\n  --ve-side-a-hover-background-color: var(--ani-sky-darker);\n  --ve-side-a-hover-color: var(--ani-white);\n  --ve-side-a-hover-transform: scale(1.1);\n  --ve-side-a-hover-transition: all 500ms;\n}\n.hide {\n  --ve-side-hide-display: none;\n}\n.show {\n  --ve-side-show-display: flex;\n}\n@media (min-width: 576px) {\n.navbar {\n    --ve-nav-place-content: space-around;\n}\n}\n@media (min-width: 768px) {\n:root {\n    --ve-nav-margin: 40px;\n    --ve-nav-height: 80px;\n}\n.navbar {\n    --ve-nav-button-display: none;\n    --ve-nav-ul-a-not-i-display: flex;\n}\n.admin {\n    --ve-nav-hide-display: flex;\n}\n}\n\n";
styleInject(css_248z$2);var css_248z$1 = "\n[id=\"app\"] {\n  margin-top: calc(var(--ve-nav-height) + var(--ve-nav-margin));\n}\n";
styleInject(css_248z$1);var css_248z = "\n.navbar[data-v-6fe5f294] {\n  display: var(--ve-nav-display);\n  place-content: var(--ve-nav-place-content);\n  place-items: var(--ve-nav-place-items);\n  position: var(--ve-nav-position);\n  top: var(--ve-nav-top);\n  right: var(--ve-nav-right);\n  bottom: var(--ve-nav-bottom);\n  left: var(--ve-nav-left);\n  z-index: var(--ve-nav-z-index);\n  height: var(--ve-nav-height);\n  background-color: var(--ve-nav-background-color);\n  color: var(--ve-nav-color);\n}\n.navbar[data-v-6fe5f294] a,\n.navbar[data-v-6fe5f294] button {\n  padding: var(--ve-nav-a-padding);\n  color: var(--ve-nav-a-color);\n  cursor: var(--ve-nav-a-cursor);\n}\n.navbar[data-v-6fe5f294] ul {\n  display: var(--ve-nav-ul-display);\n  place-items: var(--ve-nav-ul-place-items);\n  margin: var(--ve-nav-ul-margin);\n  padding: var(--ve-nav-ul-padding);\n  list-style: var(--ve-nav-ul-list-style);\n}\n.navbar ul a[data-v-6fe5f294],\n.navbar ul button[data-v-6fe5f294] {\n  display: var(--ve-nav-ul-a-display);\n}\n.navbar ul a[data-v-6fe5f294] :not(i),\n.navbar ul button[data-v-6fe5f294] :not(i) {\n  display: var(--ve-nav-ul-a-not-i-display);\n}\n.navbar[data-v-6fe5f294] ul a,\n.navbar[data-v-6fe5f294] ul button {\n  flex-direction: var(--ve-nav-ul-a-flex-direction);\n}\n.navbar ul a[data-v-6fe5f294]:hover,\n.navbar ul a[data-v-6fe5f294]:focus,\n.navbar ul button[data-v-6fe5f294]:hover,\n.navbar ul button[data-v-6fe5f294]:focus {\n  color: var(--ve-nav-ul-a-hover-color) !important;\n  transform: var(--ve-nav-ul-a-hover-transform) !important;\n}\n.navbar[data-v-6fe5f294] ul:last-of-type a:hover,\n.navbar[data-v-6fe5f294] ul:last-of-type a:focus,\n.navbar[data-v-6fe5f294] ul:last-of-type button:hover,\n.navbar[data-v-6fe5f294] ul:last-of-type button:focus {\n  color: var(--ve-nav-last-ul-a-hover-color);\n}\n.navbar[data-v-6fe5f294] button {\n  background-color: var(--ve-nav-button-background-color);\n  border: var(--ve-nav-button-border);\n  cursor: var(--ve-nav-button-cursor);\n}\n.navbar[data-v-6fe5f294] i {\n  place-self: var(--ve-nav-i-place-self);\n}\n.admin[data-v-6fe5f294] {\n  display: var(--ve-nav-hide-display) !important;\n}\n.nav[data-v-6fe5f294] {\n  display: var(--ve-nav-show-display);\n}\n.sidebar[data-v-6fe5f294] {\n  display: var(--ve-side-display);\n  flex-flow: var(--ve-side-flex-flow);\n  position: var(--ve-side-position);\n  top: var(--ve-side-top);\n  left: var(--ve-side-left);\n  z-index: var(--ve-side-z-index);\n  width: var(--ve-side-width);\n}\n.sidebar ul[data-v-6fe5f294] {\n  display: var(--ve-side-ul-display);\n  flex-flow: var(--ve-side-ul-flex-flow);\n}\n.sidebar[data-v-6fe5f294] a,\n.sidebar button[data-v-6fe5f294] {\n  display: var(--ve-side-a-display);\n  place-content: var(--ve-side-a-place-content);\n  place-items: var(--ve-side-a-place-items);\n  margin: var(--ve-side-a-margin);\n  border: var(--ve-side-a-border);\n  border-radius: var(--ve-side-a-border-radius);\n  outline: var(--ve-side-a-outline);\n  padding: var(--ve-side-a-padding);\n  width: var(--ve-side-a-width);\n  background-color: var(--ve-side-a-background-color);\n  color: var(--ve-side-a-color);\n  cursor: var(--ve-side-a-cursor);\n}\n.sidebar[data-v-6fe5f294] a:hover,\n.sidebar[data-v-6fe5f294] a:focus,\n.sidebar button[data-v-6fe5f294]:hover,\n.sidebar button[data-v-6fe5f294]:focus {\n  border-radius: var(--ve-side-a-hover-border-radius);\n  color: var(--ve-side-a-hover-color);\n  background-color: var(--ve-side-a-hover-background-color);\n  transform: var(--ve-side-a-hover-transform);\n  transition: var(--ve-side-a-hover-transition);\n}\n.hide[data-v-6fe5f294] {\n  display: var(--ve-side-hide-display) !important;\n}\n.show[data-v-6fe5f294] {\n  display: var(--ve-side-show-display);\n}\n@media (min-width: 768px) {\n.navbar > button[data-v-6fe5f294] {\n    display: var(--ve-nav-button-display);\n}\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-6fe5f294";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,BtnElt:script$8,FieldElt:script$7,MediaElt:script$6,ListElt:script$5,SliderElt:script$4,TableElt:script$3,CardElt:script$2,FootElt:script$1,NavElt:script});var install = function installVueElt(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];
    app.component(componentName, component);
  });
};var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,BtnElt:script$8,FieldElt:script$7,MediaElt:script$6,ListElt:script$5,SliderElt:script$4,TableElt:script$3,CardElt:script$2,FootElt:script$1,NavElt:script});Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    componentName = _ref2[0],
    component = _ref2[1];
  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;