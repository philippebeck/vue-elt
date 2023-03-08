<template>
  <!-- BUTTON -->
  <button v-if="getBtnType() === 'button'"
    :type="type"
    :value="value"
    :title="title">
    <slot name="btn"></slot>
    {{ content }}
  </button>

  <!-- LINK -->
  <a v-else
    :href="href"
    :title="title">
    <slot name="btn"></slot>
    {{ content }}
  </a>
</template>

<script>
  export default {
    name: "BtnElt",

    props: {
      type: {
        type: String,
        default: "link"
      },
      value: String,
      href: String,
      content: String,
      title: String
    },

    methods: {
      getBtnType() {
        if (
          this.type === "button" || 
          this.type === "submit" || 
          this.type === "reset"
          ) {
          return "button";
        }
        return "link";
      }
    }
  }
</script>

<style>
/********** BTN ELT **********/
a,
button {
  --ve-btn-display: inline-block;
  --ve-btn-margin: 10px;
  --ve-btn-border: solid 2px var(--ani-white);
  --ve-btn-border-radius: 10px;
  --ve-btn-padding: 5px 10px;
  --ve-btn-font-family: var(--ani-monospace);
  --ve-btn-font-size: 1.5rem;
  --ve-btn-font-weight: bold;
  --ve-btn-text-align: center;
  --ve-btn-text-decoration: none;
  --ve-btn-background-color: var(--ani-black);
  --ve-btn-color: var(--ani-white);
  --ve-btn-cursor: pointer;
  --ve-btn-hover-border-color: var(--ani-black);
  --ve-btn-hover-border-radius: 5px;
  --ve-btn-hover-background-color: var(--ani-white);
  --ve-btn-hover-color: var(--ani-black);
  --ve-btn-hover-box-shadow: inset 0 0 5px 2px;
  --ve-btn-hover-transition: all 200ms;
  --ve-btn-child-display: block;
  --ve-btn-child-margin: auto;
  --ve-label-border-radius: 20px;
  --ve-label-background-color: var(--ani-white);
  --ve-label-border-color: var(--ani-white);
  --ve-label-color: var(--ani-white);
  --ve-label-hover-border-radius: 20px;
}

</style>

<style scoped>
a,
button {
  display: var(--ve-btn-display);
  margin: var(--ve-btn-margin);
  border: var(--ve-btn-border);
  border-radius: var(--ve-btn-border-radius);
  padding: var(--ve-btn-padding);
  font-family: var(--ve-btn-font-family);
  font-size: var(--ve-btn-font-size);
  font-weight: var(--ve-btn-font-weight);
  text-align: var(--ve-btn-text-align);
  text-decoration: var(--ve-btn-text-decoration);
  background-color: var(--ve-btn-background-color);
  color: var(--ve-btn-color);
  cursor: var(--ve-btn-cursor);
}

[class*="label-"] {
  border-radius: var(--ve-label-border-radius);
  background-color: var(--ve-label-background-color);
}

a:hover,
a:focus,
button:hover,
button:focus {
  border-color: var(--ve-btn-hover-border-color);
  border-radius: var(--ve-btn-hover-border-radius);
  background-color: var(--ve-btn-hover-background-color);
  color: var(--ve-btn-hover-color);
  box-shadow: var(--ve-btn-hover-box-shadow);
  transition: var(--ve-btn-hover-transition);
}

[class*="label-"]:hover,
[class*="label-"]:focus {
  border-color: var(--ve-label-border-color);
  border-radius: var(--ve-label-hover-border-radius);
  color: var(--ve-label-color);
}

a > *,
button > * {
  display: var(--ve-btn-child-display);
  margin: var(--ve-btn-child-margin);
}

/* RED */

.btn-red {
  background-color: var(--ani-red);
}

.btn-red:hover,
.btn-red:focus {
  border-color: var(--ani-red);
  color: var(--ani-red);
}

.label-red {
  border-color: var(--ani-red);
  color: var(--ani-red);
}

.label-red:hover,
.label-red:focus {
  background-color: var(--ani-red);
}

/* ORANGE */

.btn-orange {
  background-color: var(--ani-orange);
}

.btn-orange:hover,
.btn-orange:focus {
  border-color: var(--ani-orange);
  color: var(--ani-orange);
}

.label-orange {
  border-color: var(--ani-orange);
  color: var(--ani-orange);
}

.label-orange:hover,
.label-orange:focus {
  background-color: var(--ani-orange);
}

/* YELLOW */

.btn-yellow {
  background-color: var(--ani-yellow);
}

.btn-yellow:hover,
.btn-yellow:focus {
  border-color: var(--ani-yellow);
  color: var(--ani-yellow);
}

.label-yellow {
  border-color: var(--ani-yellow);
  color: var(--ani-yellow);
}

.label-yellow:hover,
.label-yellow:focus {
  background-color: var(--ani-yellow);
}

/* GREEN */

.btn-green {
  background-color: var(--ani-green);
}

.btn-green:hover,
.btn-green:focus {
  border-color: var(--ani-green);
  color: var(--ani-green);
}

.label-green {
  border-color: var(--ani-green);
  color: var(--ani-green);
}

.label-green:hover,
.label-green:focus {
  background-color: var(--ani-green);
}

/* SKY */

.btn-sky {
  background-color: var(--ani-sky);
}

.btn-sky:hover,
.btn-sky:focus {
  border-color: var(--ani-sky);
  color: var(--ani-sky);
}

.label-sky {
  border-color: var(--ani-sky);
  color: var(--ani-sky);
}

.label-sky:hover,
.label-sky:focus {
  background-color: var(--ani-sky);
}

/* BLUE */

.btn-blue {
  background-color: var(--ani-blue);
}

.btn-blue:hover,
.btn-blue:focus {
  border-color: var(--ani-blue);
  color: var(--ani-blue);
}

.label-blue {
  border-color: var(--ani-blue);
  color: var(--ani-blue);
}

.label-blue:hover,
.label-blue:focus {
  background-color: var(--ani-blue);
}

/* VIOLET */

.btn-violet {
  background-color: var(--ani-violet);
}

.btn-violet:hover,
.btn-violet:focus {
  border-color: var(--ani-violet);
  color: var(--ani-violet);
}

.label-violet {
  border-color: var(--ani-violet);
  color: var(--ani-violet);
}

.label-violet:hover,
.label-violet:focus {
  background-color: var(--ani-violet);
}

/* PINK */

.btn-pink {
  background-color: var(--ani-pink);
}

.btn-pink:hover,
.btn-pink:focus {
  border-color: var(--ani-pink);
  color: var(--ani-pink);
}

.label-pink {
  border-color: var(--ani-pink);
  color: var(--ani-pink);
}

.label-pink:hover,
.label-pink:focus {
  background-color: var(--ani-pink);
}
</style>
