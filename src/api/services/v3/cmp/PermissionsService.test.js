import { baseApi } from '../../../baseApi'
import PermissionsService from './PermissionsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await PermissionsService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/permissions/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await PermissionsService.get('permission-id')
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/permissions/permission-id/')
})
