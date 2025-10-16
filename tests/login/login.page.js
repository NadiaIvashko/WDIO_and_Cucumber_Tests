const Page = require('../page');
const data = require('../data');
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
        
        // Чекаємо на редирект - збільшили час
        await browser.pause(5000);
    }

    open() {
        return super.open(data.urls.login);
    }
}

module.exports = LoginPage;