import { baseApi } from '../../../baseApi'
import SystemService from './SystemService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({})
  await SystemService.status()
  expect(mockFn).toHaveBeenCalledWith('v3/cmp/system/status')
})
