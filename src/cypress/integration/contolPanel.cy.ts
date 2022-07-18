export {}

describe('Test for ControlPanel component', () => {
	beforeEach(() => {
		cy.visit('#/')
	})

	it('Should be a button to hide/show history', () => {
		cy.get('[data-cy="control-panel"]').should('be.visible')
		cy.get('[data-cy="toggle-history"]').should('be.visible').should('have.text', 'Hide')
	})

	it('Check toggle-history', () => {
		cy.get('[data-cy="history"]').should('have.class', 'active')
		cy.get('[data-cy="calc-helper"]').should('have.class', 'active')
		cy.get('[data-cy="history-helper"]').should('have.class', 'active')
		cy.get('[data-cy="toggle-history"]').click().should('have.text', 'Show')
		cy.get('[data-cy="history"]').should('not.have.class', 'active')
		cy.get('[data-cy="calc-helper"]').should('not.have.class', 'active')
		cy.get('[data-cy="history-helper"]').should('not.have.class', 'active')
	})
})
