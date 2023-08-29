import crud from '../../../crudOperations'

const URL = 'api/v3/cmp/applets'

export default {
  /**
   * Retrieve a list of existing Applets
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Applets
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Applet by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Applet object
   */
  get: (id) => crud.getItemById(URL, id)
}
