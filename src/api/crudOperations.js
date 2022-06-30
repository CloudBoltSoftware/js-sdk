import { baseApi } from './baseApi'
import ResponseParser from './helpers/ResponseParser'

/**
 * Default Error Handler - throws error by default
 * @param {any} error
 */
const defaultErrorHandler = (error) => {
  throw error
}

let handleError = defaultErrorHandler

/**
 * Set error handler with a callback function
 * @param {errorHandlerCallback} callback
 */
export const setErrorHandler = (callback) => {
  handleError = callback
}

/**
 * Error handler callback to do something with the error
 * @callback errorHandlerCallback
 * @param {any} error - The error that was caught
 */

/**
 * Returns the URLSearchParams as a string
 * @param {any | string} options
 * @returns string
 */
const getUrlSearchParamsFromOptions = (options) => {
  // Parse both string or object options
  // See https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  return new URLSearchParams(options).toString()
}

// #region CRUD helpers

/**
 * Create an entity
 * @param {string} endpoint
 * @param {any} payload
 * @returns
 */
const createEntity = async (endpoint, payload) => {
  try {
    const response = await baseApi.post(`/${endpoint}/`, payload)
    return ResponseParser.getSingle(response)
  } catch (error) {
    return handleError(error)
  }
}

/**
 * Delete an entity
 * @param {string} endpoint
 * @param {string | number} id
 * @returns
 */
const deleteSingleEntity = async (endpoint, id) => {
  try {
    const response = await baseApi.delete(`/${endpoint}/${id}/`)
    return ResponseParser.getSingle(response)
  } catch (error) {
    return handleError(error)
  }
}

/**
 * Get an entity
 * @param {string} endpoint
 * @param {string | number} id
 * @param {any | string} options
 * @returns
 */
const getSingleEntity = async (endpoint, id, options) => {
  const searchParams = getUrlSearchParamsFromOptions(options)

  let url = `/${endpoint}/`

  if (id) {
    url = `${url}${id}/`
  }
  if (searchParams) {
    url = `${url}?${searchParams}`
  }

  try {
    const response = await baseApi.get(url)
    return ResponseParser.getSingle(response)
  } catch (error) {
    return handleError(error)
  }
}

/**
 * Get multiple entities
 * @param {string} endpoint
 * @param {any | string} options
 * @param {string} responseField - defaults to endpoint if not supplied
 * @returns
 */
const getMultipleEntities = async (
  endpoint,
  options,
  responseField = endpoint
) => {
  const searchParams = getUrlSearchParamsFromOptions(options)

  let url = `/${endpoint}/`

  if (searchParams) {
    url = `${url}?${searchParams}`
  }

  //responsefield might be set to something like 'dashboard/groups' and we just want 'groups'
  if (responseField.includes('/')) {
    responseField = responseField.substring(responseField.lastIndexOf('/') + 1)
  }

  try {
    const response = await baseApi.get(url)
    return ResponseParser.getList(response, responseField)
  } catch (error) {
    return handleError(error)
  }
}

/**
 * Patch an entity
 * @param {string} endpoint
 * @param {string | number} id
 * @param {any} payload
 * @returns
 */
const patchEntity = async (endpoint, id, payload) => {
  let url = `/${endpoint}/`
  if (id) {
    url = `${url}${id}/`
  }

  try {
    const response = await baseApi.patch(url, payload)
    return ResponseParser.getSingle(response)
  } catch (error) {
    return handleError(error)
  }
}

/**
 * Update an entity
 * @param {string} endpoint
 * @param {string | number} id
 * @param {any} payload
 * @returns
 */
const updateEntity = async (endpoint, id, payload) => {
  let url = `/${endpoint}/`
  if (id) {
    url = `${url}${id}/`
  }

  try {
    const response = await baseApi.put(url, payload)
    return ResponseParser.getSingle(response)
  } catch (error) {
    return handleError(error)
  }
}

/**
 * Upload file to a location
 * @param {string} endpoint
 * @param {any} file
 * @param {string} keyName
 * @returns
 */
const uploadFile = async (endpoint, file, keyName) => {
  try {
    const formData = new FormData()
    formData.append(keyName, file)
    formData.append('replaceExisting', 'true')
    const config = {
      headers: {
        'Content-Disposition': `attachment; filename=${file.name}`
      }
    }
    await baseApi.post(`/${endpoint}/`, formData, config)
  } catch (error) {
    return handleError(error)
  }
}

/**
 * Download file from a location
 * @param {string} endpoint
 * @param {string | number} id
 * @param {string} filename
 * @returns
 */
const downloadFile = async (endpoint, id, filename) => {
  try {
    const url = `/${endpoint}/${id}/export/`
    const response = await baseApi.post(url, {}, { responseType: 'blob' })

    if (!filename) {
      filename = response.headers['content-disposition'].split('filename=')[1]
    }
    const blob = new Blob([response.data], { type: 'application/zip' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename
    link.click()
    URL.revokeObjectURL(link.href)
  } catch (error) {
    return handleError(error)
  }
}

/**
 * Download file from a location
 * @param {string} endpoint
 * @param {string | number} id
 * @param {any} payload
 * @returns
 */
const downloadPayloadFile = async (endpoint, id, payload = {}) => {
  try {
    const url = `/${endpoint}/${id}/export/`
    const response = await baseApi.post(url, payload, { responseType: 'blob' })
    const filename =
      response.headers['content-disposition'].split('filename=')[1]

    const blob = new Blob([response.data], { type: 'application/zip' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename
    link.click()
    URL.revokeObjectURL(link.href)
  } catch (error) {
    return handleError(error)
  }
}

// #endregion

// #region base api methods

/**
 * Delete an item
 * @param {string} endpoint
 * @param {string | number} id
 * @returns
 */
export const deleteItemById = (endpoint, id) => {
  return deleteSingleEntity(endpoint, id)
}

/**
 * Get an item by an ID
 * @param {string} endpoint
 * @param {string | number} id
 * @param {any | string} options
 * @returns
 */
export const getItemById = (endpoint, id, options) => {
  return getSingleEntity(endpoint, id, options)
}

/**
 * Get an item by an endpoint (typically used by endpoints when no ID is applicable or necesary)
 * @param {string} endpoint
 * @param {any | string} options
 * @returns
 */
export const getItemByEndpoint = (endpoint, options) => {
  return getSingleEntity(endpoint, null, options)
}

/**
 * Get multiple items
 * @param {string} endpoint
 * @param {any | string} options
 * @returns
 */
export const getItems = (endpoint, options) => {
  return getMultipleEntities(endpoint, options)
}

/**
 * Create an item
 * @param {string} endpoint
 * @param {any} payload
 * @returns
 */
export const createNewItem = (endpoint, payload) => {
  return createEntity(endpoint, payload)
}

/**
 * POST request to an endpoint
 * @param {string} endpoint
 * @param {any} payload
 * @returns
 */
export const postItem = (endpoint, payload) => {
  return createEntity(endpoint, payload)
}

/**
 *
 * @param {string} endpoint
 * @param {string | number} id
 * @param {any} payload
 * @returns
 */
export const patchItemById = (endpoint, id, payload) => {
  return patchEntity(endpoint, id, payload)
}

/**
 * Update an item by ID
 * @param {string} endpoint
 * @param {string | number} id
 * @param {any} payload
 * @returns
 */
export const updateItemById = (endpoint, id, payload) => {
  return updateEntity(endpoint, id, payload)
}

/**
 * Update item by endpoint (typically used by endpoints when no ID is applicable or necesary)
 * @param {string} endpoint
 * @param {any} payload
 * @returns
 */
export const updateItemByEndpoint = (endpoint, payload) => {
  return updateEntity(endpoint, null, payload)
}

/**
 * Upload a file to a location
 * @param {string} endpoint
 * @param {any} file
 * @param {string} keyName
 * @returns
 */
export const upload = (endpoint, file, keyName) => {
  return uploadFile(endpoint, file, keyName)
}

/**
 * Download a file from a location
 * @param {string} endpoint
 * @param {string | number} id
 * @param {string} filename
 * @returns
 */
export const download = (endpoint, id, filename) => {
  return downloadFile(endpoint, id, filename)
}

export const downloadWithPayload = (endpoint, id, payload) => {
  return downloadPayloadFile(endpoint, id, payload)
}
// #endregion

export default {
  deleteItemById,
  getItemById,
  getItemByEndpoint,
  getItems,
  createNewItem,
  patchItemById,
  updateItemById,
  updateItemByEndpoint,
  upload,
  download,
  downloadWithPayload,
  postItem
}
