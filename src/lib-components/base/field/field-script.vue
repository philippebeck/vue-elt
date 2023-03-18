<script>
export default {
  name: "FieldElt",

  props: {
    model: {
      prop: "value",
      event: "update"
    },
    type: {
      type: String,
      default: "text"
    },
    value: [
      String, 
      Number, 
      Array
    ],
    id: String,
    name: String,
    list: Array,
    info: String,
    min: {
      type: Number,
      default: 2
    },
    max: {
      type: Number,
      default: 50
    },
    cols: {
      type: Number,
      default: 20
    },
    rows: {
      type: Number,
      default: 5
    },
    itemprop: String,
    required: {
      type: String,
      default: "required"
    }
  },

  methods: {
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    },

    onInput(event) {
      this.$emit("update:value", event.target.value)
    },

    getFieldType() {
      let fieldType = "";
      switch (this.type) {
        case "number":
        case "date":
        case "time":
        case "range":
          fieldType = "number";
          break;
        case "checkbox":
        case "radio":
        case "color":
          fieldType = "special";
          break;
        case "option":
        case "select":
          fieldType = "list";
          break;
        case "textarea":
          fieldType = "area";
          break;
        default:
          fieldType = "text";
      }
      return fieldType;
    }
  }
}
</script>

<style>