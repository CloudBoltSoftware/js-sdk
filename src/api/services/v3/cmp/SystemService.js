import crud from '../../../crudOperations'

const statusURL = 'v3/cmp/system/status'
const settingsURL = 'v3/cmp/system/settings'

export default {
  /**
   * Retrieve System Status to display on the System Status Widget
   * @returns {Promise} API Response object of System Status objects
   */
  status: (options) => crud.getItemByEndpoint(statusURL, options),

  /**
   * Retrieve System Settings to display on the System Settings Widget
   * @returns {Promise} API Response object of System Settings objects
   */
  settings: (options) => crud.getItemByEndpoint(settingsURL, options)
}
