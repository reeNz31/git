import 'cypress-file-upload';
const fileName = 'Jenis Legalitas.xlsx';
const filePath = '1.jpg';

describe('case positive', () => {
    beforeEach(() => {
      cy.resetDb()
    });
  it('import data jenis legalitas', () => {
    cy.intercept({ method:'POST' });
    cy.intercept({
    method: 'POST',
    url:'http://localhost:8000/master-table-management/jenis_legalitas/import'
    }).as('#file-upload')
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(5) > .nav-link').click();
    cy.get('[data-id="import"]').click();
    cy.wait(500);
    cy.fixture(fileName, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then(fileContent => {
    cy.get('[data-id="sendImport"]').attachFile({
      fileContent,
      fileName,
      mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      encoding:'utf8',
      lastModified: new Date().getTime()
      })
    })
    cy.get('[data-id="submit-import"]').click();
  })
})

describe('case negative', () => {
    beforeEach(() => {
        cy.resetDb()
      });
  it('import data jenis legalitas mengunakan file salah', () => {
    cy.intercept({ method:'POST' });
    cy.intercept({
    method: 'POST',
    url:'http://localhost:8000/master-table-management/jenis_legalitas/import'
    }).as('#file-upload')

    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(5) > .nav-link').click();
    cy.get('[data-id="import"]').click();
    cy.wait(500);
    cy.fixture(filePath, 'binary')
    .then(Cypress.Blob.binaryStringToBlob)
    .then(fileContent => {
    cy.get('[data-id="sendImport"]').attachFile({
    fileContent,
    filePath,
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    encoding:'utf8',
    lastModified: new Date().getTime()
  })
  })
    cy.get('[data-id="submit-import"]').click();
    cy.wait(500);
    cy.get('[data-id="import"]').click();
    cy.get('.invalid-feedback')
  })

  it('import data jenis legalitas tidak masukan input', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(5) > .nav-link').click();
    cy.get('[data-id="import"]').click();
    cy.wait(500);
    cy.get('[data-id="submit-import"]').click();
    cy.wait(500);
    cy.get('[data-id="import"]').click();
    cy.get('.invalid-feedback')
  })
})
