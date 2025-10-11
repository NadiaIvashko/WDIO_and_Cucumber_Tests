const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const { assert } = require('chai');
const chai = require('chai');
const should = chai.should();
const expectChai = chai.expect;
const HomePage = require('../home/home.page');
const RentalPage = require('./rental.page');

const rentalPage = new RentalPage();

When('Я клікаю на першу доступну техніку', async () => {
    await rentalPage.clickFirstRentalEquipment();
    
   
    const currentUrl = await browser.getUrl();
    assert.isTrue(currentUrl.includes('/product/'), 'Should be on product page');
});

When('Я натискаю кнопку "Add to cart" на сторінці техніки', async () => {
    await rentalPage.clickAddToCart();

   
    const addToCartButton = await rentalPage.addToCartButton;
    const isButtonDisplayed = await addToCartButton.isDisplayed();
    assert.isTrue(isButtonDisplayed, 'Add to cart button should be displayed');
});

Then('Я бачу повідомлення що послугу додано до кошика', async () => {
    const isAdded = await rentalPage.isProductAddedToCart();
    
    expectChai(isAdded).to.be.true;
    
    isAdded.should.be.true;
});
