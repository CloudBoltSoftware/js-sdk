import AlertsService from './AlertsService'
import ApiTokenService from './ApiTokenService'
import BlueprintCategoriesService from './BlueprintCategoriesService'
import BlueprintsService from './BlueprintsService'
import BrandedPortalsService from './BrandedPortalsService'
import CitService from './CITService'
import EnvironmentsService from './EnvironmentsService'
import EulaService from './EulaService'
import GroupsService from './GroupsService'
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
import ResourceTypesService from './ResourceTypesService'
import RolesService from './RolesService'
import SystemService from './SystemService'
import UiExtensionComponentsService from './UiExtensionComponentsService'
import UserService from './UserService'
import ServerSummaryService from "./ServerSummaryService";
import ServerService from "./ServerService";

export default {
  alerts: AlertsService,
  apiToken: ApiTokenService,
  applicationRates: ApplicationRatesService,
  blueprintCategories: BlueprintCategoriesService,
  blueprints: BlueprintsService,
  brandedPortals: BrandedPortalsService,
  citService: CitService,
  environments: EnvironmentsService,
  eula: EulaService,
  groups: GroupsService,
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
  resourceTypes: ResourceTypesService,
  roles: RolesService,
  system: SystemService,
  uiExtensionComponents: UiExtensionComponentsService,
  users: UserService,
  serverSummary: ServerSummaryService,
  servers: ServerService
}
