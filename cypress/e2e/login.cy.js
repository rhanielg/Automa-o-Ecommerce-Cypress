///<reference types="cypress"/>
import login from "../page-objects/login";

describe('Login', function () {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Login com sucesso', function () {
    login.realizarLogin('usuario@teste.com', 'senha123');
    login.validacaoLogin();

  })

  it('Login incorreto', function () {
    login.loginIncorreto('aaaaa', 'senha123');
    login.validacaoLoginIncorreto();
  })

  it('Senha incorreta', function () {
    login.senhaIncorreta('usuario@teste.com', '   ');
    login.validacaoLoginIncorreto();
  })

  it('Senha e login incorretos', function () {
    login.senhaELoginIncorretos('123', ' ');
    login.validacaoLoginIncorreto();
  })

  it('Senha e login em branco', function () {
    cy.get('#btnLogin').click();
    login.validacaoLoginIncorreto();
  })

  it('Senha em branco', function () {
    login.senhaEmBranco('usuario@teste.com');
    login.validacaoLoginIncorreto();
  })

  it('Login em branco', function () {
    login.loginEmBranco('Senha123');
    login.validacaoLoginIncorreto();
  })

  it('Logout', function() {
    login.realizarLogout('usuario@teste.com', '123senha')
  })


})