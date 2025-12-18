describe('Login Functionality', () => {

  it('Should login with valid credentials', () => {
    cy.visit('/login')
    cy.get('#email').type('test@gmail.com')
    cy.get('#password').type('password123')
    cy.get('#login').click()
    cy.contains('Dashboard').should('be.visible')
  })

  it('Should show error for invalid credentials', () => {
    cy.visit('/login')
    cy.get('#email').type('test@gmail.com')
    cy.get('#password').type('wrongpass')
    cy.get('#login').click()
    cy.contains('Invalid login credentials').should('be.visible')
  })

})
