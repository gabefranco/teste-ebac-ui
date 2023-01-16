/// <reference types="cypress" />

describe('Teste de ponta a ponta em SauceLabs', () => {

  beforeEach(() => {
    cy.visit('/')
  });


  it('Deve fazer o pedido de ponta a ponta', () => {
    cy.visit('https://www.saucedemo.com/');
    
    cy.login('standard_user', 'secret_sauce')
    cy.AdicionarProdutos('Sauce Labs Backpack')
    cy.AdicionarProdutos('Sauce Labs Fleece Jacket')
    cy.AdicionarProdutos('Sauce Labs Bike Light')
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.Cadastro('Glauber','Franco','15025-000')
    cy.get('[data-test="finish"]').click()
    cy.get('.pony_express').should('be.visible')







  });
});