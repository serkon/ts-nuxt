import Vue from 'vue';

// get options passed from module.js
const options = JSON.parse(`<%= JSON.stringify(options) %>`);

import components from '../components-js/exporter';

// loop through components and register them
for (const name in components) {
  Vue.component(name, {
    // extend the original component
    extends: components[name],
    // add a _customCounterOptions prop to gain access to the options in the component
    props: {
      timus: {
        type: Object,
        default: () => ({ ...options }),
      },
    },
  });
}
