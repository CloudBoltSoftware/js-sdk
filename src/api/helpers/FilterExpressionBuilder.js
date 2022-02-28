const FILTER = 'filter'
const ID = 'id'
const JOIN_AND = ';'
const ICONTAINS = 'icontains'
const IEXACT = 'iexact'
const IN = 'in'
const NOT_IN = 'not_in'
const PYTHON_FALSE = 'False'
const PYTHON_TRUE = 'True'

export class FilterExpressionBuilder {
  andExpressions = []
  withFieldEquals(field, value) {
    this.andExpressions.push(`${field}.${IEXACT}:${value}`)
    return this
  }

  withFieldEqualsBoolean(field, value) {
    const booleanValue = value ? PYTHON_TRUE : PYTHON_FALSE
    this.andExpressions.push(`${field}:${booleanValue}`)
    return this
  }

  withFieldId(field, value) {
    this.andExpressions.push(`${field}.${ID}:${value}`)
    return this
  }

  withFieldILike(field, value) {
    this.andExpressions.push(`${field}.${ICONTAINS}:${value}`)
    return this
  }

  withFieldIn(field, list) {
    this.andExpressions.push(`${field}.${IN}:[${list}]`)
    return this
  }

  withFieldNotIn(field, list) {
    this.andExpressions.push(`${field}.${NOT_IN}:[${list}]`)
    return this
  }

  build() {
    return this.andExpressions.length
      ? `${FILTER}=${this.andExpressions.join(JOIN_AND)}`
      : ''
  }
}
