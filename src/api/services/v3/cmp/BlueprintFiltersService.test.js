import { baseApi } from '../../../baseApi'
import BlueprintFiltersService from './BlueprintFiltersService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await BlueprintFiltersService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/blueprintFilters/')
})

test('list passes options correctly', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await BlueprintFiltersService.list({ attributes: 'choices' })
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/blueprintFilters/?attributes=choices'
  )
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await BlueprintFiltersService.get('blueprint-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/blueprintFilters/blueprint-id/')
})

test('get passes options correctly', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await BlueprintFiltersService.get('blueprint-id', { attributes: 'choices' })
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/blueprintFilters/blueprint-id/?attributes=choices'
  )
})
