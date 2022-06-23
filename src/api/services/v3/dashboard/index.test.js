import dashboard from './index.js'

it('should export an object', () => {
  expect(typeof dashboard).toBe('object')
})

test.each(['widgets'])('should export a %s service', (serviceName) => {
  expect(dashboard[serviceName]).toBeDefined()
  expect(typeof dashboard[serviceName]).toBe('object')
})

test.each([
  'getBlueprints',
  'getEnvironments',
  'getEvents',
  'getGroups',
  'getJobs',
  'getOrders',
  'getReports',
  'getServers',
  'postOrderAction'
])('should export a %s function', (fnName) => {
  expect(dashboard[fnName]).toBeDefined()
  expect(typeof dashboard[fnName]).toBe('function')
})
