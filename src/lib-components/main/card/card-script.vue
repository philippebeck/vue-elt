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
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
}
</script>

<style>