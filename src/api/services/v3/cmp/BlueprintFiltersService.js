import crud from '../../../crudOperations'

const URL = 'api/v3/cmp/blueprintFilters'

export default {
  /**
   * Retrieve a list of existing BlueprintFilters
   * Commonly used options:
   * - {attributes: 'choices'} to get the choices for each filter
   * @param {object} options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing BlueprintFilters
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing BlueprintFilters by id
   * Commonly used options:
   * - {attributes: 'choices'} to get the choices for each filter
   * @param {string} id or global_id
   * @param {object} options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of the Alert object
   */
  get: (id, options) => crud.getItemById(URL, id, options)
}
