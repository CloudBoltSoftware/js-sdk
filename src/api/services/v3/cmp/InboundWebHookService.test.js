import { baseApi } from '../../../baseApi'
import InboundWebHook from './InboundWebHookService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await InboundWebHook.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/inboundWebHooks/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await InboundWebHook.get('inboundWebHook-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/inboundWebHooks/inboundWebHook-id/')
})

test('export calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' },
    headers: {
      'content-disposition': 'attachment; filename=action.zip'
    }
  })

  await InboundWebHook.export('inboundWebHook-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/inboundWebHooks/inboundWebHook-id/export/',
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
  const mockinboundWebHookOptions = {
    password: 'worldinboundWebHook',
    instanceSpecificInfo: true
  }
  await InboundWebHook.export('inboundWebHook-id', mockinboundWebHookOptions)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/inboundWebHooks/inboundWebHook-id/export/',
    mockinboundWebHookOptions,
    { responseType: 'blob' }
  )
})

test('run calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockParameters = {
      param1: 'value1'
  }   
  await InboundWebHook.runGet('inboundWebHook-id', mockParameters)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/inboundWebHooks/inboundWebHook-id/run/?param1=value1',
  )
})

test('run calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockPayload = {
      param1: 'value1'
  }
  await InboundWebHook.runPost('inboundWebHook-id', mockPayload)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/inboundWebHooks/inboundWebHook-id/run/',
    mockPayload
  )
})
