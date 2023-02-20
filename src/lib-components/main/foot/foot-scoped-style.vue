</style>

<style scoped>
footer {
  text-align: var(--ve-footer-text-align);
}

h3,
:deep(ul) {
  margin: var(--ve-footer-child-margin);
  padding: var(--ve-footer-child-padding);
}

:deep(li) {
  list-style: var(--ve-footer-li-list-style);
}

:deep(a) {
  text-decoration: var(--ve-footer-a-text-decoration);
}

/********************* MAIN PART *********************/

footer > ul { 
  display: var(--ve-footer-ul-display);
  flex-direction: var(--ve-footer-ul-flex-direction);
  place-items: var(--ve-footer-ul-place-items);
  gap: var(--ve-footer-ul-gap);
  padding: var(--ve-footer-ul-padding);
  background-color: var(--ve-footer-ul-background-color);
}

h3 {
  margin-bottom: var(--ve-footer-h3-margin-bottom);
  font-size: var(--ve-footer-h3-font-size);
  font-family: var(--ve-footer-h3-font-family);
  color: var(--ve-footer-h3-color);
}

section :deep(a) {
  color: var(--ve-footer-section-a-color);
}

section :deep(a):hover,
section :deep(a):focus {
  color: var(--ve-footer-section-a-hover-color);
}

/********************* SECOND PART *********************/

aside :deep(ul) {
  display: var(--ve-aside-ul-display);
  flex-direction: var(--ve-aside-ul-flex-direction);
  place-content: var(--ve-aside-ul-place-content);
  gap: var(--ve-aside-ul-gap);
  padding: var(--ve-aside-ul-padding);
  background-color: var(--ve-aside-ul-background-color);
}

aside :deep(a) {
  color: var(--ve-aside-a-color);
}

aside :deep(i):hover,
aside :deep(i):focus {
  transform: var(--ve-aside-a-hover-transform);
  transition: var(--ve-aside-a-hover-transition);
}

/********************* RESPONSIVE *********************/

@media (min-width: 576px) {
  footer > ul {
    place-content: var(--ve-footer-ul-place-content);
  }
}
</style>
