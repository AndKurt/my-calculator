import { OPERATOR } from '@constants/operators';

describe('Test for Math operations component', () => {
	beforeEach(() => {
		cy.visit('#/');
	});

	it('Check delete 1 symbol button', () => {
		cy.get('[data-cy="calc-btn-1"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.ADD}"]`).click();
		cy.get('[data-cy="calc-btn-2"]').click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '1+2');
		cy.get('[data-cy="display"]').find('p').should('have.text', '1+2');
		cy.get('[data-cy="calc-btn-C"]').click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '1+');
		cy.get('[data-cy="display"]').find('p').should('have.text', '1+');
		cy.get('[data-cy="calc-btn-CE"]').click();
	});

	it('Check simple math operation ADD', () => {
		cy.get('[data-cy="calc-btn-1"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.ADD}"]`).click();
		cy.get('[data-cy="calc-btn-2"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.EQUAL}"]`).click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '3');
		cy.get('[data-cy="display"]').find('p').should('have.text', '3');
		cy.get('[data-cy="calc-btn-CE"]').click();
	});

	it('Check simple math operation ADD with DOT operator', () => {
		cy.get(`[data-cy^="calc-btn-${OPERATOR.DOT}"]`).click();
		cy.get('[data-cy="calc-btn-3"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.ADD}"]`).click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.DOT}"]`).click();
		cy.get('[data-cy="calc-btn-2"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.EQUAL}"]`).click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '0.5');
		cy.get('[data-cy="display"]').find('p').should('have.text', '0.5');
		cy.get('[data-cy="calc-btn-CE"]').click();
	});

	it('Check simple math operation SUBSTRACT', () => {
		cy.get('[data-cy="calc-btn-2"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.SUBSTRACT}"]`).click();
		cy.get('[data-cy="calc-btn-1"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.EQUAL}"]`).click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '1');
		cy.get('[data-cy="display"]').find('p').should('have.text', '1');
		cy.get('[data-cy="calc-btn-CE"]').click();
	});

	it('Check simple math operation DEVIDE', () => {
		cy.get('[data-cy="calc-btn-4"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.DEVIDE}"]`).click();
		cy.get('[data-cy="calc-btn-2"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.EQUAL}"]`).click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '2');
		cy.get('[data-cy="display"]').find('p').should('have.text', '2');
		cy.get('[data-cy="calc-btn-CE"]').click();
	});

	it('Check simple math operation MULTIPLE', () => {
		cy.get('[data-cy="calc-btn-2"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.MULTIPLE}"]`).click();
		cy.get('[data-cy="calc-btn-3"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.EQUAL}"]`).click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '6');
		cy.get('[data-cy="display"]').find('p').should('have.text', '6');
		cy.get('[data-cy="calc-btn-CE"]').click();
	});

	it('Check simple math operation PERSANTAGE', () => {
		cy.get('[data-cy="calc-btn-7"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.PERCENTAGE}"]`).click();
		cy.get('[data-cy="calc-btn-2"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.EQUAL}"]`).click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '1');
		cy.get('[data-cy="display"]').find('p').should('have.text', '1');
		cy.get('[data-cy="calc-btn-CE"]').click();
	});

	it('Check expression', () => {
		cy.get(`[data-cy^="calc-btn-${OPERATOR.BRACKET_LEFT}"]`).click();
		cy.get('[data-cy="calc-btn-1"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.ADD}"]`).click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.BRACKET_LEFT}"]`).click();
		cy.get('[data-cy="calc-btn-2"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.ADD}"]`).click();
		cy.get('[data-cy="calc-btn-3"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.BRACKET_RIGHT}"]`).click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.SUBSTRACT}"]`).click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.BRACKET_LEFT}"]`).click();
		cy.get('[data-cy="calc-btn-2"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.MULTIPLE}"]`).click();
		cy.get('[data-cy="calc-btn-3"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.SUBSTRACT}"]`).click();
		cy.get('[data-cy="calc-btn-1"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.EQUAL}"]`).click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '1');
		cy.get('[data-cy="display"]').find('p').should('have.text', '1');
		cy.get('[data-cy="calc-btn-CE"]').click();
	});

	it('Check flip sign operator', () => {
		cy.get('[data-cy="calc-btn-2"]').click();
		cy.get(`[data-cy^="calc-btn-${OPERATOR.ADD}"]`).click();
		cy.get('[data-cy="calc-btn-3"]').click();
		cy.get('[data-cy="calc-btn-±"]').click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '-(2+3)');
		cy.get('[data-cy="display"]').find('p').should('have.text', '-(2+3)');
		cy.get(`[data-cy^="calc-btn-${OPERATOR.EQUAL}"]`).click();
		cy.get('[data-cy="display"]').find('h2').should('have.text', '-5');
		cy.get('[data-cy="display"]').find('p').should('have.text', '-5');
		cy.get('[data-cy="calc-btn-CE"]').click();
	});
});
