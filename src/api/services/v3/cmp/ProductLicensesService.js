import crud from '../../../crudOperations'

const URL = 'v3/cmp/productLicenses'

export default {
  /**
   * Retrieve a list of existing product licenses
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of all CMP Licenses and their information.
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Product License by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of a Product License object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Verify CMP has a valid product license
   * @returns {Promise} resolves with a cloudbolt API Response object with a boolean for "hasValidLicense"
   */
  verify: () => crud.getItems(`${URL}/status`),

  /**
   * Add new product license (License the CMP product)
   * @param {object} newProductLicense new Product License object definition. Can reference a string value or a file.
   * @param {string} [newProductLicense.licenseText] License key string
   * @param {string} [newProductLicense.licenseFile] path of License file
   * @returns {Promise} resolves with a new Product License object with all server-filled fields
   */
  add: (newProductLicense) => crud.createNewItem(URL, newProductLicense),

  /**
   * Delete a Product License by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Sucessful Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
