import { baseApi } from './baseApi'
import crud, { setErrorHandler } from './crudOperations'
import ResponseParser from './helpers/ResponseParser'

const testEndpoint = 'testEndpoint'
const testId = '1'
const responseData = {
  data: {
    test: 'testData'
  }
}
const responseDataWithHeaders = {
  data: {
    test: 'testData'
  },
  headers: {
    'content-disposition': 'attachment; filename=custom.zip'
  }
}
const parsedResponse = {
  test: 'testData'
}
const testOptions = '?sortBy=id'
const testPayload = {
  test: 'test'
}
const simpleError = 'error'

describe('crud', () => {
  describe('deleteItemById', () => {
    it('calls baseApi.delete and returns parsed response', async () => {
      jest.spyOn(baseApi, 'delete').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.deleteItemById(testEndpoint, testId)

      expect(baseApi.delete).toBeCalledWith(`/${testEndpoint}/${testId}/`)
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and throws it by default', async () => {
      jest.spyOn(baseApi, 'delete').mockRejectedValue(simpleError)

      try {
        await crud.deleteItemById(testEndpoint, testId)
      } catch (error) {
        expect(baseApi.delete).toBeCalledWith(`/${testEndpoint}/${testId}/`)
        expect(error).toBe(simpleError)
      }
    })
  })

  describe('getItemById', () => {
    it('calls baseApi.get and returns parsed response', async () => {
      jest.spyOn(baseApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.getItemById(testEndpoint, testId)

      expect(baseApi.get).toBeCalledWith(`/${testEndpoint}/${testId}/`)
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('includes options in request if options are passed in', async () => {
      jest.spyOn(baseApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.getItemById(testEndpoint, testId, testOptions)

      expect(baseApi.get).toBeCalledWith(
        `/${testEndpoint}/${testId}/${testOptions}`
      )
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and throws it by default', async () => {
      jest.spyOn(baseApi, 'get').mockRejectedValue(simpleError)

      try {
        await crud.getItemById(testEndpoint, testId, testOptions)
      } catch (error) {
        expect(baseApi.get).toBeCalledWith(
          `/${testEndpoint}/${testId}/${testOptions}`
        )
        expect(error).toBe(simpleError)
      }
    })
  })

  describe('getItemByEndpoint', () => {
    it('calls baseApi.get and returns parsed response', async () => {
      jest.spyOn(baseApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.getItemByEndpoint(testEndpoint)

      expect(baseApi.get).toBeCalledWith(`/${testEndpoint}/`)
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('includes options in request if options are passed in', async () => {
      jest.spyOn(baseApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.getItemByEndpoint(testEndpoint, testOptions)

      expect(baseApi.get).toBeCalledWith(`/${testEndpoint}/${testOptions}`)
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and throws it by default', async () => {
      jest.spyOn(baseApi, 'get').mockRejectedValue(simpleError)

      try {
        await crud.getItemByEndpoint(testEndpoint, testOptions)
      } catch (error) {
        expect(baseApi.get).toBeCalledWith(`/${testEndpoint}/${testOptions}`)
        expect(error).toBe(simpleError)
      }
    })
  })

  describe('getItems', () => {
    it('calls baseApi.get and returns parsed response', async () => {
      jest.spyOn(baseApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getList').mockReturnValue(parsedResponse)

      const response = await crud.getItems(testEndpoint)

      expect(baseApi.get).toBeCalledWith(`/${testEndpoint}/`)
      expect(ResponseParser.getList).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } }),
        'testEndpoint'
      )
      expect(response).toBe(parsedResponse)
    })

    it('includes options in request if options are passed in', async () => {
      jest.spyOn(baseApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getList').mockReturnValue(parsedResponse)

      const response = await crud.getItems(testEndpoint, testOptions)

      expect(baseApi.get).toBeCalledWith(`/${testEndpoint}/${testOptions}`)
      expect(ResponseParser.getList).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } }),
        'testEndpoint'
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and throws it by default', async () => {
      jest.spyOn(baseApi, 'get').mockRejectedValue(simpleError)

      try {
        await crud.getItems(testEndpoint, testOptions)
      } catch (error) {
        expect(baseApi.get).toBeCalledWith(`/${testEndpoint}/${testOptions}`)
        expect(error).toBe(simpleError)
      }
    })
  })

  describe('createNewItem', () => {
    it('calls baseApi.post with payload and returns parsed response', async () => {
      jest.spyOn(baseApi, 'post').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.createNewItem(testEndpoint, testPayload)

      expect(baseApi.post).toBeCalledWith(
        `/${testEndpoint}/`,
        expect.objectContaining({ test: 'test' })
      )
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and throws it by default', async () => {
      jest.spyOn(baseApi, 'post').mockRejectedValue(simpleError)

      try {
        await await crud.createNewItem(testEndpoint, testPayload)
      } catch (error) {
        expect(baseApi.post).toBeCalledWith(
          `/${testEndpoint}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(error).toBe(simpleError)
      }
    })
  })

  describe('postItem', () => {
    it('calls baseApi.post with payload and returns parsed response', async () => {
      jest.spyOn(baseApi, 'post').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.postItem(testEndpoint, testPayload)

      expect(baseApi.post).toBeCalledWith(
        `/${testEndpoint}/`,
        expect.objectContaining({ test: 'test' })
      )
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and throws it by default', async () => {
      jest.spyOn(baseApi, 'post').mockRejectedValue(simpleError)

      try {
        await await crud.postItem(testEndpoint, testPayload)
      } catch (error) {
        expect(baseApi.post).toBeCalledWith(
          `/${testEndpoint}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(error).toBe(simpleError)
      }
    })
  })

  describe('patchItemById', () => {
    it('calls baseApi.patch with payload and returns parsed response', async () => {
      jest.spyOn(baseApi, 'patch').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.patchItemById(
        testEndpoint,
        testId,
        testPayload
      )

      expect(baseApi.patch).toBeCalledWith(
        `/${testEndpoint}/${testId}/`,
        expect.objectContaining({ test: 'test' })
      )
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and throws it by default', async () => {
      jest.spyOn(baseApi, 'patch').mockRejectedValue(simpleError)

      try {
        await crud.patchItemById(testEndpoint, testId, testPayload)
      } catch (error) {
        expect(baseApi.patch).toBeCalledWith(
          `/${testEndpoint}/${testId}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(error).toBe(simpleError)
      }
    })
  })

  describe('updateItemById', () => {
    it('calls baseApi.put with payload and returns parsed response', async () => {
      jest.spyOn(baseApi, 'put').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.updateItemById(
        testEndpoint,
        testId,
        testPayload
      )

      expect(baseApi.put).toBeCalledWith(
        `/${testEndpoint}/${testId}/`,
        expect.objectContaining({ test: 'test' })
      )
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and throws it by default', async () => {
      jest.spyOn(baseApi, 'patch').mockRejectedValue(simpleError)

      try {
        await crud.updateItemById(testEndpoint, testId, testPayload)
      } catch (error) {
        expect(baseApi.put).toBeCalledWith(
          `/${testEndpoint}/${testId}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(error).toBe(simpleError)
      }
    })
  })

  describe('updateItemByEndpoint', () => {
    it('calls baseApi.put with payload and returns parsed response', async () => {
      jest.spyOn(baseApi, 'put').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.updateItemByEndpoint(
        testEndpoint,
        testPayload
      )

      expect(baseApi.put).toBeCalledWith(
        `/${testEndpoint}/`,
        expect.objectContaining({ test: 'test' })
      )
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and throws it by default', async () => {
      jest.spyOn(baseApi, 'put').mockRejectedValue(simpleError)

      try {
        await crud.updateItemByEndpoint(testEndpoint, testPayload)
      } catch (error) {
        expect(baseApi.put).toBeCalledWith(
          `/${testEndpoint}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(error).toBe(simpleError)
      }
    })
  })

  describe('upload', () => {
    beforeEach(() => {
      const entries = jest.fn()
      const append = jest.fn()
      global.FormData = () => ({ entries, append })
    })
    it('calls baseApi.post', async () => {
      jest.spyOn(baseApi, 'post').mockResolvedValue(responseData)

      const fakeFile = 'text'
      const fakeFileName = 'fileName'

      await crud.upload(testEndpoint, fakeFile, fakeFileName)

      expect(baseApi.post).toHaveBeenCalled()
    })

    it('catches error and throws it by default', async () => {
      jest.spyOn(baseApi, 'post').mockRejectedValue(simpleError)

      try {
        const fakeFile = 'text'
        const fakeFileName = 'fileName'

        await crud.upload(testEndpoint, fakeFile, fakeFileName)
      } catch (error) {
        expect(baseApi.post).toHaveBeenCalled()
        expect(error).toBe(simpleError)
      }
    })
  })

  describe('download', () => {
    beforeEach(() => {
      const createObjectURL = jest.fn()
      const revokeObjectURL = jest.fn()
      global.Blob = () => ({})
      global.URL = { createObjectURL, revokeObjectURL }
    })
    it('calls baseApi.post', async () => {
      jest.spyOn(baseApi, 'post').mockResolvedValue(responseData)

      const fakeFileName = 'fileName'

      await crud.download(testEndpoint, testId, fakeFileName)

      expect(baseApi.post).toHaveBeenCalled()
    })

    it('catches error and throws it by default', async () => {
      jest.spyOn(baseApi, 'post').mockRejectedValue(simpleError)

      try {
        const fakeFileName = 'fileName'

        await crud.download(testEndpoint, testId, fakeFileName)
      } catch (error) {
        expect(baseApi.post).toHaveBeenCalled()
        expect(error).toBe(simpleError)
      }
    })
  })

  describe('downloadWithPayload', () => {
    beforeEach(() => {
      const createObjectURL = jest.fn()
      const revokeObjectURL = jest.fn()
      global.Blob = () => ({})
      global.URL = { createObjectURL, revokeObjectURL }
    })
    it('calls baseApi.post with payload', async () => {
      jest.spyOn(baseApi, 'post').mockResolvedValue(responseDataWithHeaders)

      await crud.downloadWithPayload(testEndpoint, testId, testPayload)

      expect(baseApi.post).toHaveBeenCalled()
      expect(baseApi.post).toBeCalledWith(
        `/${testEndpoint}/${testId}/export/`,
        testPayload,
        { responseType: 'blob' }
      )
    })

    it('catches error and throws it by default', async () => {
      jest.spyOn(baseApi, 'post').mockRejectedValue(simpleError)

      try {
        await crud.downloadWithPayload(testEndpoint, testId, testPayload)
      } catch (error) {
        expect(baseApi.post).toBeCalledWith(
          `/${testEndpoint}/${testId}/export/`,
          testPayload,
          { responseType: 'blob' }
        )
        expect(error).toBe(simpleError)
      }
    })
  })

  describe('error handling', () => {
    it('can be overridden with custom error handler', async () => {
      jest.spyOn(baseApi, 'get').mockRejectedValue(simpleError)
      jest.spyOn(console, 'error').mockImplementation(() => {})
      setErrorHandler((error) => {
        console.error(error)
      })

      try {
        await crud.getItemById(testEndpoint, testId)
      } catch (error) {
        expect(baseApi.get).toBeCalledWith(`/${testEndpoint}/${testId}/`)
        expect(error).toBeNull()
        expect(console.error).toBeCalledWith(simpleError)
      }
    })
  })
})
