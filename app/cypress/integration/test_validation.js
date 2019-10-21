context('basic form validation', () => {
  it('should validate the form', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input#submit').click();
    cy.get('input[name="email"] + span').contains(
      'Please enter an email address'
    );
    cy.get('input[name="password"] + span').contains('Please enter a password');
    cy.get('select[name="colour"] + span').contains('Please pick a colour');
    cy.get('label[for="donkey"] + span').contains(
      'Please pick at least two animals.'
    );
    cy.get('input[name="bear"]').click();
    cy.get('label[for="donkey"] + span').contains(
      'Please pick at least two animals.'
    );
    cy.get('input[name="tiger"]').click();
    cy.get('input#submit').click();
    cy.get('input[name="tiger_type"] + span').contains(
      'Please enter the type of your tiger.'
    );
    cy.get('input[name="password"]').type('1234');
    cy.get('input[name="password"] + span').contains(
      'Your password must be at least 8 characters long.'
    );
  });
});
