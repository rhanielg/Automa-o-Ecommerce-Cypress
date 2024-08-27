const carrinho = {

    buscarItem() {
        cy.wait(2000)
        cy.get('p > a').click();
        cy.wait(2000);
        cy.get('.customs_sel_box').each(($select) => {
            // Verifica se o select contém a opção com o texto "Best Seller"
            cy.wrap($select).find('option').then($options => {
                const optionTexts = $options.map((i, option) => Cypress.$(option).text()).get();
                if (optionTexts.includes('Best Seller')) {
                    cy.wrap($select).select('Best Seller')
                }
            })
        })
    },

    adicionarItem() {
        cy.wait(1000)
        cy.get(':nth-child(1) > .product_wrappers_one > .thumb > .image > .hover-image')
            .click()
            .invoke('removeAttr', 'target')
            .wait(1000)
        cy.get('.links_Product_areas > .theme-btn-one').click()
        cy.get('.swal2-popup').should('be.visible')
    },

    removerItem() {
        cy.get(':nth-child(3) > .offcanvas-toggle > .fa').click();
        cy.get('.offcanvas-cart > :nth-child(1) > .text-right > .offcanvas-wishlist-item-delete > .fa').click();
        cy.get('.offcanvas-add-cart-wrapper').should('not.have.text', 'Fit-Flare Dress')
    }
}

export default carrinho