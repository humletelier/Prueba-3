import { AngularDelegate } from "@ionic/angular";
import { createPublicKey } from "crypto";





describe('e2e', () => {
  beforeEach(() => {
    //Establecemos la pagina de inicio
    cy.visit('http://localhost:8100/app/tabs/schedule');
    //Limpiamos los datos del local storage
    cy.clearLocalStorage();
  });


  //PROCEDIMIENTO PARA LAS 7 PRUEBAS

  //Probando el boton about con una de sus propiedas
  it('Prueba 1', () => {
    //2 Segundos de espera
    cy.wait(2000);
    cy.get("[tab='about']").click();
    //2 Segundos de espera
    cy.wait(2000);
    //Visita la pagina about
    cy.visit('http://localhost:8100/app/tabs/about');
    //2 Segundos de espera
    cy.wait(2000);
    //Verificar que al entrar a la página la URL es “/app/tabs/about”.
    cy.location().should((loc) => {
      expect(loc.host).to.eq('localhost:8100')
      expect(loc.hostname).to.eq('localhost')
      expect(loc.href).to.eq('http://localhost:8100/app/tabs/about'
      )
    });
    //2 Segundos de espera
    cy.wait(2000);
  });

  it('Prueba 2', () => {
    //Pagina about
    cy.visit('http://localhost:8100/app/tabs/about');
    //2 Segundos de espera
    cy.wait(2000);
    //Verificar que lapagina es Madison WI
    cy.get('.item-interactive > .ng-untouched')
      .should('not.have.text', 'WIAustin, TXChicago, ILSeattle, WA');
    //2 Segundos de espera
    cy.wait(2000);
    //Abre la lista de lugares
    cy.get('ion-select')
      .should('have.value', 'madison')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Verificando que la “location” seleccionada por defecto debe ser “Madison, WI”.
    cy.get('#alert-input-2-0')
      .not('[aria-checked="false"]')
      .should('have.text', 'Madison, WI');
    //2 Segundos de espera
    cy.wait(2000);
  });

  it('Prueba 3', () => {
    //Pagina about
    cy.visit('http://localhost:8100/app/tabs/about');
    //2 Segundos de espera
    cy.wait(2000);
    //La imagen del banner debe ser “madison” en la primera carga de la aplicación.
    cy.get('div>div')
      .not('[ng-reflect-ng-style="false"]')
      .should('have.class', 'about-image madison');
    //2 Segundos de espera
    cy.wait(2000);
  });

  //PRUEBA NUMERO 4
  it('Prueba 4', () => {
    cy.visit('http://localhost:8100/app/tabs/about');
    //2 Segundos de espera
    cy.wait(2000);
    //Pincha en la opcion location
    cy.get('.item-interactive > .ng-pristine')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Verifica que las cantidades de “location” para seleccionar deben ser 4
    cy.get('.alert-button-inner > .alert-radio-label')
      .its('length')
      .should('eq', 4);
    //2 Segundos de espera
    cy.wait(2000);
    //Verifica dependiendo del orden en este caso el primero
    cy.get('#alert-input-2-1 > .alert-button-inner > .alert-radio-icon')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Verifica dependiendo del orden en este caso el segundo
    cy.get('#alert-input-2-2 > .alert-button-inner > .alert-radio-icon')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Verifica dependiendo del orden en este caso el tercero
    cy.get('#alert-input-2-3 > .alert-button-inner > .alert-radio-icon')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Verifica dependiendo del orden en este caso el cuarto
    cy.get('.alert-button-group > :nth-child(2) > .alert-button-inner')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
  })

  it('Prueba 5', () => {
    //Visita la pagina about
    cy.visit('http://localhost:8100/app/tabs/about');
    //2 Segundos de espera
    cy.wait(2000);
    //Abre las opciones de location
    cy.get('ion-select')
      .should('have.value', 'madison')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Selecciona la opcion de Austin TX
    cy.get('#alert-input-2-1')
      .should('have.text', 'Austin, TX')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Da click en el boton OK
    cy.get('.alert-button-group > :nth-child(2)')
      .should('have.text', 'OK')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Verifica que la imagen que esta en el momento sea la que se eligio en la opcion location
    cy.get('div>div')
      .not('[ng-reflect-ng-style="false"]')
      .should('have.class', 'about-image austin');
    //2 Segundos de espera
    cy.wait(2000);
    //FIN AUSTIN//

    //Abre las opciones de location
    cy.get('ion-select')
      .should('have.value', 'austin')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Selecciona la opcion de Austin TX
    cy.get('#alert-input-3-2')
      .should('have.text', 'Chicago, IL')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Da click en el boton OK
    cy.get('.alert-button-group > :nth-child(2)')
      .should('have.text', 'OK')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Verifica que la imagen que esta en el momento sea la que se eligio en la opcion location
    cy.get('div>div')
      .not('[ng-reflect-ng-style="false"]')
      .should('have.class', 'about-image chicago');
    //2 Segundos de espera
    cy.wait(2000);
    //FIN CHICAGO//

    //Abre las opciones de location
    cy.get('ion-select')
      .should('have.value', 'chicago')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Selecciona la opcion de Austin TX
    cy.get('#alert-input-4-3')
      .should('have.text', 'Seattle, WA')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Da click en el boton OK
    cy.get('.alert-button-group > :nth-child(2)')
      .should('have.text', 'OK')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Verifica que la imagen que esta en el momento sea la que se eligio en la opcion location
    cy.get('div>div').not('[ng-reflect-ng-style="false"]')
      .should('have.class', 'about-image seattle');
    //2 Segundos de espera
    cy.wait(2000);
    //FIN SEATTLE//

    //Abre las opciones de location
    cy.get('ion-select')
      .should('have.value', 'seattle')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Selecciona la opcion de Austin TX
    cy.get('#alert-input-5-0')
      .should('have.text', 'Madison, WI')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Da click en el boton OK
    cy.get('.alert-button-group > :nth-child(2)')
      .should('have.text', 'OK')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Verifica que la imagen que esta en el momento sea la que se eligio en la opcion location
    cy.get('div>div')
      .not('[ng-reflect-ng-style="false"]')
      .should('have.class', 'about-image madison');
    //2 Segundos de espera
    cy.wait(2000);
  });

  it('Prueba 6', () => {
    //Visita la pagina about
    cy.visit('http://localhost:8100/app/tabs/about');
    //2 Segundos de espera
    cy.wait(2000);
    //Verifica que el campo “date” debe iniciar en “May 17, 2047” al iniciar la aplicación
    cy.get('ion-text.md')
      .should('have.text', 'May 17, 2047');
    //2 Segundos de espera
    cy.wait(2000);
  });

  it('Prueba 7', () => {
    //Visita la pagina about
    cy.visit('http://localhost:8100/app/tabs/about');
    //2 Segundos de espera
    cy.wait(2000);
    //Verifica que el campo “date” debe iniciar en “May 17, 2047” al iniciar la aplicación
    cy.get('ion-text.md')
      .should('have.text', 'May 17, 2047');
    //2 Segundos de espera
    cy.wait(2000);
    //Abre la opcion de date
    cy.get('#open-date-input')
      .click();
    //2 Segundos de espera
    cy.wait(2000);
    //Elige la opcion de May 3, 2047
    cy.get('#date-input-popover > .ng-untouched')
      .click(250, 100);
    //2 Segundos de espera
    cy.wait(2000);
    //Verifica que  el campo “date” debe ser  “May 3, 2047” al cambiar la opcion anterior
    cy.get('ion-text.md')
      .should('have.text', 'May 3, 2047');
    //2 Segundos de espera
    cy.wait(2000);
  });



});
