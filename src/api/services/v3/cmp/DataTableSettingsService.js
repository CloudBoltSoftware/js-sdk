import crud from '../../../crudOperations'

const URL = 'api/v3/cmp/datatables/settings'

export default {
  /**
   * Retrieve a list of existing DataTableSettings
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing DataTableSettings
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing DataTableSettings by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the DataTableSettings object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new DataTableSettings
   * @param {object} data new DataTableSettings object definition
   * @returns {Promise} resolves with a new DataTableSettings object with all server-filled fields
   */
  create: (data) => crud.createNewItem(URL, data),

  /**
   * Update an existing DataTableSettings
   * @param {string} id or global_id
   * @param {object} data updated DataTableSettings object definition
   * @returns {Promise} resolves with a cloudbolt API Response of the updated DataTableSettings object
   */
  replace: (id, data) => crud.updateItemById(URL, id, data),

  /**
   * Partially update an existing DataTableSettings
   * @param {string} id or global_id
   * @param {object} data updated DataTableSettings object definition
   * @returns {Promise} resolves with a cloudbolt API Response of the updated DataTableSettings object
   */
  update: (id, data) => crud.patchItemById(URL, id, data),

  /**
   * Delete an existing DataTableSettings for a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
