import cmp from './index.js'

it('should export an object', () => {
  expect(cmp).toBeDefined()
  expect(typeof cmp).toBe('object')
})

const services = [
  'alerts',
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
  'histories',
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
  'resourcesStructured',
  'resourceTypes',
  'roles',
  'system',
  'serverActions',
  'serverSummary',
  'servers',
  'uiExtensionComponents',
  'users'
]

test.each(services)('should export a %s service', (serviceName) => {
  expect(cmp[serviceName]).toBeDefined()
  expect(typeof cmp[serviceName]).toBe('object')
})

test('should only have expected services', () => {
  const keyToTrueReducer = (obj, key) => ({ ...obj, [key]: true })
  const expectedServices = services.reduce(keyToTrueReducer, {})
  const actualServices = Object.keys(cmp).reduce(keyToTrueReducer, {})
  expect(actualServices).toEqual(expectedServices)
})
