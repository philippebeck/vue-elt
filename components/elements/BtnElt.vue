<template>
  <button v-if="getBtnType() === 'button'"
    :type="type"
    :value="value"
    :class="$attrs.class"
    :title="title">
    <slot name="btn"></slot>
    {{ content }}
  </button>

  <a v-else
    :href="href"
    :class="$attrs.class"
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
      /**
       * Determines the type of button based on the 'type' property of the current instance.
       *
       * @return {string} Returns 'button' if the 'type' property is set to 'button', 'submit' or 'reset', otherwise returns 'link'.
       */
      getBtnType() {
        const validTypes = ["button", "submit", "reset"];

        return validTypes.includes(this.type) ? "button" : "link";
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
  --ve-btn-border: none;
  --ve-btn-border-radius: 10px;
  --ve-btn-padding: 10px 15px;
  --ve-btn-font-family: var(--ani-monospace);
  --ve-btn-font-size: 1.5rem;
  --ve-btn-font-weight: bold;
  --ve-btn-text-align: center;
  --ve-btn-text-decoration: none;
  --ve-btn-background-color: var(--ani-black);
  --ve-btn-color: var(--ani-white);
  --ve-btn-cursor: pointer;
  --ve-btn-hover-border-radius: 5px;
  --ve-btn-hover-background-color: var(--ani-slate);
  --ve-btn-hover-color: var(--ani-white);
  --ve-btn-hover-box-shadow: inset 0 0 5px 2px;
  --ve-btn-hover-transition: all 200ms;
  --ve-btn-child-display: block;
  --ve-btn-child-margin: auto;
}

[class*="label"] {
  --ve-label-border: solid 2px var(--ani-black);
  --ve-label-border-radius: 20px;
  --ve-label-background-color: var(--ani-white);
  --ve-label-color: var(--ani-black);
  --ve-label-hover-border-radius: 20px;
  --ve-label-hover-background-color: var(--ani-black);
  --ve-label-hover-border-color: var(--ani-white);
  --ve-label-hover-color: var(--ani-white);
}

/* RED */

.btn-red {
  --ve-btn-red-background-color: var(--ani-red-dark);
  --ve-btn-red-hover-background-color: var(--ani-red);
  --ve-btn-red-hover-color: var(--ani-white);
}

.label-red {
  --ve-label-red-border-color: var(--ani-red-dark);
  --ve-label-red-color: var(--ani-red-dark);
  --ve-label-red-hover-border-color: var(--ani-red-light);
  --ve-label-red-hover-color: var(--ani-red-light);
}

/* ORANGE */

.btn-orange {
  --ve-btn-orange-background-color: var(--ani-orange-dark);
  --ve-btn-orange-hover-background-color: var(--ani-orange);
  --ve-btn-orange-hover-color: var(--ani-white);
}

.label-orange {
  --ve-label-orange-border-color: var(--ani-orange-dark);
  --ve-label-orange-color: var(--ani-orange-dark);
  --ve-label-orange-hover-border-color: var(--ani-orange-light);
  --ve-label-orange-hover-color: var(--ani-orange-light);
}

/* YELLOW */

.btn-yellow {
  --ve-btn-yellow-background-color: var(--ani-yellow-dark);
  --ve-btn-yellow-hover-background-color: var(--ani-yellow);
  --ve-btn-yellow-hover-color: var(--ani-black);
}

.label-yellow {
  --ve-label-yellow-border-color: var(--ani-yellow-dark);
  --ve-label-yellow-color: var(--ani-yellow-dark);
  --ve-label-yellow-hover-border-color: var(--ani-yellow-light);
  --ve-label-yellow-hover-color: var(--ani-yellow-light);
}

/* LIME */

.btn-lime {
  --ve-btn-lime-background-color: var(--ani-lime-dark);
  --ve-btn-lime-hover-background-color: var(--ani-lime);
  --ve-btn-lime-hover-color: var(--ani-black);
}

.label-lime {
  --ve-label-lime-border-color: var(--ani-lime-dark);
  --ve-label-lime-color: var(--ani-lime-dark);
  --ve-label-lime-hover-border-color: var(--ani-lime-light);
  --ve-label-lime-hover-color: var(--ani-lime-light);
}

/* GREEN */

.btn-green {
  --ve-btn-green-background-color: var(--ani-green-dark);
  --ve-btn-green-hover-background-color: var(--ani-green);
  --ve-btn-green-hover-color: var(--ani-black);
}

.label-green {
  --ve-label-green-border-color: var(--ani-green-dark);
  --ve-label-green-color: var(--ani-green-dark);
  --ve-label-green-hover-border-color: var(--ani-green-light);
  --ve-label-green-hover-color: var(--ani-green-light);
}

/* AQUA */

.btn-aqua {
  --ve-btn-aqua-background-color: var(--ani-aqua-dark);
  --ve-btn-aqua-hover-background-color: var(--ani-aqua);
  --ve-btn-aqua-hover-color: var(--ani-black);
}

.label-aqua {
  --ve-label-aqua-border-color: var(--ani-aqua-dark);
  --ve-label-aqua-color: var(--ani-aqua-dark);
  --ve-label-aqua-hover-border-color: var(--ani-aqua-light);
  --ve-label-aqua-hover-color: var(--ani-aqua-light);
}

/* CYAN */

.btn-cyan {
  --ve-btn-cyan-background-color: var(--ani-cyan-dark);
  --ve-btn-cyan-hover-background-color: var(--ani-cyan);
  --ve-btn-cyan-hover-color: var(--ani-black);
}

.label-cyan {
  --ve-label-cyan-border-color: var(--ani-cyan-dark);
  --ve-label-cyan-color: var(--ani-cyan-dark);
  --ve-label-cyan-hover-border-color: var(--ani-cyan-light);
  --ve-label-cyan-hover-color: var(--ani-cyan-light);
}

/* SKY */

.btn-sky {
  --ve-btn-sky-background-color: var(--ani-sky-dark);
  --ve-btn-sky-hover-background-color: var(--ani-sky);
  --ve-btn-sky-hover-color: var(--ani-black);
}

.label-sky {
  --ve-label-sky-border-color: var(--ani-sky-dark);
  --ve-label-sky-color: var(--ani-sky-dark);
  --ve-label-sky-hover-border-color: var(--ani-sky-light);
  --ve-label-sky-hover-color: var(--ani-sky-light);
}

/* BLUE */

.btn-blue {
  --ve-btn-blue-background-color: var(--ani-blue-dark);
  --ve-btn-blue-hover-background-color: var(--ani-blue);
  --ve-btn-blue-hover-color: var(--ani-white);
}

.label-blue {
  --ve-label-blue-border-color: var(--ani-blue-dark);
  --ve-label-blue-color: var(--ani-blue-dark);
  --ve-label-blue-hover-border-color: var(--ani-blue-light);
  --ve-label-blue-hover-color: var(--ani-blue-light);
}

/* VIOLET */

.btn-violet {
  --ve-btn-violet-background-color: var(--ani-violet-dark);
  --ve-btn-violet-hover-background-color: var(--ani-violet);
  --ve-btn-violet-hover-color: var(--ani-white);
}

.label-violet {
  --ve-label-violet-border-color: var(--ani-violet-dark);
  --ve-label-violet-color: var(--ani-violet-dark);
  --ve-label-violet-hover-border-color: var(--ani-violet-light);
  --ve-label-violet-hover-color: var(--ani-violet-light);
}

/* MAGENTA */

.btn-magenta {
  --ve-btn-magenta-background-color: var(--ani-magenta-dark);
  --ve-btn-magenta-hover-background-color: var(--ani-magenta);
  --ve-btn-magenta-hover-color: var(--ani-white);
}

.label-magenta {
  --ve-label-magenta-border-color: var(--ani-magenta-dark);
  --ve-label-magenta-color: var(--ani-magenta-dark);
  --ve-label-magenta-hover-border-color: var(--ani-magenta-light);
  --ve-label-magenta-hover-color: var(--ani-magenta-light);
}

/* PINK */

.btn-pink {
  --ve-btn-pink-background-color: var(--ani-pink-dark);
  --ve-btn-pink-hover-background-color: var(--ani-pink);
  --ve-btn-pink-hover-color: var(--ani-white);
}

.label-pink {
  --ve-label-pink-border-color: var(--ani-pink-dark);
  --ve-label-pink-color: var(--ani-pink-dark);
  --ve-label-pink-hover-border-color: var(--ani-pink-light);
  --ve-label-pink-hover-color: var(--ani-pink-light);
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

[class*="label"] {
  border: var(--ve-label-border);
  border-radius: var(--ve-label-border-radius);
  background-color: var(--ve-label-background-color);
  color: var(--ve-label-color);
}

a:hover,
a:focus,
button:hover,
button:focus {
  border-radius: var(--ve-btn-hover-border-radius);
  background-color: var(--ve-btn-hover-background-color);
  color: var(--ve-btn-hover-color);
  transition: var(--ve-btn-hover-transition);
}

[class*="label"]:hover,
[class*="label"]:focus {
  border-radius: var(--ve-label-hover-border-radius);
  border-color: var(--ve-label-hover-border-color);
  background-color: var(--ve-label-hover-background-color);
  color: var(--ve-label-hover-color);
}

a > *,
button > * {
  display: var(--ve-btn-child-display);
  margin: var(--ve-btn-child-margin);
}

/* RED */

.btn-red {
  background-color: var(--ve-btn-red-background-color);
}

.btn-red:hover,
.btn-red:focus {
  background-color: var(--ve-btn-red-hover-background-color);
  color: var(--ve-btn-red-hover-color);
}

.label-red {
  border-color: var(--ve-label-red-border-color);
  color: var(--ve-label-red-color);
}

.label-red:hover,
.label-red:focus {
  border-color: var(--ve-label-red-hover-border-color);
  color: var(--ve-label-red-hover-color);
}

/* ORANGE */

.btn-orange {
  background-color: var(--ve-btn-orange-background-color);
}

.btn-orange:hover,
.btn-orange:focus {
  background-color: var(--ve-btn-orange-hover-background-color);
  color: var(--ve-btn-orange-hover-color);
}

.label-orange {
  border-color: var(--ve-label-orange-border-color);
  color: var(--ve-label-orange-color);
}

.label-orange:hover,
.label-orange:focus {
  border-color: var(--ve-label-orange-hover-border-color);
  color: var(--ve-label-orange-hover-color);
}

/* YELLOW */

.btn-yellow {
  background-color: var(--ve-btn-yellow-background-color);
}

.btn-yellow:hover,
.btn-yellow:focus {
  background-color: var(--ve-btn-yellow-hover-background-color);
  color: var(--ve-btn-yellow-hover-color);
}

.label-yellow {
  border-color: var(--ve-label-yellow-border-color);
  color: var(--ve-label-yellow-color);
}

.label-yellow:hover,
.label-yellow:focus {
  border-color: var(--ve-label-yellow-hover-border-color);
  color: var(--ve-label-yellow-hover-color);
}

/* LIME */

.btn-lime {
  background-color: var(--ve-btn-lime-background-color);
}

.btn-lime:hover,
.btn-lime:focus {
  background-color: var(--ve-btn-lime-hover-background-color);
  color: var(--ve-btn-lime-hover-color);
}

.label-lime {
  border-color: var(--ve-label-lime-border-color);
  color: var(--ve-label-lime-color);
}

.label-lime:hover,
.label-lime:focus {
  border-color: var(--ve-label-lime-hover-border-color);
  color: var(--ve-label-lime-hover-color);
}

/* GREEN */

.btn-green {
  background-color: var(--ve-btn-green-background-color);
}

.btn-green:hover,
.btn-green:focus {
  background-color: var(--ve-btn-green-hover-background-color);
  color: var(--ve-btn-green-hover-color);
}

.label-green {
  border-color: var(--ve-label-green-border-color);
  color: var(--ve-label-green-color);
}

.label-green:hover,
.label-green:focus {
  border-color: var(--ve-label-green-hover-border-color);
  color: var(--ve-label-green-hover-color);
}

/* AQUA */

.btn-aqua {
  background-color: var(--ve-btn-aqua-background-color);
}

.btn-aqua:hover,
.btn-aqua:focus {
  background-color: var(--ve-btn-aqua-hover-background-color);
  color: var(--ve-btn-aqua-hover-color);
}

.label-aqua {
  border-color: var(--ve-label-aqua-border-color);
  color: var(--ve-label-aqua-color);
}

.label-aqua:hover,
.label-aqua:focus {
  border-color: var(--ve-label-aqua-hover-border-color);
  color: var(--ve-label-aqua-hover-color);
}

/* CYAN */

.btn-cyan {
  background-color: var(--ve-btn-cyan-background-color);
}

.btn-cyan:hover,
.btn-cyan:focus {
  background-color: var(--ve-btn-cyan-hover-background-color);
  color: var(--ve-btn-cyan-hover-color);
}

.label-cyan {
  border-color: var(--ve-label-cyan-border-color);
  color: var(--ve-label-cyan-color);
}

.label-cyan:hover,
.label-cyan:focus {
  border-color: var(--ve-label-cyan-hover-border-color);
  color: var(--ve-label-cyan-hover-color);
}

/* SKY */

.btn-sky {
  background-color: var(--ve-btn-sky-background-color);
}

.btn-sky:hover,
.btn-sky:focus {
  background-color: var(--ve-btn-sky-hover-background-color);
  color: var(--ve-btn-sky-hover-color);
}

.label-sky {
  border-color: var(--ve-label-sky-border-color);
  color: var(--ve-label-sky-color);
}

.label-sky:hover,
.label-sky:focus {
  border-color: var(--ve-label-sky-hover-border-color);
  color: var(--ve-label-sky-hover-color);
}

/* BLUE */

.btn-blue {
  background-color: var(--ve-btn-blue-background-color);
}

.btn-blue:hover,
.btn-blue:focus {
  background-color: var(--ve-btn-blue-hover-background-color);
  color: var(--ve-btn-blue-hover-color);
}

.label-blue {
  border-color: var(--ve-label-blue-border-color);
  color: var(--ve-label-blue-color);
}

.label-blue:hover,
.label-blue:focus {
  border-color: var(--ve-label-blue-hover-border-color);
  color: var(--ve-label-blue-hover-color);
}

/* VIOLET */

.btn-violet {
  background-color: var(--ve-btn-violet-background-color);
}

.btn-violet:hover,
.btn-violet:focus {
  background-color: var(--ve-btn-violet-hover-background-color);
  color: var(--ve-btn-violet-hover-color);
}

.label-violet {
  border-color: var(--ve-label-violet-border-color);
  color: var(--ve-label-violet-color);
}

.label-violet:hover,
.label-violet:focus {
  border-color: var(--ve-label-violet-hover-border-color);
  color: var(--ve-label-violet-hover-color);
}

/* MAGENTA */

.btn-magenta {
  background-color: var(--ve-btn-magenta-background-color);
}

.btn-magenta:hover,
.btn-magenta:focus {
  background-color: var(--ve-btn-magenta-hover-background-color);
  color: var(--ve-btn-magenta-hover-color);
}

.label-magenta {
  border-color: var(--ve-label-magenta-border-color);
  color: var(--ve-label-magenta-color);
}

.label-magenta:hover,
.label-magenta:focus {
  border-color: var(--ve-label-magenta-hover-border-color);
  color: var(--ve-label-magenta-hover-color);
}

/* PINK */

.btn-pink {
  background-color: var(--ve-btn-pink-background-color);
}

.btn-pink:hover,
.btn-pink:focus {
  background-color: var(--ve-btn-pink-hover-background-color);
  color: var(--ve-btn-pink-hover-color);
}

.label-pink {
  border-color: var(--ve-label-pink-border-color);
  color: var(--ve-label-pink-color);
}

.label-pink:hover,
.label-pink:focus {
  border-color: var(--ve-label-pink-hover-border-color);
  color: var(--ve-label-pink-hover-color);
}
</style>
