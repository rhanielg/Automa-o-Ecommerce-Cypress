///<reference types="cypress"/>
const cadastro = {

    cadastroComSucesso(username, email, passowrd) {
        cy.get('#createAccount').click();
        cy.get('#user').type(username);
        cy.get('#email').type(email);
        cy.get('#password').type(passowrd);
        cy.get('#btnRegister').click();
        cy.wait(1000);
        cy.get('.swal2-popup')
            .should('be.visible')
    },

    cadastroUsuarioEmBranco(email, passowrd) {
        cy.get('#createAccount').click();
        cy.get('#email').type(email);
        cy.get('#password').type(passowrd);
        cy.get('#btnRegister').click();
        cy.wait(1000);
        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo nome deve ser prenchido')
    },

    cadastroEmailEmBranco(username, passowrd) {
        cy.get('#createAccount').click();
        cy.get('#user').type(username);
        cy.get('#password').type(passowrd);
        cy.get('#btnRegister').click();
        cy.wait(1000);
        cy.get('.errorLabel')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    }
    
}

export default cadastro