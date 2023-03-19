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
