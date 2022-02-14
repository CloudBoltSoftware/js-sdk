import { baseApi } from '~/api/baseApi'
import ResponseParser from './helpers/ResponseParser'

// #region CRUD helpers

/**
 *
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
 *
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
 *
 * @param {string} endpoint
 * @param {string | number} id
 * @param {any | string} options
 * @returns
 */
const getSingleEntity = async (endpoint, id, options) => {
  // Parse both string or object options
  // See https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const searchParams = new URLSearchParams(options).toString()

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
 *
 * @param {string} endpoint
 * @param {any | string} options
 * @returns
 */
const getMultipleEntities = async (endpoint, options) => {
  // Parse both string or object options
  // See https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const searchParams = new URLSearchParams(options).toString()

  let url = `/${endpoint}/`

  if (searchParams) {
    url = `${url}?${searchParams}`
  }

  try {
    const response = await baseApi.get(url)
    return ResponseParser.getList(response)
  } catch (error) {
    return handleError(error)
  }
}

/**
 *
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
 *
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
 *
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
 *
 * @param {string} endpoint
 * @param {string | number} id
 * @param {string} filename
 * @returns
 */
const downloadFile = async (endpoint, id, filename) => {
  try {
    const url = `/${endpoint}/${id}/export/`
    const response = await baseApi.post(url, {}, { responseType: 'blob' })
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

const handleError = (error) => {
  // TODO: Handle/Log error to wherever we're logging errors instead of the console
  console.error(ResponseParser.getErrorMessage(error))
}
// #endregion

// #region base api methods

/**
 *
 * @param {string} endpoint
 * @param {string | number} id
 * @returns
 */
export const deleteItemById = (endpoint, id) => {
  return deleteSingleEntity(endpoint, id)
}

/**
 *
 * @param {string} endpoint
 * @param {string | number} id
 * @param {any | string} options
 * @returns
 */
export const getItemById = (endpoint, id, options) => {
  return getSingleEntity(endpoint, id, options)
}

/**
 *
 * @param {string} endpoint
 * @param {any | string} options
 * @returns
 */
export const getItemByEndpoint = (endpoint, options) => {
  // to be used by endpoints where no ID is applicable or necessary like EULA
  return getSingleEntity(endpoint, null, options)
}

/**
 *
 * @param {string} endpoint
 * @param {any | string} options
 * @returns
 */
export const getItems = (endpoint, options) => {
  return getMultipleEntities(endpoint, options)
}

/**
 *
 * @param {string} endpoint
 * @param {any} payload
 * @returns
 */
export const createNewItem = (endpoint, payload) => {
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
 *
 * @param {string} endpoint
 * @param {string | number} id
 * @param {any} payload
 * @returns
 */
export const updateItemById = (endpoint, id, payload) => {
  return updateEntity(endpoint, id, payload)
}

/**
 *
 * @param {string} endpoint
 * @param {any} payload
 * @returns
 */
export const updateItemByEndpoint = (endpoint, payload) => {
  // to be used by endpoints where no ID is applicable or necessary like EULA

  return updateEntity(endpoint, null, payload)
}

/**
 *
 * @param {string} endpoint
 * @param {any} file
 * @param {string} keyName
 * @returns
 */
export const upload = (endpoint, file, keyName) => {
  return uploadFile(endpoint, file, keyName)
}

/**
 *
 * @param {string} endpoint
 * @param {string | number} id
 * @param {string} filename
 * @returns
 */
export const download = (endpoint, id, filename) => {
  return downloadFile(endpoint, id, filename)
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
  download
}
