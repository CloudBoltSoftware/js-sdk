import { baseApi } from '../../../baseApi'
import CustomFormsService from './CustomFormsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await CustomFormsService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/customForms/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await CustomFormsService.get('customForm-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/customForms/customForm-id/')
})
