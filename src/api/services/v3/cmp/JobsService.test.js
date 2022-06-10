import { baseApi } from '../../../baseApi'
import JobsService from './JobsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await JobsService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/jobs/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await JobsService.get('job-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/jobs/job-id/')
})
