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

    it('Cadastro com senha em branco', function() {
        cadastro.cadastroSenhaEmBranco('usuario', 'teste@mail.com')
    })

    it('Cadastro com usuario e email em branco', function() {
        cadastro.cadastroUsuarioEEmailEmBranco('senha123')
    })

    it('Cadastro com usuario e senha em branco', function() {
        cadastro.cadastroUsuarioESenhaEmBranco('teste@teste.com')
    })

    it('Cadastro com email e senha em branco', function() {
        cadastro.cadastroEmailESenhaEmBranco('usuario')
    })

    it('Cadastro com campos em branco', function() {
        cadastro.cadastroCamposEmBranco();
    })
})