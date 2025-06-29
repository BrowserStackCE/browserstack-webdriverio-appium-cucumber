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
    platformName: 'ios',
    'appium:app': 'bs://<app_id>',
    'appium:autoGrantPermissions': true,
    'bstack:options': {
      projectName: 'WDIO App Automation Project',
      buildName: 'iOS Parallel Build',
      debug: true,
      interactiveDebugging: true,
    }
  },

  capabilities: [
    {
      'bstack:options': {
        deviceName: 'iPhone 14',
        osVersion: '16',
        sessionName: 'Parallel - iPhone 14'
      }
    },
    {
      'bstack:options': {
        deviceName: 'iPhone 16',
        osVersion: '18',
        sessionName: 'Parallel - iPhone 16'
      }
    },
    {
      'bstack:options': {
        deviceName: 'iPhone 15',
        osVersion: '17',
        sessionName: 'Parallel - iPhone 15'
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
