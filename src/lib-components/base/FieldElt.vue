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
fieldset {
  --ve-fieldset-display: flex;
  --ve-fieldset-flex-flow: row wrap;
  --ve-fieldset-place-items: center;
  --ve-fieldset-margin: auto;
  --ve-fieldset-border: none;
  --ve-fieldset-padding: 0;
  --ve-fieldset-max-width: 500px;
  --ve-fieldset-text-align: center;
  --ve-fieldset-transition: max-width 1s;
  --ve-field-box-sizing: border-box;
  --ve-field-margin: 5px;
  --ve-field-padding: 5px;
}

legend {
  --ve-legend-width: 93%;
  --ve-legend-font-size: 1.2rem;
  --ve-legend-color: var(--ani-gray);
  --ve-hover-legend-color: var(--ani-black);
}

label {
  --ve-label-width: 90%;
  --ve-label-visibility: hidden;
  --ve-label-font-size: 0.8rem;
  --ve-label-font-style: italic;
  --ve-label-color: var(--ani-blue);
  --ve-hover-label-visibility: visible;
  --ve-hover-label-transform: scale(1.1);
  --ve-hover-label-transition: all 1s;
}

input,
select,
textarea {
  --ve-input-border: 1px solid var(--ani-blue);
  --ve-input-border-radius: 10px;
  --ve-input-outline: none;
  --ve-input-width: 100%;
  --ve-input-line-height: 1.8;
  --ve-input-background-color: var(--ani-white);
  --ve-hover-input-border: 1px solid var(--ani-sky);
  --ve-hover-input-border-radius: 0;
  --ve-hover-input-background-color: var(--ani-white);
  --ve-hover-input-transition: all 500ms;
}
</style>

<style scoped>
fieldset {
  display: var(--ve-fieldset-display);
  flex-flow: var(--ve-fieldset-flex-flow);
  place-items: var(--ve-fieldset-place-items);;
  margin: var(--ve-fieldset-margin);
  border: var(--ve-fieldset-border);
  padding: var(--ve-fieldset-padding);
  max-width: var(--ve-fieldset-max-width);
  text-align: var(--ve-fieldset-text-align);
  transition: var(--ve-fieldset-transition);
}

fieldset > * {
  box-sizing: var(--ve-field-box-sizing);
  margin: var(--ve-field-margin);
  padding: var(--ve-field-padding);
}

legend {
  width: var(--ve-legend-width);
  font-size: var(--ve-legend-font-size);
  color: var(--ve-legend-color);
}

label {
  width: var(--ve-label-width);
  visibility: var(--ve-label-visibility);
  font-size: var(--ve-label-font-size);
  font-style: var(--ve-label-font-style);
  color: var(--ve-label-color);
}

input,
select,
textarea {
  border: var(--ve-input-border);
  border-radius: var(--ve-input-border-radius);
  outline: var(--ve-input-outline);
  width: var(--ve-input-width);
  line-height: var(--ve-input-line-height);
  background-color: var(--ve-input-background-color);
}

fieldset:hover legend {
  color: var(--ve-hover-legend-color);
}

fieldset:hover > input,
fieldset:hover > select,
fieldset:hover > textarea,
input:focus,
select:focus,
textarea:focus {
  border: var(--ve-hover-input-border);
  border-radius: var(--ve-hover-input-border-radius);
  background-color: var(--ve-hover-input-background-color);
  transition: var(--ve-hover-input-transition);
}

fieldset:hover > label,
input:focus + label,
select:focus + label,
textarea:focus + label {
  visibility: var(--ve-hover-label-visibility);
  transform: var(--ve-hover-label-transform);
  transition: var(--ve-hover-label-transition);
}
</style>
