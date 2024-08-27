///<reference types="cypress"/>
import login from "../page-objects/login";
import carrinho from "../page-objects/carrinho";

describe('Adicionar itens ao carrinho', function () {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Adicionar item ao carrinho', function () {
        login.realizarLogin('usuario@teste.com', 'Senha123');
        login.validacaoLogin();
        cy.get('.swal2-confirm').click();
        carrinho.buscarItem();
        carrinho.adicionarItem();
    })

    it.only('Remover item do carrinho', function() {
        login.realizarLogin('usuario@teste.com', 'Senha123');
        login.validacaoLogin();
        cy.get('.swal2-confirm').click();
        carrinho.buscarItem();
        carrinho.adicionarItem();
        carrinho.removerItem();
    })
})