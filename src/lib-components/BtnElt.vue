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

<style scoped>
a,
button {
  display: inline-block;
  margin: 10px;
  border: solid medium hsl(var(--black));
  border-radius: 10px;
  padding: 5px 10px;
  font-family: var(--monospace);
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: hsl(var(--black));
  color: hsl(var(--white));
  cursor: pointer;
}

a:hover,
a:focus,
button:hover,
button:focus {
  border-radius: 5px;
  background-color: hsl(var(--white));
  color: hsl(var(--black));
  box-shadow: inset 0 0 5px 2px;
  transition: all 500ms linear;
}

a > *,
button > * {
  display: block;
  margin: auto;
}

.blue {
  border-color: hsl(var(--blue));
  background-color: hsl(var(--blue));
  color: hsl(var(--white));
}

.blue:hover,
.blue:focus {
  background-color: hsl(var(--white));
  color: hsl(var(--blue));
}

.cyan {
  border-color: hsl(var(--cyan));
  background-color: hsl(var(--cyan));
  color: hsl(var(--white));
}

.cyan:hover,
.cyan:focus {
  background-color: hsl(var(--white));
  color: hsl(var(--cyan));
}

.gray {
  border-color: hsl(var(--gray));
  background-color: hsl(var(--gray));
  color: hsl(var(--white));
}

.gray:hover,
.gray:focus {
  background-color: hsl(var(--white));
  color: hsl(var(--gray));
}

.green {
  border-color: hsl(var(--green));
  background-color: hsl(var(--green));
  color: hsl(var(--white));
}

.green:hover,
.green:focus {
  background-color: hsl(var(--white));
  color: hsl(var(--green));
}

.lime {
  border-color: hsl(var(--lime));
  background-color: hsl(var(--lime));
  color: hsl(var(--white));
}

.lime:hover,
.lime:focus {
  background-color: hsl(var(--white));
  color: hsl(var(--lime));
}

.maroon {
  border-color: hsl(var(--maroon));
  background-color: hsl(var(--maroon));
  color: hsl(var(--white));
}

.maroon:hover,
.maroon:focus {
  background-color: hsl(var(--white));
  color: hsl(var(--maroon));
}

.navy {
  border-color: hsl(var(--navy));
  background-color: hsl(var(--navy));
  color: hsl(var(--white));
}

.navy:hover,
.navy:focus {
  background-color: hsl(var(--white));
  color: hsl(var(--navy));
}

.orange {
  border-color: hsl(var(--orange));
  background-color: hsl(var(--orange));
  color: hsl(var(--white));
}

.orange:hover,
.orange:focus {
  background-color: hsl(var(--white));
  color: hsl(var(--orange));
}

.purple {
  border-color: hsl(var(--purple));
  background-color: hsl(var(--purple));
  color: hsl(var(--white));
}

.purple:hover,
.purple:focus {
  background-color: hsl(var(--white));
  color: hsl(var(--purple));
}

.red {
  border-color: hsl(var(--red));
  background-color: hsl(var(--red));
  color: hsl(var(--white));
}

.red:hover,
.red:focus {
  background-color: hsl(var(--white));
  color: hsl(var(--red));
}

.silver {
  border-color: hsl(var(--silver));
  background-color: hsl(var(--silver));
  color: hsl(var(--gray));
}

.silver:hover,
.silver:focus {
  background-color: hsl(var(--gray));
  color: hsl(var(--silver));
}

.teal {
  border-color: hsl(var(--teal));
  background-color: hsl(var(--teal));
  color: hsl(var(--white));
}

.teal:hover,
.teal:focus {
  background-color: hsl(var(--white));
  color: hsl(var(--teal));
}

.violet {
  border-color: hsl(var(--violet));
  background-color: hsl(var(--violet));
  color: hsl(var(--white));
}

.violet:hover,
.violet:focus {
  background-color: hsl(var(--white));
  color: hsl(var(--violet));
}

.yellow {
  border-color: hsl(var(--yellow));
  background-color: hsl(var(--yellow));
  color: hsl(var(--gray));
}

.yellow:hover,
.yellow:focus {
  background-color: hsl(var(--gray));
  color: hsl(var(--yellow));
}
</style>
