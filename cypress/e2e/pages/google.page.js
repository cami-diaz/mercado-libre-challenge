class GooglePage {
  visit() {
    cy.visit('https://www.google.com');
  }

  getSearchBox() {
    return cy.get('input[name="q"]');
  }

  getTitle() {
    return cy.title();
  }
}

export const googlePage = new GooglePage();
