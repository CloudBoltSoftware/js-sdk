import crud from '../../../crudOperations'

const URL = 'api/v3/cmp/datatables/types'

export default {
  /**
   * Retrieve a list of existing DataTableTypes
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing DataTableTypes
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing DataTableType by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the DataTableType object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new DataTableType
   * @param {object} data new DataTableType object definition
   * @returns {Promise} resolves with a new DataTableType object with all server-filled fields
   */
  create: (data) => crud.createNewItem(URL, data),

  /**
   * Update an existing DataTableType
   * @param {string} id or global_id
   * @param {object} data updated DataTableType object definition
   * @returns {Promise} resolves with a cloudbolt API Response of the updated DataTableType object
   */
  replace: (id, data) => crud.updateItemById(URL, id, data),

  /**
   * Partially update an existing DataTableType
   * @param {string} id or global_id
   * @param {object} data updated DataTableType object definition
   * @returns {Promise} resolves with a cloudbolt API Response of the updated DataTableType object
   */
  update: (id, data) => crud.patchItemById(URL, id, data),

  /**
   * Delete an existing DataTableType for a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
