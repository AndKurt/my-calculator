export {};

describe('Test for Header component', () => {
	beforeEach(() => {
		cy.visit('#/');
	});

	it('Should be buttons to navigation', () => {
		cy.get('header').contains('Calculator App');
		cy.get('[data-cy="Home"]').should('have.text', 'Home');
		cy.get('[data-cy="Home Class"]').should('have.text', 'Home Class');
		cy.get('[data-cy="Settings"]').should('have.text', 'Settings');
	});
});
