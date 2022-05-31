import { baseApi, clearAuthHeader, setAuthHeader } from './api/baseApi'
import crud, { setErrorHandler } from './api/crudOperations'
import ApiTokenService from './api/services/v3/cmp/ApiTokenService'
import BlueprintCategoriesService from './api/services/v3/cmp/BlueprintCategoriesService'
import BlueprintsService from './api/services/v3/cmp/BlueprintsService'
import EulaService from './api/services/v3/cmp/EulaService'
import GroupsService from './api/services/v3/cmp/GroupsService'
import LicensingService from './api/services/v3/cmp/LicensingService'
import OsBuildsService from './api/services/v3/cmp/OsBuildsService'
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
        groups: GroupsService,
        licensing: LicensingService,
        productInfo: ProductInfoService,
        uiExtensions: UiExtensionComponentsService,
        users: UserService,
        blueprintCategories: BlueprintCategoriesService,
        blueprints: BlueprintsService,
        osBuilds: OsBuildsService
      },
      dashboard: DashboardService
    }
  }
}
