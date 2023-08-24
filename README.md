<h1 align="center">   :zap: <img src="https://avatars.githubusercontent.com/u/1119453?s=200&v=4" width="60" height="60" > <a href="https://github.com/BrowserStackCE/browserstack-webdriverio-appium-cucumber">BrowserStack Examples Appium WebdriverIO Cucumber</a>  <img src="http://v4.webdriver.io/images/webdriverio.png" width="60" height="60" >
 <img src="https://cucumber.io/cucumber/media/images/logos/icons/cucumber-open-icon.svg" width="60" height="60" > :zap:</h1>


Welcome to BrowserStack WebdriverIO Cucumber Examples, a sample UI testing framework empowered with Appium, Webdriverio, Cucumber. Along with the framework the repository also contains test scripts written for BrowserStack Demo Application.

This repository includes a sample configuration file to run these on tests on BrowserStack platforms including **browsers running on a remote selenium grid such as BrowserStack AppAutomate

# Setup
 - Upload the application files for the apps directory and get the hash ID
 - Update config/wdio.config.js file with the app hash ID's
 - run `npm install`

# Run Tests
- run `npm run wdio`

# Browserstack Test Observability

Test Observability is a reporting tool that helps you isolate the genuine test failures after eliminating noise from flaky and always failing tests and also helps with root cause analysis of failed tests.

With Test Observability, you can not only complete your run verification in minutes, you will also be empowered with rich historical data to understand the overall health of your test suites, uncover burning issues impacting the stability of your tests, and help you optimize your tests. 

You can learn more about [what the product has to offer and why you should be using it](https://www.browserstack.com/docs/test-observability/overview/what-is-test-observability).

Please add the following code snippet to your **wdio.conf.js**.
```js
services: [
        ['browserstack', {
            testObservability: true,
            testObservabilityOptions: {
                'projectName': 'Specify your project name here. It should not be dynamic',
                'buildName': 'Specify your job name here. For e.g. `Nightly regression`. It should not be dynamic',
                'buildTag': 'Any build tag goes here. For e.g. commit message'
            },
        }]
    ],
```
To get started with the Test Observability integration with your WebdriverIO Project, please refer to this [documentation](https://www.browserstack.com/docs/test-observability/quick-start/webdriverio).