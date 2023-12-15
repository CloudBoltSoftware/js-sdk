import crud from '../../../crudOperations'

const URL = 'api/v3/cmp/resourcesStructured'

export default {
  /**
   * Retrieve a list of existing Structured Resources
   * @param {Object} options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Structured Resources
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Structured Resource by idd
   * @param {string} id or global_id
   * @param {Object} options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of the Structured Resource object
   */
  get: (id, options) => crud.getItemById(URL, id, options),

  /**
   * Retrieves parameter values for a resource
   * @param {string} id id of the resource
   * @returns {Promise} resolves with a cloudbolt API Response object of the Structured Resource object
   */

  getParameters: (id) =>
    crud.getItemById(`api/v3/cmp/resourcesStructured/${id}/parameterValues`),

  /**
   * Create a parameter for a resource
   * @param {string} id id of the resource
   * @param {Object} options Additional options for customization
   * @returns {Promise} resolves with a cloudbolt API Response object of the Structured Resource object
   */
  createParameter: (id, options) =>
    crud.createNewItem(
      `api/v3/cmp/resourcesStructured/${id}/parameterValues`,
      options
    ),

  /**
   * Edit a parameter for a resource
   * @param {string} id id of the resource
   * @param {Object} options Additional options for customization
   * @param {string} options.customFieldId - The ID of a custom field parameter
   * @returns {Promise} resolves with a cloudbolt API Response object of the Structured Resource object
   */
  editParameter: (id, options) =>
    crud.patchItemById(
      `api/v3/cmp/resourcesStructured/${id}/parameterValues`,
      options.customFieldId,
      options
    ),

  /**
   * Delete a parameter for a resource
   * @param {string} id id of the resource
   * @param {string} customFieldId - The ID of a custom field parameter
   * @returns {Promise} resolves with a cloudbolt API Response object of the Structured Resource object
   */
  deleteParameter: (id, customFieldId) =>
    crud.deleteItemById(
      `api/v3/cmp/resourcesStructured/${id}/parameterValues`,
      customFieldId
    )
}
