import crud from '../../../crudOperations'

export default {
  /**
   * Retrieves widgets and their customized permissions.
   * Admin only.
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Widget objects
   */
  list: (options) => crud.getItems('api/v3/dashboard/widgets', options),

  /**
   * Retrieve a single widget and its customized permissions.
   * Admin only.
   * @param {string} id or global_id
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a single widget objects
   */
  get: (id, options) =>
    crud.getItemById('api/v3/dashboard/widgets', id, options),

  /**
   * Create a new widget with customized permissions.
   * Admin only.
   * @param {object} newWidget New Widget object
   * @returns {Promise} resolves with the created widget object
   */
  create: (newWidget) =>
    crud.createNewItem('api/v3/dashboard/widgets', newWidget),

  /**
   * Updates a widget with customized permissions.
   * Admin only.
   * @param {string} id or global_id
   * @param {object} updatedWidget Updated Widget object
   * @returns {Promise} resolves with the updated widget object
   */
  update: (id, updatedWidget) =>
    crud.updateItemById('api/v3/dashboard/widgets', id, updatedWidget),

  /**
   * Deletes a widget and its customized permissions.
   * Admin only.
   * @param {string} id or global_id
   * @returns {Promise} resolves with an object describing the deletion
   */
  delete: (id) => crud.deleteItemById('api/v3/dashboard/widgets', id),

  /**
   * Retrieve an array of widgets the requesting user should not be able to see.
   * @returns {Promise<Array>} resolves with an array of objects
   */
  blacklist: () => crud.getItemByEndpoint('api/v3/dashboard/widgets/blacklist')
}
