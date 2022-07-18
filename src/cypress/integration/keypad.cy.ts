export {}

describe('Test for Keypad component', () => {
	beforeEach(() => {
		cy.visit('#/')
	})

	it('Should render keypad and all (22) calculator buttons', () => {
		cy.get('[data-cy="keypad"]').should('be.visible')
		cy.get('*[data-cy^="calc-btn-"]').should('have.length', 22)
	})
})
