import crud from '~/api/crudOperations'
import ProductInfoService from './ProductInfoService'

const PRODUCT_INFO_URL = 'v3/cmp/productInfo'

describe('ProductInfoService', () => {
  it('getProductInfo calls crud.getItemByEndpoint and returns result', async () => {
    jest.spyOn(crud, 'getItemByEndpoint').mockResolvedValue('dummyResponse')

    const response = await ProductInfoService.getProductInfo()

    expect(crud.getItemByEndpoint).toBeCalledWith(PRODUCT_INFO_URL)
    expect(response).toBe('dummyResponse')
  })
})
