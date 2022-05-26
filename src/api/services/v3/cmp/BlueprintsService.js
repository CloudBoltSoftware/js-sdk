import crud from '../../../crudOperations'

const URL = 'v3/cmp/blueprints'

export default {
  /**
   * Retrieve a list of existing blueprints
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing blueprint for a given id
   * @param {string} id or global_id
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of blueprint objects
   */
  get: (id, options) => crud.getItemById(URL, id, options),

  /**
   * Create a new blueprint
   * @param {object} newBlueprint new blueprint categories object definition
   * @returns {Promise} resolves with a new blueprint object with all server-filled fields
   */
  create: (newBlueprint) => crud.createNewItem(URL, newBlueprint),

  /**
   * Export an existing blueprint for a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Export Blueprint Success Response
   */
  //   export: (id) => crud.createNewItem(`v3/cmp/blueprints/${id}/export`),
  export: (id) => crud.download(URL, id),

  /**
   * Generates a deployment schema for the given group and environment
   * @param {string} id or global_id
   * @returns {Promise} resolves with a new blueprint object with all server-filled fields
   */
  generateSchema: (id) =>
    crud.createNewItem(`v3/cmp/blueprints/${id}/deploymentSchema`)
}
