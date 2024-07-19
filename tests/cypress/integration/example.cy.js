import "cypress-mailhog";
import "cypress-iframe";

describe("Example Test", () => {
    beforeEach(() => {
        cy.resetDb();
    });

    it("shows a homepage", () => {
        cy.visit("/register");
        cy.mhDeleteAll();
        cy.get("#first_name").clear("P");
        cy.get("#first_name").type("Putra Prima Arhandi");
        cy.get("#email").clear();
        cy.get("#email").type("putraprima@gmail.com");
        cy.get("#password").clear();
        cy.get("#password").type("password");
        cy.get("#password_confirmation").clear();
        cy.get("#password_confirmation").type("password");
        cy.get(".btn").click();
        cy.contains("Please Verify Your Email");
        cy.visit(Cypress.env("mailHogUrl"));
        cy.contains("putraprima@gmail.com").click();
        cy.frameLoaded("#preview-html");
        cy.wait(500);
        cy.iframe()
            .find(".button")
            .should("have.text", "Verify Email Address")
            .invoke("removeAttr", "target")
            .click();
        cy.visit("http://localhost:8000/dashboard");
        cy.get(".nav-link > .d-sm-none").click();
        cy.get(".nav-link > .d-sm-none").should(
            "have.text",
            "Hi, Putra Prima Arhandi"
        );

        /* ==== End Cypress Studio ==== */
    });
});
