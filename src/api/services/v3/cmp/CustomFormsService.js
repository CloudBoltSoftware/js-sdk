import crud from '../../../crudOperations'

const URL = 'v3/cmp/customForms'

export default {
  /**
   * Retrieve a list of existing Custom Forms
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Branded Portals
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Custom Form by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Custom Form object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Submit an order through Custom Forms
   * @param {string} id or global_id
   * @param {object} order order JSON generated through SurveyJS
   * @returns {Promise} resolves with an Custom Form order success object with all server-filled fields
   */
  createOrder: (id, order) => crud.createNewItem(`${URL}/${id}/submit`, order),

  /**
   * Delete an existing Custom Form for a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
