///<reference types="cypress"/>
const cadastro = {

    cadastroComSucesso(username, email, passowrd) {
        cy.get('#createAccount').click();
        cy.get('#user').type(username);
        cy.get('#email').type(email);
        cy.get('#password').type(passowrd);
        cy.get('#btnRegister').click();
        cy.wait(500);
        cy.get('.swal2-popup')
            .should('be.visible')
    },

    cadastroUsuarioEmBranco(email, passowrd) {
        cy.get('#createAccount').click();
        cy.get('#email').type(email);
        cy.get('#password').type(passowrd);
        cy.get('#btnRegister').click();
        cy.wait(500);
        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo nome deve ser prenchido')
    },

    cadastroEmailEmBranco(username, passowrd) {
        cy.get('#createAccount').click();
        cy.get('#user').type(username);
        cy.get('#password').type(passowrd);
        cy.get('#btnRegister').click();
        cy.wait(500);
        cy.get('.errorLabel')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    },

    cadastroSenhaEmBranco(username, email) {
        cy.get('#createAccount').click();
        cy.get('#user').type(username);
        cy.get('#email').type(email);
        cy.get('#btnRegister').click();
        cy.wait(500);
        cy.get('.errorLabel')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')

    },

    cadastroUsuarioEEmailEmBranco(password) {
        cy.get('#createAccount').click();
        cy.get('#password').type(password);
        cy.get('#btnRegister').click();
        cy.wait(500);
        cy.get('.errorLabel')
            .should('have.text', 'O campo nome deve ser prenchido')
    },

    cadastroUsuarioESenhaEmBranco(email) {
        cy.get('#createAccount').click();
        cy.get('#email').type(email);
        cy.get('#btnRegister').click();
        cy.wait(500);
        cy.get('.errorLabel')
            .should('have.text', 'O campo nome deve ser prenchido')
    },

    cadastroEmailESenhaEmBranco(username) {
        cy.get('#createAccount').click();
        cy.get('#user').type(username);
        cy.get('#btnRegister').click();
        cy.wait(500);
        cy.get('.errorLabel')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    },

    cadastroCamposEmBranco() {
        cy.get('#createAccount').click();
        cy.get('#btnRegister').click();
        cy.wait(500);
        cy.get('.errorLabel')
            .should('have.text', 'O campo nome deve ser prenchido')
    }
}

export default cadastro