// clear the mock.calls and mock.instances prperties of all mocks
global.beforeAll(() => {
  // eslint-disable-next-line no-undef
  const createObjectURL = jest.fn()
  // eslint-disable-next-line no-undef
  const revokeObjectURL = jest.fn()
  global.Blob = () => ({})
  global.URL = { createObjectURL, revokeObjectURL }
})
global.afterAll(() => {
  global.Blob = undefined
  global.URL = {}
})
