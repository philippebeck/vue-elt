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
