import crud from '../../../../crudOperations'

const URL = 'v3/cmp/rates/applicationRates'

export default {
  /**
   * Retrieve a list of existing Application Rates
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Application Rates
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Create a new Application Rate
   * @param {object} newApplicationRate new Application Rate object definition
   * @param {number} newApplicationRate.rate required
   * @param {string} newApplicationRate.application required
   * @param {string} [newApplicationRate.environment]
   * @param {number} [newApplicationRate.poweroffRate]
   * @returns {Promise} resolves with a new Application Rate object with all server-filled fields
   */
  create: (newApplicationRate) => crud.createNewItem(URL, newApplicationRate),

  /**
   * Retrieve an existing Application Rate by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Application Rate object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Update an existing Application Rate
   * @param {string} id or global_id
   * @param {object} updatedApplicationRate updated Application Rate object definition
   * @param {number} [updatedApplicationRate.rate]
   * @param {string} [updatedApplicationRate.application]
   * @param {string} [updatedApplicationRate.environment]
   * @param {number} [updatedApplicationRate.poweroffRate]
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Application Rate object
   */
  update: (id, updatedApplicationRate) =>
    crud.patchItemById(URL, id, updatedApplicationRate),

  /**
   * Delete an existing Application Rate by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
