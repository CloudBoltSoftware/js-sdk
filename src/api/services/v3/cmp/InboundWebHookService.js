import crud from '../../../crudOperations'

const URL = 'v3/cmp/inboundWebHooks'

export default {
  /**
   * Retrieve a list of existing Inbound Web Hooks
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Inbound Web Hooks
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Inbound Web Hook by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Inbound Web Hook object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Export an existing Inbound Web Hook as a zipfile for a given id
   * @param {string} id or global_id
   * @param {object} InboundWebHookOptions
   * @param {string} [InboundWebHookOptions.password] password to the zip if it's password-protected
   * @param {boolean} [InboundWebHookOptions.instanceSpecificInfo=false] determines if the Inbound Web Hook should include info specific to the CloudBolt instance
   * @returns {Promise} resolves with a cloudbolt API Export Inbound Web Hook Success Response and zip file
   */
  export: (id, InboundWebHookOptions) =>
    crud.downloadWithPayload(URL, id, InboundWebHookOptions),

  /**
   * Run an Inbound Web Hook via POST
   * @param {string} id or global_id
   * @param {object} payload Inbound Web Hook object definition
   * @returns {Promise} resolves with a cloudbolt API Run Inbound Web Hook Success Response
   */
  runPost: (id, payload) =>
    crud.postItem(`${URL}/${id}/run`, payload),

  /**
   * Run an Inbound Web Hook via GET
   * @param {string} id or global_id
   * @param {object} options querystring name value pairs to be used as Action input values
   * @returns {Promise} resolves with a cloudbolt API Run Inbound Web Hook Success Response
   */
  runGet: (id, options) =>
    crud.getItemByEndpoint(`${URL}/${id}/run`, options),
}
