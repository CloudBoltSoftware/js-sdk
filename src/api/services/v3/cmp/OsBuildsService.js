import crud from '../../../crudOperations'

const URL = 'v3/cmp/osBuilds'

export default {
  /**
   * Retrieve a list of existing Os Builds
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Os Build by id
   * @param {string} id or global_id
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Os Build objects
   */
  get: (id, options) => crud.getItemById(URL, id, options),

  /**
   * Create a new Os Build
   * @param {object} newOsBuild new Os Build object definition
   * @returns {Promise} resolves with a new Os Build object with all server-filled fields
   */
  create: (newOsBuild) => crud.createNewItem(URL, newOsBuild),

  /**
   * Update an existing Os Build
   * @param {string} id or global_id
   * @param {object} updatedOsBuild updated Os Build definition
   * @returns {Promise} resolves with a cloudbolt API Response object of Os Build objects
   */
  update: (id, updatedOsBuild) => crud.patchItemById(URL, id, updatedOsBuild),

  /**
   * Replace an existing Os Build
   * @param {string} id or global_id
   * @param {object} newOsBuild new replacement Os Build definition
   * @returns {Promise} resolves with the updated cloudbolt API Response object of Os Build object
   */
  replace: (id, newOsBuild) => crud.updateItemById(URL, id, newOsBuild),

  /**
   * Delete an existing Os Build
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of Os Build objects
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
