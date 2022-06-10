import AlertsService from './AlertsService'
import ApiTokenService from './ApiTokenService'
import BlueprintCategoriesService from './BlueprintCategoriesService'
import BlueprintsService from './BlueprintsService'
import BrandedPortalsService from './BrandedPortalsService'
import CitService from './CitService'
import EnvironmentsService from './EnvironmentsService'
import EulaService from './EulaService'
import GroupsService from './GroupsService'
import LicensingService from './LicensingService'
import LoggingService from './LoggingService'
import MiscellaneousSettingsService from './MiscellaneousSettingsService'
import OrdersService from './OrdersService'
import OsBuildsService from './OsBuildsService'
import ParametersService from './ParametersService'
import PermissionsService from './PermissionsService'
import ProductInfoService from './ProductInfoService'
import ProductLicensesService from './ProductLicensesService'
import RatesService from './RatesService'
import ResourceActionsService from './ResourceActionsService'
import ResourceHandlersService from './ResourceHandlersService'
import ResourcesService from './ResourcesService'
import ResourceTypesService from './ResourceTypesService'
import RolesService from './RolesService'
import UiExtensionComponentsService from './UiExtensionComponentsService'
import UserService from './UserService'

export default {
  alerts: AlertsService,
  apiToken: ApiTokenService,
  blueprintCategories: BlueprintCategoriesService,
  blueprints: BlueprintsService,
  brandedPortals: BrandedPortalsService,
  citService: CitService,
  environments: EnvironmentsService,
  eula: EulaService,
  groups: GroupsService,
  licensing: LicensingService,
  logging: LoggingService,
  miscellaneousSettings: MiscellaneousSettingsService,
  orders: OrdersService,
  osBuilds: OsBuildsService,
  parameters: ParametersService,
  permissions: PermissionsService,
  productInfo: ProductInfoService,
  productLicenses: ProductLicensesService,
  rates: RatesService,
  resourceActions: ResourceActionsService,
  resourceHandlers: ResourceHandlersService,
  resources: ResourcesService,
  resourceTypes: ResourceTypesService,
  roles: RolesService,
  uiExtensions: UiExtensionComponentsService,
  users: UserService
}
