import crud from '../../../crudOperations'

export default {
  /**
   * Retrieves the requesting user's information
   * @returns
   */
  getCurrentUser: async () => await crud.getItemByEndpoint('v3/cmp/user'),

  /**
   * Retrieves the dashboard widgets for the specified user
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
   *
   * @param {string|number} userId
   * @param {any[]} widgets
   * @returns
   */
  updateWidgets: async (userId, widgets) =>
    await crud.updateEntity(`v3/cmp/users/${userId}/dashboardWidgets`, {
      widgetsJson: widgets
    })
}
