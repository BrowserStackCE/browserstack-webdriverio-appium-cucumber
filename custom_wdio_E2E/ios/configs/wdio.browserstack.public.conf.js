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
    platformName: 'ios',
    'appium:app': 'bs://<app_id>',
    'bstack:options': {
      projectName: 'WDIO App Automation Project IOS',
      buildName: 'Public App Test iOS',
      sessionName: 'Sample App - Public Test',
      debug: true,
      interactiveDebugging: true,
    }
  },

  capabilities: [
    {
      'bstack:options': {
        deviceName: 'iPhone 14',
        osVersion: '16'
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
