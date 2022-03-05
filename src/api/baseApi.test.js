import { baseApi, clearAuthHeader, setAuthHeader } from './baseApi'

describe('baseApi', () => {
  describe('setAuthHeader', () => {
    it('sets the Authorization header as a Bearer token', () => {
      setAuthHeader('totally.real.token')

      expect(baseApi.defaults.headers.common['Authorization']).toBe(
        'Bearer totally.real.token'
      )
    })
  })

  describe('clearAuthHeader', () => {
    it('allows you to clear the Authorization header', () => {
      baseApi.defaults.headers.common['Authorization'] =
        'Bearer totally.real.token'

      clearAuthHeader()

      expect(baseApi.defaults.headers.common['Authorization']).toBe('')
    })
  })
})
