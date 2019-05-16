import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.springboardretail.com";

Given(`I visit Springboard Retail website`, () => {
    cy.visit(url);
});

When(`I navigate to careers page`, () => {
    cy.get('#hs_menu_wrapper_module_146251941106411362 > ul > :nth-child(3)').
    focused().click()
});

Then(`a QA Engineer position should be listed`, () => {
    cy.contains(`QA Engineer`)
});
