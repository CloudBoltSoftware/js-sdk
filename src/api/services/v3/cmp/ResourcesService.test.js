import { baseApi } from '../../../baseApi'
import ResourcesService from './ResourcesService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ResourcesService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/resources/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ResourcesService.get('resource-id')
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/resources/resource-id/')
})
