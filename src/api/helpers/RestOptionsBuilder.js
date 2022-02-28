import { AttributesBuilder } from './AttributesBuilder'
import { SortBuilder } from './SortBuilder'

const AMPERSAND = '&'

export class RestOptionsBuilder {
  lastSize
  pageNum
  pageSize
  sortBuilder
  attributesBuilder

  constructor() {
    this.attributesBuilder = new AttributesBuilder()
    this.lastSize = undefined
    this.sortBuilder = new SortBuilder()
    this.pageNum = undefined
    this.pageSize = undefined
  }

  last(lastSize) {
    this.lastSize = lastSize.toString()
    return this
  }

  page(pageNum, pageSize) {
    this.pageNum = pageNum.toString()
    this.pageSize = pageSize.toString()
    return this
  }

  sortBy(sortKey, descending) {
    this.sortBuilder.sortBy(sortKey, descending)
    return this
  }

  build() {
    const getOptions = (buildersArray) =>
      buildersArray
        // The Boolean filters are to get rid of undefined Builders
        .filter(Boolean)
        .map((builder) => builder.build())
        .filter(Boolean)
        .join(AMPERSAND)

    const lastBuilder = {
      build: () => (this.lastSize ? `last=${this.lastSize}` : '')
    }

    const pageParamBuilder = {
      build: () =>
        this.pageNum ? `page=${this.pageNum}&page_size=${this.pageSize}` : ''
    }

    const options = getOptions([
      this.sortBuilder,
      this.attributesBuilder,
      pageParamBuilder,
      lastBuilder
    ])

    return options ? `?${options}` : ''
  }
}

export const RETRIEVE_ALL_DATA_AND_SORT_BY_NAME = new RestOptionsBuilder()
  .page(1, 9999)
  .sortBy(['name'], [false])
  .build()
