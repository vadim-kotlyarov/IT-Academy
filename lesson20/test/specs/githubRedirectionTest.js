const { expect } = require('chai');
const mainPage = require('../../pageobjects/mainPage.js');
const gitHubPage = require('../../pageobjects/gitHubPage.js');
const header = require('../../pageobjects/components/header.js');

describe('Verify third party site redirection', function () {
    it('Verify github redirection from the header icon', async () => {
        await mainPage.navigate('https://webdriver.io/');
        await header.clickGitHubButton();
        const textUrl = await gitHubPage.getTextUrl();
        expect(await textUrl.includes('github')).to.equal(true);
    });
});
