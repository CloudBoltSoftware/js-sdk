import crud from '../../../crudOperations'

const URL = 'v3/cmp/blueprintCategories'

export default {
  /**
   * Retrieve a paginated list of existing Blueprint Categories
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Blueprint Category for a given id
   * @param {string} id or global_id
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of a Blueprint Category object
   */
  get: (id, options) => crud.getItemById(URL, id, options),

  /**
   * Create a new Blueprint Category
   * @param {object} newBlueprintCategories new Blueprint Category object definition
   * @returns {Promise} resolves with a new Blueprint Category object with all server-filled fields
   */
  create: (newBlueprintCategories) =>
    crud.createNewItem(URL, newBlueprintCategories),

  /**
   * Update an existing blueprint category for a given id
   * @param {string} id or global_id
   * @param {object} updatedBlueprintCategories updated Blueprint Category object definition
   * @returns {Promise} resolves with a cloudbolt API Response object of the updated Blueprint Category object
   */
  update: (id, updatedBlueprintCategories) =>
    crud.patchItemById(URL, id, updatedBlueprintCategories),

  /**
   * Delete an existing Blueprint Category for a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
