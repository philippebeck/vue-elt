<template>
    <!-- ARTICLE ELT -->
  <article v-if="isArticle === true">
    <header>
      <slot name="header"></slot>
    </header>

    <slot name="body"></slot>

    <!-- Aside (option) -->
    <aside v-if="hasSlot('aside')">
      <slot name="aside"></slot>
    </aside>

    <!-- Footer (option) -->
    <footer v-if="hasSlot('footer')">
      <slot name="footer"></slot>
    </footer>
  </article>

  <!-- SECTION ELT -->
  <section v-else>
    <header>
      <slot name="header"></slot>
    </header>

    <slot name="body"></slot>

    <!-- Aside (option) -->
    <aside v-if="hasSlot('aside')">
      <slot name="aside"></slot>
    </aside>

    <!-- Footer (option) -->
    <footer v-if="hasSlot('footer')">
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<script>
export default {
  name: "CardElt",
  props: {
    isArticle: {
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
@import url("card.css");

article,
section {
  box-sizing: var(--ve-card-box-sizing);
  margin: var(--ve-card-margin);
  border: var(--ve-card-border);
  border-radius: var(--ve-card-border-radius);
  padding: var(--ve-card-padding);
  width: var(--ve-card-width);
  background-color: var(--ve-card-background-color);
  color: var(--ve-card-color);
}
</style>
