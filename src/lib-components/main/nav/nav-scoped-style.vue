</style>

<style>
[id="app"] {
  margin-top: var(--ve-navbar-height);
}
</style>

<style scoped>
.sidebar {
  display: var(--ve-sidebar-display);
  flex-flow: var(--ve-sidebar-flex-flow);
  position: var(--ve-sidebar-position);
  top: var(--ve-sidebar-top);
  left: var(--ve-sidebar-left);
  z-index: var(--ve-sidebar-z-index);
  width: var(--ve-sidebar-width);
}
.sidebar :deep(a) {
  display: var(--ve-sidebar-a-display);
  place-content: var(--ve-sidebar-a-place-content);
  place-items: var(--ve-sidebar-a-place-items);
  margin: var(--ve-sidebar-a-margin);
  border-radius: var(--ve-sidebar-a-border-radius);
  padding: var(--ve-sidebar-a-padding);
  width: var(--ve-sidebar-a-width);
  background-color: var(--ve-sidebar-a-background-color);
  color: var(--ve-sidebar-a-color);
  cursor: var(--ve-sidebar-a-cursor);
}

.sidebar :deep(a:hover),
.sidebar :deep(a:focus) {
  border-radius: var(--ve-sidebar-a-hover-border-radius);
  color: var(--ve-sidebar-a-hover-color);
  background-color: var(--ve-sidebar-a-hover-background-color);
  transform: var(--ve-sidebar-a-hover-transform);
  transition: var(--ve-sidebar-a-hover-transition);
}

.navbar {
  display: var(--ve-navbar-display);
  place-content: var(--ve-navbar-place-content);
  place-items: var(--ve-navbar-place-items);
  position: var(--ve-navbar-position);
  top: var(--ve-navbar-top);
  right: var(--ve-navbar-right);
  bottom: var(--ve-navbar-bottom);
  left: var(--ve-navbar-left);
  z-index: var(--ve-navbar-z-index);
  height: var(--ve-navbar-height);
  background-color: var(--ve-navbar-background-color);
  color: var(--ve-navbar-color);
}

.navbar :deep(a),
.navbar :deep(button) {
  padding: var(--ve-navbar-a-padding);
  color: var(--ve-navbar-a-color);
  cursor: var(--ve-navbar-a-cursor);
}

.navbar :deep(ul) {
  display: var(--ve-navbar-ul-display);
  place-items: var(--ve-navbar-ul-place-items);
  margin: var(--ve-navbar-ul-margin);
  padding: var(--ve-navbar-ul-padding);
  list-style: var(--ve-navbar-ul-list-style);
}

.navbar ul a {
  display: var(--ve-navbar-ul-a-display);
}

.navbar ul a :not(i) {
  display: var(--ve-navbar-ul-a-not-i-display);
}

.navbar :deep(ul) a,
.navbar :deep(ul) button {
  flex-direction: var(--ve-navbar-ul-a-flex-direction);
}

.navbar ul a:hover,
.navbar ul a:focus,
.navbar ul button:hover,
.navbar ul button:focus {
  color: var(--ve-navbar-first-ul-a-hover-color) !important;
  transform: var(--ve-navbar-first-ul-a-hover-transform) !important;
}

.navbar :deep(ul):last-of-type a:hover,
.navbar :deep(ul):last-of-type a:focus,
.navbar :deep(ul):last-of-type button:hover,
.navbar :deep(ul):last-of-type button:focus {
  color: var(--ve-navbar-last-ul-a-hover-color);
}

.navbar :deep(button) {
  background-color: var(--ve-navbar-button-background-color);
  border: var(--ve-navbar-button-border);
  cursor: var(--ve-navbar-button-cursor);
}

.navbar :deep(i) {
  place-self: var(--ve-navbar-i-place-self);
}

.hide {
  display: var(--ve-hide-display) !important;
}

.show {
  display: var(--ve-show-display);
}

@media (min-width: 768px) {
  .navbar > button {
    display: var(--ve-navbar-button-display);
  }
}
</style>
