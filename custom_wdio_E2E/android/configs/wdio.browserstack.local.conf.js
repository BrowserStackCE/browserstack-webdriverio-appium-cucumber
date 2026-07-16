const baseConfig = require('./wdio.base.conf');

exports.config = {
  ...baseConfig.config,
  services: [
    ['browserstack',
      {
        browserstackLocal: true, 
        buildIdentifier: '#${BUILD_NUMBER}', 
        opts: { 
          forcelocal: true, 
          localIdentifier: 'webdriverio-browserstack-repo4' 
        }
      }
    ],
  ],


  commonCapabilities: {
    platformName: 'android',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'bs://<app_id>',
    'appium:autoGrantPermissions': true,
    'bstack:options': {
      realMobile: true,
      interactiveDebugging: true,
      projectName: 'WDIO App Automation Project',
      buildName: 'Android Local Build',
      sessionName: 'Search Wikipedia - Local Test Android'
    }
  },

  capabilities: [
    {
      'bstack:options': {
        deviceName: 'Google Pixel 6',
        osVersion: '12'
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
