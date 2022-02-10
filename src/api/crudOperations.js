import { cloudboltApi } from '~/api/baseApi'
import ResponseParser from './helpers/ResponseParser'

// #region CRUD helpers
const createEntity = async (endpoint, payload) => {
  try {
    const response = await cloudboltApi.post(`/${endpoint}/`, payload)
    return ResponseParser.getSingle(response)
  } catch (error) {
    return handleError(error)
  }
}

const deleteSingleEntity = async (endpoint, id) => {
  try {
    const response = await cloudboltApi.delete(`/${endpoint}/${id}/`)
    return ResponseParser.getSingle(response)
  } catch (error) {
    return handleError(error)
  }
}

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
    const response = await cloudboltApi.get(url)
    return ResponseParser.getSingle(response)
  } catch (error) {
    return handleError(error)
  }
}

const getMultipleEntities = async (endpoint, options) => {
  // Parse both string or object options
  // See https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const searchParams = new URLSearchParams(options).toString()

  let url = `/${endpoint}/`

  if (searchParams) {
    url = `${url}?${searchParams}`
  }

  try {
    const response = await cloudboltApi.get(url)
    return ResponseParser.getList(response)
  } catch (error) {
    return handleError(error)
  }
}

const patchEntity = async (endpoint, id, payload) => {
  let url = `/${endpoint}/`
  if (id) {
    url = `${url}${id}/`
  }

  try {
    const response = await cloudboltApi.patch(url, payload)
    return ResponseParser.getSingle(response)
  } catch (error) {
    return handleError(error)
  }
}

const updateEntity = async (endpoint, id, payload) => {
  let url = `/${endpoint}/`
  if (id) {
    url = `${url}${id}/`
  }

  try {
    const response = await cloudboltApi.put(url, payload)
    return ResponseParser.getSingle(response)
  } catch (error) {
    return handleError(error)
  }
}

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
    await cloudboltApi.post(`/${endpoint}/`, formData, config)
  } catch (error) {
    return handleError(error)
  }
}

const downloadFile = async (endpoint, id, filename) => {
  try {
    const url = `/${endpoint}/${id}/export/`
    const response = await cloudboltApi.post(url, {}, { responseType: 'blob' })
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
/* ************************************************************************ */
/* ***************************** DELETE CALLS ***************************** */
/* ************************************************************************ */

export const deleteItemById = (endpoint, id) => {
  return deleteSingleEntity(endpoint, id)
}

/* ************************************************************************ */
/* ******************************* GET CALLS ****************************** */
/* ************************************************************************ */

export const getItemById = (endpoint, id, options) => {
  return getSingleEntity(endpoint, id, options)
}

export const getItemByEndpoint = (endpoint, options) => {
  // to be used by endpoints where no ID is applicable or necessary like EULA
  return getSingleEntity(endpoint, null, options)
}

export const getItems = (endpoint, options) => {
  return getMultipleEntities(endpoint, options)
}

/* ************************************************************************ */
/* ****************************** POST CALLS ****************************** */
/* ************************************************************************ */

export const createNewItem = (endpoint, payload) => {
  return createEntity(endpoint, payload)
}

/* ************************************************************************ */
/* ****************************** PATCH CALLS ***************************** */
/* ************************************************************************ */

export const patchItemById = (endpoint, id, payload) => {
  return patchEntity(endpoint, id, payload)
}

/* ************************************************************************ */
/* ******************************* PUT CALLS ****************************** */
/* ************************************************************************ */

export const updateItemById = (endpoint, id, payload) => {
  return updateEntity(endpoint, id, payload)
}

export const updateItemByEndpoint = (endpoint, payload) => {
  // to be used by endpoints where no ID is applicable or necessary like EULA

  return updateEntity(endpoint, null, payload)
}

/* ************************************************************************ */
/* ***************************** FILE TRANSFER **************************** */
/* ************************************************************************ */
export const upload = (endpoint, file, keyName) => {
  return uploadFile(endpoint, file, keyName)
}

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
