const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^I navigate on (.*) page$/, async function (url) {
    await browser.url(url)
});

When(/^I switch tab to (.*)$/, async function(url) {
    await browser.switchWindow(url);
});
