import crud from '~/api/crudOperations'

const PRODUCT_INFO_URL = 'v3/cmp/productInfo'

export default {
  getProductInfo: async () => await crud.getItemByEndpoint(PRODUCT_INFO_URL)
}
