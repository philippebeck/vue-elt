<template>
  <!-- FOOT ELT -->
  <footer>
    <ul>

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
footer {
  --ve-footer-text-align: center;
  --ve-footer-child-margin: 0;
  --ve-footer-child-padding: 0;
  --ve-footer-li-list-style: none;
  --ve-footer-a-text-decoration: none;
  --ve-footer-ul-display: flex;
  --ve-footer-ul-flex-direction: column;
  --ve-footer-ul-place-items: center;
  --ve-footer-ul-gap: 20px;
  --ve-footer-ul-padding: 20px;
  --ve-footer-ul-background-color: var(--ani-sky);
  --ve-footer-h3-margin-bottom: 5px;
  --ve-footer-h3-font-size: 2rem;
  --ve-footer-h3-font-family: monospace;
  --ve-footer-h3-color: var(--ani-yellow);
  --ve-footer-section-a-color: var(--ani-white);
  --ve-footer-section-a-hover-color: var(--ani-gray);
}

aside {
  --ve-aside-ul-display: flex;
  --ve-aside-ul-flex-direction: row;
  --ve-aside-ul-place-content: center;
  --ve-aside-ul-gap: 10px;
  --ve-aside-ul-padding: 10px;
  --ve-aside-ul-background-color: var(--ani-white);
  --ve-aside-a-color: var(--ani-blue);
  --ve-aside-a-hover-transform: scale(1.2);
  --ve-aside-a-hover-transition: transform 200ms;
}

@media (min-width: 576px) {
  footer {
    --ve-footer-ul-flex-direction: row;
    --ve-footer-ul-place-content: space-around;
  }
}

@media (min-width: 768px) {
  footer {
    --ve-footer-ul-place-content: space-evenly;
  }
}

@media (min-width: 992px) {
  footer {
    --ve-footer-ul-place-content: center;
    --ve-footer-ul-gap: 10%;
  }
}
</style>

<style scoped>
@import url("foot.css");

footer {
  text-align: var(--ve-footer-text-align);
}

h3,
:deep(ul) {
  margin: var(--ve-footer-child-margin);
  padding: var(--ve-footer-child-padding);
}

:deep(li) {
  list-style: var(--ve-footer-li-list-style);
}

:deep(a) {
  text-decoration: var(--ve-footer-a-text-decoration);
}

/********************* MAIN PART *********************/

footer > ul { 
  display: var(--ve-footer-ul-display);
  flex-direction: var(--ve-footer-ul-flex-direction);
  place-items: var(--ve-footer-ul-place-items);
  gap: var(--ve-footer-ul-gap);
  padding: var(--ve-footer-ul-padding);
  background-color: var(--ve-footer-ul-background-color);
}

h3 {
  margin-bottom: var(--ve-footer-h3-margin-bottom);
  font-size: var(--ve-footer-h3-font-size);
  font-family: var(--ve-footer-h3-font-family);
  color: var(--ve-footer-h3-color);
}

section :deep(a) {
  color: var(--ve-footer-section-a-color);
}

section :deep(a):hover,
section :deep(a):focus {
  color: var(--ve-footer-section-a-hover-color);
}

/********************* SECOND PART *********************/

aside :deep(ul) {
  display: var(--ve-aside-ul-display);
  flex-direction: var(--ve-aside-ul-flex-direction);
  place-content: var(--ve-aside-ul-place-content);
  gap: var(--ve-aside-ul-gap);
  padding: var(--ve-aside-ul-padding);
  background-color: var(--ve-aside-ul-background-color);
}

aside :deep(a) {
  color: var(--ve-aside-a-color);
}

aside :deep(i):hover,
aside :deep(i):focus {
  transform: var(--ve-aside-a-hover-transform);
  transition: var(--ve-aside-a-hover-transition);
}

/********************* RESPONSIVE *********************/

@media (min-width: 576px) {
  footer > ul {
    place-content: var(--ve-footer-ul-place-content);
  }
}
</style>
