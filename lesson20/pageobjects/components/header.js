class Header {

    set naviganionButton(tabName) {
        this.locator = `//a[text()='${tabName}']`;
    };

    get naviganionButton() {
        return $(this.locator);
    };

    get gitHubButton() {
        return $('a[href="https://github.com/webdriverio/webdriverio"]');
    };

    get searchButton() {
        return $('span.DocSearch-Button-Container');
    };

    async clickNaviganionButton(tabName) {
        this.naviganionButton = tabName;
        await this.naviganionButton.waitForClickable();
        await this.naviganionButton.click();
    };

    async clickGitHubButton() {
        await this.gitHubButton.waitForClickable();
        await this.gitHubButton.click();

    };

    async clickSearchButton() {
        await this.searchButton.click();
    };

};

module.exports = new Header();
