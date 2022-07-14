/* eslint-disable no-undef */

/// <reference types="cypress" />
describe("hidden input", () => {
  it("works with Cypress.Buffer.from", () => {
    cy.visit("/");
    cy.get("input[type=file]")
      .selectFile(
        {
          contents: Cypress.Buffer.from("file contents"),
          fileName: "file.txt",
          mimeType: "text/plain",
          lastModified: Date.now(),
        },
        { force: true }
      )
      .then(() => {
        cy.contains("file.txt");
      });
  });
  it("works with a reference", () => {
    cy.fixture("my-spreadsheet.csv").as("exampleSpreadsheet");
    cy.get("input[type=file]")
      .selectFile("@exampleSpreadsheet", {
        force: true,
      })
      .then(() => {
        cy.contains("my-spreadsheet.csv");
      });
  });
});
