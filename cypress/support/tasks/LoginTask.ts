import { LoginScreen } from "../screens/LoginScreen"
import { CommonTask } from "./CommonTask"

export class LoginTask {
    readonly commonTask: CommonTask = new CommonTask();

    enterUsername(username: string)  {
        cy.get(LoginScreen.usernameInput).type(username);
    }

    enterPassword(password: string) {
        cy.get(LoginScreen.passwordInput).type(password);
    }

    clickLoginButton() {
        cy.get(LoginScreen.loginButton).click();
    }

    login(username: string, password: string) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton()
    }

    checkErrorBanner(error_text: string ) {
       cy.get(LoginScreen.errorBanner)
       .should("be.visible")
       .should("have.text", error_text)
     }
}
