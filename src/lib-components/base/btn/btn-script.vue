<script>
  export default {
    name: "BtnElt",

    props: {
      type: {
        type: String,
        default: "link"
      },
      value: String,
      href: String,
      content: String,
      title: String
    },

    methods: {
      getBtnType() {
        if (
          this.type === "button" || 
          this.type === "submit" || 
          this.type === "reset"
          ) {
          return "button";
        }
        return "link";
      }
    }
  }
</script>

<style>