///<reference types="cypress"/>
import cadastro from "../page-objects/cadastro";

describe('Fluxo de Cadastro', function() {
    beforeEach(() => {
        cy.visit('/');
      })

    it('Cadastro com Sucesso', function() {
        cadastro.cadastroComSucesso('usuario', 'usuario@teste.com', 'Senha123')
    })

    it('Cadastro com Nome em Branco', function() {
        cadastro.cadastroUsuarioEmBranco('usuario@teste.com', 'senha123')
    })

    it('Cadastro com Email em Branco', function() {
        cadastro.cadastroUsuarioEmBranco('usuario', 'senha123')
    })
})