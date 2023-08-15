class Header {

    get naviganionBar() {
        return "//a[text()='";
    };

    get gitHubButton() {
        return 'a[href="https://github.com/webdriverio/webdriverio"]';
    };

    get searchButton() {
        return "span.DocSearch-Button-Container";
    };

};

module.exports = Header;
