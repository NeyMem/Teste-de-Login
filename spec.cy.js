describe('Testes', () => {
  it('login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('neylsonsudtjp@hotmail.com')
    cy.get('[data-testid="senha"]').type('123456789')
    cy.get('[data-testid="entrar"]').click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('h1').contains('Lista de Compras')
  })

  it('login senha errada', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('neylsonsudtjp@hotmail.com')
    cy.get('[data-testid="senha"]').type('1234567')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').contains('Email e/ou senha inválidos')
  })
})