const BasePage = require('./basePage');


class BlogPage extends BasePage {

    get pageTitle() {
        return $('//h2/a[text()="TypeScript Support for WebDriver Bidi"]');
    }

}

module.exports = BlogPage;
