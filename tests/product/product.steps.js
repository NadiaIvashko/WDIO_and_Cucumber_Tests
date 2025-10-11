const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const { assert } = require('chai');
const chai = require('chai');
const should = chai.should();
const expectChai = chai.expect;
const ProductPage = require('./product.page');
const productPage = new ProductPage();


When('Я натискаю кнопку "Add to cart"', async () => {
    await productPage.clickAddToCart();
    
    const addToCartButton = await productPage.addToCartButton;
    const isButtonDisplayed = await addToCartButton.isDisplayed();
    assert.isTrue(isButtonDisplayed, 'Add to cart button should be displayed');
});

Then('Товар успішно додано до кошика', async () => {
    const isAdded = await productPage.isProductAddedToCart();
    
    expectChai(isAdded).to.be.true;
    
    isAdded.should.be.true;
});
