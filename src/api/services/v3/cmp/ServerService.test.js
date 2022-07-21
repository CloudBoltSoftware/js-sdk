import { baseApi } from '../../../baseApi'
import ServerService from './ServerService';

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await ServerService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/servers/')
})
