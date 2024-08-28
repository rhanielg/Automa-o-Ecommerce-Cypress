///<reference types="cypress"/>

const editarPerfil = {

    editarPerfil(usuario, usuario2, email, currentPassword, password) {
        cy.get('i[class="fa fa-user"]').click();
        cy.get('a[class="theme-btn-one bg-black btn_sm"]').click();
        cy.get('input[type="radio"]')
            .should('have.length', 2)
            .each(function ($radio) {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
        cy.get('#f_name').type(usuario);
        cy.get('[placeholder="Dhoe"]').type(usuario2)
        cy.get('#email_address').type(email);
        cy.get('#current_password').type(currentPassword);
        cy.get('#new_password').type(password);
        cy.get('#re_password').type(password);
        cy.get('#account_info_form > .theme-btn-one').click();
        cy.wait(1000);
        cy.url().should('include', 'vendor/vendor-profile');
    }

}

export default editarPerfil