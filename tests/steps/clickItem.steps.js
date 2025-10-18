const { When } = require('@wdio/cucumber-framework');

const Header = require('../pages/header.page');
const HomePage = require('../pages/home.page');
const ProductPage = require('../pages/product.page');
const RentalPage = require('../pages/rental.page');
const CartPage = require('../pages/cart.page');

const header = new Header();
const homePage = new HomePage();
const productPage = new ProductPage();
const rentalPage = new RentalPage();
const cartPage = new CartPage();

const itemMap = {
    'site logo': async () => {
        await header.clickSiteLogo();
    },
    'sign in': async () => {
        await header.clickSignIn();
    },
    'contact': async () => {
        await header.clickContact();
    },
    'search button': async () => {
        await homePage.clickSearchButton();
    },
    'first element': async () => {
        await homePage.clickFirstProduct();
    },
    'add to cart': async () => {
        await productPage.clickAddToCart();
    },
    'rental': async () => {
        await header.selectRentalCategory();
    },
    'cart': async () => {
        await header.clickCartIcon();
    },
    'first rental equipment': async () => {
        await rentalPage.clickFirstRentalEquipment();
    },
    'remove from cart': async () => {
        await cartPage.clickRemoveButton();
    },
    'proceed to checkout': async () => {
        await cartPage.clickProceedToCheckout();
    },
};


async function clickItem(item) {    
    const itemFunction = itemMap[item];
    
    if (!itemFunction) {
        throw new Error(`No item found with name: "${item}". Available items: ${Object.keys(itemMap).join(', ')}`);
    } else {
        await itemFunction();
    }
}

When('Я натискаю на {string}', async (item) => {
    await clickItem(item);
});
