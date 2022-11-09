import crud from '../../../crudOperations'

const URL = 'v3/cmp/histories'

export default {
  /**
   * Retrieve a list of existing histories
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of all Histories
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing history
   * @param {string} id or global_id
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of the History object
   */
  get: (id, options) => crud.getItemById(URL, id, options)
}
