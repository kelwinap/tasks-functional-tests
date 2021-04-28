describe("Health check", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });

  it("should see title", () => {
    cy.visit("http://192.168.0.2:9999/tasks");
    cy.get("h1").should("contain", "Tasks");
  });
});
