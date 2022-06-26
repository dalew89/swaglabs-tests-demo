import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { actor } from "../actor/Actor";


Then("the user is on the Product page", () => {
    actor.commonTask.isLoggedIn()
});