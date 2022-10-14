import crud from '../../../crudOperations'

const URL = 'v3/cmp/resourcesStructured'

export default {
  /**
   * Retrieve a list of existing Structured Resources
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Structured Resources
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Structured Resource by idd
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Structured Resource object
   */
  get: (id) => crud.getItemById(URL, id)
}
