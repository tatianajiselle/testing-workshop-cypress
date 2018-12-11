/// <reference types="cypress" />
it('loads', () => {
  // application should be running at port 3000
  cy.visit('localhost:3000')
  cy.contains('h1', 'todos')
})

beforeEach(() => {
  //cy.request('POST', '/reset', { todos: [] })
  cy.visit('/')
})

it.only('starts with zero items', () => {
  // check if the list is empty initially
  cy.visit('/')
  //   find the selector for the individual TODO items
  cy.wait(1000)
  //   in the list
  cy.get('li.todo').should('have.length', 0)
  //   use cy.get(...) and it should have length of 0
  //   https://on.cypress.io/get
})

it('adds two items', () => {
  // load the page
  cy.visit('/')

  // repeat twice
  //    get the input field
  cy.get('.new-todo')
    .type('hi{enter}')
    .type('hope{enter}')
  //    assert that the new Todo item
  cy.get('li.todo', { timeout: 1000 }).should('have.length', 2)
  //    has been added added to the list
})

it('can add many items', () => {
  const N = 5
  for (let k = 0; k < N; k += 1) {
    // add an item
    // probably want to have a reusable function to add an item!
  }
  // check number of items
})

it('can mark items as completed', () => {
  // add a few items
  // repeat twice
  //    get the input field
  cy.get('.new-todo')
    .type('hi{enter}')
    .type('hope{enter}')

  // mark items as completed
  cy.get('li.todo').first()
    .find('input.toggle')
    .click()
  // select completed items and confirm their number
  cy.get('li.todo.completed').should('have.length', 1)
})

// what a challenge?
// test more UI at http://todomvc.com/examples/vue/
