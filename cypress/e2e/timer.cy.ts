describe("Timer", () => {
  it("shows 10 seconds", () => {
    cy.visit("/");
    // cy.contains(".status__time", "00:10", { timeout: 11_000 });
    for (let k = 0; k < 10; k++) {
      cy.contains(".status__time", `00:0${k}`);
    }
  });
});
