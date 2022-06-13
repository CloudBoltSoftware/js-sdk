import cmp from './index.js'

it('should export an object', () => {
  expect(typeof cmp).toBe('object')
})

test.each([
  'apiToken',
  'eula',
  'groups',
  'licensing',
  'productInfo',
  'uiExtensions',
  'users',
  'blueprintCategories',
  'blueprints',
  'osBuilds',
  'productLicenses',
  'roles'
])('should export a %s service', (serviceName) => {
  expect(typeof cmp[serviceName]).toBe('object')
})
