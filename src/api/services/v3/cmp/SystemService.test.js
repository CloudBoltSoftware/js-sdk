import { baseApi } from '../../../baseApi'
import SystemService from './SystemService'

test('status calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({})
  await SystemService.status()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/system/status/')
})

test('settings calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({})
  await SystemService.settings()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/system/settings/')
})
