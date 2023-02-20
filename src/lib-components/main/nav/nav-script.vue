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