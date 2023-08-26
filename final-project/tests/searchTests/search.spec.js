const { test, expect } = require ('@playwright/test');
const MainPage = require('../pageobject/mainPage.js');
const Header = require('../pageobject/components/header.js');
const SearchResultsPage = require('../pageobject/searchResultsPage.js');
const CatalogPage = require('../pageobject/catalogPage.js');

test.describe('Search functionality check', () => {

    test.use({storageState: 'state.json'});

    let mainPage;
    let header;
    let searchResultsPage;
    let catalogPage;
    test.beforeEach(async({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        searchResultsPage = new SearchResultsPage(page);
        catalogPage = new CatalogPage(page);
        await mainPage.navigate('https://www.21vek.by/');
    });

    test('Verify search input', async() => {
        await header.searchByValue('iPhone');
        let searchResults = await searchResultsPage.getAllResultItems();
        await searchResults.forEach(async(item) => {
           expect(await (await item.textContent()).toLowerCase()).toContain('iPhone'.toLowerCase());
        });
    });

    test('Verify catalog search', async() => {
        await header.clickCatalogButton();
        await catalogPage.hoverLeftSideBarItem('Смартфоны, ТВ и электроника');
        await catalogPage.clickCategoriesItem('Смартфоны Apple');
        let searchResults = await searchResultsPage.getAllResultItems();
        await searchResults.forEach(async(item) => {
           expect(await (await item.textContent()).toLowerCase()).toContain('Apple'.toLowerCase());
        });
    });
    
});
