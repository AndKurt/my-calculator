import { OPERATOR } from '@constants/operators'

describe('Test for Display component', () => {
	beforeEach(() => {
		cy.visit('#/')
	})

	it('Should render display', () => {
		cy.get('[data-cy="display"]').should('be.visible')
		cy.get('[data-cy="display"]').find('h2').should('have.length', 1).contains('0')
		cy.get('[data-cy="display"]').find('p').should('have.length', 1).should('be.empty')
	})

	it('Check brackets by press buttons and display', () => {
		cy.get(`[data-cy^="calc-btn-${OPERATOR.BRACKET_LEFT}"]`).click()
		cy.get(`[data-cy^="calc-btn-${OPERATOR.BRACKET_RIGHT}"]`).click()
		cy.get('[data-cy="display"]').find('h2').should('have.text', `${OPERATOR.BRACKET_LEFT}0${OPERATOR.BRACKET_RIGHT}`)
		cy.get('[data-cy="display"]').find('p').should('have.text', `${OPERATOR.BRACKET_LEFT}0${OPERATOR.BRACKET_RIGHT}`)
	})

	it('Check numbers buttons, remove 1 charactert and reset buttons by press and display', () => {
		cy.get('[data-cy="calc-btn-1"]').click()
		cy.get('[data-cy="calc-btn-2"]').click()
		cy.get('[data-cy="calc-btn-3"]').click()
		cy.get('[data-cy="calc-btn-4"]').click()
		cy.get('[data-cy="calc-btn-5"]').click()
		cy.get('[data-cy="calc-btn-6"]').click()
		cy.get('[data-cy="calc-btn-7"]').click()
		cy.get('[data-cy="calc-btn-8"]').click()
		cy.get('[data-cy="calc-btn-9"]').click()
		cy.get('[data-cy="calc-btn-0"]').click()
		cy.get('[data-cy="display"]').find('h2').should('have.text', '1234567890')
		cy.get('[data-cy="display"]').find('p').should('have.text', '1234567890')
		cy.get('[data-cy="calc-btn-C"]').click()
		cy.get('[data-cy="display"]').find('h2').should('have.text', '123456789')
		cy.get('[data-cy="display"]').find('p').should('have.text', '123456789')
		cy.get('[data-cy="calc-btn-CE"]').click()
		cy.get('[data-cy="display"]').find('h2').should('have.text', '0')
		cy.get('[data-cy="display"]').find('p').should('be.empty')
	})

	it('Check dot button and display', () => {
		cy.get('[data-cy="calc-btn-1"]').click()
		cy.get(`[data-cy="calc-btn-${OPERATOR.DOT}"]`).click()
		cy.get('[data-cy="calc-btn-3"]').click()
		cy.get('[data-cy="display"]').find('h2').should('have.text', '1.3')
		cy.get('[data-cy="display"]').find('p').should('have.text', '1.3')
		cy.get('[data-cy="calc-btn-CE"]').click()
		cy.get(`[data-cy="calc-btn-${OPERATOR.DOT}"]`).click()
		cy.get('[data-cy="calc-btn-3"]').click()
		cy.get('[data-cy="display"]').find('h2').should('have.text', '0.3')
		cy.get('[data-cy="display"]').find('p').should('have.text', '0.3')
	})
})
