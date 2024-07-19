describe("template spec", () => {
    beforeEach(() => {
        cy.resetDb();
    });

    it("01. create jenis usaha", () => {
        cy.visit("http://localhost:8000/");

        /* ==== Generated with Cypress Studio ==== */
        cy.get(":nth-child(2) > .form-control").clear("superadmin@gmail.com");
        cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
        cy.get(":nth-child(3) > .form-control").clear("p");
        cy.get(":nth-child(3) > .form-control").type("password");
        cy.get(".btn").click();

        /* ==== Generated with Cypress Studio ==== */
        cy.get(".navbar-nav > :nth-child(1) > .nav-link > .fas").click();
        cy.get(":nth-child(5) > .has-dropdown > span").click();
        cy.get(".active > .dropdown-menu > :nth-child(4) > .nav-link").click();
        cy.get(".card-header-action > .btn-icon").click();
        cy.get("#nama_jenis_usaha").clear("Ketela Pisang");
        cy.get("#nama_jenis_usaha").type("Ketela Pisang");
        cy.get(".btn-primary").click();
        cy.get(":nth-child(10) > .page-link").click();
        /* ==== End Cypress Studio ==== */
    });

    it.only("02. update jenis usaha", () => {
        cy.visit("http://localhost:8000/");

        /* ==== Generated with Cypress Studio ==== */
        cy.get(":nth-child(2) > .form-control").clear("superadmin@gmail.com");
        cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
        cy.get(":nth-child(3) > .form-control").clear("p");
        cy.get(":nth-child(3) > .form-control").type("password");
        cy.get(".btn").click();

        /* ==== Generated with Cypress Studio ==== */
        cy.get(".navbar-nav > :nth-child(1) > .nav-link > .fas").click();
        cy.get(":nth-child(5) > .has-dropdown > span").click();
        cy.get(".active > .dropdown-menu > :nth-child(4) > .nav-link").click();
        cy.get(".card-header-action > .btn-icon").click();
        cy.get("#nama_jenis_usaha").clear("Ketela Pisang");
        cy.get("#nama_jenis_usaha").type("Ketela Pisang");
        cy.get(".btn-primary").click();
        cy.get(":nth-child(10) > .page-link").click();

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(".d-flex > .btn-info").click();
        cy.get("#nama_jenis_usaha").clear("Ketela Pisang ");
        cy.get("#nama_jenis_usaha").type("Ketela Pisang Goreng");
        cy.get(".btn-primary").click();
        cy.get(":nth-child(10) > .page-link").click();
        /* ==== End Cypress Studio ==== */
    });
});
