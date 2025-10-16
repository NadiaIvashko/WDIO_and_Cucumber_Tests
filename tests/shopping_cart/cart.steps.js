const { Given, When, Then } = require('@wdio/cucumber-framework');
const { assert } = require('chai');
const chai = require('chai');
const expectChai = chai.expect;
const CartPage = require('./cart.page');


const cartPage = new CartPage();

When('Я натискаю кнопку "Оформити замовлення"', async () => {
    await cartPage.clickProceedToCheckout();
});

Then('Зявляється форма для входу в акаунт', async () => {
    const isLoginContainerDisplayed = await cartPage.isLoginContainerDisplayed();
    
    expectChai(isLoginContainerDisplayed).to.be.true;
});

When('Я натискаю кнопку видалення товару', async () => {
    await cartPage.clickRemoveButton();
});

Then('Товар видалено з кошика', async () => {
    const isCartEmpty = await cartPage.isCartEmpty();
    
    assert.isTrue(isCartEmpty);
});
