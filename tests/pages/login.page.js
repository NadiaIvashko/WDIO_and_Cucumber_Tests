const Page = require('./page');
const urlData = require('../data/urls');

class LoginPage extends Page {
    // Селектори

    get emailInput() {
        return $('input[type="email"]');
    }

    get passwordInput() {
        return $('input[type="password"]');
    }

    get submitButton() {
        return $('input[type="submit"]');
    }

    // Методи

    async login(email, password) {
        await this.emailInput.waitForDisplayed({ timeout: 5000 });
        await this.emailInput.clearValue();
        await this.emailInput.setValue(email);
        
        await this.passwordInput.clearValue();
        await this.passwordInput.setValue(password);
        
        await this.submitButton.click();
    }

    open() {
        return super.open(urlData.urls.login);
    }
}

module.exports = LoginPage;