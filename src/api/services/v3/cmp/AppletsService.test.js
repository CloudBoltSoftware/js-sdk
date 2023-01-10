import { baseApi } from '../../../baseApi'
import AppletsService from './AppletsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await AppletsService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/applets/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await AppletsService.get('applet-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/applets/applet-id/')
})
