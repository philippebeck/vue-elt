import { openBlock, createElementBlock, renderSlot, createTextVNode, toDisplayString, createCommentVNode, Fragment, renderList, createElementVNode, pushScopeId, popScopeId, normalizeClass } from 'vue';

var script$8 = {
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
    getBtnType() {
      if (this.type === "button" || this.type === "submit" || this.type === "reset") {
        return "button";
      }
      return "link";
    }
  }
};

const _hoisted_1$8 = ["id", "name", "title", "type", "value"];
const _hoisted_2$8 = ["href", "id", "title"];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.getBtnType() === 'button' ? (openBlock(), createElementBlock("button", {
    key: 0,
    id: $props.id,
    name: $props.name,
    title: $props.title,
    type: $props.type,
    value: $props.value
  }, [renderSlot(_ctx.$slots, "btn"), createTextVNode(" " + toDisplayString($props.content), 1)], 8, _hoisted_1$8)) : (openBlock(), createElementBlock("a", {
    key: 1,
    href: $props.href,
    id: $props.id,
    title: $props.title
  }, [renderSlot(_ctx.$slots, "btn"), createTextVNode(" " + toDisplayString($props.content), 1)], 8, _hoisted_2$8));
}

function styleInject(css, ref) {
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
}

var css_248z$i = "\n/********** BTN ELT **********/\na,\nbutton {\n  --ve-btn-display: inline-block;\n  --ve-btn-margin: 10px;\n  --ve-btn-border: solid 2px var(--ani-white);\n  --ve-btn-border-radius: 10px;\n  --ve-btn-padding: 5px 10px;\n  --ve-btn-font-family: var(--ani-monospace);\n  --ve-btn-font-size: 1.2rem;\n  --ve-btn-font-weight: bold;\n  --ve-btn-text-align: center;\n  --ve-btn-text-decoration: none;\n  --ve-btn-background-color: var(--ani-black);\n  --ve-btn-color: var(--ani-white);\n  --ve-btn-cursor: pointer;\n  --ve-btn-hover-border-color: var(--ani-black);\n  --ve-btn-hover-border-radius: 5px;\n  --ve-btn-hover-background-color: var(--ani-white);\n  --ve-btn-hover-color: var(--ani-black);\n  --ve-btn-hover-box-shadow: inset 0 0 5px 2px;\n  --ve-btn-hover-transition: all 200ms;\n  --ve-btn-child-display: block;\n  --ve-btn-child-margin: auto;\n}\n\n";
styleInject(css_248z$i);

var css_248z$h = "\na[data-v-6330e384],\nbutton[data-v-6330e384] {\n  display: var(--ve-btn-display);\n  margin: var(--ve-btn-margin);\n  border: var(--ve-btn-border);\n  border-radius: var(--ve-btn-border-radius);\n  padding: var(--ve-btn-padding);\n  font-family: var(--ve-btn-font-family);\n  font-size: var(--ve-btn-font-size);\n  font-weight: var(--ve-btn-font-weight);\n  text-align: var(--ve-btn-text-align);\n  text-decoration: var(--ve-btn-text-decoration);\n  background-color: var(--ve-btn-background-color);\n  color: var(--ve-btn-color);\n  cursor: var(--ve-btn-cursor);\n}\na[data-v-6330e384]:hover,\na[data-v-6330e384]:focus,\nbutton[data-v-6330e384]:hover,\nbutton[data-v-6330e384]:focus {\n  border-color: var(--ve-btn-hover-border-color);\n  border-radius: var(--ve-btn-hover-border-radius);\n  background-color: var(--ve-btn-hover-background-color);\n  color: var(--ve-btn-hover-color);\n  box-shadow: var(--ve-btn-hover-box-shadow);\n  transition: var(--ve-btn-hover-transition);\n}\na > *[data-v-6330e384],\nbutton > *[data-v-6330e384] {\n  display: var(--ve-btn-child-display);\n  margin: var(--ve-btn-child-margin);\n}\n\n/* RED */\n.btn-red[data-v-6330e384] {\n  background-color: var(--ani-red);\n}\n.btn-red[data-v-6330e384]:hover,\n.btn-red[data-v-6330e384]:focus {\n  border-color: var(--ani-red);\n  color: var(--ani-red);\n}\n\n/* ORANGE */\n.btn-orange[data-v-6330e384] {\n  background-color: var(--ani-orange);\n}\n.btn-orange[data-v-6330e384]:hover,\n.btn-orange[data-v-6330e384]:focus {\n  border-color: var(--ani-orange);\n  color: var(--ani-orange);\n}\n\n/* YELLOW */\n.btn-yellow[data-v-6330e384] {\n  background-color: var(--ani-yellow);\n}\n.btn-yellow[data-v-6330e384]:hover,\n.btn-yellow[data-v-6330e384]:focus {\n  border-color: var(--ani-yellow);\n  color: var(--ani-yellow);\n}\n\n/* GREEN */\n.btn-green[data-v-6330e384] {\n  background-color: var(--ani-green);\n}\n.btn-green[data-v-6330e384]:hover,\n.btn-green[data-v-6330e384]:focus {\n  border-color: var(--ani-green);\n  color: var(--ani-green);\n}\n\n/* SKY */\n.btn-sky[data-v-6330e384] {\n  background-color: var(--ani-sky);\n}\n.btn-sky[data-v-6330e384]:hover,\n.btn-sky[data-v-6330e384]:focus {\n  border-color: var(--ani-sky);\n  color: var(--ani-sky);\n}\n\n/* BLUE */\n.btn-blue[data-v-6330e384] {\n  background-color: var(--ani-blue);\n}\n.btn-blue[data-v-6330e384]:hover,\n.btn-blue[data-v-6330e384]:focus {\n  border-color: var(--ani-blue);\n  color: var(--ani-blue);\n}\n\n/* VIOLET */\n.btn-violet[data-v-6330e384] {\n  background-color: var(--ani-violet);\n}\n.btn-violet[data-v-6330e384]:hover,\n.btn-violet[data-v-6330e384]:focus {\n  border-color: var(--ani-violet);\n  color: var(--ani-violet);\n}\n\n/* PINK */\n.btn-pink[data-v-6330e384] {\n  background-color: var(--ani-pink);\n}\n.btn-pink[data-v-6330e384]:hover,\n.btn-pink[data-v-6330e384]:focus {\n  border-color: var(--ani-pink);\n  color: var(--ani-pink);\n}\n";
styleInject(css_248z$h);

script$8.render = render$8;
script$8.__scopeId = "data-v-6330e384";

var script$7 = {
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
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    },
    onInput(event) {
      this.$emit("update:value", event.target.value);
    },
    getFieldType() {
      let fieldType = "";
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
};

const _hoisted_1$7 = ["title"];
const _hoisted_2$7 = {
  key: 0
};
const _hoisted_3$7 = ["id", "max", "min", "name", "step", "type", "value", "required"];
const _hoisted_4$7 = ["id", "name", "type", "value", "required"];
const _hoisted_5$4 = ["id", "name", "placeholder", "required"];
const _hoisted_6$4 = ["value"];
const _hoisted_7$3 = {
  key: 1
};
const _hoisted_8$3 = ["value"];
const _hoisted_9$3 = ["id", "name", "cols", "maxlength", "minlength", "placeholder", "rows", "value", "required"];
const _hoisted_10$2 = ["id", "maxlength", "minlength", "name", "placeholder", "type", "value", "required"];
const _hoisted_11$1 = ["for"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("fieldset", {
    title: $props.info
  }, [$options.hasSlot('legend') ? (openBlock(), createElementBlock("legend", _hoisted_2$7, [renderSlot(_ctx.$slots, "legend")])) : createCommentVNode("", true), $options.getFieldType() === 'number' ? (openBlock(), createElementBlock("input", {
    key: 1,
    id: $props.id,
    max: $props.max,
    min: $props.min,
    name: $props.id,
    step: $props.step,
    type: $props.type,
    value: $props.value,
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.onInput && $options.onInput(...arguments);
    }),
    required: $props.required
  }, null, 40, _hoisted_3$7)) : $options.getFieldType() === 'special' ? (openBlock(), createElementBlock("input", {
    key: 2,
    id: $props.id,
    name: $props.name,
    type: $props.type,
    value: $props.value,
    onInput: _cache[1] || (_cache[1] = function () {
      return $options.onInput && $options.onInput(...arguments);
    }),
    required: $props.required
  }, null, 40, _hoisted_4$7)) : $options.getFieldType() === 'list' ? (openBlock(), createElementBlock("select", {
    key: 3,
    id: $props.id,
    name: $props.id,
    placeholder: $props.info,
    onInput: _cache[2] || (_cache[2] = function () {
      return $options.onInput && $options.onInput(...arguments);
    }),
    required: $props.required
  }, [$props.value ? (openBlock(), createElementBlock("option", {
    key: 0,
    value: $props.value
  }, toDisplayString($props.value), 9, _hoisted_6$4)) : (openBlock(), createElementBlock("option", _hoisted_7$3, toDisplayString($props.info), 1)), (openBlock(true), createElementBlock(Fragment, null, renderList($props.list, (value, index) => {
    return openBlock(), createElementBlock("option", {
      key: index,
      value: value
    }, toDisplayString(value), 9, _hoisted_8$3);
  }), 128))], 40, _hoisted_5$4)) : $options.getFieldType() === 'area' ? (openBlock(), createElementBlock("textarea", {
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
      return $options.onInput && $options.onInput(...arguments);
    }),
    required: $props.required
  }, null, 40, _hoisted_9$3)) : (openBlock(), createElementBlock("input", {
    key: 5,
    id: $props.id,
    maxlength: $props.max,
    minlength: $props.min,
    name: $props.id,
    placeholder: $props.info,
    type: $props.type,
    value: $props.value,
    onInput: _cache[4] || (_cache[4] = function () {
      return $options.onInput && $options.onInput(...arguments);
    }),
    required: $props.required
  }, null, 40, _hoisted_10$2)), $options.hasSlot('label') ? (openBlock(), createElementBlock("label", {
    key: 6,
    for: $props.id
  }, [renderSlot(_ctx.$slots, "label")], 8, _hoisted_11$1)) : createCommentVNode("", true)], 8, _hoisted_1$7);
}

var css_248z$g = "\n/********** FIELD ELT **********/\nfieldset {\n  --ve-field-display: flex;\n  --ve-field-flex-flow: row wrap;\n  --ve-field-place-items: center;\n  --ve-field-margin: auto;\n  --ve-field-border: none;\n  --ve-field-padding: 0;\n  --ve-field-max-width: 500px;\n  --ve-field-text-align: center;\n  --ve-field-transition: max-width 1s;\n  --ve-field-child-box-sizing: border-box;\n  --ve-field-child-margin: 5px;\n  --ve-field-child-padding: 5px;\n}\nlegend {\n  --ve-field-legend-width: 93%;\n  --ve-field-legend-font-size: 1.2rem;\n  --ve-field-legend-color: var(--ani-gray);\n  --ve-field-hover-legend-color: var(--ani-black);\n}\nlabel {\n  --ve-field-label-width: 90%;\n  --ve-field-label-visibility: hidden;\n  --ve-field-label-font-size: 0.8rem;\n  --ve-field-label-font-style: italic;\n  --ve-field-label-color: var(--ani-blue);\n  --ve-field-hover-label-visibility: visible;\n  --ve-field-hover-label-transform: scale(1.1);\n  --ve-field-hover-label-transition: all 1s;\n}\ninput,\nselect,\ntextarea {\n  --ve-field-input-border: 1px solid var(--ani-blue);\n  --ve-field-input-border-radius: 10px;\n  --ve-field-input-outline: none;\n  --ve-field-input-width: 100%;\n  --ve-field-input-line-height: 1.8;\n  --ve-field-input-background-color: var(--ani-white);\n  --ve-field-hover-input-border: 1px solid var(--ani-sky);\n  --ve-field-hover-input-border-radius: 0;\n  --ve-field-hover-input-background-color: var(--ani-white);\n  --ve-field-hover-input-transition: all 500ms;\n}\n\n";
styleInject(css_248z$g);

var css_248z$f = "\nfieldset[data-v-81222a8c] {\n  display: var(--ve-field-display);\n  flex-flow: var(--ve-field-flex-flow);\n  place-items: var(--ve-field-place-items);;\n  margin: var(--ve-field-margin);\n  border: var(--ve-field-border);\n  padding: var(--ve-field-padding);\n  max-width: var(--ve-field-max-width);\n  text-align: var(--ve-field-text-align);\n  transition: var(--ve-field-transition);\n}\nfieldset > *[data-v-81222a8c] {\n  box-sizing: var(--ve-field-child-box-sizing);\n  margin: var(--ve-field-child-margin);\n  padding: var(--ve-field-child-padding);\n}\nlegend[data-v-81222a8c] {\n  width: var(--ve-field-legend-width);\n  font-size: var(--ve-field-legend-font-size);\n  color: var(--ve-field-legend-color);\n}\nfieldset:hover legend[data-v-81222a8c] {\n  color: var(--ve-field-hover-legend-color);\n}\nlabel[data-v-81222a8c] {\n  width: var(--ve-field-label-width);\n  visibility: var(--ve-field-label-visibility);\n  font-size: var(--ve-field-label-font-size);\n  font-style: var(--ve-field-label-font-style);\n  color: var(--ve-field-label-color);\n}\nfieldset:hover > label[data-v-81222a8c],\ninput:focus + label[data-v-81222a8c],\nselect:focus + label[data-v-81222a8c],\ntextarea:focus + label[data-v-81222a8c] {\n  visibility: var(--ve-field-hover-label-visibility);\n  transform: var(--ve-field-hover-label-transform);\n  transition: var(--ve-field-hover-label-transition);\n}\ninput[data-v-81222a8c],\nselect[data-v-81222a8c],\ntextarea[data-v-81222a8c] {\n  border: var(--ve-field-input-border);\n  border-radius: var(--ve-field-input-border-radius);\n  outline: var(--ve-field-input-outline);\n  width: var(--ve-field-input-width);\n  line-height: var(--ve-field-input-line-height);\n  background-color: var(--ve-field-input-background-color);\n}\nfieldset:hover > input[data-v-81222a8c],\nfieldset:hover > select[data-v-81222a8c],\nfieldset:hover > textarea[data-v-81222a8c],\ninput[data-v-81222a8c]:focus,\nselect[data-v-81222a8c]:focus,\ntextarea[data-v-81222a8c]:focus {\n  border: var(--ve-field-hover-input-border);\n  border-radius: var(--ve-field-hover-input-border-radius);\n  background-color: var(--ve-field-hover-input-background-color);\n  transition: var(--ve-field-hover-input-transition);\n}\n";
styleInject(css_248z$f);

script$7.render = render$7;
script$7.__scopeId = "data-v-81222a8c";

var script$6 = {
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
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
};

const _hoisted_1$6 = ["title"];
const _hoisted_2$6 = ["src", "loop"];
const _hoisted_3$6 = ["src", "loop", "height", "width"];
const _hoisted_4$6 = ["src", "type"];
const _hoisted_5$3 = {
  key: 2
};
const _hoisted_6$3 = ["srcset", "media", "type"];
const _hoisted_7$2 = ["src", "alt"];
const _hoisted_8$2 = ["src", "alt"];
const _hoisted_9$2 = {
  key: 4
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("figure", {
    title: $props.title
  }, [$props.type === 'audio' ? (openBlock(), createElementBlock("audio", {
    key: 0,
    controls: "",
    src: $props.src,
    loop: $props.loop
  }, [renderSlot(_ctx.$slots, "audio")], 8, _hoisted_2$6)) : $props.type === 'video' ? (openBlock(), createElementBlock("video", {
    key: 1,
    controls: "",
    src: $props.src,
    loop: $props.loop,
    height: $props.height,
    width: $props.width
  }, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.medias, (video, index) => {
    return openBlock(), createElementBlock("source", {
      key: index,
      src: video.src,
      type: video.type
    }, null, 8, _hoisted_4$6);
  }), 128)), renderSlot(_ctx.$slots, "video")], 8, _hoisted_3$6)) : $props.type === 'picture' ? (openBlock(), createElementBlock("picture", _hoisted_5$3, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.medias, (picture, index) => {
    return openBlock(), createElementBlock("source", {
      key: index,
      srcset: picture.src,
      media: picture.media,
      type: picture.type
    }, null, 8, _hoisted_6$3);
  }), 128)), createElementVNode("img", {
    src: $props.src,
    alt: $props.alt
  }, null, 8, _hoisted_7$2)])) : (openBlock(), createElementBlock("img", {
    key: 3,
    src: $props.src,
    alt: $props.alt
  }, null, 8, _hoisted_8$2)), $options.hasSlot('figcaption') ? (openBlock(), createElementBlock("figcaption", _hoisted_9$2, [renderSlot(_ctx.$slots, "figcaption")])) : createCommentVNode("", true)], 8, _hoisted_1$6);
}

var css_248z$e = "\n/********** MEDIA ELT **********/\nfigure {\n  --ve-media-figure-border: 1px solid transparent;\n  --ve-media-figure-border-radius: 20px;\n  --ve-media-figure-padding: 0;\n  --ve-media-figure-background-color: transparent;\n}\nimg {\n  --ve-media-img-border: 1px solid var(--ani-blue);\n  --ve-media-img-border-radius: 20px;\n  --ve-media-img-padding: 1px;\n  --ve-media-img-max-width: 100%;\n  --ve-media-img-height: auto;\n  --ve-media-img-object-fit: contain;\n  --ve-media-img-object-position: 50% 50%;\n}\naudio {\n  --ve-media-audio-border: 2px solid var(--ani-gray);\n  --ve-media-audio-border-radius: 10px;\n}\nvideo {\n  --ve-media-video-border: 2px solid var(--ani-black);\n  --ve-media-video-border-radius: 20px;\n}\nfigcaption {\n  --ve-media-figcaption-display: flex;\n  --ve-media-figcaption-flex-flow: column nowrap;\n  --ve-media-figcaption-place-content: center center;\n  --ve-media-figcaption-color: var(--ani-blue);\n}\n\n";
styleInject(css_248z$e);

var css_248z$d = "\nfigure[data-v-ef11aa1e] {\n  border: var(--ve-media-figure-border);\n  border-radius: var(--ve-media-figure-border-radius);\n  padding: var(--ve-media-figure-padding);\n  background-color: var(--ve-media-figure-background-color);\n}\nimg[data-v-ef11aa1e] {\n  border: var(--ve-media-img-border);\n  border-radius: var(--ve-media-img-border-radius);\n  padding: var(--ve-media-img-padding);\n  max-width: var(--ve-media-img-max-width);\n  height: var(--ve-media-img-height);\n  object-fit: var(--ve-media-img-object-fit);\n  object-position: var(--ve-media-img-object-position);\n}\naudio[data-v-ef11aa1e] {\n  border: var(--ve-media-audio-border);\n  border-radius: var(--ve-media-audio-border-radius);\n}\nvideo[data-v-ef11aa1e] {\n  border: var(--ve-media-video-border);\n  border-radius: var(--ve-media-video-border-radius);\n}\nfigcaption[data-v-ef11aa1e] {\n  display: var(--ve-media-figcaption-display);\n  flex-flow: var(--ve-media-figcaption-flex-flow);\n  place-content: var(--ve-media-figcaption-place-content);\n  color: var(--ve-media-figcaption-color);\n}\n";
styleInject(css_248z$d);

script$6.render = render$6;
script$6.__scopeId = "data-v-ef11aa1e";

var script$5 = {
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
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
};

const _hoisted_1$5 = {
  key: 0
};
const _hoisted_2$5 = {
  key: 0
};
const _hoisted_3$5 = {
  key: 1
};
const _hoisted_4$5 = {
  key: 0
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.dynamic === true ? (openBlock(), createElementBlock("ul", _hoisted_1$5, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
    return openBlock(), createElementBlock("li", {
      key: index
    }, [renderSlot(_ctx.$slots, "items", {
      index: index,
      item: item
    }, () => [createTextVNode(toDisplayString(item), 1)]), $options.hasSlot('nested') ? (openBlock(), createElementBlock("ul", _hoisted_2$5, [(openBlock(true), createElementBlock(Fragment, null, renderList(item, (value, key) => {
      return openBlock(), createElementBlock("li", {
        key: key
      }, [renderSlot(_ctx.$slots, "nested", {
        index: index,
        item: item,
        key: key,
        value: value
      }, () => [createTextVNode(toDisplayString(value), 1)])]);
    }), 128))])) : createCommentVNode("", true)]);
  }), 128))])) : (openBlock(), createElementBlock("ul", _hoisted_3$5, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
    return openBlock(), createElementBlock("li", {
      key: index
    }, [renderSlot(_ctx.$slots, `item-${index + 1}`, {
      index: index,
      item: item
    }, () => [createTextVNode(toDisplayString(item), 1)]), $options.hasSlot('nested') ? (openBlock(), createElementBlock("ul", _hoisted_4$5, [(openBlock(true), createElementBlock(Fragment, null, renderList(item, (value, key) => {
      return openBlock(), createElementBlock("li", {
        key: key
      }, [renderSlot(_ctx.$slots, `nested-${key + 1}`, {
        index: index,
        item: item,
        key: key,
        value: value
      }, () => [createTextVNode(toDisplayString(value), 1)])]);
    }), 128))])) : createCommentVNode("", true)]);
  }), 128))]));
}

var css_248z$c = "\n/********** LIST ELT **********/\nul {\n  --ve-list-margin: 20px 0;\n  --ve-list-padding: 0;\n  --ve-list-list-style: none;\n  --ve-list-text-align: center;\n  --ve-list-li-ul-display: flex;\n  --ve-list-li-ul-flex-flow: wrap;\n  --ve-list-li-ul-gap: 20px;\n  --ve-list-li-ul-place-content: center;\n  --ve-list-li-ul-place-items: end;\n  --ve-list-li-li-max-width: 300px;\n}\n\n";
styleInject(css_248z$c);

var css_248z$b = "\nul[data-v-ed6e4588] {\n  margin: var(--ve-list-margin);\n  padding: var(--ve-list-padding);\n  list-style: var(--ve-list-list-style);\n  text-align: var(--ve-list-text-align);\n}\nli > ul[data-v-ed6e4588] {\n  display: var(--ve-list-li-ul-display);\n  flex-flow: var(--ve-list-li-ul-flex-flow);\n  gap: var(--ve-list-li-ul-gap);\n  place-content: var(--ve-list-li-ul-place-content);\n  place-items: var(--ve-list-li-ul-place-items);\n}\nli li[data-v-ed6e4588] {\n  max-width: var(--ve-list-li-li-max-width);\n}\n";
styleInject(css_248z$b);

script$5.render = render$5;
script$5.__scopeId = "data-v-ed6e4588";

var script$4 = {
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
  data() {
    return {
      index: -1,
      intervalId: 0,
      autoElt: null,
      randomElt: null,
      autoState: this.auto,
      randomState: this.random
    };
  },
  beforeCreate() {
    for (let i = 0; i < 1000; i++) {
      clearTimeout(i);
    }
  },
  mounted() {
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
    setIcon(icon, add, remove) {
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
    setAuto(state, title, add, remove) {
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
    setRandom(state, title, add, remove) {
      this.randomState = state;
      this.randomElt.title = title;
      this.setIcon(this.randomElt.querySelector("i"), add, remove);
    },
    /**
     * SET SLIDE
     * @param {Number} index 
     */
    setSlide(index) {
      this.index = index;
      this.refreshSlide();
    },
    /**
     * SET KEYBOARD
     * @param {Object} event
     */
    setKeyboard(event) {
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
    getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    /******************** CHECKERS ********************/

    /**
     * HAS SLOT
     * @param {string} name 
     */
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    },
    /**
     * CHECK AUTO
     */
    checkAuto() {
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
    checkRandom() {
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
    runSlider() {
      if (this.autoState) {
        this.intervalId = window.setInterval(this.goNext, this.delay);
      } else {
        this.goNext();
      }
    },
    /**
     * REFRESH SLIDE
     */
    refreshSlide() {
      for (let i = 1; i <= this.slides.length; i++) {
        document.getElementById(`slide-${i}`).classList.remove("show");
      }
      document.getElementById(`slide-${this.index + 1}`).classList.add("show");
    },
    /**
     * GO NEXT SLIDE
     */
    goNext() {
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
    goPrevious() {
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
};

const _withScopeId$1 = n => (pushScopeId("data-v-b2efd158"), n = n(), popScopeId(), n);
const _hoisted_1$4 = {
  class: "slider"
};
const _hoisted_2$4 = {
  class: "controls"
};
const _hoisted_3$4 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createElementVNode("i", {
  class: "fas fa-step-backward fa-2x"
}, null, -1));
const _hoisted_4$4 = [_hoisted_3$4];
const _hoisted_5$2 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createElementVNode("i", {
  class: "fas fa-long-arrow-alt-right fa-2x"
}, null, -1));
const _hoisted_6$2 = [_hoisted_5$2];
const _hoisted_7$1 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createElementVNode("i", {
  class: "fas fa-random fa-2x"
}, null, -1));
const _hoisted_8$1 = [_hoisted_7$1];
const _hoisted_9$1 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createElementVNode("i", {
  class: "fas fa-pause fa-2x"
}, null, -1));
const _hoisted_10$1 = [_hoisted_9$1];
const _hoisted_11 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createElementVNode("i", {
  class: "fas fa-play fa-2x"
}, null, -1));
const _hoisted_12 = [_hoisted_11];
const _hoisted_13 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createElementVNode("i", {
  class: "fas fa-step-forward fa-2x"
}, null, -1));
const _hoisted_14 = [_hoisted_13];
const _hoisted_15 = {
  class: "slides"
};
const _hoisted_16 = ["id"];
const _hoisted_17 = {
  key: 0
};
const _hoisted_18 = {
  class: "gallery"
};
const _hoisted_19 = ["onClick"];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("figure", _hoisted_1$4, [createElementVNode("ul", _hoisted_2$4, [createElementVNode("li", null, [createElementVNode("button", {
    onClick: _cache[0] || (_cache[0] = $event => $options.goPrevious()),
    title: "Previous (←)"
  }, _hoisted_4$4)]), createElementVNode("li", null, [$props.random === true ? (openBlock(), createElementBlock("button", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = $event => $options.checkRandom()),
    id: "slider-random",
    title: "Normal"
  }, _hoisted_6$2)) : (openBlock(), createElementBlock("button", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = $event => $options.checkRandom()),
    id: "slider-random",
    title: "Random"
  }, _hoisted_8$1))]), createElementVNode("li", null, [$props.auto === true ? (openBlock(), createElementBlock("button", {
    key: 0,
    onClick: _cache[3] || (_cache[3] = $event => $options.checkAuto()),
    id: "slider-auto",
    title: "Pause"
  }, _hoisted_10$1)) : (openBlock(), createElementBlock("button", {
    key: 1,
    onClick: _cache[4] || (_cache[4] = $event => $options.checkAuto()),
    id: "slider-auto",
    title: "Play"
  }, _hoisted_12))]), createElementVNode("li", null, [createElementVNode("button", {
    onClick: _cache[5] || (_cache[5] = $event => $options.goNext()),
    title: "Next"
  }, _hoisted_14)])]), createElementVNode("ul", _hoisted_15, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.slides, (slide, index) => {
    return openBlock(), createElementBlock("li", {
      key: index,
      id: 'slide-' + (index + 1)
    }, [createElementVNode("figure", null, [renderSlot(_ctx.$slots, "slide", {
      slide: slide,
      index: index
    }), $options.hasSlot('info') ? (openBlock(), createElementBlock("figcaption", _hoisted_17, [renderSlot(_ctx.$slots, "info", {
      slide: slide,
      index: index
    })])) : createCommentVNode("", true)])], 8, _hoisted_16);
  }), 128))]), createElementVNode("ul", _hoisted_18, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.slides, (slide, index) => {
    return openBlock(), createElementBlock("li", {
      key: index,
      onClick: $event => $options.setSlide(index)
    }, [renderSlot(_ctx.$slots, "gallery", {
      slide: slide,
      index: index
    })], 8, _hoisted_19);
  }), 128))])]);
}

var css_248z$a = "\n/********** SLIDER ELT **********/\n.slider {\n  --ve-slider-margin: var(--ve-slider-figcaption-height) auto -20px;\n  --ve-slider-border: none;\n  --ve-slider-padding: 0;\n  --ve-slider-width: 100%;\n  --ve-slider-text-align: center;\n}\n[id*=\"slide-\"] {\n  --ve-slider-slide-display: none;\n}\nfigcaption {\n  --ve-slider-figcaption-padding: 5px 20px;\n  --ve-slider-figcaption-width: 100%;\n  --ve-slider-figcaption-height: 20%;\n  --ve-slider-figcaption-font-weight: bold;\n  --ve-slider-figcaption-color: var(--ani-sky);\n}\n.controls {\n  --ve-slider-controls-display: flex;\n  --ve-slider-controls-gap: 10px;\n  --ve-slider-controls-place-content: center;\n  --ve-slider-controls-opacity: 1;\n  --ve-slider-controls-hover-opacity: 1;\n  --ve-slider-controls-hover-color: var(--ani-sky);\n}\nbutton {\n  --ve-slider-button-border: none;\n  --ve-slider-button-font-size: 60%;\n  --ve-slider-button-background-color: none;\n  --ve-slider-button-color: var(--ani-grey-dark);\n}\n.gallery {\n  --ve-slider-gallery-display: flex;\n  --ve-slider-gallery-gap: 10px;\n  --ve-slider-gallery-place-content: center;\n  --ve-slider-gallery-opacity: 1;\n  --ve-slider-gallery-color: var(--ani-gray);\n  --ve-slider-hover-gallery-opacity: 1;\n  --ve-slider-gallery-child-hover-color: var(--ani-sky);\n  --ve-slider-gallery-child-hover-cursor: pointer;\n}\n.show {\n  --ve-slider-show-display: list-item;\n}\n@media (min-width: 1200px) {\n.controls {\n  --ve-slider-controls-opacity: 0;\n}\n.gallery {\n    --ve-slider-gallery-opacity: 0;\n}\n}\n\n";
styleInject(css_248z$a);

var css_248z$9 = "\nul[data-v-b2efd158] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.slider[data-v-b2efd158] {\n  margin: var(--ve-slider-margin);\n  border: var(--ve-slider-border);\n  padding: var(--ve-slider-padding);\n  width: var(--ve-slider-width);\n  text-align: var(--ve-slider-text-align);\n}\n[id*=\"slide-\"][data-v-b2efd158] {\n  display: var(--ve-slider-slide-display);\n}\nfigcaption[data-v-b2efd158] {\n  padding: var(--ve-slider-figcaption-padding);\n  width: var(--ve-slider-figcaption-width);\n  height: var(--ve-slider-figcaption-height);\n  font-weight: var(--ve-slider-figcaption-font-weight);\n  color: var(--ve-slider-figcaption-color);\n}\n.controls[data-v-b2efd158] {\n  display: var(--ve-slider-controls-display);\n  gap: var(--ve-slider-controls-gap);\n  place-content: var(--ve-slider-controls-place-content);\n  opacity: var(--ve-slider-controls-opacity);\n}\n.slider:hover .controls[data-v-b2efd158],\n.slider:focus .controls[data-v-b2efd158] {\n  opacity: var(--ve-slider-controls-hover-opacity);\n}\n.controls > *[data-v-b2efd158]:hover,\n.controls > *[data-v-b2efd158]:focus {\n  color: var(--ve-slider-controls-hover-color);\n}\nbutton[data-v-b2efd158] {\n  border: var(--ve-slider-button-border);\n  font-size: var(--ve-slider-button-font-size);\n  background-color: var(--ve-slider-button-background-color);\n  color: var(--ve-slider-button-color);\n}\n.gallery[data-v-b2efd158] {\n  display: var(--ve-slider-gallery-display);\n  gap: var(--ve-slider-gallery-gap);\n  place-content: var(--ve-slider-gallery-place-content);\n  opacity: var(--ve-slider-gallery-opacity);\n  color: var(--ve-slider-gallery-color);\n}\n.slider:hover .gallery[data-v-b2efd158],\n.slider:focus .gallery[data-v-b2efd158] {\n  opacity: var(--ve-slider-hover-gallery-opacity);\n}\n.gallery > *[data-v-b2efd158]:hover,\n.gallery > *[data-v-b2efd158]:focus {\n  color: var(--ve-slider-gallery-child-hover-color);\n  cursor: var(--ve-slider-gallery-child-hover-cursor);\n}\n.show[data-v-b2efd158] {\n  display: var(--ve-slider-show-display);\n}\n";
styleInject(css_248z$9);

script$4.render = render$4;
script$4.__scopeId = "data-v-b2efd158";

var script$3 = {
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
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
};

const _hoisted_1$3 = {
  key: 0
};
const _hoisted_2$3 = {
  key: 0
};
const _hoisted_3$3 = {
  key: 0
};
const _hoisted_4$3 = {
  key: 1
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", null, [$options.hasSlot('title') ? (openBlock(), createElementBlock("caption", _hoisted_1$3, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString($props.title), 1)])])) : createCommentVNode("", true), createElementVNode("thead", null, [createElementVNode("tr", null, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items[0], (value, key) => {
    return openBlock(), createElementBlock("th", {
      key: key
    }, toDisplayString(key === "_id" ? key = "id" : key), 1);
  }), 128)), $options.hasSlot('head') ? (openBlock(), createElementBlock("th", _hoisted_2$3, [renderSlot(_ctx.$slots, "head")])) : createCommentVNode("", true)])]), createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
    return openBlock(), createElementBlock("tr", {
      key: index
    }, [(openBlock(true), createElementBlock(Fragment, null, renderList(item, (value, key) => {
      return openBlock(), createElementBlock("td", {
        key: key
      }, [renderSlot(_ctx.$slots, `cell-${key}`, {
        index: index,
        item: item,
        key: key,
        value: value
      }, () => [createTextVNode(toDisplayString(value), 1)])]);
    }), 128)), $options.hasSlot('body') ? (openBlock(), createElementBlock("td", _hoisted_3$3, [renderSlot(_ctx.$slots, "body", {
      index: index,
      item: item
    })])) : createCommentVNode("", true)]);
  }), 128))]), $options.hasSlot('foot') ? (openBlock(), createElementBlock("tfoot", _hoisted_4$3, [renderSlot(_ctx.$slots, "foot")])) : createCommentVNode("", true)]);
}

var css_248z$8 = "\n/********** TABLE ELT **********/\ntable {\n  --ve-table-display: table;\n  --ve-table-overflow: hidden;\n  --ve-table-table-layout: fixed;\n  --ve-table-margin: 50px auto;\n  --ve-table-border-collapse: separate;\n  --ve-table-border-spacing: 1px;\n  --ve-table-border-radius: 10px;\n  --ve-table-width: 100%;\n  --ve-table-max-width: 100%;\n  --ve-table-font-size: 1.5rem;\n}\ncaption {\n  --ve-table-caption-caption-side: top;\n  --ve-table-caption-margin-bottom: 20px;\n  --ve-table-caption-font-size: 1.5rem;\n  --ve-table-caption-font-weight: bold;\n  --ve-table-caption-color: var(--ani-gray);\n  --ve-table-caption-text-shadow: 1px 1px 2px;\n}\nthead {\n  --ve-table-thead-border-radius: 10px;\n}\ntr {\n  --ve-table-tr-display: flex;\n  --ve-table-tr-flex-flow: column;\n  --ve-table-tr-padding: 20px;\n  --ve-table-tbody-tr-even-background-color: var(--ani-gray-light);\n  --ve-table-tbody-tr-even-color: var(--ani-black);\n  --ve-table-tbody-tr-odd-background-color: var(--ani-white);\n  --ve-table-tbody-tr-odd-color: var(--ani-gray);\n  --ve-table-tbody-tr-hover-background-color: var(--ani-silver);\n  --ve-table-tbody-tr-hover-color: var(--ani-black);\n}\nth {\n  --ve-table-th-display: none;\n  --ve-table-th-padding: 5px;\n  --ve-table-th-font-size: 1.5rem;\n  --ve-table-th-font-style: italic;\n  --ve-table-th-text-align: center;\n  --ve-table-th-text-transform: uppercase;\n  --ve-table-th-vertical-align: middle;\n  --ve-table-th-background-color: var(--ani-blue);\n  --ve-table-th-color: var(--ani-white);\n}\ntd {\n  --ve-table-td-display: table;\n  --ve-table-td-padding: 5px;\n  --ve-table-td-text-align: center;\n  --ve-table-td-vertical-align: middle;\n  --ve-table-td-word-break: normal;\n  --ve-table-td-cursor: cell;\n}\n@media (min-width: 576px) {\ntable {\n    --ve-table-max-width: 99%;\n}\n}\n@media (min-width: 768px) {\ntable {\n    --ve-table-max-width: 98%;\n}\n}\n@media (min-width: 992px) {\ntable {\n    --ve-table-max-width: 97%;\n}\n}\n@media (min-width: 1200px) {\ntable {\n    --ve-table-max-width: 96%;\n}\ntr {\n    --ve-table-tr-display: table-row;\n}\nth {\n    --ve-table-th-display: table-cell;\n}\ntd {\n    --ve-table-td-display: table-cell;\n}\n}\n@media (min-width: 1600px) {\ntable {\n    --ve-table-max-width: 95%;\n}\n}\n\n";
styleInject(css_248z$8);

var css_248z$7 = "\ntable[data-v-7218f3b5] {\n  display: var(--ve-table-display);\n  overflow: var(--ve-table-overflow);\n  table-layout: var(--ve-table-table-layout);\n  margin: var(--ve-table-margin);\n  border-collapse: var(--ve-table-border-collapse);\n  border-spacing: var(--ve-table-border-spacing);\n  border-radius: var(--ve-table-border-radius);\n  width: var(--ve-table-width);\n  max-width: var(--ve-table-max-width);\n  font-size: var(--ve-table-font-size);\n}\ncaption[data-v-7218f3b5] {\n  caption-side: var(--ve-table-caption-caption-side);\n  margin-bottom: var(--ve-table-caption-margin-bottom);\n  font-size: var(--ve-table-caption-font-size);\n  font-weight: var(--ve-table-caption-font-weight);\n  color: var(--ve-table-caption-color);\n  text-shadow: var(--ve-table-caption-text-shadow);\n}\nthead[data-v-7218f3b5] {\n  border-radius: var(--ve-table-thead-border-radius);\n}\ntr[data-v-7218f3b5] {\n  display: var(--ve-table-tr-display);\n  flex-flow: var(--ve-table-tr-flex-flow);\n  padding: var(--ve-table-tr-padding);\n}\ntbody tr[data-v-7218f3b5]:nth-child(even) {\n  background-color: var(--ve-table-tbody-tr-even-background-color);\n  color: var(--ve-table-tbody-tr-even-color);\n}\ntbody tr[data-v-7218f3b5]:nth-child(odd) {\n  background-color: var(--ve-table-tbody-tr-odd-background-color);\n  color: var(--ve-table-tbody-tr-odd-color);\n}\ntbody tr[data-v-7218f3b5]:hover,\ntbody tr[data-v-7218f3b5]:focus {\n  background-color: var(--ve-table-tbody-tr-hover-background-color);\n  color: var(--ve-table-tbody-tr-hover-color);\n}\nth[data-v-7218f3b5] {\n  display: var(--ve-table-th-display);\n  padding: var(--ve-table-th-padding);\n  font-size: var(--ve-table-th-font-size);\n  font-style: var(--ve-table-th-font-style);\n  text-align: var(--ve-table-th-text-align);\n  text-transform: var(--ve-table-th-text-transform);\n  vertical-align: var(--ve-table-th-vertical-align);\n  background-color: var(--ve-table-th-background-color);\n  color: var(--ve-table-th-color);\n}\ntd[data-v-7218f3b5] {\n  display: var(--ve-table-td-display);\n  padding: var(--ve-table-td-padding);\n  text-align: var(--ve-table-td-text-align);\n  vertical-align: var(--ve-table-td-vertical-align);\n  word-break: var(--ve-table-td-word-break);;\n  cursor: var(--ve-table-td-cursor);\n}\n\n";
styleInject(css_248z$7);

script$3.render = render$3;
script$3.__scopeId = "data-v-7218f3b5";

var script$2 = {
  name: "CardElt",
  props: {
    isArticle: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
};

const _hoisted_1$2 = {
  key: 0
};
const _hoisted_2$2 = {
  key: 0
};
const _hoisted_3$2 = {
  key: 1
};
const _hoisted_4$2 = {
  key: 1
};
const _hoisted_5$1 = {
  key: 0
};
const _hoisted_6$1 = {
  key: 1
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.isArticle === true ? (openBlock(), createElementBlock("article", _hoisted_1$2, [createElementVNode("header", null, [renderSlot(_ctx.$slots, "header")]), renderSlot(_ctx.$slots, "body"), $options.hasSlot('aside') ? (openBlock(), createElementBlock("aside", _hoisted_2$2, [renderSlot(_ctx.$slots, "aside")])) : createCommentVNode("", true), $options.hasSlot('footer') ? (openBlock(), createElementBlock("footer", _hoisted_3$2, [renderSlot(_ctx.$slots, "footer")])) : createCommentVNode("", true)])) : (openBlock(), createElementBlock("section", _hoisted_4$2, [createElementVNode("header", null, [renderSlot(_ctx.$slots, "header")]), renderSlot(_ctx.$slots, "body"), $options.hasSlot('aside') ? (openBlock(), createElementBlock("aside", _hoisted_5$1, [renderSlot(_ctx.$slots, "aside")])) : createCommentVNode("", true), $options.hasSlot('footer') ? (openBlock(), createElementBlock("footer", _hoisted_6$1, [renderSlot(_ctx.$slots, "footer")])) : createCommentVNode("", true)]));
}

var css_248z$6 = "\n/********** CARD ELT **********/\narticle,\nsection {\n  --ve-card-box-sizing: border-box;\n  --ve-card-margin: auto;\n  --ve-card-border: 1px solid transparent;\n  --ve-card-border-radius: 10px;\n  --ve-card-padding: 10px;\n  --ve-card-width: 95%;\n  --ve-card-background-color: transparent;\n  --ve-card-color: var(--ani-gray);\n}\n\n";
styleInject(css_248z$6);

var css_248z$5 = "\narticle[data-v-12d6d6d2],\nsection[data-v-12d6d6d2] {\n  box-sizing: var(--ve-card-box-sizing);\n  margin: var(--ve-card-margin);\n  border: var(--ve-card-border);\n  border-radius: var(--ve-card-border-radius);\n  padding: var(--ve-card-padding);\n  width: var(--ve-card-width);\n  background-color: var(--ve-card-background-color);\n  color: var(--ve-card-color);\n}\n";
styleInject(css_248z$5);

script$2.render = render$2;
script$2.__scopeId = "data-v-12d6d6d2";

var script$1 = {
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
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
};

const _hoisted_1$1 = {
  key: 0
};
const _hoisted_2$1 = {
  key: 1
};
const _hoisted_3$1 = {
  key: 2
};
const _hoisted_4$1 = {
  key: 0
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", null, [createElementVNode("ul", null, [$options.hasSlot('foot1') ? (openBlock(), createElementBlock("li", _hoisted_1$1, [createElementVNode("section", null, [createElementVNode("h3", null, toDisplayString($props.title1), 1), renderSlot(_ctx.$slots, "foot1")])])) : createCommentVNode("", true), $options.hasSlot('foot2') ? (openBlock(), createElementBlock("li", _hoisted_2$1, [createElementVNode("section", null, [createElementVNode("h3", null, toDisplayString($props.title2), 1), renderSlot(_ctx.$slots, "foot2")])])) : createCommentVNode("", true), $options.hasSlot('foot3') ? (openBlock(), createElementBlock("li", _hoisted_3$1, [createElementVNode("section", null, [createElementVNode("h3", null, toDisplayString($props.title3), 1), renderSlot(_ctx.$slots, "foot3")])])) : createCommentVNode("", true)]), $options.hasSlot('foot') ? (openBlock(), createElementBlock("aside", _hoisted_4$1, [renderSlot(_ctx.$slots, "foot")])) : createCommentVNode("", true)]);
}

var css_248z$4 = "\n/********** FOOT ELT **********/\nfooter {\n  --ve-foot-text-align: center;\n  --ve-foot-child-margin: 0;\n  --ve-foot-child-padding: 0;\n  --ve-foot-li-list-style: none;\n  --ve-foot-a-text-decoration: none;\n  --ve-foot-ul-display: flex;\n  --ve-foot-ul-flex-flow: column;\n  --ve-foot-ul-gap: 20px;\n  --ve-foot-ul-place-content: center;\n  --ve-foot-ul-place-items: center;\n  --ve-foot-ul-padding: 20px;\n  --ve-foot-ul-background-color: var(--ani-sky);\n  --ve-foot-title-margin-bottom: 5px;\n  --ve-foot-title-font-size: 2rem;\n  --ve-foot-title-font-family: var(--ani-monospace);\n  --ve-foot-title-color: var(--ani-yellow);\n  --ve-foot-section-a-color: var(--ani-white);\n  --ve-foot-section-a-hover-color: var(--ani-gray);\n}\naside {\n  --ve-foot-aside-ul-display: flex;\n  --ve-foot-aside-ul-flex-flow: row;\n  --ve-foot-aside-ul-gap: 10px;\n  --ve-foot-aside-ul-place-content: center;\n  --ve-foot-aside-ul-place-items: center;\n  --ve-foot-aside-ul-padding: 10px;\n  --ve-foot-aside-ul-background-color: var(--ani-white);\n  --ve-foot-aside-a-color: var(--ani-blue);\n  --ve-foot-aside-i-hover-transform: scale(1.2);\n  --ve-foot-aside-i-hover-transition: transform 200ms;\n}\n@media (min-width: 576px) {\nfooter {\n    --ve-foot-ul-flex-flow: row;\n    --ve-foot-ul-place-content: space-around;\n}\n}\n@media (min-width: 768px) {\nfooter {\n    --ve-foot-ul-place-content: space-evenly;\n}\n}\n@media (min-width: 992px) {\nfooter {\n    --ve-foot-ul-place-content: center;\n    --ve-foot-ul-gap: 10%;\n}\n}\n\n";
styleInject(css_248z$4);

var css_248z$3 = "\nfooter[data-v-78edd541] {\n  text-align: var(--ve-foot-text-align);\n}\nh3[data-v-78edd541],\nh4[data-v-78edd541],[data-v-78edd541] ul {\n  margin: var(--ve-foot-child-margin);\n  padding: var(--ve-foot-child-padding);\n}\n[data-v-78edd541] li {\n  list-style: var(--ve-foot-li-list-style);\n}\n[data-v-78edd541] a {\n  text-decoration: var(--ve-foot-a-text-decoration);\n}\n\n/********************* MAIN PART *********************/\nfooter > ul[data-v-78edd541] { \n  display: var(--ve-foot-ul-display);\n  flex-flow: var(--ve-foot-ul-flex-flow);\n  gap: var(--ve-foot-ul-gap);\n  place-content: var(--ve-foot-ul-place-content);\n  place-items: var(--ve-foot-ul-place-items);\n  padding: var(--ve-foot-ul-padding);\n  background-color: var(--ve-foot-ul-background-color);\n}\nh3[data-v-78edd541],\nh4[data-v-78edd541] {\n  margin-bottom: var(--ve-foot-title-margin-bottom);\n  font-size: var(--ve-foot-title-font-size);\n  font-family: var(--ve-foot-title-font-family);\n  color: var(--ve-foot-title-color);\n}\nsection[data-v-78edd541] a {\n  color: var(--ve-foot-section-a-color);\n}\nsection[data-v-78edd541] a:hover,\nsection[data-v-78edd541] a:focus {\n  color: var(--ve-foot-section-a-hover-color);\n}\n\n/********************* SECOND PART *********************/\naside[data-v-78edd541] ul {\n  display: var(--ve-foot-aside-ul-display);\n  flex-flow: var(--ve-foot-aside-ul-flex-flow);\n  gap: var(--ve-foot-aside-ul-gap);\n  place-content: var(--ve-foot-aside-ul-place-content);\n  place-items: var(--ve-foot-aside-ul-place-items);\n  padding: var(--ve-foot-aside-ul-padding);\n  background-color: var(--ve-foot-aside-ul-background-color);\n}\naside[data-v-78edd541] a {\n  color: var(--ve-foot-aside-a-color);\n}\naside[data-v-78edd541] i:hover,\naside[data-v-78edd541] i:focus {\n  transform: var(--ve-foot-aside-i-hover-transform);\n  transition: var(--ve-foot-aside-i-hover-transition);\n}\n";
styleInject(css_248z$3);

script$1.render = render$1;
script$1.__scopeId = "data-v-78edd541";

var script = {
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
    getNavClass() {
      if (this.class === "sidebar") {
        return "sidebar";
      }
      return "navbar";
    },
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    },
    toggleMenu() {
      const nav = document.getElementById("nav");
      const admin = document.getElementById("admin");
      nav.classList.toggle("show");
      nav.classList.toggle("hide");
      admin.classList.toggle("show");
      admin.classList.toggle("hide");
    }
  }
};

const _withScopeId = n => (pushScopeId("data-v-7d195c1c"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "sidebar"
};
const _hoisted_2 = ["href", "title"];
const _hoisted_3 = {
  key: 0,
  href: "#top",
  title: "Top of the Page"
};
const _hoisted_4 = {
  key: 1,
  class: "navbar"
};
const _hoisted_5 = {
  key: 0,
  href: "/",
  title: "Home"
};
const _hoisted_6 = {
  id: "nav",
  class: "show"
};
const _hoisted_7 = ["href", "title"];
const _hoisted_8 = {
  key: 1,
  id: "admin",
  class: "hide"
};
const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("i", {
  class: "fa-solid fa-bars"
}, null, -1));
const _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.getNavClass() === 'sidebar' ? (openBlock(), createElementBlock("nav", _hoisted_1, [renderSlot(_ctx.$slots, "first"), (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
    return openBlock(), createElementBlock("a", {
      key: index,
      href: `#${item}`,
      title: item
    }, [renderSlot(_ctx.$slots, "items", {
      item: item,
      index: index
    }, () => [createTextVNode(toDisplayString(item), 1)])], 8, _hoisted_2);
  }), 128)), renderSlot(_ctx.$slots, "last"), $options.hasSlot('top') ? (openBlock(), createElementBlock("a", _hoisted_3, [renderSlot(_ctx.$slots, "top")])) : createCommentVNode("", true)])) : (openBlock(), createElementBlock("nav", _hoisted_4, [$options.hasSlot('brand') ? (openBlock(), createElementBlock("a", _hoisted_5, [renderSlot(_ctx.$slots, "brand")])) : createCommentVNode("", true), createElementVNode("ul", _hoisted_6, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
    return openBlock(), createElementBlock("li", {
      key: index
    }, [createElementVNode("a", {
      href: item.href,
      title: item.name
    }, [renderSlot(_ctx.$slots, "items", {
      item: item,
      index: index
    }, () => [createElementVNode("i", {
      class: normalizeClass(`fa-${item.type} fa-${item.icon} fa-fw`)
    }, null, 2)]), createElementVNode("b", null, toDisplayString(item.name), 1)], 8, _hoisted_7)]);
  }), 128))]), $options.hasSlot('admin') ? (openBlock(), createElementBlock("aside", _hoisted_8, [renderSlot(_ctx.$slots, "admin")])) : createCommentVNode("", true), createElementVNode("button", {
    type: "button",
    onClick: _cache[0] || (_cache[0] = $event => $options.toggleMenu()),
    title: "Menu"
  }, _hoisted_10)]));
}

var css_248z$2 = "\n/********** NAV ELT **********/\n:root {\n  --ve-nav-height: 50px;\n}\n.navbar {\n  --ve-nav-display: flex;\n  --ve-nav-place-content: space-between;\n  --ve-nav-place-items: center;\n  --ve-nav-position: fixed;\n  --ve-nav-top: 0;\n  --ve-nav-right: 0;\n  --ve-nav-bottom: unset;\n  --ve-nav-left: 0;\n  --ve-nav-z-index: 1000;\n  --ve-nav-background-color: var(--ani-blue-dark);\n  --ve-nav-color: var(--ani-white);\n  --ve-nav-a-padding: 10px;\n  --ve-nav-a-color: var(--ani-white);\n  --ve-nav-a-cursor: pointer;\n  --ve-nav-ul-display: flex;\n  --ve-nav-ul-place-items: center;\n  --ve-nav-ul-margin: 0;\n  --ve-nav-ul-padding: 0;\n  --ve-nav-ul-list-style: none;\n  --ve-nav-ul-a-display: flex;\n  --ve-nav-ul-a-not-i-display: none;\n  --ve-nav-ul-a-flex-direction: column;\n  --ve-nav-ul-a-hover-color: var(--ani-yellow);\n  --ve-nav-ul-a-hover-transform: scale(0.9);\n  --ve-nav-last-ul-a-hover-color: var(--ani-red);\n  --ve-nav-button-background-color: transparent;\n  --ve-nav-button-border: none;\n  --ve-nav-button-cursor: pointer;\n  --ve-nav-i-place-self: center;\n}\n.sidebar {\n  --ve-side-display: flex;\n  --ve-side-flex-flow: column;\n  --ve-side-position: fixed;\n  --ve-side-top: calc(var(--ve-nav-height) + 10px);\n  --ve-side-left: 2px;\n  --ve-side-z-index: 10;\n  --ve-side-width: auto;\n  --ve-side-a-display: flex;\n  --ve-side-a-place-content: center;\n  --ve-side-a-place-items: center;\n  --ve-side-a-margin: 5px;\n  --ve-side-a-border-radius: 20px;\n  --ve-side-a-padding: 5px;\n  --ve-side-a-width: 100%;\n  --ve-side-a-background-color: var(--ani-white-dark);\n  --ve-side-a-color: var(--ani-blue-dark);\n  --ve-side-a-cursor: crosshair;\n  --ve-side-a-hover-border-radius: 10px;\n  --ve-side-a-hover-background-color: var(--ani-blue-dark);\n  --ve-side-a-hover-color: var(--ani-white-dark);\n  --ve-side-a-hover-transform: scale(1.1);\n  --ve-side-a-hover-transition: all 500ms;\n}\n.hide {\n  --ve-nav-hide-display: none;\n}\n.show {\n  --ve-nav-show-display: flex;\n}\n@media (min-width: 576px) {\n.navbar {\n    --ve-nav-place-content: space-around;\n}\n}\n@media (min-width: 768px) {\n:root {\n    --ve-nav-height: 80px;\n}\n.navbar {\n    --ve-nav-button-display: none;\n    --ve-nav-ul-a-not-i-display: flex;\n}\n.hide {\n    --ve-nav-hide-display: flex;\n}\n}\n\n";
styleInject(css_248z$2);

var css_248z$1 = "\n[id=\"app\"] {\n  margin-top: var(--ve-nav-height);\n}\n";
styleInject(css_248z$1);

var css_248z = "\n.navbar[data-v-7d195c1c] {\n  display: var(--ve-nav-display);\n  place-content: var(--ve-nav-place-content);\n  place-items: var(--ve-nav-place-items);\n  position: var(--ve-nav-position);\n  top: var(--ve-nav-top);\n  right: var(--ve-nav-right);\n  bottom: var(--ve-nav-bottom);\n  left: var(--ve-nav-left);\n  z-index: var(--ve-nav-z-index);\n  height: var(--ve-nav-height);\n  background-color: var(--ve-nav-background-color);\n  color: var(--ve-nav-color);\n}\n.navbar[data-v-7d195c1c] a,\n.navbar[data-v-7d195c1c] button {\n  padding: var(--ve-nav-a-padding);\n  color: var(--ve-nav-a-color);\n  cursor: var(--ve-nav-a-cursor);\n}\n.navbar[data-v-7d195c1c] ul {\n  display: var(--ve-nav-ul-display);\n  place-items: var(--ve-nav-ul-place-items);\n  margin: var(--ve-nav-ul-margin);\n  padding: var(--ve-nav-ul-padding);\n  list-style: var(--ve-nav-ul-list-style);\n}\n.navbar ul a[data-v-7d195c1c] {\n  display: var(--ve-nav-ul-a-display);\n}\n.navbar ul a[data-v-7d195c1c] :not(i) {\n  display: var(--ve-nav-ul-a-not-i-display);\n}\n.navbar[data-v-7d195c1c] ul a,\n.navbar[data-v-7d195c1c] ul button {\n  flex-direction: var(--ve-nav-ul-a-flex-direction);\n}\n.navbar ul a[data-v-7d195c1c]:hover,\n.navbar ul a[data-v-7d195c1c]:focus,\n.navbar ul button[data-v-7d195c1c]:hover,\n.navbar ul button[data-v-7d195c1c]:focus {\n  color: var(--ve-nav-ul-a-hover-color) !important;\n  transform: var(--ve-nav-ul-a-hover-transform) !important;\n}\n.navbar[data-v-7d195c1c] ul:last-of-type a:hover,\n.navbar[data-v-7d195c1c] ul:last-of-type a:focus,\n.navbar[data-v-7d195c1c] ul:last-of-type button:hover,\n.navbar[data-v-7d195c1c] ul:last-of-type button:focus {\n  color: var(--ve-nav-last-ul-a-hover-color);\n}\n.navbar[data-v-7d195c1c] button {\n  background-color: var(--ve-nav-button-background-color);\n  border: var(--ve-nav-button-border);\n  cursor: var(--ve-nav-button-cursor);\n}\n.navbar[data-v-7d195c1c] i {\n  place-self: var(--ve-nav-i-place-self);\n}\n.sidebar[data-v-7d195c1c] {\n  display: var(--ve-side-display);\n  flex-flow: var(--ve-side-flex-flow);\n  position: var(--ve-side-position);\n  top: var(--ve-side-top);\n  left: var(--ve-side-left);\n  z-index: var(--ve-side-z-index);\n  width: var(--ve-side-width);\n}\n.sidebar[data-v-7d195c1c] a {\n  display: var(--ve-side-a-display);\n  place-content: var(--ve-side-a-place-content);\n  place-items: var(--ve-side-a-place-items);\n  margin: var(--ve-side-a-margin);\n  border-radius: var(--ve-side-a-border-radius);\n  padding: var(--ve-side-a-padding);\n  width: var(--ve-side-a-width);\n  background-color: var(--ve-side-a-background-color);\n  color: var(--ve-side-a-color);\n  cursor: var(--ve-side-a-cursor);\n}\n.sidebar[data-v-7d195c1c] a:hover,\n.sidebar[data-v-7d195c1c] a:focus {\n  border-radius: var(--ve-side-a-hover-border-radius);\n  color: var(--ve-side-a-hover-color);\n  background-color: var(--ve-side-a-hover-background-color);\n  transform: var(--ve-side-a-hover-transform);\n  transition: var(--ve-side-a-hover-transition);\n}\n.hide[data-v-7d195c1c] {\n  display: var(--ve-nav-hide-display) !important;\n}\n.show[data-v-7d195c1c] {\n  display: var(--ve-nav-show-display);\n}\n@media (min-width: 768px) {\n.navbar > button[data-v-7d195c1c] {\n    display: var(--ve-nav-button-display);\n}\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-7d195c1c";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BtnElt: script$8,
  FieldElt: script$7,
  MediaElt: script$6,
  ListElt: script$5,
  SliderElt: script$4,
  TableElt: script$3,
  CardElt: script$2,
  FootElt: script$1,
  NavElt: script
});

const install = function installVueElt(app) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    app.component(componentName, component);
  });
};

export { script$8 as BtnElt, script$2 as CardElt, script$7 as FieldElt, script$1 as FootElt, script$5 as ListElt, script$6 as MediaElt, script as NavElt, script$4 as SliderElt, script$3 as TableElt, install as default };
