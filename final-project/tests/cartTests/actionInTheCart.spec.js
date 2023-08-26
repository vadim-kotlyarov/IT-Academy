const { test, expect } = require ('@playwright/test');
const MainPage = require('../pageobject/mainPage.js');
const Header = require('../pageobject/components/header.js');
const CartPage = require('../pageobject/cartPage.js');
const SearchResultsPage = require('../pageobject/searchResultsPage.js');
const ConfirmationModal = require('../pageobject/components/confirmationModal.js');

test.describe('Verify action to the cart', () => {

    test.use({storageState: 'state.json'});

    let mainPage;
    let header;
    let cartPage;
    let searchResultsPage;
    let confirmationModal;
    test.beforeEach(async({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        cartPage = new CartPage(page);
        searchResultsPage = new SearchResultsPage(page);
        confirmationModal = new ConfirmationModal(page);
        await mainPage.navigate('https://www.21vek.by/');
    });

    test('Verify delete item to the cart', async() => {
        await header.searchByValue('iPhone');
        await searchResultsPage.addFirstResultItemToTheCart();
        await header.clickCartButton();
        await cartPage.clickDeleteItemButton();
        await confirmationModal.clickDeleteButton();
        await expect(await (await cartPage.informMassage).textContent())
        .toEqual('У вас пока нет ни одного товара в корзине,вы можете выбрать их здесь'); 
    });

});
