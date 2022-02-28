import axios from 'axios'

const BASE_URL = '/api'

/**
 * Base Axios Instance for CloudBolt API
 */
export const baseApi = axios.create({
  baseURL: BASE_URL
})
