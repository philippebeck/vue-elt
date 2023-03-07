<template>
  <!-- FOOT ELT -->
  <footer>
    <ul v-if="hasSlot('foot1') || hasSlot('foot2') || hasSlot('foot3')">

      <!-- Column 1 (option) -->
      <li v-if="hasSlot('foot1')">
        <section>
          <h3>{{ title1 }}</h3>
          <slot name="foot1"></slot>
        </section>
      </li>

      <!-- Column 2 (option) -->
      <li v-if="hasSlot('foot2')">
        <section>
          <h3>{{ title2 }}</h3>
          <slot name="foot2"></slot>
        </section>
      </li>

      <!-- Column 3 (option) -->
      <li v-if="hasSlot('foot3')">
        <section>
          <h3>{{ title3 }}</h3>
          <slot name="foot3"></slot>
        </section>
      </li>
    </ul>

    <!-- Bottom Part (option) -->
    <aside v-if="hasSlot('foot')">
      <slot name="foot"></slot>
    </aside>
  </footer>
</template>

<script>
export default {
  name: "FootElt",
  props: {
    title1: {
      type: String,
      default: "Sites"
    },
    title2: {
      type: String,
      default: "Tools"
    },
    title3: {
      type: String,
      default: "Links"
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
/********** FOOT ELT **********/
footer {
  --ve-foot-text-align: center;
  --ve-foot-child-margin: 0;
  --ve-foot-child-padding: 0;
  --ve-foot-li-list-style: none;
  --ve-foot-a-text-decoration: none;
  --ve-foot-a-cursor: pointer;
  --ve-foot-ul-display: flex;
  --ve-foot-ul-flex-flow: column;
  --ve-foot-ul-gap: 20px;
  --ve-foot-ul-place-content: center;
  --ve-foot-ul-place-items: center;
  --ve-foot-ul-padding: 20px;
  --ve-foot-ul-background-color: var(--ani-sky);
  --ve-foot-title-margin-bottom: 5px;
  --ve-foot-title-font-size: 2rem;
  --ve-foot-title-font-family: var(--ani-monospace);
  --ve-foot-title-color: var(--ani-yellow);
  --ve-foot-section-a-color: var(--ani-white);
  --ve-foot-section-a-hover-color: var(--ani-gray);
}

aside {
  --ve-foot-aside-ul-display: flex;
  --ve-foot-aside-ul-flex-flow: row;
  --ve-foot-aside-ul-gap: 10px;
  --ve-foot-aside-ul-place-content: center;
  --ve-foot-aside-ul-place-items: center;
  --ve-foot-aside-ul-padding: 10px;
  --ve-foot-aside-ul-background-color: var(--ani-white);
  --ve-foot-aside-a-color: var(--ani-blue);
  --ve-foot-aside-i-hover-transform: scale(1.2);
  --ve-foot-aside-i-hover-transition: transform 200ms;
}

@media (min-width: 576px) {
  footer {
    --ve-foot-ul-flex-flow: row;
    --ve-foot-ul-place-content: space-around;
  }
}

@media (min-width: 768px) {
  footer {
    --ve-foot-ul-place-content: space-evenly;
  }
}

@media (min-width: 992px) {
  footer {
    --ve-foot-ul-place-content: center;
    --ve-foot-ul-gap: 10%;
  }
}

</style>

<style scoped>
footer {
  text-align: var(--ve-foot-text-align);
}

h3,
h4,
:deep(ul) {
  margin: var(--ve-foot-child-margin);
  padding: var(--ve-foot-child-padding);
}

:deep(li) {
  list-style: var(--ve-foot-li-list-style);
}

:deep(a) {
  text-decoration: var(--ve-foot-a-text-decoration);
  cursor: var(--ve-foot-a-cursor);
}

/********************* MAIN PART *********************/

footer > ul { 
  display: var(--ve-foot-ul-display);
  flex-flow: var(--ve-foot-ul-flex-flow);
  gap: var(--ve-foot-ul-gap);
  place-content: var(--ve-foot-ul-place-content);
  place-items: var(--ve-foot-ul-place-items);
  padding: var(--ve-foot-ul-padding);
  background-color: var(--ve-foot-ul-background-color);
}

h3,
h4 {
  margin-bottom: var(--ve-foot-title-margin-bottom);
  font-size: var(--ve-foot-title-font-size);
  font-family: var(--ve-foot-title-font-family);
  color: var(--ve-foot-title-color);
}

section :deep(a) {
  color: var(--ve-foot-section-a-color);
}

section :deep(a):hover,
section :deep(a):focus {
  color: var(--ve-foot-section-a-hover-color);
}

/********************* SECOND PART *********************/

aside :deep(ul) {
  display: var(--ve-foot-aside-ul-display);
  flex-flow: var(--ve-foot-aside-ul-flex-flow);
  gap: var(--ve-foot-aside-ul-gap);
  place-content: var(--ve-foot-aside-ul-place-content);
  place-items: var(--ve-foot-aside-ul-place-items);
  padding: var(--ve-foot-aside-ul-padding);
  background-color: var(--ve-foot-aside-ul-background-color);
}

aside :deep(a) {
  color: var(--ve-foot-aside-a-color);
}

aside :deep(i):hover,
aside :deep(i):focus {
  transform: var(--ve-foot-aside-i-hover-transform);
  transition: var(--ve-foot-aside-i-hover-transition);
}
</style>
