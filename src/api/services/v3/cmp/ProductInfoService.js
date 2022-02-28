import crud from '../../../crudOperations'

export default {
  /**
   * Gets the product info (version) currently being used
   * @returns
   */
  getProductInfo: async () => await crud.getItemByEndpoint('v3/cmp/productInfo')
}
