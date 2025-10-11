const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const { assert } = require('chai');
const chai = require('chai');
const should = chai.should();
const expectChai = chai.expect;
const HomePage = require('../home/home.page');
const ProductPage = require('../product/product.page');
const CartPage = require('./cart.page');


const cartPage = new CartPage();

When('Я натискаю кнопку "Оформити замовлення"', async () => {
    await cartPage.clickProceedToCheckout();
    
    const currentUrl = await browser.getUrl();
    assert.isTrue(currentUrl.includes('/checkout'), 'Should be on checkout page');
});

Then('Зявляється форма для входу в акаунт', async () => {
    const isLoginContainerDisplayed = await cartPage.isLoginContainerDisplayed();
    
    expectChai(isLoginContainerDisplayed).to.be.true;
    
    isLoginContainerDisplayed.should.be.true;
});

When('Я натискаю кнопку видалення товару', async () => {
    await cartPage.clickRemoveButton();
    
    const currentUrl = await browser.getUrl();
    currentUrl.should.include('/checkout');
});

Then('Товар видалено з кошика', async () => {
    const isCartEmpty = await cartPage.isCartEmpty();
    
    assert.isTrue(isCartEmpty, 'Cart should be empty after removing item');
    
    expectChai(isCartEmpty).to.be.true;
});
