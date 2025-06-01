describe('Login Page UI Elements', () => {
  beforeEach(() => {
    cy.visit('/session/login');
  });

  it('should display the username input field', () => {
    cy.get('[data-cy="login"]').should('exist').and('be.visible');
  });

  it('should display the password input field', () => {
    cy.get('[data-cy="password"]').should('exist').and('be.visible');
  });

  it('should display the login button', () => {
    cy.get('button#send').should('exist').and('be.visible');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('[data-cy="login"]').type(Cypress.env('login'));
    cy.get('[data-cy="password"]').type(Cypress.env('password'));
    cy.get('button#send').click();

    // Check redirection to home page
    cy.url().should('include', '/home');
//if  we did the login correctly we should be able to see the logo image 
cy.get('[href="https://monsiteweb.com.tn/gestion-conge-test/home"] > img')  });
});
