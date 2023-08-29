import { baseApi } from '../../../baseApi'
import MiscellaneousSettingsService from './MiscellaneousSettingsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await MiscellaneousSettingsService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/miscellaneousSettings/')
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockMiscSettings = { defaultUserDisplayScheme: 'world' }
  await MiscellaneousSettingsService.update(mockMiscSettings)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/miscellaneousSettings/',
    mockMiscSettings
  )
})
