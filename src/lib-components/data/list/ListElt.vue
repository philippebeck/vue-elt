<template>
  <!-- LIST ELT (Dynamic Slot) -->
  <ul v-if="dynamic === true">
    <li v-for="(item, index) in items"
      :key="index">

      <slot name="items"
        :index="index"
        :item="item">
        {{ item }}
      </slot>
      
      <!-- Nested List (option) -->
      <ul v-if="hasSlot('nested')">

        <li v-for="(value, key) in item"
          :key="key">

          <slot name="nested"
            :index="index"
            :item="item"
            :key="key"
            :value="value">
            {{ value }}
          </slot>

        </li>
      </ul>
    </li>
  </ul>

  <!-- LIST ELT (Static Slot) -->
  <ul v-else>
    <li v-for="(item, index) in items"
      :key="index">

      <slot :name="`item-${index + 1}`"
        :index="index"
        :item="item">
        {{ item }}
      </slot>
      
      <!-- Nested List (option) -->
      <ul v-if="hasSlot('nested')">

        <li v-for="(value, key) in item"
          :key="key">

          <slot :name="`nested-${key + 1}`"
            :index="index"
            :item="item"
            :key="key"
            :value="value">
            {{ value }}
          </slot>

        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListElt",
  props: {
    items: {
      type: Object,
      required: true
    },
    dynamic: {
      type: Boolean,
      default: false
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
@import url("list.css");

ul {
  margin: var(--ve-ul-margin);
  padding: var(--ve-ul-padding);
  list-style: var(--ve-ul-list-style);
  text-align: var(--ve-ul-text-align);
}

li > ul {
  display: var(--ve-li-ul-display);
  flex-flow: var(--ve-li-ul-flex-flow);
  place-content: var(--ve-li-ul-place-content);
}
</style>
