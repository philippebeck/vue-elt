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

<style scoped>
fieldset {
  --fieldset-display: flex;
  --fieldset-flex-flow: row wrap;
  --fieldset-place-items: center;
  --fieldset-margin: auto;
  --fieldset-border: none;
  --fieldset-padding: 0;
  --fieldset-max-width: 500px;
  --fieldset-text-align: center;
  --fieldset-transition: max-width 1s;

  display: var(--fieldset-display);
  flex-flow: var(--fieldset-flex-flow);
  place-items: var(--fieldset-place-items);;
  margin: var(--fieldset-margin);
  border: var(--fieldset-border);
  padding: var(--fieldset-padding);
  max-width: var(--fieldset-max-width);
  text-align: var(--fieldset-text-align);
  transition: var(--fieldset-transition);
}

fieldset > * {
  --field-box-sizing: border-box;
  --field-margin: 5px;
  --field-padding: 5px;

  box-sizing: var(--field-box-sizing);
  margin: var(--field-margin);
  padding: var(--field-padding);
}

legend {
  --legend-width: 93%;
  --legend-font-size: 1.2rem;
  --legend-color: var(--gray);

  width: var(--legend-width);
  font-size: var(--legend-font-size);
  color: var(--legend-color);
}

label {
  --label-width: 90%;
  --label-visibility: hidden;
  --label-font-size: 0.8rem;
  --label-font-style: italic;
  --label-color: var(--blue);

  width: var(--label-width);
  visibility: var(--label-visibility);
  font-size: var(--label-font-size);
  font-style: var(--label-font-style);
  color: var(--label-color);
}

input,
select,
textarea {
  --input-border: 1px solid var(--blue);
  --input-border-radius: 10px;
  --input-outline: none;
  --input-width: 100%;
  --input-line-height: 1.8;
  --input-background-color: var(--white);

  border: var(--input-border);
  border-radius: var(--input-border-radius);
  outline: var(--input-outline);
  width: var(--input-width);
  line-height: var(--input-line-height);
  background-color: var(--input-background-color);
}

fieldset:hover legend {
  --hover-legend-color: var(--black);

  color: var(--hover-legend-color);
}

fieldset:hover > input,
fieldset:hover > select,
fieldset:hover > textarea,
input:focus,
select:focus,
textarea:focus {
  --hover-input-border: 1px solid var(--sky);
  --hover-input-border-radius: 0;
  --hover-input-background-color: var(--white);
  --hover-input-transition: all 500ms;

  border: var(--hover-input-border);
  border-radius: var(--hover-input-border-radius);
  background-color: var(--hover-input-background-color);
  transition: var(--hover-input-transition);
}

fieldset:hover > label,
input:focus + label,
select:focus + label,
textarea:focus + label {
  --hover-label-visibility: visible;
  --hover-label-transform: scale(1.1);
  --hover-label-transition: all 1s;

  visibility: var(--hover-label-visibility);
  transform: var(--hover-label-transform);
  transition: var(--hover-label-transition);
}
</style>
