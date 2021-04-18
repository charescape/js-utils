describe('My 1st Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

/*

1. Visit: https://example.cypress.io
2. Find the element with content: type
3. Click on it
4. Get the URL
5. Assert it includes: /commands/actions
6. Get the input with the .action-email class
7. Type fake@email.com into the input
8. Assert the input reflects the new value

 */
describe('My 3rd Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')

    // cy.contains('type')
    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
