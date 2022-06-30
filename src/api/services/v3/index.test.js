import v3 from './index.js'

it('should export an object', () => {
  expect(typeof v3).toBe('object')
})

test.each(['cmp', 'dashboard'])(
  'should export an object with %s property',
  (apiName) => {
    expect(typeof v3[apiName]).toBe('object')
  }
)
