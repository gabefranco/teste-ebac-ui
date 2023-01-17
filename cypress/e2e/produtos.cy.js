/// <reference types="cypress" />

describe('Compra de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
    });

    it('Vamos as compras', () => {
        cy.get('[class="product-block grid"]')
            .contains('Aero Daily Fitness Tee')
            //.eq(2) - FUNCIONOU, TEM QUE TER O .CLICK()
            //.first() - FUNCIONOU, TEM QUE TER O .CLICK()
            //.last() - FUNCIONOU, TEM QUE TER O .CLICK()
            .click()
    });

    it.only('Adicionar o produto ao carrinho', () => {
        var quantidade = 5

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', '“Abominable Hoodie” foram adicionados no seu carrinho.')

    });
});