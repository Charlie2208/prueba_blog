// https://docs.cypress.io/api/table-of-contents

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("https://www.cypress.io/");
    cy.get(".styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(1)")
      .invoke("removeAttr", "target")
      .click();
  });
});
