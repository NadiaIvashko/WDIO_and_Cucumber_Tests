const { When, Then } = require('@wdio/cucumber-framework');
const { assert } = require('chai');
const chai = require('chai');
const expectChai = chai.expect;
const ProductPage = require('./product.page');
const productPage = new ProductPage();

When('Я натискаю кнопку "Add to cart"', async () => {
    await productPage.clickAddToCart();
});

Then('Товар успішно додано до кошика', async () => {
    const isAdded = await productPage.isProductAddedToCart();
    
    expectChai(isAdded).to.be.true;
    
});
