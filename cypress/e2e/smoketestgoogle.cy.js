describe("test suite - conjunto de pruebas", () => {

    it.only('validar pagina de inicio', () => {
        cy.visit('https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwid67zUmpKAAxU3PkQIHXnPDD8QPAgJ')
        cy.get('.lnXdpd').should("be.visible")
        cy.get('.gb_Jd').contains('Acceder')
        //cy.get('.gb_Jd').contains('acceder') EJEMPLO DE PRUEBA QUE PUEDE FALLAR 
    })

   it('prueba e2e - registrarse buggy cars rating ', () => {
        cy.visit('https://buggy.justtestit.org/')
        //cy.get('.btn-success-outline').click() ejecuta la funcion de un click 
        cy.get('.input-sm').type('janethPc2')
        cy.get('.ng-pristine').type('Pecb930524uv1$')
        cy.get('.btn-success').click()
        cy.get(':nth-child(3) > .card > a > .img-fluid').click()
        cy.get(':nth-child(2) > :nth-child(3) > a').click()
        cy.get('#comment').type('comentario de ejemplo')
        cy.get('.btn').click()
        //para seleccionar elementos aque se encuentren dentro de una lista como ejemplo de buggy cars en el hobby del perfil va por el numero de la posicion en la que se encuentre ejemplo: 
        //cy.get('valor del imput con la lista').select('posicion en la que se encuentre l opcion')
       // cy.get('.card-text').contains('Thank you for your vote!') //cambiar linea 17 que es la que le da al tipo de carro

   })

   it('prueba sola', () => {
    
   })




})