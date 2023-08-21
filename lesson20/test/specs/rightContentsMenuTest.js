const { expect } = require('chai');
const mainPage = require('../../pageobjects/mainPage.js');
const apiPage = require('../../pageobjects/apiPage.js');
const header = require('../../pageobjects/components/header.js');
const leftMenu = require('../../pageobjects/components/leftMenu.js');
const rightContentsMenu = require('../../pageobjects/components/rightContentsMenu.js');

describe.only('Verify right contents', function () {
    it('Verify right contents navigation', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await header.clickNaviganionButton('API');
        await leftMenu.clickLeftMenuButton('browser');
        await rightContentsMenu.clickRightMenuButton('Properties');
        await apiPage.waitContentsTitle('properties');
        expect(await apiPage.contentsTitle.isDisplayedInViewport()).to.equal(true);
        await rightContentsMenu.clickRightMenuButton('Methods');
        await apiPage.waitContentsTitle('methods');
        expect(await apiPage.contentsTitle.isDisplayedInViewport()).to.equal(true);
        await rightContentsMenu.clickRightMenuButton('Remarks');
        await apiPage.waitContentsTitle('remarks');
        expect(await apiPage.contentsTitle.isDisplayedInViewport()).to.equal(true);
    });
});
