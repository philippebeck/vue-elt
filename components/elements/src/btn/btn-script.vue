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
      /**
       * Determines the type of button based on the 'type' property of the current instance.
       *
       * @return {string} Returns 'button' if the 'type' property is set to 'button', 'submit' or 'reset', otherwise returns 'link'.
       */
      getBtnType() {
        const validTypes = ["button", "submit", "reset"];

        return validTypes.includes(this.type) ? "button" : "link";
      }
    }
  }
</script>

<style>