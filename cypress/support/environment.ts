import { Before } from "@badeball/cypress-cucumber-preprocessor";
import cypress = require("cypress");

Before (function() {
    cy.visit("https://saucedemo.com")
})