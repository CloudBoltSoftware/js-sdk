import crud from '~/api/crudOperations'

const USER_URL = 'v3/cmp/user'
const EULA_URL = 'v3/cmp/eula'

export default {
  getCurrentUser: async () => await crud.getItemByEndpoint(USER_URL),
  getEulaInfo: async () => await crud.getItemByEndpoint(EULA_URL),
  updateEulaInfo: async (payload) =>
    await crud.updateItemByEndpoint(EULA_URL, payload)
}
