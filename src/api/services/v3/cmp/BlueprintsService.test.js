import { baseApi } from '../../../baseApi'
import BlueprintsService from './BlueprintsService'

beforeEach(() => {
  const createObjectURL = jest.fn()
  const revokeObjectURL = jest.fn()
  global.Blob = () => ({})
  global.URL = { createObjectURL, revokeObjectURL }
})

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await BlueprintsService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/blueprints/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await BlueprintsService.get('blueprint-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/blueprints/blueprint-id/')
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockBlueprintObject = { zipFile: 'world.zip' }
  await BlueprintsService.create(mockBlueprintObject)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/blueprints/',
    mockBlueprintObject
  )
})

test('export calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' },
    headers: {
      'content-disposition': 'attachment; filename=custom_server.zip'
    }
  })

  await BlueprintsService.export('blueprint-id')

  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/blueprints/blueprint-id/export/',
    {},
    { responseType: 'blob' }
  )
})

test('export with options calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' },
    headers: {
      'content-disposition': 'attachment; filename=custom_server.zip'
    }
  })
  const mockBlueprintObject = {
    password: 'world123',
    instanceSpecificOptions: true
  }
  await BlueprintsService.export('blueprint-id', mockBlueprintObject)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/blueprints/blueprint-id/export/',
    mockBlueprintObject,
    { responseType: 'blob' }
  )
})

test('deploymentSchema calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: {
      parameters: [],
      deploymentItems: []
    }
  })

  await BlueprintsService.deploymentSchema('blueprint-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/blueprints/blueprint-id/deploymentSchema/',
    undefined
  )
})

test('deploy calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })

  await BlueprintsService.deploy('blueprint-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/blueprints/blueprint-id/deploy/',
    undefined
  )
})

test('custom deploy calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })

  const mockCustomDeploy = { hello: 'world' }

  await BlueprintsService.deploy('blueprint-id', mockCustomDeploy)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/blueprints/blueprint-id/deploy/',
    mockCustomDeploy
  )
})

test('samplePayload calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })

  const mockPayloadType = { order: 'world' }
  await BlueprintsService.samplePayload('blueprint-id', mockPayloadType)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/blueprints/blueprint-id/samplePayload/',
    mockPayloadType
  )
})
