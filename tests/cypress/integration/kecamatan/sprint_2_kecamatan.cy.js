describe('positive case', () => {
    beforeEach(() => {
       cy.resetDb();
    });

  it('create kecamatan', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="nama-kecamatan"]').type('lowokwaru');
    cy.get('[data-id="submit"]').click();

  })

  it('edit kecamatan', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="nama-kecamatan"]').clear('arjosari');
    cy.get('[data-id="nama-kecamatan"]').type('lowokwaru');
    cy.get('[data-id="submit"]').click();
  })

  it('hapus kacamatan', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="del-1"]').click();
    cy.contains("Yes").click();
  })

  it('hapus kabupaten', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
    cy.get('[data-id="del-1"]').click();
    cy.contains("Yes").click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
  })


  it('pencarian kecamatan input kabupaten', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kabupaten"]').type('pacitan');
    cy.get('[data-id="submit-search"]').click();
  })

  it('pencarian kecamatan input kecamatan', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kecamatan"]').type('arjosari');
    cy.get('[data-id="submit-search"]').click();
  })

  it('pencarian kecamatan input kabupaten dan kecamatan', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kabupaten"]').type('pacitan');
    cy.get('[data-id="search-kecamatan"]').type('arjosari');
    cy.get('[data-id="submit-search"]').click();
  })

})


describe('negative case', () => {
    beforeEach(() => {
       cy.resetDb();
    });
  it('create kecamatan input kecamatan mengunakan angka', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
      cy.get('[data-id="tambah"]').click();
      cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
      cy.get('[data-id="nama-kecamatan"]').type('lowokwaru123');
      cy.get('[data-id="submit"]').click();
      cy.get('.invalid-feedback')
    })

  it('create kecamatan input kecamatan mengunakan spasi', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="nama-kecamatan"]').type('lowokwaru raya');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('create kecamatan input kecamatan mengunakan sama table', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="nama-kecamatan"]').type('Donorojo');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('create kecamatan input kecamatan kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('create kecamatan input kabupaten kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="nama-kecamatan"]').type('lowokwaru');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('create kecamatan input kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })


  it('edit kecamatan input kecamatan menggunakan angka', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="nama-kecamatan"]').clear('arjosari');
    cy.get('[data-id="nama-kecamatan"]').type('lowokwaru123');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })


  it('edit kecamatan input kecamatan menggunakan spasi', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="nama-kecamatan"]').clear('arjosari');
    cy.get('[data-id="nama-kecamatan"]').type('lowokwaru kota');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('edit kecamatan input kecamatan kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="nama-kecamatan"]').clear('arjosari');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('pencarian kecamatan input kabupaten tidak ada didatabase', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kecamatan"]').type('pacitan123');
    cy.get('[data-id="submit-search"]').click();
    cy.get('.table > tbody > tr > :nth-child(2)').should('be.visible')
  })


  it('pencarian kecamatan input kecamatan tidak ada didatabase', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kecamatan"]').type('arjosari1234');
    cy.get('[data-id="submit-search"]').click();
    cy.get('.table > tbody > tr > :nth-child(2)').should('be.visible')
  })

  it('pencarian kecamatan input kabupaten dan kecamatan kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="submit-search"]').should('be.disabled');   
  })
})
