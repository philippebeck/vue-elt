<template>
  <!-- TABLE ELT -->
  <table>
    <!-- Caption (option) -->
    <caption v-if="hasSlot('title')">
      <slot name="title">
        {{ title }}
      </slot>
    </caption>

    <thead>
      <tr>
        <th
          v-for="(value, key) in items[0]"
          :key="key">
          {{ key === "_id" ? key = "id" : key }}
        </th>

        <!-- Last Th (option) -->
        <th v-if="hasSlot('head')">
          <slot name="head"></slot>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="index">
        <td
          v-for="(value, key) in item"
          :key="key">
          <slot
            :name="`cell-${key}`"
            :index="index"
            :item="item"
            :key="key"
            :value="value">
            {{ value }}
          </slot>
        </td>

        <!-- Last Td (option) -->
        <td v-if="hasSlot('body')">
          <slot
            name="body"
            :index="index"
            :item="item">
          </slot>
        </td>
      </tr>
    </tbody>

    <!-- Tfoot (option) -->
    <tfoot v-if="hasSlot('foot')">
      <slot name="foot"></slot>
    </tfoot>
  </table>
</template>

<script>
export default {
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
}
</script>

<style>
table {
  --ve-table-display: table;
  --ve-table-overflow: hidden;
  --ve-table-layout: fixed;
  --ve-table-margin: 50px auto;
  --ve-table-border-collapse: separate;
  --ve-table-border-spacing: 1px;
  --ve-table-border-radius: 10px;
  --ve-table-width: 100%;
  --ve-table-max-width: 100%;
  --ve-table-font-size: 1.5rem;
}

caption {
  --ve-caption-caption-side: top;
  --ve-caption-margin-bottom: 20px;
  --ve-caption-font-size: 1.5rem;
  --ve-caption-font-weight: bold;
  --ve-caption-color: var(--ani-gray);
  --ve-caption-text-shadow: 1px 1px 2px;
}

thead {
  --ve-thead-border-radius: 10px;
}

tr {
  --ve-tr-display: flex;
  --ve-tr-flex-flow: column;
  --ve-tr-padding: 20px;
  --ve-tbody-even-background-color: var(--ani-gray-light);
  --ve-tbody-even-color: var(--ani-black);
  --ve-tbody-odd-background-color: var(--ani-white);
  --ve-tbody-odd-color: var(--ani-gray);
  --ve-tbody-hover-background-color: var(--ani-silver);
  --ve-tbody-hover-color: var(--ani-black);
}

th {
  --ve-th-display: none;
  --ve-th-font-size: 1.5rem;
  --ve-th-font-style: italic;
  --ve-th-text-transform: uppercase;
  --ve-th-background-color: var(--ani-blue);
  --ve-th-color: var(--ani-white);
}

th,
td {
  --ve-th-td-padding: 5px;
  --ve-th-td-text-align: center;
  --ve-th-td-vertical-align: middle;
}

td {
  --ve-td-display: table;
  --ve-td-word-break: normal;
  --ve-td-cursor: cell;
}

@media (min-width: 576px) {
  table {
    --ve-table-max-width: 99%;
  }
}

@media (min-width: 768px) {
  table {
    --ve-table-max-width: 98%;
  }
}

@media (min-width: 992px) {
  table {
    --ve-table-max-width: 97%;
  }
}

@media (min-width: 1200px) {
  table {
    --ve-table-max-width: 96%;
  }
  tr {
    --ve-tr-display: table-row;
  }
  th,
  td {
    --ve-th-td-display: table-cell;
  }
}

@media (min-width: 1600px) {
  table {
    --ve-table-max-width: 95%;
  }
}
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
