describe('case positive', () => {
    beforeEach(() => {
       cy.resetDb()
    });
  it('create jenis legalitas', () => {
    cy.visit('http://localhost:8000/')
    cy.get(' [data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get(' [data-id="inputPassword"] ').type('password');
    cy.get(' [data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(5) > .nav-link').click();
    cy.get(' [data-id="tambah"]').click();
    cy.get(' [data-id="nama_jenis_legalitas"]').type('CVO');
    cy.get(' [data-id="submit"]').click();
  })

  it('update jenis legalitas', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(5) > .nav-link').click();
    cy.get('[data-id="edt-2"]').click();
    cy.get('[data-id="nama_jenis_legalitas"]').clear('IUM');
    cy.get('[data-id="nama_jenis_legalitas"]').type('IUMS');
    cy.get('[data-id="submit"]').click();
  })

  it('delete jenis legalitas', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(5) > .nav-link').click();
    cy.get('[data-id="del-1"]').click();
    cy.contains('Yes').click();
  })

  it('pencarian jenis legalitas', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(5) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search_jenis_legalitas"]').type('IUM');
    cy.get('[data-id="submit-search"]').click();
    
  })
})

describe('case negative', () => {
    beforeEach(() => {
       cy.resetDb()
    });
  it('create jenis legalitas input kosong', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(5) > .nav-link').click();
      cy.get('[data-id="tambah"]').click();
      cy.get('[data-id="submit"]').click();
      cy.get('.invalid-feedback')
    })

    it('update jenis legalitas input kosong', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(5) > .nav-link').click();
      cy.get('[data-id="edt-1"]').click();
      cy.get('[data-id="nama_jenis_legalitas"]').clear('IUM');
      cy.get('[data-id="submit"]').click();
      cy.get('.invalid-feedback')
    })

    it('pencarian jenis legalitas tidak ada didatabase', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(5) > .nav-link').click();
      cy.get('[data-id="search"]').click();
      cy.get('[data-id="search_jenis_legalitas"]').type('IUM/0');
      cy.get('[data-id="submit-search"]').click();
      cy.get('.table > tbody > tr > :nth-child(2)').should('be.visible')
    })

    it('pencarian jenis legalitas kosong', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(5) > .nav-link').click();
      cy.get('[data-id="search"]').click();
      cy.get('[data-id="submit-search"]').should('be.disabled');   
    })
})
