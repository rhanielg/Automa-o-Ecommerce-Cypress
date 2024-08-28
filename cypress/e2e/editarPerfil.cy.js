///<reference types="cypress"/>
import login from "../page-objects/login";
import editarPerfil from "../page-objects/editarPerfil";

describe('Editar Perfil', function () {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Edição de perfil com sucesso', function () {
        login.realizarLogin('usuario@teste.com', 'senha123')
        cy.wait(1000)
        cy.get('.swal2-confirm').click();
        cy.wait(1000);
        editarPerfil.editarPerfil('usuario', 'testando', 'email@testando.com', 'senha123', 'senha123465')
    })
})