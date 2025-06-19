import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MercadoLibrePage from "../../e2e/pages/MercadoLibre.page.js";

Given("que soy un usuario interesado en comprar un iPhone 13 128gb", () => {
  cy.log("Usuario preparado para buscar iPhone 13");
});

Given("que ingreso al sitio web de Mercado Libre", () => {
  MercadoLibrePage.visit();
});

When("busco {string}", (searchTerm) => {
  MercadoLibrePage.search(searchTerm);
});

Then("los resultados deben contener {string}", (productName) => {
  MercadoLibrePage.getResultTitles()
    .should("exist")
    .then(($titles) => {
      const match = [...$titles].some((el) => {
        const text = el.innerText.toLowerCase();
        return text.includes(productName.toLowerCase());
      });
      expect(match, `Al menos un resultado contiene "${productName}"`).to.be
        .true;
    });
});

Then("debo poder verificar que puedo comprar el producto", () => {
  MercadoLibrePage.selectFirstResultByText("iphone 13 128gb");
  cy.window().then((win) => {
    const scrollHeight = win.document.body.scrollHeight;
    win.scrollTo(0, scrollHeight * 0.1);
  });
  MercadoLibrePage.getBuyButton()
    .scrollIntoView({ block: "center" })
    .should("be.visible")
    .then(($el) => {
      const text = $el.text().toLowerCase();
      if (text.includes("comprar")) {
        cy.wrap($el).click();
      } else {
        cy.log('El elemento no existe o no contiene la palabra "comprar"');
      }
    });
});

Then("se debe solicitar que ingrese mi usuario", () => {
  MercadoLibrePage.getLoginPrompt()
    .should("be.visible")
    .invoke("text")
    .then((text) => {
      expect(text.toLowerCase()).to.include(
        "¡hola! para comprar, ingresá a tu cuenta"
      );
    });
});

When(
  "aplico filtro de precio entre {string} y {string}",
  (minPrice, maxPrice) => {
    MercadoLibrePage.setPriceFilter(minPrice, maxPrice);
  }
);

Then("debo ver resultados filtrados", () => {
  cy.url().should("include", "PriceRange_0-800000");
});

Then("debo ver un mensaje de {string}", (message) => {
  cy.contains(message, { timeout: 5000 }).should(
    "be.visible",
    `Fallo: No se encontró el mensaje esperado en la página: "${message}"`
  );
  cy.screenshot("mensaje-no-encontrado");
});
