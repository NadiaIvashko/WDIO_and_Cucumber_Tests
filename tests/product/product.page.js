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
        try {
            await browser.waitUntil(
                async () => {
                    const successMessage = await this.successMessage.isDisplayed();
                    const cartBadge = await this.cartBadge.isDisplayed();
                    return successMessage || cartBadge;
                },
                { 
                    timeout: 10000, 
                    timeoutMsg: 'Product was not added to cart - no success indicators found' 
                }
            );
            return true;
        } catch (error) {
            return false;
        }
    }

    open(productId) {
        return super.open(data.urls.product + '/' + productId);
    }
}

module.exports = ProductPage;