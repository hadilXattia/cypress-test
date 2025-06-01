describe('Login Page UI Elements', () => {
  beforeEach(() => {
    cy.visit('/session/login');
  });




  it('login fails when the password is wrong', () => {
  cy.get('[data-cy="login"]').type(Cypress.env('login'));
  cy.get('[data-cy="password"]').type('wrongpassword'); // Use a clearly wrong password
  cy.get('button#send').click();

  // Assert that the error message is shown
  cy.contains('Invalid login id or password').should('be.visible');
});


});
