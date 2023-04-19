import crud from '../../../crudOperations'

const buildUrl = (resourceStructuredId) =>
  `v3/cmp/resourcesStructured/${resourceStructuredId}/parameterValues`

/**
 * @typedef {object} ResourceStructuredParameterValue
 * @property {string} fieldId An id of a Parameter
 * @property {string} value The value for the parameter on this ResourceStructured
 */

export default {
  /**
   * Retrieve a list of existing Parameter Values on the given Resource Structured
   * @param {string} resourceStructuredId id or global_id of the Resource Structured
   * @param {object} options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of Parameter Values
   */
  list: (resourceStructuredId, options) =>
    crud.getItems(buildUrl(resourceStructuredId), options),

  /**
   * Retrieve an existing Parameter Value by id on the given Resource Structured
   * @param {string} resourceStructuredId id or global_id of the Resource Structured
   * @param {string} id global_id of the Parameter
   * @param {object} options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of the Parameter Value object
   */
  get: (resourceStructuredId, id, options) =>
    crud.getItemById(buildUrl(resourceStructuredId), id, options),

  /**
   * Create a new Parameter Value on the given Resource Structured
   * @param {string} resourceStructuredId id or global_id of the Resource Structured
   * @param {ResourceStructuredParameterValue} newParameterValue new Parameter Value object definition
   * @returns {Promise} resolves with a new Parameter Value object with all server-filled fields
   */
  create: (resourceStructuredId, newParameterValue) =>
    crud.createNewItem(buildUrl(resourceStructuredId), newParameterValue),

  /**
   * Update an existing Parameter Value on the given Resource Structured
   * @param {string} resourceStructuredId id or global_id of the Resource Structured
   * @param {string} id global_id of the Parameter
   * @param {ResourceStructuredParameterValue} updatedParameterValue new Parameter Value object definition
   * @returns {Promise} resolves with a new Parameter Value object with all server-filled fields
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Parameter Value object
   */
  update: (resourceStructuredId, id, updatedParameterValue) =>
    crud.patchItemById(
      buildUrl(resourceStructuredId),
      id,
      updatedParameterValue
    ),

  /**
   * Delete an existing Parameter Value
   * @param {string} resourceStructuredId id or global_id of the Resource Structured
   * @param {string} id global_id of the Parameter
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (resourceStructuredId, id) =>
    crud.deleteItemById(buildUrl(resourceStructuredId), id)
}
