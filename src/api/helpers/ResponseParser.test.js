import ResponseParser from './ResponseParser'

const testErrorMessage = 'Something went wrong!'
const unkownErrorMessage = 'An unknown error occurred.'
const errorArray = [{ message: testErrorMessage }]
const links = {
  _links: {
    self: {
      title: 'thisThing',
      href: 'http://domain.com/thisThing'
    },
    otherItems: [
      {
        title: 'link1',
        href: 'http://domain.com/link1'
      },
      {
        title: 'link2',
        href: 'http://domain.com/link2'
      }
    ],
    someOtherItem: {
      title: 'link3',
      href: 'http://domain.com/link3'
    },
    randomAttribute: 'randomValue'
  }
}

describe('ResponseParser', () => {
  describe('getErrorMessage method', () => {
    it('calls console.error and returns unknown error message if errors is not present', () => {
      jest.spyOn(console, 'error').mockImplementation(() => {})

      const response = ResponseParser.getErrorMessage({
        response: {
          data: {}
        }
      })

      expect(response).toBe(unkownErrorMessage)
      expect(console.error).toBeCalled()
    })

    it('calls console.error and returns unknown error message if errors is not an array', () => {
      jest.spyOn(console, 'error').mockImplementation(() => {})

      const response = ResponseParser.getErrorMessage({
        response: {
          data: {
            errors: 'an error occurred'
          }
        }
      })

      expect(response).toBe(unkownErrorMessage)
      expect(console.error).toBeCalled()
    })

    it('calls console.error and returns unknown error message if errors has no length', () => {
      jest.spyOn(console, 'error').mockImplementation(() => {})

      const response = ResponseParser.getErrorMessage({
        response: {
          data: {
            errors: []
          }
        }
      })

      expect(response).toBe(unkownErrorMessage)
      expect(console.error).toBeCalled()
    })

    it('calls console.error and returns unknown error message if errors array contains no messages', () => {
      jest.spyOn(console, 'error').mockImplementation(() => {})

      const response = ResponseParser.getErrorMessage({
        response: {
          data: {
            errors: [{ msg: 'error' }, { msg: 'another error' }]
          }
        }
      })

      expect(response).toBe(unkownErrorMessage)
      expect(console.error).toBeCalled()
    })

    it('returns multiple errors in comma delimited list', () => {
      const response = ResponseParser.getErrorMessage({
        response: {
          data: {
            errors: [...errorArray, { message: 'another error' }]
          }
        }
      })

      expect(response).toBe('Something went wrong!, another error')
    })

    it('returns single error without adding a comma', () => {
      const response = ResponseParser.getErrorMessage({
        response: {
          data: {
            errors: [...errorArray]
          }
        }
      })

      expect(response).toBe('Something went wrong!')
    })
  })

  describe('getLinkHrefFromItem method', () => {
    it('handles array of links', () => {
      const response = ResponseParser.getLinkHrefFromItem(links, 'otherItems')

      expect(response.length).toBe(2)
      expect(response[0]).toBe('http://domain.com/link1')
      expect(response[1]).toBe('http://domain.com/link2')
    })

    it('handles single link', () => {
      const response = ResponseParser.getLinkHrefFromItem(
        links,
        'someOtherItem'
      )

      expect(response[0]).toBe('http://domain.com/link3')
    })
  })

  describe('getLinkAttributesFromItemList method', () => {
    const response = ResponseParser.getLinkAttributesFromItemList(
      [links],
      'randomAttribute'
    )

    expect(response[0]).toBe('randomValue')
  })

  describe('getList method', () => {
    it('returns items and pageInfo if Page is included', () => {
      const response = ResponseParser.getList(
        {
          data: {
            _links: {
              self: {
                href: '/api/v3/cmp/blueprints/?page=2&attributes=pk&page_size=3',
                title: 'List of Blueprints - Page 2 of 10'
              },
              previous: {
                href: '/api/v3/cmp/blueprints/?page=1&attributes=pk&page_size=3',
                title: 'Previous List Page'
              },
              next: {
                href: '/api/v3/cmp/blueprints/?page=3&attributes=pk&page_size=3',
                title: 'Next List Page'
              }
            },
            _embedded: {
              findMe: [
                {
                  name: 'item 1'
                },
                {
                  name: 'item 2'
                },
                {
                  name: 'item 3'
                }
              ],
              somethingElse: []
            },
            total: 30
          }
        },
        'findMe'
      )

      expect(response.items.length).toBe(3)
      expect(response.items[0].name).toBe('item 1')
      expect(response.pageInfo.page).toBe(2)
      expect(response.pageInfo.nextPage).toBe(
        '/api/v3/cmp/blueprints/?page=3&attributes=pk&page_size=3'
      )
      expect(response.pageInfo.previousPage).toBe(
        '/api/v3/cmp/blueprints/?page=1&attributes=pk&page_size=3'
      )
      expect(response.pageInfo.totalElements).toBe(30)
    })

    it('returns items and pageInfo if Page is not included', () => {
      const response = ResponseParser.getList(
        {
          data: {
            _links: {
              self: {
                title: ''
              }
            },
            _embedded: {
              findMe: [
                {
                  name: 'item 1'
                },
                {
                  name: 'item 2'
                },
                {
                  name: 'item 3'
                }
              ],
              somethingElse: []
            },
            total: 30
          }
        },
        'findMe'
      )

      expect(response.items.length).toBe(3)
      expect(response.items[0].name).toBe('item 1')
      expect(response.pageInfo.page).toBe(1)
      expect(response.pageInfo.nextPage).toBe('')
      expect(response.pageInfo.previousPage).toBe('')
      expect(response.pageInfo.totalElements).toBe(30)
    })

    it('handles empty response', () => {
      const response = ResponseParser.getList({}, 'findMe')

      expect(response.items.length).toBe(0)
      expect(response.pageInfo.page).toBe(1)
      expect(response.pageInfo.totalElements).toBeUndefined()
    })
  })

  describe('getSingle method', () => {
    it('returns the data when no path is given', () => {
      const response = ResponseParser.getSingle({
        data: {
          something: 'somevalue',
          someotherthing: 'someothervalue'
        }
      })
      expect(response.something).toBe('somevalue')
      expect(response.someotherthing).toBe('someothervalue')
    })

    it('returns the field requested when a path is given', () => {})
    const response = ResponseParser.getSingle(
      {
        data: {
          something: 'somevalue',
          someotherthing: 'someothervalue',
          someobject: {
            thinginobject: 'found me!'
          }
        }
      },
      'someobject.thinginobject'
    )
    expect(response).toBe('found me!')
  })

  describe('getDefaultSuccessMessage method', () => {
    it('returns default success message', () => {
      const response = ResponseParser.getDefaultSuccessMessage()
      expect(response).toBe('Success!')
    })
  })
})
