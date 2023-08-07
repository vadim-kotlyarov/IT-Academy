const BasePage = require('./basePage');


class BlogPage extends BasePage {

    get pageTitle() {
        return $('//h2/a[text()="TypeScript Support for WebDriver Bidi"]');
    }

    async waitElementPageTitle() {
        await this.pageTitle.waitForDisplayed();
    }

}

module.exports = new BlogPage();
