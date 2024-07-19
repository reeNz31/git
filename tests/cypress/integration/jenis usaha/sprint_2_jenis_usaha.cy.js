describe('case positive', () => {
    beforeEach(() => {
       cy.resetDb()
    });

  it('create jenis usaha', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="nama-jenis-usaha"]').type('Ketela Pisang');
    cy.get('[data-id="submit"]').click();
  })

  it('update jenis usaha', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click();
    cy.get('[data-id="nama-jenis-usaha"]').clear('Ketela Pisang ');
    cy.get('[data-id="nama-jenis-usaha"]').type('Ketela Pisang Goreng');
    cy.get('[data-id="submit"]').click();
  })

  it('delete jenis usaha', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
    cy.get('[data-id="del-1"]').click();
    cy.contains("Yes").click();
  })

  it('pencarian jenis usaha', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-jenis-usaha"]').type('Abon');
    cy.get('[data-id="submit-search"]').click();
  })
})

describe('case negative', () => {
    beforeEach(() => {
       cy.resetDb()
    });
  it('create jenis usaha input angka', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
      cy.get('[data-id="tambah"]').click();
      cy.get('[data-id="nama-jenis-usaha"]').type('Ketela Pisang123');
      cy.get('[data-id="submit"]').click();
      cy.get('.invalid-feedback')
    })

    it('create jenis usaha input karakter', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
      cy.get('[data-id="tambah"]').click();
      cy.get('[data-id="nama-jenis-usaha"]').type('Ketela Pisang@!');
      cy.get('[data-id="submit"]').click();
      cy.get('.invalid-feedback')
    })

    it('create jenis usaha input kosong', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
      cy.get('[data-id="tambah"]').click();
      cy.get('[data-id="submit"]').click();
      cy.get('.invalid-feedback')
    })

    it('update jenis usaha input menggunakan angka', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
      cy.get('[data-id="edt-1"]').click();
      cy.get('[data-id="nama-jenis-usaha"]').clear('Ketela Pisang ');
      cy.get('[data-id="nama-jenis-usaha"]').type('Ketela Pisang Goreng123');
      cy.get('[data-id="submit"]').click();
      cy.get('.invalid-feedback')
    })

    it('update jenis usaha input menggunakan karakter', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
      cy.get('[data-id="edt-1"]').click();
      cy.get('[data-id="nama-jenis-usaha"]').clear('Ketela Pisang ');
      cy.get('[data-id="nama-jenis-usaha"]').type('Ketela Pisang Goreng!@');
      cy.get('[data-id="submit"]').click();
      cy.get('.invalid-feedback')
    })

    it('update jenis usaha input kosong', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
      cy.get('[data-id="edt-1"]').click();
      cy.get('[data-id="nama-jenis-usaha"]').clear('Ketela Pisang ');
      cy.get('[data-id="submit"]').click();
      cy.get('.invalid-feedback')
    })

    it('pencarian jenis usaha tidak ada didatabase', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
      cy.get('[data-id="search"]').click();
      cy.get('[data-id="search-jenis-usaha"]').type('Abon123');
      cy.get('[data-id="submit-search"]').click();
      cy.get('.table > tbody > tr > :nth-child(2)').should('be.visible')
    })

    it('pencarian jenis usaha kosong', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click();
      cy.get('[data-id="search"]').click();
      cy.get('[data-id="submit-search"]').should('be.disabled');   
    })
})
