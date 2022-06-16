import { baseApi } from '../../../baseApi'
import ServerSummaryService from "./ServerSummaryService";

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ServerSummaryService.get()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/serverSummary/')
})
