const components = {};
const requireComponent = require.context(
  '.', // read from current directory
  false, // don't look in subdirectories
  /[A-Z]\w+\.(vue)$/, // only look for Vue files
  // EXPERIMENTAL: /[A-Z]\w+\.(vue|js)$/, // only look for Vue or JS files
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, ''); // remove file extension and set file name as component name

  components[componentName] = componentConfig.default || componentConfig;
});

export default components;
