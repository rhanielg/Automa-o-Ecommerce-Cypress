///<reference types="cypress"/>
const login = {

    realizarLogin(username, password) {
        cy.get('#user').type(username);
        cy.get('#password').type(password);
        cy.wait(1000)
        cy.get('#btnLogin').click();
        cy.wait(1000)
    },

    loginIncorreto(username, password) {
        cy.get('#user').type(username);
        cy.get('#password').type(password);
        cy.get('#btnLogin').click();
    },

    senhaIncorreta(username, password) {
        cy.get('#user').type(username);
        cy.get('#password').type(password);
        cy.get('#btnLogin').click();
    },

    senhaELoginIncorretos(username, password) {
        cy.get('#user').type(username);
        cy.get('#password').type(password);
        cy.get('#btnLogin').click();
    },

    senhaEmBranco(username) {
        cy.get('#user').type(username)
        cy.get('#btnLogin').click();
    },

    loginEmBranco(password) {
        cy.get('#password').type(password)
        cy.get('#btnLogin').click();
    },

    realizarLogout(username, password) {
        cy.get('#user').type(username);
        cy.get('#password').type(password);
        cy.get('#btnLogin').click();
        cy.wait(2000);
        cy.get('.swal2-confirm').click();
        cy.get('a[href="/#!"]').click();
        cy.get('#swal2-title').should('be.visible');
    },

    validacaoLogin() {
        cy.get('#swal2-title').should('be.visible')
    },

    validacaoLoginIncorreto() {
        cy.get('.invalid_input').should('be.visible')
    }
}

export default login