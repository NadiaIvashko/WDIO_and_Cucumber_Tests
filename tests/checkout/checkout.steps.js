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

Given('Я відкриваю головну сторінку', async () => {
    await homePage.open();
    await browser.maximizeWindow();
    const pageTitle = await browser.getTitle();
    assert.isNotEmpty(pageTitle, 'Page title should not be empty');
});

When('Я додаю товар до кошика', async () => {
    await homePage.clickFirstProduct();
    
    await productPage.clickAddToCart();
    
    await browser.pause(2000);
    
    const cartBadge = await productPage.cartBadge;
    const isDisplayed = await cartBadge.isDisplayed();
    isDisplayed.should.be.true;
});

When('Я переходжу до кошика', async () => {
    await cartPage.clickCartIcon();
    
    const currentUrl = await browser.getUrl();
    expectChai(currentUrl).to.include('/cart');
});

When('Я натискаю кнопку "Checkout"', async () => {
    await cartPage.clickProceedToCheckout();
    
    const currentUrl = await browser.getUrl();
    assert.isTrue(currentUrl.includes('/auth/login'), 'Should be redirected to login page');
});

Then('Мене перенаправляє на сторінку входу', async () => {
    const currentUrl = await browser.getUrl();
    
    expectChai(currentUrl).to.include('/auth/login');
    
    currentUrl.should.include('/auth/login');
});
