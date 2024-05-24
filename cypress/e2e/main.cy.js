/// <reference types="cypress" />

describe("my first test", () => {
  beforeEach(() => {
    cy.visit("../../app/index.html");
  });

  it("type and return Caesar code", () => {
    cy.get("#key").type("5").should("have.value", "5");

    cy.get("#text")
      .type("Je m'appelle Quentin")
      .should("have.value", "Je m'appelle Quentin");

    cy.get("#button").click();

    cy.get("#res").should("have.text", "Rt v'fzztllt Jxtfnhf");
  });
});
