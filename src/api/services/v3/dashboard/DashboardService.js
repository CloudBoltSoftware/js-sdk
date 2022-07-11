import { baseApi } from '../../../baseApi'
import crud from '../../../crudOperations'

export default {
  // Retrieve data for specific Widgets
  // Depreciate these as soon as possible. These endpoints aren't well formed.

  /**
   * Retrieve blueprints to display on the Blueprints Widget
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Blueprint objects
   */
  getBlueprints: (options) =>
    crud.getItems('v3/dashboard/blueprints', { page_size: 12, ...options }),

  /**
   * Retrieve environments to display on the Environments Widget
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Environment objects
   */
  getEnvironments: (options) =>
    crud.getItems('v3/dashboard/environments', { ...options }),

  /**
   * Retrieve events to display on the Events Widget
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Event objects
   */
  getEvents: (options) => crud.getItems('v3/dashboard/events', { ...options }),

  /**
   * Retrieve groups to display on the Groups Widget
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Group objects
   */
  getGroups: (options) =>
    crud.getItems('v3/dashboard/groups', { page_size: 100, ...options }),

  /**
   * Retrieve jobs to display on the Jobs Widget
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Job objects
   */
  getJobs: (options) =>
    crud.getItemByEndpoint('v3/dashboard/jobs', { ...options }),

  /**
   * Retrieve Orders to display on the Orders Widget
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Order objects
   */
  getOrders: (options) =>
    crud.getItems('v3/dashboard/orders', { page_size: 100, ...options }),

  /**
   * Retrieve reports to display on the Reports Widget
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Report objects
   */
  getReports: (options) =>
    crud.getItems('v3/dashboard/reports', { limit: 12, ...options }),

  /**
   * Retrieve Servers to display on the Servers Widget
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Server objects
   */
  getServers: (options) =>
    crud.getItems('v3/dashboard/servers', { page_size: 20, ...options }),

  // Misc

  /**
   * Posts to a specified endpoint. Necessary for Order Actions, which specify
   * an arbitrary endpoint, possibly using the v2 api.
   * @param {string} url URL Endpoint to post to
   * @returns {Promise} resolves with an object describing the action result
   */
  postOrderAction: (url) => baseApi({ method: 'post', url, baseURL: '/' })
}
