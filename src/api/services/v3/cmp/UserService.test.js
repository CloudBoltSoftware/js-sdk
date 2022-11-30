import { baseApi } from '../../../baseApi'
import crud from '../../../crudOperations'
import UserService from './UserService'

const USERS_URL = 'v3/cmp/users'
const USER_URL = 'v3/cmp/user'
const WIDGETS_URL = 'v3/cmp/users/1/dashboardWidgets'
const DASHBOARD_URL = 'v3/cmp/users/1/cuiDashboard'
const USER_PERMISSION_URL = 'v3/cmp/users/1/permissions'

const mockApiResponse = {
  _links: {
    self: {
      href: '/api/v3/cmp/users/?page=1',
      title: 'List of Users - Page 1 of 1'
    }
  },
  total: 1,
  count: 1,
  _embedded: {
    users: [
      {
        _links: {
          self: { href: '/api/v3/cmp/users/USR-i7nc49in/', title: 'admin' }
        },
        id: 'USR-i7nc49in',
        firstName: 'admin',
        lastName: 'admin',
        username: 'admin',
        email: 'admin@cloudbolt.io',
        isActive: true,
        source: null,
        superAdmin: true,
        devopsAdmin: false,
        apiAccess: true,
        globalViewer: false,
        lastActivityTime: '2022-10-31 16:54:06.045182',
        passwordResetQuestion: '1',
        hasActiveSession: true
      }
    ]
  }
}

describe('UserService', () => {
  it('calls the correct endpoint', async () => {
    const mockFn = jest.spyOn(crud, 'getItems').mockResolvedValue({
      data: { hello: 'world' }
    })
    await UserService.list({})
    expect(mockFn).toHaveBeenCalledWith(USERS_URL, {})
  })

  it('parses the response correctly', async () => {
    jest.spyOn(baseApi, 'get').mockResolvedValue({ data: mockApiResponse })

    const users = await UserService.list({})
    console.log(users)
    console.log(mockApiResponse)
    expect(users.items.length).toBe(1)
  })

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

  it('getUserDetails calls crud.getItemByEndpoint and returns result', async () => {
    jest.spyOn(crud, 'getItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await UserService.getUserDetails(1)

    expect(crud.getItemByEndpoint).toBeCalledWith(`${USERS_URL}/1`)
    expect(response).toBe('dummyResponse')
  })

  it('updatePassword calls crud.patchItemById', async () => {
    jest.spyOn(crud, 'patchItemById').mockResolvedValue('dummyResponse')
    const payload = {
      password: 'Cloudbolt@123',
      oldPassword: 'Admin@123'
    }

    const response = await UserService.updatePassword(1, payload)

    expect(crud.patchItemById).toBeCalledWith(USERS_URL, 1, payload)
    expect(response).toBe('dummyResponse')
  })

  it('getUserPermission calls crud.getItemByEndpoint and returns result', async () => {
    jest.spyOn(crud, 'getItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await UserService.getUserPermission(1)

    expect(crud.getItemByEndpoint).toBeCalledWith(USER_PERMISSION_URL)
    expect(response).toBe('dummyResponse')
  })
})
