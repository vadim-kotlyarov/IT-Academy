class LoginModal {
  constructor(page) {
    this.page = page;
    this.loginEmail = page.locator('#login-email');
    this.loginPassword = page.locator('#login-password');
    this.loginButton = page.locator('[data-testid="loginSubmit"]');
    this.emailErrorMessage = page.locator('//div[@class="FieldWrapper-module__wrapper"][1]/div[3]');
    this.passwordErrorMessage = page.locator('//div[@class="FieldWrapper-module__wrapper"][2]/div[3]');
  }

  async signIn(email, password) {
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }
}

module.exports = LoginModal;
