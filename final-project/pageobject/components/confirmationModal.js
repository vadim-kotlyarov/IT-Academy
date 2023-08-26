class ConfirmationModal {

    constructor(page) {
        this.page = page;
        this.deleteButton = page.locator('//button[@data-testid="modal-confirmation-button"]');
        this.informMassage = page.locator('//div[@class="EmptyBasket_text__2iKar"]');
    };

    async clickDeleteButton() {
        await this.deleteButton.click();
        await this.informMassage.waitFor({ state: "visible" });
    };

};

module.exports = ConfirmationModal;
