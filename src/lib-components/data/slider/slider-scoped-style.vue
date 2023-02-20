</style>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.slider {
  margin: var(--ve-slider-margin);
  border: var(--ve-slider-border);
  padding: var(--ve-slider-padding);
  width: var(--ve-slider-width);
  text-align: var(--ve-slider-text-align);
}

[id*="slide-"] {
  display: var(--ve-slide-display);
}

figcaption {
  padding: var(--ve-slider-figcaption-padding);
  width: var(--ve-slider-figcaption-width);
  height: var(--ve-slider-figcaption-height);
  font-weight: var(--ve-slider-figcaption-font-weight);
  color: var(--ve-slider-figcaption-color);
}

.controls {
  display: var(--ve-controls-display);
  gap: var(--ve-controls-gap);
  place-content: var(--ve-controls-place-content);
  opacity: var(--ve-controls-opacity);
}

.slider:hover .controls,
.slider:focus .controls {
  opacity: var(--ve-slider-controls-hover-opacity);
}

.controls > *:hover,
.controls > *:focus {
  color: var(--ve-controls-hover-color);
}

button {
  border: var(--ve-slider-button-border);
  font-size: var(--ve-slider-button-font-size);
  background: var(--ve-slider-button-background);
  color: var(--ve-slider-button-color);
}

.gallery {
  display: var(--ve-gallery-display);
  gap: var(--ve-gallery-gap);
  place-content: var(--ve-gallery-place-content);
  opacity: var(--ve-gallery-opacity);
  color: var(--ve-gallery-color);
}

.slider:hover .gallery,
.slider:focus .gallery {
  opacity: var(--ve-gallery-hover-opacity);
}

.gallery > *:hover,
.gallery > *:focus {
  color: var(--ve-gallery-child-hover-color);
  cursor: var(--ve-gallery-child-hover-cursor);
}

.show {
  display: var(--ve-slider-show-display);
}
</style>
