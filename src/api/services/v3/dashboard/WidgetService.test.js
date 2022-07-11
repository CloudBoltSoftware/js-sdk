import { baseApi } from '../../../baseApi'
import WidgetService from './WidgetService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest
    .spyOn(baseApi, 'get')
    .mockResolvedValue({ widgets: [{ hello: 'world' }] })
  await WidgetService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/dashboard/widgets/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest
    .spyOn(baseApi, 'get')
    .mockResolvedValue({ widget: { hello: 'world' } })
  await WidgetService.get('widget-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/dashboard/widgets/widget-id/')
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest
    .spyOn(baseApi, 'post')
    .mockResolvedValue({ widget: { hello: 'world' } })
  const mockWidget = { hello: 'world' }
  await WidgetService.create(mockWidget)
  expect(mockFn).toHaveBeenCalledWith('/v3/dashboard/widgets/', mockWidget)
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest
    .spyOn(baseApi, 'put')
    .mockResolvedValue({ widget: { hello: 'world' } })
  const mockWidget = { hello: 'world' }
  await WidgetService.update('widget-id', mockWidget)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/dashboard/widgets/widget-id/',
    mockWidget
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await WidgetService.delete('widget-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/dashboard/widgets/widget-id/')
})

test('blacklist calls the correct endpoint', async () => {
  const mockFn = jest
    .spyOn(baseApi, 'get')
    .mockResolvedValue([{ hello: 'world' }])
  await WidgetService.blacklist()
  expect(mockFn).toHaveBeenCalledWith('/v3/dashboard/widgets/blacklist/')
})
