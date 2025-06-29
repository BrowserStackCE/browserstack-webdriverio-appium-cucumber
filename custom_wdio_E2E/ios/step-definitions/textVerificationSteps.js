const { Given, When, Then } = require('@wdio/cucumber-framework');
const assert = require('assert');

Given('I launch the app', async () => {
  const textButton = await $(`~Text Button`);
  if (!(await textButton.isDisplayed())) {
    let retries = 0;
    while (!(await textButton.isDisplayed()) && retries < 2) {
      await driver.back();
      retries++;
    }
  }
});


When('I click the {string}', async (buttonName) => {
  const button = await $(`~${buttonName}`);
  await button.waitForDisplayed({ timeout: 30000 });
  await button.click();
});

When('I enter {string} into the input field', async (inputText) => {
  const inputField = await $(`~Text Input`);
  await inputField.waitForDisplayed({ timeout: 30000 });
  await inputField.click();
  await inputField.addValue(inputText + "\n");
});

Then('I should see {string} as the output text', async (expectedText) => {
  const outputField = await $(`~Text Output`);
  await outputField.waitForDisplayed({ timeout: 30000 });
  const actualText = await outputField.getText();
  assert.strictEqual(actualText, expectedText, `Expected "${expectedText}", but got "${actualText}"`);
});
