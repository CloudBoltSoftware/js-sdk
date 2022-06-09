import crud from '../../../crudOperations'

const URL = 'v3/cmp/logs'

export default {
  /**
   * Download application log file to a text or zip file.
   * @param {boolean} [zip=false] Determines the format of the log file, defaults to text file.
   * @returns {Promise} Returns zip or text file containing the Application Log
   */
  getApplicationLog: (options) =>
    crud.getItemByEndpoint(`${URL}/application`, options),

  /**
   * Download web log file to a zip file.
   * @returns {Promise} Returns zip file containing the Web Log
   */
  getWebLog: () => crud.getItemByEndpoint(`${URL}/web`),

  /**
   * Download Support Bundle log file to a zip file.
   * @returns {Promise} Returns zip file containing the support bundle
   */
  getSupportBundleLog: () => crud.getItemByEndpoint(`${URL}/supportBundle`)
}
