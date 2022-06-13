import cmp from './index.js'

it('should export an object', () => {
  expect(typeof cmp).toBe('object')
})

test.each([
  'apiToken',
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
  'osBuilds',
  'parameters',
  'permissions',
  'productInfo',
  'productLicenses',
  'rates',
  'resourceActions',
  'resourceHandlers',
  'resources',
  'resourceTypes',
  'roles',
  'uiExtensionComponents',
  'users'
])('should export a %s service', (serviceName) => {
  expect(typeof cmp[serviceName]).toBe('object')
})
