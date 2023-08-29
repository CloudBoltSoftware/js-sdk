import crud from '../../../crudOperations'

const URL = 'api/v3/cmp/serverSummary'

export default {
  /**
   * Retrieve a list of existing Server Summary
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a paginated list of existing Resource Types
   */
  get: (options) => crud.getItemByEndpoint(URL, options)
}
