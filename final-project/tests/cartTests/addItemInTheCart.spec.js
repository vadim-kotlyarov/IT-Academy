const { test, expect } = require ('@playwright/test');
const MainPage = require('../pageobject/mainPage.js');
const Header = require('../pageobject/components/header.js');
const SearchResultsPage = require('../pageobject/searchResultsPage.js');
const CatalogPage = require('../pageobject/catalogPage.js');
const CartPage = require('../pageobject/cartPage.js');
const ConfirmationModal = require('../pageobject/components/confirmationModal.js');
const ProductDetailsPage = require('../pageobject/productDetailsPage.js');

test.describe('Verify add item to the cart', () => {

    test.use({storageState: 'state.json'});

    let mainPage;
    let header;
    let searchResultsPage;
    let catalogPage;
    let cartPage;
    let confirmationModal;
    let productDetailsPage;
    test.beforeEach(async({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        searchResultsPage = new SearchResultsPage(page);
        catalogPage = new CatalogPage(page);
        cartPage = new CartPage(page);
        confirmationModal = new ConfirmationModal(page);
        productDetailsPage = new ProductDetailsPage(page);
        await mainPage.navigate('https://www.21vek.by/');
    });

    test.afterEach(async() => {
        await cartPage.clickDeleteItemButton();
        await confirmationModal.clickDeleteButton();

    });

    test('Verify add item to the cart from search result page', async() => {
        await header.searchByValue('iPhone');
        await searchResultsPage.addFirstResultItemToTheCart();
        const firstResultItem = await (await searchResultsPage.getFirstResultItemName()).innerText();
        await header.clickCartButton();
        await expect(await firstResultItem).toEqual(await cartPage.cartItemName.textContent()); 
    });

    test('Verify add item to the cart from catalog page', async() => {
        await header.clickCatalogButton();
        await catalogPage.hoverLeftSideBarItem('Смартфоны, ТВ и электроника');
        await catalogPage.clickCategoriesItem('Смартфоны Apple');
        await searchResultsPage.clickFirstResultItemName();
        const productName = await (await productDetailsPage.productItemName).innerText();
        await productDetailsPage.clickCartButton();
        await header.clickCartButton();
        await expect(await productName).toEqual(await cartPage.cartItemName.textContent()); 
    });
    
});
