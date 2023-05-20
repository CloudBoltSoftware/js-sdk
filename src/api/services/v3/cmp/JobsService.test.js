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

test('cancel calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue()

  const payload = {
    jobs: ['/v3/cmp/jobs/job-id/']
  }
  await JobsService.cancel(payload)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/jobs/cancel/', payload)
})

test('clone calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue()

  await JobsService.clone('job-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/jobs/job-id/clone/', null)
})

test('resume calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue()
  const payload = {
    resume_type: 'STEP'
  }
  await JobsService.resume('job-id', payload)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/jobs/job-id/resume/', payload)
})
