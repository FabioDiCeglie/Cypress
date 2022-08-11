/// <reference types="cypress" />
import React from "react";
import "../App.css";
import { Timer, formatTime } from "./Timer";
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
  it("format time", () => {
    // @ts-ignore
    expect(formatTime({ seconds: 3 })).to.equal("00:03");
    // @ts-ignore
    expect(formatTime({ minutes: 55, seconds: 3 })).to.equal("55:03");
    expect(formatTime({ hours: 110, minutes: 55, seconds: 3 })).to.equal(
      "110:55:03"
    );
    cy.document().invoke("write", "HELLO");
  });
});
