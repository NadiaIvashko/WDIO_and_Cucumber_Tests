const Page = require('./page');
const urlData = require('../data/urls');

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

    get cartElement() {
        return $(`ng-star-inserted`);
    }

    async clickProceedToCheckout() {
        await this.proceedToCheckoutButton.waitForDisplayed({ timeout: 5000 });
        await this.proceedToCheckoutButton.click();
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
        try {
            const exists = await this.cartElement.isExisting();
            if (!exists) {
                return true;
            }
            
            return await this.cartElement.isNotDisplayed();
        } catch (error) {
            return true;
        }
    }

    open() {
        return super.open(urlData.urls.cart);
    }
}

module.exports = CartPage;
