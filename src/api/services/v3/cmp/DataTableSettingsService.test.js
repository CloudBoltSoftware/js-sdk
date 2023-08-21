import { baseApi } from '../../../baseApi'
import DataTableSettingsService from './DataTableSettingsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await DataTableSettingsService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/datatables/settings/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await DataTableSettingsService.get('dataTableSetting-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/datatables/settings/dataTableSetting-id/'
  )
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockDataTableSetting = {
    dataTableType: 'mockType',
    name: 'Mock Data Table Setting'
  }
  await DataTableSettingsService.create(mockDataTableSetting)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/datatables/settings/',
    mockDataTableSetting
  )
})

test('replace calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'put').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockDataTableSetting = {
    dataTableType: 'mockType',
    name: 'Mock Data Table Setting'
  }
  await DataTableSettingsService.replace(
    'dataTableSetting-id',
    mockDataTableSetting
  )
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/datatables/settings/dataTableSetting-id/',
    mockDataTableSetting
  )
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockDataTableSetting = {
    name: 'Updated Mock Data Table Type'
  }
  await DataTableSettingsService.update(
    'dataTableSetting-id',
    mockDataTableSetting
  )
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/datatables/settings/dataTableSetting-id/',
    mockDataTableSetting
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await DataTableSettingsService.delete('dataTableSetting-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/datatables/settings/dataTableSetting-id/'
  )
})
