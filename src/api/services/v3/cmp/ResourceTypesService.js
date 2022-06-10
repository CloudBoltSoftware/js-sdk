import crud from '../../../crudOperations'

const URL = 'v3/cmp/resourceTypes'

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
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new Resource Type
   * @param {object} newResourceType new Resource Type object definition
   * @param {string} newResourceType.label required
   * @param {string} newResourceType.name required
   * @returns {Promise} resolves with a new Resource Type object with all server-filled fields
   */
  create: (newResourceType) => crud.createNewItem(URL, newResourceType),

  /**
   * Update an existing Resource Type
   * @param {string} id or global_id
   * @param {object} updatedResourceType updated Resource Type object definition
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Resource Type object
   */
  update: (id, updatedResourceType) =>
    crud.patchItemById(URL, id, updatedResourceType),

  /**
   * Delete an existing Resource Type
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
