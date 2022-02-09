import crud from '~/api/crudOperations'
import UserService from './UserService'

export const USER_URL = 'v3/cmp/user'
export const EULA_URL = 'v3/cmp/eula'

describe('UserService', () => {
  it('getCurrentUser calls crud.getItemByEndpoint and returns result', async () => {
    jest.spyOn(crud, 'getItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await UserService.getCurrentUser()

    expect(crud.getItemByEndpoint).toBeCalledWith(USER_URL)
    expect(response).toBe('dummyResponse')
  })

  it('getEulaInfo calls crud.getItemByEndpoint and returns result', async () => {
    jest.spyOn(crud, 'getItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await UserService.getEulaInfo()

    expect(crud.getItemByEndpoint).toBeCalledWith(EULA_URL)
    expect(response).toBe('dummyResponse')
  })

  it('updateEulaInfo calls crud.updateItemByEndpoint with payload and returns result', async () => {
    const payload = 'fakePayload'
    jest.spyOn(crud, 'updateItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await UserService.updateEulaInfo(payload)

    expect(crud.updateItemByEndpoint).toBeCalledWith(EULA_URL, payload)
    expect(response).toBe('dummyResponse')
  })
})
