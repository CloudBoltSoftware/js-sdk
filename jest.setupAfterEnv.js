class FormDataMock {
  constructor() {}

  append = jest.fn()
  delete = jest.fn()
  get = jest.fn()
  getAll = jest.fn()
  has = jest.fn()
  set = jest.fn()
  forEach = jest.fn()
}

const URLMock = {
  createObjectURL: jest.fn(),
  revokeObjectURL: jest.fn()
}

class BlobMock {
  constructor(content, options) {
    return {
      size: content[0].length,
      type: options.type
    }
  }
}

// clear the mock.calls and mock.instances prperties of all mocks
global.beforeAll(() => {
  global.Blob = BlobMock
  global.URL = URLMock
  global.FormData = FormDataMock
})
