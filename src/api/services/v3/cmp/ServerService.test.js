import { baseApi } from '../../../baseApi'
import ServerService from './ServerService'

const URL = '/v3/cmp/servers/'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await ServerService.list()
  expect(mockFn).toHaveBeenCalledWith(URL)
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ServerService.get('server-id')
  expect(mockFn).toHaveBeenCalledWith(`${URL}server-id/`)
})
