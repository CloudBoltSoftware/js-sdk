import { createApi } from './index.js'

it('should export a function', () => {
  expect(typeof createApi).toBe('function')
})

it('should return an object', () => {
  expect(typeof createApi()).toBe('object')
})

test.each(['base', 'v3'])(
  'should return an object with %s property',
  (apiName) => {
    expect(typeof createApi()[apiName]).toBe('object')
  }
)
