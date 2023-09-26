import crud from '../../../crudOperations'

const URL = 'api/v3/cmp/cuiPortals'

export default {
  /**
   * Retrieve a list of existing CUI Portals
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Branded Portals
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing CUI Portal by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the CUI Portal object
   */
  get: (id) => crud.getItemById(URL, id)
}
