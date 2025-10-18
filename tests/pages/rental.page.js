const Page = require('./page');

class RentalPage extends Page {

    get firstRentalEquipment() {
        return $('.card');
    }

    async clickFirstRentalEquipment() {
        await this.firstRentalEquipment.waitForDisplayed({ timeout: 5000 });
        await this.firstRentalEquipment.click();
    }
}

module.exports = RentalPage;