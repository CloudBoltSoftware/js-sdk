import crud from '~/api/crudOperations'

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
  /* ************************************************************************ */
  /* ****************************** POST CALLS ****************************** */
  /* ************************************************************************ */

  obtainToken: async (username, password) => {
    const requestBody = createTokenRequestBody(username, password)
    let response = await crud.createNewItem('v3/cmp/apiToken', requestBody)
    const token = response.token
    return token
  },

  // Get a new token using an existing token
  refreshToken: async () => {
    let response = await crud.createNewItem('v3/cmp/apiTokenRefresh', null)
    if (response?.token) {
      return response?.token
    }
  }
}
