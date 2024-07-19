describe('case positive', () => {
    beforeEach(() => {
    cy.resetDb();
    })
    it('Export Excel jenis usaha', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
              setTimeout(function () { doc.location.reload() }, 500)
            })
            cy.get('[data-id="export"]').click();
        })
    });
})
