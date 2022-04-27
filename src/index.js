import { baseApi, clearAuthHeader, setAuthHeader } from './api/baseApi'
import crud, { setErrorHandler } from './api/crudOperations'
import ApiTokenService from './api/services/v3/cmp/ApiTokenService'
import EulaService from './api/services/v3/cmp/EulaService'
import LicensingService from './api/services/v3/cmp/LicensingService'
import ProductInfoService from './api/services/v3/cmp/ProductInfoService'
import UiExtensionComponentsService from './api/services/v3/cmp/UiExtensionComponentsService'
import UserService from './api/services/v3/cmp/UserService'
import DashboardService from './api/services/v3/DashboardService'

export const createApi = () => {
  return {
    base: {
      instance: baseApi,
      crud,
      setAuthHeader,
      clearAuthHeader,
      setErrorHandler
    },
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
}
