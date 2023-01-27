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
ul {
  --ul-margin: 20px 0;
  --ul-padding: 0;
  --ul-list-style: none;
  --ul-text-align: center;

  margin: var(--ul-margin);
  padding: var(--ul-padding);
  list-style: var(--ul-list-style);
  text-align: var(--ul-text-align);
}

li > ul {
  --li-ul-display: flex;
  --li-ul-flex-flow: wrap;
  --li-ul-place-content: center;

  display: var(--li-ul-display);
  flex-flow: var(--li-ul-flex-flow);
  place-content: var(--li-ul-place-content);
}
</style>
