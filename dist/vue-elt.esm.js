import { openBlock, createElementBlock, renderSlot, createCommentVNode, toDisplayString, Fragment, renderList, createElementVNode } from 'vue';

var script$3 = {
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
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    },

    onInput(event) {
      this.$emit('update:value', event.target.value);
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

const _hoisted_1$3 = ["title"];
const _hoisted_2$2 = {
  key: 0
};
const _hoisted_3$2 = ["id", "max", "min", "name", "step", "type", "value"];
const _hoisted_4$1 = ["id", "name", "type", "value"];
const _hoisted_5 = ["id", "name", "placeholder"];
const _hoisted_6 = ["value"];
const _hoisted_7 = {
  key: 1
};
const _hoisted_8 = ["value"];
const _hoisted_9 = ["id", "name", "cols", "maxlength", "minlength", "placeholder", "rows", "value"];
const _hoisted_10 = ["id", "maxlength", "minlength", "name", "placeholder", "type", "value"];
const _hoisted_11 = ["for"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("fieldset", {
    title: $props.info
  }, [$options.hasSlot('legend') ? (openBlock(), createElementBlock("legend", _hoisted_2$2, [renderSlot(_ctx.$slots, "legend")])) : createCommentVNode("", true), $options.getFieldType() === 'number' ? (openBlock(), createElementBlock("input", {
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
    })
  }, null, 40, _hoisted_3$2)) : $options.getFieldType() === 'special' ? (openBlock(), createElementBlock("input", {
    key: 2,
    id: $props.id,
    name: $props.name,
    type: $props.type,
    value: $props.value,
    onInput: _cache[1] || (_cache[1] = function () {
      return $options.onInput && $options.onInput(...arguments);
    })
  }, null, 40, _hoisted_4$1)) : $options.getFieldType() === 'list' ? (openBlock(), createElementBlock("select", {
    key: 3,
    id: $props.id,
    name: $props.id,
    placeholder: $props.info,
    onInput: _cache[2] || (_cache[2] = function () {
      return $options.onInput && $options.onInput(...arguments);
    })
  }, [$props.value ? (openBlock(), createElementBlock("option", {
    key: 0,
    value: $props.value
  }, toDisplayString($props.value), 9, _hoisted_6)) : (openBlock(), createElementBlock("option", _hoisted_7, toDisplayString($props.info), 1)), (openBlock(true), createElementBlock(Fragment, null, renderList($props.list, (value, index) => {
    return openBlock(), createElementBlock("option", {
      key: index,
      value: value
    }, toDisplayString(value), 9, _hoisted_8);
  }), 128))], 40, _hoisted_5)) : $options.getFieldType() === 'area' ? (openBlock(), createElementBlock("textarea", {
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
    })
  }, null, 40, _hoisted_9)) : (openBlock(), createElementBlock("input", {
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
    })
  }, null, 40, _hoisted_10)), $options.hasSlot('label') ? (openBlock(), createElementBlock("label", {
    key: 6,
    for: $props.id
  }, [renderSlot(_ctx.$slots, "label")], 8, _hoisted_11)) : createCommentVNode("", true)], 8, _hoisted_1$3);
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

var css_248z$3 = "\nfieldset {\n  display: flex;\n  flex-wrap: wrap;\n  place-items: center;\n  margin: auto;\n  border: none;\n  padding: 0;\n  width: 100%;\n  transition: width 2s;\n  text-align: center;\n}\nfieldset > * {\n  box-sizing: border-box;\n  margin: 0 10px;\n  padding: 5px;\n}\nlegend {\n  width: 93%;\n  font-size: 1.2rem;\n  color: var(--gray);\n}\nlabel {\n  width: 90%;\n  visibility: hidden;\n  font-size: 0.8rem;\n  font-style: italic;\n  color: var(--cyan);\n}\ninput,\nselect,\ntextarea {\n  border: medium outset var(--blue);\n  border-radius: 10px;\n  outline: none;\n  width: 100%;\n  line-height: 1.8;\n  background-color: var(--white);\n}\nfieldset:hover legend {\n  color: var(--black);\n}\nfieldset:hover > input,\nfieldset:hover > select,\nfieldset:hover > textarea,\ninput:focus,\nselect:focus,\ntextarea:focus {\n  border: medium inset var(--green);\n  border-radius: 0;\n  background-color: var(--grey);\n  transition: all 1s;\n}\nfieldset:hover > label,\ninput:focus + label,\nselect:focus + label,\ntextarea:focus + label {\n  visibility: visible;\n  transform: scale(1.1);\n  transition: all 1s;\n}\n";
styleInject(css_248z$3);

script$3.render = render$3;

var script$2 = {
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
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    }

  }
};

const _hoisted_1$2 = {
  key: 0
};
const _hoisted_2$1 = {
  key: 1
};
const _hoisted_3$1 = {
  key: 2
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", null, [createElementVNode("ol", null, [$options.hasSlot('one') ? (openBlock(), createElementBlock("li", _hoisted_1$2, [createElementVNode("h3", null, toDisplayString($props.title1), 1), renderSlot(_ctx.$slots, "one")])) : createCommentVNode("", true), $options.hasSlot('two') ? (openBlock(), createElementBlock("li", _hoisted_2$1, [createElementVNode("h3", null, toDisplayString($props.title2), 1), renderSlot(_ctx.$slots, "two")])) : createCommentVNode("", true), $options.hasSlot('three') ? (openBlock(), createElementBlock("li", _hoisted_3$1, [createElementVNode("h3", null, toDisplayString($props.title3), 1), renderSlot(_ctx.$slots, "three")])) : createCommentVNode("", true)]), renderSlot(_ctx.$slots, "main")]);
}

var css_248z$2 = "\nfooter {\n  text-align: center;\n}\nol {\n  display: flex;\n  flex-direction: column;\n  place-content: space-evenly;\n  padding: 10px 0;\n  background-color: var(--primary);\n}\nol li {\n  list-style-type: none;\n}\nol :slotted(a) {\n  font-size: 1.5rem;\n  color: var(--white);\n}\nol :slotted(a):hover,\nol :slotted(a):focus {\n  color: var(--secondary);\n}\nh3 {\n  margin: 0;\n  font-size: 2rem;\n  color: var(--grey);\n}\nfooter > :deep(ul) {\n  display: flex;\n  flex-direction: row;\n  place-content: center;\n}\n@media screen and (min-width: 768px) {\nol {\n    flex-direction: row;\n}\n}\n";
styleInject(css_248z$2);

script$2.render = render$2;

var script$1 = {
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
    isNested() {
      return this.$slots["nested"] !== undefined;
    }

  }
};

const _hoisted_1$1 = {
  key: 0
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
    return openBlock(), createElementBlock("li", {
      key: index
    }, [renderSlot(_ctx.$slots, "items", {
      index: index,
      item: item
    }), $options.isNested() ? (openBlock(), createElementBlock("ul", _hoisted_1$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(item, (value, key) => {
      return openBlock(), createElementBlock("li", {
        key: key
      }, [renderSlot(_ctx.$slots, "nested", {
        index: index,
        item: item,
        key: key,
        value: value
      })]);
    }), 128))])) : createCommentVNode("", true)]);
  }), 128))]);
}

var css_248z$1 = "\nul {\n  margin: 5vh 5vw 10vh;\n  padding: 0;\n  list-style: none;\n}\nli > ul {\n  display: flex;\n  flex-wrap: wrap;\n  place-content: center;\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;

var script = {
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

const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  key: 0
};
const _hoisted_3 = {
  key: 0
};
const _hoisted_4 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", null, [$options.hasSlot('title') ? (openBlock(), createElementBlock("caption", _hoisted_1, [renderSlot(_ctx.$slots, "title")])) : createCommentVNode("", true), createElementVNode("thead", null, [createElementVNode("tr", null, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items[0], (value, key) => {
    return openBlock(), createElementBlock("th", {
      key: key
    }, toDisplayString(key === "_id" ? key = "id" : key), 1);
  }), 128)), $options.hasSlot('head') ? (openBlock(), createElementBlock("th", _hoisted_2, [renderSlot(_ctx.$slots, "head")])) : createCommentVNode("", true)])]), createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
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
      })]);
    }), 128)), $options.hasSlot('body') ? (openBlock(), createElementBlock("td", _hoisted_3, [renderSlot(_ctx.$slots, "body", {
      index: index,
      item: item
    })])) : createCommentVNode("", true)]);
  }), 128))]), $options.hasSlot('foot') ? (openBlock(), createElementBlock("tfoot", _hoisted_4, [renderSlot(_ctx.$slots, "foot")])) : createCommentVNode("", true)]);
}

var css_248z = "\ntable {\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 10px;\n  margin: 50px auto;\n  width: auto;\n  max-width: 100%;\n  font-size: calc(var(--body-font-size) * 110 / 100);\n  box-shadow: 5px 5px 10px 5px var(--grey);\n}\ncaption {\n  caption-side: top;\n  margin: 10px;\n  font-size: 3rem;\n  font-weight: bold;\n  color: var(--black);\n  text-shadow: 1px 1px 2px;\n}\nth {\n  display: table-column;\n  font-size: calc(var(--body-font-size) * 120 / 100);\n  font-style: italic;\n  background-color: var(--primary);\n  color: var(--white);\n}\nth,\ntd {\n  padding: 2px;\n  text-align: center;\n  vertical-align: middle;\n}\ntd {\n  display: table-row;\n  word-break: normal;\n  cursor: cell;\n}\ntbody tr:nth-child(even) {\n  background-color: var(--grey);\n  color: var(--black);\n}\ntbody tr:nth-child(odd) {\n  background-color: var(--white);\n  color: var(--gray);\n}\ntbody tr:hover,\ntbody tr:focus {\n  background-color: var(--primary);\n  color: var(--secondary);\n}\n@media (min-width: 576px) {\ntable {\n    max-width: 95%;\n}\n}\n@media (min-width: 768px) {\ntable {\n    max-width: 90%;\n}\n}\n@media (min-width: 992px) {\ntable {\n    max-width: 85%;\n}\nth,\n  td {\n    display: table-cell;\n}\n}\n@media (min-width: 1200px) {\ntable {\n    max-width: 80%;\n}\n}\n@media (min-width: 1600px) {\ntable {\n    max-width: 75%;\n}\n}\n";
styleInject(css_248z);

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FieldElt: script$3,
  FootElt: script$2,
  ListElt: script$1,
  TableElt: script
});

const install = function installVueElt(app) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    app.component(componentName, component);
  });
};

export { script$3 as FieldElt, script$2 as FootElt, script$1 as ListElt, script as TableElt, install as default };