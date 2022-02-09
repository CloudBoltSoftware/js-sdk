import AuthTokenService from './services/AuthTokenService'
import LicensingService from './services/LicensingService'
import ProductInfoService from './services/ProductInfoService'
import UserService from './services/UserService'
import { cloudboltApi as baseApi } from './baseApi'
import crudOperations from './crudOperations'

export default {
  v3: {
    cmp: {
      authToken: AuthTokenService,
      licensing: LicensingService,
      productInfo: ProductInfoService,
      user: UserService
    }
  }
}

export const cloudboltApi = {
  baseApi,
  crud: crudOperations
}
