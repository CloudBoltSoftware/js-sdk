import crud from '../../../crudOperations'
import UserService from './UserService'

const USER_URL = 'v3/cmp/user'
const WIDGETS_URL = 'v3/cmp/users/1/dashboardWidgets'

describe('UserService', () => {
  it('getCurrentUser calls crud.getItemByEndpoint and returns result', async () => {
    jest.spyOn(crud, 'getItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await UserService.getCurrentUser()

    expect(crud.getItemByEndpoint).toBeCalledWith(USER_URL)
    expect(response).toBe('dummyResponse')
  })

  it('getWidgets calls crud.getItemByEndpoint and returns result', async () => {
    jest
      .spyOn(crud, 'getItemByEndpoint')
      .mockResolvedValue({ widgetsJson: '[1, 2]' })

    const response = await UserService.getWidgets(1)

    expect(crud.getItemByEndpoint).toBeCalledWith(WIDGETS_URL)
    expect(response).toEqual([1, 2])
  })

  it('updateWidgets calls crud.updateEntity and returns the result', async () => {
    jest.spyOn(crud, 'updateEntity').mockResolvedValue('dummyResponse')

    const response = await UserService.updateWidgets(1, [1, 2])

    expect(crud.updateEntity).toBeCalledWith(WIDGETS_URL, {
      widgetsJson: [1, 2]
    })
    expect(response).toBe('dummyResponse')
  })
})
