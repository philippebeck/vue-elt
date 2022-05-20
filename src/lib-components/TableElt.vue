<template>
  <table>
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
        <td v-if="hasSlot('body')">
          <slot
            name="body"
            :index="index"
            :item="item">
          </slot>
        </td>
      </tr>
    </tbody>

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

<style scoped>
table {
  --caption-color: hsl(0, 0%, 0%); /* Black */
  --even-cell-bg-color: hsla(0,0%,86%, 0.9); /* Gainsboro */
  --even-cell-color: hsl(0, 0%, 0%); /* Black */
  --odd-cell-bg-color: hsla(0,100%,99%, 0.9); /* Snow */
  --odd-cell-color: hsl(0,0%,41%); /* DimGray */
  --table-box-shadow: 5px 5px 10px 5px hsla(0,0%,86%, 0.8); /* Gainsboro */
  --th-bg-color: hsla(210,100%,56%, 0.9); /* DodgerBlue */
  --th-color: hsl(0,100%,99%); /* Snow */
  --tr-hover-bg-color: hsla(210,100%,56%, 0.9); /* DodgerBlue */
  --tr-hover-color: hsl(0,100%,99%); /* Snow */

  display: table;
  border-collapse: collapse;
  border-spacing: 10px;
  margin: 50px auto;
  width: auto;
  max-width: 100%;
  font-size: calc(var(--body-font-size) * 110 / 100);
  box-shadow: var(--table-box-shadow);
}

caption {
  caption-side: top;
  margin: 10px;
  font-size: 2rem;
  font-weight: bold;
  color: var(--caption-color);
  text-shadow: 1px 1px 2px;
}

th {
  display: table-column;
  font-size: 1.5rem;
  font-style: italic;
  background-color: var(--th-bg-color);
  color: var(--th-color);
}

th,
td {
  padding: 2px;
  text-align: center;
  vertical-align: middle;
}

td {
  display: table-row;
  word-break: normal;
  cursor: cell;
}

tbody tr:nth-child(even) {
  background-color: var(--even-cell-bg-color);
  color: var(--even-cell-color);
}

tbody tr:nth-child(odd) {
  background-color: var(--odd-cell-bg-color);
  color: var(--odd-cell-color);
}

tbody tr:hover,
tbody tr:focus {
  background-color: var(--tr-hover-bg-color);
  color: var(--tr-hover-color);
}

@media (min-width: 576px) {
  table {
    max-width: 95%;
  }
}

@media (min-width: 768px) {
  table {
    max-width: 90%;
  }
}

@media (min-width: 992px) {
  table {
    max-width: 85%;
  }
  th,
  td {
    display: table-cell;
  }
}

@media (min-width: 1200px) {
  table {
    max-width: 80%;
  }
}

@media (min-width: 1600px) {
  table {
    max-width: 75%;
  }
}
</style>
