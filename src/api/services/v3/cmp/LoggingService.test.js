import { baseApi } from '../../../baseApi'
import LoggingService from './LoggingService'

test('getApplicationLog calls the correct endpoint for zipfile', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockLogZipOptions = true

  await LoggingService.getApplicationLog(mockLogZipOptions)
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/logs/application/?zip=true')
})

test('getApplicationLog calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })

  await LoggingService.getApplicationLog()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/logs/application/?zip=false')
})

test('getWebLog calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })

  await LoggingService.getWebLog()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/logs/web/')
})

test('getSupportBundleLog calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })

  await LoggingService.getSupportBundleLog()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/logs/supportBundle/')
})
// Not actually checking/getting zipfile
