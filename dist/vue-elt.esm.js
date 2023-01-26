import { openBlock, createElementBlock, renderSlot, createTextVNode, toDisplayString, createCommentVNode, Fragment, renderList, createElementVNode, pushScopeId, popScopeId } from 'vue';

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
const _hoisted_2$7 = ["href", "id", "title"];
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
  }, [renderSlot(_ctx.$slots, "btn"), createTextVNode(" " + toDisplayString($props.content), 1)], 8, _hoisted_2$7));
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

var css_248z$9 = "\na[data-v-5e33533a],\nbutton[data-v-5e33533a] {\n  --btn-display: inline-block;\n  --btn-margin: 10px;\n  --btn-border: solid 2px var(--white);\n  --btn-border-radius: 10px;\n  --btn-padding: 5px 10px;\n  --btn-font-family: var(--monospace);\n  --btn-font-size: 1.2rem;\n  --btn-font-weight: bold;\n  --btn-text-align: center;\n  --btn-text-decoration: none;\n  --btn-background-color: var(--black);\n  --btn-color: var(--white);\n  --btn-cursor: pointer;\n\n  display: var(--btn-display);\n  margin: var(--btn-margin);\n  border: var(--btn-border);\n  border-radius: var(--btn-border-radius);\n  padding: var(--btn-padding);\n  font-family: var(--btn-font-family);\n  font-size: var(--btn-font-size);\n  font-weight: var(--btn-font-weight);\n  text-align: var(--btn-text-align);\n  text-decoration: var(--btn-text-decoration);\n  background-color: var(--btn-background-color);\n  color: var(--btn-color);\n  cursor: var(--btn-cursor);\n}\na[data-v-5e33533a]:hover,\na[data-v-5e33533a]:focus,\nbutton[data-v-5e33533a]:hover,\nbutton[data-v-5e33533a]:focus {\n  --btn-hover-border-color: var(--black);\n  --btn-hover-border-radius: 5px;\n  --btn-hover-background-color: var(--white);\n  --btn-hover-color: var(--black);\n  --btn-hover-box-shadow: inset 0 0 5px 2px;\n  --btn-hover-transition: all 200ms;\n\n  border-color: var(--btn-hover-border);\n  border-radius: var(--btn-hover-border-radius);\n  background-color: var(--btn-hover-background-color);\n  color: var(--btn-hover-color);\n  box-shadow: var(--btn-hover-box-shadow);\n  transition: var(--btn-hover-transition);\n}\na > *[data-v-5e33533a],\nbutton > *[data-v-5e33533a] {\n  --btn-child-display: block;\n  --btn-child-margin: auto;\n\n  display: var(--btn-child-display);\n  margin: var(--btn-child-margin);\n}\n\n/* RED */\n.btn-red[data-v-5e33533a] {\n  background-color: var(--red);\n}\n.btn-red[data-v-5e33533a]:hover,\n.btn-red[data-v-5e33533a]:focus {\n  border-color: var(--red);\n  color: var(--red);\n}\n\n/* ORANGE */\n.btn-orange[data-v-5e33533a] {\n  background-color: var(--orange);\n}\n.btn-orange[data-v-5e33533a]:hover,\n.btn-orange[data-v-5e33533a]:focus {\n  border-color: var(--orange);\n  color: var(--orange);\n}\n\n/* YELLOW */\n.btn-yellow[data-v-5e33533a] {\n  background-color: var(--yellow);\n}\n.btn-yellow[data-v-5e33533a]:hover,\n.btn-yellow[data-v-5e33533a]:focus {\n  border-color: var(--yellow);\n  color: var(--yellow);\n}\n\n/* GREEN */\n.btn-green[data-v-5e33533a] {\n  background-color: var(--green);\n}\n.btn-green[data-v-5e33533a]:hover,\n.btn-green[data-v-5e33533a]:focus {\n  border-color: var(--green);\n  color: var(--green);\n}\n\n/* SKY */\n.btn-sky[data-v-5e33533a] {\n  background-color: var(--sky);\n}\n.btn-sky[data-v-5e33533a]:hover,\n.btn-sky[data-v-5e33533a]:focus {\n  border-color: var(--sky);\n  color: var(--sky);\n}\n\n/* BLUE */\n.btn-blue[data-v-5e33533a] {\n  background-color: var(--blue);\n}\n.btn-blue[data-v-5e33533a]:hover,\n.btn-blue[data-v-5e33533a]:focus {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n\n/* VIOLET */\n.btn-violet[data-v-5e33533a] {\n  background-color: var(--violet);\n}\n.btn-violet[data-v-5e33533a]:hover,\n.btn-violet[data-v-5e33533a]:focus {\n  border-color: var(--violet);\n  color: var(--violet);\n}\n\n/* PINK */\n.btn-pink[data-v-5e33533a] {\n  background-color: var(--pink);\n}\n.btn-pink[data-v-5e33533a]:hover,\n.btn-pink[data-v-5e33533a]:focus {\n  border-color: var(--pink);\n  color: var(--pink);\n}\n";
styleInject(css_248z$9);

script$8.render = render$8;
script$8.__scopeId = "data-v-5e33533a";

var script$7 = {
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
      default: 8
    },
    rows: {
      type: Number,
      default: 5
    },
    step: {
      type: Number,
      default: 1
    },
    required: {
      type: String,
      default: "required"
    }
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
};

const _hoisted_1$7 = ["title"];
const _hoisted_2$6 = {
  key: 0
};
const _hoisted_3$6 = ["id", "max", "min", "name", "step", "type", "value", "required"];
const _hoisted_4$6 = ["id", "name", "type", "value", "required"];
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
  }, [$options.hasSlot('legend') ? (openBlock(), createElementBlock("legend", _hoisted_2$6, [renderSlot(_ctx.$slots, "legend")])) : createCommentVNode("", true), $options.getFieldType() === 'number' ? (openBlock(), createElementBlock("input", {
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
  }, null, 40, _hoisted_3$6)) : $options.getFieldType() === 'special' ? (openBlock(), createElementBlock("input", {
    key: 2,
    id: $props.id,
    name: $props.name,
    type: $props.type,
    value: $props.value,
    onInput: _cache[1] || (_cache[1] = function () {
      return $options.onInput && $options.onInput(...arguments);
    }),
    required: $props.required
  }, null, 40, _hoisted_4$6)) : $options.getFieldType() === 'list' ? (openBlock(), createElementBlock("select", {
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

var css_248z$8 = "\nfieldset[data-v-2b9206fe] {\n  --fieldset-display: flex;\n  --fieldset-flex-flow: row wrap;\n  --fieldset-place-items: center;\n  --fieldset-margin: auto;\n  --fieldset-border: none;\n  --fieldset-padding: 0;\n  --fieldset-max-width: 300px;\n  --fieldset-text-align: center;\n  --fieldset-transition: max-width 1s;\n\n  display: var(--fieldset-display);\n  flex-flow: var(--fieldset-flex-flow);\n  place-items: var(--fieldset-place-items);;\n  margin: var(--fieldset-margin);\n  border: var(--fieldset-border);\n  padding: var(--fieldset-padding);\n  max-width: var(--fieldset-max-width);\n  text-align: var(--fieldset-text-align);\n  transition: var(--fieldset-transition);\n}\nfieldset > *[data-v-2b9206fe] {\n  --field-box-sizing: border-box;\n  --field-margin: 5px;\n  --field-padding: 5px;\n\n  box-sizing: var(--field-box-sizing);\n  margin: var(--field-margin);\n  padding: var(--field-padding);\n}\nlegend[data-v-2b9206fe] {\n  --legend-width: 93%;\n  --legend-font-size: 1.2rem;\n  --legend-color: var(--gray);\n\n  width: var(--legend-width);\n  font-size: var(--legend-font-size);\n  color: var(--legend-color);\n}\nlabel[data-v-2b9206fe] {\n  --label-width: 90%;\n  --label-visibility: hidden;\n  --label-font-size: 0.8rem;\n  --label-font-style: italic;\n  --label-color: var(--blue);\n\n  width: var(--label-width);\n  visibility: var(--label-visibility);\n  font-size: var(--label-font-size);\n  font-style: var(--label-font-style);\n  color: var(--label-color);\n}\ninput[data-v-2b9206fe],\nselect[data-v-2b9206fe],\ntextarea[data-v-2b9206fe] {\n  --input-border: 1px solid var(--blue);\n  --input-border-radius: 10px;\n  --input-outline: none;\n  --input-width: 100%;\n  --input-line-height: 1.8;\n  --input-background-color: var(--white);\n\n  border: var(--input-border);\n  border-radius: var(--input-border-radius);\n  outline: var(--input-outline);\n  width: var(--input-width);\n  line-height: var(--input-line-height);\n  background-color: var(--input-background-color);\n}\nfieldset:hover legend[data-v-2b9206fe] {\n  --hover-legend-color: var(--black);\n\n  color: var(--hover-legend-color);\n}\nfieldset:hover > input[data-v-2b9206fe],\nfieldset:hover > select[data-v-2b9206fe],\nfieldset:hover > textarea[data-v-2b9206fe],\ninput[data-v-2b9206fe]:focus,\nselect[data-v-2b9206fe]:focus,\ntextarea[data-v-2b9206fe]:focus {\n  --hover-input-border: 1px solid var(--sky);\n  --hover-input-border-radius: 0;\n  --hover-input-background-color: var(--white);\n  --hover-input-transition: all 500ms;\n\n  border: var(--hover-input-border);\n  border-radius: var(--hover-input-border-radius);\n  background-color: var(--hover-input-background-color);\n  transition: var(--hover-input-transition);\n}\nfieldset:hover > label[data-v-2b9206fe],\ninput:focus + label[data-v-2b9206fe],\nselect:focus + label[data-v-2b9206fe],\ntextarea:focus + label[data-v-2b9206fe] {\n  --hover-label-visibility: visible;\n  --hover-label-transform: scale(1.1);\n  --hover-label-transition: all 1s;\n\n  visibility: var(--hover-label-visibility);\n  transform: var(--hover-label-transform);\n  transition: var(--hover-label-transition);\n}\n";
styleInject(css_248z$8);

script$7.render = render$7;
script$7.__scopeId = "data-v-2b9206fe";

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
const _hoisted_2$5 = ["src", "loop"];
const _hoisted_3$5 = ["src", "loop", "height", "width"];
const _hoisted_4$5 = ["src", "type"];
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
  }, [renderSlot(_ctx.$slots, "audio")], 8, _hoisted_2$5)) : $props.type === 'video' ? (openBlock(), createElementBlock("video", {
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
    }, null, 8, _hoisted_4$5);
  }), 128)), renderSlot(_ctx.$slots, "video")], 8, _hoisted_3$5)) : $props.type === 'picture' ? (openBlock(), createElementBlock("picture", _hoisted_5$3, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.medias, (picture, index) => {
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

var css_248z$7 = "\nfigure[data-v-17b6470e] {\n  --figure-border: 1px solid transparent;\n  --figure-border-radius: 10%;\n  --figure-background-color: transparent;\n\n  border: var(--figure-border);\n  border-radius: var(--figure-border-radius);\n  background-color: var(--figure-background-color);\n}\nimg[data-v-17b6470e] {\n  --img-border: 1px solid var(--blue);\n  --img-border-radius: 20px;\n  --img-max-width: 100%;\n  --img-height: auto;\n  --img-object-fit: contain;\n  --img-object-position: 50% 50%;\n\n  border: var(--img-border);\n  border-radius: var(--img-border-radius);\n  max-width: var(--img-max-width);\n  height: var(--img-height);\n  object-fit: var(--img-object-fit);\n  object-position: var(--img-object-position);\n}\naudio[data-v-17b6470e] {\n  --audio-border: 2px solid var(--black);\n  --audio-border-radius: 10px;\n\n  border: var(--audio-border);\n  border-radius: var(--audio-border-radius);\n}\nvideo[data-v-17b6470e] {\n  --video-border: 2px solid var(--black);\n  --video-border-radius: 20px;\n\n  border: var(--video-border);\n  border-radius: var(--video-border-radius);\n}\nfigcaption[data-v-17b6470e] {\n  --figcaption-display: flex;\n  --figcaption-flex-flow: column nowrap;\n  --figcaption-place-content: center center;\n  --figcaption-color: var(--blue);\n\n  display: var(--figcaption-display);\n  flex-flow: var(--figcaption-flex-flow);\n  place-content: var(--figcaption-place-content);\n  color: var(--figcaption-color);\n}\n";
styleInject(css_248z$7);

script$6.render = render$6;
script$6.__scopeId = "data-v-17b6470e";

var script$5 = {
  name: "ListElt",
  props: {
    items: {
      type: Object,
      required: true
    },
    display: {
      type: String,
      default: "col"
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
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
    return openBlock(), createElementBlock("li", {
      key: index
    }, [renderSlot(_ctx.$slots, `items-${index + 1}`, {
      index: index,
      item: item
    }, () => [createTextVNode(toDisplayString(item), 1)]), $options.hasSlot('nested') ? (openBlock(), createElementBlock("ul", _hoisted_1$5, [(openBlock(true), createElementBlock(Fragment, null, renderList(item, (value, key) => {
      return openBlock(), createElementBlock("li", {
        key: key
      }, [renderSlot(_ctx.$slots, `nested-${key + 1}`, {
        index: index,
        item: item,
        key: key,
        value: value
      }, () => [createTextVNode(toDisplayString(value), 1)])]);
    }), 128))])) : createCommentVNode("", true)]);
  }), 128))]);
}

var css_248z$6 = "\nul[data-v-4e62464d] {\n  --ul-margin: 20px 0;\n  --ul-padding: 0;\n  --ul-list-style: none;\n  --ul-text-align: center;\n\n  margin: var(--ul-margin);\n  padding: var(--ul-padding);\n  list-style: var(--ul-list-style);\n  text-align: var(--ul-text-align);\n}\nli > ul[data-v-4e62464d] {\n  --li-ul-display: flex;\n  --li-ul-flex-flow: wrap;\n  --li-ul-place-content: center;\n\n  display: var(--li-ul-display);\n  flex-flow: var(--li-ul-flex-flow);\n  place-content: var(--li-ul-place-content);\n}\n";
styleInject(css_248z$6);

script$5.render = render$5;
script$5.__scopeId = "data-v-4e62464d";

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
  },

  updated() {
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

const _withScopeId$1 = n => (pushScopeId("data-v-00b84c44"), n = n(), popScopeId(), n);

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

var css_248z$5 = "\nul[data-v-00b84c44] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.slider[data-v-00b84c44] {\n  --slider-margin: var(--slider-figcaption-height) auto -20px;\n  --slider-border: none;\n  --slider-padding: 0;\n  --slider-width: 100%;\n  --slider-text-align: center;\n\n  margin: var(--slider-margin);\n  border: var(--slider-border);\n  padding: var(--slider-padding);\n  width: var(--slider-width);\n  text-align: var(--slider-text-align);\n}\n[id*=\"slide-\"][data-v-00b84c44] {\n  --slide-display: none;\n  display: var(--slide-display);\n}\nfigcaption[data-v-00b84c44] {\n  --slider-figcaption-padding: 5px 20px;\n  --slider-figcaption-width: 100%;\n  --slider-figcaption-height: 20%;\n  --slider-figcaption-font-weight: bold;\n  --slider-figcaption-color: var(--sky);\n\n  padding: var(--slider-figcaption-padding);\n  width: var(--slider-figcaption-width);\n  height: var(--slider-figcaption-height);\n  font-weight: var(--slider-figcaption-font-weight);\n  color: var(--slider-figcaption-color);\n}\n.controls[data-v-00b84c44] {\n  --controls-display: flex;\n  --controls-gap: 10px;\n  --controls-place-content: center;\n  --controls-opacity: 1;\n\n  display: var(--controls-display);\n  gap: var(--controls-gap);\n  place-content: var(--controls-place-content);\n  opacity: var(--controls-opacity);\n}\n.slider:hover .controls[data-v-00b84c44],\n.slider:focus .controls[data-v-00b84c44] {\n  --slider-controls-hover-opacity: 1;\n  opacity: var(--slider-controls-hover-opacity);\n}\n.controls > *[data-v-00b84c44]:hover,\n.controls > *[data-v-00b84c44]:focus {\n  --controls-hover-color: var(--sky);\n  color: var(--controls-hover-color);\n}\nbutton[data-v-00b84c44] {\n  --slider-button-border: none;\n  --slider-button-font-size: 60%;\n  --slider-button-background: none;\n  --slider-button-color: var(--grey-dark);\n\n  border: var(--slider-button-border);\n  font-size: var(--slider-button-font-size);\n  background: var(--slider-button-background);\n  color: var(--slider-button-color);\n}\n.gallery[data-v-00b84c44] {\n  --gallery-display: flex;\n  --gallery-gap: 10px;\n  --gallery-place-content: center;\n  --gallery-opacity: 1;\n  --gallery-color: var(--gray);\n\n  display: var(--gallery-display);\n  gap: var(--gallery-gap);\n  place-content: var(--gallery-place-content);\n  opacity: var(--gallery-opacity);\n  color: var(--gallery-color);\n}\n.slider:hover .gallery[data-v-00b84c44],\n.slider:focus .gallery[data-v-00b84c44] {\n  --gallery-hover-opacity: 1;\n  opacity: var(--gallery-hover-opacity);\n}\n.gallery > *[data-v-00b84c44]:hover,\n.gallery > *[data-v-00b84c44]:focus {\n  --gallery-child-hover-color: var(--sky);\n  --gallery-child-hover-cursor: pointer;\n\n  color: var(--gallery-child-hover-color);\n  cursor: var(--gallery-child-hover-cursor);\n}\n.show[data-v-00b84c44] {\n  --slider-show-display: list-item;\n  display: var(--slider-show-display);\n}\n@media (min-width: 1200px) {\n.controls[data-v-00b84c44] {\n  --controls-opacity: 0;\n}\n.gallery[data-v-00b84c44] {\n    --gallery-opacity: 0;\n}\n}\n";
styleInject(css_248z$5);

script$4.render = render$4;
script$4.__scopeId = "data-v-00b84c44";

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

var css_248z$4 = "\ntable[data-v-4a212bc5] {\n  --table-display: table;\n  --table-overflow: hidden;\n  --table-margin: 50px auto;\n  --table-border-collapse: collapse;\n  --table-border-radius: 10px;\n  --table-width: auto;\n  --table-max-width: 100%;\n  --table-font-size: 1.2rem;\n\n  display: var(--table-display);\n  overflow: var(--table-overflow);\n  margin: var(--table-margin);\n  border-collapse: var(--table-border-collapse);\n  border-radius: var(--table-border-radius);\n  width: var(--table-width);\n  max-width: var(--table-max-width);\n  font-size: var(--table-font-size);\n}\ncaption[data-v-4a212bc5] {\n  --caption-caption-side: top;\n  --caption-margin-bottom: 20px;\n  --caption-font-size: 1.5rem;\n  --caption-font-weight: bold;\n  --caption-color: var(--gray);\n  --caption-text-shadow: 1px 1px 2px;\n\n  caption-side: var(--caption-caption-side);\n  margin-bottom: var(--caption-margin-bottom);\n  font-size: var(--caption-font-size);\n  font-weight: var(--caption-font-weight);\n  color: var(--caption-color);\n  text-shadow: var(--caption-text-shadow);\n}\nth[data-v-4a212bc5] {\n  --th-display: table-column;\n  --th-font-size: 1.5rem;\n  --th-font-style: italic;\n  --th-text-transform: uppercase;\n  --th-background-color: var(--blue);\n  --th-color: var(--white);\n\n  display: var(--th-display);\n  font-size: var(--th-font-size);\n  font-style: var(--th-font-style);\n  text-transform: var(--th-text-transform);\n  background-color: var(--th-background-color);\n  color: var(--th-color);\n}\nth[data-v-4a212bc5],\ntd[data-v-4a212bc5] {\n  --th-td-padding: 5px;\n  --th-td-text-align: center;\n  --th-td-vertical-align: middle;\n\n  padding: var(--th-td-padding);\n  text-align: var(--th-td-text-align);\n  vertical-align: var(--th-td-vertical-align);\n}\ntd[data-v-4a212bc5] {\n  --td-display: table-row;\n  --td-word-break: normal;\n  --td-cursor: cell;\n\n  display: var(--td-display);\n  word-break: var(--td-word-break);;\n  cursor: var(--td-cursor);\n}\ntbody tr[data-v-4a212bc5]:nth-child(even) {\n  --tbody-even-background-color: var(--gray-light);\n  --tbody-even-color: var(--black);\n\n  background-color: var(--btbody-even-background-color);\n  color: var(--btbody-even-background-color);\n}\ntbody tr[data-v-4a212bc5]:nth-child(odd) {\n  --tbody-odd-background-color: var(--white);\n  --tbody-odd-color: var(--gray);\n\n  background-color: var(--tbody-odd-background-color);\n  color: var(--tbody-odd-color);\n}\ntbody tr[data-v-4a212bc5]:hover,\ntbody tr[data-v-4a212bc5]:focus {\n  --tbody-hover-background-color: var(--silver);\n  --tbody-hover-color: var(--black);\n\n  background-color: var(--tbody-hover-background-color);\n  color: var(--tbody-hover-color);\n}\n@media (min-width: 576px) {\ntable[data-v-4a212bc5] {\n    --table-max-width: 95%;\n}\n}\n@media (min-width: 768px) {\ntable[data-v-4a212bc5] {\n    --table-max-width: 90%;\n}\n}\n@media (min-width: 992px) {\ntable[data-v-4a212bc5] {\n    --table-max-width: 85%;\n}\nth[data-v-4a212bc5],\n  td[data-v-4a212bc5] {\n    --th-td-display: table-cell;\n    display: var(--th-td-display);\n}\n}\n@media (min-width: 1200px) {\ntable[data-v-4a212bc5] {\n    --table-max-width: 80%;\n}\n}\n@media (min-width: 1600px) {\ntable[data-v-4a212bc5] {\n    --table-max-width: 75%;\n}\n}\n";
styleInject(css_248z$4);

script$3.render = render$3;
script$3.__scopeId = "data-v-4a212bc5";

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

var css_248z$3 = "\narticle[data-v-4cefdd63],\nsection[data-v-4cefdd63] {\n  --card-box-sizing: border-box;\n  --card-margin: auto;\n  --card-border: 1px solid transparent;\n  --card-border-radius: 10px;\n  --card-padding: 20px;\n  --card-width: 90%;\n  --card-background-color: transparent;\n  --card-color: var(--gray);\n\n  box-sizing: var(--card-box-sizing);\n  margin: var(--card-margin);\n  border: var(--card-border);\n  border-radius: var(--card-border-radius);\n  padding: var(--card-padding);\n  width: var(--card-width);\n  background-color: var(--card-background-color);\n  color: var(--card-color);\n}\n";
styleInject(css_248z$3);

script$2.render = render$2;
script$2.__scopeId = "data-v-4cefdd63";

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

var css_248z$2 = "\nfooter[data-v-548fc714] {\n  --footer-margin-top: 20px;\n  --footer-text-align: center;\n\n  margin-top: var(--footer-margin-top);\n  text-align: var(--footer-text-align);\n}\nh3[data-v-548fc714],[data-v-548fc714] ul {\n  --footer-child-margin: 0;\n  --footer-child-padding: 0;\n\n  margin: var(--footer-child-margin);\n  padding: var(--footer-child-padding);\n}\n[data-v-548fc714] li {\n  --footer-li-list-style: none;\n  list-style: var(--footer-li-list-style);\n}\n[data-v-548fc714] a {\n  --footer-a-text-decoration: none;\n  text-decoration: var(--footer-a-text-decoration);\n}\n\n/********************* MAIN PART *********************/\nfooter > ul[data-v-548fc714] { \n  --footer-ul-display: flex;\n  --footer-ul-flex-direction: column;\n  --footer-ul-place-items: center;\n  --footer-ul-gap: 20px;\n  --footer-ul-padding: 20px;\n  --footer-ul-background-color: var(--sky);\n\n  display: var(--footer-ul-display);\n  flex-direction: var(--footer-ul-flex-direction);\n  place-items: var(--footer-ul-place-items);\n  gap: var(--footer-ul-gap);\n  padding: var(--footer-ul-padding);\n  background-color: var(--footer-ul-background-color);\n}\nh3[data-v-548fc714] {\n  --footer-h3-margin-bottom: 5px;\n  --footer-h3-font-size: 2rem;\n  --footer-h3-font-family: monospace;\n  --footer-h3-color: var(--yellow);\n\n  margin-bottom: var(--footer-h3-margin-bottom);\n  font-size: var(--footer-h3-font-size);\n  font-family: var(--footer-h3-font-family);\n  color: var(--footer-h3-color);\n}\nsection[data-v-548fc714] a {\n  --footer-section-a-color: var(--white);\n  color: var(--footer-section-a-color);\n}\nsection[data-v-548fc714] a:hover,\nsection[data-v-548fc714] a:focus {\n  --footer-section-a-hover-color: var(--gray);\n  color: var(--footer-section-a-hover-color);\n}\n\n/********************* SECOND PART *********************/\naside[data-v-548fc714] ul {\n  --aside-ul-display: flex;\n  --aside-ul-flex-direction: row;\n  --aside-ul-place-content: center;\n  --aside-ul-gap: 10px;\n  --aside-ul-padding: 10px;\n  --aside-ul-background-color: var(--white);\n\n  display: var(--aside-ul-display);\n  flex-direction: var(--aside-ul-flex-direction);\n  place-content: var(--aside-ul-place-content);\n  gap: var(--aside-ul-gap);\n  padding: var(--aside-ul-padding);\n  background-color: var(--aside-ul-background-color);\n}\naside[data-v-548fc714] a {\n  --aside-a-color: var(--blue);\n  color: var(--aside-a-color);\n}\naside[data-v-548fc714] i:hover,\naside[data-v-548fc714] i:focus {\n  --aside-a-hover-transform: scale(1.2);\n  --aside-a-hover-transition: transform 200ms;\n\n  transform: var(--aside-a-hover-transform);\n  transition: var(--aside-a-hover-transition);\n}\n\n/********************* RESPONSIVE *********************/\n@media (min-width: 576px) {\nfooter > ul[data-v-548fc714] {\n    --footer-ul-flex-direction: row;\n    --footer-ul-place-content: space-around;\n\n    place-content: var(--footer-ul-place-content);\n}\n}\n@media (min-width: 768px) {\nfooter > ul[data-v-548fc714] {\n    --footer-ul-place-content: space-evenly;\n}\n}\n@media (min-width: 992px) {\nfooter > ul[data-v-548fc714] {\n    --footer-ul-place-content: center;\n    --footer-ul-gap: 10%;\n}\n}\n";
styleInject(css_248z$2);

script$1.render = render$1;
script$1.__scopeId = "data-v-548fc714";

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

const _withScopeId = n => (pushScopeId("data-v-06ab2e90"), n = n(), popScopeId(), n);

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
      href: '/' + item,
      title: item.charAt(0).toUpperCase() + item.slice(1)
    }, [renderSlot(_ctx.$slots, item, {
      item: item,
      index: index
    }), createElementVNode("b", null, toDisplayString(item.charAt(0).toUpperCase() + item.slice(1)), 1)], 8, _hoisted_7)]);
  }), 128))]), $options.hasSlot('admin') ? (openBlock(), createElementBlock("aside", _hoisted_8, [renderSlot(_ctx.$slots, "admin")])) : createCommentVNode("", true), createElementVNode("button", {
    type: "button",
    onClick: _cache[0] || (_cache[0] = $event => $options.toggleMenu()),
    title: "Menu"
  }, _hoisted_10)]));
}

var css_248z$1 = "\n:root {\n  --navbar-height: 50px;\n}\n[id=\"app\"] {\n  margin-top: calc(var(--navbar-height) + 20px);\n}\n@media (min-width: 768px) {\n:root {\n    --navbar-height: 80px;\n}\n}\n";
styleInject(css_248z$1);

var css_248z = "\n.sidebar[data-v-06ab2e90] {\n  --sidebar-display: flex;\n  --sidebar-flex-flow: column;\n  --sidebar-position: fixed;\n  --sidebar-top: calc(var(--navbar-height) + 10px);\n  --sidebar-left: 2px;\n  --sidebar-z-index: 10;\n  --sidebar-width: auto;\n\n  display: var(--sidebar-display);\n  flex-flow: var(--sidebar-flex-flow);\n  position: var(--sidebar-position);\n  top: var(--sidebar-top);\n  left: var(--sidebar-left);\n  z-index: var(--sidebar-z-index);\n  width: var(--sidebar-width);\n}\n.sidebar[data-v-06ab2e90] a {\n  --sidebar-a-display: flex;\n  --sidebar-a-place-content: center;\n  --sidebar-a-place-items: center;\n  --sidebar-a-margin: 5px;\n  --sidebar-a-border-radius: 20px;\n  --sidebar-a-padding: 5px;\n  --sidebar-a-width: 100%;\n  --sidebar-a-background-color: var(--white-dark);\n  --sidebar-a-color: var(--blue-dark);\n  --sidebar-a-cursor: crosshair;\n\n  display: var(--sidebar-a-display);\n  place-content: var(--sidebar-a-place-content);\n  place-items: var(--sidebar-a-place-items);\n  margin: var(--sidebar-a-margin);\n  border-radius: var(--sidebar-a-border-radius);\n  padding: var(--sidebar-a-padding);\n  width: var(--sidebar-a-width);\n  background-color: var(--sidebar-a-background-color);\n  color: var(--sidebar-a-color);\n  cursor: var(--sidebar-a-cursor);\n}\n.sidebar[data-v-06ab2e90] a:hover,\n.sidebar[data-v-06ab2e90] a:focus {\n  --sidebar-a-hover-border-radius: 10px;\n  --sidebar-a-hover-background-color: var(--blue-dark);\n  --sidebar-a-hover-color: var(--white-dark);\n  --sidebar-a-hover-transform: scale(1.1);\n  --sidebar-a-hover-transition: all 500ms;\n\n  border-radius: var(--sidebar-a-hover-border-radius);\n  color: var(--sidebar-a-hover-color);\n  background-color: var(--sidebar-a-hover-background-color);\n  transform: var(--sidebar-a-hover-transform);\n  transition: var(--sidebar-a-hover-transition);\n}\n.navbar[data-v-06ab2e90] {\n  --navbar-display: flex;\n  --navbar-place-content: space-between;\n  --navbar-place-items: center;\n  --navbar-position: fixed;\n  --navbar-top: 0;\n  --navbar-right: 0;\n  --navbar-bottom: unset;\n  --navbar-left: 0;\n  --navbar-z-index: 1000;\n  --navbar-background-color: var(--blue-dark);\n  --navbar-color: var(--white);\n\n  display: var(--navbar-display);\n  place-content: var(--navbar-place-content);\n  place-items: var(--navbar-place-items);\n  position: var(--navbar-position);\n  top: var(--navbar-top);\n  right: var(--navbar-right);\n  bottom: var(--navbar-bottom);\n  left: var(--navbar-left);\n  z-index: var(--navbar-z-index);\n  height: var(--navbar-height);\n  background-color: var(--navbar-background-color);\n  color: var(--navbar-color);\n}\n.navbar[data-v-06ab2e90] a,\n.navbar[data-v-06ab2e90] button {\n  --navbar-a-padding: 10px;\n  --navbar-a-color: var(--white);\n  --navbar-a-cursor: pointer;\n\n  padding: var(--navbar-a-padding);\n  color: var(--navbar-a-color);\n  cursor: var(--navbar-a-cursor);\n}\n.navbar[data-v-06ab2e90] ul {\n  --navbar-ul-display: flex;\n  --navbar-ul-place-items: center;\n  --navbar-ul-margin: 0;\n  --navbar-ul-padding: 0;\n  --navbar-ul-list-style: none;\n\n  display: var(--navbar-ul-display);\n  place-items: var(--navbar-ul-place-items);\n  margin: var(--navbar-ul-margin);\n  padding: var(--navbar-ul-padding);\n  list-style: var(--navbar-ul-list-style);\n}\n.navbar ul a[data-v-06ab2e90] {\n  --navbar-ul-a-display: flex;\n  display: var(--navbar-ul-a-display);\n}\n.navbar ul a[data-v-06ab2e90] :not(i) {\n  --navbar-ul-a-not-i-display: none;\n  display: var(--navbar-ul-a-not-i-display);\n}\n.navbar[data-v-06ab2e90] ul a,\n.navbar[data-v-06ab2e90] ul button {\n  --navbar-ul-a-flex-direction: column;\n  flex-direction: var(--navbar-ul-a-flex-direction);\n}\n.navbar ul a[data-v-06ab2e90]:hover,\n.navbar ul a[data-v-06ab2e90]:focus,\n.navbar ul button[data-v-06ab2e90]:hover,\n.navbar ul button[data-v-06ab2e90]:focus {\n  --navbar-first-ul-a-hover-color: var(--yellow);\n  --navbar-first-ul-a-hover-transform: scale(0.9);\n\n  color: var(--navbar-first-ul-a-hover-color) !important;\n  transform: var(--navbar-first-ul-a-hover-transform) !important;\n}\n.navbar[data-v-06ab2e90] ul:last-of-type a:hover,\n.navbar[data-v-06ab2e90] ul:last-of-type a:focus,\n.navbar[data-v-06ab2e90] ul:last-of-type button:hover,\n.navbar[data-v-06ab2e90] ul:last-of-type button:focus {\n  --navbar-last-ul-a-hover-color: var(--red);\n  color: var(--navbar-last-ul-a-hover-color);\n}\n.navbar[data-v-06ab2e90] button {\n  --navbar-button-background-color: transparent;\n  --navbar-button-border: none;\n  --navbar-button-cursor: pointer;\n\n  background-color: var(--navbar-button-background-color);\n  border: var(--navbar-button-border);\n  cursor: var(--navbar-button-cursor);\n}\n.navbar[data-v-06ab2e90] i {\n  --navbar-i-place-self: center;\n  place-self: var(--navbar-i-place-self);\n}\n.hide[data-v-06ab2e90] {\n  --hide-display: none;\n  display: var(--hide-display) !important;\n}\n.show[data-v-06ab2e90] {\n  --show-display: flex;\n  display: var(--show-display);\n}\n@media (min-width: 576px) {\n.navbar[data-v-06ab2e90] {\n    --navbar-place-content: space-around;\n}\n}\n@media (min-width: 768px) {\n.navbar > button[data-v-06ab2e90] {\n    --navbar-button-display: none;\n    display: var(--navbar-button-display);\n}\n.navbar ul a[data-v-06ab2e90] :not(i) {\n    --navbar-ul-a-not-i-display: flex;\n}\n.hide[data-v-06ab2e90] {\n    --hide-display: flex;\n}\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-06ab2e90";

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
