/// <reference types="cypress" />
import React from "react";
import "../App.css";
import { Difficulty } from "./Difficulty";

describe("Numbers", () => {
  it("changes difficulty", () => {
    cy.mount(
      <div className="innerContainer">
        <section className="status">
          <Difficulty onChange={cy.stub().as("change")} />
        </section>
      </div>
    );
    cy.get("select").select("Medium");
    cy.get("select").should("have.value", "Medium");
    cy.get("@change")
      .should("have.been.calledOnce")
      .its("firstCall.args.0.target.value")
      .then(cy.log)
      .should("equal", "Medium");
  });
});
