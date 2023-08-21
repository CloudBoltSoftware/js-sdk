import { baseApi } from '../../../baseApi'
import UiExtensionComponentsService from './UiExtensionComponentsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await UiExtensionComponentsService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/uiExtensionComponents/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await UiExtensionComponentsService.get('uiExtensionComponent-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/uiExtensionComponents/uiExtensionComponent-id/'
  )
})
