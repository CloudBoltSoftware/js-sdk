import { baseApi } from '../../../baseApi'
import LoggingService from './LoggingService'

test('getApplicationLog calls the correct endpoint for zipfile', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockLogOptions = 'zip=true'

  await LoggingService.getApplicationLog(mockLogOptions)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/logs/application/?zip=true')
})

test('getApplicationLog calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })

  await LoggingService.getApplicationLog()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/logs/application/')
})

test('getWebLog calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })

  await LoggingService.getWebLog()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/logs/web/')
})

test('getSupportBundleLog calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })

  await LoggingService.getSupportBundleLog()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/logs/supportBundle/')
})
// Not actually checking/getting zipfile
