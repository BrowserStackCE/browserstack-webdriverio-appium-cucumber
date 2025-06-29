const baseConfig = require('./wdio.base.conf');

exports.config = {
  ...baseConfig.config,
  services: [
    ['browserstack',
      {
        browserstackLocal: true, 
        buildIdentifier: '#${BUILD_NUMBER}', 
        opts: { 
          forcelocal: false, 
          localIdentifier: 'webdriverio-browserstack-repo4' 
        }
      }
    ],
  ],


  commonCapabilities: {
    platformName: 'ios',
    'appium:app': 'bs://<app_id>',
    'bstack:options': {
      interactiveDebugging: true,
      projectName: 'WDIO App Automation Project',
      sessionName: 'Sample App - Public Test',
      buildName: 'iOS Local Build',
      sessionName: 'Search Wikipedia - Local Test iOS'
    }
  },

  capabilities: [
    {
      'bstack:options': {
        deviceName: 'iPhone 15',
        osVersion: '17'
      }
    }
  ]
};

// Apply common caps
exports.config.capabilities.forEach(cap => {
  for (const key in exports.config.commonCapabilities) {
    if (typeof cap[key] === 'object') {
      cap[key] = { ...exports.config.commonCapabilities[key], ...cap[key] };
    } else {
      cap[key] = exports.config.commonCapabilities[key];
    }
  }
});
