import ApiTokenService from './ApiTokenService'
import BlueprintCategoriesService from './BlueprintCategoriesService'
import BlueprintsService from './BlueprintsService'
import EulaService from './EulaService'
import GroupsService from './GroupsService'
import LicensingService from './LicensingService'
import OsBuildsService from './OsBuildsService'
import ProductInfoService from './ProductInfoService'
import ProductLicensesService from './ProductLicensesService'
import RolesService from './RolesService'
import UiExtensionComponentsService from './UiExtensionComponentsService'
import UserService from './UserService'

export default {
  apiToken: ApiTokenService,
  eula: EulaService,
  groups: GroupsService,
  licensing: LicensingService,
  productInfo: ProductInfoService,
  uiExtensions: UiExtensionComponentsService,
  users: UserService,
  blueprintCategories: BlueprintCategoriesService,
  blueprints: BlueprintsService,
  osBuilds: OsBuildsService,
  productLicenses: ProductLicensesService,
  roles: RolesService
}
