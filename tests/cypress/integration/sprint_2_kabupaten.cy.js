describe("template spec", () => {
    beforeEach(() => {
        cy.resetDb();
    });

    it("01. create kabupaten", () => {
        cy.visit("http://localhost:8000/");

        /* ==== Generated with Cypress Studio ==== */
        cy.visit("http://localhost:8000/");
        cy.get(":nth-child(2) > .form-control").clear("s");
        cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
        cy.get(":nth-child(3) > .form-control").clear("p");
        cy.get(":nth-child(3) > .form-control").type("password");
        cy.get(".btn").click();
        cy.get(".navbar-nav > :nth-child(1) > .nav-link > .fas").click();
        cy.get(":nth-child(5) > .has-dropdown > span").click();
        cy.get(".active > .dropdown-menu > :nth-child(1) > .nav-link").click();
        cy.get(".card-header-action > .btn-icon").click();
        cy.get("#nama_kabupaten").clear("Kabupaten Malang");
        cy.get("#nama_kabupaten").type("Kabupaten Malang");
        cy.get(".btn-primary").click();
        /* ==== End Cypress Studio ==== */
    });

    it("02. edit kabupaten", () => {
        cy.visit("http://localhost:8000/");

        /* ==== Generated with Cypress Studio ==== */
        cy.get(":nth-child(2) > .form-control").clear("superadmin@gmail.com");
        cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
        cy.get(":nth-child(3) > .form-control").clear("p");
        cy.get(":nth-child(3) > .form-control").type("password");
        cy.get(".btn").click();
        cy.get(".navbar-nav > :nth-child(1) > .nav-link > .fas").click();
        cy.get(":nth-child(5) > .has-dropdown > span").click();
        cy.get(".active > .dropdown-menu > :nth-child(1) > .nav-link").click();
        cy.get(".card-header-action > .btn-icon").click();
        cy.get("#nama_kabupaten").clear("Kabupaten Malang");
        cy.get("#nama_kabupaten").type("Kabupaten Malang");
        cy.get(".btn-primary").click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(":nth-child(3) > .text-right > .d-flex > .btn-info").click();
        cy.get("#nama_kabupaten").clear("Kabupaten Malang ");
        cy.get("#nama_kabupaten").type("Kabupaten Malang Raya");
        cy.get(".btn-primary").click();
        /* ==== End Cypress Studio ==== */
    });

    it("03. hapus kabupaten", () => {
        cy.visit("http://localhost:8000/");

        /* ==== Generated with Cypress Studio ==== */
        cy.get(":nth-child(2) > .form-control").clear("superadmin@gmail.com");
        cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
        cy.get(":nth-child(3) > .form-control").clear("p");
        cy.get(":nth-child(3) > .form-control").type("password");
        cy.get(".btn").click();
        cy.get(".navbar-nav > :nth-child(1) > .nav-link > .fas").click();
        cy.get(":nth-child(5) > .has-dropdown > span").click();
        cy.get(".active > .dropdown-menu > :nth-child(1) > .nav-link").click();
        cy.get(".card-header-action > .btn-icon").click();
        cy.get("#nama_kabupaten").clear("Kabupaten Malang");
        cy.get("#nama_kabupaten").type("Kabupaten Malang");
        cy.get(".btn-primary").click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(":nth-child(3) > .text-right > .d-flex > .btn-info").click();
        cy.get("#nama_kabupaten").clear("Kabupaten Malang ");
        cy.get("#nama_kabupaten").type("Kabupaten Malang Raya");
        cy.get(".btn-primary").click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get("#del-2 > .btn").click();
        cy.get(
            "#fire-modal-2 > .modal-dialog > .modal-content > .modal-footer > .btn-danger"
        ).click();
        /* ==== End Cypress Studio ==== */
    });

    it.only("03. pencarian kabupaten", () => {
        cy.visit("http://localhost:8000/");

        /* ==== Generated with Cypress Studio ==== */
        cy.get(":nth-child(2) > .form-control").clear("superadmin@gmail.com");
        cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
        cy.get(":nth-child(3) > .form-control").clear("p");
        cy.get(":nth-child(3) > .form-control").type("password");
        cy.get(".btn").click();
        cy.get(".navbar-nav > :nth-child(1) > .nav-link > .fas").click();
        cy.get(":nth-child(5) > .has-dropdown > span").click();
        cy.get(".active > .dropdown-menu > :nth-child(1) > .nav-link").click();
        cy.get(".card-header-action > .btn-icon").click();
        cy.get("#nama_kabupaten").clear("Kabupaten Malang");
        cy.get("#nama_kabupaten").type("Kabupaten Malang");
        cy.get(".btn-primary").click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(":nth-child(3) > .text-right > .d-flex > .btn-info").click();
        cy.get("#nama_kabupaten").clear("Kabupaten Malang ");
        cy.get("#nama_kabupaten").type("Kabupaten Malang Raya");
        cy.get(".btn-primary").click();
        /* ==== End Cypress Studio ==== */

        /* ==== Generated with Cypress Studio ==== */
        cy.get(".search").click();
        cy.get("#nama_kabupaten").clear("Kabupaten Malang Raya");
        cy.get("#nama_kabupaten").type("Kabupaten Malang Raya");
        cy.get("#search > .text-right > .btn-primary").click();
        /* ==== End Cypress Studio ==== */
    });
});
