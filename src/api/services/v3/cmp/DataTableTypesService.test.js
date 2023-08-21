import { baseApi } from '../../../baseApi'
import DataTableTypesService from './DataTableTypesService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await DataTableTypesService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/datatables/types/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await DataTableTypesService.get('dataTableType-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/datatables/types/dataTableType-id/'
  )
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockDataTableType = {
    dataModel: 'resources.models.ResourcesStructured',
    name: 'Mock Data Table Type'
  }
  await DataTableTypesService.create(mockDataTableType)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/datatables/types/',
    mockDataTableType
  )
})

test('replace calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'put').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockDataTableType = {
    dataModel: 'resources.models.ResourcesStructured',
    name: 'Mock Data Table Type'
  }
  await DataTableTypesService.replace('dataTableType-id', mockDataTableType)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/datatables/types/dataTableType-id/',
    mockDataTableType
  )
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockDataTableType = {
    name: 'Updated Mock Data Table Type'
  }
  await DataTableTypesService.update('dataTableType-id', mockDataTableType)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/datatables/types/dataTableType-id/',
    mockDataTableType
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await DataTableTypesService.delete('dataTableType-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/datatables/types/dataTableType-id/'
  )
})
