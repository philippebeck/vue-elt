<script>
export default {
  name: "MediaElt",

  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    title: {
      type: String
    },
    type: {
      type: String,
      default: ""
    },
    medias: {
      type: Array
    },
    loop: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number
    },
    width: {
      type: Number,
      default: 300
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