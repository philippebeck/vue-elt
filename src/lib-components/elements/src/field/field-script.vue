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
    content: [
      String,
      Number
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
    /**
     * Checks if a slot with the given name exists.
     *
     * @param {string} name - The name of the slot to check.
     * @return {boolean} - True if a slot with the given name exists, false otherwise.
     */
    hasSlot(name) {
      return Object.prototype.hasOwnProperty.call(this.$slots, name);
    },

    /**
     * Handles input events and emits an update with the new value.
     *
     * @param {Event} event - The input event triggered by the user.
     * @return {void} This function does not return a value.
     */
    onInput(event) {
      this.$emit("update:value", event.target.value)
    },

    /**
     * Returns the type of the input field based on the 'type' property.
     *
     * @return {string} The type of the input field: 'number', 'special', 'list', 'area', or 'text'.
     */
    getFieldType() {
      const fieldTypes = {
        "number": ["number", "date", "time", "range"],
        "special": ["checkbox", "radio", "color"],
        "list": ["option", "select"],
        "area": ["textarea"]
      }

      return Object.keys(fieldTypes).find(key => fieldTypes[key].includes(this.type)) || "text";
    }
  }
}
</script>

<style>