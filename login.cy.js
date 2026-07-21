describe('Login Functionality', () => {

    beforeEach(() => {

        cy.visit('https://example.com/login')

    })

    it('Login with valid credentials', () => {

        cy.fixture('users').then((user) => {

            cy.login(
                user.validUser.email,
                user.validUser.password
            )

            cy.url().should('include', '/dashboard')

            cy.contains('Welcome').should('be.visible')

        })

    })

})
