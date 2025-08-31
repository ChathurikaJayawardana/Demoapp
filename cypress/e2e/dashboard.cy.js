/// <reference types="cypress" />

describe("Dashboard App E2E Tests", () => {
  beforeEach(() => {
    // Visit your Vite app (adjust port if needed)
    cy.visit("http://localhost:5173");
  });

  it("Borrower selection updates the center pane", () => {
    // Click on a borrower from the list (assuming borrower list has data-testid)
    cy.get("[data-testid='borrower-item-1']").click();

    // Validate borrower details are displayed in center pane
    cy.get("[data-testid='borrower-detail']").should("contain", "Sarah Dunn");

    // Select another borrower
    cy.get("[data-testid='borrower-item-2']").click();
    cy.get("[data-testid='borrower-detail']").should("contain", "Lisa Carter");
  });

  it("Explainability section expands and collapses", () => {
    cy.get("[data-testid='borrower-item-1']").click();
    
    // Expand accordion
    cy.get("[data-testid='explainability-accordion']").click();

    // Check if explanation text is visible
    cy.get("[data-testid='explainability-content']").should("be.visible");

    // Collapse again
    cy.get("[data-testid='explainability-accordion']").click();
    cy.get("[data-testid='explainability-content']").should("not.be.visible");
  });

  it("Button clicks log appropriate console outputs", () => {
    // Spy on console.log
    cy.window().then((win) => {
      cy.spy(win.console, "log").as("consoleLog");
    });

    // Click Call button
    cy.get("[data-testid='btn-call']").click();
    cy.get("@consoleLog").should("have.been.calledWith", "Calling broker...");

    // Click Email button
    cy.get("[data-testid='btn-email']").click();
    cy.get("@consoleLog").should("have.been.calledWith", "Sending email...");

    // Click Chat button
    cy.get("[data-testid='btn-chat']").click();
    cy.get("@consoleLog").should("have.been.calledWith", "Starting chat...");
  });
});

describe("Loan Action Buttons", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.window().then((win) => {
      cy.spy(win.console, "log").as("consoleLog");
    });
      cy.get("[data-testid='borrower-item-1']").click();
    
    // Expand accordion
    cy.get("[data-testid='explainability-accordion']").click();
  });

  it("Request Documents button logs correct message", () => {
    cy.contains("button", "Request Documents").click();
    cy.get("@consoleLog").should("have.been.calledWith", "Request Docs");
  });

  it("Send to Valuer button logs correct message", () => {
    cy.contains("button", "Send to Valuer").click();
    cy.get("@consoleLog").should("have.been.calledWith", "Send to Valuer");
  });

  it("Approve Loan button logs correct message", () => {
     cy.get("[data-testid='btn-approve']").click();
    /*cy.contains("button", "Approve").click();*/
    cy.get("@consoleLog").should("have.been.calledWith", "Approve Loan");
  });
});

describe("Risk Signal & Escalation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); // adjust if your route differs
    cy.window().then((win) => {
      cy.spy(win.console, "log").as("consoleLog");
    });
    cy.get("[data-testid='borrower-item-1']").click();
  });

  it("renders risk signal container only when risk_signal is present", () => {
    cy.get("[data-testid='risky-container']").should("exist");
    cy.get("[data-testid='risky-container']")
      .contains("⚠️")
      .should("be.visible");
  });

  it("has Escalate to Credit Committee button", () => {
    cy.get("[data-testid='btn-escalate']")
      .should("exist")
      .and("contain.text", "Escalate to Credit Committee");
  });

  it("clicking escalate button logs the correct message", () => {
    cy.get("[data-testid='btn-escalate']").click();
    cy.get("@consoleLog").should(
      "have.been.calledWith",
      "Escalate to Credit Committee"
    );
  });
});

describe("AI Assistant Toggle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); // adjust route if needed
  });

  it("renders AI Assistant label and switch", () => {
    cy.contains("AI Assistant").should("be.visible");
    cy.get("button#ai-assistant").should("exist");
  });

  it("is disabled by default", () => {
    cy.get("button#ai-assistant").should("not.be.checked");
    cy.contains("Disabled").should("be.visible");
  });
  
it("toggles to enabled when clicked", () => {
  cy.get("button#ai-assistant").should("have.attr", "aria-checked", "false");
  cy.get("button#ai-assistant").click({ force: true });
  cy.get("button#ai-assistant").should("have.attr", "aria-checked", "true");
  cy.contains("Enabled").should("be.visible");
});

it("toggles back to disabled when clicked again", () => {
  cy.get("button#ai-assistant").click({ force: true }); // enable
  cy.get("button#ai-assistant").click({ force: true }); // disable
  cy.get("button#ai-assistant").should("have.attr", "aria-checked", "false");
  cy.contains("Disabled").should("be.visible");
});

});
