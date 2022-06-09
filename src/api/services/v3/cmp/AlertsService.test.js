import { baseApi } from '../../../baseApi'
import AlertsService from './AlertsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await AlertsService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/alerts/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await AlertsService.get('alert-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/alerts/alert-id/')
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockAlert = {
    type: 'world',
    name: 'worldAlert'
  }
  await AlertsService.create(mockAlert)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/alerts/', mockAlert)
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockAlert = { hello: 'world' }
  await AlertsService.update('alert-id', mockAlert)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/alerts/alert-id/', mockAlert)
})

test('replace calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'put').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockAlert = { hello: 'world' }
  await AlertsService.replace('alert-id', mockAlert)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/alerts/alert-id/', mockAlert)
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await AlertsService.delete('alert-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/alerts/alert-id/')
})
