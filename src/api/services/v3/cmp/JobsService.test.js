import { baseApi } from '../../../baseApi'
import JobsService from './JobsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await JobsService.list()
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/jobs/?filter=type.iexact%3Afunctionaltest&page_size=100'
  )
})
