/// <reference types="cypress" />
import React from "react";
import "../App.css";
import { Timer } from "./Timer";
import { SudokuProvider } from "../context/SudokuContext";

describe("Timers", () => {
  it("sets the clock to the given value", () => {
    // @ts-ignore
    cy.mount(
      <SudokuProvider>
        <section className="status">
          <Timer />
        </section>
      </SudokuProvider>
    );
    cy.contains("00:01");
    cy.contains("00:02");
  });
});
