import { baseApi } from '../../../baseApi'
import RatesService from './RatesService'

test('getSettings calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await RatesService.getSettings()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/rates/settings/')
})

test('updateSettings calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockRatesSettings = {
    rateTimeUnit: 'world',
    rateCurrencyUnitname: 'world'
  }
  await RatesService.updateSettings(mockRatesSettings)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/settings/',
    mockRatesSettings
  )
})

test('listParameterRates calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await RatesService.listParameterRates()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/rates/parameterRates/')
})

test('getParameterRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await RatesService.getParameterRate('parameterRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/parameterRates/parameterRate-id/'
  )
})

test('createParameterRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockParameterRate = {
    rate: 'world',
    parameter: 'world'
  }
  await RatesService.createParameterRate(mockParameterRate)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/parameterRates/',
    mockParameterRate
  )
})

test('updateParameterRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockParameterRate = { rate: 'biggerWorld' }
  await RatesService.updateParameterRate('parameterRate-id', mockParameterRate)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/parameterRates/parameterRate-id/',
    mockParameterRate
  )
})

test('deleteParameterRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await RatesService.deleteParameterRate('parameterRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/parameterRates/parameterRate-id/'
  )
})

test('listOsBuildRates calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await RatesService.listOsBuildRates()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/rates/osBuildRates/')
})

test('getOsBuildRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await RatesService.getOsBuildRate('osBuildRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/osBuildRates/osBuildRate-id/'
  )
})

test('createOsBuildRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockOsBuildRate = {
    rate: 'world',
    osBuild: 'world'
  }
  await RatesService.createOsBuildRate(mockOsBuildRate)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/osBuildRates/',
    mockOsBuildRate
  )
})

test('updateOsBuildRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockOsBuildRate = { rate: 'biggerWorld' }
  await RatesService.updateOsBuildRate('osBuildRate-id', mockOsBuildRate)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/osBuildRates/osBuildRate-id/',
    mockOsBuildRate
  )
})

test('deleteOsBuildRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await RatesService.deleteOsBuildRate('osBuildRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/osBuildRates/osBuildRate-id/'
  )
})

test('listParameterRates calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await RatesService.listParameterRates()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/rates/parameterRates/')
})

test('getParameterRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await RatesService.getParameterRate('parameterRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/parameterRates/parameterRate-id/'
  )
})

test('createParameterRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockParameterRate = {
    rate: 'world',
    parameter: 'world'
  }
  await RatesService.createParameterRate(mockParameterRate)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/parameterRates/',
    mockParameterRate
  )
})

test('updateParameterRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockParameterRate = { rate: 'biggerWorld' }
  await RatesService.updateParameterRate('parameterRate-id', mockParameterRate)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/parameterRates/parameterRate-id/',
    mockParameterRate
  )
})

test('deleteParameterRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await RatesService.deleteParameterRate('parameterRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/parameterRates/parameterRate-id/'
  )
})

test('listApplicationRates calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await RatesService.listApplicationRates()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/rates/applicationRates/')
})

test('getApplicationRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await RatesService.getApplicationRate('applicationRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/applicationRates/applicationRate-id/'
  )
})

test('createApplicationRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockApplicationRate = {
    rate: 'world',
    application: 'world'
  }
  await RatesService.createApplicationRate(mockApplicationRate)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/applicationRates/',
    mockApplicationRate
  )
})

test('updateApplicationRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockApplicationRate = { rate: 'biggerWorld' }
  await RatesService.updateApplicationRate(
    'applicationRate-id',
    mockApplicationRate
  )
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/applicationRates/applicationRate-id/',
    mockApplicationRate
  )
})

test('deleteApplicationRate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await RatesService.deleteApplicationRate('applicationRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/applicationRates/applicationRate-id/'
  )
})
