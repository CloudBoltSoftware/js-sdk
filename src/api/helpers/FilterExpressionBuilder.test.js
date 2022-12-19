import { FilterExpressionBuilder } from './FilterExpressionBuilder'

const testField = 'testField'
const testValue = 'testValue'

describe('FilterExpressionBuilder builds expression', () => {
  it('withFieldEquals', () => {
    const filterExpressionBuilder = new FilterExpressionBuilder()

    const response = filterExpressionBuilder
      .withFieldEquals(testField, testValue)
      .build()
    expect(response).toEqual('filter=testField.iexact:testValue')
  })

  it('withFieldEqualsBoolean true', () => {
    const filterExpressionBuilder = new FilterExpressionBuilder()

    const response = filterExpressionBuilder
      .withFieldEqualsBoolean(testField, true)
      .build()
    expect(response).toEqual('filter=testField:True')
  })

  it('withFieldEqualsBoolean false', () => {
    const filterExpressionBuilder = new FilterExpressionBuilder()

    const response = filterExpressionBuilder
      .withFieldEqualsBoolean(testField, false)
      .build()
    expect(response).toEqual('filter=testField:False')
  })

  it('withId', () => {
    const filterExpressionBuilder = new FilterExpressionBuilder()

    const response = filterExpressionBuilder
      .withId(testField, testValue)
      .build()
    expect(response).toEqual('filter=testField.id:testValue')
  })

  it('withFieldILike', () => {
    const filterExpressionBuilder = new FilterExpressionBuilder()

    const response = filterExpressionBuilder
      .withFieldILike(testField, testValue)
      .build()
    expect(response).toEqual('filter=testField.icontains:testValue')
  })

  it('withFieldIn', () => {
    const filterExpressionBuilder = new FilterExpressionBuilder()

    const response = filterExpressionBuilder
      .withFieldIn(testField, testValue)
      .build()
    expect(response).toEqual('filter=testField.in:[testValue]')
  })

  it('withFieldNotIn', () => {
    const filterExpressionBuilder = new FilterExpressionBuilder()

    const response = filterExpressionBuilder
      .withFieldNotIn(testField, testValue)
      .build()
    expect(response).toEqual('filter=testField.not_in:[testValue]')
  })

  it('with multiple expressions', () => {
    const filterExpressionBuilder = new FilterExpressionBuilder()

    const response = filterExpressionBuilder
      .withId(testField, testValue)
      .withFieldEquals(testField, testValue)
      .build()
    expect(response).toEqual(
      'filter=testField.id:testValue;testField.iexact:testValue'
    )
  })

  it('creates an expression to OR multiple expressions', () => {
    const filterExpressionBuilder = new FilterExpressionBuilder()

    const response = filterExpressionBuilder
      .withId(testField, testValue)
      .withFieldEquals(testField, testValue)
      .build({ join: 'or', includeKey: true })
    expect(response).toEqual(
      'filter=[{testField.id:testValue},{testField.iexact:testValue}]'
    )
  })
})
