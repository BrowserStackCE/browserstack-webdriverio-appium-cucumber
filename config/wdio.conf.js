exports.config = {
    hostname: 'hub-cloud.browserstack.com',
    port: 443,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    specs: [
        './tests/features/**/*.feature'
    ],
    exclude: [
       
    ],
    maxInstances: 10,
    capabilities: [{
        platformName:'android',
        "appium:deviceName":'Google Pixel 6',
        "appium:platformVersion":"12.0",
        "appium:app": 'bs://80f493246561e4f37463e632266485ba7ca7de0b',
        'bstack:options' : {
            "appiumVersion" : "2.0.0",  
        },
    },{
        platformName: 'iOS',
        "appium:deviceName": 'iPhone 13',
        "appium:platformVersion":"15.0",
        "appium:app": 'bs://4ed100cebdbb37ae1f688235060000a5ea58db27',
        'bstack:options' : {
            "appiumVersion" : "2.0.0",  
        },
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['browserstack'],
    framework: 'cucumber',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    cucumberOpts: {
        require: ['./tests/steps/**/*.steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}
