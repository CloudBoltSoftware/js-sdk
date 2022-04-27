import { camelCaseKeys, toCamelCase } from './textUtils'

describe('toCamelCase', () => {
  it('replaces kebab-case with camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld')
  })

  it('replaces snake_case with camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld')
  })

  it('keeps camelCase as camelCase', () => {
    expect(toCamelCase('helloWorld')).toBe('helloWorld')
  })
})

describe('camelCaseKeys', () => {
  it('replaces kebab-case keys with camelCase keys for an object', () => {
    const given = { 'hello-world': 'howdy' }
    const expected = { helloWorld: 'howdy' }
    expect(camelCaseKeys(given)).toEqual(expected)
  })

  it('replaces snake_case keys with camelCase keys for an object', () => {
    const given = { hello_world: 'howdy' }
    const expected = { helloWorld: 'howdy' }
    expect(camelCaseKeys(given)).toEqual(expected)
  })

  it('keeps camelCase keys as camelCase keys for an object', () => {
    const given = { helloWorld: 'howdy' }
    const expected = { helloWorld: 'howdy' }
    expect(camelCaseKeys(given)).toEqual(expected)
  })

  it('handles mixed-case cases', () => {
    const given = { 'hello-world': 'howdy', howdy_there: 'howdy' }
    const expected = { helloWorld: 'howdy', howdyThere: 'howdy' }
    expect(camelCaseKeys(given)).toEqual(expected)
  })

  it('handles objects nested in objects', () => {
    const given = { 'hello-world': { 'howdy-there': 'hi' } }
    const expected = { helloWorld: { howdyThere: 'hi' } }
    expect(camelCaseKeys(given)).toEqual(expected)
  })

  it('handles arrays nested in objects', () => {
    const given = { 'hello-world': [{ 'howdy-there': 'hi' }] }
    const expected = { helloWorld: [{ howdyThere: 'hi' }] }
    expect(camelCaseKeys(given)).toEqual(expected)
  })

  it('handles arrays nested in arrays', () => {
    const given = { 'hello-world': [[{ 'howdy-there': 'hi' }]] }
    const expected = { helloWorld: [[{ howdyThere: 'hi' }]] }
    expect(camelCaseKeys(given)).toEqual(expected)
  })

  it('returns strings without alteration', () => {
    const given = 'hello-world'
    const expected = 'hello-world'
    expect(camelCaseKeys(given)).toEqual(expected)
  })
})
