describe("Tasks actions", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });

  it("should see title", () => {
    cy.visit("http://localhost:8001/tasks/");
    cy.get("h1").should("contain", "Tasks");
  });

  it("should click Add Todo", () => {
    cy.contains("Add Todo").click();
  });

  it("should create task", () => {
    cy.get("#task").type("Cypress Task");
    cy.get("#dueDate").type("02/01/2050");
    cy.contains("Save").click();
    cy.get("td").should("contain", "Cypress Task");
  });
});
