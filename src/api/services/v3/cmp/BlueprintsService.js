import crud from '../../../crudOperations'

const URL = 'v3/cmp/blueprints'

export default {
  /**
   * Retrieve a list of existing Blueprints
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response list of Blueprint objects
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Blueprint for a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of a Blueprint object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new Blueprint
   * @param {object} newBlueprint new Blueprint object definition
   * @param {string} newBlueprint.zipFile selected Blueprint zipfile
   * @returns {Promise} resolves with a new Blueprint object with all server-filled fields
   */
  create: (newBlueprint) => crud.createNewItem(URL, newBlueprint),

  /**
   * Export an existing Blueprint for a given id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Export Blueprint Success Response
   */
  export: (id) => crud.download(URL, id),

  /**
   * Generates a deployment schema for the given group and environment
   * @param {string} id or global_id
   * @param {object} schemaInfo object specifying schema details
   * @param {string} schemaInfo.group valid group that can deploy schema
   * @returns {Promise} resolves with a Blueprint Deployment schema object with all server-filled fields
   */
  generateSchema: (id, schemaInfo) =>
    crud.createNewItem(`v3/cmp/blueprints/${id}/deploymentSchema`, schemaInfo),

  /**
   * Generates and submits an Order to deploy a custom instance of the Blueprint by id
   * @param {string} id or global_id
   * @param {object} customDeploy object specifying customized deployment items
   * @returns {Promise} resolves with a Blueprint Deployment schema object with all server-filled fields
   */
  deploy: (id, customDeploy) =>
    crud.createNewItem(`v3/cmp/blueprints/${id}/deploy`, customDeploy),

  /**
   * Generates a sample deployment payload for the given group and server item environments.
   * @param {string} id or global_id
   * @param {object} payloadType required object specifying payload Group or Order
   * @param {string} [payloadType.group] specify valid Group for payload
   * @param {string} [payloadType.order] specify valid Order for payload
   * @returns {Promise} resolves with a Blueprint Sample Deployment Payload success response
   */
  samplePayload: (id, payloadType) =>
    crud.createNewItem(`v3/cmp/blueprints/${id}/samplePayload`, payloadType)
}
