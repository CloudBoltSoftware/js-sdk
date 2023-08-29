import { baseApi } from '../../../baseApi'
import ProductLicensesService from './ProductLicensesService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await ProductLicensesService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/productLicenses/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ProductLicensesService.get('productLicense-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/productLicenses/productLicense-id/'
  )
})

test('add calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockProductLicense = { licenseText: 'world' }
  await ProductLicensesService.add(mockProductLicense)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/productLicenses/',
    mockProductLicense
  )
})

test('status calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })

  await ProductLicensesService.status()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/productLicenses/status/')
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await ProductLicensesService.delete('productLicense-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/productLicenses/productLicense-id/'
  )
})
