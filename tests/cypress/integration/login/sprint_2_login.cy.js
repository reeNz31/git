describe('case positive melakukan Logiin', () => {
    beforeEach(() => {
        cy.resetDb();
    });

    it.only('test masuk login', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('[data-id="nav-atas"]').click();
        cy.get('[data-id="profileLogout"]').click();
      })

    });

describe('case negative melakukan logiin', () => {
    beforeEach(() => {
        cy.resetDb();
    });

  it('test validate password', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
  })

  it('test validate email', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="buttonLogin"]').click();

  })



});
