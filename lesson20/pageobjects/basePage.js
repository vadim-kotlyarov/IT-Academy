class BasePage {

    get pageTitle() {
        return $('header:nth-child(1)');
    }

    async getPageTitle() {
        await this.pageTitle.waitForDisplayed();
        return this.pageTitle.getText();
    }

    async navigate(url) {
        await browser.url(url)
    }
}

module.exports = BasePage;
