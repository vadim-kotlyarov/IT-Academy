const { expect } = require('chai');
const mainPage = require('../../pageobjects/mainPage.js');
const apiPage = require('../../pageobjects/apiPage.js');
const searchModal = require('../../pageobjects/components/searchModal.js');
const header = require('../../pageobjects/components/header.js');

describe('Verify search functionality', function () {
    it('Verify search result for a query', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await header.clickSearchButton();
        await searchModal.queryEntry('browser');
        const textTitle = await apiPage.getPageTitle();
        expect(await textTitle.includes('Browser')).to.equal(true);
    });
});
