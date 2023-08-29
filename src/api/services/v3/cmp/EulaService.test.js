import crud from '../../../crudOperations'
import EulaService from './EulaService'

const EULA_URL = 'api/v3/cmp/eula'

describe('EulaService', () => {
  it('getEulaInfo calls crud.getItemByEndpoint and returns result', async () => {
    jest.spyOn(crud, 'getItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await EulaService.getEulaInfo()

    expect(crud.getItemByEndpoint).toBeCalledWith(EULA_URL)
    expect(response).toBe('dummyResponse')
  })

  it('updateEulaInfo calls crud.updateItemByEndpoint with payload and returns result', async () => {
    const payload = 'fakePayload'
    jest.spyOn(crud, 'updateItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await EulaService.updateEulaInfo(payload)

    expect(crud.updateItemByEndpoint).toBeCalledWith(EULA_URL, payload)
    expect(response).toBe('dummyResponse')
  })
})
