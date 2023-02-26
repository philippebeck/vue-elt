</style>

<style>
[id="app"] {
  margin-top: var(--ve-nav-height);
}
</style>

<style scoped>
.navbar {
  display: var(--ve-nav-display);
  place-content: var(--ve-nav-place-content);
  place-items: var(--ve-nav-place-items);
  position: var(--ve-nav-position);
  top: var(--ve-nav-top);
  right: var(--ve-nav-right);
  bottom: var(--ve-nav-bottom);
  left: var(--ve-nav-left);
  z-index: var(--ve-nav-z-index);
  height: var(--ve-nav-height);
  background-color: var(--ve-nav-background-color);
  color: var(--ve-nav-color);
}

.navbar :deep(a),
.navbar :deep(button) {
  padding: var(--ve-nav-a-padding);
  color: var(--ve-nav-a-color);
  cursor: var(--ve-nav-a-cursor);
}

.navbar :deep(ul) {
  display: var(--ve-nav-ul-display);
  place-items: var(--ve-nav-ul-place-items);
  margin: var(--ve-nav-ul-margin);
  padding: var(--ve-nav-ul-padding);
  list-style: var(--ve-nav-ul-list-style);
}

.navbar ul a {
  display: var(--ve-nav-ul-a-display);
}

.navbar ul a :not(i) {
  display: var(--ve-nav-ul-a-not-i-display);
}

.navbar :deep(ul) a,
.navbar :deep(ul) button {
  flex-direction: var(--ve-nav-ul-a-flex-direction);
}

.navbar ul a:hover,
.navbar ul a:focus,
.navbar ul button:hover,
.navbar ul button:focus {
  color: var(--ve-nav-ul-a-hover-color) !important;
  transform: var(--ve-nav-ul-a-hover-transform) !important;
}

.navbar :deep(ul):last-of-type a:hover,
.navbar :deep(ul):last-of-type a:focus,
.navbar :deep(ul):last-of-type button:hover,
.navbar :deep(ul):last-of-type button:focus {
  color: var(--ve-nav-last-ul-a-hover-color);
}

.navbar :deep(button) {
  background-color: var(--ve-nav-button-background-color);
  border: var(--ve-nav-button-border);
  cursor: var(--ve-nav-button-cursor);
}

.navbar :deep(i) {
  place-self: var(--ve-nav-i-place-self);
}

.sidebar {
  display: var(--ve-side-display);
  flex-flow: var(--ve-side-flex-flow);
  position: var(--ve-side-position);
  top: var(--ve-side-top);
  left: var(--ve-side-left);
  z-index: var(--ve-side-z-index);
  width: var(--ve-side-width);
}
.sidebar :deep(a) {
  display: var(--ve-side-a-display);
  place-content: var(--ve-side-a-place-content);
  place-items: var(--ve-side-a-place-items);
  margin: var(--ve-side-a-margin);
  border-radius: var(--ve-side-a-border-radius);
  padding: var(--ve-side-a-padding);
  width: var(--ve-side-a-width);
  background-color: var(--ve-side-a-background-color);
  color: var(--ve-side-a-color);
  cursor: var(--ve-side-a-cursor);
}

.sidebar :deep(a:hover),
.sidebar :deep(a:focus) {
  border-radius: var(--ve-side-a-hover-border-radius);
  color: var(--ve-side-a-hover-color);
  background-color: var(--ve-side-a-hover-background-color);
  transform: var(--ve-side-a-hover-transform);
  transition: var(--ve-side-a-hover-transition);
}

.hide {
  display: var(--ve-nav-hide-display) !important;
}

.show {
  display: var(--ve-nav-show-display);
}

@media (min-width: 768px) {
  .navbar > button {
    display: var(--ve-nav-button-display);
  }
}
</style>
