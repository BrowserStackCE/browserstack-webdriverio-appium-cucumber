const {config} = require('./base.config')
config.cucumberOpts.tagExpression = "@Sample"
exports.config = {
    ...config,
    specs: [
        './tests/features/**/*.feature'
    ],
    exclude: [
       
    ],
    maxInstances: 15,
    capabilities: [{
        platformName:'android',
        "appium:deviceName":'Google Pixel 6',
        "appium:platformVersion":"12.0",
        "appium:app": '<app-id>',
        'bstack:options' : {
            "appiumVersion" : "2.0.0",
            "buildName" : `Wdio Browserstack Cucumber - ${new Date().toDateString()}`,  
            "projectName":"Browserstack Test"
        },
    },{
        platformName: 'iOS',
        "appium:deviceName": 'iPhone 13',
        "appium:platformVersion":"15.0",
        "appium:app": '<app-id>',
        'bstack:options' : {
            "appiumVersion" : "2.0.0",  
            "buildName" : `Wdio Browserstack Cucumber - ${new Date().toDateString()}`,
            "projectName":"Browserstack Test"
        },
    }]
}
