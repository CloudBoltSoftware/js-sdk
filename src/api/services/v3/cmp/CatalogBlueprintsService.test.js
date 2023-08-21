import { baseApi } from '../../../baseApi'
import CatalogBlueprintsService from './CatalogBlueprintsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await CatalogBlueprintsService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/catalog/blueprints/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await CatalogBlueprintsService.get('blueprintCatalog-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/catalog/blueprints/blueprintCatalog-id/'
  )
})
