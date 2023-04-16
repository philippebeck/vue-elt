<script>
export default {
  name: "FootElt",
  props: {
    title1: {
      type: String,
      default: ""
    },
    title2: {
      type: String,
      default: ""
    },
    title3: {
      type: String,
      default: ""
    }
  },
  methods: {
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
}
</script>

<style>