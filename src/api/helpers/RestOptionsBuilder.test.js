import {
  RestOptionsBuilder,
  RETRIEVE_ALL_DATA_AND_SORT_BY_NAME
} from './RestOptionsBuilder'

describe('RETRIEVE_ALL_DATA_AND_SORT_BY_NAME', () => {
  it('sets default paging and sorting', () => {
    const restDefaults = RETRIEVE_ALL_DATA_AND_SORT_BY_NAME

    expect(restDefaults).toBe('?sort=name%7Casc&page=1&page_size=9999')
  })
})

describe('RestOptionsBuilder', () => {
  it('allows for setting of lastSize', () => {
    const restDefaultsWithLastSize = new RestOptionsBuilder()
      .page(1, 9999)
      .sortBy(['name'], [false])
      .last(50)
      .build()

    expect(restDefaultsWithLastSize).toBe(
      '?sort=name%7Casc&page=1&page_size=9999&last=50'
    )
  })

  it('allows for building without setting anything', () => {
    const restWithNothingSet = new RestOptionsBuilder().build()

    expect(restWithNothingSet).toBe('')
  })
})
