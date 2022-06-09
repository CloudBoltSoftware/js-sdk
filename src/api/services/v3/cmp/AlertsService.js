import crud from '../../../crudOperations'

const URL = 'v3/cmp/alerts'

export default {
  /**
   * Retrieve a list of existing Alerts
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Alerts
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Alert by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Alert object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new Alert
   * @param {object} newAlert new Alert object definition
   * @param {string} newAlert.type required - email or slack or teams
   * @param {string} newAlert.name required
   * @returns {Promise} resolves with a new Alert object with all server-filled fields
   */
  create: (newAlert) => crud.createNewItem(URL, newAlert),

  /**
   * Update an existing Alert
   * @param {string} id or global_id
   * @param {object} updatedAlert updated Alert object definition
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Alert object
   */
  update: (id, updatedAlert) => crud.patchItemById(URL, id, updatedAlert),

  /**
   * Replace an existing Alert
   * @param {string} id or global_id
   * @param {object} replacementAlert replacement Alert object definition
   * @returns {Promise} resolves with a cloudbolt API Response of the replacement Alert object
   */
  replace: (id, replacementAlert) =>
    crud.updateItemById(URL, id, replacementAlert),

  /**
   * Delete an existing Alert
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
