import "cypress-file-upload";
const fileName = "dummy.xlsx";
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

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(".active > .dropdown-menu > :nth-child(1) > .nav-link").click();
        cy.get(".import").click();

        cy.wait(500);

        cy.fixture(fileName, "binary")
            .then(Cypress.Blob.binaryStringToBlob)
            .then((fileContent) => {
                cy.get("input[type='file']").attachFile({
                    fileContent,
                    fileName,
                    mimeType:
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    encoding: "utf8",
                });
            });
        // cy.get('#import_file').attachFile('dummy.xlsx').click();
        // cy.get('[href="http://localhost:8000/master-table-management/export"]').click();
        /* ==== End Cypress Studio ==== */
    });
});
