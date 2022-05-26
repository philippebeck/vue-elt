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
}var script$4 = {
  name: "BtnElt",
  props: {
    content: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "link"
    },
    value: {
      type: String,
      default: null
    }
  },
  methods: {
    getBtnType: function getBtnType() {
      if (this.type === "button" || this.type === "submit" || this.type === "reset") {
        return "button";
      } else {
        return "link";
      }
    }
  }
};var _hoisted_1$4 = ["id", "name", "title", "type", "value"];
var _hoisted_2$3 = ["href", "id", "title"];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.getBtnType() === 'button' ? (vue.openBlock(), vue.createElementBlock("button", {
    key: 0,
    id: $props.id,
    name: $props.name,
    title: $props.title,
    type: $props.type,
    value: $props.value
  }, [vue.renderSlot(_ctx.$slots, "button"), vue.createTextVNode(" " + vue.toDisplayString($props.content), 1)], 8, _hoisted_1$4)) : (vue.openBlock(), vue.createElementBlock("a", {
    key: 1,
    href: $props.href,
    id: $props.id,
    title: $props.title
  }, [vue.renderSlot(_ctx.$slots, "link"), vue.createTextVNode(" " + vue.toDisplayString($props.content), 1)], 8, _hoisted_2$3));
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
}var css_248z$5 = "\n:root {\n  /* Colors */\n  --black: 0,0%,0%;       /* Black */\n  --blue: 210,100%,56%;   /* DodgerBlue */\n  --cyan: 203,92%,75%;    /* LightSkyBlue */\n  --gray: 0,0%,41%;       /* DimGray */\n  --green: 120,61%,34%;   /* ForestGreen */\n  --lime: 120,61%,50%;    /* LimeGreen */\n  --maroon: 25,76%,31%;   /* SaddleBrown */\n  --navy: 240,64%,27%;    /* MidnightBlue */\n  --orange: 33,100%,50%;  /* DarkOrange */\n  --purple: 271,76%,53%;  /* BlueViolet */\n  --red: 348,83%,47%;     /* Crimson */\n  --silver: 0,0%,86%;     /* GainsBoro */\n  --teal: 177,70%,41%;    /* LightSeaGreen */\n  --violet: 249,80%,67%;  /* MediumSlateBlue */\n  --white: 240,100%,99%;  /* GhostWhite */\n  --yellow: 51,100%,50%;  /* Gold */\n  /* Fonts */\n  --sans-serif: sans-serif;\n  --serif: serif;\n  --monospace: monospace;\n  --cursive: cursive;\n  --fantasy: fantasy;\n  /* Transparency */\n  --lighter: 0.1;\n  --light: 0.3;\n  --dark: 0.7;\n  --darker: 0.9;\n}\n";
styleInject(css_248z$5);var css_248z$4 = "\na[data-v-4e80139e],\nbutton[data-v-4e80139e] {\n  display: inline-block;\n  margin: 10px;\n  border: solid medium hsl(var(--black));\n  border-radius: 10px;\n  padding: 5px 10px;\n  font-family: var(--monospace);\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  background-color: hsl(var(--black));\n  color: hsl(var(--white));\n  cursor: pointer;\n}\na[data-v-4e80139e]:hover,\na[data-v-4e80139e]:focus,\nbutton[data-v-4e80139e]:hover,\nbutton[data-v-4e80139e]:focus {\n  border-radius: 5px;\n  background-color: hsl(var(--white));\n  color: hsl(var(--black));\n  box-shadow: inset 0 0 5px 2px;\n  transition: all 500ms linear;\n}\na > *[data-v-4e80139e],\nbutton > *[data-v-4e80139e] {\n  display: block;\n  margin: auto;\n}\n.blue[data-v-4e80139e] {\n  border-color: hsl(var(--blue));\n  background-color: hsl(var(--blue));\n  color: hsl(var(--white));\n}\n.blue[data-v-4e80139e]:hover,\n.blue[data-v-4e80139e]:focus {\n  background-color: hsl(var(--white));\n  color: hsl(var(--blue));\n}\n.cyan[data-v-4e80139e] {\n  border-color: hsl(var(--cyan));\n  background-color: hsl(var(--cyan));\n  color: hsl(var(--white));\n}\n.cyan[data-v-4e80139e]:hover,\n.cyan[data-v-4e80139e]:focus {\n  background-color: hsl(var(--white));\n  color: hsl(var(--cyan));\n}\n.gray[data-v-4e80139e] {\n  border-color: hsl(var(--gray));\n  background-color: hsl(var(--gray));\n  color: hsl(var(--white));\n}\n.gray[data-v-4e80139e]:hover,\n.gray[data-v-4e80139e]:focus {\n  background-color: hsl(var(--white));\n  color: hsl(var(--gray));\n}\n.green[data-v-4e80139e] {\n  border-color: hsl(var(--green));\n  background-color: hsl(var(--green));\n  color: hsl(var(--white));\n}\n.green[data-v-4e80139e]:hover,\n.green[data-v-4e80139e]:focus {\n  background-color: hsl(var(--white));\n  color: hsl(var(--green));\n}\n.lime[data-v-4e80139e] {\n  border-color: hsl(var(--lime));\n  background-color: hsl(var(--lime));\n  color: hsl(var(--white));\n}\n.lime[data-v-4e80139e]:hover,\n.lime[data-v-4e80139e]:focus {\n  background-color: hsl(var(--white));\n  color: hsl(var(--lime));\n}\n.maroon[data-v-4e80139e] {\n  border-color: hsl(var(--maroon));\n  background-color: hsl(var(--maroon));\n  color: hsl(var(--white));\n}\n.maroon[data-v-4e80139e]:hover,\n.maroon[data-v-4e80139e]:focus {\n  background-color: hsl(var(--white));\n  color: hsl(var(--maroon));\n}\n.navy[data-v-4e80139e] {\n  border-color: hsl(var(--navy));\n  background-color: hsl(var(--navy));\n  color: hsl(var(--white));\n}\n.navy[data-v-4e80139e]:hover,\n.navy[data-v-4e80139e]:focus {\n  background-color: hsl(var(--white));\n  color: hsl(var(--navy));\n}\n.orange[data-v-4e80139e] {\n  border-color: hsl(var(--orange));\n  background-color: hsl(var(--orange));\n  color: hsl(var(--white));\n}\n.orange[data-v-4e80139e]:hover,\n.orange[data-v-4e80139e]:focus {\n  background-color: hsl(var(--white));\n  color: hsl(var(--orange));\n}\n.purple[data-v-4e80139e] {\n  border-color: hsl(var(--purple));\n  background-color: hsl(var(--purple));\n  color: hsl(var(--white));\n}\n.purple[data-v-4e80139e]:hover,\n.purple[data-v-4e80139e]:focus {\n  background-color: hsl(var(--white));\n  color: hsl(var(--purple));\n}\n.red[data-v-4e80139e] {\n  border-color: hsl(var(--red));\n  background-color: hsl(var(--red));\n  color: hsl(var(--white));\n}\n.red[data-v-4e80139e]:hover,\n.red[data-v-4e80139e]:focus {\n  background-color: hsl(var(--white));\n  color: hsl(var(--red));\n}\n.silver[data-v-4e80139e] {\n  border-color: hsl(var(--silver));\n  background-color: hsl(var(--silver));\n  color: hsl(var(--gray));\n}\n.silver[data-v-4e80139e]:hover,\n.silver[data-v-4e80139e]:focus {\n  background-color: hsl(var(--gray));\n  color: hsl(var(--silver));\n}\n.teal[data-v-4e80139e] {\n  border-color: hsl(var(--teal));\n  background-color: hsl(var(--teal));\n  color: hsl(var(--white));\n}\n.teal[data-v-4e80139e]:hover,\n.teal[data-v-4e80139e]:focus {\n  background-color: hsl(var(--white));\n  color: hsl(var(--teal));\n}\n.violet[data-v-4e80139e] {\n  border-color: hsl(var(--violet));\n  background-color: hsl(var(--violet));\n  color: hsl(var(--white));\n}\n.violet[data-v-4e80139e]:hover,\n.violet[data-v-4e80139e]:focus {\n  background-color: hsl(var(--white));\n  color: hsl(var(--violet));\n}\n.yellow[data-v-4e80139e] {\n  border-color: hsl(var(--yellow));\n  background-color: hsl(var(--yellow));\n  color: hsl(var(--gray));\n}\n.yellow[data-v-4e80139e]:hover,\n.yellow[data-v-4e80139e]:focus {\n  background-color: hsl(var(--gray));\n  color: hsl(var(--yellow));\n}\n";
styleInject(css_248z$4);script$4.render = render$4;
script$4.__scopeId = "data-v-4e80139e";var script$3 = {
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
}var css_248z$3 = "\nfieldset[data-v-c2495f26] {\n  --field-max-width: 400px;\n\n  display: flex;\n  flex-wrap: wrap;\n  place-items: center;\n  margin: auto;\n  border: none;\n  padding: 0;\n  max-width: var(--field-max-width);\n  transition: max-width 2s;\n  text-align: center;\n}\nfieldset > *[data-v-c2495f26] {\n  box-sizing: border-box;\n  margin: 5px;\n  padding: 5px;\n}\nlegend[data-v-c2495f26] {\n  width: 93%;\n  font-size: 1.2rem;\n  color: hsl(var(--gray));\n}\nlabel[data-v-c2495f26] {\n  width: 90%;\n  visibility: hidden;\n  font-size: 0.8rem;\n  font-style: italic;\n  color: hsl(var(--teal));\n}\ninput[data-v-c2495f26],\nselect[data-v-c2495f26],\ntextarea[data-v-c2495f26] {\n  border: medium solid hsl(var(--blue));\n  border-radius: 10px;\n  outline: none;\n  width: 100%;\n  line-height: 1.8;\n  background-color: hsl(var(--white));\n}\nfieldset:hover legend[data-v-c2495f26] {\n  color: hsl(var(--black));\n}\nfieldset:hover > input[data-v-c2495f26],\nfieldset:hover > select[data-v-c2495f26],\nfieldset:hover > textarea[data-v-c2495f26],\ninput[data-v-c2495f26]:focus,\nselect[data-v-c2495f26]:focus,\ntextarea[data-v-c2495f26]:focus {\n  border: medium solid hsl(var(--lime));\n  border-radius: 0;\n  background-color: hsl(var(--silver));\n  transition: all 1s;\n}\nfieldset:hover > label[data-v-c2495f26],\ninput:focus + label[data-v-c2495f26],\nselect:focus + label[data-v-c2495f26],\ntextarea:focus + label[data-v-c2495f26] {\n  visibility: visible;\n  transform: scale(1.1);\n  transition: all 1s;\n}\n";
styleInject(css_248z$3);script$3.render = render$3;
script$3.__scopeId = "data-v-c2495f26";var script$2 = {
  name: "FootElt",
  props: {
    title1: {
      type: String,
      default: "Sites"
    },
    title2: {
      type: String,
      default: "Links"
    },
    title3: {
      type: String,
      default: "Tools"
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
  key: 0
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("footer", null, [vue.createElementVNode("ul", null, [vue.createElementVNode("li", null, [vue.createElementVNode("section", null, [vue.createElementVNode("h3", null, vue.toDisplayString($props.title1), 1), vue.renderSlot(_ctx.$slots, "foot1")])]), $options.hasSlot('foot2') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_1$2, [vue.createElementVNode("section", null, [vue.createElementVNode("h3", null, vue.toDisplayString($props.title2), 1), vue.renderSlot(_ctx.$slots, "foot2")])])) : vue.createCommentVNode("", true), $options.hasSlot('foot3') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_2$1, [vue.createElementVNode("section", null, [vue.createElementVNode("h3", null, vue.toDisplayString($props.title3), 1), vue.renderSlot(_ctx.$slots, "foot3")])])) : vue.createCommentVNode("", true)]), $options.hasSlot('foot') ? (vue.openBlock(), vue.createElementBlock("aside", _hoisted_3$1, [vue.renderSlot(_ctx.$slots, "foot")])) : vue.createCommentVNode("", true)]);
}var css_248z$2 = "\nfooter[data-v-70f38f5f] {\n  margin-top: 20px;\n  text-align: center;\n}\nh3[data-v-70f38f5f],[data-v-70f38f5f] ul {\n  margin: 0;\n  padding: 0;\n}\n[data-v-70f38f5f] li {\n  list-style-type: none;\n}\n[data-v-70f38f5f] a {\n  text-decoration: none;\n}\n\n/********************* MAIN PART *********************/\nfooter > ul[data-v-70f38f5f] { \n  display: flex;\n  flex-direction: column;\n  place-items: center;\n  gap: 20px;\n  padding: 20px;\n  background-color: hsl(var(--violet));\n}\nh3[data-v-70f38f5f] {\n  margin-bottom: 5px;\n  font-size: 1.5rem;\n  font-family: monospace;\n  color: hsl(var(--white));\n}\nsection[data-v-70f38f5f] a {\n  color: hsl(var(--lime));\n}\n\n/********************* SECOND PART *********************/\naside[data-v-70f38f5f] >  ul {\n  display: flex;\n  flex-direction: row;\n  place-content: center;\n  gap: 10px;\n  padding: 10px;\n  background-color: hsl(var(--white));\n}\naside[data-v-70f38f5f] a {\n  color: hsl(var(--blue));\n}\n\n/********************* RESPONSIVE *********************/\n@media (min-width: 576px) {\nfooter > ul[data-v-70f38f5f] {\n    flex-direction: row;\n    place-content: space-around;\n}\n}\n@media (min-width: 768px) {\nfooter > ul[data-v-70f38f5f] {\n    place-content: space-evenly;\n}\n}\n@media (min-width: 992px) {\nfooter > ul[data-v-70f38f5f] {\n    place-content: center;\n    gap: 10%;\n}\n}\n";
styleInject(css_248z$2);script$2.render = render$2;
script$2.__scopeId = "data-v-70f38f5f";var script$1 = {
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
    }, function () {
      return [vue.createTextVNode(vue.toDisplayString(item), 1)];
    }), $options.isNested() ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$1, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, function (value, key) {
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
  }), 128))]);
}var css_248z$1 = "\nul[data-v-62f0d706] {\n  margin: 20px 0;\n  padding: 0;\n  list-style: none;\n  text-align: center;\n}\nli > ul[data-v-62f0d706] {\n  display: flex;\n  flex-wrap: wrap;\n  place-content: center;\n}\n";
styleInject(css_248z$1);script$1.render = render$1;
script$1.__scopeId = "data-v-62f0d706";var script = {
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
  return vue.openBlock(), vue.createElementBlock("table", null, [$options.hasSlot('title') ? (vue.openBlock(), vue.createElementBlock("caption", _hoisted_1, [vue.renderSlot(_ctx.$slots, "title", {}, function () {
    return [vue.createTextVNode(vue.toDisplayString($props.title), 1)];
  })])) : vue.createCommentVNode("", true), vue.createElementVNode("thead", null, [vue.createElementVNode("tr", null, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items[0], function (value, key) {
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
      }, function () {
        return [vue.createTextVNode(vue.toDisplayString(value), 1)];
      })]);
    }), 128)), $options.hasSlot('body') ? (vue.openBlock(), vue.createElementBlock("td", _hoisted_3, [vue.renderSlot(_ctx.$slots, "body", {
      index: index,
      item: item
    })])) : vue.createCommentVNode("", true)]);
  }), 128))]), $options.hasSlot('foot') ? (vue.openBlock(), vue.createElementBlock("tfoot", _hoisted_4, [vue.renderSlot(_ctx.$slots, "foot")])) : vue.createCommentVNode("", true)]);
}var css_248z = "\ntable[data-v-fc325d1a] {\n  --table-box-shadow: 5px 5px 5px 5px hsl(var(--silver));\n\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 10px;\n  margin: 20px auto;\n  width: auto;\n  max-width: 100%;\n  font-size: 1rem;\n  box-shadow: var(--table-box-shadow);\n}\ncaption[data-v-fc325d1a] {\n  caption-side: top;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: hsl(var(--gray));\n  text-shadow: 1px 1px 2px;\n}\nth[data-v-fc325d1a] {\n  display: table-column;\n  font-size: 1.2rem;\n  font-style: italic;\n  background-color: hsl(var(--blue));\n  color: hsl(var(--white));\n}\nth[data-v-fc325d1a],\ntd[data-v-fc325d1a] {\n  padding: 5px;\n  text-align: center;\n  vertical-align: middle;\n}\ntd[data-v-fc325d1a] {\n  display: table-row;\n  word-break: normal;\n  cursor: cell;\n}\ntbody tr[data-v-fc325d1a]:nth-child(even) {\n  background-color: hsl(var(--silver));\n  color: hsl(var(--black));\n}\ntbody tr[data-v-fc325d1a]:nth-child(odd) {\n  background-color: hsl(var(--white));\n  color: hsl(var(--gray));\n}\ntbody tr[data-v-fc325d1a]:hover,\ntbody tr[data-v-fc325d1a]:focus {\n  background-color: hsl(var(--cyan));\n  color: hsl(var(--navy));\n}\n@media (min-width: 576px) {\ntable[data-v-fc325d1a] {\n    max-width: 95%;\n}\n}\n@media (min-width: 768px) {\ntable[data-v-fc325d1a] {\n    max-width: 90%;\n}\nth[data-v-fc325d1a],\n  td[data-v-fc325d1a] {\n    display: table-cell;\n}\n}\n@media (min-width: 992px) {\ntable[data-v-fc325d1a] {\n    max-width: 85%;\n}\n}\n@media (min-width: 1200px) {\ntable[data-v-fc325d1a] {\n    max-width: 80%;\n}\n}\n@media (min-width: 1600px) {\ntable[data-v-fc325d1a] {\n    max-width: 75%;\n}\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-fc325d1a";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,BtnElt:script$4,FieldElt:script$3,FootElt:script$2,ListElt:script$1,TableElt:script});var install = function installVueElt(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
};var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,BtnElt:script$4,FieldElt:script$3,FootElt:script$2,ListElt:script$1,TableElt:script});Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;