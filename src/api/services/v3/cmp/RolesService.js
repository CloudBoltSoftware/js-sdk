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
   * @returns {Promise} resolves with a cloudbolt API Response object of the Role object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new Role
   * @param {object} newRole new Role object definition
   * @param {string} newRole.label required
   * @param {string} newRole.name required
   * @param {string} [newRole.description]
   * @param {string[]} [newRole.permissions]
   * @param {string[]} [newRole.serverActions]
   * @param {string[]} [newRole.resourceActions]
   * @returns {Promise} resolves with a new Role object with all server-filled fields
   */
  create: (newRole) => crud.createNewItem(URL, newRole),

  /**
   * Update an existing Role
   * @param {string} id or global_id
   * @param {object} updatedRole updated Role object definition
   * @param {string} [updatedRole.label]
   * @param {string} [updatedRole.name]
   * @param {string} [updatedRole.description]
   * @param {string[]} [updatedRole.permissions]
   * @param {string[]} [updatedRole.serverActions]
   * @param {string[]} [updatedRole.resourceActions]
   * @returns {Promise} resolves with a cloudbolt API Response object of the updated Role object
   */
  update: (id, updatedRole) => crud.patchItemById(URL, id, updatedRole),

  /**
   * Replace an existing Role and returns the changed Role
   * @param {string} id or global_id
   * @param {object} replacementRole replacement replacement Role object definition
   * @param {string} replacementRole.label required
   * @param {string} replacementRole.name required
   * @param {string} [replacementRole.description]
   * @param {string[]} [replacementRole.permissions]
   * @param {string[]} [replacementRole.serverActions]
   * @param {string[]} [replacementRole.resourceActions]
   * @returns {Promise} resolves with the successful cloudbolt API Response of the replaced Role object
   */
  replace: (id, replacementRole) =>
    crud.updateItemById(URL, id, replacementRole),

  /**
   * Delete an existing Role by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
