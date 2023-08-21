const { expect } = require('chai');
const mainPage = require('../../pageobjects/mainPage.js');
const apiPage = require('../../pageobjects/apiPage.js');
const header = require('../../pageobjects/components/header.js');
const { pageTitles } = require('../../utils/model/constantsForLeftMenu.js');
const leftMenu = require('../../pageobjects/components/leftMenu.js');

describe('Testing left bar', function () {
    it('Verify left bar navigation', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await header.clickNaviganionButton('API');
        await leftMenu.clickLeftMenuButton('Protocols');
        expect(await apiPage.getPageTitle()).to.equal(pageTitles.protocolsPageTitle);
        await leftMenu.clickLeftMenuButton('browser');
        expect(await apiPage.getPageTitle()).to.equal(pageTitles.browserPageTitle);
        await leftMenu.clickLeftMenuButton('element');
        expect(await apiPage.getPageTitle()).to.equal(pageTitles.elementPageTitle);
        await leftMenu.clickLeftMenuButton('Expect');
        expect(await apiPage.getPageTitle()).to.equal(pageTitles.expectPageTitle);
        await leftMenu.clickLeftMenuButton('Globals');
        expect(await apiPage.getPageTitle()).to.equal(pageTitles.globalsPageTitle);
        await leftMenu.clickLeftMenuButton('Environment Variables');
        expect(await apiPage.getPageTitle()).to.equal(pageTitles.environmentVariablesPageTitle);
        await leftMenu.clickLeftMenuButton('Modules');
        expect(await apiPage.getPageTitle()).to.equal(pageTitles.modulesPageTitle);

    });
});
