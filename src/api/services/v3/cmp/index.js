import AlertsService from './AlertsService'
import ApiTokenService from './ApiTokenService'
import AppletsService from './AppletsService'
import BlueprintCategoriesService from './BlueprintCategoriesService'
import BlueprintFiltersService from './BlueprintFiltersService'
import BlueprintsService from './BlueprintsService'
import BrandedPortalsService from './BrandedPortalsService'
import CatalogBlueprintsService from './CatalogBlueprintsService'
import CitService from './CitService'
import CustomFormsService from './CustomFormsService'
import DataTableSettingsService from './DataTableSettingsService'
import DataTableTypesService from './DataTableTypesService'
import EnvironmentsService from './EnvironmentsService'
import EulaService from './EulaService'
import GroupsService from './GroupsService'
import HistoriesService from './HistoriesService'
import InboundWebHookService from './InboundWebHookService'
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
import ResourceTypesService from './ResourceTypesService'
import ResourcesService from './ResourcesService'
import ResourcesStructuredService from './ResourcesStructuredService'
import RolesService from './RolesService'
import ServerActionsService from './ServerActionsService'
import ServerService from './ServerService'
import ServerSummaryService from './ServerSummaryService'
import SettingsService from './SettingsService'
import SystemService from './SystemService'
import UiExtensionComponentsService from './UiExtensionComponentsService'
import UserService from './UserService'

export default {
  alerts: AlertsService,
  applets: AppletsService,
  apiToken: ApiTokenService,
  applicationRates: ApplicationRatesService,
  blueprintCategories: BlueprintCategoriesService,
  blueprintFilters: BlueprintFiltersService,
  blueprints: BlueprintsService,
  brandedPortals: BrandedPortalsService,
  catalogBlueprints: CatalogBlueprintsService,
  citService: CitService,
  customForms: CustomFormsService,
  dataTableTypes: DataTableTypesService,
  dataTableSettings: DataTableSettingsService,
  environments: EnvironmentsService,
  eula: EulaService,
  groups: GroupsService,
  histories: HistoriesService,
  inboundWebHooks: InboundWebHookService,
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
  settings: SettingsService,
  uiExtensionComponents: UiExtensionComponentsService,
  users: UserService
}
