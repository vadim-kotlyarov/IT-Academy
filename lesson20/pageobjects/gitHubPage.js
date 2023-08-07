const BasePage = require('./basePage');

class GitHubPage extends BasePage {

    async getTextUrl() {
        await browser.switchWindow('https://github.com/webdriverio/webdriverio');
        const textUrl = await browser.getUrl();
        return textUrl;
    };
}

module.exports = new GitHubPage();
