import { baseApi } from '../../../../baseApi'
import OsBuildRatesService from './OsBuildRatesService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await OsBuildRatesService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/rates/osBuildRates/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await OsBuildRatesService.get('osBuildRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/rates/osBuildRates/osBuildRate-id/'
  )
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockOsBuildRate = {
    rate: 'world',
    osBuild: 'world'
  }
  await OsBuildRatesService.create(mockOsBuildRate)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/rates/osBuildRates/',
    mockOsBuildRate
  )
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockOsBuildRate = { rate: 'biggerWorld' }
  await OsBuildRatesService.update('osBuildRate-id', mockOsBuildRate)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/rates/osBuildRates/osBuildRate-id/',
    mockOsBuildRate
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await OsBuildRatesService.delete('osBuildRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/rates/osBuildRates/osBuildRate-id/'
  )
})
