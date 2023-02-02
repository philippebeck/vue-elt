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
}var script$8 = {
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
      }

      return "link";
    }
  }
};var _hoisted_1$8 = ["id", "name", "title", "type", "value"];
var _hoisted_2$8 = ["href", "id", "title"];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.getBtnType() === 'button' ? (vue.openBlock(), vue.createElementBlock("button", {
    key: 0,
    id: $props.id,
    name: $props.name,
    title: $props.title,
    type: $props.type,
    value: $props.value
  }, [vue.renderSlot(_ctx.$slots, "btn"), vue.createTextVNode(" " + vue.toDisplayString($props.content), 1)], 8, _hoisted_1$8)) : (vue.openBlock(), vue.createElementBlock("a", {
    key: 1,
    href: $props.href,
    id: $props.id,
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
}var css_248z$9 = "\na[data-v-5e33533a],\nbutton[data-v-5e33533a] {\n  --btn-display: inline-block;\n  --btn-margin: 10px;\n  --btn-border: solid 2px var(--white);\n  --btn-border-radius: 10px;\n  --btn-padding: 5px 10px;\n  --btn-font-family: var(--monospace);\n  --btn-font-size: 1.2rem;\n  --btn-font-weight: bold;\n  --btn-text-align: center;\n  --btn-text-decoration: none;\n  --btn-background-color: var(--black);\n  --btn-color: var(--white);\n  --btn-cursor: pointer;\n\n  display: var(--btn-display);\n  margin: var(--btn-margin);\n  border: var(--btn-border);\n  border-radius: var(--btn-border-radius);\n  padding: var(--btn-padding);\n  font-family: var(--btn-font-family);\n  font-size: var(--btn-font-size);\n  font-weight: var(--btn-font-weight);\n  text-align: var(--btn-text-align);\n  text-decoration: var(--btn-text-decoration);\n  background-color: var(--btn-background-color);\n  color: var(--btn-color);\n  cursor: var(--btn-cursor);\n}\na[data-v-5e33533a]:hover,\na[data-v-5e33533a]:focus,\nbutton[data-v-5e33533a]:hover,\nbutton[data-v-5e33533a]:focus {\n  --btn-hover-border-color: var(--black);\n  --btn-hover-border-radius: 5px;\n  --btn-hover-background-color: var(--white);\n  --btn-hover-color: var(--black);\n  --btn-hover-box-shadow: inset 0 0 5px 2px;\n  --btn-hover-transition: all 200ms;\n\n  border-color: var(--btn-hover-border);\n  border-radius: var(--btn-hover-border-radius);\n  background-color: var(--btn-hover-background-color);\n  color: var(--btn-hover-color);\n  box-shadow: var(--btn-hover-box-shadow);\n  transition: var(--btn-hover-transition);\n}\na > *[data-v-5e33533a],\nbutton > *[data-v-5e33533a] {\n  --btn-child-display: block;\n  --btn-child-margin: auto;\n\n  display: var(--btn-child-display);\n  margin: var(--btn-child-margin);\n}\n\n/* RED */\n.btn-red[data-v-5e33533a] {\n  background-color: var(--red);\n}\n.btn-red[data-v-5e33533a]:hover,\n.btn-red[data-v-5e33533a]:focus {\n  border-color: var(--red);\n  color: var(--red);\n}\n\n/* ORANGE */\n.btn-orange[data-v-5e33533a] {\n  background-color: var(--orange);\n}\n.btn-orange[data-v-5e33533a]:hover,\n.btn-orange[data-v-5e33533a]:focus {\n  border-color: var(--orange);\n  color: var(--orange);\n}\n\n/* YELLOW */\n.btn-yellow[data-v-5e33533a] {\n  background-color: var(--yellow);\n}\n.btn-yellow[data-v-5e33533a]:hover,\n.btn-yellow[data-v-5e33533a]:focus {\n  border-color: var(--yellow);\n  color: var(--yellow);\n}\n\n/* GREEN */\n.btn-green[data-v-5e33533a] {\n  background-color: var(--green);\n}\n.btn-green[data-v-5e33533a]:hover,\n.btn-green[data-v-5e33533a]:focus {\n  border-color: var(--green);\n  color: var(--green);\n}\n\n/* SKY */\n.btn-sky[data-v-5e33533a] {\n  background-color: var(--sky);\n}\n.btn-sky[data-v-5e33533a]:hover,\n.btn-sky[data-v-5e33533a]:focus {\n  border-color: var(--sky);\n  color: var(--sky);\n}\n\n/* BLUE */\n.btn-blue[data-v-5e33533a] {\n  background-color: var(--blue);\n}\n.btn-blue[data-v-5e33533a]:hover,\n.btn-blue[data-v-5e33533a]:focus {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n\n/* VIOLET */\n.btn-violet[data-v-5e33533a] {\n  background-color: var(--violet);\n}\n.btn-violet[data-v-5e33533a]:hover,\n.btn-violet[data-v-5e33533a]:focus {\n  border-color: var(--violet);\n  color: var(--violet);\n}\n\n/* PINK */\n.btn-pink[data-v-5e33533a] {\n  background-color: var(--pink);\n}\n.btn-pink[data-v-5e33533a]:hover,\n.btn-pink[data-v-5e33533a]:focus {\n  border-color: var(--pink);\n  color: var(--pink);\n}\n";
styleInject(css_248z$9);script$8.render = render$8;
script$8.__scopeId = "data-v-5e33533a";var script$7 = {
  name: "FieldElt",
  props: {
    cols: {
      type: Number,
      default: 20
    },
    id: String,
    info: String,
    list: Array,
    max: {
      type: Number,
      default: 50
    },
    min: {
      type: Number,
      default: 8
    },
    model: {
      prop: "value",
      event: "update"
    },
    name: String,
    required: {
      type: String,
      default: "required"
    },
    rows: {
      type: Number,
      default: 5
    },
    step: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: "text"
    },
    value: [String, Number]
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
          fieldType = "number";
          break;

        case "checkbox":
        case "radio":
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
var _hoisted_3$7 = ["id", "max", "min", "name", "step", "type", "value", "required"];
var _hoisted_4$7 = ["id", "name", "type", "value", "required"];
var _hoisted_5$4 = ["id", "name", "placeholder", "required"];
var _hoisted_6$4 = ["value"];
var _hoisted_7$3 = {
  key: 1
};
var _hoisted_8$3 = ["value"];
var _hoisted_9$3 = ["id", "name", "cols", "maxlength", "minlength", "placeholder", "rows", "value", "required"];
var _hoisted_10$2 = ["id", "maxlength", "minlength", "name", "placeholder", "type", "value", "required"];
var _hoisted_11$1 = ["for"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("fieldset", {
    title: $props.info
  }, [$options.hasSlot('legend') ? (vue.openBlock(), vue.createElementBlock("legend", _hoisted_2$7, [vue.renderSlot(_ctx.$slots, "legend")])) : vue.createCommentVNode("", true), $options.getFieldType() === 'number' ? (vue.openBlock(), vue.createElementBlock("input", {
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
    }),
    required: $props.required
  }, null, 40, _hoisted_3$7)) : $options.getFieldType() === 'special' ? (vue.openBlock(), vue.createElementBlock("input", {
    key: 2,
    id: $props.id,
    name: $props.name,
    type: $props.type,
    value: $props.value,
    onInput: _cache[1] || (_cache[1] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    required: $props.required
  }, null, 40, _hoisted_4$7)) : $options.getFieldType() === 'list' ? (vue.openBlock(), vue.createElementBlock("select", {
    key: 3,
    id: $props.id,
    name: $props.id,
    placeholder: $props.info,
    onInput: _cache[2] || (_cache[2] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    required: $props.required
  }, [$props.value ? (vue.openBlock(), vue.createElementBlock("option", {
    key: 0,
    value: $props.value
  }, vue.toDisplayString($props.value), 9, _hoisted_6$4)) : (vue.openBlock(), vue.createElementBlock("option", _hoisted_7$3, vue.toDisplayString($props.info), 1)), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.list, function (value, index) {
    return vue.openBlock(), vue.createElementBlock("option", {
      key: index,
      value: value
    }, vue.toDisplayString(value), 9, _hoisted_8$3);
  }), 128))], 40, _hoisted_5$4)) : $options.getFieldType() === 'area' ? (vue.openBlock(), vue.createElementBlock("textarea", {
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
    }),
    required: $props.required
  }, null, 40, _hoisted_9$3)) : (vue.openBlock(), vue.createElementBlock("input", {
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
    }),
    required: $props.required
  }, null, 40, _hoisted_10$2)), $options.hasSlot('label') ? (vue.openBlock(), vue.createElementBlock("label", {
    key: 6,
    for: $props.id
  }, [vue.renderSlot(_ctx.$slots, "label")], 8, _hoisted_11$1)) : vue.createCommentVNode("", true)], 8, _hoisted_1$7);
}var css_248z$8 = "\nfieldset[data-v-3308685f] {\n  --fieldset-display: flex;\n  --fieldset-flex-flow: row wrap;\n  --fieldset-place-items: center;\n  --fieldset-margin: auto;\n  --fieldset-border: none;\n  --fieldset-padding: 0;\n  --fieldset-max-width: 500px;\n  --fieldset-text-align: center;\n  --fieldset-transition: max-width 1s;\n\n  display: var(--fieldset-display);\n  flex-flow: var(--fieldset-flex-flow);\n  place-items: var(--fieldset-place-items);;\n  margin: var(--fieldset-margin);\n  border: var(--fieldset-border);\n  padding: var(--fieldset-padding);\n  max-width: var(--fieldset-max-width);\n  text-align: var(--fieldset-text-align);\n  transition: var(--fieldset-transition);\n}\nfieldset > *[data-v-3308685f] {\n  --field-box-sizing: border-box;\n  --field-margin: 5px;\n  --field-padding: 5px;\n\n  box-sizing: var(--field-box-sizing);\n  margin: var(--field-margin);\n  padding: var(--field-padding);\n}\nlegend[data-v-3308685f] {\n  --legend-width: 93%;\n  --legend-font-size: 1.2rem;\n  --legend-color: var(--gray);\n\n  width: var(--legend-width);\n  font-size: var(--legend-font-size);\n  color: var(--legend-color);\n}\nlabel[data-v-3308685f] {\n  --label-width: 90%;\n  --label-visibility: hidden;\n  --label-font-size: 0.8rem;\n  --label-font-style: italic;\n  --label-color: var(--blue);\n\n  width: var(--label-width);\n  visibility: var(--label-visibility);\n  font-size: var(--label-font-size);\n  font-style: var(--label-font-style);\n  color: var(--label-color);\n}\ninput[data-v-3308685f],\nselect[data-v-3308685f],\ntextarea[data-v-3308685f] {\n  --input-border: 1px solid var(--blue);\n  --input-border-radius: 10px;\n  --input-outline: none;\n  --input-width: 100%;\n  --input-line-height: 1.8;\n  --input-background-color: var(--white);\n\n  border: var(--input-border);\n  border-radius: var(--input-border-radius);\n  outline: var(--input-outline);\n  width: var(--input-width);\n  line-height: var(--input-line-height);\n  background-color: var(--input-background-color);\n}\nfieldset:hover legend[data-v-3308685f] {\n  --hover-legend-color: var(--black);\n\n  color: var(--hover-legend-color);\n}\nfieldset:hover > input[data-v-3308685f],\nfieldset:hover > select[data-v-3308685f],\nfieldset:hover > textarea[data-v-3308685f],\ninput[data-v-3308685f]:focus,\nselect[data-v-3308685f]:focus,\ntextarea[data-v-3308685f]:focus {\n  --hover-input-border: 1px solid var(--sky);\n  --hover-input-border-radius: 0;\n  --hover-input-background-color: var(--white);\n  --hover-input-transition: all 500ms;\n\n  border: var(--hover-input-border);\n  border-radius: var(--hover-input-border-radius);\n  background-color: var(--hover-input-background-color);\n  transition: var(--hover-input-transition);\n}\nfieldset:hover > label[data-v-3308685f],\ninput:focus + label[data-v-3308685f],\nselect:focus + label[data-v-3308685f],\ntextarea:focus + label[data-v-3308685f] {\n  --hover-label-visibility: visible;\n  --hover-label-transform: scale(1.1);\n  --hover-label-transition: all 1s;\n\n  visibility: var(--hover-label-visibility);\n  transform: var(--hover-label-transform);\n  transition: var(--hover-label-transition);\n}\n";
styleInject(css_248z$8);script$7.render = render$7;
script$7.__scopeId = "data-v-3308685f";var script$6 = {
  name: "MediaElt",
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    title: {
      type: String
    },
    type: {
      type: String,
      default: ""
    },
    medias: {
      type: Array
    },
    loop: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number
    },
    width: {
      type: Number,
      default: 300
    }
  },
  methods: {
    hasSlot: function hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
};var _hoisted_1$6 = ["title"];
var _hoisted_2$6 = ["src", "loop"];
var _hoisted_3$6 = ["src", "loop", "height", "width"];
var _hoisted_4$6 = ["src", "type"];
var _hoisted_5$3 = {
  key: 2
};
var _hoisted_6$3 = ["srcset", "media", "type"];
var _hoisted_7$2 = ["src", "alt"];
var _hoisted_8$2 = ["src", "alt"];
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
    loop: $props.loop
  }, [vue.renderSlot(_ctx.$slots, "audio")], 8, _hoisted_2$6)) : $props.type === 'video' ? (vue.openBlock(), vue.createElementBlock("video", {
    key: 1,
    controls: "",
    src: $props.src,
    loop: $props.loop,
    height: $props.height,
    width: $props.width
  }, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.medias, function (video, index) {
    return vue.openBlock(), vue.createElementBlock("source", {
      key: index,
      src: video.src,
      type: video.type
    }, null, 8, _hoisted_4$6);
  }), 128)), vue.renderSlot(_ctx.$slots, "video")], 8, _hoisted_3$6)) : $props.type === 'picture' ? (vue.openBlock(), vue.createElementBlock("picture", _hoisted_5$3, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.medias, function (picture, index) {
    return vue.openBlock(), vue.createElementBlock("source", {
      key: index,
      srcset: picture.src,
      media: picture.media,
      type: picture.type
    }, null, 8, _hoisted_6$3);
  }), 128)), vue.createElementVNode("img", {
    src: $props.src,
    alt: $props.alt
  }, null, 8, _hoisted_7$2)])) : (vue.openBlock(), vue.createElementBlock("img", {
    key: 3,
    src: $props.src,
    alt: $props.alt
  }, null, 8, _hoisted_8$2)), $options.hasSlot('figcaption') ? (vue.openBlock(), vue.createElementBlock("figcaption", _hoisted_9$2, [vue.renderSlot(_ctx.$slots, "figcaption")])) : vue.createCommentVNode("", true)], 8, _hoisted_1$6);
}var css_248z$7 = "\nfigure[data-v-221e38e8] {\n  --figure-border: 1px solid transparent;\n  --figure-border-radius: 10%;\n  --figure-padding: 10px;\n  --figure-background-color: transparent;\n\n  border: var(--figure-border);\n  border-radius: var(--figure-border-radius);\n  padding: var(--figure-padding);\n  background-color: var(--figure-background-color);\n}\nimg[data-v-221e38e8] {\n  --img-border: 1px solid var(--blue);\n  --img-border-radius: 20px;\n  --img-padding: 10px;\n  --img-max-width: 100%;\n  --img-height: auto;\n  --img-object-fit: contain;\n  --img-object-position: 50% 50%;\n\n  border: var(--img-border);\n  border-radius: var(--img-border-radius);\n  padding: var(--img-padding);\n  max-width: var(--img-max-width);\n  height: var(--img-height);\n  object-fit: var(--img-object-fit);\n  object-position: var(--img-object-position);\n}\naudio[data-v-221e38e8] {\n  --audio-border: 2px solid var(--gray);\n  --audio-border-radius: 10px;\n\n  border: var(--audio-border);\n  border-radius: var(--audio-border-radius);\n}\nvideo[data-v-221e38e8] {\n  --video-border: 2px solid var(--black);\n  --video-border-radius: 20px;\n\n  border: var(--video-border);\n  border-radius: var(--video-border-radius);\n}\nfigcaption[data-v-221e38e8] {\n  --figcaption-display: flex;\n  --figcaption-flex-flow: column nowrap;\n  --figcaption-place-content: center center;\n  --figcaption-color: var(--blue);\n\n  display: var(--figcaption-display);\n  flex-flow: var(--figcaption-flex-flow);\n  place-content: var(--figcaption-place-content);\n  color: var(--figcaption-color);\n}\n";
styleInject(css_248z$7);script$6.render = render$6;
script$6.__scopeId = "data-v-221e38e8";var script$5 = {
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
}var css_248z$6 = "\nul[data-v-74995e6c] {\n  --ul-margin: 20px 0;\n  --ul-padding: 0;\n  --ul-list-style: none;\n  --ul-text-align: center;\n\n  margin: var(--ul-margin);\n  padding: var(--ul-padding);\n  list-style: var(--ul-list-style);\n  text-align: var(--ul-text-align);\n}\nli > ul[data-v-74995e6c] {\n  --li-ul-display: flex;\n  --li-ul-flex-flow: wrap;\n  --li-ul-place-content: center;\n\n  display: var(--li-ul-display);\n  flex-flow: var(--li-ul-flex-flow);\n  place-content: var(--li-ul-place-content);\n}\n";
styleInject(css_248z$6);script$5.render = render$5;
script$5.__scopeId = "data-v-74995e6c";var script$4 = {
  name: "SliderElt",
  props: {
    slides: {
      type: Array
    },
    delay: {
      type: Number,
      default: 2000
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
  return vue.pushScopeId("data-v-142fd1fe"), n = n(), vue.popScopeId(), n;
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

var _hoisted_5$2 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("i", {
    class: "fas fa-long-arrow-alt-right fa-2x"
  }, null, -1);
});

var _hoisted_6$2 = [_hoisted_5$2];

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

var _hoisted_11 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("i", {
    class: "fas fa-play fa-2x"
  }, null, -1);
});

var _hoisted_12 = [_hoisted_11];

var _hoisted_13 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("i", {
    class: "fas fa-step-forward fa-2x"
  }, null, -1);
});

var _hoisted_14 = [_hoisted_13];
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
  }, _hoisted_12))]), vue.createElementVNode("li", null, [vue.createElementVNode("button", {
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
}var css_248z$5 = "\nul[data-v-142fd1fe] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.slider[data-v-142fd1fe] {\n  --slider-margin: var(--slider-figcaption-height) auto -20px;\n  --slider-border: none;\n  --slider-padding: 0;\n  --slider-width: 100%;\n  --slider-text-align: center;\n\n  margin: var(--slider-margin);\n  border: var(--slider-border);\n  padding: var(--slider-padding);\n  width: var(--slider-width);\n  text-align: var(--slider-text-align);\n}\n[id*=\"slide-\"][data-v-142fd1fe] {\n  --slide-display: none;\n  display: var(--slide-display);\n}\nfigcaption[data-v-142fd1fe] {\n  --slider-figcaption-padding: 5px 20px;\n  --slider-figcaption-width: 100%;\n  --slider-figcaption-height: 20%;\n  --slider-figcaption-font-weight: bold;\n  --slider-figcaption-color: var(--sky);\n\n  padding: var(--slider-figcaption-padding);\n  width: var(--slider-figcaption-width);\n  height: var(--slider-figcaption-height);\n  font-weight: var(--slider-figcaption-font-weight);\n  color: var(--slider-figcaption-color);\n}\n.controls[data-v-142fd1fe] {\n  --controls-display: flex;\n  --controls-gap: 10px;\n  --controls-place-content: center;\n  --controls-opacity: 1;\n\n  display: var(--controls-display);\n  gap: var(--controls-gap);\n  place-content: var(--controls-place-content);\n  opacity: var(--controls-opacity);\n}\n.slider:hover .controls[data-v-142fd1fe],\n.slider:focus .controls[data-v-142fd1fe] {\n  --slider-controls-hover-opacity: 1;\n  opacity: var(--slider-controls-hover-opacity);\n}\n.controls > *[data-v-142fd1fe]:hover,\n.controls > *[data-v-142fd1fe]:focus {\n  --controls-hover-color: var(--sky);\n  color: var(--controls-hover-color);\n}\nbutton[data-v-142fd1fe] {\n  --slider-button-border: none;\n  --slider-button-font-size: 60%;\n  --slider-button-background: none;\n  --slider-button-color: var(--grey-dark);\n\n  border: var(--slider-button-border);\n  font-size: var(--slider-button-font-size);\n  background: var(--slider-button-background);\n  color: var(--slider-button-color);\n}\n.gallery[data-v-142fd1fe] {\n  --gallery-display: flex;\n  --gallery-gap: 10px;\n  --gallery-place-content: center;\n  --gallery-opacity: 1;\n  --gallery-color: var(--gray);\n\n  display: var(--gallery-display);\n  gap: var(--gallery-gap);\n  place-content: var(--gallery-place-content);\n  opacity: var(--gallery-opacity);\n  color: var(--gallery-color);\n}\n.slider:hover .gallery[data-v-142fd1fe],\n.slider:focus .gallery[data-v-142fd1fe] {\n  --gallery-hover-opacity: 1;\n  opacity: var(--gallery-hover-opacity);\n}\n.gallery > *[data-v-142fd1fe]:hover,\n.gallery > *[data-v-142fd1fe]:focus {\n  --gallery-child-hover-color: var(--sky);\n  --gallery-child-hover-cursor: pointer;\n\n  color: var(--gallery-child-hover-color);\n  cursor: var(--gallery-child-hover-cursor);\n}\n.show[data-v-142fd1fe] {\n  --slider-show-display: list-item;\n  display: var(--slider-show-display);\n}\n@media (min-width: 1200px) {\n.controls[data-v-142fd1fe] {\n  --controls-opacity: 0;\n}\n.gallery[data-v-142fd1fe] {\n    --gallery-opacity: 0;\n}\n}\n";
styleInject(css_248z$5);script$4.render = render$4;
script$4.__scopeId = "data-v-142fd1fe";var script$3 = {
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
}var css_248z$4 = "\ntable[data-v-6cfc63ad] {\n  --table-display: table;\n  --table-overflow: hidden;\n  --table-layout: fixed;\n  --table-margin: 50px auto;\n  --table-border-collapse: separate;\n  --table-border-spacing: 1px;\n  --table-border-radius: 10px;\n  --table-width: 100%;\n  --table-max-width: 100%;\n  --table-font-size: 1.5rem;\n\n  display: var(--table-display);\n  overflow: var(--table-overflow);\n  table-layout: var(--table-layout);\n  margin: var(--table-margin);\n  border-collapse: var(--table-border-collapse);\n  border-spacing: var(--table-border-spacing);\n  border-radius: var(--table-border-radius);\n  width: var(--table-width);\n  max-width: var(--table-max-width);\n  font-size: var(--table-font-size);\n}\ncaption[data-v-6cfc63ad] {\n  --caption-caption-side: top;\n  --caption-margin-bottom: 20px;\n  --caption-font-size: 1.5rem;\n  --caption-font-weight: bold;\n  --caption-color: var(--gray);\n  --caption-text-shadow: 1px 1px 2px;\n\n  caption-side: var(--caption-caption-side);\n  margin-bottom: var(--caption-margin-bottom);\n  font-size: var(--caption-font-size);\n  font-weight: var(--caption-font-weight);\n  color: var(--caption-color);\n  text-shadow: var(--caption-text-shadow);\n}\nthead[data-v-6cfc63ad] {\n  --thead-border-radius: 10px;\n  border-radius: var(--thead-border-radius);\n}\ntr[data-v-6cfc63ad] {\n  --tr-display: flex;\n  --tr-flex-flow: column;\n  --tr-padding: 20px;\n\n  display: var(--tr-display);\n  flex-flow: var(--tr-flex-flow);\n  padding: var(--tr-padding);\n}\nth[data-v-6cfc63ad] {\n  --th-display: none;\n  --th-font-size: 1.5rem;\n  --th-font-style: italic;\n  --th-text-transform: uppercase;\n  --th-background-color: var(--blue);\n  --th-color: var(--white);\n\n  display: var(--th-display);\n  font-size: var(--th-font-size);\n  font-style: var(--th-font-style);\n  text-transform: var(--th-text-transform);\n  background-color: var(--th-background-color);\n  color: var(--th-color);\n}\nth[data-v-6cfc63ad],\ntd[data-v-6cfc63ad] {\n  --th-td-padding: 5px;\n  --th-td-text-align: center;\n  --th-td-vertical-align: middle;\n\n  padding: var(--th-td-padding);\n  text-align: var(--th-td-text-align);\n  vertical-align: var(--th-td-vertical-align);\n}\ntd[data-v-6cfc63ad] {\n  --td-display: table;\n  --td-word-break: normal;\n  --td-cursor: cell;\n\n  display: var(--td-display);\n  word-break: var(--td-word-break);;\n  cursor: var(--td-cursor);\n}\ntbody tr[data-v-6cfc63ad]:nth-child(even) {\n  --tbody-even-background-color: var(--gray-light);\n  --tbody-even-color: var(--black);\n\n  background-color: var(--tbody-even-background-color);\n  color: var(--tbody-even-color);\n}\ntbody tr[data-v-6cfc63ad]:nth-child(odd) {\n  --tbody-odd-background-color: var(--white);\n  --tbody-odd-color: var(--gray);\n\n  background-color: var(--tbody-odd-background-color);\n  color: var(--tbody-odd-color);\n}\ntbody tr[data-v-6cfc63ad]:hover,\ntbody tr[data-v-6cfc63ad]:focus {\n  --tbody-hover-background-color: var(--silver);\n  --tbody-hover-color: var(--black);\n\n  background-color: var(--tbody-hover-background-color);\n  color: var(--tbody-hover-color);\n}\n@media (min-width: 576px) {\ntable[data-v-6cfc63ad] {\n    --table-max-width: 99%;\n}\n}\n@media (min-width: 768px) {\ntable[data-v-6cfc63ad] {\n    --table-max-width: 98%;\n}\n}\n@media (min-width: 992px) {\ntable[data-v-6cfc63ad] {\n    --table-max-width: 97%;\n}\n}\n@media (min-width: 1200px) {\ntable[data-v-6cfc63ad] {\n    --table-max-width: 96%;\n}\ntr[data-v-6cfc63ad] {\n    --tr-display: table-row;\n}\nth[data-v-6cfc63ad],\n  td[data-v-6cfc63ad] {\n    --th-td-display: table-cell;\n    display: var(--th-td-display);\n}\n}\n@media (min-width: 1600px) {\ntable[data-v-6cfc63ad] {\n    --table-max-width: 95%;\n}\n}\n";
styleInject(css_248z$4);script$3.render = render$3;
script$3.__scopeId = "data-v-6cfc63ad";var script$2 = {
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
var _hoisted_5$1 = {
  key: 0
};
var _hoisted_6$1 = {
  key: 1
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.isArticle === true ? (vue.openBlock(), vue.createElementBlock("article", _hoisted_1$2, [vue.createElementVNode("header", null, [vue.renderSlot(_ctx.$slots, "header")]), vue.renderSlot(_ctx.$slots, "body"), $options.hasSlot('aside') ? (vue.openBlock(), vue.createElementBlock("aside", _hoisted_2$2, [vue.renderSlot(_ctx.$slots, "aside")])) : vue.createCommentVNode("", true), $options.hasSlot('footer') ? (vue.openBlock(), vue.createElementBlock("footer", _hoisted_3$2, [vue.renderSlot(_ctx.$slots, "footer")])) : vue.createCommentVNode("", true)])) : (vue.openBlock(), vue.createElementBlock("section", _hoisted_4$2, [vue.createElementVNode("header", null, [vue.renderSlot(_ctx.$slots, "header")]), vue.renderSlot(_ctx.$slots, "body"), $options.hasSlot('aside') ? (vue.openBlock(), vue.createElementBlock("aside", _hoisted_5$1, [vue.renderSlot(_ctx.$slots, "aside")])) : vue.createCommentVNode("", true), $options.hasSlot('footer') ? (vue.openBlock(), vue.createElementBlock("footer", _hoisted_6$1, [vue.renderSlot(_ctx.$slots, "footer")])) : vue.createCommentVNode("", true)]));
}var css_248z$3 = "\narticle[data-v-8f7e84ee],\nsection[data-v-8f7e84ee] {\n  --card-box-sizing: border-box;\n  --card-margin: auto;\n  --card-border: 1px solid transparent;\n  --card-border-radius: 10px;\n  --card-padding: 10px;\n  --card-width: 95%;\n  --card-background-color: transparent;\n  --card-color: var(--gray);\n\n  box-sizing: var(--card-box-sizing);\n  margin: var(--card-margin);\n  border: var(--card-border);\n  border-radius: var(--card-border-radius);\n  padding: var(--card-padding);\n  width: var(--card-width);\n  background-color: var(--card-background-color);\n  color: var(--card-color);\n}\n";
styleInject(css_248z$3);script$2.render = render$2;
script$2.__scopeId = "data-v-8f7e84ee";var script$1 = {
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
  key: 1
};
var _hoisted_3$1 = {
  key: 2
};
var _hoisted_4$1 = {
  key: 0
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("footer", null, [vue.createElementVNode("ul", null, [$options.hasSlot('foot1') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_1$1, [vue.createElementVNode("section", null, [vue.createElementVNode("h3", null, vue.toDisplayString($props.title1), 1), vue.renderSlot(_ctx.$slots, "foot1")])])) : vue.createCommentVNode("", true), $options.hasSlot('foot2') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_2$1, [vue.createElementVNode("section", null, [vue.createElementVNode("h3", null, vue.toDisplayString($props.title2), 1), vue.renderSlot(_ctx.$slots, "foot2")])])) : vue.createCommentVNode("", true), $options.hasSlot('foot3') ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_3$1, [vue.createElementVNode("section", null, [vue.createElementVNode("h3", null, vue.toDisplayString($props.title3), 1), vue.renderSlot(_ctx.$slots, "foot3")])])) : vue.createCommentVNode("", true)]), $options.hasSlot('foot') ? (vue.openBlock(), vue.createElementBlock("aside", _hoisted_4$1, [vue.renderSlot(_ctx.$slots, "foot")])) : vue.createCommentVNode("", true)]);
}var css_248z$2 = "\nfooter[data-v-77f02d1e] {\n  --footer-text-align: center;\n  text-align: var(--footer-text-align);\n}\nh3[data-v-77f02d1e],[data-v-77f02d1e] ul {\n  --footer-child-margin: 0;\n  --footer-child-padding: 0;\n\n  margin: var(--footer-child-margin);\n  padding: var(--footer-child-padding);\n}\n[data-v-77f02d1e] li {\n  --footer-li-list-style: none;\n  list-style: var(--footer-li-list-style);\n}\n[data-v-77f02d1e] a {\n  --footer-a-text-decoration: none;\n  text-decoration: var(--footer-a-text-decoration);\n}\n\n/********************* MAIN PART *********************/\nfooter > ul[data-v-77f02d1e] { \n  --footer-ul-display: flex;\n  --footer-ul-flex-direction: column;\n  --footer-ul-place-items: center;\n  --footer-ul-gap: 20px;\n  --footer-ul-padding: 20px;\n  --footer-ul-background-color: var(--sky);\n\n  display: var(--footer-ul-display);\n  flex-direction: var(--footer-ul-flex-direction);\n  place-items: var(--footer-ul-place-items);\n  gap: var(--footer-ul-gap);\n  padding: var(--footer-ul-padding);\n  background-color: var(--footer-ul-background-color);\n}\nh3[data-v-77f02d1e] {\n  --footer-h3-margin-bottom: 5px;\n  --footer-h3-font-size: 2rem;\n  --footer-h3-font-family: monospace;\n  --footer-h3-color: var(--yellow);\n\n  margin-bottom: var(--footer-h3-margin-bottom);\n  font-size: var(--footer-h3-font-size);\n  font-family: var(--footer-h3-font-family);\n  color: var(--footer-h3-color);\n}\nsection[data-v-77f02d1e] a {\n  --footer-section-a-color: var(--white);\n  color: var(--footer-section-a-color);\n}\nsection[data-v-77f02d1e] a:hover,\nsection[data-v-77f02d1e] a:focus {\n  --footer-section-a-hover-color: var(--gray);\n  color: var(--footer-section-a-hover-color);\n}\n\n/********************* SECOND PART *********************/\naside[data-v-77f02d1e] ul {\n  --aside-ul-display: flex;\n  --aside-ul-flex-direction: row;\n  --aside-ul-place-content: center;\n  --aside-ul-gap: 10px;\n  --aside-ul-padding: 10px;\n  --aside-ul-background-color: var(--white);\n\n  display: var(--aside-ul-display);\n  flex-direction: var(--aside-ul-flex-direction);\n  place-content: var(--aside-ul-place-content);\n  gap: var(--aside-ul-gap);\n  padding: var(--aside-ul-padding);\n  background-color: var(--aside-ul-background-color);\n}\naside[data-v-77f02d1e] a {\n  --aside-a-color: var(--blue);\n  color: var(--aside-a-color);\n}\naside[data-v-77f02d1e] i:hover,\naside[data-v-77f02d1e] i:focus {\n  --aside-a-hover-transform: scale(1.2);\n  --aside-a-hover-transition: transform 200ms;\n\n  transform: var(--aside-a-hover-transform);\n  transition: var(--aside-a-hover-transition);\n}\n\n/********************* RESPONSIVE *********************/\n@media (min-width: 576px) {\nfooter > ul[data-v-77f02d1e] {\n    --footer-ul-flex-direction: row;\n    --footer-ul-place-content: space-around;\n\n    place-content: var(--footer-ul-place-content);\n}\n}\n@media (min-width: 768px) {\nfooter > ul[data-v-77f02d1e] {\n    --footer-ul-place-content: space-evenly;\n}\n}\n@media (min-width: 992px) {\nfooter > ul[data-v-77f02d1e] {\n    --footer-ul-place-content: center;\n    --footer-ul-gap: 10%;\n}\n}\n";
styleInject(css_248z$2);script$1.render = render$1;
script$1.__scopeId = "data-v-77f02d1e";var script = {
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
    toggleMenu: function toggleMenu() {
      var nav = document.getElementById("nav");
      var admin = document.getElementById("admin");
      nav.classList.toggle("show");
      nav.classList.toggle("hide");
      admin.classList.toggle("show");
      admin.classList.toggle("hide");
    }
  }
};var _withScopeId = function _withScopeId(n) {
  return vue.pushScopeId("data-v-49d6a973"), n = n(), vue.popScopeId(), n;
};

var _hoisted_1 = {
  key: 0,
  class: "sidebar"
};
var _hoisted_2 = ["href", "title"];
var _hoisted_3 = {
  key: 0,
  href: "#top",
  title: "Top of the Page"
};
var _hoisted_4 = {
  key: 1,
  class: "navbar"
};
var _hoisted_5 = {
  key: 0,
  href: "/",
  title: "Home"
};
var _hoisted_6 = {
  id: "nav",
  class: "show"
};
var _hoisted_7 = ["href", "title"];
var _hoisted_8 = {
  key: 1,
  id: "admin",
  class: "hide"
};

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/vue.createElementVNode("i", {
    class: "fa-solid fa-bars"
  }, null, -1);
});

var _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.getNavClass() === 'sidebar' ? (vue.openBlock(), vue.createElementBlock("nav", _hoisted_1, [vue.renderSlot(_ctx.$slots, "first"), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, function (item, index) {
    return vue.openBlock(), vue.createElementBlock("a", {
      key: index,
      href: "#".concat(item),
      title: item
    }, [vue.renderSlot(_ctx.$slots, "items", {
      item: item,
      index: index
    }, function () {
      return [vue.createTextVNode(vue.toDisplayString(item), 1)];
    })], 8, _hoisted_2);
  }), 128)), vue.renderSlot(_ctx.$slots, "last"), $options.hasSlot('top') ? (vue.openBlock(), vue.createElementBlock("a", _hoisted_3, [vue.renderSlot(_ctx.$slots, "top")])) : vue.createCommentVNode("", true)])) : (vue.openBlock(), vue.createElementBlock("nav", _hoisted_4, [$options.hasSlot('brand') ? (vue.openBlock(), vue.createElementBlock("a", _hoisted_5, [vue.renderSlot(_ctx.$slots, "brand")])) : vue.createCommentVNode("", true), vue.createElementVNode("ul", _hoisted_6, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, function (item, index) {
    return vue.openBlock(), vue.createElementBlock("li", {
      key: index
    }, [vue.createElementVNode("a", {
      href: '/' + item,
      title: item.charAt(0).toUpperCase() + item.slice(1)
    }, [vue.renderSlot(_ctx.$slots, item, {
      item: item,
      index: index
    }), vue.createElementVNode("b", null, vue.toDisplayString(item.charAt(0).toUpperCase() + item.slice(1)), 1)], 8, _hoisted_7)]);
  }), 128))]), $options.hasSlot('admin') ? (vue.openBlock(), vue.createElementBlock("aside", _hoisted_8, [vue.renderSlot(_ctx.$slots, "admin")])) : vue.createCommentVNode("", true), vue.createElementVNode("button", {
    type: "button",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.toggleMenu();
    }),
    title: "Menu"
  }, _hoisted_10)]));
}var css_248z$1 = "\n:root {\n  --navbar-height: 50px;\n}\n[id=\"app\"] {\n  margin-top: var(--navbar-height);\n}\n@media (min-width: 768px) {\n:root {\n    --navbar-height: 80px;\n}\n}\n";
styleInject(css_248z$1);var css_248z = "\n.sidebar[data-v-49d6a973] {\n  --sidebar-display: flex;\n  --sidebar-flex-flow: column;\n  --sidebar-position: fixed;\n  --sidebar-top: calc(var(--navbar-height) + 10px);\n  --sidebar-left: 2px;\n  --sidebar-z-index: 10;\n  --sidebar-width: auto;\n\n  display: var(--sidebar-display);\n  flex-flow: var(--sidebar-flex-flow);\n  position: var(--sidebar-position);\n  top: var(--sidebar-top);\n  left: var(--sidebar-left);\n  z-index: var(--sidebar-z-index);\n  width: var(--sidebar-width);\n}\n.sidebar[data-v-49d6a973] a {\n  --sidebar-a-display: flex;\n  --sidebar-a-place-content: center;\n  --sidebar-a-place-items: center;\n  --sidebar-a-margin: 5px;\n  --sidebar-a-border-radius: 20px;\n  --sidebar-a-padding: 5px;\n  --sidebar-a-width: 100%;\n  --sidebar-a-background-color: var(--white-dark);\n  --sidebar-a-color: var(--blue-dark);\n  --sidebar-a-cursor: crosshair;\n\n  display: var(--sidebar-a-display);\n  place-content: var(--sidebar-a-place-content);\n  place-items: var(--sidebar-a-place-items);\n  margin: var(--sidebar-a-margin);\n  border-radius: var(--sidebar-a-border-radius);\n  padding: var(--sidebar-a-padding);\n  width: var(--sidebar-a-width);\n  background-color: var(--sidebar-a-background-color);\n  color: var(--sidebar-a-color);\n  cursor: var(--sidebar-a-cursor);\n}\n.sidebar[data-v-49d6a973] a:hover,\n.sidebar[data-v-49d6a973] a:focus {\n  --sidebar-a-hover-border-radius: 10px;\n  --sidebar-a-hover-background-color: var(--blue-dark);\n  --sidebar-a-hover-color: var(--white-dark);\n  --sidebar-a-hover-transform: scale(1.1);\n  --sidebar-a-hover-transition: all 500ms;\n\n  border-radius: var(--sidebar-a-hover-border-radius);\n  color: var(--sidebar-a-hover-color);\n  background-color: var(--sidebar-a-hover-background-color);\n  transform: var(--sidebar-a-hover-transform);\n  transition: var(--sidebar-a-hover-transition);\n}\n.navbar[data-v-49d6a973] {\n  --navbar-display: flex;\n  --navbar-place-content: space-between;\n  --navbar-place-items: center;\n  --navbar-position: fixed;\n  --navbar-top: 0;\n  --navbar-right: 0;\n  --navbar-bottom: unset;\n  --navbar-left: 0;\n  --navbar-z-index: 1000;\n  --navbar-background-color: var(--blue-dark);\n  --navbar-color: var(--white);\n\n  display: var(--navbar-display);\n  place-content: var(--navbar-place-content);\n  place-items: var(--navbar-place-items);\n  position: var(--navbar-position);\n  top: var(--navbar-top);\n  right: var(--navbar-right);\n  bottom: var(--navbar-bottom);\n  left: var(--navbar-left);\n  z-index: var(--navbar-z-index);\n  height: var(--navbar-height);\n  background-color: var(--navbar-background-color);\n  color: var(--navbar-color);\n}\n.navbar[data-v-49d6a973] a,\n.navbar[data-v-49d6a973] button {\n  --navbar-a-padding: 10px;\n  --navbar-a-color: var(--white);\n  --navbar-a-cursor: pointer;\n\n  padding: var(--navbar-a-padding);\n  color: var(--navbar-a-color);\n  cursor: var(--navbar-a-cursor);\n}\n.navbar[data-v-49d6a973] ul {\n  --navbar-ul-display: flex;\n  --navbar-ul-place-items: center;\n  --navbar-ul-margin: 0;\n  --navbar-ul-padding: 0;\n  --navbar-ul-list-style: none;\n\n  display: var(--navbar-ul-display);\n  place-items: var(--navbar-ul-place-items);\n  margin: var(--navbar-ul-margin);\n  padding: var(--navbar-ul-padding);\n  list-style: var(--navbar-ul-list-style);\n}\n.navbar ul a[data-v-49d6a973] {\n  --navbar-ul-a-display: flex;\n  display: var(--navbar-ul-a-display);\n}\n.navbar ul a[data-v-49d6a973] :not(i) {\n  --navbar-ul-a-not-i-display: none;\n  display: var(--navbar-ul-a-not-i-display);\n}\n.navbar[data-v-49d6a973] ul a,\n.navbar[data-v-49d6a973] ul button {\n  --navbar-ul-a-flex-direction: column;\n  flex-direction: var(--navbar-ul-a-flex-direction);\n}\n.navbar ul a[data-v-49d6a973]:hover,\n.navbar ul a[data-v-49d6a973]:focus,\n.navbar ul button[data-v-49d6a973]:hover,\n.navbar ul button[data-v-49d6a973]:focus {\n  --navbar-first-ul-a-hover-color: var(--yellow);\n  --navbar-first-ul-a-hover-transform: scale(0.9);\n\n  color: var(--navbar-first-ul-a-hover-color) !important;\n  transform: var(--navbar-first-ul-a-hover-transform) !important;\n}\n.navbar[data-v-49d6a973] ul:last-of-type a:hover,\n.navbar[data-v-49d6a973] ul:last-of-type a:focus,\n.navbar[data-v-49d6a973] ul:last-of-type button:hover,\n.navbar[data-v-49d6a973] ul:last-of-type button:focus {\n  --navbar-last-ul-a-hover-color: var(--red);\n  color: var(--navbar-last-ul-a-hover-color);\n}\n.navbar[data-v-49d6a973] button {\n  --navbar-button-background-color: transparent;\n  --navbar-button-border: none;\n  --navbar-button-cursor: pointer;\n\n  background-color: var(--navbar-button-background-color);\n  border: var(--navbar-button-border);\n  cursor: var(--navbar-button-cursor);\n}\n.navbar[data-v-49d6a973] i {\n  --navbar-i-place-self: center;\n  place-self: var(--navbar-i-place-self);\n}\n.hide[data-v-49d6a973] {\n  --hide-display: none;\n  display: var(--hide-display) !important;\n}\n.show[data-v-49d6a973] {\n  --show-display: flex;\n  display: var(--show-display);\n}\n@media (min-width: 576px) {\n.navbar[data-v-49d6a973] {\n    --navbar-place-content: space-around;\n}\n}\n@media (min-width: 768px) {\n.navbar > button[data-v-49d6a973] {\n    --navbar-button-display: none;\n    display: var(--navbar-button-display);\n}\n.navbar ul a[data-v-49d6a973] :not(i) {\n    --navbar-ul-a-not-i-display: flex;\n}\n.hide[data-v-49d6a973] {\n    --hide-display: flex;\n}\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-49d6a973";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,BtnElt:script$8,FieldElt:script$7,MediaElt:script$6,ListElt:script$5,SliderElt:script$4,TableElt:script$3,CardElt:script$2,FootElt:script$1,NavElt:script});var install = function installVueElt(app) {
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