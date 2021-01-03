describe('Load Historic Data', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Initially loads AL historic Data', () => {
    cy.get('[data-testid=loadingSpinner]').should('not.exist');

    cy.get('.sc-hKgILt').should('have.text', 'Weekly State Data - AL');

    cy.get('svg > [width="1000"]').should('be.visible');
  });

  it('Initially starts with total cases information', () => {
    cy.get('[data-testid=loadingSpinner]').should('not.exist');

    cy.get('text > [x="28"]').should('be.visible');
  });
});
