describe('case positive', () => {
    beforeEach(() => {
        cy.resetDb();
    });

  it('create kabupaten', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="nama-kabupaten"]').type('Malang');
    cy.get('[data-id="submit"]').click();
  })

  it('edit kabupaten', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click();
    cy.get('[data-id="nama-kabupaten"]').clear('Pacitan');
    cy.get('[data-id="nama-kabupaten"]').type('Nganjuk');
    cy.get('[data-id="submit"]').click();
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
  })


  it('pencarian kabupaten', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kabupaten"]').clear('Nganjuk');
    cy.get('[data-id="search-kabupaten"]').type('Nganjuk');
    cy.get('[data-id="submit-search"]').click();
  })

})


describe('case negative', () => {
    beforeEach(() => {
        cy.resetDb();
    });
    it('create kabupaten mengunakan angka', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="tambah"]').click();
        cy.get('[data-id="nama-kabupaten"]').type('Malang123');
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
      })

      it('create kabupaten mengunakan spasi', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="tambah"]').click();
        cy.get('[data-id="nama-kabupaten"]').type('Malang Raya');
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
      })

      it('create kabupaten input kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="tambah"]').click();
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
      })

      it('create kabupaten input minimal 3', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="tambah"]').click();
        cy.get('[data-id="nama-kabupaten"]').type('Mg');
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
      })

      it('create kabupaten input karakter', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="tambah"]').click();
        cy.get('[data-id="nama-kabupaten"]').type('Mlg!@!');
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
      })

      it('create kabupaten input maksimal 50', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="tambah"]').click();
        cy.get('[data-id="nama-kabupaten"]').type('qwertyuiopasdfghjklzxcvbbnmadasdwqeretyydfsfdsfeewrwerwertwqwdsfs');
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
      })

      it('edit kabupaten mengunakan angka', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="edt-1"]').click();
        cy.get('[data-id="nama-kabupaten"]').clear('Pacitan');
        cy.get('[data-id="nama-kabupaten"]').type('Nganjuk123');
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
      })

      it('edit kabupaten mengunakan spasi', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="edt-1"]').click();
        cy.get('[data-id="nama-kabupaten"]').clear('Pacitan');
        cy.get('[data-id="nama-kabupaten"]').type('Nganjuk Angin');
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
      })

      it('edit kabupaten input kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="edt-1"]').click();
        cy.get('[data-id="nama-kabupaten"]').clear('Malang');
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
      })

      it('edit kabupaten input minmal 3', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="edt-1"]').click();
        cy.get('[data-id="nama-kabupaten"]').clear('Pacitan');
        cy.get('[data-id="nama-kabupaten"]').type('Ng');
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
      })

      it('edit kabupaten input karakter', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="edt-1"]').click();
        cy.get('[data-id="nama-kabupaten"]').clear('Pacitan');
        cy.get('[data-id="nama-kabupaten"]').type('Ngjk!@');
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
      })

      it('edit kabupaten input maksimal 50', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="edt-1"]').click();
        cy.get('[data-id="nama-kabupaten"]').clear('Malang');
        cy.get('[data-id="nama-kabupaten"]').type('qwertyuiopasdfghjklzxcvbbnmadasdwqeretyydfsfdsfeewrwerwertwqwdsfs');
        cy.get('[data-id="submit"]').click();
        cy.get('.invalid-feedback')
      })

      it('pencarian kabupaten tidak ada didatabase', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="search"]').click();
        cy.get('[data-id="search-kabupaten"]').type('Nganjuk123');
        cy.get('[data-id="submit-search"]').click();
        cy.get('.table > tbody > tr > :nth-child(2)').should('be.visible')
      })

      it('pencarian kabupaten input kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
        cy.get('[data-id="inputPassword"]').type('password');
        cy.get('[data-id="buttonLogin"]').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(5) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('[data-id="search"]').click();
        cy.get('[data-id="submit-search"]').should('be.disabled');   
      })
})
