/// <reference types="cypress" />
import React from "react";
import "../../App.css";
import { StatusSection } from "./StatusSection";

describe("StatusSection", () => {
  it("changes modes", () => {
    cy.mount(
      <div className="innercontainer" style={{ marginTop: "30px" }}>
        <StatusSection />
      </div>
    );

    cy.get(".status__action-mistakes-mode input").should("not.be.checked");
    cy.get(".status__action-mistakes-mode").click();
    cy.get(".status__action-mistakes-mode input").should("be.checked");

    cy.get(".status__action-fast-mode input").should("not.be.checked");
    cy.get(".status__action-fast-mode").click();
    cy.get(".status__action-fast-mode input")
      .should("be.checked")
      .wait(1000, { log: false });

    // cy.screenshot("StatusSection - 1");
    cy.viewport(290, 500);
    // cy.screenshot("StatusSection - 2");
  });
});
