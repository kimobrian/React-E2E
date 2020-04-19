/// <reference types="cypress" />

describe("Product Comparison", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("selects two products to compare them", () => {
    // Start the test
    cy.eyesOpen({
      appName: "ProductCompare",
      testName: "Select 2 products to compare",
      browser: {width: 800, height: 600},
    });

    // Click the Cherry Product
    cy.get("[data-cy=one-product]")
      .find("[data-cy=view-details]")
      .eq(0)
      .click();

    // Take a snapshot
    cy.eyesCheckWindow("first product selected");

    // Click the Orange Product
    cy.get("[data-cy=one-product]")
      .find("[data-cy=view-details]")
      .eq(1)
      .click();

    // Take a snapshot
    cy.eyesCheckWindow("second product selected");

    // Verify Cherry was added to the comparison list
    cy.get("[data-cy=product-compare]").contains("Cherry");

    // Verify Orange was added to the comparison list
    cy.get("[data-cy=product-compare]").contains("Orange");

    // End Test
    cy.eyesClose();
  });
});
