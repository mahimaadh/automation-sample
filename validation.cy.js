describe('Form Validation', () => {

  it('Should show validation message for empty email', () => {
    cy.visit('/login')
    cy.get('#password').type('password123')
    cy.get('#login').click()
    cy.contains('Email is required').should('be.visible')
  })

})
