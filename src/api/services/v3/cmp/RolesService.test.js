import { baseApi } from '../../../baseApi'
import RolesService from './RolesService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await RolesService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/roles/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await RolesService.get('role-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/roles/role-id/')
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockRole = {
    label: 'world',
    name: 'worldName'
  }
  await RolesService.create(mockRole)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/roles/', mockRole)
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockRole = { hello: 'world' }
  await RolesService.update('role-id', mockRole)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/roles/role-id/', mockRole)
})

test('replace calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'put').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockRole = { hello: 'world' }
  await RolesService.replace('role-id', mockRole)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/roles/role-id/', mockRole)
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await RolesService.delete('role-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/roles/role-id/')
})
