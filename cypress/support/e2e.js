// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Comandos básicos de Cypress
// Esperar que el DOM esté cargado completamente
// Comando para esperar que la página cargue
Cypress.Commands.add("waitForPageLoad", () => {
  cy.get("body").should("be.visible");
  cy.wait(2000);
});

// Comando para capturar screenshot
Cypress.Commands.add("takeScreenshot", (name) => {
  cy.screenshot(name);
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignora errores relacionados a getLayoutMap
  if (err.message.includes("getLayoutMap")) {
    return false;
  }
  // Otros errores pueden seguir fallando si querés
});

Cypress.on("unhandledrejection", (event) => {
  if (
    event.reason &&
    event.reason.message &&
    event.reason.message.includes("getLayoutMap")
  ) {
    return false;
  }
});
