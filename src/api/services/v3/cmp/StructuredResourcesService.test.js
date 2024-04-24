import { baseApi } from '../../../baseApi'
import StructuredResourcesService from './StructuredResourcesService'

test('get add disk calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await StructuredResourcesService.getAddDisk('resource-id')
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/structuredResources/resource-id/addDisk/'
  )
})

test('save disk calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const options = {
    disk_size: '5',
    vmware_datastore: '7',
    vmware_disk_type: 'Thin Provision'
  }
  await StructuredResourcesService.saveDisk('resource-id', options)
  expect(mockFn).toHaveBeenCalledWith(
    '/api/v3/cmp/structuredResources/resource-id/addDisk/',
    options
  )
})
