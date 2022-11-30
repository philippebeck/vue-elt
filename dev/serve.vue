<template>
  <main id="app">
    <FieldElt
      id="name"
      v-model:value="name"
      info="Type your Name">
        <template #legend>
          Welcome {{ name }}!
        </template>
        <template #label>
          Welcome {{ name }}!
        </template>
      </FieldElt>

    <ListElt 
      :items="[
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'aqua',
        'cyan',
        'sky',
        'blue',
        'indigo',
        'magenta',
        'pink'
      ]">
      <template #items="slotProps">
        <BtnElt
          :class="slotProps.item"
          :content="slotProps.item"
          href="https://github.com/philippebeck/vue-elt"/>
        <BtnElt
          :class="slotProps.item"
          :content="slotProps.item"
          type="button"/>
      </template>
    </ListElt>

    <TableElt
      title="Releases"
      :items="[
        {'SFC': 'FieldElt', 'Cat': 'Base', 'V': '0.1', 'State': 'Working'},
        {'SFC': 'FootElt', 'Cat': 'Main', 'V': '0.1', 'State': 'Working'},
        {'SFC': 'ListElt', 'Cat': 'Data', 'V': '0.1', 'State': 'Working'},
        {'SFC': 'TableElt', 'Cat': 'Data', 'V': '0.2', 'State': 'Working'},
        {'SFC': 'BtnElt', 'Cat': 'Base', 'V': '0.3', 'State': 'Building'},
        {'SFC': 'NavElt', 'Cat': 'Main', 'V': '0.4', 'State': 'Building'},
        {'SFC': 'CardElt', 'Cat': 'Main', 'V': '0.5', 'State': 'Building'},
        {'SFC': 'ImgElt', 'Cat': 'Base', 'V': '0.6', 'State': 'Coming'},
        {'SFC': 'SlideElt', 'Cat': 'Data', 'V': '0.7', 'State': 'Coming'}
      ]">
      <template #title></template>
    </TableElt>

    <FootElt class="bg-blue">
      <template #foot1>
        <ul>
          <li>
            <a
              href="https://asperger.philippebeck.net"
              title="Tests for Asperger Syndrome">
              Asperger
            </a>
          </li>
          <li>
            <a 
              href="https://astronomy.philippebeck.net"
              title="Astronomy Medias">
              Astronomy
            </a>
          </li>
          <li>
            <a 
              href="https://tools2code.philippebeck.net"
              title="Tools for Coding">
              Tools2Code
            </a>
          </li>
          <li>
            <a 
              href="https://philippebeck.net"
              title="Philippe Beck">
              Portal
            </a>
          </li>
        </ul>
      </template>

      <template #foot2>
        <ul>
          <li>
            <a 
              href="https://www.freecodecamp.org"
              title="Learn to Code">
              Free Code Camp
            </a>
          </li>
          <li>
            <a 
              href="https://developer.mozilla.org"
              title="Mozilla Developer Network">
              MDN
            </a>
          </li>
          <li>
            <a 
              href="https://openclassrooms.com"
              title="Training Programs">
              OpenClassrooms
            </a>
          </li>
          <li>
            <a 
              href="https://vuejs.org"
              title="The Progressive JavaScript Framework">
              Vue
            </a>
          </li>
        </ul>
      </template>

      <template #foot3>
        <ul>
          <li>
            <a
              href="https://www.npmjs.com/package/animadio"
              title="Animadio CSS Framework">
              Animadio
            </a>
          </li>
          <li>
            <a
              href="https://packagist.org/packages/philippebeck/pam"
              title="PHP Adaptive Microframework">
              Pam
            </a>
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/servidio"
              title="JavaScript Frontend Services">
              Servidio
            </a>
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/nemjs"
              title="JavaScript Backend Services">
              Nemjs
            </a>
          </li>
        </ul>
      </template>

      <template #foot>
        <ul>
          <li>
            <a 
              class="gh gray-onto"
              href="https://github.com/philippebeck"
              title="Philippe Beck @GitHub">
              GitHub
            </a>
          </li>
          <li>
            <a 
              class="tw blue-onto"
              href="https://twitter.com/ph_beck"
              title="Philippe Beck @Twitter">
              Twitter
            </a>
          </li>
          <li>
            <a 
              class="in blue-onto"
              href="https://www.linkedin.com/in/philippebeck"
              title="Philippe Beck @LinkedIn">
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              class="black gray-onto"
              href="https://codepen.io/philippebeck"
              title="Philippe Beck @CodePen">
              CodePen
            </a>
          </li>
        </ul>
      </template>
    </FootElt>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import BtnElt from "../src/lib-components/BtnElt.vue";

export default defineComponent({
    name: "Serve",
    data() {
        return {
            name: ""
        };
    },
    components: { BtnElt }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>