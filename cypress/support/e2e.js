Cypress.Commands.add("waitForPageLoad", () => {
  cy.get("body").should("be.visible");
  cy.wait(2000);
});

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("getLayoutMap")) {
    return false;
  }
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
