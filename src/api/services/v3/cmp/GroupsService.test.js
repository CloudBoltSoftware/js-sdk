import { baseApi } from '../../../baseApi'
import GroupsService from './GroupsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await GroupsService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/groups/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await GroupsService.get('group-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/groups/group-id/')
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockGroup = { hello: 'world' }
  await GroupsService.create(mockGroup)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/groups/', mockGroup)
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'put').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockGroup = { hello: 'world' }
  await GroupsService.update('group-id', mockGroup)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/groups/group-id/', mockGroup)
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await GroupsService.delete('group-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/groups/group-id/')
})
