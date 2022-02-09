export class SortBuilder {
  sortKeys = []
  descendingBools = []

  /**
   * Register keys to sort by and whether each key sorts in ascending or descending order
   * @param {Array} sortKeys Array of keys to sort
   * @param {Array} descendingBools Array of booleans describing sort direction per key
   * @returns this
   */
  sortBy(sortKeys, descendingBools) {
    this.sortKeys = sortKeys
    this.descendingBools = descendingBools
    return this
  }

  build() {
    const sorts = this.sortKeys.map((keyName, idx) => {
      const direction = this.descendingBools[idx] ? 'desc' : 'asc'
      return `${keyName}%7C${direction}`
    })
    const sortStr = sorts.join(',')
    return sortStr ? `sort=${sortStr}` : undefined
  }
}
