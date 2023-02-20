<template>
  <!-- SIDEBAR ELT (Anchor Only) -->
  <nav v-if="getNavClass() === 'sidebar'" 
    class="sidebar">

    <slot name="first"></slot>

    <a v-for="(item, index) in items"
      :key="index"
      :href="`#${item}`"
      :title="item">

      <slot name="items"
        :item="item"
        :index="index">
        {{ item }}
      </slot>
    </a>

    <slot name="last"></slot>

    <!-- Bottom Link (option) -->
    <a v-if="hasSlot('top')"
      href="#top"
      title="Top of the Page">
      <slot name="top"></slot>
    </a>
  </nav>
  
  <!-- NAVBAR ELT -->
  <nav v-else 
    class="navbar">

    <!-- Brand Logo (option) -->
    <a v-if="hasSlot('brand')"
      href="/"
      title="Home">
      <slot name="brand"></slot>
    </a>

    <ul id="nav"
      class="show">

      <li v-for="(item, index) in items"
        :key="index">
        <a :href="'/' + item"
          :title="item.charAt(0).toUpperCase() + item.slice(1)">

          <slot :name="item"
            :item="item"
            :index="index">
          </slot>

          <b>{{ item.charAt(0).toUpperCase() + item.slice(1) }}</b>
        </a>
      </li>
    </ul>

    <!-- Admin Part (option) -->
    <aside v-if="hasSlot('admin')"
      id="admin"
      class="hide">
      <slot name="admin"></slot>
    </aside>
    
    <!-- Responsive Toggle -->
    <button type="button"
      @click="toggleMenu()"
      title="Menu">
      <i class="fa-solid fa-bars"></i>
    </button>
  </nav>
</template>

<script>
export default {
  name: "NavElt",

  props: {
    class: {
      type: String,
      default: "navbar"
    },
    items: {
      type: Array
    }
  },

  methods: {
    getNavClass() {
      if (this.class === "sidebar") {
        return "sidebar";
      }
      return "navbar";
    },

    hasSlot(name) {
      return this.$slots[name] !== undefined;
    },

    toggleMenu() {
      const nav = document.getElementById("nav");
      const admin = document.getElementById("admin");

      nav.classList.toggle("show");
      nav.classList.toggle("hide");

      admin.classList.toggle("show");
      admin.classList.toggle("hide");
    }
  }
}
</script>

<style>
:root {
  --ve-navbar-height: 50px;
}

.sidebar {
  --ve-sidebar-display: flex;
  --ve-sidebar-flex-flow: column;
  --ve-sidebar-position: fixed;
  --ve-sidebar-top: calc(var(--navbar-height) + 10px);
  --ve-sidebar-left: 2px;
  --ve-sidebar-z-index: 10;
  --ve-sidebar-width: auto;
  --ve-sidebar-a-display: flex;
  --ve-sidebar-a-place-content: center;
  --ve-sidebar-a-place-items: center;
  --ve-sidebar-a-margin: 5px;
  --ve-sidebar-a-border-radius: 20px;
  --ve-sidebar-a-padding: 5px;
  --ve-sidebar-a-width: 100%;
  --ve-sidebar-a-background-color: var(--ani-white-dark);
  --ve-sidebar-a-color: var(--ani-blue-dark);
  --ve-sidebar-a-cursor: crosshair;
  --ve-sidebar-a-hover-border-radius: 10px;
  --ve-sidebar-a-hover-background-color: var(--ani-blue-dark);
  --ve-sidebar-a-hover-color: var(--ani-white-dark);
  --ve-sidebar-a-hover-transform: scale(1.1);
  --ve-sidebar-a-hover-transition: all 500ms;
}

.navbar {
  --ve-navbar-display: flex;
  --ve-navbar-place-content: space-between;
  --ve-navbar-place-items: center;
  --ve-navbar-position: fixed;
  --ve-navbar-top: 0;
  --ve-navbar-right: 0;
  --ve-navbar-bottom: unset;
  --ve-navbar-left: 0;
  --ve-navbar-z-index: 1000;
  --ve-navbar-background-color: var(--ani-blue-dark);
  --ve-navbar-color: var(--ani-white);
  --ve-navbar-a-padding: 10px;
  --ve-navbar-a-color: var(--ani-white);
  --ve-navbar-a-cursor: pointer;
  --ve-navbar-ul-display: flex;
  --ve-navbar-ul-place-items: center;
  --ve-navbar-ul-margin: 0;
  --ve-navbar-ul-padding: 0;
  --ve-navbar-ul-list-style: none;
  --ve-navbar-ul-a-display: flex;
  --ve-navbar-ul-a-not-i-display: none;
  --ve-navbar-ul-a-flex-direction: column;
  --ve-navbar-first-ul-a-hover-color: var(--ani-yellow);
  --ve-navbar-first-ul-a-hover-transform: scale(0.9);
  --ve-navbar-last-ul-a-hover-color: var(--ani-red);
  --ve-navbar-button-background-color: transparent;
  --ve-navbar-button-border: none;
  --ve-navbar-button-cursor: pointer;
  --ve-navbar-i-place-self: center;
}

.hide {
  --ve-hide-display: none;
}

.show {
  --ve-show-display: flex;
}

@media (min-width: 576px) {
  .navbar {
    --ve-navbar-place-content: space-around;
  }
}

@media (min-width: 768px) {
  :root {
    --ve-navbar-height: 80px;
  }

  .navbar {
    --ve-navbar-button-display: none;
    --ve-navbar-ul-a-not-i-display: flex;
  }

  .hide {
    --ve-hide-display: flex;
  }
}
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
