import { baseApi } from './baseApi'
import crud from './crudOperations'
import ResponseParser from './helpers/ResponseParser'

const testEndpoint = 'testEndpoint'
const testId = '1'
const responseData = {
  data: {
    test: 'testData'
  }
}
const parsedResponse = {
  test: 'testData'
}
const errorData = {
  response: {
    data: {
      errors: [{ message: 'Test Error Message' }]
    },
    status: 401
  }
}
const parsedError = 'Test Error Message'
const testOptions = '?sortBy=id'
const testPayload = {
  test: 'test'
}

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

    it('catches error and handles it', async () => {
      jest.spyOn(baseApi, 'delete').mockRejectedValue(errorData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.deleteItemById(testEndpoint, testId)
      } catch (error) {
        expect(baseApi.delete).toBeCalledWith(`/${testEndpoint}/${testId}/`)
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
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

    it('catches error and handles it', async () => {
      jest.spyOn(baseApi, 'get').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.getItemById(testEndpoint, testId)
      } catch (error) {
        expect(baseApi.get).toBeCalledWith(`/${testEndpoint}/${testId}/`)
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
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

    it('catches error and handles it', async () => {
      jest.spyOn(baseApi, 'get').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.getItemByEndpoint(testEndpoint)
      } catch (error) {
        expect(baseApi.get).toBeCalledWith(`/${testEndpoint}/`)
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
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
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('includes options in request if options are passed in', async () => {
      jest.spyOn(baseApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getList').mockReturnValue(parsedResponse)

      const response = await crud.getItems(testEndpoint, testOptions)

      expect(baseApi.get).toBeCalledWith(`/${testEndpoint}/${testOptions}`)
      expect(ResponseParser.getList).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and handles it', async () => {
      jest.spyOn(baseApi, 'get').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.getItems(testEndpoint)
      } catch (error) {
        expect(baseApi.get).toBeCalledWith(`/${testEndpoint}/`)
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
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

    it('catches error and handles it', async () => {
      jest.spyOn(baseApi, 'post').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.createNewItem(testEndpoint, testPayload)
      } catch (error) {
        expect(baseApi.post).toBeCalledWith(
          `/${testEndpoint}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
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

    it('catches error and handles it', async () => {
      jest.spyOn(baseApi, 'patch').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.patchItemById(testEndpoint, testId, testPayload)
      } catch (error) {
        expect(baseApi.patch).toBeCalledWith(
          `/${testEndpoint}/${testId}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
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

    it('catches error and handles it', async () => {
      jest.spyOn(baseApi, 'put').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.updateItemById(testEndpoint, testId, testPayload)
      } catch (error) {
        expect(baseApi.put).toBeCalledWith(
          `/${testEndpoint}/${testId}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
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

    it('catches error and handles it', async () => {
      jest.spyOn(baseApi, 'put').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.updateItemByEndpoint(testEndpoint, testPayload)
      } catch (error) {
        expect(baseApi.put).toBeCalledWith(
          `/${testEndpoint}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })

  describe('upload', () => {
    it('calls baseApi.post', async () => {
      jest.spyOn(baseApi, 'post').mockResolvedValue(responseData)

      const fakeFile = 'text'
      const fakeFileName = 'fileName'

      await crud.upload(testEndpoint, fakeFile, fakeFileName)

      expect(baseApi.post).toHaveBeenCalled()
    })

    it('catches error and handles it', async () => {
      jest.spyOn(baseApi, 'post').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      const fakeFile = 'text'
      const fakeFileName = 'fileName'

      try {
        await crud.upload(testEndpoint, fakeFile, fakeFileName)
      } catch (error) {
        expect(baseApi.post).toHaveBeenCalled()
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })

  describe('download', () => {
    it('calls baseApi.post', async () => {
      jest.spyOn(baseApi, 'post').mockResolvedValue(responseData)

      const fakeFileName = 'fileName'

      await crud.download(testEndpoint, testId, fakeFileName)

      expect(baseApi.post).toHaveBeenCalled()
    })

    it('catches error and handles it', async () => {
      jest.spyOn(baseApi, 'post').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      const fakeFileName = 'fileName'

      try {
        await crud.download(testEndpoint, testId, fakeFileName)
      } catch (error) {
        expect(baseApi.post).toHaveBeenCalled()
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })
})
