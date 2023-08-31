const selector = require('../helpers/selector')

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return selector({
            android: $(`//android.widget.EditText[contains(@content-desc,"UserName")]`),
            ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }

    get inputPassword () {
        return selector({
            android: $(`//android.widget.EditText[contains(@content-desc,"Password")]`),
            ios: $(`//XCUIElementTypeTextField[@name="Password"]`)
        });
    }

    get btnSubmit () {
        return selector({
            android: $(`//android.widget.Button[contains(@content-desc,'LoginButton')]`),
            ios: $(`//XCUIElementTypeButton[@name="LoginButton"]`)
        })
    }

    get statusLabel(){
        return selector({
            android: $(`//android.widget.TextView[contains(@content-desc,"StatusLabel")]`),
            ios: $(`//XCUIElementTypeStaticText[@name="StatusLabel"]`)
        })
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
