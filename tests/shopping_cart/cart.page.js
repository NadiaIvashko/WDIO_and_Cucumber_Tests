const Page = require('../page');
const cartData = require('../data');

class CartPage extends Page {
    get loginContainer() {
        return $('.login-container');
    }

    get proceedToCheckoutButton() {
        return $('.btn-success');
    }

    get removeButton(){
        return $('.btn-danger');
    }

    get cartEmpty() {
        return $(`p=${cartData.messages.emptyCart}`);
    }

    async clickProceedToCheckout() {
        await this.proceedToCheckoutButton.waitForDisplayed({ timeout: 5000 });
        await this.proceedToCheckoutButton.click();
        await browser.pause(2000);
    }

    async isLoginContainerDisplayed() {
        await this.loginContainer.waitForDisplayed({ timeout: 5000 });
        return await this.loginContainer.isDisplayed();
    }

    async clickRemoveButton() {
        await this.removeButton.waitForDisplayed({ timeout: 5000 });
        await this.removeButton.click();
    }

    async isCartEmpty() {
        await this.cartEmpty.waitForDisplayed({ timeout: 5000 });
        return await this.cartEmpty.isDisplayed();
    }

    open() {
        return super.open('/cart');
    }
}

module.exports = CartPage;
