<template>
  <main id="app">
    <TableElt
      title="Vue-Elt Components"
      :items="[
        {'SFC': 'FieldElt', 'Cat': 'Base', 'V': '0.1', 'State': 'Working'},
        {'SFC': 'BtnElt', 'Cat': 'Base', 'V': '0.3', 'State': 'Working'},
        {'SFC': 'MediaElt', 'Cat': 'Base', 'V': '0.4', 'State': 'Working'},
        {'SFC': 'ListElt', 'Cat': 'Data', 'V': '0.1', 'State': 'Working'},
        {'SFC': 'SlideElt', 'Cat': 'Data', 'V': '0.4', 'State': 'Working'},
        {'SFC': 'TableElt', 'Cat': 'Data', 'V': '0.2', 'State': 'Working'},
        {'SFC': 'CardElt', 'Cat': 'Main', 'V': '0.4', 'State': 'Working'},
        {'SFC': 'FootElt', 'Cat': 'Main', 'V': '0.1', 'State': 'Working'},
        {'SFC': 'NavElt', 'Cat': 'Main', 'V': '0.4', 'State': 'Working'}
      ]">
      <template #title></template>
    </TableElt>
  </main>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Serve",
    data() {
        return {
            name: ""
        };
    }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>