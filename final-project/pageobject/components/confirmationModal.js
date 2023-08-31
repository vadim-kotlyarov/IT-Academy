class ConfirmationModal {
  constructor(page) {
    this.page = page;
    this.deleteButton = page.locator('//button[@data-testid="modal-confirmation-button"]');
  }

  async clickDeleteButton() {
    await this.deleteButton.click();
  }
}

module.exports = ConfirmationModal;
