import crud from '../../../crudOperations'

const URL = 'v3/cmp/jobs'

export default {
  /**
   * Retrieve a list of existing jobs
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing job
   * @param {string} id or global_id
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Job objects
   */
  get: (id, options) => crud.getItemById(URL, id, options)
}
