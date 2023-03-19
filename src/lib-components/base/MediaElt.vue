<template>
  <figure :title="title">

    <!-- AUDIO ELT -->
    <audio v-if="type === 'audio'"
      controls
      :src="src"
      :loop="loop"
      :itemprop="itemprop">
      <slot name="audio"></slot>
    </audio>

    <!-- VIDEO ELT (multiple sources) -->
    <video v-else-if="type === 'video'"
      controls
      :src="src"
      :loop="loop"
      :height="height"
      :width="width"
      :itemprop="itemprop">

      <source v-for="(video, index) in medias"
        :key="index"
        :src="video.src"
        :type="video.type">
      <slot name="video"></slot>
    </video>

    <!-- QUOTE ELT -->
    <blockquote v-else-if="type === 'quote'"
      :cite="src"
      :itemprop="itemprop">
      {{ content }}
      <slot name="quote"></slot>
    </blockquote>

    <!-- IMAGE ELT (multiple sources) -->
    <picture v-else-if="type === 'picture'">

      <source v-for="(picture, index) in medias"
        :key="index"
        :type="picture.type"
        :srcset="picture.src"
        :media="picture.media">

      <img :src="src"
        :alt="alt"
        :itemprop="itemprop">
    </picture>

    <!-- IMAGE ELT (single source) -->
    <img v-else
      :src="src"
      :alt="alt"
      :height="height"
      :width="width"
      :itemprop="itemprop">

    <!-- Figcaption (option) -->
    <figcaption v-if="hasSlot('figcaption')">
      <slot name="figcaption"></slot>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "MediaElt",

  props: {
    type: {
      type: String,
      default: "img"
    },
    width: {
      type: Number,
      default: 300
    },
    loop: {
      type: Boolean,
      default: false
    },
    content: String,
    src: String,
    medias: Array,
    alt: String,
    title: String,
    height: Number,
    itemprop: String
  },
  
  methods: {
    hasSlot(name) {
      return this.$slots[name] !== undefined;
    }
  }
}
</script>

<style>
/********** MEDIA ELT **********/
figure {
  --ve-media-figure-border: 1px solid transparent;
  --ve-media-figure-border-radius: 20px;
  --ve-media-figure-padding: 10px;
  --ve-media-figure-background-color: transparent;
}

img {
  --ve-media-img-border: 2px solid var(--ani-slate);
  --ve-media-img-border-radius: 20px;
  --ve-media-img-padding: 0;
  --ve-media-img-max-width: 100%;
  --ve-media-img-height: auto;
  --ve-media-img-object-fit: contain;
  --ve-media-img-object-position: 50% 50%;
}

audio {
  --ve-media-audio-border: 2px solid var(--ani-slate);
  --ve-media-audio-border-radius: 10px;
}

video {
  --ve-media-video-border: 2px solid var(--ani-black);
  --ve-media-video-border-radius: 20px;
}

blockquote {
  --ve-media-blockquote-color: var(--ani-blue-dark);
  --ve-media-blockquote-font-size: 2rem;
  --ve-media-blockquote-margin: auto;
  --ve-media-blockquote-max-width: 700px;
}

figcaption {
  --ve-media-figcaption-display: flex;
  --ve-media-figcaption-flex-flow: column nowrap;
  --ve-media-figcaption-place-content: center center;
  --ve-media-figcaption-font-size: 1.5rem;
  --ve-media-figcaption-font-style: italic;
  --ve-media-figcaption-color: var(--ani-slate);
}

</style>

<style scoped>
figure {
  border: var(--ve-media-figure-border);
  border-radius: var(--ve-media-figure-border-radius);
  padding: var(--ve-media-figure-padding);
  background-color: var(--ve-media-figure-background-color);
}

img {
  border: var(--ve-media-img-border);
  border-radius: var(--ve-media-img-border-radius);
  padding: var(--ve-media-img-padding);
  max-width: var(--ve-media-img-max-width);
  height: var(--ve-media-img-height);
  object-fit: var(--ve-media-img-object-fit);
  object-position: var(--ve-media-img-object-position);
}

audio {
  border: var(--ve-media-audio-border);
  border-radius: var(--ve-media-audio-border-radius);
}

video {
  border: var(--ve-media-video-border);
  border-radius: var(--ve-media-video-border-radius);
}

blockquote {
  margin: var(--ve-media-blockquote-margin);
  max-width: var(--ve-media-blockquote-max-width);
  font-size: var(--ve-media-blockquote-font-size);
  color: var(--ve-media-blockquote-color);
}

figcaption {
  display: var(--ve-media-figcaption-display);
  flex-flow: var(--ve-media-figcaption-flex-flow);
  place-content: var(--ve-media-figcaption-place-content);
  font-size: var(--ve-media-figcaption-font-size);
  font-style: var(--ve-media-figcaption-font-style);
  color: var(--ve-media-figcaption-color);
}
</style>
