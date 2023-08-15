const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');


Then('I expect {locator} element should {comparison} text {string}', async (locator, comparison, text) => {
    await (await $(locator)).waitForDisplayed();
    if(comparison === 'equal') {
        await expect(await (await $(locator)).getText()).toEqual(text);
    } else if(comparison === 'сontain') {
        await expect(await (await $(locator)).getText()).toContain(text);
    }
});

Then('I expect url should contain text {string}', async (text) => {
        await expect(await browser.getUrl()).toContain(text);
});

Then('I wait for {locator} with {string} to be displayed in viewport', async (locator, contentName) => {
    await (await $(locator + contentName + "']")).waitForDisplayed();
    expect(await (await $(locator + contentName + "']")).isDisplayedInViewport()).toEqual(true);
});
