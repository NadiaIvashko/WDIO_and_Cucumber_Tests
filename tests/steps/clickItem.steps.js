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

const elementMap = {
    'site logo': () => header.siteLogo,
    'sign in': () => header.signInButton,
    'contact': () => header.contactLink,
    'search button': () => homePage.searchButton,
    'first element': () => homePage.firstProduct,
    'add to cart': () => productPage.addToCartButton,
    'rental': () => header.rentalCategory,
    'cart': () => header.cartIcon,
    'first rental equipment': () => rentalPage.firstRentalEquipment,
    'remove from cart': () => cartPage.removeButton,
    'proceed to checkout': () => cartPage.proceedToCheckoutButton,
};


async function clickElement(elementName) {
    const getElement = elementMap[elementName];
    
    if (!getElement) {
        throw new Error(
            `Element "${elementName}" not found. Available elements: ${Object.keys(elementMap).join(', ')}`
        );
    }
    
    const element = getElement();
    await element.waitForClickable({ timeout: 5000 });
    await element.click();
}

When('Я натискаю на {string}', async (elementName) => {
    await clickElement(elementName);
});

module.exports = { clickElement };