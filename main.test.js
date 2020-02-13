const {
  exampleFunction,
} = require('./main.js')

describe('exampleFunction', () => {
  it(`does nothing, so... you should probably change this test`, () => {
    expect(exampleFunction()).toBe(undefined)
  })
})