import { baseApi } from '../../../baseApi'
import ResponseParser from '../../../helpers/ResponseParser'

const statusURL = 'v3/cmp/system/status'
const settingsURL = 'v3/cmp/system/settings'

export default {
  /**
   * Retrieve System Status to display on the System Status Widget
   * @returns {Promise} API Response object of System Status objects
   */
  status: async () => {
    try {
      const response = await baseApi.get(statusURL)
      return response
    } catch (error) {
      const errMsg = ResponseParser.getErrorMessage(error)
      throw new Error(errMsg)
    }
  },

  /**
   * Retrieve System Settings to display on the System Settings Widget
   * @returns {Promise} API Response object of System Settings objects
   */
  settings: async () => {
    try {
      const response = await baseApi.get(settingsURL)
      return response
    } catch (error) {
      const errMsg = ResponseParser.getErrorMessage(error)
      throw new Error(errMsg)
    }
  }
}
