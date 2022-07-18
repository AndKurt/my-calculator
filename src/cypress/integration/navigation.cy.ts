export {}

describe('Test for setting page', () => {
	beforeEach(() => {
		cy.visit('#/')
	})

	it('Should navigate from HomePage to HomePageClass', () => {
		cy.get('[data-cy="Home Class"]').click()
		cy.url().should('include', '/home-class')
	})

	it('Should navigate from HomePage to SettingsPage', () => {
		cy.get('[data-cy="Home Class"]').click()
		cy.url().should('include', '/home-class')
		cy.get('[data-cy="Settings"]').click()
		cy.url().should('include', '/settings')
	})

	it('Should navigate from SettingsPage to HomePage', () => {
		cy.get('[data-cy="Home"]').click()
		cy.url().should('eq', Cypress.config().baseUrl + '/#/')
	})
})
