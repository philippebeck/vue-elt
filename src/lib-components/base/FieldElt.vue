<template>
  <fieldset :title="info">
    <!-- Legend (option) -->
    <legend v-if="hasSlot('legend')">
      <slot name="legend"></slot>
    </legend>

    <!-- NUMBER, DATE, TIME, RANGE ELT -->
    <input v-if="getFieldType() === 'number'"
      :id="id"
      :max="max"
      :min="min"
      :name="id"
      :step="step"
      :type="type"
      :value="value"
      @input="onInput"
      :required="required">

    <!-- CHECKBOX, RADIO, COLOR ELT -->
    <input v-else-if="getFieldType() === 'special'"
      :id="id"
      :name="name"
      :type="type"
      :value="value"
      @input="onInput"
      :required="required">

    <!-- SELECT, OPTION ELT -->
    <select v-else-if="getFieldType() === 'list'"
      :id="id"
      :name="id"
      :placeholder="info"
      @input="onInput"
      :required="required">

      <option v-if="value"
        :value="value">
        {{ value }}
      </option>
      <option v-else>
        {{ info }}
      </option>
      <option v-for="(value, index) in list"
        :key="index"
        :value="value">
        {{ value }}
      </option>
    </select>

    <!-- TEXTAREA ELT -->
    <textarea v-else-if="getFieldType() === 'area'"
      :id="id"
      :name="id"
      :cols="cols"
      :maxlength="max"
      :minlength="min"
      :placeholder="info"
      :rows="rows"
      :value="value"
      @input="onInput"
      :required="required"></textarea>

    <!-- TEXT, OTHERS ELT -->
    <input v-else
      :id="id"
      :maxlength="max"
      :minlength="min"
      :name="id"
      :placeholder="info"
      :type="type"
      :value="value"
      @input="onInput"
      :required="required">

    <!-- Label (option) -->
    <label v-if="hasSlot('label')"
      :for="id">
      <slot name="label"></slot>
    </label>
  </fieldset>
</template>

<script>
export default {
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
      this.$emit("update:value", event.target.value)
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
}
</script>

<style>
/********** FIELD ELT **********/
fieldset {
  --ve-field-display: flex;
  --ve-field-flex-flow: row wrap;
  --ve-field-place-items: center;
  --ve-field-margin: auto;
  --ve-field-border: none;
  --ve-field-padding: 0;
  --ve-field-max-width: 500px;
  --ve-field-text-align: center;
  --ve-field-transition: max-width 1s;
  --ve-field-child-box-sizing: border-box;
  --ve-field-child-margin: 5px;
  --ve-field-child-padding: 5px;
}

legend {
  --ve-field-legend-width: 93%;
  --ve-field-legend-font-size: 1.2rem;
  --ve-field-legend-color: var(--ani-gray);
  --ve-field-hover-legend-color: var(--ani-black);
}

label {
  --ve-field-label-width: 90%;
  --ve-field-label-visibility: hidden;
  --ve-field-label-font-size: 0.8rem;
  --ve-field-label-font-style: italic;
  --ve-field-label-color: var(--ani-blue);
  --ve-field-hover-label-visibility: visible;
  --ve-field-hover-label-transform: scale(1.1);
  --ve-field-hover-label-transition: all 1s;
}

input,
select,
textarea {
  --ve-field-input-border: 1px solid var(--ani-blue);
  --ve-field-input-border-radius: 10px;
  --ve-field-input-outline: none;
  --ve-field-input-width: 100%;
  --ve-field-input-line-height: 1.8;
  --ve-field-input-background-color: var(--ani-white);
  --ve-field-hover-input-border: 1px solid var(--ani-sky);
  --ve-field-hover-input-border-radius: 0;
  --ve-field-hover-input-background-color: var(--ani-white);
  --ve-field-hover-input-transition: all 500ms;
}

</style>

<style scoped>
fieldset {
  display: var(--ve-field-display);
  flex-flow: var(--ve-field-flex-flow);
  place-items: var(--ve-field-place-items);;
  margin: var(--ve-field-margin);
  border: var(--ve-field-border);
  padding: var(--ve-field-padding);
  max-width: var(--ve-field-max-width);
  text-align: var(--ve-field-text-align);
  transition: var(--ve-field-transition);
}

fieldset > * {
  box-sizing: var(--ve-field-child-box-sizing);
  margin: var(--ve-field-child-margin);
  padding: var(--ve-field-child-padding);
}

legend {
  width: var(--ve-field-legend-width);
  font-size: var(--ve-field-legend-font-size);
  color: var(--ve-field-legend-color);
}

fieldset:hover legend {
  color: var(--ve-field-hover-legend-color);
}

label {
  width: var(--ve-field-label-width);
  visibility: var(--ve-field-label-visibility);
  font-size: var(--ve-field-label-font-size);
  font-style: var(--ve-field-label-font-style);
  color: var(--ve-field-label-color);
}

fieldset:hover > label,
input:focus + label,
select:focus + label,
textarea:focus + label {
  visibility: var(--ve-field-hover-label-visibility);
  transform: var(--ve-field-hover-label-transform);
  transition: var(--ve-field-hover-label-transition);
}

input,
select,
textarea {
  border: var(--ve-field-input-border);
  border-radius: var(--ve-field-input-border-radius);
  outline: var(--ve-field-input-outline);
  width: var(--ve-field-input-width);
  line-height: var(--ve-field-input-line-height);
  background-color: var(--ve-field-input-background-color);
}

fieldset:hover > input,
fieldset:hover > select,
fieldset:hover > textarea,
input:focus,
select:focus,
textarea:focus {
  border: var(--ve-field-hover-input-border);
  border-radius: var(--ve-field-hover-input-border-radius);
  background-color: var(--ve-field-hover-input-background-color);
  transition: var(--ve-field-hover-input-transition);
}
</style>
