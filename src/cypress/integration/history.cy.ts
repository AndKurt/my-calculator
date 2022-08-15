import { OPERATOR } from '@constants/operators';

describe('Test for History component', () => {
	beforeEach(() => {
		cy.visit('#/');
	});

	it('Should be heading and list (ul)', () => {
		cy.get('[data-cy="history"]').contains('History');
		cy.get('h2').contains('History');
		cy.get('ul').should('have.length', 1);
	});

	it('Check list of operations in history', () => {
		cy.get(`[data-cy^="calc-btn-${OPERATOR.DOT}"]`).click();
		cy.get('[data-cy="calc-btn-3"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.ADD}"]`).click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.DOT}"]`).click();
		cy.get('[data-cy="calc-btn-2"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.EQUAL}"]`).click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '0.5');
		cy.get('[data-cy="display"]').find('p').should('have.text', '0.5');
		cy.get(`[data-cy^="calc-btn-${OPERATOR.SUBSTRACT}"]`).click();
		cy.get('[data-cy="calc-btn-2"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.EQUAL}"]`).click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '-1.5');
		cy.get('[data-cy="display"]').find('p').should('have.text', '-1.5');
		cy.get('[data-cy="history"]').find('li').should('have.length', 2);
		cy.get('[data-cy="calc-btn-CE"]').click();
		cy.get('[data-cy="history"]').find('li').should('have.length', 0);
	});
});
