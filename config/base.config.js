exports.config = {
    hostname: 'hub-cloud.browserstack.com',
    port: 443,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [['browserstack', {
        testObservability: true,
        testObservabilityOptions: {
            'projectName': "browserstack-webdriverio-appium-cucumber",
            'buildName': "browserstack-webdriverio-appium-cucumber-build",
            'buildTag': 'WDIO'
        },
    }]],
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
