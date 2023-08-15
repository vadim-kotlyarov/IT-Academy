class LeftMenu {

    get leftMenuBar() {
        return "//ul[@class='theme-doc-sidebar-menu menu__list']//a[text()='";
    };

}

module.exports = LeftMenu;
