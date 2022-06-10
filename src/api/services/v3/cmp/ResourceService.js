import crud from "../../../crudOperations"

export default {
    getResourceTypes: async () => await crud.getItemByEndpoint('v3/cmp/resourceTypes', {page_size: 100}),
    getResources: async () => await crud.getItemByEndpoint('v3/cmp/resources', {page_size: 100})
}
