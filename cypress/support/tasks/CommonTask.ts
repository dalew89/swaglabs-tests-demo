import { ProductScreen } from "../screens/ProductScreen"

export class CommonTask {
    navigateTo(url: string,) {
        console.log(`navigating to ${url}`)
        cy.visit(url)
    }

    isLoggedIn() {
        cy.get(ProductScreen.sortDropdown).should("be.visible")
    }
}
