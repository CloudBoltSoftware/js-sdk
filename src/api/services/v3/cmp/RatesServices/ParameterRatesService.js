import crud from '../../../../crudOperations'

const URL = 'v3/cmp/rates/parameterRates'

export default {
  /**
   * Retrieve a list of existing Parameter Rates
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Parameter Rates
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Create a new Parameter Rate
   * @param {object} newParameterRate new Parameter Rate object definition
   * @param {number} newParameterRate.rate required
   * @param {string} newParameterRate.parameter required
   * @param {string} [newParameterRate.environment]
   * @param {number} [newParameterRate.poweroffRate]
   * @returns {Promise} resolves with a new Parameter Rate object with all server-filled fields
   */
  create: (newParameterRate) => crud.createNewItem(URL, newParameterRate),

  /**
   * Retrieve an existing Parameter Rate by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Parameter Rate object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Update an existing Parameter Rate
   * @param {string} id or global_id
   * @param {object} updatedParameterRate updated Parameter Rate object definition
   * @param {number} [updatedParameterRate.rate]
   * @param {string} [updatedParameterRate.parameter]
   * @param {string} [updatedParameterRate.environment]
   * @param {number} [updatedParameterRate.poweroffRate]
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Parameter Rate object
   */
  update: (id, updatedParameterRate) =>
    crud.patchItemById(URL, id, updatedParameterRate),

  /**
   * Delete an existing Parameter Rate by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
