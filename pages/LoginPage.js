// class LoginPage {
//   constructor(page) {
//     this.page = page;
//     this.username = '#username';
//     this.password = '#password';
//     this.loginBtn = '#login';
//   }
//
//   async goto() {
//     await this.page.goto('https://the-internet.herokuapp.com/login');
//   }
//
//   async login(user, pass) {
//     await this.page.fill(this.username, user);
//     await this.page.fill(this.password, pass);
//     await this.page.click(this.loginBtn);
//   }
// }
//
// module.exports = LoginPage;


class LoginPage {
  page;
  email; password; loginBtn;
  constructor(page) {
    this.page = page;
    const obj = this.page;
    this.email = page.locator('#input-email');
    this.password = page.locator('#input-password');
    this.loginBtn = page.locator('input[value="Login"]');

  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}

module.exports = LoginPage;