describe('case positive', () => {
    beforeEach(() => {
       cy.resetDb()
    });

  it('create kegiatan usaha', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="nama-kegiatan-usaha"]').clear('CVO');
    cy.get('[data-id="nama-kegiatan-usaha"]').type('CVO');
    cy.get('[data-id="submit"]').click();
  })

  it('update kegiatan usaha', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="edt-4"]').click()
    cy.get('[data-id="nama-kegiatan-usaha"]').clear('Ketela Pisang ');
    cy.get('[data-id="nama-kegiatan-usaha"]').type('Ketela Pisang Goreng');
    cy.get('[data-id="submit"]').click();

  })

  it('delete kegiatan usaha', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="del-1"]').click();
    cy.contains("Yes").click();
  })

  it('pencarian kegiatan usaha', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kegiatan-usaha"]').type('IUM');
    cy.get('[data-id="submit-search"]').click();
  })
})


describe('case negative', () => {
    beforeEach(() => {
       cy.resetDb()
    });
  it('create kegiatan usaha input angka', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="nama-kegiatan-usaha"]').type('Ketela Pisang123');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('create kegiatan usaha input karakter', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="nama-kegiatan-usaha"]').type('Ketela Pisang@!');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('create kegiatan usaha input min 3 huruf', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="nama-kegiatan-usaha"]').type('Ke');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('create kegiatan usaha input max 50 huruf', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="nama-kegiatan-usaha"]').type('adasdwqqodhwdkankdaksndjkaskhajdhajjashjdhakjshahsjahjhsjajsdahdhajshdajhsdjahdjshajhashdhjsahjahsjdahjshahajshdjd');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('create kegiatan usaha input kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="tambah"]').click();
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('update kegiatan usaha input menggunakan angka', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click()
    cy.get('[data-id="nama-kegiatan-usaha"]').clear('Ketela Pisang ');
    cy.get('[data-id="nama-kegiatan-usaha"]').type('Ketela Pisang Goreng123');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })


  it('update kegiatan usaha input menggunakan karakter', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click()
    cy.get('[data-id="nama-kegiatan-usaha"]').clear('Ketela Pisang ');
    cy.get('[data-id="nama-kegiatan-usaha"]').type('Ketela Pisang Goreng!@');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('update kegiatan usaha input kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click()
    cy.get('[data-id="nama-kegiatan-usaha"]').clear('Ketela Pisang ');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('update kegiatan usaha input min 3 huruf', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click()
    cy.get('[data-id="nama-kegiatan-usaha"]').clear('Ketela Pisang ');
    cy.get('[data-id="nama-kegiatan-usaha"]').type('Ke');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('update kegiatan usaha input max 50 huruf', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="edt-1"]').click()
    cy.get('[data-id="nama-kegiatan-usaha"]').clear('Ketela Pisang ');
    cy.get('[data-id="nama-kegiatan-usaha"]').type('adadadadadaddadadadadkaldkaldkakdlakdkdlakdkaldakdlkdlakdlakdlakdkadlakdlakdlakdlakdlakdlakdlakdkadlkdaldkaldk');
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback')
  })

  it('pencarian kegiatan usaha tidak ada didatabase', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="search-kegiatan-usaha"]').type('IUM/0');
    cy.get('[data-id="submit-search"]').click();
    cy.get('.table > tbody > tr > :nth-child(2)').should('be.visible')
  })

  it('pencarian kegiatan usaha kosong', () => {
    cy.visit('http://localhost:8000/')
    cy.get('[data-id="inputEmail"]').type('superadmin@gmail.com');
    cy.get('[data-id="inputPassword"]').type('password');
    cy.get('[data-id="buttonLogin"]').click();
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    cy.get(':nth-child(5) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > :nth-child(6) > .nav-link').click();
    cy.get('[data-id="search"]').click();
    cy.get('[data-id="submit-search"]').should('be.disabled');   
  })
})
