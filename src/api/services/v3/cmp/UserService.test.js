import crud from '../../../crudOperations'
import UserService from './UserService'

const USER_URL = 'v3/cmp/user'
const WIDGETS_URL = 'v3/cmp/users/1/dashboardWidgets'
const DASHBOARD_URL = 'v3/cmp/users/1/cuiDashboard'

describe('UserService', () => {
  it('getCurrentUser calls crud.getItemByEndpoint and returns result', async () => {
    jest.spyOn(crud, 'getItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await UserService.getCurrentUser()

    expect(crud.getItemByEndpoint).toBeCalledWith(USER_URL, {
      includeCMPCatalogFields: true
    })
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

  it('updateWidgets calls crud.updateItemByEndpoint and returns the result', async () => {
    jest.spyOn(crud, 'updateItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await UserService.updateWidgets(1, [1, 2])

    expect(crud.updateItemByEndpoint).toBeCalledWith(WIDGETS_URL, {
      widgetsJson: [1, 2]
    })
    expect(response).toBe('dummyResponse')
  })

  it('getDashboard calls crud.getItemByEndpoint and returns result', async () => {
    jest
      .spyOn(crud, 'getItemByEndpoint')
      .mockResolvedValue({ cuiDashboard: '{"widgets": [1, 2]}' })

    const response = await UserService.getDashboard(1)

    expect(crud.getItemByEndpoint).toBeCalledWith(DASHBOARD_URL)
    expect(response).toEqual({ widgets: [1, 2] })
  })

  it('getDashboard returns camelCase keys', async () => {
    jest
      .spyOn(crud, 'getItemByEndpoint')
      .mockResolvedValue({ cuiDashboard: '{"widgets": [{"sort_by": "a"}]}' })

    const response = await UserService.getDashboard(1)

    expect(response).toEqual({ widgets: [{ sortBy: 'a' }] })
  })

  it('updateWidgets calls crud.updateItemByEndpoint and returns the result', async () => {
    jest.spyOn(crud, 'updateItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await UserService.updateDashboard(1, { widgets: [1, 2] })

    expect(crud.updateItemByEndpoint).toBeCalledWith(DASHBOARD_URL, {
      cuiDashboard: { widgets: [1, 2] }
    })
    expect(response).toBe('dummyResponse')
  })
})
