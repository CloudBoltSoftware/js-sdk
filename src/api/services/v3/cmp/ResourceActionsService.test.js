import { baseApi } from '../../../baseApi'
import ResourceActionsService from './ResourceActionsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ResourceActionsService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/resourceActions/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ResourceActionsService.get('resourceAction-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/resourceActions/resourceAction-id/'
  )
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockResourceAction = {
    zipFile: 'world.zip'
  }
  await ResourceActionsService.create(mockResourceAction)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/resourceActions/',
    mockResourceAction
  )
})

test('export calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' },
    headers: {
      'content-disposition': 'attachment; filename=action.zip'
    }
  })

  await ResourceActionsService.export('resourceAction-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/resourceActions/resourceAction-id/export/',
    {},
    { responseType: 'blob' }
  )
})

test('export with options calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' },
    headers: {
      'content-disposition': 'attachment; filename=action.zip'
    }
  })
  const mockResourceActionsOptions = {
    password: 'worldResourceActions',
    instanceSpecificInfo: true
  }
  await ResourceActionsService.export(
    'resourceAction-id',
    mockResourceActionsOptions
  )
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/resourceActions/resourceAction-id/export/',
    mockResourceActionsOptions,
    { responseType: 'blob' }
  )
})

test('run calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockResourceAction = {
    resources: ['resource-href'],
    parameters: {
      param1: 'value1'
    }
  }
  await ResourceActionsService.run('resourceAction-id', mockResourceAction)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/resourceActions/resourceAction-id/runAction/',
    mockResourceAction
  )
})

test('run calls the synchronous endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockResourceAction = {
    resources: ['resource-href'],
    parameters: {
      param1: 'value1'
    }
  }
  await ResourceActionsService.runSync('resourceAction-id', mockResourceAction)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/resourceActions/resourceAction-id/runActionSync/',
    mockResourceAction
  )
})
