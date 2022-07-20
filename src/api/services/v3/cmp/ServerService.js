import crud from '../../../crudOperations'

const URL = 'v3/cmp/servers'

export default {
  /**
   * Retrieve a list of existing Server Summary
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a paginated list of existing Resource Types
   */
  list: (options) => crud.getItems(URL, options),
}