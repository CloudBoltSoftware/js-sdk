import { baseApi } from '../../../baseApi'
import CustomFormsService from './CustomFormsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await CustomFormsService.list()
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/customForms/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await CustomFormsService.get('customForm-id')
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/customForms/customForm-id/')
})

test('submit order calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockCustomFormOrder = {
    group: 'admin',
    imput_1: 'category world'
  }
  await CustomFormsService.submitOrder('customForm-id', mockCustomFormOrder)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/customForms/customForm-id/submit/',
    mockCustomFormOrder
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await CustomFormsService.delete('customForm-id')
  expect(mockFn).toHaveBeenCalledWith('/api/v3/cmp/customForms/customForm-id/')
})
