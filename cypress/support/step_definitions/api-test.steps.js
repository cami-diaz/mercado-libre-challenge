import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("consulto el endpoint de monedas", () => {
  cy.request("GET", "https://api.mercadolibre.com/currencies").as(
    "currenciesResponse"
  );
});

When("consulto el endpoint de países", () => {
  cy.request("GET", "https://api.mercadolibre.com/countries").as(
    "countriesResponse"
  );
});

Then("debo recibir una respuesta exitosa de monedas", () => {
  cy.get("@currenciesResponse").its("status").should("eq", 200);
});

Then("debo recibir una respuesta exitosa de países", () => {
  cy.get("@countriesResponse").its("status").should("eq", 200);
});

Then("la respuesta debe contener información de monedas válida", () => {
  cy.get("@currenciesResponse").then((response) => {
    expect(response.body).to.be.an("array").and.to.have.length.greaterThan(0);

    const { id, symbol, description, decimal_places } = response.body[0];

    cy.log(
      `Moneda: ${id}, Símbolo: ${symbol}, Desc: ${description}, Decimales: ${decimal_places}`
    );

    expect(id).to.exist;
    expect(symbol).to.exist;
    expect(description).to.exist;
    expect(decimal_places).to.exist;
  });
});

Then("la respuesta debe contener información de países válida", () => {
  cy.get("@countriesResponse").then((response) => {
    expect(response.body).to.be.an("array").and.to.have.length.greaterThan(0);

    const { id, name, locale, currency_id } = response.body[0];

    cy.log(`País: ${name} (${id}), Locale: ${locale}, Moneda: ${currency_id}`);

    expect(id).to.exist;
    expect(name).to.exist;
    expect(locale).to.exist;
    expect(currency_id).to.exist;
  });
});
