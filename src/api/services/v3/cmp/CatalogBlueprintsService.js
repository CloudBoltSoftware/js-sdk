import crud from '../../../crudOperations'

const URL = 'v3/cmp/catalog/blueprints'

export default {
  /**
   * Retrieve a list of existing Blueprints
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response list of Blueprint objects
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Blueprint for a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of a Blueprint object
   */
  get: (id) => crud.getItemById(URL, id)
}
