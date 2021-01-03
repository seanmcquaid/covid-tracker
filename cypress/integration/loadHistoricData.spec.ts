import '@testing-library/cypress/add-commands';

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

    cy.get('[disabled=""]').should('have.text', 'Total');
  });

  it('Changing dropdown choice displays new data', () => {
    cy.get('[data-testid=loadingSpinner]').should('not.exist');

    cy.get('.sc-hKgILt').should('have.text', 'Weekly State Data - AL');

    cy.get('[data-testid=dropdown]').select('NY');

    cy.get('.sc-hKgILt').should('have.text', 'Weekly State Data - NY');

    cy.findByText('total').should('be.visible');
  });

  it('Clicking button gets that data set', () => {
    cy.get('[data-testid=loadingSpinner]').should('not.exist');

    cy.get('.sc-iBPRYJ > :nth-child(2)').click();

    cy.get('.sc-iBPRYJ > :nth-child(1)').should('not.be.disabled');

    cy.get('[disabled=""]').should('have.text', 'Positive Cases');

    cy.findByText('positive').should('be.visible');
  });
});
