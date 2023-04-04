<template>
  <ul v-if="dynamic === true">
    <li v-for="(item, index) in items"
      :key="index">

      <slot name="items"
        :index="index"
        :item="item">
        {{ item }}
      </slot>
      
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

  <ul v-else>
    <li v-for="(item, index) in items"
      :key="index">

      <slot :name="`item-${index + 1}`"
        :index="index"
        :item="item">
        {{ item }}
      </slot>
      
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

<style>
/********** LIST ELT **********/
ul {
  --ve-list-margin: 20px 0;
  --ve-list-padding: 0;
  --ve-list-list-style: none;
  --ve-list-text-align: center;
  --ve-list-li-ul-display: flex;
  --ve-list-li-ul-flex-flow: wrap;
  --ve-list-li-ul-gap: 20px;
  --ve-list-li-ul-place-content: center;
  --ve-list-li-ul-place-items: end;
  --ve-list-li-li-max-width: 300px;
}

</style>

<style scoped>
ul {
  margin: var(--ve-list-margin);
  padding: var(--ve-list-padding);
  list-style: var(--ve-list-list-style);
  text-align: var(--ve-list-text-align);
}

li > ul {
  display: var(--ve-list-li-ul-display);
  flex-flow: var(--ve-list-li-ul-flex-flow);
  gap: var(--ve-list-li-ul-gap);
  place-content: var(--ve-list-li-ul-place-content);
  place-items: var(--ve-list-li-ul-place-items);
}

li li {
  max-width: var(--ve-list-li-li-max-width);
}
</style>
