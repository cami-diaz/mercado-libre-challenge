class MercadoLibrePage {
  static selectors = {
    searchInput: "#cb1-edit",
    searchButton: ".nav-search-btn",
    resultTitle: ".poly-component__title",
    buyButton: "button.ui-pdp-action--primary.andes-button--loud",
    loginPrompt: ".center-card__title",
    minPrice: '[data-testid="Minimum-price"]',
    maxPrice: '[data-testid="Maximum-price"]',
    submitPrice: '[data-testid="submit-price"]',
  };

  visit() {
    cy.visit("https://www.mercadolibre.com.ar");
  }

  search(term) {
    cy.get(MercadoLibrePage.selectors.searchInput).clear().type(term);
    cy.get(MercadoLibrePage.selectors.searchButton).click();
  }

  getResultTitles() {
    return cy.get(MercadoLibrePage.selectors.resultTitle);
  }

  selectFirstResultByText(text) {
    return cy
      .get(MercadoLibrePage.selectors.resultTitle)
      .contains(new RegExp(text, "i"))
      .first()
      .click();
  }

  getBuyButton() {
    return cy.get(MercadoLibrePage.selectors.buyButton, { timeout: 10000 });
  }

  getLoginPrompt() {
    return cy.get(MercadoLibrePage.selectors.loginPrompt, { timeout: 10000 });
  }

  setPriceFilter(min, max) {
    cy.get(MercadoLibrePage.selectors.minPrice).clear().type(min);
    cy.get(MercadoLibrePage.selectors.maxPrice).clear().type(max);
    cy.get(MercadoLibrePage.selectors.submitPrice).click();
  }

  assertLoginPromptVisible(expectedText) {
    this.getLoginPrompt()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(text.toLowerCase()).to.include(expectedText.toLowerCase());
      });
  }
}

export default new MercadoLibrePage();
