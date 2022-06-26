// import { LoginTask } from "../tasks/LoginTask";
import { Given, When, Then, Step } from "@badeball/cypress-cucumber-preprocessor"
import { actor } from "../actor/Actor"

Given("the user is on the swaglabs website", () => {
    actor.navigateTo("https://saucedemo.com")      
});

Given(`the user is logged in with details {string} and {string} as their username and password`, function (username: string, password: string) {
    Step(this, `the user enters '${username}' as a username`);
    Step(this, `the user enters '${password}' as a password`);
    Step(this, `the user clicks the login button`);
    actor.isLoggedIn()
});

When("the user enters {string} as a username", (username: string) => { 
    actor.loginTask.enterUsername(username)
});

When("the user enters {string} as a password", (password: string) => {
    actor.loginTask.enterPassword(password)
});

When("the user clicks the login button", () => {
    actor.loginTask.clickLoginButton()
})

Then("an error banner displays the text {string}", (errorText: string) => {
    actor.loginTask.checkErrorBanner(errorText)
});


