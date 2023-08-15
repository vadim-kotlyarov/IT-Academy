const { Given, When, Then } = require('@wdio/cucumber-framework');
const { Key } = require('webdriverio');


When('I click {locator} {string} tab', async (locator, tabName) => {
    await $(locator + tabName + "']").click();
});

When('I click {locator}', async (locator) => {
    await $(locator).click();
});

When('I fill field {locator} with text {string}', async (locator, searchText) => {
    await (await $(locator)).waitForDisplayed();
    await (await $(locator)).setValue(searchText);
});

When('I wait for search results in {locator}', async (locator) => {
    await (await $(locator)).waitForExist();
    await browser.keys(Key.Enter);
});
