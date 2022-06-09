import crud from '../../../crudOperations'

const URL = 'v3/cmp/brandedPortals'

export default {
  /**
   * Retrieve a list of existing Branded Portals
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Branded Portals
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing BrandedPortal by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the BrandedPortal object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new BrandedPortal
   * @param {object} newBrandedPortal new BrandedPortal object definition
   * @param {string} newBrandedPortal.domain required
   * @param {string} newBrandedPortal.name required
   * @returns {Promise} resolves with a new BrandedPortal object with all server-filled fields
   */
  create: (newBrandedPortal) => crud.createNewItem(URL, newBrandedPortal),

  /**
   * Update an existing BrandedPortal
   * @param {string} id or global_id
   * @param {object} updatedBrandedPortal updated BrandedPortal object definition
   * @returns {Promise} resolves with a cloudbolt API Response of the updated BrandedPortal object
   */
  update: (id, updatedBrandedPortal) =>
    crud.patchItemById(URL, id, updatedBrandedPortal),

  /**
   * Replace an existing BrandedPortal
   * @param {string} id or global_id
   * @param {object} replacementBrandedPortal replacement BrandedPortal object definition
   * @returns {Promise} resolves with a cloudbolt API Response of the replacement BrandedPortal object
   */
  replace: (id, replacementBrandedPortal) =>
    crud.updateItemById(URL, id, replacementBrandedPortal),

  /**
   * Delete an existing BrandedPortal
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
