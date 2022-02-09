import crud from '~/api/crudOperations'
import { RETRIEVE_ALL_DATA_AND_SORT_BY_NAME } from '~/api/helpers/RestOptionsBuilder'
import LicensingService from './LicensingService'

const GET_LICENSES_URL = 'v3/cmp/productLicenses'
const GET_LICENSING_STATUS_URL = 'v3/cmp/productLicenses/status'

describe('LicensingService', () => {
  it('getLicenses calls getItems and returns items if in response', async () => {
    jest.spyOn(crud, 'getItems').mockResolvedValue({ items: [] })

    const response = await LicensingService.getLicenses()

    expect(crud.getItems).toBeCalledWith(
      GET_LICENSES_URL,
      RETRIEVE_ALL_DATA_AND_SORT_BY_NAME
    )
    expect(Array.isArray(response)).toBeTruthy()
  })

  it('getLicenses calls getItems and returns undefined if no items in response', async () => {
    jest.spyOn(crud, 'getItems').mockResolvedValue({})

    const response = await LicensingService.getLicenses()

    expect(crud.getItems).toBeCalledWith(
      GET_LICENSES_URL,
      RETRIEVE_ALL_DATA_AND_SORT_BY_NAME
    )
    expect(response).toBeUndefined()
  })

  it('getLicensingStatus calls getItemByEndpoint and returns result', async () => {
    jest
      .spyOn(crud, 'getItemByEndpoint')
      .mockResolvedValue({ license: 'somelicense', status: 'somestatus' })

    const response = await LicensingService.getLicensingStatus()

    expect(crud.getItemByEndpoint).toBeCalledWith(GET_LICENSING_STATUS_URL)
    expect(response.status).toBe('somestatus')
  })
})
