import cmp from './index.js'

it('should export an object', () => {
  expect(cmp).toBeDefined()
  expect(typeof cmp).toBe('object')
})

test.each([
  'apiToken',
  'applicationRates',
  'blueprintCategories',
  'blueprintFilters',
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
  expect(cmp[serviceName]).toBeDefined()
  expect(typeof cmp[serviceName]).toBe('object')
})
