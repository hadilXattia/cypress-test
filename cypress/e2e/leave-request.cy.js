describe('Leave Request Creation', () => {
  beforeEach(() => {
    // Log in before each test
    cy.visit('/session/login');
    cy.get('[data-cy="login"]').type(Cypress.env('login'));
    cy.get('[data-cy="password"]').type(Cypress.env('password'));
    cy.get('button#send').click();

    // Go to leave request page
    cy.url().should('include', '/home');
    cy.visit('/leaves/create'); // url of leave request
  });

  it('should display all form fields and buttons', () => {
  cy.get('select#type').should('be.visible');
     
    cy.get('input#viz_startdate').should('be.visible');
    cy.get('select#startdatetype').should('be.visible');
      cy.get('input#viz_enddate').should('be.visible');
    cy.get('select#enddatetype').should('be.visible');
   cy.get('input#duration').should('be.visible').and('have.attr', 'readonly');
    cy.get('textarea[name="cause"]').should('exist');

  cy.get('button[name="status"][value="1"]').should('exist'); // Planned
  cy.get('button[name="status"][value="2"]').should('exist'); // Requested
  cy.get('a.btn-danger').contains('Cancel').should('exist');
  });

  it('should allow selecting leave type and entering dates', () => {
cy.get('#select2-type-container');
cy.get('input#viz_startdate').invoke('removeAttr', 'readonly').type('10/06/2025');

      cy.get('select#startdatetype').select('Morning');

    cy.get('input#viz_enddate').invoke('removeAttr', 'readonly').type('12/06/2025');

    cy.get('select#enddatetype').select('Afternoon');

    cy.get('input#duration').invoke('val').should('not.be.empty');
  });

   it('should allow entering cause and submitting the request', () => {
  cy.get('textarea[name="cause"]').type('Vacances');
  cy.get('button[name="status"][value="2"]').click();
  cy.url().should('include', '/leaves');
  });

  it('should cancel without saving and redirect', () => {
 cy.get('a.btn-danger').contains('Cancel').click();
  cy.url().should('not.include', '/conge/nouveau');
  });
});
