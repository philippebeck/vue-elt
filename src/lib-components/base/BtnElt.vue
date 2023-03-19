<template>
  <!-- BUTTON -->
  <button v-if="getBtnType() === 'button'"
    :type="type"
    :value="value"
    :class="$attrs.class"
    :title="title">
    <slot name="btn"></slot>
    {{ content }}
  </button>

  <!-- LINK -->
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
  background-color: var(--ani-red-dark);
}

.btn-red:hover,
.btn-red:focus {
  background-color: var(--ani-red);
}

.label-red {
  border-color: var(--ani-red-dark);
  color: var(--ani-red-dark);
}

.label-red:hover,
.label-red:focus {
  border-color: var(--ani-red-light);
  color: var(--ani-red-light);
}

/* ORANGE */

.btn-orange {
  background-color: var(--ani-orange-dark);
}

.btn-orange:hover,
.btn-orange:focus {
  background-color: var(--ani-orange);
}

.label-orange {
  border-color: var(--ani-orange-dark);
  color: var(--ani-orange-dark);
}

.label-orange:hover,
.label-orange:focus {
  border-color: var(--ani-orange-light);
  color: var(--ani-orange-light);
}

/* YELLOW */

.btn-yellow {
  background-color: var(--ani-yellow-dark);
}

.btn-yellow:hover,
.btn-yellow:focus {
  background-color: var(--ani-yellow);
  color: var(--ani-black);
}

.label-yellow {
  border-color: var(--ani-yellow-dark);
  color: var(--ani-yellow-dark);
}

.label-yellow:hover,
.label-yellow:focus {
  border-color: var(--ani-yellow-light);
  color: var(--ani-yellow-light);
}

/* LIME */

.btn-lime {
  background-color: var(--ani-lime-dark);
}

.btn-lime:hover,
.btn-lime:focus {
  background-color: var(--ani-lime);
  color: var(--ani-black);
}

.label-lime {
  border-color: var(--ani-lime-dark);
  color: var(--ani-lime-dark);
}

.label-lime:hover,
.label-lime:focus {
  border-color: var(--ani-lime-light);
  color: var(--ani-lime-light);
}

/* GREEN */

.btn-green {
  background-color: var(--ani-green-dark);
}

.btn-green:hover,
.btn-green:focus {
  background-color: var(--ani-green);
  color: var(--ani-black);
}

.label-green {
  border-color: var(--ani-green-dark);
  color: var(--ani-green-dark);
}

.label-green:hover,
.label-green:focus {
  border-color: var(--ani-green-light);
  color: var(--ani-green-light);
}

/* AQUA */

.btn-aqua {
  background-color: var(--ani-aqua-dark);
}

.btn-aqua:hover,
.btn-aqua:focus {
  background-color: var(--ani-aqua);
  color: var(--ani-black);
}

.label-aqua {
  border-color: var(--ani-aqua-dark);
  color: var(--ani-aqua-dark);
}

.label-aqua:hover,
.label-aqua:focus {
  border-color: var(--ani-aqua-light);
  color: var(--ani-aqua-light);
}

/* CYAN */

.btn-cyan {
  background-color: var(--ani-cyan-dark);
}

.btn-cyan:hover,
.btn-cyan:focus {
  background-color: var(--ani-cyan);
  color: var(--ani-black);
}

.label-cyan {
  border-color: var(--ani-cyan-dark);
  color: var(--ani-cyan-dark);
}

.label-cyan:hover,
.label-cyan:focus {
  border-color: var(--ani-cyan-light);
  color: var(--ani-cyan-light);
}

/* SKY */

.btn-sky {
  background-color: var(--ani-sky-dark);
}

.btn-sky:hover,
.btn-sky:focus {
  background-color: var(--ani-sky);
}

.label-sky {
  border-color: var(--ani-sky-dark);
  color: var(--ani-sky-dark);
}

.label-sky:hover,
.label-sky:focus {
  border-color: var(--ani-sky);
  color: var(--ani-sky);
}

/* BLUE */

.btn-blue {
  background-color: var(--ani-blue-dark);
}

.btn-blue:hover,
.btn-blue:focus {
  background-color: var(--ani-blue);
}

.label-blue {
  border-color: var(--ani-blue-dark);
  color: var(--ani-blue-dark);
}

.label-blue:hover,
.label-blue:focus {
  border-color: var(--ani-blue-light);
  color: var(--ani-blue-light);
}

/* VIOLET */

.btn-violet {
  background-color: var(--ani-violet-dark);
}

.btn-violet:hover,
.btn-violet:focus {
  background-color: var(--ani-violet);
}

.label-violet {
  border-color: var(--ani-violet-dark);
  color: var(--ani-violet-dark);
}

.label-violet:hover,
.label-violet:focus {
  border-color: var(--ani-violet-light);
  color: var(--ani-violet-light);
}

/* MAGENTA */

.btn-magenta {
  background-color: var(--ani-magenta-dark);
}

.btn-magenta:hover,
.btn-magenta:focus {
  background-color: var(--ani-magenta);
}

.label-magenta {
  border-color: var(--ani-magenta-dark);
  color: var(--ani-magenta-dark);
}

.label-magenta:hover,
.label-magenta:focus {
  border-color: var(--ani-magenta-light);
  color: var(--ani-magenta-light);
}

/* PINK */

.btn-pink {
  background-color: var(--ani-pink-dark);
}

.btn-pink:hover,
.btn-pink:focus {
  background-color: var(--ani-pink);
}

.label-pink {
  border-color: var(--ani-pink-dark);
  color: var(--ani-pink-dark);
}

.label-pink:hover,
.label-pink:focus {
  border-color: var(--ani-pink-light);
  color: var(--ani-pink-light);
}
</style>
