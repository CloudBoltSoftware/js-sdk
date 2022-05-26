import ApiTokenService from './ApiTokenService'
import EulaService from './EulaService'
import GroupsService from './GroupsService'
import LicensingService from './LicensingService'
import ProductInfoService from './ProductInfoService'
import UiExtensionComponentsService from './UiExtensionComponentsService'
import UserService from './UserService'

export default {
  apiToken: ApiTokenService,
  eula: EulaService,
  groups: GroupsService,
  licensing: LicensingService,
  productInfo: ProductInfoService,
  uiExtensions: UiExtensionComponentsService,
  users: UserService
}
