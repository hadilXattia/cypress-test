describe('Language Selection Functionality', () => {
  beforeEach(() => {
    cy.visit('/session/login');
  });

  it('should switch from French to English and reflect the change', () => {
    // Select French
    cy.get('#select2-language-container').click();
    cy.get('.select2-results__option').contains('Français').click();
    cy.contains('Identifiant').should('be.visible');
cy.contains('Mot de passe').should('be.visible');
    // Select English
cy.get('#select2-language-container').click();
cy.get('.select2-results__option').contains('English').click();
cy.contains('Login').should('be.visible');
cy.contains('Password').should('be.visible');
  });

});
