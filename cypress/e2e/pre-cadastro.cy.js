/// <reference types="cypress" />

var faker = require('faker-br');
//const Faker = require('faker-br/lib');
//const Br = require('faker-br/lib/br');

describe('Funcionalidade de Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('gabe1425@')
        cy.get(':nth-child(4) > .button').click()
       
        cy.get('a > .hidden-xs').should('contain', 'Welcome')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
       
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()
       
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })
})