import 'cypress-file-upload';
const fileName = 'Kegiatan Usaha.xlsx';
const filePath = '1.jpg';

describe('case postive', () => {
    beforeEach(() => {
        cy.resetDb();
    });
  it('import data kegiatan usaha', () => {
    cy.intercept({ method:'POST' });
    cy.intercept({
    method: 'POST',
    url:'http://localhost:8000/master-table-management/kegiatan_usaha/import'
    }).as('#file-upload')

    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="import"]').click();
    cy.wait(500);
    cy.fixture(fileName, 'binary')
    .then(Cypress.Blob.binaryStringToBlob)
    .then(fileContent => {
      cy.get('[data-id="send-import"]').attachFile({
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
  it('import data kegiatan usaha mengunakan file salah', () => {
    cy.intercept({ method:'POST' });
    cy.intercept({
    method: 'POST',
    url:'http://localhost:8000/master-table-management/kegiatan_usaha/import'
    }).as('#file-upload')

    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="import"]').click();
    cy.wait(500);
    cy.fixture(filePath, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
    .then(fileContent => {
    cy.get('[data-id="send-import"]').attachFile({
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

  it('import data kegiatan usaha tidak masukan input', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="import"]').click();
    cy.wait(500);
    cy.get('[data-id="submit-import"]').click();
    cy.wait(500);
    cy.get('[data-id="import"]').click();
    cy.get('.invalid-feedback')
  })
})


