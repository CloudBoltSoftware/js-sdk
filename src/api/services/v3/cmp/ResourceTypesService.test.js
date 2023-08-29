import { baseApi } from '../../../baseApi'
import ResourceTypesService from './ResourceTypesService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ResourceTypesService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/resourceTypes/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ResourceTypesService.get('resourceType-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/resourceTypes/resourceType-id/'
  )
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockResourceType = {
    label: 'world',
    name: 'world'
  }
  await ResourceTypesService.create(mockResourceType)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/resourceTypes/',
    mockResourceType
  )
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockResourceType = { name: 'biggerWorld' }
  await ResourceTypesService.update('resourceType-id', mockResourceType)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/resourceTypes/resourceType-id/',
    mockResourceType
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await ResourceTypesService.delete('resourceType-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/resourceTypes/resourceType-id/'
  )
})
