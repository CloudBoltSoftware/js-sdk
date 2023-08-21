import { baseApi } from '../../../baseApi'
import CitService from './CitService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await CitService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/cit/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await CitService.get('cit-id')
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/cit/cit-id/')
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockCitTest = {
    expectedStatus: 'SUCCESS',
    action: '/worldPortal'
  }
  await CitService.create(mockCitTest)
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/cit/', mockCitTest)
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockCitTest = { action: '/biggerWorld' }
  await CitService.update('cit-id', mockCitTest)
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/cit/cit-id/', mockCitTest)
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await CitService.delete('cit-id')
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/cit/cit-id/')
})
