<script>
export default {
  name: "MediaElt",

  props: {
    type: {
      type: String,
      default: "img"
    },
    src: {
      type: String,
      required: true
    },
    medias: Array,
    alt: String,
    title: String,
    height: Number,
    width: {
      type: Number,
      default: 300
    },
    loop: {
      type: Boolean,
      default: false
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