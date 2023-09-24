const generate = require('videojs-generate-rollup-config');
const nodeBuiltinsPlugin = require('@gkatsev/rollup-plugin-node-builtins');
const nodeGlobalsPlugin = require('rollup-plugin-node-globals');

// see https://github.com/videojs/videojs-generate-rollup-config
// for options
const options = {
  input: 'src/js/videojs-dash.js',
  distName: 'videojs-dash',
  exportName: 'videojsDash',
  // stream and string_decoder are used by some modules
  globals(defaults) {
    Object.keys(defaults).forEach(function(type) {
      defaults[type].dashjs = 'dashjs';
    });

    return defaults;
  }
};
const config = generate(options);

// Add additonal builds/customization here!

// export the builds to rollup
export default Object.values(config.builds);
