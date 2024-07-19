import "cypress-mailhog";
import "cypress-iframe";
const url = "";

describe("Sprint 2 menjalankan testing terlebih dahulu", () => {
    beforeEach(() => {
        cy.resetDb();
    });
    it("shows a homepage", () => {
        // cy.visit('http://localhost:8000/')
        // /* ==== Generated with Cypress Studio ==== */
        // /* ==== End Cypress Studio ==== */
        // /* ==== Generated with Cypress Studio ==== */
        // cy.get(':nth-child(2) > .form-control').clear('s');
        // cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
        // cy.get(':nth-child(3) > .form-control').clear('p');
        // cy.get(':nth-child(3) > .form-control').type('password');
        // cy.get('.btn').click();
        // cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
        // cy.get('.text-danger').click();
        /* ==== End Cypress Studio ==== */ /* ==== Generated with Cypress Studio ==== */
        cy.visit("http://localhost:8000/");
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(".text-small").click();
        cy.get("#email").clear("s");
        cy.get("#email").type("superadmin@gmail.com");
        cy.get(".btn").click();
        cy.get("#email").clear("s");
        cy.get("#email").type("superadmin@gmail.com");
        cy.get(".btn").click();
        // cy.saveLocalStorage();
        // cy.contains("forgot password");
        cy.visit("http://localhost:8025/#");
        cy.contains("superadmin@gmail.com").click();
        cy.frameLoaded("#preview-html");
        cy.wait(500);
        cy.iframe()
            .find(".button")
            .should("have.text", "Reset Password")
            .invoke("Attr", "target")
            .click();
        cy.get(".button").find("target");
        cy.wait(500);
        cy.visit(url);
        // cy.frameLoaded("#preview-html");
        // cy.get('iframe').iframe(() => {
        //     // Targets the input within the iframe element
        //     cy.scrollTo("bottom");
        //     cy.find('#password')
        //     cy.get('#password').should("have.class", "Masukan Password Baru")
        //   })

        /* ==== Generated with Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */

        // cy.get('#email').clear('s');
        // cy.get('#email').type('superadmin@gmail.com');
        // cy.get('#password').clear('p');
        // cy.get('#password').type('password2');
        // cy.get('#password-confirm').clear('p');
        // cy.get('#password-confirm').type('password2');
        // cy.get('.btn').click();
        /* ==== End Cypress Studio ==== */
    });
});
