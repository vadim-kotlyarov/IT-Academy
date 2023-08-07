const { expect } = require('chai');
const mainPage = require('../../pageobjects/mainPage.js');
const docsPage = require('../../pageobjects/docsPage.js');
const apiPage = require('../../pageobjects/apiPage.js');
const blogPage = require('../../pageobjects/blogPage.js');
const contributePage = require('../../pageobjects/contributePage.js');
const communityPage = require('../../pageobjects/communityPage.js');
const sponsorPage = require('../../pageobjects/sponsorPage.js');
const { pageTitles } = require('../../utils/model/constantsForTopBarNavigation.js');
const header = require('../../pageobjects/components/header.js');


describe('Testing top bar', function () {
    it('Verify top bar navigation', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await header.clickNaviganionButton('Docs');
        expect(await docsPage.getPageTitle()).to.equal(pageTitles.docsPageTitle);
        await header.clickNaviganionButton('API');
        expect(await apiPage.getPageTitle()).to.equal(pageTitles.apiPageTitle);
        await header.clickNaviganionButton('Blog');
        expect(await blogPage.getPageTitle()).to.equal(pageTitles.blogPageTitle);
        await header.clickNaviganionButton('Contribute');
        expect(await contributePage.getPageTitle()).to.equal(pageTitles.contributePageTitle);
        await header.clickNaviganionButton('Community');
        expect(await communityPage.getPageTitle()).to.equal(pageTitles.communityPageTitle);
        await header.clickNaviganionButton('Sponsor');
        expect(await sponsorPage.getPageTitle()).to.equal(pageTitles.sponsorPageTitle);
    });
});
