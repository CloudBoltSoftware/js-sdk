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

test('get edit disk calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  const queryParams = {
    position: '2',
    uuid: '6000C29b-a9ab-ec2b-34c5-c964d5cb2ddd'
  }
  await StructuredResourcesService.getEditDisk('resource-id', queryParams)

  expect(mockFn).toHaveBeenCalledWith(
    `/api/v3/cmp/structuredResources/resource-id/editDisk/${queryParams.position}${queryParams.uuid}/`
  )
})

test('save edit disk calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const queryParams = {
    position: '2',
    uuid: '6000C29b-a9ab-ec2b-34c5-c964d5cb2ddd'
  }
  const size = '3'
  await StructuredResourcesService.resizeDisk('resource-id', queryParams, size)
  expect(mockFn).toHaveBeenCalledWith(
    `/api/v3/cmp/structuredResources/resource-id/editDisk/${queryParams.position}${queryParams.uuid}/`,
    size
  )
})
