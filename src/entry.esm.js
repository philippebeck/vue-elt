import * as components from '@/lib-components/index';

const install = function installVueElt(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

export default install;

export * from '@/lib-components/index';
