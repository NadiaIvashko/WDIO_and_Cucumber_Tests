const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const HomePage = require('../home/home.page');
const ProductPage = require('../product/product.page');
const CartPage = require('./cart.page');


const cartPage = new CartPage();

When('Я натискаю кнопку "Оформити замовлення"', async () => {
    await cartPage.clickProceedToCheckout();
});

Then('Зявляється форма для входу в акаунт', async () => {
    const isLoginContainerDisplayed = await cartPage.isLoginContainerDisplayed();   
    expect(isLoginContainerDisplayed).toBe(true);
});

When('Я натискаю кнопку видалення товару', async () => {
    await cartPage.clickRemoveButton();
});

Then('Товар видалено з кошика', async () => {
    const isCartEmpty = await cartPage.isCartEmpty();
    expect(isCartEmpty).toBe(true);
});
