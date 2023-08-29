import crud from '../../../crudOperations'
import { RETRIEVE_ALL_DATA_AND_SORT_BY_NAME } from '../../../helpers/RestOptionsBuilder'

export default {
  /**
   * Get list of the product licenses
   * @param {any | string} options
   * @returns
   */
  getLicenses: async (options) => {
    const result = await crud.getItems(
      'api/v3/cmp/productLicenses',
      options ? options : RETRIEVE_ALL_DATA_AND_SORT_BY_NAME
    )
    return result?.items
  },

  /**
   * Get product license status
   * @returns
   */
  getLicensingStatus: async () =>
    await crud.getItemByEndpoint('api/v3/cmp/productLicenses/status')
}
