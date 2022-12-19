import {
  baseApi,
  clearAuthHeader,
  getAbortController,
  removeAbortController,
  setAbortController,
  setAuthHeader
} from './api/baseApi'
import crud, { setErrorHandler } from './api/crudOperations'
import helpers from './api/helpers'
import v3 from './api/services/v3'

/**
 * Create an api accessor object
 * @param {object} options - Optional options object
 * @param {string} options.errorHandler - A function to handle errors. Optional. Errors are thrown by default.
 */
export const createApi = ({ errorHandler } = {}) => {
  if (errorHandler) setErrorHandler(errorHandler)
  return {
    base: {
      instance: baseApi,
      crud,
      helpers,
      setAuthHeader,
      clearAuthHeader,
      setAbortController,
      getAbortController,
      removeAbortController,
      setErrorHandler
    },
    v3
  }
}
