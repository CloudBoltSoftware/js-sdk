import { baseApi } from '../../../baseApi'
import ServerActionsService from './ServerActionsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ServerActionsService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/serverActions/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ServerActionsService.get('serverAction-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/serverActions/serverAction-id/')
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockServerAction = {
    zipFile: 'world.zip'
  }
  await ServerActionsService.create(mockServerAction)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/serverActions/',
    mockServerAction
  )
})

test('export calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' },
    headers: {
      'content-disposition': 'attachment; filename=action.zip'
    }
  })

  await ServerActionsService.export('serverAction-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/serverActions/serverAction-id/export/',
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
  const mockServerActionsOptions = {
    password: 'worldServerActions',
    instanceSpecificInfo: true
  }
  await ServerActionsService.export('serverAction-id', mockServerActionsOptions)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/serverActions/serverAction-id/export/',
    mockServerActionsOptions,
    { responseType: 'blob' }
  )
})

test('run calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockServerAction = {
    servers: ['server-href'],
    parameters: {
      param1: 'value1'
    }
  }
  await ServerActionsService.run('serverAction-id', mockServerAction)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/serverActions/serverAction-id/runAction/',
    mockServerAction
  )
})

test('run calls the synchronous endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockServerAction = {
    servers: ['server-href'],
    parameters: {
      param1: 'value1'
    }
  }
  await ServerActionsService.runSync('serverAction-id', mockServerAction)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/serverActions/serverAction-id/runActionSync/',
    mockServerAction
  )
})
