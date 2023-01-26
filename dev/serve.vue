<template>
  <NavElt :items="['home']">
    <template #brand>
      <i class="fa-brands fa-vuejs fa-3x"></i>
    </template>

    <template #home>
      <i class="fa-solid fa-home fa-fw"></i>
    </template>

    <template #admin>
      <ul>
        <li>
          <a href="https://paypal.me/philippebeck"
            title="Donation">
            <i class="fa-brands fa-paypal fa-lg"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/sponsors/philippebeck"
            title="Sponsor">
            <i class="fa-regular fa-heart fa-lg"></i>
          </a>
        </li>
      </ul>
    </template>
  </NavElt>

  <main>
    <h1>Vue-Elt</h1>

    <CardElt>
      <template #header>
        <h2>Base Components</h2>
      </template>

      <template #body>
        <CardElt>
          <template #header>
            <h3 id="btn">BtnElt</h3>
          </template>

          <template #body>
            <BtnElt type="button"
              content="btn-red"
              class="btn-red"/>

            <BtnElt type="button"
              content="btn-orange"
              class="btn-orange"/>

            <BtnElt type="button"
              content="btn-yellow"
              class="btn-yellow"/>

            <BtnElt type="button"
              content="btn-green"
              class="btn-green"/>

            <BtnElt type="button"
              content="btn-sky"
              class="btn-sky"/>

            <BtnElt type="button"
              content="btn-blue"
              class="btn-blue"/>

            <BtnElt type="button"
              content="btn-violet"
              class="btn-violet"/>

            <BtnElt type="button"
              content="btn-pink"
              class="btn-pink"/>
          </template>
        </CardElt>
        
        <h3>FieldElt</h3>

        <FieldElt>

        </FieldElt>

        <h3>MediaElt</h3>

        <MediaElt>

        </MediaElt>

      </template>
    </CardElt>

    <CardElt>
      <template #header>
        <h2>Data Components</h2>
      </template>
      
      <template #body>
        <h3>ListElt</h3>

        <ListElt :items="['HTML', 'CSS', 'JS']">

        </ListElt>


        <h3>SliderElt</h3>

        <SliderElt :slides="['html5', 'css3', 'js', 'vuejs']">
          <template #slide="slotProps">
            <i :class="`fa-brands fa-${slotProps.slide.toLowerCase()} fa-10x blue`"></i>
          </template>

          <template #gallery="slotProps">
            <i :class="`fa-brands fa-${slotProps.slide.toLowerCase()}`"></i>
          </template>
        </SliderElt>

        <h3>TableElt</h3>

        <TableElt :items="[
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
        </TableElt>
      </template>
    </CardElt>

    <CardElt>
      <template #header>
        <h2>Main Components</h2>
      </template>

      <template #body>
        <h3>NavElt</h3>
        <p>The example is shown as current navigation</p>

        <h3>CardElt</h3>
        <p>The example is displayed in the main part</p>

        <h3>FootElt</h3>
        <p>The example is shown as current footer</p>

      </template>
    </CardElt>
  </main>

  <FootElt>
    <template #foot1>
      <ul>
        <li>
          <a href="https://asperger.philippebeck.net"
            title="Tests for Asperger's Syndrome">
            Asperger
          </a>
        </li>
        <li>
          <a href="https://astronomy.philippebeck.net"
            title="NASA & CDS APIs">
            Astronomy
          </a>
        </li>
      </ul>
    </template>

    <template #foot2>
      <ul>
        <li>
          <a href="https://www.npmjs.com/package/animadio"
            title="Animadio CSS Library">
            Animadio
          </a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/nemjs"
            title="JavaScript Backend Services">
            Nemjs
          </a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/servidio"
            title="JavaScript Frontend Services">
            Servidio
          </a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/vesan"
            title="CMS with Vue-Elt, Servidio, Animadio & NemJS">
            Vesan
          </a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/servidio"
            title="Vuejs SFC Library">
            Vue-Elt
          </a>
        </li>
      </ul>
    </template>

    <template #foot3>
      <ul>
        <li>
          <a href="https://links2code.philippebeck.net"
            title="Links For Coding">
            Links2Code
          </a>
        </li>
        <li>
          <a href="https://philippebeck.net"
            title="Portal">
            Philippe Beck
          </a>
        </li>
      </ul>
    </template>

    <template #foot>
      <ul>
        <li>
          <a href="https://github.com/philippebeck"
            title="Philippe Beck @GitHub">
            <i class="fa-brands fa-github fa-2x fa-fw black"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ph_beck"
            title="Philippe Beck @Twitter">
            <i class="fa-brands fa-twitter fa-2x fa-fw sky"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/philippebeck"
            title="Philippe Beck @LinkedIn">
            <i class="fa-brands fa-linkedin-in fa-2x fa-fw blue"></i>
          </a>
        </li>
        <li>
          <a href="https://codepen.io/philippebeck"
            title="Philippe Beck @CodePen">
            <i class="fa-brands fa-codepen fa-2x fa-fw black"></i>
          </a>
        </li>
      </ul>
    </template>
  </FootElt>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Serve"
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Geo&family=Rozha+One&family=Syne+Mono&display=swap');
@import url("../node_modules/@fortawesome/fontawesome-free/css/all.min.css");
@import url("../node_modules/animadio/dist/animadio.min.css");

:root {
  --sans-serif: 'Geo', sans-serif;
  --serif: 'Rozha One', serif;
  --monospace: 'Syne Mono', monospace;
}
</style>
