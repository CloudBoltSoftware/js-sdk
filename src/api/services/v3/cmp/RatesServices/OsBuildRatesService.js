import crud from '../../../../crudOperations'

const URL = 'api/v3/cmp/rates/osBuildRates'

export default {
  /**
   * Retrieve a list of existing OS Build Rates
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing OS Build Rates
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Create a new OS Build Rate
   * @param {object} newOsBuildRate new OS Build Rate object definition
   * @param {number} newOsBuildRate.rate required
   * @param {string} newOsBuildRate.osBuild required
   * @param {string} [newOsBuildRate.environment]
   * @param {number} [newOsBuildRate.poweroffRate]
   * @returns {Promise} resolves with a new OS Build Rate object with all server-filled fields
   */
  create: (newOsBuildRate) => crud.createNewItem(URL, newOsBuildRate),

  /**
   * Retrieve an existing OS Build Rate by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the OS Build Rate object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Update an existing OS Build Rate
   * @param {string} id or global_id
   * @param {object} updatedOsBuildRate updated OS Build Rate object definition
   * @param {number} [updatedOsBuildRate.rate]
   * @param {string} [updatedOsBuildRate.osBuild]
   * @param {string} [updatedOsBuildRate.environment]
   * @param {number} [updatedOsBuildRate.poweroffRate]
   * @returns {Promise} resolves with a cloudbolt API Response of the updated OS Build Rate object
   */
  update: (id, updatedOsBuildRate) =>
    crud.patchItemById(URL, id, updatedOsBuildRate),

  /**
   * Delete an existing OS Build Rate by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
