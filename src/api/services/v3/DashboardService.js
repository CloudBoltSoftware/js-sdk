import { baseApi } from '../../baseApi'
import crud from '../../crudOperations'

export default {
  getBlueprints: (options) =>
    crud.getItems('v3/dashboard/blueprints', { page_size: 12, ...options }),

  getEnvironments: (options) =>
    crud.getItems('v3/dashboard/environments', { ...options }),

  getEvents: (options) => crud.getItems('v3/dashboard/events', { ...options }),

  getGroups: (options) =>
    crud.getItems('v3/dashboard/groups', { page_size: 100, ...options }),

  getJobs: (options) =>
    crud.getItemByEndpoint('v3/dashboard/jobs', { ...options }),

  getOrders: (options) =>
    crud.getItems('v3/dashboard/orders', { page_size: 100, ...options }),

  getReports: (options) =>
    crud.getItems('v3/dashboard/reports', { limit: 12, ...options }),

  getServers: (options) =>
    crud.getItems('v3/dashboard/servers', { page_size: 20, ...options }),

  postOrderAction: (url) => baseApi({ method: 'post', url, baseURL: '/' })
}
