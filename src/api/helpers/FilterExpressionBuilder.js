const FILTER = 'filter'
const ID = 'id'
const GLOBAL_ID = 'global_id'
const JOIN_AND = ';'
const JOIN_OR = ','
const ICONTAINS = 'icontains'
const IEXACT = 'iexact'
const IN = 'in'
const NOT_IN = 'not_in'
const PYTHON_FALSE = 'False'
const PYTHON_TRUE = 'True'

export class FilterExpressionBuilder {
  expressions = []
  withFieldEquals(field, value) {
    this.expressions.push(`${field}.${IEXACT}:${value}`)
    return this
  }

  withFieldEqualsBoolean(field, value) {
    const booleanValue = value ? PYTHON_TRUE : PYTHON_FALSE
    this.expressions.push(`${field}:${booleanValue}`)
    return this
  }

  withId(field, value) {
    this.expressions.push(`${field}.${ID}:${value}`)
    return this
  }

  withIdIn(field, list) {
    this.expressions.push(`${field}__${ID}__${IN}:[${list}]`)
    return this
  }

  withGlobalId(field, value) {
    this.expressions.push(`${field}.${GLOBAL_ID}:${value}`)
    return this
  }

  withGlobalIdIn(field, list) {
    this.expressions.push(
      `"${field}__${GLOBAL_ID}__${IN}":["${list.join('","')}"]`
    )
    return this
  }

  withFieldILike(field, value) {
    this.expressions.push(`${field}.${ICONTAINS}:${value}`)
    return this
  }

  withFieldIn(field, list) {
    this.expressions.push(`${field}.${IN}:[${list}]`)
    return this
  }

  withFieldNotIn(field, list) {
    this.expressions.push(`${field}.${NOT_IN}:[${list}]`)
    return this
  }

  /**
   * Takes the list of expressions and joins them
   * together in either AND or OR syntax. Optionally include
   * the filter key in the query string.
   *
   * @param {object} options Optional options object
   * @param {string} options.join Either 'and' or 'or'
   * @param {boolean} options.includeKey Whether to include the filter key in the query string
   * @returns {string}
   * @example
   * // returns 'filter=[{related__id__in:[1,2,3]},{id__in:[4,5,6]}]'
   * builder.buildQueryString({ join: 'or', includeKey: true })
   * @example
   * //return 'related__id__in:[1,2,3]};{id__in:[4,5,6]'
   * builder.buildQueryString({ join: 'and', includeKey: false })
   * */
  build(options = { join: 'and', includeKey: true }) {
    const join = options.join === 'and' ? JOIN_AND : `}${JOIN_OR}{`
    const and = options.join === 'and' ? true : false
    if (this.expressions.length) {
      return `${options.includeKey ? `${FILTER}=` : ''}${
        and ? '' : '[{'
      }${this.expressions.join(join)}${and ? '' : '}]'}`
    }
    return ''
  }
}
