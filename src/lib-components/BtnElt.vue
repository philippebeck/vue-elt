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

<style>
:root {
  /* Colors */
  --black: 0,0%,0%;       /* Black */
  --blue: 210,100%,56%;   /* DodgerBlue */
  --cyan: 203,92%,75%;    /* LightSkyBlue */
  --gray: 0,0%,41%;       /* DimGray */
  --green: 120,61%,34%;   /* ForestGreen */
  --lime: 120,61%,50%;    /* LimeGreen */
  --maroon: 25,76%,31%;   /* SaddleBrown */
  --navy: 240,64%,27%;    /* MidnightBlue */
  --orange: 33,100%,50%;  /* DarkOrange */
  --purple: 271,76%,53%;  /* BlueViolet */
  --red: 348,83%,47%;     /* Crimson */
  --silver: 0,0%,86%;     /* GainsBoro */
  --teal: 177,70%,41%;    /* LightSeaGreen */
  --violet: 249,80%,67%;  /* MediumSlateBlue */
  --white: 240,100%,99%;  /* GhostWhite */
  --yellow: 51,100%,50%;  /* Gold */
  /* Fonts */
  --sans-serif: sans-serif;
  --serif: serif;
  --monospace: monospace;
  --cursive: cursive;
  --fantasy: fantasy;
  /* Transparency */
  --lighter: 0.1;
  --light: 0.3;
  --dark: 0.7;
  --darker: 0.9;
}
</style>

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
