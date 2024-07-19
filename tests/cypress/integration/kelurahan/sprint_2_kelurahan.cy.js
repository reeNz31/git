describe('positive case', () => {
    beforeEach(() => {
       cy.resetDb();
    });

  it('create kelurahan', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="select-kecamatan"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="nama-kelurahan"]').type('Kwagean');
    cy.get('[data-id="select-status"]').select('desa', {force : true}).should('have.value','desa');
    cy.get('[data-id="submit"]').click();
  })

  it('edit kelurahan', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="select-kecamatan"]').select('3',{force : true}).should('have.value','3');
    cy.get('[data-id="nama-kelurahan"]').clear('');
    cy.get('[data-id="nama-kelurahan"]').type('Lowokwaru');
    cy.get('[data-id="select-status"]').select('kelurahan',{force : true}).should('have.value','kelurahan');
    cy.get('[data-id="submit"]').click();
  })

  it('hapus kelurahan', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
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
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
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
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
  })


  it('pencarian kelurahan input kabupaten', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
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
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kecamatan"]').type('arjosari');
    cy.get('[data-id="submit-search"]').click();
  })

  it('pencarian kecamatan input kelurahan', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kelurahan"]').type('Gayuhan');
    cy.get('[data-id="submit-search"]').click();
  })

  it('pencarian kecamatan input kabupaten , kecamatan , kelurahan', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kabupaten"]').type('pacitan');
    cy.get('[data-id="search-kecamatan"]').type('arjosari');
    cy.get('[data-id="search-kelurahan"]').type('Gayuhan');
    cy.get('[data-id="submit-search"]').click();
  })
})


describe('negative case', () => {
    beforeEach(() => {
       cy.resetDb();
    });
  it('create kelurahan input kelurahan mengunakan angka', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
      cy.get('[data-id="tambah"]').click();
      cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
      cy.get('[data-id="select-kecamatan"]').select('3',{force : true}).should('have.value','3');
      cy.get('[data-id="nama-kelurahan"]').type('Kwagean1234');
      cy.get('[data-id="select-status"]').select('desa',{force : true}).should('have.value','desa');
      cy.get('[data-id="submit"]').click();
      cy.get('.invalid-feedback')
  })

  it('create kelurahan input kelurahan mengunakan spasi', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="select-kecamatan"]').select('2',{force : true}).should('have.value','2');
    cy.get('[data-id="nama-kelurahan"]').type('Kwagean Desa');
    cy.get('[data-id="select-status"]').select('desa',{force : true}).should('have.value','desa');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
    })

    it('create kelurahan input kelurahan kosong', () => {
      cy.visit('http://localhost:8000/')
      cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
      cy.get('[data-id="inputPassword"]').type('password');
      cy.get('[data-id="buttonLogin"]').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(5) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
      cy.get('[data-id="tambah"]').click();
      cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
      cy.get('[data-id="select-kecamatan"]').select('3',{force : true}).should('have.value','3');
      cy.get('[data-id="select-status"]').select('desa',{force : true}).should('have.value','desa');
      cy.get('[data-id="submit"]').click();
      cy.get('.invalid-feedback')
  })

  it('create kelurahan input kabupaten kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="select-kabupaten"]').select('',{force : true}).should('have.value','');
    cy.get('[data-id="select-kecamatan"]').select('3',{force : true}).should('have.value','3');
    cy.get('[data-id="nama-kelurahan"]').type('Kwagean');
    cy.get('[data-id="select-status"]').select('desa',{force : true}).should('have.value','desa');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('create kelurahan input kecamatan kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="select-kecamatan"]').select('',{force : true}).should('have.value','');
    cy.get('[data-id="nama-kelurahan"]').type('Kwagean');
    cy.get('[data-id="select-status"]').select('desa',{force : true}).should('have.value','desa');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('edit kelurahan input kelurahan menggunakan angka', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="select-kecamatan"]').select('3',{force : true}).should('have.value','3');
    cy.get('[data-id="nama-kelurahan"]').type('Lowokwaru123');
    cy.get('[data-id="select-status"]').select('kelurahan',{force : true}).should('have.value','kelurahan');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })


  it('edit kelurahan input kelurahan menggunakan spasi', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="select-kecamatan"]').select('3',{force : true}).should('have.value','3');
    cy.get('[data-id="nama-kelurahan"]').type('Lowokwaru Desa');
    cy.get('[data-id="select-status"]').select('desa',{force : true}).should('have.value','desa');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('edit kelurahan input kelurahan kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="select-kecamatan"]').select('3',{force : true}).should('have.value','3');
    cy.get('[data-id="nama-kelurahan"]').clear('');
    cy.get('[data-id="select-status"]').select('kelurahan',{force : true}).should('have.value','kelurahan');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('edit kelurahan input kabupaten kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click();
    cy.get('[data-id="select-kabupaten"]').select('',{force : true}).should('have.value','');
    cy.get('[data-id="select-kecamatan"]').select('3',{force : true}).should('have.value','3');
    cy.get('[data-id="nama-kelurahan"]').type('kwagean');
    cy.get('[data-id="select-status"]').select('kelurahan',{force : true}).should('have.value','kelurahan');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('edit kelurahan input kecamatan kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click();
    cy.get('[data-id="select-kabupaten"]').select('1',{force : true}).should('have.value','1');
    cy.get('[data-id="select-kecamatan"]').select('',{force : true}).should('have.value','');
    cy.get('[data-id="nama-kelurahan"]').type('kwagean');
    cy.get('[data-id="select-status"]').select('kelurahan',{force : true}).should('have.value','kelurahan');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('pencarian kelurahan input kabupaten tidak ada didatabase', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kabupaten"]').type('pacitan123');
    cy.get('[data-id="submit-search"]').click();
    cy.get('.table > tbody > tr > :nth-child(2)').should('be.visible')
  })

  it('pencarian kelurahan input kabupaten tidak ada didatabase', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kabupaten"]').type('pacitan kab');
    cy.get('[data-id="submit-search"]').click();
    cy.get('.table > tbody > tr > :nth-child(2)').should('be.visible')
  })

  it('pencarian kelurahan input kabupaten, kecamatan dan kelurahan kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="submit-search"]').should('be.disabled');   
  })
})
