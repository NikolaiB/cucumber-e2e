import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.springboardretail.com";

Given(`I visit Springboard Retail website`, () => {
    cy.visit(url);
});

When(`I navigate to careers page`, () => {
    cy.contains('Career').
    click()
});

Then(`a QA Engineer position should be listed`, () => {
    cy.should('have.text', 'QA Engineer')
});
