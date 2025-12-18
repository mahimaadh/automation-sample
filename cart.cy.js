describe('Cart Functionality', () => {
  it('should add product to cart', () => {
    cy.visit('/products')

    cy.get('.add-to-cart').first().click()
    cy.get('.cart-count').should('contain', '1')

    cy.visit('/cart')
    cy.contains('Product').should('be.visible')
  })
})
