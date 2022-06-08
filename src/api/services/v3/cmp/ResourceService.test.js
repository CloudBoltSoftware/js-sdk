import crud from "../../../crudOperations";
import ResourceService from "./ResourceService";

describe('ResourceService', () => {
    it('fetching available resources', async () => {
        jest.spyOn(crud, 'getItemByEndpoint').mockResolvedValue('dummyResponse')
        const response = await ResourceService.getResources()
        expect(crud.getItemByEndpoint).toBeCalledWith('v3/cmp/resources/')
        expect(response).toBe('dummyResponse')
    })
    it('fetching available resource types', async () => {
        jest.spyOn(crud, 'getItems').mockResolvedValue('dummyResponse')
        const response = await ResourceService.getResourceTypes()
        expect(crud.getItems).toBeCalledWith('v3/cmp/resourceTypes')
        expect(response).toBe('dummyResponse')
    })
})
