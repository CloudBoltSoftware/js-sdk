import { baseApi } from '../../../../baseApi'
import ParameterRatesService from './ParameterRatesService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ParameterRatesService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/rates/parameterRates/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ParameterRatesService.get('parameterRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/parameterRates/parameterRate-id/'
  )
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockParameterRate = {
    rate: 'world',
    parameter: 'world'
  }
  await ParameterRatesService.create(mockParameterRate)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/parameterRates/',
    mockParameterRate
  )
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockParameterRate = { rate: 'biggerWorld' }
  await ParameterRatesService.update('parameterRate-id', mockParameterRate)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/parameterRates/parameterRate-id/',
    mockParameterRate
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await ParameterRatesService.delete('parameterRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/parameterRates/parameterRate-id/'
  )
})
