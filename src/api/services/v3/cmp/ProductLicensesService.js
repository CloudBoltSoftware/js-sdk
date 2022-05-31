import crud from '../../../crudOperations'

const URL = 'v3/cmp/productLicenses'

export default {
  /**
   * Retrieve a list of existing product licenses
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing product license by id
   * @param {string} id or global_id
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of product license objects
   */
  get: (id, options) => crud.getItemById(URL, id, options),

  /**
   * Verify CMP has a valid product license
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns
   */
  verify: (options) => crud.getItems(`${URL}/status`, options),

  /**
   * Add new product license (License the CMP product)
   * @param {object} newProductLicense new ProductLicense object definition
   * @returns {Promise} resolves with a new ProductLicense object with all server-filled fields
   */
  add: (newProductLicense) => crud.createNewItem(URL, newProductLicense),

  /**
   * Delete a product license by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Sucessful Response (204)
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
