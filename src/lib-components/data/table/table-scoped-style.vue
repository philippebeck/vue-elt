</style>

<style scoped>
table {
  display: var(--ve-table-display);
  overflow: var(--ve-table-overflow);
  table-layout: var(--ve-table-layout);
  margin: var(--ve-table-margin);
  border-collapse: var(--ve-table-border-collapse);
  border-spacing: var(--ve-table-border-spacing);
  border-radius: var(--ve-table-border-radius);
  width: var(--ve-table-width);
  max-width: var(--ve-table-max-width);
  font-size: var(--ve-table-font-size);
}

caption {
  caption-side: var(--ve-caption-caption-side);
  margin-bottom: var(--ve-caption-margin-bottom);
  font-size: var(--ve-caption-font-size);
  font-weight: var(--ve-caption-font-weight);
  color: var(--ve-caption-color);
  text-shadow: var(--ve-caption-text-shadow);
}

thead {
  border-radius: var(--ve-thead-border-radius);
}

tr {
  display: var(--ve-tr-display);
  flex-flow: var(--ve-tr-flex-flow);
  padding: var(--ve-tr-padding);
}

th {
  display: var(--ve-th-display);
  font-size: var(--ve-th-font-size);
  font-style: var(--ve-th-font-style);
  text-transform: var(--ve-th-text-transform);
  background-color: var(--ve-th-background-color);
  color: var(--ve-th-color);
}

th,
td {
  padding: var(--ve-th-td-padding);
  text-align: var(--ve-th-td-text-align);
  vertical-align: var(--ve-th-td-vertical-align);
}

td {
  display: var(--ve-td-display);
  word-break: var(--ve-td-word-break);;
  cursor: var(--ve-td-cursor);
}

tbody tr:nth-child(even) {
  background-color: var(--ve-tbody-even-background-color);
  color: var(--ve-tbody-even-color);
}

tbody tr:nth-child(odd) {
  background-color: var(--ve-tbody-odd-background-color);
  color: var(--ve-tbody-odd-color);
}

tbody tr:hover,
tbody tr:focus {
  background-color: var(--ve-tbody-hover-background-color);
  color: var(--ve-tbody-hover-color);
}

@media (min-width: 1200px) {
  th,
  td {
    display: var(--ve-th-td-display);
  }
}
</style>
