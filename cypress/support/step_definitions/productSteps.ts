import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { actor } from "../actor/Actor";

Then("the description of the {string} is {string}", (item: string, description: string) => {
    actor.productTask.getItemDescription(item, description);
})

Then("the price of the {string} is {string}", (itemName: string, price: string) => {
    actor.productTask.getItemPrice(itemName, price);
})
