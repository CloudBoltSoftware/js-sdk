import crud from '../../../crudOperations'

const URL = 'v3/cmp/resourceActions'

export default {
  /**
   * Retrieve a list of existing Resource Actions
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Resource Actions
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Resource Action by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Resource Action object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new Resource Action
   * @param {object} newResourceAction new Resource Action object definition
   * @param {string} newResourceAction.zipFile required
   * @returns {Promise} resolves with a new Resource Action object with all server-filled fields
   */
  create: (newResourceAction) => crud.createNewItem(URL, newResourceAction),

  /**
   * Export an existing Resource Action as a zipfile for a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Export Resource Action Success Response and zip file
   */
  export: (id) => crud.download(URL, id),

  /**
   * Run a Resource Action
   * @param {string} id or global_id
   * @param {object} runResourceAction Resource Action object definition
   * @param {string} runResourceAction.resource required
   * @returns {Promise} resolves with a cloudbolt API Run Resource Action Success Response
   */
  run: (id, runResourceAction) =>
    crud.createNewItem(`${URL}/${id}/runAction`, runResourceAction)
}
