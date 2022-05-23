<template>
  <button 
    v-if="getBtnType() === 'button'"
    :id="id"
    :name="name"
    :title="title"
    :type="type"
    :value="value">
    <slot name="button"></slot>
    {{ content }}
  </button>

  <a 
    v-else
    :href="href"
    :id="id"
    :title="title">
    <slot name="link"></slot>
    {{ content }}
  </a>
</template>

<script>
  export default {
    name: "BtnElt",

    props: {
      content: {
        type: String,
        default: "",
      },
      href: {
        type: String,
        default: null
      },
      id: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      type: {
        type: String,
        default: "link"
      },
      value: {
        type: String,
        default: null
      }
    },

    methods: {
      getBtnType() {
        if (
          this.type === "button" || 
          this.type === "submit" || 
          this.type === "reset") {
          return "button";

        } else {
          return "link";
        }
      }
    }
  }
</script>

<style scoped>
@import "../style/vars.css";

a,
button {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
}

a {
  border: solid medium var(--white);
  border-radius: 10px;
  background-color: var(--black);
  color: var(--white);
  text-decoration: none;
}

button {
  border: outset medium var(--black);
  border-radius: 5px;
  background-color: var(--white);
  color: var(--black);
}

a:hover,
button:hover,
a:focus,
button:focus {
  border-radius: 5px;
  transition: all 300ms linear;
  animation: none;
}

a:hover,
a:focus {
  border: solid medium var(--black);
  box-shadow: inset 0 0 5px 5px;
  background-color: var(--white);
  color: var(--black);
}

button:hover,
button:focus {
  border: solid medium var(--white);
  box-shadow: inset 0 0 5px 5px;
  background-color: var(--black);
  color: var(--white);
}

a > *,
button > * {
  display: block;
  margin: auto;
}
</style>
