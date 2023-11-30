<script>
export default {
  name: "CardElt",
  props: {
    isArticle: {
      type: Boolean,
      default: false
    },
    id: String
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
    }
  }
}
</script>

<style>