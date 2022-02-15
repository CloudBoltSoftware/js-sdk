import crud from '../../../crudOperations'

export default {
  getAvailableXuis: async () => {
    const data = await crud.getItems('v3/cmp/uiExtensionComponents', {
      // We just need enabled dashboard xuis
      filter: 'extension__enabled:True;type:dashboard',
      // We only need a few specific fields
      fields: 'globalId,name'
    })
    return data.items
  }
}
