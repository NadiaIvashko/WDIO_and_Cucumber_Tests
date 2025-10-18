const { Then } = require('@wdio/cucumber-framework');
const chai = require('chai');

const ProductPage = require('../pages/product.page');
const productPage = new ProductPage();

Then('Товар успішно додано до кошика', async () => {
    const isAdded = await productPage.isProductAddedToCart();
    
    chai.expect(isAdded).to.be.true;
});
