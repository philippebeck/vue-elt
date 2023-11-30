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
    /**
     * Returns a string representing the navigation class based on the value of 'class'.
     *
     * @return {string} Either 'sidebar' or 'navbar'.
     */
    getNavClass() {
      return this.class === "sidebar" ? "sidebar" : "navbar";
    },

    /**
     * Checks if a slot with the given name exists.
     *
     * @param {string} name - The name of the slot to check.
     * @return {boolean} - True if a slot with the given name exists, false otherwise.
     */
    hasSlot(name) {
      return Object.prototype.hasOwnProperty.call(this.$slots, name);
    },

    /**
     * Toggles the visibility of the side element by toggling its show/hide classes.
     *
     * @return {void} This function does not return anything.
     */
    toggleSide() {
      const side = document.getElementById("side");
      side.classList.replace("show", "hide") || side.classList.replace("hide", "show");
    }
  }
}
</script>

<style>