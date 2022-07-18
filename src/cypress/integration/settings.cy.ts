export {}

describe('Test for setting page', () => {
	beforeEach(() => {
		cy.visit('#/settings')
	})

	it('Should render settings page', () => {
		cy.get('h2').contains('Settings')
		cy.get('h3').contains('Switch Theme')
	})

	it('Should be select change theme and button to clear all', () => {
		cy.get('select').should('have.length', 1)
		cy.get('option').should('have.length', 2)
		cy.get('option').should('have.value', 'lightTheme')
		cy.get('button').should('have.text', 'Clear All History')
	})

	it('Should work theme select', () => {
		cy.get('select').select('Dark Theme').should('have.value', 'darkTheme')
		cy.get('h2').should('have.css', 'color', 'rgb(255, 255, 255)')
		cy.get('h3').should('have.css', 'color', 'rgb(255, 255, 255)')
		cy.get('header').should('have.css', 'background-color', 'rgb(242, 242, 242)')
		cy.get('#root').should('have.css', 'background-color', 'rgb(0, 0, 0)')
	})

	it('Should work clear history button and change theme to default', () => {
		cy.get('select').select('Dark Theme').should('have.value', 'darkTheme')
		cy.get('button').click()
		cy.get('select').should('have.value', 'lightTheme')
	})
})
