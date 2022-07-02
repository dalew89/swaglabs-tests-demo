// import { LoginTask } from "../tasks/LoginTask";
import { Given, When, Then, Step } from "@badeball/cypress-cucumber-preprocessor"
import { actor } from "../actor/Actor"

Given("the user is on the swaglabs login page", () => {
    actor.navigateTo("https://saucedemo.com")      
});

When("the user logs in with a {string} account", (name:string) =>{
    let userData = actor.user.getUserByName(name)
    actor.loginTask.login(userData!.username, userData!.password)

})

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


