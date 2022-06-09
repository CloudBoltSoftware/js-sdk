import crud from '../../../crudOperations'

const URL = 'v3/cmp/groups'

export default {
  /**
   * Retrieve a list of existing groups
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of all Groups
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing group
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of Group objects
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new Group
   * @param {object} newGroup new group object definition
   * @returns {Promise} resolves with a new group object with all server-filled fields
   */
  create: (newGroup) => crud.createNewItem(URL, newGroup),

  /**
   * Update an existing Group
   * @param {string} id or global_id
   * @param {object} updatedGroup updated group object definition
   * @returns {Promise} resolves with a cloudbolt API Response object of Group objects
   */
  update: (id, updatedGroup) => crud.updateItemById(URL, id, updatedGroup),

  /**
   * Delete an existing Group
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of Group objects
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
