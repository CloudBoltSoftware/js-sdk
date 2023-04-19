import { baseApi } from '../../../baseApi'
import ResourceStructuredParameterValueService from './ResourceStructuredParameterValueService'

const RS_ID = 'RSC-123'
const BASE_URL = `/v3/cmp/resourcesStructured/${RS_ID}/parameterValues/`
const VAL_ID = 'VAL-123'
const VAL_URL = `${BASE_URL}${VAL_ID}/`
const goodPayload = {
  fieldId: VAL_ID,
  value: 'test value'
}
const mockResponse = { data: { hello: 'world' } }

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue(mockResponse)
  await ResourceStructuredParameterValueService.list(RS_ID)
  expect(mockFn).toHaveBeenCalledWith(BASE_URL)
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue(mockResponse)
  await ResourceStructuredParameterValueService.get(RS_ID, VAL_ID)
  expect(mockFn).toHaveBeenCalledWith(VAL_URL)
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue(mockResponse)
  await ResourceStructuredParameterValueService.create(RS_ID, goodPayload)
  expect(mockFn).toHaveBeenCalledWith(BASE_URL, goodPayload)
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'patch').mockResolvedValue(mockResponse)
  await ResourceStructuredParameterValueService.update(
    RS_ID,
    VAL_ID,
    goodPayload
  )
  expect(mockFn).toHaveBeenCalledWith(VAL_URL, goodPayload)
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await ResourceStructuredParameterValueService.delete(RS_ID, VAL_ID)
  expect(mockFn).toHaveBeenCalledWith(VAL_URL)
})
