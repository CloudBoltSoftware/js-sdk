import { baseApi } from '../../../baseApi'
import ParametersService from './ParametersService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await ParametersService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/parameters/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await ParametersService.get('parameter-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/parameters/parameter-id/')
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockParameters = {
    label: 'world',
    name: 'world',
    type: 'world'
  }
  await ParametersService.create(mockParameters)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/parameters/', mockParameters)
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockParameters = { name: 'biggerWorld' }
  await ParametersService.update('parameter-id', mockParameters)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/parameters/parameter-id/',
    mockParameters
  )
})

test('replace calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'put').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockParameters = {
    label: 'newWorld',
    name: 'newWorld',
    type: 'newWorld'
  }
  await ParametersService.replace('parameter-id', mockParameters)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/parameters/parameter-id/',
    mockParameters
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await ParametersService.delete('parameter-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/parameters/parameter-id/')
})
