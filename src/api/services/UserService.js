import crud from '~/api/crudOperations'

export default {
  getCurrentUser: async () => await crud.getItemByEndpoint('v3/cmp/user'),

  getEulaInfo: async () => await crud.getItemByEndpoint('v3/cmp/eula'),
  updateEulaInfo: async (payload) =>
    await crud.updateItemByEndpoint('v3/cmp/eula', payload),

  getWidgets: async (userId) => {
    const data = await crud.getItemByEndpoint(
      `cmp/users/${userId}/dashboardWidgets`
    )
    const widgets = JSON.parse(data?.widgetsJson)
    return widgets
  },
  updateWidgets: async (userId, widgets) =>
    await crud.updateEntity(`cmp/users/${userId}/dashboardWidgets`, {
      widgetsJson: widgets
    })
}
