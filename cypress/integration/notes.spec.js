import faker from "faker";

const fakeNotes = {
  title: faker.lorem.words(3),
  content: faker.lorem.lines(1)
};

describe("notes", () => {
  it("should create note", async () => {
    cy.visit("http://localhost:1234");
    cy.getByTestId("plus-btn").click();
    cy.getByLabelText(/Title/)
      .click()
      .type(fakeNotes.title);
    cy.getByLabelText(/Content/)
      .click()
      .type(fakeNotes.content);
    cy.getByText(/Submit/).click();
    cy.queryByText(fakeNotes.title, { timeout: 7000 }).should("exist");
  });
});
