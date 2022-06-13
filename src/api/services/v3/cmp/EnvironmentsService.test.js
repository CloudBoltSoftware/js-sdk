import { baseApi } from '../../../baseApi'
import EnvironmentsService from './EnvironmentsService'

beforeEach(() => {
  const createObjectURL = jest.fn()
  const revokeObjectURL = jest.fn()
  global.Blob = () => ({})
  global.URL = { createObjectURL, revokeObjectURL }
})

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await EnvironmentsService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/environments/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await EnvironmentsService.get('environments-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/environments/environments-id/')
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockEnvironment = {
    name: 'worldEnvironment'
  }
  await EnvironmentsService.create(mockEnvironment)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/environments/', mockEnvironment)
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockEnvironment = { name: 'biggerWorldEnvironment' }
  await EnvironmentsService.update('environments-id', mockEnvironment)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/environments/environments-id/',
    mockEnvironment
  )
})

test('replace calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'put').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockEnvironment = {
    name: 'worldWideEnvironment'
  }
  await EnvironmentsService.replace('environments-id', mockEnvironment)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/environments/environments-id/',
    mockEnvironment
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await EnvironmentsService.delete('environments-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/environments/environments-id/')
})

test('export calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' },
    headers: {
      'content-disposition': 'attachment; filename=unassigned.zip'
    }
  })

  await EnvironmentsService.export('environments-id')

  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/environments/environments-id/export/',
    {},
    { responseType: 'blob' }
  )
})

test('export with optional params calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' },
    headers: {
      'content-disposition': 'attachment; filename=unassigned.zip'
    }
  })
  const mockEnvironmentOptions = {
    password: 'worldEnvironment',
    instanceSpecificInfo: true
  }
  await EnvironmentsService.export('environments-id', mockEnvironmentOptions)

  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/environments/environments-id/export/',
    mockEnvironmentOptions,
    { responseType: 'blob' }
  )
})

test('getTechParameters calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await EnvironmentsService.getTechParameters('environments-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/environments/environments-id/techSpecificParameters/'
  )
})

test('refreshTechParameters calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })

  await EnvironmentsService.refreshTechParameters('environments-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/environments/environments-id/techSpecificParameters:refresh/',
    undefined
  )
})

test('getNetworks calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await EnvironmentsService.getNetworks('environments-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/environments/environments-id/networks/'
  )
})

test('setNetworks calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockNetwork = {
    network: 'worldWideNetwork',
    nics: [1, 3, 4]
  }

  await EnvironmentsService.setNetworks('environments-id', mockNetwork)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/environments/environments-id/networks/',
    mockNetwork
  )
})

test('getParameters calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await EnvironmentsService.getParameters('environments-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/environments/environments-id/parameters/'
  )
})

test('setParameters calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockParameters = {
    parameters: [
      {
        parameter: 'world'
      }
    ]
  }

  await EnvironmentsService.setParameters('environments-id', mockParameters)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/environments/environments-id/parameters/',
    mockParameters
  )
})
