import { ProductScreen } from "../screens/ProductScreen";
import { CommonTask } from "./CommonTask";

export class ProductTask {
    readonly commonTask: CommonTask = new CommonTask();

    getItemDescription(itemName: string, description: string) {
        cy.get((ProductScreen.inventoryItemName)).contains(itemName)
            .parentsUntil(ProductScreen.inventoryItemBox)
            .within(() => {
                cy.get(ProductScreen.itemDescription).should("have.text", description) // find the text within the item description
            })
    }

    getItemPrice(itemName: string, price: string) {
        cy.get((ProductScreen.inventoryItemName)).contains(itemName)
            .parentsUntil(ProductScreen.inventoryItemBox)
            .within(() => {
                cy.get(ProductScreen.itemPrice).should("have.text", price) // find the text within the item description
            })
    }
}
