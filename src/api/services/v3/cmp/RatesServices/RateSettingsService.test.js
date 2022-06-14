import { baseApi } from '../../../../baseApi'
import RateSettingsService from './RateSettingsService'

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await RateSettingsService.get()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/rates/settings/')
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockRatesSettings = {
    rateTimeUnit: 'world',
    rateCurrencyUnitname: 'world'
  }
  await RateSettingsService.update(mockRatesSettings)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/settings/',
    mockRatesSettings
  )
})
