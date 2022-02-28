import crud from '../../../crudOperations'

export default {
  /**
   * Gets the EULA information for the requesting user
   * @returns
   */
  getEulaInfo: async () => await crud.getItemByEndpoint('v3/cmp/eula'),
  /**
   * Updates the EULA acceptance information for the requesting user
   * @returns
   */
  updateEulaInfo: async (payload) =>
    await crud.updateItemByEndpoint('v3/cmp/eula', payload)
}
