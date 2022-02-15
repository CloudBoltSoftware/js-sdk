import crud from '../../../crudOperations'

export default {
  getEulaInfo: async () => await crud.getItemByEndpoint('v3/cmp/eula'),
  updateEulaInfo: async (payload) =>
    await crud.updateItemByEndpoint('v3/cmp/eula', payload)
}
