import crud from '../../../crudOperations'

const URL = 'v3/cmp/orders'

export default {
  /**
   * Retrieve a list of existing Orders
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Orders
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Order by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Order object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Duplicated an Order by a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a new duplicate Order object with all server-filled fields
   */
  duplicate: (id, options) => crud.postItem(`${URL}/${id}/duplicate`, options),

  /**
   * Approve an Order by a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with the approved Order object with all server-filled fields
   */
  approve: (id) => crud.postItem(`${URL}/${id}/approve`),

  /**
   * Deny an Order by a given id
   * @param {string} id or global_id
   * @param {object} [denyOrderDetails] Optional
   * @param {string} denyOrderDetails.reason Reason provided for denying the Order
   * @returns {Promise} resolves with the denied Order object with all server-filled fields
   */
  deny: (id, denyOrderDetails) =>
    crud.postItem(`${URL}/${id}/deny`, denyOrderDetails),

  /**
   * Submit an Order by a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with the submitted Order object with all server-filled fields
   */
  submit: (id) => crud.postItem(`${URL}/${id}/submit`),

  /**
   * Cancel an Order by a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with the cancelled Order object with all server-filled fields
   */
  cancel: (id) => crud.postItem(`${URL}/${id}/cancel`),

  /**
   * Clear an Order by a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with the Cloudbolt API Success message for a cleared Order object
   */
  clear: (id) => crud.postItem(`${URL}/${id}/clear`)
}
