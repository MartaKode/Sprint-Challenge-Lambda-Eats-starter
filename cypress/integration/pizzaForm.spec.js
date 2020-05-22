describe('UserForm inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/') //Change that line to :3000 later when its not occupied
        cy.url().should('include', 'localhost')
    })

    it('can navigate to ordering pizza', () => {
        cy.get('button').contains('Pizza?')
            .click()
    })

    it('can type a name', () => {
        cy.get('input[name="name"]')
            .type('I am a Pizza')
            .should('have.value', 'I am a Pizza')
    })

    it('can add special instructions', () => {
        cy.get('textarea[name="instructions"]')
            .type('Bring me my pizza')
            .should('have.value', 'Bring me my pizza')
    })

    it('can select multiple toppings', () => {
        cy.get('input[name="Mushrooms"]').check()
        cy.get('input[name="Bacon"]').check()
        cy.get('input[name="Peppers"]').check()
        cy.get('input[name="Olives"]').check()
        cy.get('input[name="Chicken"]').check()
    })

    it('can submit form', () => {
cy.contains('submit').should('be.disabled')

cy.get('input[value="garlic"]').click()

cy.get('select[name="pizzaSize"]')
.select('medium')

cy.contains('submit').should('be.not.disabled')
.click()
    })
})
