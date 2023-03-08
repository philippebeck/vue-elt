<template>
  <NavElt :items="[{ 'href': '/home', 'name': 'Home', 'type': 'solid', 'icon': 'home' }]">
    <template #brand>
      <i class="fa-brands fa-vuejs fa-3x"></i>
    </template>

    <template #admin>
      <ul>
        <li>
          <a href="https://github.com/sponsors/philippebeck"
            title="Sponsor">
            <i class="fa-regular fa-heart fa-lg"></i>
          </a>
        </li>
        <li>
          <a href="https://paypal.me/philippebeck"
            title="Donation">
            <i class="fa-brands fa-paypal fa-lg"></i>
          </a>
        </li>
      </ul>
    </template>
  </NavElt>

  <NavElt :items="['btn', 'field', 'media', 'list', 'slider', 'table', 'nav', 'card', 'foot']"
    class="sidebar">

    <template #top>
      <i class="fa-solid fa-long-arrow-up"></i>
    </template>
  </NavElt>

  <main id="top">
    <h1>Vue-Elt Lab</h1>

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

              <br>

              <BtnElt type="button"
              content="label-red"
              class="label-red"/>

            <BtnElt type="button"
              content="label-orange"
              class="label-orange"/>

            <BtnElt type="button"
              content="label-yellow"
              class="label-yellow"/>

            <BtnElt type="button"
              content="label-green"
              class="label-green"/>

            <BtnElt type="button"
              content="label-sky"
              class="label-sky"/>

            <BtnElt type="button"
              content="label-blue"
              class="label-blue"/>

            <BtnElt type="button"
              content="label-violet"
              class="label-violet"/>

            <BtnElt type="button"
              content="label-pink"
              class="label-pink"/>
          </template>
        </CardElt>
        
        <CardElt>
          <template #header>
            <h3 id="field">FieldElt</h3>
          </template>

          <template #body>
            <FieldElt id="text">
              <template #legend>
                Text
              </template>

              <template #label>
                Type Text
              </template>
            </FieldElt>

            <FieldElt id="number" 
              type="number">
              <template #legend>
                Number
              </template>

              <template #label>
                Type Numbers
              </template>
            </FieldElt>

            <FieldElt id="date" 
              type="date">
              <template #legend>
                Date
              </template>

              <template #label>
                Type or Choose a Date
              </template>
            </FieldElt>

            <FieldElt id="time" 
              type="time">
              <template #legend>
                Time
              </template>

              <template #label>
                Type a Time
              </template>
            </FieldElt>

            <FieldElt id="range" 
              type="range">
              <template #legend>
                Range
              </template>

              <template #label>
                Choose a Range
              </template>
            </FieldElt>

            <FieldElt id="color"
              type="color">
              <template #legend>
                Color
              </template>

              <template #label>
                Choose a Color
              </template>
            </FieldElt>

            <FieldElt id="checkbox" 
              type="checkbox">
              <template #legend>
                Checkbox
              </template>

              <template #label>
                Check the Box
              </template>
            </FieldElt>

            <FieldElt id="radio"
            type="radio">
              <template #legend>
                Radio
              </template>

              <template #label>
                Check a Radio
              </template>
            </FieldElt>

            <FieldElt id="select"
              type="select"
              :list="['Choice 1', 'Choice 2', 'Choice 3']"
              info="Choose an Option">
              <template #legend>
                Select
              </template>

              <template #label>
                Choose an Option
              </template>
            </FieldElt>

            <FieldElt id="textarea"
              type="textarea">
              <template #legend>
                Textarea
              </template>

              <template #label>
                Type Text
              </template>
            </FieldElt>
          </template>
        </CardElt>

        <CardElt>
          <template #header>
            <h3 id="media">MediaElt</h3>
          </template>

          <template #body>
            <MediaElt type="audio"
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3">
            </MediaElt>

            <MediaElt type="video"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
            </MediaElt>

            <MediaElt src="https://philippebeck.net/img/logo.svg">
            </MediaElt>
          </template>
        </CardElt>

      </template>
    </CardElt>

    <hr>

    <CardElt>
      <template #header>
        <h2>Data Components</h2>
      </template>
      
      <template #body>

        <CardElt>
          <template #header>
            <h3 id="list">ListElt</h3>
          </template>
          
          <template #body>
            <ListElt :items="['html', 'css', 'js', 'vue']">

            <template #item-1>
              HTML
              <i class="fa-brands fa-html5 orange"></i>
              Template
            </template>

            <template #item-2>
              + CSS
              <i class="fa-brands fa-css3 blue"></i>
              Style
            </template>

            <template #item-3>
              + JS
              <i class="fa-brands fa-square-js yellow"></i>
              Script
            </template>

            <template #item-4>
              <hr class="width-sm">
              Vue
              <i class="fa-brands fa-vuejs green"></i>
              Elt
            </template>
            </ListElt>
          </template>
        </CardElt>

        <CardElt>
          <template #header>
            <h3 id="slider">SliderElt</h3>
          </template>

          <template #body>
            <SliderElt :slides="['html5', 'css3', 'js', 'vuejs']">
              <template #slide="slotProps">
                <i :class="`fa-brands fa-${slotProps.slide.toLowerCase()} fa-10x blue`"></i>
              </template>

              <template #gallery="slotProps">
                <i :class="`fa-brands fa-${slotProps.slide.toLowerCase()}`"></i>
              </template>
            </SliderElt>
          </template>
        </CardElt>

        <CardElt>
          <template #header>
            <h3 id="table">TableElt</h3>
          </template>

          <template #body>
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

              <template #cell-State="slotProps">
                {{ slotProps.item.State }}
                <i class="fa-regular fa-thumbs-up"></i>
              </template>
            </TableElt>
          </template>
        </CardElt>
      </template>
    </CardElt>

    <hr>

    <CardElt>
      <template #header>
        <h2>Main Components</h2>
      </template>

      <template #body>
        <h3 id="nav">NavElt</h3>
        <p>The example is shown as current navigation</p>

        <h3 id="card">CardElt</h3>
        <p>The example is displayed in the main part</p>

        <h3 id="foot">FootElt</h3>
        <p>The example is shown as current footer</p>

      </template>
    </CardElt>
  </main>

  <FootElt>
    <template #foot1>
      <ListElt :items="['Asperger', 'Astronomy', 'Philippe Beck']">
        <template #item-1>
          <a href="https://asperger.philippebeck.net"
            title="Tests for Asperger's Syndrome">
            Asperger
          </a>
        </template>
        <template #item-2>
          <a href="https://astronomy.philippebeck.net"
            title="NASA & CDS APIs">
            Astronomy
          </a>
        </template>
        <template #item-3>
          <a href="https://philippebeck.net"
            title="Portal">
            Philippe Beck
          </a>
        </template>
      </ListElt>
    </template>

    <template #foot2>
      <ListElt :items="['Vue-Elt', 'Servidio', 'Animadio', 'NemJS', 'Vesan']">
        <template #item-1>
          <a href="https://www.npmjs.com/package/vue-elt"
            title="Vuejs SFC Library">
            Vue-Elt
          </a>
        </template>
        <template #item-2>
          <a href="https://www.npmjs.com/package/servidio"
            title="JavaScript Frontend Services">
            Servidio
          </a>
        </template>
        <template #item-3>
          <a href="https://www.npmjs.com/package/animadio"
            title="Animadio CSS Library">
            Animadio
          </a>
        </template>
        <template #item-4>
          <a href="https://www.npmjs.com/package/nemjs"
            title="JavaScript Backend Services">
            Nemjs
          </a>
        </template>
        <template #item-5>
          <a href="https://www.npmjs.com/package/vesan"
            title="CMS with Vue-Elt, Servidio, Animadio & NemJS">
            Vesan
          </a>
        </template>
      </ListElt>
    </template>

    <template #foot>
      <ListElt :items="['GitHub', 'LinkedIn', 'Medium', 'NPM', 'Twitter', 'CodePen']">
        <template #item-1>
          <a href="https://github.com/philippebeck"
            title="Philippe Beck @GitHub">
            <i class="fa-brands fa-github fa-lg fa-fw black"></i>
          </a>
        </template>
        <template #item-2>
          <a href="https://www.linkedin.com/in/philippebeck"
            title="Philippe Beck @LinkedIn">
            <i class="fa-brands fa-linkedin-in fa-lg fa-fw blue"></i>
          </a>
        </template>
        <template #item-3>
          <a href="https://medium.com/@philippebeck"
            title="Philippe Beck @Medium">
            <i class="fa-brands fa-medium fa-lg fa-fw green"></i>
          </a>
        </template>
        <template #item-4>
          <a href="https://www.npmjs.com/~philippebeck"
            title="Philippe Beck @NPM">
            <i class="fa-brands fa-npm fa-lg fa-fw red"></i>
          </a>
        </template>
        <template #item-5>
          <a href="https://twitter.com/ph_beck"
            title="Philippe Beck @Twitter">
            <i class="fa-brands fa-twitter fa-lg fa-fw sky"></i>
          </a>
        </template>
        <template #item-6>
          <a href="https://codepen.io/philippebeck"
            title="Philippe Beck @CodePen">
            <i class="fa-brands fa-codepen fa-lg fa-fw black"></i>
          </a>
        </template>
      </ListElt>
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
