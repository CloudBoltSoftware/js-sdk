import { baseApi } from '../../../baseApi'
import OsBuildsService from './OsBuildsService'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await OsBuildsService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/osBuilds/')
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await OsBuildsService.get('osBuild-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/osBuilds/osBuild-id/')
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockOsBuild = { hello: 'world' }
  await OsBuildsService.create(mockOsBuild)
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/osBuilds/', mockOsBuild)
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockOsBuild = { hello: 'world' }
  await OsBuildsService.update('osBuild-id', mockOsBuild)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/osBuilds/osBuild-id/',
    mockOsBuild
  )
})

test('replace calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'put').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockOsBuild = { hello: 'world' }
  await OsBuildsService.replace('osBuild-id', mockOsBuild)
  expect(mockFn).toHaveBeenCalledWith(
    '/v3/cmp/osBuilds/osBuild-id/',
    mockOsBuild
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await OsBuildsService.delete('osBuild-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/osBuilds/osBuild-id/')
})
