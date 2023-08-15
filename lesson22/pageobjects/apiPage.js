const BasePage = require('./basePage');

class ApiPage extends BasePage {

    get contentsTitle() {
        return "//h2[@id='";
    };

}

module.exports = ApiPage;
