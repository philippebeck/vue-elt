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
