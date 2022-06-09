import crud from '../../../crudOperations'

const URL = 'v3/cmp/environments'

export default {
  /**
   * Retrieve a list of existing Environments
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Environments
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Environment by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Environment object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new Environment
   * @param {object} newEnvironment new Environment object definition
   * @param {string} newEnvironment.name required
   * @returns {Promise} resolves with a new Environment object with all server-filled fields
   */
  create: (newEnvironment) => crud.createNewItem(URL, newEnvironment),

  /**
   * Update an existing Environment
   * @param {string} id or global_id
   * @param {object} updatedEnvironment updated Environment object
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Environment object
   */
  update: (id, updatedEnvironment) =>
    crud.patchItemById(URL, id, updatedEnvironment),

  /**
   * Replace an existing Environment
   * @param {string} id or global_id
   * @param {object} replacementEnvironment replacement Environment object
   * @returns {Promise} resolves with a cloudbolt API Response of the replacement Environment object
   */
  replace: (id, replacementEnvironment) =>
    crud.updateItemById(URL, id, replacementEnvironment),

  /**
   * Delete an existing Environment
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id),

  /**
   * Export an existing Environment for a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Export Environment Success Response
   */
  export: (id) => crud.download(URL, id),

  /**
   * List all technology specific parameters for the associated Resource Handler (an existing Environment by id)
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Technology Specific Parameters
   */
  getTechParameters: (id) =>
    crud.getItems(`${URL}/${id}/techSpecificParameters`),

  /**
   * Refresh all technology specific parameters for the associated Resource Handler (an existing Environment by id)
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Technology Specific Parameters
   */
  refreshTechParameters: (id) =>
    crud.createNewItem(`${URL}/${id}/techSpecificParameters:refresh`),

  /**
   * Lists Networks imported into the environment by given id, and the NIC mappings for each network
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Environment Network information
   */
  getNetworks: (id) => crud.getItems(`${URL}/${id}/networks`),

  /**
   * Set the list of networks and the NICs mapped to the environment by given id
   * @param {string} id or global_id
   * @param {object} newEnvNetwork new Environment Network object definition
   * @param {string} newEnvNetwork.network new Environment Network
   * @param {string} newEnvNetwork.nics new Environment NIC Network settings
   * @returns {Promise} resolves with a cloudbolt API Response object of the new Environment Network configuration
   */
  setNetworks: (id, newEnvNetwork) =>
    crud.createNewItem(`${URL}/${id}/networks`, newEnvNetwork),

  /**
   * Lists Environment parameters by given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Environment Parameter information
   */
  getParameters: (id) => crud.getItems(`${URL}/${id}/parameters`),

  /**
   * Set the Environment parameters by given Environment id
   * @param {string} id or global_id
   * @param {object} newEnvParameters new Environment Parameters object definition
   * @param {object[]} newEnvParameters.parameters required
   * @returns {Promise} resolves with a cloudbolt API Response object of the new Environment Parameter configuration
   */
  setParameters: (id, newEnvParameters) =>
    crud.createNewItem(`${URL}/${id}/parameters`, newEnvParameters)
}
