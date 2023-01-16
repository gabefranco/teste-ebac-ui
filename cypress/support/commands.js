Cypress.Commands.add('login', (usuario, senha) => { 
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()
 })

Cypress.Commands.add('AdicionarProdutos', (produto) => {
    cy.contains(produto).click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()
})
 
Cypress.Commands.add('Cadastro', (nome, sobrenome, cep) => {
    cy.get('[data-test="firstName"]').type(nome)
    cy.get('[data-test="lastName"]').type(sobrenome)
    cy.get('[data-test="postalCode"]').type(cep)
    cy.get('[data-test="continue"]').click()
})