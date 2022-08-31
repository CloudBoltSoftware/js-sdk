import crud from '../../../crudOperations'

export default {
  getSettings: async (options) => {
    const settings = await crud.getItemByEndpoint('v3/cmp/settings', options)
    return settings
  }
}
