<template>
  <footer>
    <ul>
      <li>
        <section>
          <h3>{{ title1 }}</h3>
          <slot name="foot1"></slot>
        </section>
      </li>
      <li v-if="hasSlot('foot2')">
        <section>
          <h3>{{ title2 }}</h3>
          <slot name="foot2"></slot>
        </section>
      </li>
      <li v-if="hasSlot('foot3')">
        <section>
          <h3>{{ title3 }}</h3>
          <slot name="foot3"></slot>
        </section>
      </li>
    </ul>
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
      default: "Links"
    },
    title3: {
      type: String,
      default: "Tools"
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
ul,
h3 {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

/* MAIN PART */

footer > ul {
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  background-color: hsl(240,67%,94%); /* Lavender */
}

h3 {
  margin-bottom: 0.4rem;
  font-size: 1.3rem;
  font-family: monospace;
  color: hsl(0,0%,41%); /* DimGray */
}

section a {
  color: hsl(249,80%,67%); /* MediumSlateBlue */
}

/* SECOND PART */

aside > ul {
  display: flex;
  flex-direction: row;
  place-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: hsl(208,100%,97%); /* AliceBlue */
}

aside a {
  color: hsl(210,100%,56%); /* DodgerBlue */
}

/* RESPONSIVE */

@media (min-width: 576px) {
  footer > ul {
    flex-direction: row;
    place-content: space-around;
  }
}

@media (min-width: 768px) {
  footer > ul {
    place-content: space-evenly;
  }
}

@media (min-width: 992px) {
  footer > ul {
    place-content: center;
    gap: 10vw;
  }
}
</style>
