const path = require('path');

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'YOUR_USERNAME',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'YOUR_ACCESS_KEY',
  
        specs: [
      '../features/**/*.feature'  // Adjust this to the correct feature file location
    ],
  
    logLevel: 'info',
    framework: 'cucumber',
  
    cucumberOpts: {
      require: [path.resolve(__dirname, '../step-definitions/**/*.js')],
      timeout: 60000
    }
  };
  