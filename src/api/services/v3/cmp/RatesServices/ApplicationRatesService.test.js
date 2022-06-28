import { baseApi } from '../../../../baseApi'
import ApplicationRatesService from './ApplicationRatesService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ApplicationRatesService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/rates/applicationRates/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ApplicationRatesService.get('applicationRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/applicationRates/applicationRate-id/'
  )
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockApplicationRate = {
    rate: 'world',
    application: 'world'
  }
  await ApplicationRatesService.create(mockApplicationRate)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/applicationRates/',
    mockApplicationRate
  )
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockApplicationRate = { rate: 'biggerWorld' }
  await ApplicationRatesService.update(
    'applicationRate-id',
    mockApplicationRate
  )
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/applicationRates/applicationRate-id/',
    mockApplicationRate
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await ApplicationRatesService.delete('applicationRate-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/rates/applicationRates/applicationRate-id/'
  )
})
