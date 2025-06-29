const baseConfig = require('./wdio.base.conf');

exports.config = {
  ...baseConfig.config,

  services: [
    [
      'browserstack',
      { buildIdentifier: '#${BUILD_NUMBER}' },
    ],
  ],

  maxInstances: 3,

  commonCapabilities: {
    platformName: 'android',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'bs://<app_id>',
    'appium:autoGrantPermissions': true,
    'bstack:options': {
      projectName: 'WDIO App Automation Project',
      sessionName: 'Sample App - Public Test',
      buildName: 'Android Parallel Build',
      realMobile: true,
      debug: true,
      interactiveDebugging: true,
      local: false
    }
  },

  capabilities: [
    {
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22',
        osVersion: '12.0',
        sessionName: 'Parallel - S22'
      }
    },
    {
      'bstack:options': {
        deviceName: 'Google Pixel 6',
        osVersion: '12.0',
        sessionName: 'Parallel - Pixel 6'
      }
    },
    {
      'bstack:options': {
        deviceName: 'OnePlus 9',
        osVersion: '11.0',
        sessionName: 'Parallel - OnePlus 9'
      }
    }
  ],


};

// Merge commonCapabilities into each capability
exports.config.capabilities.forEach(cap => {
  for (const key in exports.config.commonCapabilities) {
    if (typeof cap[key] === 'object') {
      cap[key] = { ...exports.config.commonCapabilities[key], ...cap[key] };
    } else {
      cap[key] = exports.config.commonCapabilities[key];
    }
  }
});
