import { baseApi } from '../../../baseApi'
import ResourcesStructuredService from './ResourcesStructuredService'

const RESOURCES_STRUCTURED_ENDPOINT = '/api/v3/cmp/resourcesStructured/'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ResourcesStructuredService.list()
  expect(mockFn).toHaveBeenCalledWith(RESOURCES_STRUCTURED_ENDPOINT)
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ResourcesStructuredService.get('resource-id')
  expect(mockFn).toHaveBeenCalledWith(
    `${RESOURCES_STRUCTURED_ENDPOINT}resource-id/`
  )
})

test('get parameter values calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ResourcesStructuredService.getResourceParameters('resource-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/resourcesStructured/resource-id/resourceParameters/'
  )
})
