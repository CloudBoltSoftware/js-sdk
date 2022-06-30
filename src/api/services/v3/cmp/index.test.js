import cmp from './index.js'

it('should export an object', () => {
  expect(typeof cmp).toBe('object')
})

test.each([
  'apiToken',
  'applicationRates',
  'blueprintCategories',
  'blueprints',
  'brandedPortals',
  'citService',
  'environments',
  'eula',
  'groups',
  'jobs',
  'licensing',
  'licensing',
  'logging',
  'miscellaneousSettings',
  'orders',
  'osBuildRates',
  'osBuilds',
  'parameterRates',
  'parameters',
  'permissions',
  'productInfo',
  'productLicenses',
  'rateSettings',
  'resourceActions',
  'resourceHandlers',
  'resources',
  'resourceTypes',
  'roles',
  'system',
  'uiExtensionComponents',
  'users'
])('should export a %s service', (serviceName) => {
  expect(typeof cmp[serviceName]).toBe('object')
})
