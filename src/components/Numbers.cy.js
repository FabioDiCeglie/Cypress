/// <reference types="cypress" />
import React from "react";
import { Numbers } from "./Numbers";
import "../App.css";

describe("Numbers", { viewportHeight: 1000, viewportWidth: 1000 }, () => {
  it("shows numbers", () => {
    // @ts-ignore
    cy.mount(
      <div className="innerContainer">
        <section className="status">
          <Numbers />
        </section>
      </div>
    );
  });
});
