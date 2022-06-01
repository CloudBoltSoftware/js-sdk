import crud from '../../../crudOperations'

const URL = 'v3/cmp/roles'

export default {
  /**
   * Retrieve a list of existing Roles
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a paginated list of all roles
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Role by id
   * @param {string} id or global_id
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of the Role object
   */
  get: (id, options) => crud.getItemById(URL, id, options),

  /**
   * Create a new Role
   * @param {object} newRole new Role object definition
   * @returns {Promise} resolves with a new Role object with all server-filled fields
   */
  create: (newRole) => crud.createNewItem(URL, newRole),

  /**
   * Update an existing Role
   * @param {string} id or global_id
   * @param {object} updatedRole updated Role object definition
   * @returns {Promise} resolves with a cloudbolt API Response object of Role objects
   */
  update: (id, updatedRole) => crud.patchItemById(URL, id, updatedRole),

  /**
   * Replace an existing Role and returns the new Role
   * @param {string} id or global_id
   * @param {object} newRole new replacement Role object definition
   * @returns {Promise} resolves with the successful cloudbolt API Response of the replaced Role object
   */
  replace: (id, newRole) => crud.updateItemById(URL, id, newRole),

  /**
   * Delete an existing Role by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
