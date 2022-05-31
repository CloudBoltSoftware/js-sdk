import { baseApi } from '../../../baseApi'
import ProductLicensesService from './ProductLicensesService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await ProductLicensesService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/productLicenses/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ProductLicensesService.get('productLicense-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/productLicenses/productLicense-id/'
  )
})

test('add calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockProductLicense = { hello: 'world' }
  await ProductLicensesService.add(mockProductLicense)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/productLicenses/',
    mockProductLicense
  )
})

test('verify calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })

  await ProductLicensesService.verify()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/productLicenses/status/')
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await ProductLicensesService.delete('productLicense-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/productLicenses/productLicense-id/'
  )
})
