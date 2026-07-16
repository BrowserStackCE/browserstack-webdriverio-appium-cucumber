// import { Given, When, Then } from '@wdio/cucumber-framework';

// Given('I try to search using Wikipedia App', async () => {
//   const searchInit = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")');
//   await searchInit.click();
// });

// When('I search with keyword BrowserStack', async () => {
//   const searchInput = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
//   await searchInput.setValue('BrowserStack');
// });

// Then('The search results should be listed', async () => {
//   const results = await $$('android=new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title")');
//   await expect(results.length).toBeGreaterThan(0);
// });

import { Given, When, Then } from '@wdio/cucumber-framework';


Given('I launch the search screen', async () => {
  const searchContainer = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")');

  // If search container is not visible, navigate back twice
  let retries = 0;
  while (!(await searchContainer.isDisplayed()) && retries < 2) {
    await driver.back();
    retries++;
  }

  // Ensure the search container is displayed
  await searchContainer.waitForDisplayed({ timeout: 5000 });
  await searchContainer.click();

  const searchInput = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
  await searchInput.waitForDisplayed({ timeout: 15000 });
  await searchInput.clearValue(); // Clear input field in case it's pre-filled
});

When(/^I search with keyword "(.*)"$/, async (searchTerm) => {
  const searchInput = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
  await searchInput.setValue(searchTerm);
});

Then('The search results should be listed', async () => {
  const results = await $$('android=new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title")');
  await expect(results.length).toBeGreaterThan(0);
});

Then('I clear the search field to prevent interaction with it', async () => {
  const searchInput = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
  await searchInput.clearValue(); // Clear the search field to prevent further interaction
});

Then('I click on the ImageButton after every search', async () => {
  // Find the ImageButton by its class name and click it after each search
  const el4 = await $('android.widget.ImageButton'); // CLASS_NAME
  await el4.click();
});
