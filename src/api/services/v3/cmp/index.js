import AlertsService from './AlertsService'
import ApiTokenService from './ApiTokenService'
import BlueprintCategoriesService from './BlueprintCategoriesService'
import BlueprintFiltersService from './BlueprintFiltersService'
import BlueprintsService from './BlueprintsService'
import BrandedPortalsService from './BrandedPortalsService'
import CitService from './CitService'
import EnvironmentsService from './EnvironmentsService'
import EulaService from './EulaService'
import GroupsService from './GroupsService'
import HistoriesService from './HistoriesService'
import JobsService from './JobsService'
import LicensingService from './LicensingService'
import LoggingService from './LoggingService'
import MiscellaneousSettingsService from './MiscellaneousSettingsService'
import OrdersService from './OrdersService'
import OsBuildsService from './OsBuildsService'
import ParametersService from './ParametersService'
import PermissionsService from './PermissionsService'
import ProductInfoService from './ProductInfoService'
import ProductLicensesService from './ProductLicensesService'
import ApplicationRatesService from './RatesServices/ApplicationRatesService'
import OsBuildRatesService from './RatesServices/OsBuildRatesService'
import ParameterRatesService from './RatesServices/ParameterRatesService'
import RateSettingsService from './RatesServices/RateSettingsService'
import ResourceActionsService from './ResourceActionsService'
import ResourceHandlersService from './ResourceHandlersService'
import ResourcesService from './ResourcesService'
import ResourcesStructuredService from './ResourcesStructuredService'
import ResourceTypesService from './ResourceTypesService'
import RolesService from './RolesService'
import ServerActionsService from './ServerActionsService'
import ServerService from './ServerService'
import ServerSummaryService from './ServerSummaryService'
import SystemService from './SystemService'
import UiExtensionComponentsService from './UiExtensionComponentsService'
import UserService from './UserService'

export default {
  alerts: AlertsService,
  apiToken: ApiTokenService,
  applicationRates: ApplicationRatesService,
  blueprintCategories: BlueprintCategoriesService,
  blueprintFilters: BlueprintFiltersService,
  blueprints: BlueprintsService,
  brandedPortals: BrandedPortalsService,
  citService: CitService,
  environments: EnvironmentsService,
  eula: EulaService,
  groups: GroupsService,
  histories: HistoriesService,
  jobs: JobsService,
  licensing: LicensingService,
  logging: LoggingService,
  miscellaneousSettings: MiscellaneousSettingsService,
  orders: OrdersService,
  osBuildRates: OsBuildRatesService,
  osBuilds: OsBuildsService,
  parameterRates: ParameterRatesService,
  parameters: ParametersService,
  permissions: PermissionsService,
  productInfo: ProductInfoService,
  productLicenses: ProductLicensesService,
  rateSettings: RateSettingsService,
  resourceActions: ResourceActionsService,
  resourceHandlers: ResourceHandlersService,
  resources: ResourcesService,
  resourcesStructured: ResourcesStructuredService,
  resourceTypes: ResourceTypesService,
  roles: RolesService,
  system: SystemService,
  serverActions: ServerActionsService,
  serverSummary: ServerSummaryService,
  servers: ServerService,
  uiExtensionComponents: UiExtensionComponentsService,
  users: UserService
}
