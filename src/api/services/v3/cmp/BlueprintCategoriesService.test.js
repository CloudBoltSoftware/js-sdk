import { baseApi } from '../../../baseApi'
import BlueprintCategoriesService from './BlueprintCategoriesService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await BlueprintCategoriesService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/blueprintCategories/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await BlueprintCategoriesService.get('blueprintCategory-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/blueprintCategories/blueprintCategory-id/')
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockBlueprintCategory = { hello: 'world' }
  await BlueprintCategoriesService.create(mockBlueprintCategory)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/blueprintCategories/', mockBlueprintCategory)
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'put').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockBlueprintCategory = { hello: 'world' }
  await BlueprintCategoriesService.update('blueprintCategory-id', mockBlueprintCategory)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/blueprintCategories/blueprintCategory-id/', mockBlueprintCategory)
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await BlueprintCategoriesService.delete('blueprintCategory-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/blueprintCategories/blueprintCategory-id/')
})
