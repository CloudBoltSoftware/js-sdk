import crud from '../../../crudOperations'

const URL = 'v3/cmp/uiExtensionComponents'

export default {
  /**
   * Retrieve a list of existing Resource Types
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a paginated list of existing Resource Types
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Resource Type by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Resource Type object
   */
  get: (id) => crud.getItemById(URL, id)
}
