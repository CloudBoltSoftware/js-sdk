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
   * Retrieves parameters for a resource
   * @param {string} id id of the resource
   * @returns {Promise} resolves with a cloudbolt API Response object of the Structured Resource object
   */
  getResourceParameters: (id) =>
    crud.getItemById(`api/v3/cmp/resourcesStructured/${id}/resourceParameters`),

  /**
   * Saves resource parameter.
   * @param {string} id - The ID of the resource.
   * @param {Object} options - The options to be saved i.e. the globaId and the value of the parameter.
   * @returns {Promise} resolves with a cloudbolt API Response object of the Structured Resource object
   */
  saveResourceParameters: (id, options) =>
    crud.postItem(
      `api/v3/cmp/resourcesStructured/${id}/resourceParameters`,
      options
    )
}
