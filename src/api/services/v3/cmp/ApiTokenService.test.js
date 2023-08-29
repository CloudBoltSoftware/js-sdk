import { baseApi } from '../../../baseApi'
import crud from '../../../crudOperations'
import ApiTokenService from './ApiTokenService'

const LOGIN_URL = 'api/v3/cmp/apiToken'
const REFRESH_URL = 'api/v3/cmp/apiTokenRefresh'

describe('ApiTokenService', () => {
  it('obtainToken calls API and returns a token', async () => {
    jest.spyOn(crud, 'createNewItem').mockResolvedValue({ token: 'token' })

    const response = await ApiTokenService.obtainToken(
      'testuser',
      'testpassword'
    )

    expect(crud.createNewItem).toBeCalledWith(
      LOGIN_URL,
      expect.objectContaining({
        username: 'testuser',
        password: 'testpassword'
      })
    )
    expect(response).toBe('token')
  })

  it('obtainToken calls API with domain in request if username is an email address', async () => {
    jest.spyOn(crud, 'createNewItem').mockResolvedValue({ token: 'token' })

    const response = await ApiTokenService.obtainToken(
      'testuser@domain.com',
      'testpassword'
    )

    expect(crud.createNewItem).toBeCalledWith(
      LOGIN_URL,
      expect.objectContaining({
        username: 'testuser',
        password: 'testpassword',
        domain: 'domain.com'
      })
    )
    expect(response).toBe('token')
  })

  it('obtainTokenWithSessionCookie uses withCredentials to pass cookie and no post body to API', async () => {
    jest.spyOn(baseApi, 'post').mockResolvedValue({ data: { token: 'token' } })

    const response = await ApiTokenService.obtainTokenWithSessionCookie()

    expect(baseApi.post).toBeCalledWith(
      LOGIN_URL + '/',
      {},
      { withCredentials: true }
    )
    expect(response).toBe('token')
  })

  it('refreshToken calls API and returns a token if API provides one', async () => {
    jest.spyOn(crud, 'createNewItem').mockResolvedValue({ token: 'token' })

    const response = await ApiTokenService.refreshToken(
      'testuser@domain.com',
      'testpassword'
    )

    expect(crud.createNewItem).toBeCalledWith(REFRESH_URL, null)
    expect(response).toBe('token')
  })

  it('refreshToken calls API and returns nothing if API does not provide a token', async () => {
    jest.spyOn(crud, 'createNewItem').mockResolvedValue({})

    const response = await ApiTokenService.refreshToken(
      'testuser@domain.com',
      'testpassword'
    )

    expect(crud.createNewItem).toBeCalledWith(REFRESH_URL, null)
    expect(response).toBeUndefined()
  })

  it('refreshToken returns error if rejected', async () => {
    jest.spyOn(crud, 'createNewItem').mockRejectedValue('test error')
    jest.spyOn(console, 'error').mockImplementation(() => {})
    try {
      await ApiTokenService.refreshToken('testuser', 'testpassword')
    } catch (err) {
      expect(crud.createNewItem).toBeCalledWith(REFRESH_URL, null)
      expect(err).toBe('test error')
    }
  })
})
