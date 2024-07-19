import "cypress-mailhog";
import "cypress-iframe";
const getIframeDocument = () => {
    return cy
    .iframe()
  }


describe('case positive', () => {
    beforeEach(() => {
        cy.resetDb();
    });
    it(" Sukses Reset Password", () => {
        cy.visit('http://localhost:8000/');
        cy.get('.text-small').click();
        cy.get('[data-id="inputEmailForgotPassword"]').clear('superadmin@gmail.com');
        cy.get('[data-id="inputEmailForgotPassword"]').type('superadmin@gmail.com');
        cy.get('.btn').click();
        cy.contains("Forgot Password");
        cy.visit('http://localhost:8025/#');
        cy.contains("superadmin@gmail.com").click();
        cy.frameLoaded("#preview-html");
        cy.wait(500);
        getIframeDocument().find(".button").contains("Reset Password").invoke("attr", "target", "_blank").then(function($e1) {const url = $e1.prop('href')
            cy.visit(url)
            cy.get('[data-id="inputPasswordResetPassword"]').click().type('test1234');
            cy.get('[data-id="inputPasswordConfirmResetPassword"]').click().type('test1234');
            cy.get('[data-id="buttonConfirmResetPassword"]').click();
            cy.visit('http://localhost:8000/');
        })
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('test1234');
        cy.get('.btn').click();
    })
});

describe('case negative', () => {
    beforeEach(() => {
        cy.resetDb();
    });
    it("testing forgot password input Semua Kosong", () => {
        cy.visit('http://localhost:8000/');
        cy.get('.text-small').click();
        cy.get('[data-id="inputEmailForgotPassword"]').clear('superadmin@gmail.com');
        cy.get('[data-id="inputEmailForgotPassword"]').type('superadmin@gmail.com');
        cy.get('.btn').click();
        cy.contains("Forgot Password");
        cy.visit('http://localhost:8025/#');
        cy.contains("superadmin@gmail.com").click();
        cy.frameLoaded("#preview-html");
        cy.wait(500);
        getIframeDocument().find(".button").contains("Reset Password").invoke("attr", "target", "_blank").then(function($e1) {const url = $e1.prop('href')
            cy.visit(url)
            cy.get('[data-id="inputEmailResetPassword"]').clear();
            cy.get('[data-id="buttonConfirmResetPassword"]').click();
            cy.get('input:invalid').invoke('prop', 'validationMessage')
            .should('equal', 'Harap isi bidang ini.')
        })
    })

    it("testing forgot password input Email diisi dengan format salah", () => {
        cy.visit('http://localhost:8000/');
        cy.get('.text-small').click();
        cy.get('[data-id="inputEmailForgotPassword"]').clear('superadmin@gmail.com');
        cy.get('[data-id="inputEmailForgotPassword"]').type('superadmin@gmail.com');
        cy.get('.btn').click();
        cy.contains("Forgot Password");
        cy.visit('http://localhost:8025/#');
        cy.contains("superadmin@gmail.com").click();
        cy.frameLoaded("#preview-html");
        cy.wait(500);
        getIframeDocument().find(".button").contains("Reset Password").invoke("attr", "target", "_blank").then(function($e1) {const url = $e1.prop('href')
            cy.visit(url)
            cy.get('[data-id="inputEmailResetPassword"]').clear();
            cy.get('[data-id="inputEmailResetPassword"]').type('okeoke123')
            cy.get('[data-id="buttonConfirmResetPassword"]').click();
            cy.get('input:invalid').invoke('prop', 'validationMessage');
        })
    })
    it("testing forgot password input Email tidak diisi, password dan password confirm diisi", () => {
        cy.visit('http://localhost:8000/');
        cy.get('.text-small').click();
        cy.get('[data-id="inputEmailForgotPassword"]').clear('superadmin@gmail.com');
        cy.get('[data-id="inputEmailForgotPassword"]').type('superadmin@gmail.com');
        cy.get('.btn').click();
        cy.contains("Forgot Password");
        cy.visit('http://localhost:8025/#');
        cy.contains("superadmin@gmail.com").click();
        cy.frameLoaded("#preview-html");
        cy.wait(500);
        getIframeDocument().find(".button").contains("Reset Password").invoke("attr", "target", "_blank").then(function($e1) {const url = $e1.prop('href')
            cy.visit(url)
            cy.get('[data-id="inputEmailResetPassword"]').clear();
            cy.get('[data-id="inputPasswordResetPassword"]').click().type('test1234');
            cy.get('[data-id="inputPasswordConfirmResetPassword"]').click().type('test1234');
            cy.get('[data-id="buttonConfirmResetPassword"]').click();
            cy.get('input:invalid').invoke('prop', 'validationMessage')
            .should('equal', 'Harap isi bidang ini.')
        })
    })
    it("testing input password input Email disii, password dan password confirm tidak diisi", () => {
        cy.visit('http://localhost:8000/');
        cy.get('.text-small').click();
        cy.get('[data-id="inputEmailForgotPassword"]').clear('superadmin@gmail.com');
        cy.get('[data-id="inputEmailForgotPassword"]').type('superadmin@gmail.com');
        cy.get('.btn').click();
        cy.contains("Forgot Password");
        cy.visit('http://localhost:8025/#');
        cy.contains("superadmin@gmail.com").click();
        cy.frameLoaded("#preview-html");
        cy.wait(500);
        getIframeDocument().find(".button").contains("Reset Password").invoke("attr", "target", "_blank").then(function($e1) {const url = $e1.prop('href')
            cy.visit(url)
            cy.get('[data-id="buttonConfirmResetPassword"]').click();
            cy.get('input:invalid').invoke('prop', 'validationMessage')
            .should('equal', 'Harap isi bidang ini.')
        })
    })
    it("testing input password input Email dan password disii, password confirm tidak diisi", () => {
        cy.visit('http://localhost:8000/');
        cy.get('.text-small').click();
        cy.get('[data-id="inputEmailForgotPassword"]').clear('superadmin@gmail.com');
        cy.get('[data-id="inputEmailForgotPassword"]').type('superadmin@gmail.com');
        cy.get('.btn').click();
        cy.contains("Forgot Password");
        cy.visit('http://localhost:8025/#');
        cy.contains("superadmin@gmail.com").click();
        cy.frameLoaded("#preview-html");
        cy.wait(500);
        getIframeDocument().find(".button").contains("Reset Password").invoke("attr", "target", "_blank").then(function($e1) {const url = $e1.prop('href')
            cy.visit(url)
            cy.get('[data-id="buttonConfirmResetPassword"]').click();
            cy.get('[data-id="inputPasswordResetPassword"]').click().type('test1234');
            cy.get('input:invalid').invoke('prop', 'validationMessage')
            .should('equal', 'Harap isi bidang ini.')
        })
    })
    it("testing input password input Email dan password disii, password confirm beda", () => {
        cy.visit('http://localhost:8000/');
        cy.get('.text-small').click();
        cy.get('[data-id="inputEmailForgotPassword"]').clear('superadmin@gmail.com');
        cy.get('[data-id="inputEmailForgotPassword"]').type('superadmin@gmail.com');
        cy.get('.btn').click();
        cy.contains("Forgot Password");
        cy.visit('http://localhost:8025/#');
        cy.contains("superadmin@gmail.com").click();
        cy.frameLoaded("#preview-html");
        cy.wait(500);
        getIframeDocument().find(".button").contains("Reset Password").invoke("attr", "target", "_blank").then(function($e1) {const url = $e1.prop('href')
            cy.visit(url)
            cy.get('[data-id="inputPasswordResetPassword"]').click().type('test1234');
            cy.get('[data-id="inputPasswordConfirmResetPassword"]').click().type('test123456');
            cy.get('[data-id="buttonConfirmResetPassword"]').click();
            cy.get('input:invalid').invoke('prop', 'validationMessage')
            .should('equal', 'Harap isi bidang ini.')
        })
    })
});
