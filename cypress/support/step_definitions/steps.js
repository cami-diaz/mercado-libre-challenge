import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { googlePage } from "../../e2e/pages/google.page";

Given("I open Google page", () => {
  googlePage.visit();
});

Then("the title should include {string}", (title) => {
  googlePage.getTitle().should("include", title);
});
