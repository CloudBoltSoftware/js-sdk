import crud from '../../../crudOperations'

const URL = 'api/v3/cmp/uiExtensionComponents'

export default {
  /**
   * Retrieve a list of existing Ui Extension Components
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a paginated list of existing Ui Extension Components
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Ui Extension Component by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Ui Extension Component object
   */
  get: (id) => crud.getItemById(URL, id)
}
