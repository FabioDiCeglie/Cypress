/// <reference types="cypress" />
import React from "react";
import "./App.css";
import { Game } from "./Game";
import { SudokuProvider } from "./context/SudokuContext";
import { starting, solved } from "../cypress/fixtures/sudoku.json";

describe("Numbers", () => {
  it("changes difficulty", () => {
    // @ts-ignore
    window.starting = starting;
    // @ts-ignore
    window.solved = solved;
    // @ts-ignore
    cy.mount(
      <SudokuProvider>
        <Game />
      </SudokuProvider>
    );
    cy.get(".game__cell:contains(0)").should("have.length", 3);
    starting.forEach((cell, index) => {
      if (cell === "0") {
        cy.get(".game__cell").eq(index).click();
        cy.contains(".status__number", solved[index]).click().wait(1000);
      }
    });
  });
});
