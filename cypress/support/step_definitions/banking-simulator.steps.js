Given("I'm bank account holder", () => {
  cy.visit('http://localhost:8000/')
})

When('I view the home page', linkLabel => {
  cy.verifyAvailableOfBankingFeature(linkLabel)
})

Then('I should see my banking account information', () => {

})
