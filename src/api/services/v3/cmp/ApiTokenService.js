import { baseApi } from '../../../baseApi'
import crud from '../../../crudOperations'

/**
 *
 * @param {string} username - pulls domain from username if in the format username@domain
 * @param {string} password
 * @returns {{ username: string, password: string, domain: string}}
 */
function createTokenRequestBody(username, password) {
  let domain = null
  const retObject = {}

  // if the username is in the format username@domain then actually add domain
  // as an explicit key in the json payload
  const usernameComponents = username.split('@')
  if (usernameComponents.length > 1) {
    domain = usernameComponents.pop()
    username = usernameComponents.join('@')
  }

  retObject.username = username
  retObject.password = password
  if (domain) {
    retObject.domain = domain
  }

  return retObject
}

export default {
  /**
   * Uses login credentials to retrieve an API token
   * @param {string} username
   * @param {string} password
   * @returns {string | undefined} - Returns the api token or undefined
   */
  obtainToken: async (username, password) => {
    const requestBody = createTokenRequestBody(username, password)
    let response = await crud.createNewItem('api/v3/cmp/apiToken', requestBody)
    const token = response.token
    return token
  },

  obtainTokenWithSessionCookie: async () => {
    let response = await baseApi.post(
      'api/v3/cmp/apiToken/',
      {},
      { withCredentials: true }
    )
    const token = response?.data?.token
    if (token) {
      return token
    } else {
      throw new Error('Invalid response from API')
    }
  },

  /**
   * Get a new token using an existing API token
   * @returns {string | undefined} - Returns the api token or undefined
   */
  refreshToken: async () => {
    let response = await crud.createNewItem('api/v3/cmp/apiTokenRefresh', null)
    if (response?.token) {
      return response?.token
    }
  }
}
