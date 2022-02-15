import crud from '../../../crudOperations'

export default {
  getProductInfo: async () => await crud.getItemByEndpoint('v3/cmp/productInfo')
}
