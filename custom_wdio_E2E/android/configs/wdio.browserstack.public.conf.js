const baseConfig = require('./wdio.base.conf');

exports.config = {
  ...baseConfig.config,

    services: [
        [
        'browserstack',
        { buildIdentifier: '#${BUILD_NUMBER}' },
        ],
    ],

  commonCapabilities: {
    platformName: 'android',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'bs://<app_id>',
    'appium:autoGrantPermissions': true,
    'bstack:options': {
      realMobile: true,
      projectName: 'WDIO App Automation Project',
      buildName: 'Android Build - Public App Test',
      sessionName: 'Search Wikipedia - Public Test Android',
      debug: true,
      interactiveDebugging: true,
      local: false
    }
  },

  capabilities: [
    {
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22',
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
