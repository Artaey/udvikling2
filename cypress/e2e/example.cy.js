// https://on.cypress.io/api

describe("renders website", () =>{
  it("visits the website", () => {
    cy.visit("/")
  })

  it("check status code", () => {
    cy.request("/").then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it("test navigation", () => {
    cy.visit("/")
    cy.get("a").contains("About").click()
    cy.url().should("include", "/about")
  })
})


