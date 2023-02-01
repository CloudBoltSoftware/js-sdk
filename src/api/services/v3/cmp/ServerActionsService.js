import crud from '../../../crudOperations'

const URL = 'v3/cmp/serverActions'

export default {
  /**
   * Retrieve a list of existing Server Actions
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Server Actions
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Server Action by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Server Action object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new Server Action
   * @param {object} newServerAction new Server Action object definition
   * @param {string} newServerAction.zipFile required
   * @param {boolean} [newServerAction.replaceExisting] determines whether or not to replace an existing server action
   * @param {string} [newServerAction.password] password to use to password-protect the zip file
   * @returns {Promise} resolves with a new Server Action object with all server-filled fields
   */
  create: (newServerAction) => crud.createNewItem(URL, newServerAction),

  /**
   * Export an existing Server Action as a zipfile for a given id
   * @param {string} id or global_id
   * @param {object} serverActionOptions
   * @param {string} [serverActionOptions.password] password to the zip if it's password-protected
   * @param {boolean} [serverActionOptions.instanceSpecificInfo=false] determines if the Server Action should include info specific to the CloudBolt instance
   * @returns {Promise} resolves with a cloudbolt API Export Server Action Success Response and zip file
   */
  export: (id, serverActionOptions) =>
    crud.downloadWithPayload(URL, id, serverActionOptions),

  /**
   * Run a Server Action
   * @param {string} id or global_id
   * @param {object} runServerAction Server Action object definition
   * @param {array} runServerAction.servers List of server hrefs to run the Server Action on
   * @param {object} runServerAction.parameters Action input parameters
   * @returns {Promise} resolves with a cloudbolt API Run Server Action Success Response
   */
  run: (id, runServerAction) =>
    crud.postItem(`${URL}/${id}/runAction`, runServerAction),

  /**
   * Run a Server Action
   * @param {string} id or global_id
   * @param {object} runServerAction Server Action object definition
   * @param {array} runServerAction.servers List of server hrefs to run the Server Action on
   * @param {object} runServerAction.parameters Action input parameters
   * @returns {Promise} resolves with a cloudbolt API Run Server Action Success Response
   */
  runSync: (id, runServerAction) =>
    crud.postItem(`${URL}/${id}/runActionSync`, runServerAction)
}
