<template>
  <figure :title="title">

    <!-- AUDIO ELT -->
    <audio v-if="type === 'audio'"
      controls
      :src="src"
      :loop="loop">
      <slot name="audio"></slot>
    </audio>

    <!-- VIDEO ELT (multiple sources) -->
    <video v-else-if="type === 'video'"
      controls
      :src="src"
      :loop="loop"
      :height="height"
      :width="width">

      <source v-for="(video, index) in medias"
        :key="index"
        :src="video.src"
        :type="video.type">
      <slot name="video"></slot>
    </video>

    <!-- IMAGE ELT (multiple sources) -->
    <picture v-else-if="type === 'picture'">

      <source v-for="(picture, index) in medias"
        :key="index"
        :srcset="picture.src"
        :media="picture.media"
        :type="picture.type">

      <img :src="src"
        :alt="alt">
    </picture>

    <!-- IMAGE ELT (single source) -->
    <img v-else
      :src="src"
      :alt="alt">

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
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    title: {
      type: String
    },
    type: {
      type: String,
      default: ""
    },
    medias: {
      type: Array
    },
    loop: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number
    },
    width: {
      type: Number,
      default: 300
    }
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
  --ve-figure-border: 1px solid transparent;
  --ve-figure-border-radius: 20px;
  --ve-figure-padding: 0;
  --ve-figure-background-color: transparent;
}

img {
  --ve-img-border: 1px solid var(--ani-blue);
  --ve-img-border-radius: 20px;
  --ve-img-padding: 1px;
  --ve-img-max-width: 100%;
  --ve-img-height: auto;
  --ve-img-object-fit: contain;
  --ve-img-object-position: 50% 50%;
}

audio {
  --ve-audio-border: 2px solid var(--ani-gray);
  --ve-audio-border-radius: 10px;
}

video {
  --ve-video-border: 2px solid var(--ani-black);
  --ve-video-border-radius: 20px;
}

figcaption {
  --ve-figcaption-display: flex;
  --ve-figcaption-flex-flow: column nowrap;
  --ve-figcaption-place-content: center center;
  --ve-figcaption-color: var(--ani-blue);
}

</style>

<style scoped>
figure {
  border: var(--ve-figure-border);
  border-radius: var(--ve-figure-border-radius);
  padding: var(--ve-figure-padding);
  background-color: var(--ve-figure-background-color);
}

img {
  border: var(--ve-img-border);
  border-radius: var(--ve-img-border-radius);
  padding: var(--ve-img-padding);
  max-width: var(--ve-img-max-width);
  height: var(--ve-img-height);
  object-fit: var(--ve-img-object-fit);
  object-position: var(--ve-img-object-position);
}

audio {
  border: var(--ve-audio-border);
  border-radius: var(--ve-audio-border-radius);
}

video {
  border: var(--ve-video-border);
  border-radius: var(--ve-video-border-radius);
}

figcaption {
  display: var(--ve-figcaption-display);
  flex-flow: var(--ve-figcaption-flex-flow);
  place-content: var(--ve-figcaption-place-content);
  color: var(--ve-figcaption-color);
}
</style>
