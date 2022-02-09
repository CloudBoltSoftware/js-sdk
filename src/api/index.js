import { cloudboltApi as baseApi } from './baseApi'
import crudOperations from './crudOperations'
import UiExtensionComponentsService from './services/v3/cmp/UiExtensionComponentsService'
import AuthTokenService from './services/v3/cmpAuthTokenService'
import LicensingService from './services/v3/cmpLicensingService'
import ProductInfoService from './services/v3/cmpProductInfoService'
import UserService from './services/v3/cmpUserService'
import DashboardService from './services/v3/DashboardService'

export default {
  v3: {
    cmp: {
      authToken: AuthTokenService,
      licensing: LicensingService,
      productInfo: ProductInfoService,
      uiExtensions: UiExtensionComponentsService,
      user: UserService
    },
    dashboard: DashboardService
  }
}

export const cloudboltApi = {
  baseApi,
  crud: crudOperations
}
