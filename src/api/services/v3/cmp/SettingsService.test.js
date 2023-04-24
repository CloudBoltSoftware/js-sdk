import { baseApi } from '../../../baseApi'
import SettingsService from './SettingsService'

test('settings calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({})
  await SettingsService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/settings/')
})

test('settings list passes options correctly', async () => {
  const testOptions = '?fields=runQuickSetup'
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { runQuickSetup: 'true' }
  })
  await SettingsService.list(testOptions)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/settings/?fields=runQuickSetup')
})
