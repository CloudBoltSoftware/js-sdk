import { baseApi } from '../../../baseApi'
import BrandedPortalsService from './BrandedPortalsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await BrandedPortalsService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/brandedPortals/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await BrandedPortalsService.get('brandedPortal-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/brandedPortals/brandedPortal-id/'
  )
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockBrandedPortal = {
    domain: 'world.com',
    name: 'worldPortal'
  }
  await BrandedPortalsService.create(mockBrandedPortal)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/brandedPortals/',
    mockBrandedPortal
  )
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockBrandedPortal = { name: 'biggerWorld' }
  await BrandedPortalsService.update('brandedPortal-id', mockBrandedPortal)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/brandedPortals/brandedPortal-id/',
    mockBrandedPortal
  )
})

test('replace calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'put').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockBrandedPortal = {
    domain: 'worldPortal.com',
    name: 'worldWidePortal'
  }
  await BrandedPortalsService.replace('brandedPortal-id', mockBrandedPortal)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/brandedPortals/brandedPortal-id/',
    mockBrandedPortal
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await BrandedPortalsService.delete('brandedPortal-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/brandedPortals/brandedPortal-id/'
  )
})
