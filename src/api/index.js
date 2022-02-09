import { cloudboltApi as baseApi } from './baseApi'
import crudOperations from './crudOperations'
import ApiTokenService from './services/v3/cmp/ApiTokenService'
import EulaService from './services/v3/cmp/EulaService'
import LicensingService from './services/v3/cmp/LicensingService'
import ProductInfoService from './services/v3/cmp/ProductInfoService'
import UiExtensionComponentsService from './services/v3/cmp/UiExtensionComponentsService'
import UserService from './services/v3/cmp/UserService'
import DashboardService from './services/v3/DashboardService'

export default {
  v3: {
    cmp: {
      apiToken: ApiTokenService,
      eula: EulaService,
      licensing: LicensingService,
      productInfo: ProductInfoService,
      uiExtensions: UiExtensionComponentsService,
      users: UserService
    },
    dashboard: DashboardService
  }
}

export const cloudboltApi = {
  baseApi,
  crud: crudOperations
}
