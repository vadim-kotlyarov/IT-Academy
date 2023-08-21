const { Key } = require('webdriverio');

class SearchModal {

    get searchModalInput() {
        return '#docsearch-input';
    };

    get searchHitContainer() {
        return '.DocSearch-Hit-Container';
    }

}

module.exports = SearchModal;
