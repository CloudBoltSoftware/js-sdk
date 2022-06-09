import crud from "../../../crudOperations"

export default {
    getResourceTypes: async () => await crud.getItems('v3/cmp/resourceTypes'),
    getResources: async () => await crud.getItemByEndpoint('v3/cmp/resources/', {page_size: 100})
}
