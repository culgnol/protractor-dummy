// conf.js
exports.config = {
  framework: 'jasmine',

  specs: ['spec.js'],

  capabilities: { 'browserName': 'chrome' },

  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true
  }
};
