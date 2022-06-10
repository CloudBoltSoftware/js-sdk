import { baseApi } from '../../../baseApi'
import ResourceActionsService from './ResourceActionsService'

beforeAll(() => {
  const createObjectURL = jest.fn()
  const revokeObjectURL = jest.fn()
  global.Blob = () => ({})
  global.URL = { createObjectURL, revokeObjectURL }
})

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await ResourceActionsService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/resourceActions/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ResourceActionsService.get('resourceAction-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/resourceActions/resourceAction-id/'
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
    '/v3/cmp/resourceActions/',
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
    '/v3/cmp/resourceActions/resourceAction-id/export/',
    {},
    { responseType: 'blob' }
  )
})

test('run calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockResourceAction = {
    resource: 'world'
  }
  await ResourceActionsService.run('resourceAction-id', mockResourceAction)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/resourceActions/resourceAction-id/runAction/',
    mockResourceAction
  )
})
