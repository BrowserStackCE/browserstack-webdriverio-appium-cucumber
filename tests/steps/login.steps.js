const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');

Given(/^I am on the (\w+) page$/, async (page) => {
    //Check page title if you have any. Current Sample App does not have one
    await expect(page).toBe(page)
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(LoginPage.statusLabel).toBeExisting();
    await expect(LoginPage.statusLabel).toHaveTextContaining(message);
});

