exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
  seleniumAddress: 'HTTP://0.0.0.0:4444/wd/hub/',
  baseUrl: 'http://192.168.99.100:8080/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
