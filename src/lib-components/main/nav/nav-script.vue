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

    toggleSide() {
      const side = document.getElementById("side");

      side.classList.toggle("show");
      side.classList.toggle("hide");
    }
  }
}
</script>

<style>