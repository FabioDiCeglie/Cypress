describe("Timer", () => {
  it("shows 10 seconds", () => {
    cy.visit("/");
    cy.contains(".status__time", "00:10", { timeout: 11_000 });
  });
});
