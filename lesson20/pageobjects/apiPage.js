const BasePage = require('./basePage');

class ApiPage extends BasePage {

    set contentsTitle(contentsName) {
        this.locator = `//h2[@id='${contentsName}']`;
    };

    get contentsTitle() {
        return $(this.locator);
    };

    async waitContentsTitle(contentsName) {
        this.contentsTitle = contentsName;
        await this.contentsTitle.waitForDisplayed();
    }
}

module.exports = new ApiPage();
