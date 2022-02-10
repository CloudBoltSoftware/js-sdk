import { cloudboltApi } from './baseApi'
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
    it('calls cloudboltApi.delete and returns parsed response', async () => {
      jest.spyOn(cloudboltApi, 'delete').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.deleteItemById(testEndpoint, testId)

      expect(cloudboltApi.delete).toBeCalledWith(`/${testEndpoint}/${testId}/`)
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and handles it', async () => {
      jest.spyOn(cloudboltApi, 'delete').mockRejectedValue(errorData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.deleteItemById(testEndpoint, testId)
      } catch (error) {
        expect(cloudboltApi.delete).toBeCalledWith(
          `/${testEndpoint}/${testId}/`
        )
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })

  describe('getItemById', () => {
    it('calls cloudboltApi.get and returns parsed response', async () => {
      jest.spyOn(cloudboltApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.getItemById(testEndpoint, testId)

      expect(cloudboltApi.get).toBeCalledWith(`/${testEndpoint}/${testId}/`)
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('includes options in request if options are passed in', async () => {
      jest.spyOn(cloudboltApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.getItemById(testEndpoint, testId, testOptions)

      expect(cloudboltApi.get).toBeCalledWith(
        `/${testEndpoint}/${testId}/${testOptions}`
      )
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and handles it', async () => {
      jest.spyOn(cloudboltApi, 'get').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.getItemById(testEndpoint, testId)
      } catch (error) {
        expect(cloudboltApi.get).toBeCalledWith(`/${testEndpoint}/${testId}/`)
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })

  describe('getItemByEndpoint', () => {
    it('calls cloudboltApi.get and returns parsed response', async () => {
      jest.spyOn(cloudboltApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.getItemByEndpoint(testEndpoint)

      expect(cloudboltApi.get).toBeCalledWith(`/${testEndpoint}/`)
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('includes options in request if options are passed in', async () => {
      jest.spyOn(cloudboltApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.getItemByEndpoint(testEndpoint, testOptions)

      expect(cloudboltApi.get).toBeCalledWith(`/${testEndpoint}/${testOptions}`)
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and handles it', async () => {
      jest.spyOn(cloudboltApi, 'get').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.getItemByEndpoint(testEndpoint)
      } catch (error) {
        expect(cloudboltApi.get).toBeCalledWith(`/${testEndpoint}/`)
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })

  describe('getItems', () => {
    it('calls cloudboltApi.get and returns parsed response', async () => {
      jest.spyOn(cloudboltApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getList').mockReturnValue(parsedResponse)

      const response = await crud.getItems(testEndpoint)

      expect(cloudboltApi.get).toBeCalledWith(`/${testEndpoint}/`)
      expect(ResponseParser.getList).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('includes options in request if options are passed in', async () => {
      jest.spyOn(cloudboltApi, 'get').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getList').mockReturnValue(parsedResponse)

      const response = await crud.getItems(testEndpoint, testOptions)

      expect(cloudboltApi.get).toBeCalledWith(`/${testEndpoint}/${testOptions}`)
      expect(ResponseParser.getList).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and handles it', async () => {
      jest.spyOn(cloudboltApi, 'get').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.getItems(testEndpoint)
      } catch (error) {
        expect(cloudboltApi.get).toBeCalledWith(`/${testEndpoint}/`)
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })

  describe('createNewItem', () => {
    it('calls cloudboltApi.post with payload and returns parsed response', async () => {
      jest.spyOn(cloudboltApi, 'post').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.createNewItem(testEndpoint, testPayload)

      expect(cloudboltApi.post).toBeCalledWith(
        `/${testEndpoint}/`,
        expect.objectContaining({ test: 'test' })
      )
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and handles it', async () => {
      jest.spyOn(cloudboltApi, 'post').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.createNewItem(testEndpoint, testPayload)
      } catch (error) {
        expect(cloudboltApi.post).toBeCalledWith(
          `/${testEndpoint}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })

  describe('patchItemById', () => {
    it('calls cloudboltApi.patch with payload and returns parsed response', async () => {
      jest.spyOn(cloudboltApi, 'patch').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.patchItemById(
        testEndpoint,
        testId,
        testPayload
      )

      expect(cloudboltApi.patch).toBeCalledWith(
        `/${testEndpoint}/${testId}/`,
        expect.objectContaining({ test: 'test' })
      )
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and handles it', async () => {
      jest.spyOn(cloudboltApi, 'patch').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.patchItemById(testEndpoint, testId, testPayload)
      } catch (error) {
        expect(cloudboltApi.patch).toBeCalledWith(
          `/${testEndpoint}/${testId}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })

  describe('updateItemById', () => {
    it('calls cloudboltApi.put with payload and returns parsed response', async () => {
      jest.spyOn(cloudboltApi, 'put').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.updateItemById(
        testEndpoint,
        testId,
        testPayload
      )

      expect(cloudboltApi.put).toBeCalledWith(
        `/${testEndpoint}/${testId}/`,
        expect.objectContaining({ test: 'test' })
      )
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and handles it', async () => {
      jest.spyOn(cloudboltApi, 'put').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.updateItemById(testEndpoint, testId, testPayload)
      } catch (error) {
        expect(cloudboltApi.put).toBeCalledWith(
          `/${testEndpoint}/${testId}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })

  describe('updateItemByEndpoint', () => {
    it('calls cloudboltApi.put with payload and returns parsed response', async () => {
      jest.spyOn(cloudboltApi, 'put').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getSingle').mockReturnValue(parsedResponse)

      const response = await crud.updateItemByEndpoint(
        testEndpoint,
        testPayload
      )

      expect(cloudboltApi.put).toBeCalledWith(
        `/${testEndpoint}/`,
        expect.objectContaining({ test: 'test' })
      )
      expect(ResponseParser.getSingle).toBeCalledWith(
        expect.objectContaining({ data: { test: 'testData' } })
      )
      expect(response).toBe(parsedResponse)
    })

    it('catches error and handles it', async () => {
      jest.spyOn(cloudboltApi, 'put').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        await crud.updateItemByEndpoint(testEndpoint, testPayload)
      } catch (error) {
        expect(cloudboltApi.put).toBeCalledWith(
          `/${testEndpoint}/`,
          expect.objectContaining({ test: 'test' })
        )
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })

  describe('upload', () => {
    it('calls cloudboltApi.post', async () => {
      jest.spyOn(cloudboltApi, 'post').mockResolvedValue(responseData)

      const fakeFile = 'text'
      const fakeFileName = 'fileName'

      await crud.upload(testEndpoint, fakeFile, fakeFileName)

      expect(cloudboltApi.post).toHaveBeenCalled()
    })

    it('catches error and handles it', async () => {
      jest.spyOn(cloudboltApi, 'post').mockRejectedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      const fakeFile = 'text'
      const fakeFileName = 'fileName'

      try {
        await crud.upload(testEndpoint, fakeFile, fakeFileName)
      } catch (error) {
        expect(cloudboltApi.post).toHaveBeenCalled()
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })

  describe('download', () => {
    it('calls cloudboltApi.post', async () => {
      jest.spyOn(cloudboltApi, 'post').mockResolvedValue(responseData)

      const fakeFileName = 'fileName'

      await crud.download(testEndpoint, testId, fakeFileName)

      expect(cloudboltApi.post).toHaveBeenCalled()
    })

    it('catches error and handles it', async () => {
      jest.spyOn(cloudboltApi, 'post').mockResolvedValue(responseData)
      jest.spyOn(ResponseParser, 'getErrorMessage').mockReturnValue(parsedError)
      jest.spyOn(console, 'error').mockImplementation(() => {})

      const fakeFileName = 'fileName'

      try {
        await crud.download(testEndpoint, testId, fakeFileName)
      } catch (error) {
        expect(cloudboltApi.post).toHaveBeenCalled()
        expect(ResponseParser.getErrorMessage).toBeCalledWith(errorData)
        expect(console.error).toBeCalledWith(parsedError)
      }
    })
  })
})
