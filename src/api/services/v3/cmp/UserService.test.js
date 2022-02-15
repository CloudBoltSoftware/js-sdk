import crud from '../../../crudOperations'
import UserService from './UserService'

const USER_URL = 'v3/cmp/user'

describe('UserService', () => {
  it('getCurrentUser calls crud.getItemByEndpoint and returns result', async () => {
    jest.spyOn(crud, 'getItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await UserService.getCurrentUser()

    expect(crud.getItemByEndpoint).toBeCalledWith(USER_URL)
    expect(response).toBe('dummyResponse')
  })
})
