import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

    const email = 'adam@futrli.com'
    const password = 'Password1!'

When('I navigate to the QA page', () => {
  cy.visit('http://do-qa.futrli.com')
});

When('I enter an email into the email field', () => {
  cy.get('input[name="username"]')
    .type(email)
});

When('I enter a password into the password field', () => {
  cy.get('input[name="password"]')
    .type(password)
});

When('I click the submit button', () => {
  cy.get('button[type="submit"]').click()
});

Then('I see I am on the organisation select page', () => {
  cy.url().should('include', '9bad03f5-955f-4092-bd9c-1b7e778afd30/organisations')
});

