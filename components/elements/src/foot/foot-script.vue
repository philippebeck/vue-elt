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
    /**
     * Checks if a slot with the given name exists.
     *
     * @param {string} name - The name of the slot to check.
     * @return {boolean} - True if a slot with the given name exists, false otherwise.
     */
    hasSlot(name) {
      return Object.prototype.hasOwnProperty.call(this.$slots, name);
    },
  }
}
</script>

<style>