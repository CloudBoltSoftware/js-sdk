import axios from 'axios'

const BASE_URL = '/api'

/**
 * Base Axios Instance for CloudBolt API
 */
export const baseApi = axios.create({
  baseURL: BASE_URL
})

/**
 * Used to set the Authorization header with the Bearer token
 * @param {string} authToken
 */
export const setAuthHeader = (authToken) => {
  baseApi.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
}

/**
 * Used to clear the Authorization header
 */
export const clearAuthHeader = () => {
  baseApi.defaults.headers.common['Authorization'] = ''
}
