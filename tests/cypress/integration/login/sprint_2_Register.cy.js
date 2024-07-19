import "cypress-mailhog"
import "cypress-iframe"

describe('case positive register', () => {
    beforeEach(() => {
        cy.resetDb();
    });
    it("register", () => {
        cy.visit("/register");
        cy.get('[data-id="nama-full"]').type("Bili Oke");
        cy.get('[data-id="email"]').type("biliokemania@gmail.com");
        cy.get('[data-id="password"]').type("password");
        cy.get('[data-id="password-konfirmasi"]').type("password");
        cy.get('[data-id="submit"]').click();
        cy.contains("Please Verify Your Email");
        cy.visit("http://localhost:8025");
        cy.contains("biliokemania@gmail.com").click();
        cy.frameLoaded("#preview-html");
        cy.wait(500);
        cy.iframe()
            .find(".button")
            .should("have.text", "Verify Email Address")
            .invoke("removeAttr", "target")
            .click();
        cy.visit("http://localhost:8000/dashboard");
        cy.get('[data-id="nav-atas"]').click();
    });
})

describe('case negative register', () => {
    beforeEach(() => {
        cy.resetDb();
    });

    it("register input nama full kosong", () => {
        cy.visit("/register");
        cy.get('[data-id="email"]').type("biliokemania@gmail.com");
        cy.get('[data-id="password"]').type("password");
        cy.get('[data-id="password-konfirmasi"]').type("password");
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
    });

    it("register input email kosong", () => {
        cy.visit("/register");
        cy.get('[data-id="nama-full"]').type("Bili Oke");
        cy.get('[data-id="password"]').type("password");
        cy.get('[data-id="password-konfirmasi"]').type("password");
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
    });

    it("register input email tidak memakai @ ", () => {
        cy.visit("/register");
        cy.get('[data-id="nama-full"]').type("Bili Oke");
        cy.get('[data-id="email"]').type("biliokemaniagmail.com");
        cy.get('[data-id="password"]').type("password");
        cy.get('[data-id="password-konfirmasi"]').type("password");
        cy.get('[data-id="submit"]').click();
        cy.get('input:invalid').invoke('prop', 'validationMessage');
    });

    it("register input password kosong", () => {
        cy.visit("/register");
        cy.get('[data-id="nama-full"]').type("Bili Oke");
        cy.get('[data-id="email"]').type("biliokemania@gmail.com");
        cy.get('[data-id="password-konfirmasi"]').type("password");
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
    });

    it("register input password konfirmasi kosong", () => {
        cy.visit("/register");
        cy.get('[data-id="nama-full"]').type("Bili Oke");
        cy.get('[data-id="email"]').type("biliokemania@gmail.com");
        cy.get('[data-id="password"]').type("password");
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
    });
})
