const Page = require('../page');
const data = require('../data');
class ProductPage extends Page {
    // Селектори

    get addToCartButton() {
        return $('#btn-add-to-cart');
    }

    get cartBadge() {
        return $('[data-test="cart-quantity"]');
    }

    get successMessage() {
        return $('.alert-success');
    }

    // Методи
    async clickAddToCart() {
        await this.addToCartButton.waitForDisplayed({ timeout: 5000 });
        await this.addToCartButton.click();
    }

    async isProductAddedToCart() {
        await browser.pause(1000);
        const badge = await this.cartBadge;
        await browser.pause(2000);
        return await badge.isDisplayed();
    }

    open(productId) {
        return super.open(data.urls.product + '/' + productId);
    }
}

module.exports = ProductPage;