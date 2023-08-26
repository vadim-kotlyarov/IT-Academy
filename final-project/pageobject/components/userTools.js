class UserTools {

    constructor(page) {
        this.page = page;
        this.enterButton = page.locator('button[data-testid="loginButton"]');
        this.userToolsSubTitle = page.locator('.userToolsSubtitle');
        this.cartButton = page.locator('//a[@href="/order/"]/div');
        this.comparisonLists = page.locator('//a[@href="/compare/"]//div');
    };

    async clickEnterButton() {
        await this.enterButton.click();
    };

    async clickCartButton() {
        await this.cartButton.click();
    };

    async clickComparisonLists() {
        await this.comparisonLists.click();
    };

};

module.exports = UserTools;