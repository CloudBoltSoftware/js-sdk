import { baseApi } from './api/baseApi'
import crud from './api/crudOperations'
import ApiTokenService from './api/services/v3/cmp/ApiTokenService'
import EulaService from './api/services/v3/cmp/EulaService'
import LicensingService from './api/services/v3/cmp/LicensingService'
import ProductInfoService from './api/services/v3/cmp/ProductInfoService'
import UiExtensionComponentsService from './api/services/v3/cmp/UiExtensionComponentsService'
import UserService from './api/services/v3/cmp/UserService'
import DashboardService from './api/services/v3/DashboardService'

/**
 * Used to set the Authorization header with the Bearer token
 * @param {string} authToken
 */
const setAuthHeader = (authToken) => {
  baseApi.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
}

/**
 * Used to clear the Authorization header
 */
const clearAuthHeader = () => {
  baseApi.defaults.headers.common['Authorization'] = ''
}

export default {
  base: {
    instance: baseApi,
    crud,
    setAuthHeader,
    clearAuthHeader
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
