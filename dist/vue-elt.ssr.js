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
}var css_248z$9 = "\n@import url(\"btn.css\");\na[data-v-26ddd15a],\nbutton[data-v-26ddd15a] {\n  display: var(--ve-btn-display);\n  margin: var(--ve-btn-margin);\n  border: var(--ve-btn-border);\n  border-radius: var(--ve-btn-border-radius);\n  padding: var(--ve-btn-padding);\n  font-family: var(--ve-btn-font-family);\n  font-size: var(--ve-btn-font-size);\n  font-weight: var(--ve-btn-font-weight);\n  text-align: var(--ve-btn-text-align);\n  text-decoration: var(--ve-btn-text-decoration);\n  background-color: var(--ve-btn-background-color);\n  color: var(--ve-btn-color);\n  cursor: var(--ve-btn-cursor);\n}\na[data-v-26ddd15a]:hover,\na[data-v-26ddd15a]:focus,\nbutton[data-v-26ddd15a]:hover,\nbutton[data-v-26ddd15a]:focus {\n  border-color: var(--ve-btn-hover-border);\n  border-radius: var(--ve-btn-hover-border-radius);\n  background-color: var(--ve-btn-hover-background-color);\n  color: var(--ve-btn-hover-color);\n  box-shadow: var(--ve-btn-hover-box-shadow);\n  transition: var(--ve-btn-hover-transition);\n}\na > *[data-v-26ddd15a],\nbutton > *[data-v-26ddd15a] {\n  display: var(--ve-btn-child-display);\n  margin: var(--ve-btn-child-margin);\n}\n\n/* RED */\n.btn-red[data-v-26ddd15a] {\n  background-color: var(--ani-red);\n}\n.btn-red[data-v-26ddd15a]:hover,\n.btn-red[data-v-26ddd15a]:focus {\n  border-color: var(--ani-red);\n  color: var(--ani-red);\n}\n\n/* ORANGE */\n.btn-orange[data-v-26ddd15a] {\n  background-color: var(--ani-orange);\n}\n.btn-orange[data-v-26ddd15a]:hover,\n.btn-orange[data-v-26ddd15a]:focus {\n  border-color: var(--ani-orange);\n  color: var(--ani-orange);\n}\n\n/* YELLOW */\n.btn-yellow[data-v-26ddd15a] {\n  background-color: var(--ani-yellow);\n}\n.btn-yellow[data-v-26ddd15a]:hover,\n.btn-yellow[data-v-26ddd15a]:focus {\n  border-color: var(--ani-yellow);\n  color: var(--ani-yellow);\n}\n\n/* GREEN */\n.btn-green[data-v-26ddd15a] {\n  background-color: var(--ani-green);\n}\n.btn-green[data-v-26ddd15a]:hover,\n.btn-green[data-v-26ddd15a]:focus {\n  border-color: var(--ani-green);\n  color: var(--ani-green);\n}\n\n/* SKY */\n.btn-sky[data-v-26ddd15a] {\n  background-color: var(--ani-sky);\n}\n.btn-sky[data-v-26ddd15a]:hover,\n.btn-sky[data-v-26ddd15a]:focus {\n  border-color: var(--ani-sky);\n  color: var(--ani-sky);\n}\n\n/* BLUE */\n.btn-blue[data-v-26ddd15a] {\n  background-color: var(--ani-blue);\n}\n.btn-blue[data-v-26ddd15a]:hover,\n.btn-blue[data-v-26ddd15a]:focus {\n  border-color: var(--ani-blue);\n  color: var(--ani-blue);\n}\n\n/* VIOLET */\n.btn-violet[data-v-26ddd15a] {\n  background-color: var(--ani-violet);\n}\n.btn-violet[data-v-26ddd15a]:hover,\n.btn-violet[data-v-26ddd15a]:focus {\n  border-color: var(--ani-violet);\n  color: var(--ani-violet);\n}\n\n/* PINK */\n.btn-pink[data-v-26ddd15a] {\n  background-color: var(--ani-pink);\n}\n.btn-pink[data-v-26ddd15a]:hover,\n.btn-pink[data-v-26ddd15a]:focus {\n  border-color: var(--ani-pink);\n  color: var(--ani-pink);\n}\n";
styleInject(css_248z$9);script$8.render = render$8;
script$8.__scopeId = "data-v-26ddd15a";var script$7 = {
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
    value: [String, Number, Array]
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
}var css_248z$8 = "\n@import url(\"field.css\");\nfieldset[data-v-4a8b785a] {\n  display: var(--ve-fieldset-display);\n  flex-flow: var(--ve-fieldset-flex-flow);\n  place-items: var(--ve-fieldset-place-items);;\n  margin: var(--ve-fieldset-margin);\n  border: var(--ve-fieldset-border);\n  padding: var(--ve-fieldset-padding);\n  max-width: var(--ve-fieldset-max-width);\n  text-align: var(--ve-fieldset-text-align);\n  transition: var(--ve-fieldset-transition);\n}\nfieldset > *[data-v-4a8b785a] {\n  box-sizing: var(--ve-field-box-sizing);\n  margin: var(--ve-field-margin);\n  padding: var(--ve-field-padding);\n}\nlegend[data-v-4a8b785a] {\n  width: var(--ve-legend-width);\n  font-size: var(--ve-legend-font-size);\n  color: var(--ve-legend-color);\n}\nlabel[data-v-4a8b785a] {\n  width: var(--ve-label-width);\n  visibility: var(--ve-label-visibility);\n  font-size: var(--ve-label-font-size);\n  font-style: var(--ve-label-font-style);\n  color: var(--ve-label-color);\n}\ninput[data-v-4a8b785a],\nselect[data-v-4a8b785a],\ntextarea[data-v-4a8b785a] {\n  border: var(--ve-input-border);\n  border-radius: var(--ve-input-border-radius);\n  outline: var(--ve-input-outline);\n  width: var(--ve-input-width);\n  line-height: var(--ve-input-line-height);\n  background-color: var(--ve-input-background-color);\n}\nfieldset:hover legend[data-v-4a8b785a] {\n  color: var(--ve-hover-legend-color);\n}\nfieldset:hover > input[data-v-4a8b785a],\nfieldset:hover > select[data-v-4a8b785a],\nfieldset:hover > textarea[data-v-4a8b785a],\ninput[data-v-4a8b785a]:focus,\nselect[data-v-4a8b785a]:focus,\ntextarea[data-v-4a8b785a]:focus {\n  border: var(--ve-hover-input-border);\n  border-radius: var(--ve-hover-input-border-radius);\n  background-color: var(--ve-hover-input-background-color);\n  transition: var(--ve-hover-input-transition);\n}\nfieldset:hover > label[data-v-4a8b785a],\ninput:focus + label[data-v-4a8b785a],\nselect:focus + label[data-v-4a8b785a],\ntextarea:focus + label[data-v-4a8b785a] {\n  visibility: var(--ve-hover-label-visibility);\n  transform: var(--ve-hover-label-transform);\n  transition: var(--ve-hover-label-transition);\n}\n";
styleInject(css_248z$8);script$7.render = render$7;
script$7.__scopeId = "data-v-4a8b785a";var script$6 = {
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
}var css_248z$7 = "\n@import url(\"media.css\");\nfigure[data-v-be059c92] {\n  border: var(--ve-figure-border);\n  border-radius: var(--ve-figure-border-radius);\n  padding: var(--ve-figure-padding);\n  background-color: var(--ve-figure-background-color);\n}\nimg[data-v-be059c92] {\n  border: var(--ve-img-border);\n  border-radius: var(--ve-img-border-radius);\n  padding: var(--ve-img-padding);\n  max-width: var(--ve-img-max-width);\n  height: var(--ve-img-height);\n  object-fit: var(--ve-img-object-fit);\n  object-position: var(--ve-img-object-position);\n}\naudio[data-v-be059c92] {\n  border: var(--ve-audio-border);\n  border-radius: var(--ve-audio-border-radius);\n}\nvideo[data-v-be059c92] {\n  border: var(--ve-video-border);\n  border-radius: var(--ve-video-border-radius);\n}\nfigcaption[data-v-be059c92] {\n  display: var(--ve-figcaption-display);\n  flex-flow: var(--ve-figcaption-flex-flow);\n  place-content: var(--ve-figcaption-place-content);\n  color: var(--ve-figcaption-color);\n}\n";
styleInject(css_248z$7);script$6.render = render$6;
script$6.__scopeId = "data-v-be059c92";var script$5 = {
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
}var css_248z$6 = "\n@import url(\"list.css\");\nul[data-v-330f229e] {\n  margin: var(--ve-ul-margin);\n  padding: var(--ve-ul-padding);\n  list-style: var(--ve-ul-list-style);\n  text-align: var(--ve-ul-text-align);\n}\nli > ul[data-v-330f229e] {\n  display: var(--ve-li-ul-display);\n  flex-flow: var(--ve-li-ul-flex-flow);\n  place-content: var(--ve-li-ul-place-content);\n}\n";
styleInject(css_248z$6);script$5.render = render$5;
script$5.__scopeId = "data-v-330f229e";var script$4 = {
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
  return vue.pushScopeId("data-v-70d2a913"), n = n(), vue.popScopeId(), n;
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
}var css_248z$5 = "\n@import url(\"slider.css\");\nul[data-v-70d2a913] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.slider[data-v-70d2a913] {\n  margin: var(--ve-slider-margin);\n  border: var(--ve-slider-border);\n  padding: var(--ve-slider-padding);\n  width: var(--ve-slider-width);\n  text-align: var(--ve-slider-text-align);\n}\n[id*=\"slide-\"][data-v-70d2a913] {\n  display: var(--ve-slide-display);\n}\nfigcaption[data-v-70d2a913] {\n  padding: var(--ve-slider-figcaption-padding);\n  width: var(--ve-slider-figcaption-width);\n  height: var(--ve-slider-figcaption-height);\n  font-weight: var(--ve-slider-figcaption-font-weight);\n  color: var(--ve-slider-figcaption-color);\n}\n.controls[data-v-70d2a913] {\n  display: var(--ve-controls-display);\n  gap: var(--ve-controls-gap);\n  place-content: var(--ve-controls-place-content);\n  opacity: var(--ve-controls-opacity);\n}\n.slider:hover .controls[data-v-70d2a913],\n.slider:focus .controls[data-v-70d2a913] {\n  opacity: var(--ve-slider-controls-hover-opacity);\n}\n.controls > *[data-v-70d2a913]:hover,\n.controls > *[data-v-70d2a913]:focus {\n  color: var(--ve-controls-hover-color);\n}\nbutton[data-v-70d2a913] {\n  border: var(--ve-slider-button-border);\n  font-size: var(--ve-slider-button-font-size);\n  background: var(--ve-slider-button-background);\n  color: var(--ve-slider-button-color);\n}\n.gallery[data-v-70d2a913] {\n  display: var(--ve-gallery-display);\n  gap: var(--ve-gallery-gap);\n  place-content: var(--ve-gallery-place-content);\n  opacity: var(--ve-gallery-opacity);\n  color: var(--ve-gallery-color);\n}\n.slider:hover .gallery[data-v-70d2a913],\n.slider:focus .gallery[data-v-70d2a913] {\n  opacity: var(--ve-gallery-hover-opacity);\n}\n.gallery > *[data-v-70d2a913]:hover,\n.gallery > *[data-v-70d2a913]:focus {\n  color: var(--ve-gallery-child-hover-color);\n  cursor: var(--ve-gallery-child-hover-cursor);\n}\n.show[data-v-70d2a913] {\n  display: var(--ve-slider-show-display);\n}\n";
styleInject(css_248z$5);script$4.render = render$4;
script$4.__scopeId = "data-v-70d2a913";var script$3 = {
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
}var css_248z$4 = "\n@import url(\"table.css\");\ntable[data-v-a837c874] {\n  display: var(--ve-table-display);\n  overflow: var(--ve-table-overflow);\n  table-layout: var(--ve-table-layout);\n  margin: var(--ve-table-margin);\n  border-collapse: var(--ve-table-border-collapse);\n  border-spacing: var(--ve-table-border-spacing);\n  border-radius: var(--ve-table-border-radius);\n  width: var(--ve-table-width);\n  max-width: var(--ve-table-max-width);\n  font-size: var(--ve-table-font-size);\n}\ncaption[data-v-a837c874] {\n  caption-side: var(--ve-caption-caption-side);\n  margin-bottom: var(--ve-caption-margin-bottom);\n  font-size: var(--ve-caption-font-size);\n  font-weight: var(--ve-caption-font-weight);\n  color: var(--ve-caption-color);\n  text-shadow: var(--ve-caption-text-shadow);\n}\nthead[data-v-a837c874] {\n  border-radius: var(--ve-thead-border-radius);\n}\ntr[data-v-a837c874] {\n  display: var(--ve-tr-display);\n  flex-flow: var(--ve-tr-flex-flow);\n  padding: var(--ve-tr-padding);\n}\nth[data-v-a837c874] {\n  display: var(--ve-th-display);\n  font-size: var(--ve-th-font-size);\n  font-style: var(--ve-th-font-style);\n  text-transform: var(--ve-th-text-transform);\n  background-color: var(--ve-th-background-color);\n  color: var(--ve-th-color);\n}\nth[data-v-a837c874],\ntd[data-v-a837c874] {\n  padding: var(--ve-th-td-padding);\n  text-align: var(--ve-th-td-text-align);\n  vertical-align: var(--ve-th-td-vertical-align);\n}\ntd[data-v-a837c874] {\n  display: var(--ve-td-display);\n  word-break: var(--ve-td-word-break);;\n  cursor: var(--ve-td-cursor);\n}\ntbody tr[data-v-a837c874]:nth-child(even) {\n  background-color: var(--ve-tbody-even-background-color);\n  color: var(--ve-tbody-even-color);\n}\ntbody tr[data-v-a837c874]:nth-child(odd) {\n  background-color: var(--ve-tbody-odd-background-color);\n  color: var(--ve-tbody-odd-color);\n}\ntbody tr[data-v-a837c874]:hover,\ntbody tr[data-v-a837c874]:focus {\n  background-color: var(--ve-tbody-hover-background-color);\n  color: var(--ve-tbody-hover-color);\n}\n@media (min-width: 1200px) {\nth[data-v-a837c874],\n  td[data-v-a837c874] {\n    display: var(--ve-th-td-display);\n}\n}\n";
styleInject(css_248z$4);script$3.render = render$3;
script$3.__scopeId = "data-v-a837c874";var script$2 = {
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
}var css_248z$3 = "\n@import url(\"card.css\");\narticle[data-v-c8c0ba2e],\nsection[data-v-c8c0ba2e] {\n  box-sizing: var(--ve-card-box-sizing);\n  margin: var(--ve-card-margin);\n  border: var(--ve-card-border);\n  border-radius: var(--ve-card-border-radius);\n  padding: var(--ve-card-padding);\n  width: var(--ve-card-width);\n  background-color: var(--ve-card-background-color);\n  color: var(--ve-card-color);\n}\n";
styleInject(css_248z$3);script$2.render = render$2;
script$2.__scopeId = "data-v-c8c0ba2e";var script$1 = {
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
}var css_248z$2 = "\n@import url(\"foot.css\");\nfooter[data-v-8dff0d92] {\n  text-align: var(--ve-footer-text-align);\n}\nh3[data-v-8dff0d92],[data-v-8dff0d92] ul {\n  margin: var(--ve-footer-child-margin);\n  padding: var(--ve-footer-child-padding);\n}\n[data-v-8dff0d92] li {\n  list-style: var(--ve-footer-li-list-style);\n}\n[data-v-8dff0d92] a {\n  text-decoration: var(--ve-footer-a-text-decoration);\n}\n\n/********************* MAIN PART *********************/\nfooter > ul[data-v-8dff0d92] { \n  display: var(--ve-footer-ul-display);\n  flex-direction: var(--ve-footer-ul-flex-direction);\n  place-items: var(--ve-footer-ul-place-items);\n  gap: var(--ve-footer-ul-gap);\n  padding: var(--ve-footer-ul-padding);\n  background-color: var(--ve-footer-ul-background-color);\n}\nh3[data-v-8dff0d92] {\n  margin-bottom: var(--ve-footer-h3-margin-bottom);\n  font-size: var(--ve-footer-h3-font-size);\n  font-family: var(--ve-footer-h3-font-family);\n  color: var(--ve-footer-h3-color);\n}\nsection[data-v-8dff0d92] a {\n  color: var(--ve-footer-section-a-color);\n}\nsection[data-v-8dff0d92] a:hover,\nsection[data-v-8dff0d92] a:focus {\n  color: var(--ve-footer-section-a-hover-color);\n}\n\n/********************* SECOND PART *********************/\naside[data-v-8dff0d92] ul {\n  display: var(--ve-aside-ul-display);\n  flex-direction: var(--ve-aside-ul-flex-direction);\n  place-content: var(--ve-aside-ul-place-content);\n  gap: var(--ve-aside-ul-gap);\n  padding: var(--ve-aside-ul-padding);\n  background-color: var(--ve-aside-ul-background-color);\n}\naside[data-v-8dff0d92] a {\n  color: var(--ve-aside-a-color);\n}\naside[data-v-8dff0d92] i:hover,\naside[data-v-8dff0d92] i:focus {\n  transform: var(--ve-aside-a-hover-transform);\n  transition: var(--ve-aside-a-hover-transition);\n}\n\n/********************* RESPONSIVE *********************/\n@media (min-width: 576px) {\nfooter > ul[data-v-8dff0d92] {\n    place-content: var(--ve-footer-ul-place-content);\n}\n}\n";
styleInject(css_248z$2);script$1.render = render$1;
script$1.__scopeId = "data-v-8dff0d92";var script = {
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
  return vue.pushScopeId("data-v-7de81c9c"), n = n(), vue.popScopeId(), n;
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
}var css_248z$1 = "\n@import url(\"nav.css\");\n[id=\"app\"] {\n  margin-top: var(--ve-navbar-height);\n}\n";
styleInject(css_248z$1);var css_248z = "\n.sidebar[data-v-7de81c9c] {\n  display: var(--ve-sidebar-display);\n  flex-flow: var(--ve-sidebar-flex-flow);\n  position: var(--ve-sidebar-position);\n  top: var(--ve-sidebar-top);\n  left: var(--ve-sidebar-left);\n  z-index: var(--ve-sidebar-z-index);\n  width: var(--ve-sidebar-width);\n}\n.sidebar[data-v-7de81c9c] a {\n  display: var(--ve-sidebar-a-display);\n  place-content: var(--ve-sidebar-a-place-content);\n  place-items: var(--ve-sidebar-a-place-items);\n  margin: var(--ve-sidebar-a-margin);\n  border-radius: var(--ve-sidebar-a-border-radius);\n  padding: var(--ve-sidebar-a-padding);\n  width: var(--ve-sidebar-a-width);\n  background-color: var(--ve-sidebar-a-background-color);\n  color: var(--ve-sidebar-a-color);\n  cursor: var(--ve-sidebar-a-cursor);\n}\n.sidebar[data-v-7de81c9c] a:hover,\n.sidebar[data-v-7de81c9c] a:focus {\n  border-radius: var(--ve-sidebar-a-hover-border-radius);\n  color: var(--ve-sidebar-a-hover-color);\n  background-color: var(--ve-sidebar-a-hover-background-color);\n  transform: var(--ve-sidebar-a-hover-transform);\n  transition: var(--ve-sidebar-a-hover-transition);\n}\n.navbar[data-v-7de81c9c] {\n  display: var(--ve-navbar-display);\n  place-content: var(--ve-navbar-place-content);\n  place-items: var(--ve-navbar-place-items);\n  position: var(--ve-navbar-position);\n  top: var(--ve-navbar-top);\n  right: var(--ve-navbar-right);\n  bottom: var(--ve-navbar-bottom);\n  left: var(--ve-navbar-left);\n  z-index: var(--ve-navbar-z-index);\n  height: var(--ve-navbar-height);\n  background-color: var(--ve-navbar-background-color);\n  color: var(--ve-navbar-color);\n}\n.navbar[data-v-7de81c9c] a,\n.navbar[data-v-7de81c9c] button {\n  padding: var(--ve-navbar-a-padding);\n  color: var(--ve-navbar-a-color);\n  cursor: var(--ve-navbar-a-cursor);\n}\n.navbar[data-v-7de81c9c] ul {\n  display: var(--ve-navbar-ul-display);\n  place-items: var(--ve-navbar-ul-place-items);\n  margin: var(--ve-navbar-ul-margin);\n  padding: var(--ve-navbar-ul-padding);\n  list-style: var(--ve-navbar-ul-list-style);\n}\n.navbar ul a[data-v-7de81c9c] {\n  display: var(--ve-navbar-ul-a-display);\n}\n.navbar ul a[data-v-7de81c9c] :not(i) {\n  display: var(--ve-navbar-ul-a-not-i-display);\n}\n.navbar[data-v-7de81c9c] ul a,\n.navbar[data-v-7de81c9c] ul button {\n  flex-direction: var(--ve-navbar-ul-a-flex-direction);\n}\n.navbar ul a[data-v-7de81c9c]:hover,\n.navbar ul a[data-v-7de81c9c]:focus,\n.navbar ul button[data-v-7de81c9c]:hover,\n.navbar ul button[data-v-7de81c9c]:focus {\n  color: var(--ve-navbar-first-ul-a-hover-color) !important;\n  transform: var(--ve-navbar-first-ul-a-hover-transform) !important;\n}\n.navbar[data-v-7de81c9c] ul:last-of-type a:hover,\n.navbar[data-v-7de81c9c] ul:last-of-type a:focus,\n.navbar[data-v-7de81c9c] ul:last-of-type button:hover,\n.navbar[data-v-7de81c9c] ul:last-of-type button:focus {\n  color: var(--ve-navbar-last-ul-a-hover-color);\n}\n.navbar[data-v-7de81c9c] button {\n  background-color: var(--ve-navbar-button-background-color);\n  border: var(--ve-navbar-button-border);\n  cursor: var(--ve-navbar-button-cursor);\n}\n.navbar[data-v-7de81c9c] i {\n  place-self: var(--ve-navbar-i-place-self);\n}\n.hide[data-v-7de81c9c] {\n  display: var(--ve-hide-display) !important;\n}\n.show[data-v-7de81c9c] {\n  display: var(--ve-show-display);\n}\n@media (min-width: 768px) {\n.navbar > button[data-v-7de81c9c] {\n    display: var(--ve-navbar-button-display);\n}\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-7de81c9c";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,BtnElt:script$8,FieldElt:script$7,MediaElt:script$6,ListElt:script$5,SliderElt:script$4,TableElt:script$3,CardElt:script$2,FootElt:script$1,NavElt:script});var install = function installVueElt(app) {
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