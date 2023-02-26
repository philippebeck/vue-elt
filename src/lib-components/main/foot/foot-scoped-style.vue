</style>

<style scoped>
footer {
  text-align: var(--ve-foot-text-align);
}

h3,
h4,
:deep(ul) {
  margin: var(--ve-foot-child-margin);
  padding: var(--ve-foot-child-padding);
}

:deep(li) {
  list-style: var(--ve-foot-li-list-style);
}

:deep(a) {
  text-decoration: var(--ve-foot-a-text-decoration);
}

/********************* MAIN PART *********************/

footer > ul { 
  display: var(--ve-foot-ul-display);
  flex-flow: var(--ve-foot-ul-flex-flow);
  gap: var(--ve-foot-ul-gap);
  place-content: var(--ve-foot-ul-place-content);
  place-items: var(--ve-foot-ul-place-items);
  padding: var(--ve-foot-ul-padding);
  background-color: var(--ve-foot-ul-background-color);
}

h3,
h4 {
  margin-bottom: var(--ve-foot-title-margin-bottom);
  font-size: var(--ve-foot-title-font-size);
  font-family: var(--ve-foot-title-font-family);
  color: var(--ve-foot-title-color);
}

section :deep(a) {
  color: var(--ve-foot-section-a-color);
}

section :deep(a):hover,
section :deep(a):focus {
  color: var(--ve-foot-section-a-hover-color);
}

/********************* SECOND PART *********************/

aside :deep(ul) {
  display: var(--ve-foot-aside-ul-display);
  flex-flow: var(--ve-foot-aside-ul-flex-flow);
  gap: var(--ve-foot-aside-ul-gap);
  place-content: var(--ve-foot-aside-ul-place-content);
  place-items: var(--ve-foot-aside-ul-place-items);
  padding: var(--ve-foot-aside-ul-padding);
  background-color: var(--ve-foot-aside-ul-background-color);
}

aside :deep(a) {
  color: var(--ve-foot-aside-a-color);
}

aside :deep(i):hover,
aside :deep(i):focus {
  transform: var(--ve-foot-aside-i-hover-transform);
  transition: var(--ve-foot-aside-i-hover-transition);
}
</style>
