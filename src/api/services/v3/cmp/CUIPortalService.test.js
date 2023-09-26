import { baseApi } from '../../../baseApi'
import CUIPortalsService from './CUIPortalsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await CUIPortalsService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/cuiPortals/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await CUIPortalsService.get('cuiPortal-id')
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/cuiPortals/cuiPortal-id/')
})
