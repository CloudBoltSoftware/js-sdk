import { baseApi } from '../../../baseApi'
import OrdersService from './OrdersService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await OrdersService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/orders/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await OrdersService.get('order-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/orders/order-id/')
})

test('duplicate calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })

  await OrdersService.duplicate('order-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/orders/order-id/duplicate/',
    undefined
  )
})

test('approve calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })

  await OrdersService.approve('order-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/orders/order-id/approve/',
    undefined
  )
})

test('deny calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockDenyOrderDetail = {
    reason: 'unfriendly'
  }

  await OrdersService.deny('order-id', mockDenyOrderDetail)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/orders/order-id/deny/',
    mockDenyOrderDetail
  )
})

test('submit calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })

  await OrdersService.submit('order-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/orders/order-id/submit/',
    undefined
  )
})

test('cancel calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })

  await OrdersService.cancel('order-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/orders/order-id/cancel/',
    undefined
  )
})

test('clear calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })

  await OrdersService.clear('order-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/orders/order-id/clear/',
    undefined
  )
})
