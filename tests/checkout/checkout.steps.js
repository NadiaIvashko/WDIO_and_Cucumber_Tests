const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const { assert } = require('chai');
const chai = require('chai');
const should = chai.should();
const expectChai = chai.expect;
const HomePage = require('../home/home.page');
const ProductPage = require('../product/product.page');
const CartPage = require('./cart.page');

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

When('Я додаю товар до кошика', async () => {
    await homePage.clickFirstProduct();
    
    await productPage.clickAddToCart();
    
    await browser.pause(2000);
    
    const cartBadge = await productPage.cartBadge;
    const isDisplayed = await cartBadge.isDisplayed();
    isDisplayed.should.be.true;
});


When('Я натискаю кнопку "Checkout"', async () => {
    await cartPage.clickProceedToCheckout();
});

Then('Мене перенаправляє на сторінку входу', async () => {
    const currentUrl = await browser.getUrl();
        
    currentUrl.should.include('/auth/login');
});
