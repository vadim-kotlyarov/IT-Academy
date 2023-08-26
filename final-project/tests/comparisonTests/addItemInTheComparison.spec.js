const { test, expect } = require ('@playwright/test');
const MainPage = require('../../pageobject/mainPage.js');
const Header = require('../../pageobject/components/header.js');
const SearchResultsPage = require('../../pageobject/searchResultsPage.js');
const CatalogPage = require('../../pageobject/catalogPage.js');
const ComparisonPage = require('../../pageobject/comparisonPage.js');
const ProductDetailsPage = require('../../pageobject/productDetailsPage.js');

test.describe('Verify add item to the comparison', () => {

    test.use({storageState: 'state.json'});

    let mainPage;
    let header;
    let searchResultsPage;
    let catalogPage;
    let comparisonPage;
    let productDetailsPage;
    test.beforeEach(async({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        searchResultsPage = new SearchResultsPage(page);
        catalogPage = new CatalogPage(page);
        comparisonPage = new ComparisonPage(page);
        productDetailsPage = new ProductDetailsPage(page);
        await mainPage.navigate('https://www.21vek.by/');
        await header.clickCatalogButton();
        await catalogPage.hoverLeftSideBarItem('Смартфоны, ТВ и электроника');
        await catalogPage.clickCategoriesItem('Смартфоны Apple');
    });

    test.afterEach(async() => {
        await comparisonPage.clickRemoveFirstItemButon();
    });

    test('Verify add item to the comparison page from search result page', async() => {
        const firstProductName  = await (await searchResultsPage.getFirstResultItemName()).textContent(); 
        await searchResultsPage.addFirstItemToTheComparison();
        await searchResultsPage.clickCompareItemsButton();
        await expect(await firstProductName).toEqual(await comparisonPage.firstComparisonItemName.textContent());
    });
    
    test('Verify add item to the comparison page from product details page', async() => {
        searchResultsPage.clickFirstResultItemName();
        const productName = await (await productDetailsPage.productItemName).textContent();
        await productDetailsPage.clickAddToCompareButton();
        await productDetailsPage.clickCompareItemsButton();
        await expect(await productName).toEqual(await comparisonPage.firstComparisonItemName.textContent());
    });

});
