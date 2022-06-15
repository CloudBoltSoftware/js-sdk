import crud from '../../../crudOperations'

const URL = 'v3/cmp/cit'

export default {
  /**
   * Retrieve a list of existing CIT Tests
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of CIT tests
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing CIT Test by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the CIT Test object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new CIT Test
   * @param {object} newCitTest new CIT Test object definition
   * @param {string} newCitTest.expectedStatus required one of SUCCESS, WARNING, or ERROR
   * @param {string} newCitTest.action required
   * @param {object[]} [newCitTest.actionInputs]
   * Multiple optional params, please reference https://app.swaggerhub.com/apis-docs/cloudbolt/Cloudbolt_CMP_API/2022.2.1#/CIT/1
   * @returns {Promise} resolves with a new CIT Test object with all server-filled fields
   */
  create: (newCitTest) => crud.createNewItem(URL, newCitTest),

  /**
   * Update an existing CIT Test
   * @param {string} id or global_id
   * @param {object} updatedCitTest updated CIT Test object definition
   * @param {string} [updatedCitTest.expectedStatus] one of SUCCESS, WARNING, or ERROR
   * @param {string} [updatedCitTest.action]
   * @param {object[]} [updatedCitTest.actionInputs]
   * Multiple optional params, please reference https://app.swaggerhub.com/apis-docs/cloudbolt/Cloudbolt_CMP_API/2022.2.1#/CIT/1
   * @returns {Promise} resolves with a cloudbolt API Response of the updated CIT Test object
   */
  update: (id, updatedCitTest) => crud.patchItemById(URL, id, updatedCitTest),

  /**
   * Delete an existing CIT Test
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
