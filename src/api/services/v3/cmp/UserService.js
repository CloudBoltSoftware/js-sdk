import crud from '../../../crudOperations'
import { camelCaseKeys } from '../../../helpers/textUtils'

export default {
  /**
   * Retrieves the requesting user's information
   * @param {Object} [options] - query parameters to be sent with the request. Defaults to {includeCMPCatalogFields: true}
   * @returns {Promise<Object>} - the user's information
   */
  getCurrentUser: async (options = { includeCMPCatalogFields: true }) =>
    await crud.getItemByEndpoint('v3/cmp/user', options),

  /**
   * Retrieves the cmp dashboard widgets for the specified user
   * @param {string | number} userId
   * @returns
   */
  getWidgets: async (userId) => {
    const data = await crud.getItemByEndpoint(
      `v3/cmp/users/${userId}/dashboardWidgets`
    )
    const widgets = JSON.parse(data?.widgetsJson || '[]')
    return widgets
  },

  /**
   * Updates the cmp dashboard widgets for the specified user
   * @param {string|number} userId
   * @param {any[]} widgets
   * @returns
   */
  updateWidgets: async (userId, widgets) =>
    await crud.updateItemByEndpoint(`v3/cmp/users/${userId}/dashboardWidgets`, {
      widgetsJson: widgets
    }),

  /**
   * Retrieves the CUI Dashboard setup for the specified user
   * @param {string | number} userId
   * @returns
   */
  getDashboard: async (userId) => {
    const data = await crud.getItemByEndpoint(
      `v3/cmp/users/${userId}/cuiDashboard`
    )
    const rawDashboard = JSON.parse(data?.cuiDashboard || '{}')
    const dashboard = camelCaseKeys(rawDashboard)
    return dashboard
  },

  /**
   * Updates the CUI Dashboard setup for the specified user
   * @param {string|number} userId
   * @param {object} dashboard
   * @param {any[]} dashboard.widgets
   * @returns
   */
  updateDashboard: async (userId, dashboard) => {
    const rawUpdatedDashboard = await crud.updateItemByEndpoint(
      `v3/cmp/users/${userId}/cuiDashboard`,
      {
        cuiDashboard: dashboard
      }
    )
    const updatedDashboard = camelCaseKeys(rawUpdatedDashboard)
    return updatedDashboard
  }
}
