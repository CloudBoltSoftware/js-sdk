import crud from '~/api/crudOperations'
import { RETRIEVE_ALL_DATA_AND_SORT_BY_NAME } from '~/api/helpers/RestOptionsBuilder'

const PRODUCT_LICENSES_URL = 'v3/cmp/productLicenses'
const PRODUCT_LICENSE_STATUS_URL = 'v3/cmp/productLicenses/status'

export default {
  getLicenses: async (options) => {
    const result = await crud.getItems(
      PRODUCT_LICENSES_URL,
      options ? options : RETRIEVE_ALL_DATA_AND_SORT_BY_NAME
    )
    return result?.items
  },
  getLicensingStatus: async () =>
    await crud.getItemByEndpoint(PRODUCT_LICENSE_STATUS_URL)
}
