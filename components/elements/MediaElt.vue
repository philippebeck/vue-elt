<template>
  <figure>

    <audio v-if="type === 'audio'"
      controls
      :src="src"
      :loop="loop"
      :title="title"
      :itemprop="itemprop">
      <slot name="audio"></slot>
    </audio>

    <video v-else-if="type === 'video'"
      controls
      :src="src"
      :loop="loop"
      :height="height"
      :width="width"
      :title="title"
      :itemprop="itemprop">

      <source v-for="(video, index) in medias"
        :key="index"
        :src="video.src"
        :type="video.type">
      <slot name="video"></slot>
    </video>

    <blockquote v-else-if="type === 'quote'"
      :cite="src"
      :title="title"
      :itemprop="itemprop">
      {{ content }}
      <slot name="quote"></slot>
    </blockquote>

    <picture v-else-if="type === 'picture'">

      <source v-for="(picture, index) in medias"
        :key="index"
        :type="picture.type"
        :srcset="picture.src"
        :media="picture.media">

      <img :src="src"
        :alt="alt"
        :title="title"
        :itemprop="itemprop">
    </picture>

    <img v-else
      :src="src"
      :alt="alt"
      :height="height"
      :width="width"
      :title="title"
      :itemprop="itemprop">

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
    /**
     * ? HAS SLOT
     * Determines if the specified slot name is available in the component's slots.
     *
     * @param {string} name - The name of the slot to check for.
     * @return {boolean} Returns true if the component has the specified slot, false otherwise.
     */
    hasSlot(name) {
      return Object.prototype.hasOwnProperty.call(this.$slots, name);
    },
  }
}
</script>

<style>
/********** MEDIA ELT **********/
figure {
  --ve-media-figure-display: flex;
  --ve-media-figure-flex-flow: column;
  --ve-media-figure-place-content: center;
  --ve-media-figure-place-items: center;
  --ve-media-figure-border: 1px solid transparent;
  --ve-media-figure-border-radius: 20px;
  --ve-media-figure-padding: 10px;
  --ve-media-figure-background-color: transparent;
}

img {
  --ve-media-img-border: 2px solid transparent;
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
  --ve-media-figcaption-width: 300px;
  --ve-media-figcaption-font-size: 1.6rem;
  --ve-media-figcaption-font-style: normal;
  --ve-media-figcaption-color: var(--ani-slate);
}
</style>

<style scoped>
figure {
  display: var(--ve-media-figure-display);
  flex-flow: var(--ve-media-figure-flex-flow);
  place-content: var(--ve-media-figure-place-content);
  place-items: var(--ve-media-figure-place-items);
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
  width: var(--ve-media-figcaption-width);
  font-size: var(--ve-media-figcaption-font-size);
  font-style: var(--ve-media-figcaption-font-style);
  color: var(--ve-media-figcaption-color);
}
</style>
