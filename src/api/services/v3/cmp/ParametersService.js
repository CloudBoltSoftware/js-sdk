import crud from '../../../crudOperations'

const URL = 'api/v3/cmp/parameters'

export default {
  /**
   * Retrieve a list of existing Parameters
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Parameters
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Parameter by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Parameter object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new Parameter
   * @param {object} newParameter new Parameter object definition
   * @param {string} newParameter.name required
   * @param {string} newParameter.label required
   * @param {string} newParameter.type required
   * Multiple optional params, please reference https://app.swaggerhub.com/apis-docs/cloudbolt/Cloudbolt_CMP_API/2022.2.1#/Parameters/post_parameters_
   * @returns {Promise} resolves with a new Parameter object with all server-filled fields
   */
  create: (newParameter) => crud.createNewItem(URL, newParameter),

  /**
   * Update an existing Parameter
   * @param {string} id or global_id
   * @param {object} updatedParameter updated Parameter object definition
   * Multiple optional params, please reference https://app.swaggerhub.com/apis-docs/cloudbolt/Cloudbolt_CMP_API/2022.2.1#/Parameters/post_parameters_
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Parameter object
   */
  update: (id, updatedParameter) =>
    crud.patchItemById(URL, id, updatedParameter),

  /**
   * Replace an existing Parameter
   * @param {string} id or global_id
   * @param {object} replacementParameter replacement Parameter object definition
   * @param {string} replacementParameter.name required
   * @param {string} replacementParameter.label required
   * @param {string} replacementParameter.type required
   * Multiple optional params, please reference https://app.swaggerhub.com/apis-docs/cloudbolt/Cloudbolt_CMP_API/2022.2.1#/Parameters/post_parameters_
   * @returns {Promise} resolves with a cloudbolt API Response of the replacement Parameter object
   */
  replace: (id, replacementParameter) =>
    crud.updateItemById(URL, id, replacementParameter),

  /**
   * Delete an existing Parameter
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
