import crud from '../../../crudOperations'

const URL = 'v3/cmp/osBuilds'

export default {
  /**
   * Retrieve a list of existing Os Builds
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a paginated list of all Os Builds
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Os Build by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Os Build object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new Os Build
   * @param {object} newOsBuild new Os Build object definition
   * @param {string} newOsBuild.name required
   * @returns {Promise} resolves with a new Os Build object with all server-filled fields
   */
  create: (newOsBuild) => crud.createNewItem(URL, newOsBuild),

  /**
   * Update an existing Os Build
   * @param {string} id or global_id
   * @param {object} updatedOsBuild updated Os Build definition
   * @returns {Promise} resolves with a cloudbolt API Response object of the Os Build object
   */
  update: (id, updatedOsBuild) => crud.patchItemById(URL, id, updatedOsBuild),

  /**
   * Replace an existing Os Build by id
   * @param {string} id or global_id
   * @param {object} replacementOsBuild new replacement Os Build definition
   * @returns {Promise} resolves with the successful cloudbolt API Response object of the replacement Os Build object
   */
  replace: (id, replacementOsBuild) =>
    crud.updateItemById(URL, id, replacementOsBuild),

  /**
   * Delete an existing Os Build by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
