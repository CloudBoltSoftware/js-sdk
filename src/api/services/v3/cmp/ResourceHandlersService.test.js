import { baseApi } from '../../../baseApi'
import ResourceHandlersService from './ResourceHandlersService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ResourceHandlersService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/resourceHandlers/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ResourceHandlersService.get('resourceHandler-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/resourceHandlers/resourceHandler-id/'
  )
})
