import { baseApi, clearAuthHeader, setAuthHeader } from './api/baseApi'
import crud, { setErrorHandler } from './api/crudOperations'
import ApiTokenService from './api/services/v3/cmp/ApiTokenService'
import EulaService from './api/services/v3/cmp/EulaService'
import GroupsService from './api/services/v3/cmp/GroupsService'
import LicensingService from './api/services/v3/cmp/LicensingService'
import ProductInfoService from './api/services/v3/cmp/ProductInfoService'
import SystemService from './api/services/v3/cmp/SystemService'
import UiExtensionComponentsService from './api/services/v3/cmp/UiExtensionComponentsService'
import UserService from './api/services/v3/cmp/UserService'
import DashboardService from './api/services/v3/DashboardService'
import v3 from './api/services/v3'

/**
 * Create an api accessor object
 * @param {object} options - Optional options object
 * @param {string} options.errorHandler - A function to handle errors. Optional. Errors are thrown by default.
 */
export const createApi = ({ errorHandler } = {}) => {
  if (errorHandler) setErrorHandler(errorHandler)
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
        groups: GroupsService,
        licensing: LicensingService,
        productInfo: ProductInfoService,
        uiExtensions: UiExtensionComponentsService,
        users: UserService,
        system: SystemService
      },
      dashboard: DashboardService
    }
    v3
  }
}
